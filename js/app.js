// ============================================================
// PRANTO SHIELD — application logic
// ============================================================

const STATUS = {
  FULL: "Fully Compliant",
  PART: "Partially Compliant",
  NONE: "Not Compliant",
  NA: "Not Applicable",
  UNSET: "Not Assessed",
};
const STATUS_WEIGHT = { [STATUS.FULL]: 1, [STATUS.PART]: 0.5, [STATUS.NONE]: 0 };
const STATUS_COLOR_VAR = {
  [STATUS.FULL]: "--ok",
  [STATUS.PART]: "--warn",
  [STATUS.NONE]: "--bad",
  [STATUS.NA]: "--na",
  [STATUS.UNSET]: "--na",
};
const STATUS_CHIP_CLASS = {
  [STATUS.FULL]: "chip-ok",
  [STATUS.PART]: "chip-warn",
  [STATUS.NONE]: "chip-bad",
  [STATUS.NA]: "chip-na",
  [STATUS.UNSET]: "chip-na",
};

const THEME_BY_SECTION_PREFIX = [
  ["A.5", "Organizational"],
  ["A.6", "People"],
  ["A.7", "Physical"],
  ["A.8", "Technological"],
];

const state = {
  rows: [],          // merged, normalised rows (full catalog + status)
  sourceLabel: "Sample dataset",
};

// ---------------------------------------------------------------
// Local persistence — remediation roadmap & snapshot history
// (This is genuinely new functionality: the original tool only
// ever reflects a single imported file for the current session.
// Pranto Shield additionally tracks remediation work and compliance
// trend over time, entirely in localStorage.)
// ---------------------------------------------------------------

const ROADMAP_KEY = "pranto-shield-roadmap-v1";
const SNAPSHOTS_KEY = "pranto-shield-snapshots-v1";

function loadRoadmapStore() {
  try { return JSON.parse(localStorage.getItem(ROADMAP_KEY)) || {}; } catch { return {}; }
}
function saveRoadmapStore(store) { localStorage.setItem(ROADMAP_KEY, JSON.stringify(store)); }

function loadSnapshots() {
  try { return JSON.parse(localStorage.getItem(SNAPSHOTS_KEY)) || []; } catch { return []; }
}
function saveSnapshots(list) { localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(list)); }

const RISK_SCALE = { Low: 1, Medium: 2, High: 3 };
function riskLevel(likelihood, impact) {
  const score = (RISK_SCALE[likelihood] || 2) * (RISK_SCALE[impact] || 2);
  if (score <= 2) return { label: "Low", cls: "risk-low", score };
  if (score <= 4) return { label: "Medium", cls: "risk-medium", score };
  if (score <= 6) return { label: "High", cls: "risk-high", score };
  return { label: "Critical", cls: "risk-critical", score };
}

// ---------------------------------------------------------------
// Normalisation / merge
// ---------------------------------------------------------------

function normalizeStatus(raw) {
  if (!raw) return STATUS.UNSET;
  const s = String(raw).trim().toLowerCase();
  if (!s) return STATUS.UNSET;
  if (s.startsWith("fully") || s === "compliant" || s === "yes" || s === "c") return STATUS.FULL;
  if (s.startsWith("partial")) return STATUS.PART;
  if (s.startsWith("not compliant") || s === "non-compliant" || s === "no" || s === "nc") return STATUS.NONE;
  if (s.startsWith("not applicable") || s === "n/a" || s === "na") return STATUS.NA;
  if (s.startsWith("not assessed") || s === "pending" || s === "tbd") return STATUS.UNSET;
  return STATUS.UNSET;
}

function themeForSection(section) {
  if (!section) return null;
  for (const [prefix, name] of THEME_BY_SECTION_PREFIX) {
    if (section.startsWith(prefix)) return name;
  }
  return null;
}

// Merge an uploaded/sample dataset (array of {ref, category, section, requirement/compliance/owner/priority/notes})
// against the canonical catalog so every clause/control always appears, defaulting to Not Assessed.
function buildRows(uploadedRows) {
  const byRef = new Map();
  uploadedRows.forEach(r => byRef.set(String(r.ref).trim().toUpperCase(), r));

  const merged = CONTROL_CATALOG.map(c => {
    const u = byRef.get(c.ref.toUpperCase());
    return {
      ref: c.ref,
      category: c.category,
      section: c.section,
      requirement: (u && u.requirement) || `Assessment of: ${c.title}`,
      status: normalizeStatus(u ? u.compliance : null),
      owner: (u && u.owner) || "",
      priority: (u && u.priority) || "",
      notes: (u && u.notes) || "",
      title: c.title,
    };
  });

  // Include any uploaded rows whose ref wasn't found in the catalog (custom/extra controls)
  const catalogRefs = new Set(CONTROL_CATALOG.map(c => c.ref.toUpperCase()));
  uploadedRows.forEach(u => {
    const ref = String(u.ref || "").trim().toUpperCase();
    if (ref && !catalogRefs.has(ref)) {
      merged.push({
        ref: u.ref, category: u.category || "Annex A Controls", section: u.section || "Uncategorised",
        requirement: u.requirement || "", status: normalizeStatus(u.compliance),
        owner: u.owner || "", priority: u.priority || "", notes: u.notes || "", title: u.requirement || u.ref,
      });
    }
  });

  return merged;
}

// ---------------------------------------------------------------
// Stats
// ---------------------------------------------------------------

function weightedCompliance(rows) {
  const scored = rows.filter(r => r.status === STATUS.FULL || r.status === STATUS.PART || r.status === STATUS.NONE);
  if (!scored.length) return null;
  const sum = scored.reduce((s, r) => s + STATUS_WEIGHT[r.status], 0);
  return (sum / scored.length) * 100;
}

function statusCounts(rows) {
  const c = { [STATUS.FULL]: 0, [STATUS.PART]: 0, [STATUS.NONE]: 0, [STATUS.NA]: 0, [STATUS.UNSET]: 0 };
  rows.forEach(r => c[r.status]++);
  return c;
}

function groupBy(rows, keyFn) {
  const m = new Map();
  rows.forEach(r => {
    const k = keyFn(r);
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(r);
  });
  return m;
}

// ---------------------------------------------------------------
// Rendering: Dashboard
// ---------------------------------------------------------------

function renderDashboard() {
  const rows = state.rows;
  const overall = weightedCompliance(rows);
  const counts = statusCounts(rows);
  const gaps = counts[STATUS.NONE];
  const partial = counts[STATUS.PART];
  const unassessed = counts[STATUS.UNSET];

  const kpiRow = document.getElementById("kpiRow");
  kpiRow.innerHTML = "";
  const kpis = [
    { label: "Overall compliance", value: overall === null ? "—" : Math.round(overall) + "%", cls: overall >= 80 ? "ok" : overall >= 50 ? "warn" : "bad", sub: `${rows.length} controls in scope` },
    { label: "Fully compliant", value: counts[STATUS.FULL], cls: "ok", sub: pct(counts[STATUS.FULL], rows.length) + " of total" },
    { label: "Gaps (not compliant)", value: gaps, cls: gaps > 0 ? "bad" : "ok", sub: pct(gaps, rows.length) + " of total" },
    { label: "Not yet assessed", value: unassessed, cls: unassessed > 0 ? "warn" : "ok", sub: pct(unassessed, rows.length) + " of total" },
  ];
  kpis.forEach(k => {
    const el = document.createElement("div");
    el.className = "kpi";
    el.innerHTML = `<div class="kpi-label">${k.label}</div><div class="kpi-value ${k.cls}">${k.value}</div><div class="kpi-sub">${k.sub}</div>`;
    kpiRow.appendChild(el);
  });

  // Radar: 4 annex themes
  const themeNames = ["Organizational", "People", "Physical", "Technological"];
  const themeRows = name => rows.filter(r => themeForSection(r.section) === name);
  const radarPoints = themeNames.map(name => {
    const wc = weightedCompliance(themeRows(name));
    return { label: name, value: wc === null ? 0 : wc };
  });
  Charts.radar(document.getElementById("radarChart"), radarPoints);

  // Donut: status distribution
  document.getElementById("statusTotalNote").textContent = `${rows.length} controls`;
  Charts.donut(document.getElementById("donutChart"), [
    { label: "Fully compliant", value: counts[STATUS.FULL], color: cssv("--ok") },
    { label: "Partially compliant", value: counts[STATUS.PART], color: cssv("--warn") },
    { label: "Not compliant", value: counts[STATUS.NONE], color: cssv("--bad") },
    { label: "Not applicable", value: counts[STATUS.NA], color: cssv("--na") },
    { label: "Not assessed", value: counts[STATUS.UNSET], color: cssv("--text-lo") },
  ]);

  // Bars: mandatory clauses by top-level clause section
  renderBars("clauseBars", groupBy(rows.filter(r => r.category === "Mandatory Clauses"), r => r.section));
  // Bars: annex themes
  renderBars("themeBars", groupBy(rows.filter(r => r.category === "Annex A Controls"), r => themeForSection(r.section) || r.section));

  // Matrix
  renderMatrix(rows);

  // Attention table
  const attention = rows.filter(r => r.status === STATUS.NONE || r.status === STATUS.PART)
    .sort((a, b) => (a.status === STATUS.NONE ? 0 : 1) - (b.status === STATUS.NONE ? 0 : 1));
  fillLedgerTable(document.getElementById("attentionTable").querySelector("tbody"), attention, "No gaps found — every control is fully or partially compliant.");
}

function renderBars(containerId, groupMap) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  const entries = [...groupMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  if (!entries.length) { el.innerHTML = `<p class="muted">No data.</p>`; return; }
  entries.forEach(([label, rows]) => {
    const wc = weightedCompliance(rows);
    const val = wc === null ? 0 : wc;
    const color = val >= 80 ? cssv("--ok") : val >= 50 ? cssv("--warn") : cssv("--bad");
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-row-label" title="${escapeHtml(label)}">${escapeHtml(shorten(label, 22))}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${val}%;background:${color};"></div></div>
      <div class="bar-row-value">${wc === null ? "—" : Math.round(wc) + "%"}</div>
    `;
    el.appendChild(row);
  });
}

function renderMatrix(rows) {
  const el = document.getElementById("matrixGrid");
  el.innerHTML = "";
  rows.forEach(r => {
    const cell = document.createElement("div");
    cell.className = "matrix-cell";
    cell.style.background = cssv(STATUS_COLOR_VAR[r.status]);
    cell.title = `${r.ref} · ${r.section}\n${r.status}`;
    el.appendChild(cell);
  });
  let legend = el.parentElement.querySelector(".matrix-legend");
  if (!legend) {
    legend = document.createElement("div");
    legend.className = "matrix-legend";
    el.parentElement.appendChild(legend);
  }
  legend.innerHTML = `
    <span class="chip chip-ok">Fully compliant</span>
    <span class="chip chip-warn">Partially compliant</span>
    <span class="chip chip-bad">Not compliant</span>
    <span class="chip chip-na">Not applicable / not assessed</span>
  `;
}

// ---------------------------------------------------------------
// Rendering: Clauses / Annex detail views
// ---------------------------------------------------------------

function renderSectionDetail(containerId, category) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  const rows = state.rows.filter(r => r.category === category);
  const bySection = groupBy(rows, r => r.section);
  const sections = [...bySection.keys()].sort();
  sections.forEach(section => {
    const secRows = bySection.get(section).sort((a, b) => a.ref.localeCompare(b.ref, undefined, { numeric: true }));
    const wc = weightedCompliance(secRows);
    const block = document.createElement("div");
    block.className = "panel section-block";
    block.innerHTML = `
      <div class="section-title-row">
        <h3>${escapeHtml(section)}</h3>
        <span class="section-score">${wc === null ? "—" : Math.round(wc) + "% compliant"}</span>
      </div>
    `;
    secRows.forEach(r => {
      const row = document.createElement("div");
      row.className = "control-row";
      const metaBits = [];
      if (r.owner) metaBits.push(`Owner: ${escapeHtml(r.owner)}`);
      if (r.priority) metaBits.push(`Priority: ${escapeHtml(r.priority)}`);
      if (r.notes) metaBits.push(escapeHtml(r.notes));
      row.innerHTML = `
        <div class="ref-cell">${escapeHtml(r.ref)}</div>
        <div>
          <div class="control-req">${escapeHtml(r.requirement)}</div>
          ${metaBits.length ? `<div class="control-meta">${metaBits.join(" · ")}</div>` : ""}
        </div>
        <span class="chip ${STATUS_CHIP_CLASS[r.status]}">${r.status}</span>
      `;
      block.appendChild(row);
    });
    el.appendChild(block);
  });
}

// ---------------------------------------------------------------
// Rendering: Explorer
// ---------------------------------------------------------------

function populateExplorerFilters() {
  const catSel = document.getElementById("explorerCategory");
  const secSel = document.getElementById("explorerSection");
  const cats = [...new Set(state.rows.map(r => r.category))].sort();
  const secs = [...new Set(state.rows.map(r => r.section))].sort();
  catSel.innerHTML = `<option value="">All categories</option>` + cats.map(c => `<option>${escapeHtml(c)}</option>`).join("");
  secSel.innerHTML = `<option value="">All sections</option>` + secs.map(s => `<option>${escapeHtml(s)}</option>`).join("");
}

function currentExplorerFilter() {
  const q = document.getElementById("explorerSearch").value.trim().toLowerCase();
  const cat = document.getElementById("explorerCategory").value;
  const sec = document.getElementById("explorerSection").value;
  const status = document.getElementById("explorerStatus").value;
  return state.rows.filter(r => {
    if (cat && r.category !== cat) return false;
    if (sec && r.section !== sec) return false;
    if (status && r.status !== status) return false;
    if (q && !(r.ref.toLowerCase().includes(q) || r.requirement.toLowerCase().includes(q))) return false;
    return true;
  });
}

function renderExplorer() {
  const rows = currentExplorerFilter();
  fillLedgerTable(document.getElementById("explorerTable").querySelector("tbody"), rows, "No controls match this filter.");
  document.getElementById("explorerCount").textContent = `${rows.length} of ${state.rows.length} controls shown`;
}

function fillLedgerTable(tbody, rows, emptyMsg) {
  tbody.innerHTML = "";
  if (!rows.length) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="4">${emptyMsg}</td></tr>`;
    return;
  }
  rows.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="ref-cell">${escapeHtml(r.ref)}</td>
      <td class="section-cell">${escapeHtml(r.section)}</td>
      <td>${escapeHtml(r.requirement)}</td>
      <td><span class="chip ${STATUS_CHIP_CLASS[r.status]}">${r.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function exportExplorerCSV() {
  const rows = currentExplorerFilter();
  const header = ["Ref", "Category", "Section", "Requirement", "Compliance", "Owner", "Priority", "Notes"];
  const lines = [header.join(",")];
  rows.forEach(r => {
    lines.push([r.ref, r.category, r.section, r.requirement, r.status, r.owner, r.priority, r.notes]
      .map(csvEscape).join(","));
  });
  downloadFile("pranto-shield-controls-export.csv", lines.join("\n"), "text/csv");
}

// ---------------------------------------------------------------
// Rendering: Gap analysis (rule-based, no external calls)
// ---------------------------------------------------------------

function renderGapAnalysis() {
  const rows = state.rows;
  const overall = weightedCompliance(rows);
  const counts = statusCounts(rows);

  const summary = document.getElementById("gapSummary");
  summary.innerHTML = "";
  [
    { v: counts[STATUS.NONE], l: "Open gaps" },
    { v: counts[STATUS.PART], l: "Partial controls" },
    { v: overall === null ? "—" : Math.round(overall) + "%", l: "Overall compliance" },
  ].forEach(s => {
    const el = document.createElement("div");
    el.className = "gap-stat";
    el.innerHTML = `<div class="gap-stat-value">${s.v}</div><div class="gap-stat-label">${s.l}</div>`;
    summary.appendChild(el);
  });

  // Weakest sections (by weighted compliance, min 1 scored item)
  const bySection = groupBy(rows, r => r.section);
  const sectionScores = [...bySection.entries()]
    .map(([section, secRows]) => ({ section, wc: weightedCompliance(secRows), count: secRows.length }))
    .filter(s => s.wc !== null)
    .sort((a, b) => a.wc - b.wc);

  const findings = document.getElementById("gapFindings");
  findings.innerHTML = "";

  const addFinding = (icon, title, body) => {
    const f = document.createElement("div");
    f.className = "finding";
    f.innerHTML = `<div class="finding-icon">${icon}</div><div><div class="finding-title">${title}</div><div class="finding-body">${body}</div></div>`;
    findings.appendChild(f);
  };

  if (overall !== null && overall < 60) {
    addFinding("!!", "Overall compliance is below target", `At ${Math.round(overall)}%, the assessed control set falls short of a typical 80% pre-audit readiness threshold. Prioritise the weakest sections below before scheduling a certification audit.`);
  }

  sectionScores.slice(0, 3).forEach(s => {
    if (s.wc < 70) {
      addFinding("▸", `${s.section} needs attention`, `Weighted compliance is ${Math.round(s.wc)}% across ${s.count} control${s.count === 1 ? "" : "s"} — the weakest area in the current assessment.`);
    }
  });

  if (counts[STATUS.UNSET] > 0) {
    addFinding("▸", `${counts[STATUS.UNSET]} control${counts[STATUS.UNSET] === 1 ? "" : "s"} not yet assessed`, `These controls have no recorded compliance status and are excluded from the weighted score. Complete the assessment to get an accurate picture.`);
  }

  const highPriorityGaps = rows.filter(r => r.status === STATUS.NONE && r.priority === "High");
  if (highPriorityGaps.length) {
    addFinding("!!", `${highPriorityGaps.length} high-priority gap${highPriorityGaps.length === 1 ? "" : "s"}`, `Non-compliant controls flagged High priority: ${highPriorityGaps.slice(0, 5).map(r => r.ref).join(", ")}${highPriorityGaps.length > 5 ? "…" : ""}.`);
  }

  if (!findings.children.length) {
    addFinding("✓", "No material gaps detected", "All assessed controls are fully or partially compliant, and no section falls below the review threshold.");
  }
}

// ---------------------------------------------------------------
// Rendering: Remediation roadmap (Kanban, risk-scored, persisted)
// ---------------------------------------------------------------

function renderRoadmap() {
  const store = loadRoadmapStore();
  const gapRows = state.rows.filter(r => r.status === STATUS.NONE || r.status === STATUS.PART);

  const cols = { "Backlog": [], "In Progress": [], "Resolved": [] };
  gapRows.forEach(r => {
    const entry = store[r.ref] || { likelihood: "Medium", impact: "Medium", dueDate: "", kanbanStatus: "Backlog" };
    const risk = riskLevel(entry.likelihood, entry.impact);
    (cols[entry.kanbanStatus] || cols["Backlog"]).push({ row: r, entry, risk });
  });
  // sort each column by risk score, highest first
  Object.values(cols).forEach(list => list.sort((a, b) => b.risk.score - a.risk.score));

  document.getElementById("countBacklog").textContent = cols["Backlog"].length;
  document.getElementById("countInProgress").textContent = cols["In Progress"].length;
  document.getElementById("countResolved").textContent = cols["Resolved"].length;

  const colEls = { "Backlog": document.getElementById("colBacklog"), "In Progress": document.getElementById("colInProgress"), "Resolved": document.getElementById("colResolved") };
  Object.entries(colEls).forEach(([key, el]) => {
    el.innerHTML = "";
    if (!cols[key].length) { el.innerHTML = `<div class="kanban-empty">Nothing here</div>`; return; }
    cols[key].forEach(item => el.appendChild(buildRoadmapCard(item)));
  });
}

function buildRoadmapCard({ row, entry, risk }) {
  const card = document.createElement("div");
  card.className = "kanban-card";
  card.innerHTML = `
    <div class="kanban-card-ref">${escapeHtml(row.ref)} · ${escapeHtml(row.section)}</div>
    <div class="kanban-card-title">${escapeHtml(row.requirement)}</div>
    <div class="kanban-card-row">
      <span class="risk-badge ${risk.cls}">${risk.label} risk</span>
      <span class="chip ${STATUS_CHIP_CLASS[row.status]}">${row.status}</span>
    </div>
    <div class="kanban-card-row">
      <select data-field="likelihood" title="Likelihood">
        ${["Low", "Medium", "High"].map(v => `<option ${entry.likelihood === v ? "selected" : ""}>${v}</option>`).join("")}
      </select>
      <select data-field="impact" title="Impact">
        ${["Low", "Medium", "High"].map(v => `<option ${entry.impact === v ? "selected" : ""}>${v}</option>`).join("")}
      </select>
    </div>
    <div class="kanban-card-row">
      <input type="date" data-field="dueDate" value="${entry.dueDate || ""}" title="Due date" />
      <select data-field="kanbanStatus" title="Move to">
        ${["Backlog", "In Progress", "Resolved"].map(v => `<option ${entry.kanbanStatus === v ? "selected" : ""}>${v}</option>`).join("")}
      </select>
    </div>
  `;
  card.querySelectorAll("[data-field]").forEach(input => {
    input.addEventListener("change", () => {
      const store = loadRoadmapStore();
      const current = store[row.ref] || { likelihood: "Medium", impact: "Medium", dueDate: "", kanbanStatus: "Backlog" };
      current[input.dataset.field] = input.value;
      store[row.ref] = current;
      saveRoadmapStore(store);
      renderRoadmap();
    });
  });
  return card;
}

// ---------------------------------------------------------------
// Rendering: History & trend (snapshots persisted locally)
// ---------------------------------------------------------------

function renderHistory() {
  const snapshots = loadSnapshots().sort((a, b) => a.timestamp - b.timestamp);
  const overall = weightedCompliance(state.rows);

  // trend chart: all saved snapshots + current live state as the last point
  const points = snapshots.map(s => ({ label: new Date(s.timestamp).toLocaleDateString(undefined, { month: "short", day: "numeric" }), value: s.overall }));
  points.push({ label: "Now", value: overall === null ? 0 : overall });
  Charts.line(document.getElementById("trendChart"), points);

  const tbody = document.getElementById("snapshotTable").querySelector("tbody");
  tbody.innerHTML = "";
  if (!snapshots.length) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="6">No snapshots saved yet — save the current assessment above to start tracking trend.</td></tr>`;
    return;
  }
  snapshots.slice().reverse().forEach((s, idx) => {
    const chronoIdx = snapshots.length - 1 - idx;
    const prev = chronoIdx > 0 ? snapshots[chronoIdx - 1] : null;
    let deltaHtml = `<span class="delta-flat">—</span>`;
    if (prev) {
      const d = Math.round(s.overall - prev.overall);
      const cls = d > 0 ? "delta-up" : d < 0 ? "delta-down" : "delta-flat";
      deltaHtml = `<span class="${cls}">${d > 0 ? "+" : ""}${d}%</span>`;
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="section-cell">${new Date(s.timestamp).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}</td>
      <td>${escapeHtml(s.label || "Untitled snapshot")}</td>
      <td>${s.controlCount}</td>
      <td>${Math.round(s.overall)}%</td>
      <td>${deltaHtml}</td>
      <td><button class="btn btn-ghost" data-del="${s.id}" style="padding:4px 10px;font-size:11px;">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll("[data-del]").forEach(btn => {
    btn.addEventListener("click", () => {
      const list = loadSnapshots().filter(s => s.id !== btn.dataset.del);
      saveSnapshots(list);
      renderHistory();
    });
  });
}

function saveCurrentSnapshot(label) {
  const overall = weightedCompliance(state.rows);
  const list = loadSnapshots();
  list.push({
    id: "snap_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    timestamp: Date.now(),
    label: label || state.sourceLabel,
    overall: overall === null ? 0 : overall,
    controlCount: state.rows.length,
  });
  saveSnapshots(list);
}

// ---------------------------------------------------------------
// Backup & restore (full local state, portable JSON)
// ---------------------------------------------------------------

function exportBackup() {
  const payload = {
    format: "pranto-shield-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    sourceLabel: state.sourceLabel,
    rows: state.rows.map(r => ({ ref: r.ref, category: r.category, section: r.section, requirement: r.requirement, compliance: r.status, owner: r.owner, priority: r.priority, notes: r.notes })),
    roadmap: loadRoadmapStore(),
    snapshots: loadSnapshots(),
  };
  downloadFile("pranto-shield-backup.json", JSON.stringify(payload, null, 2), "application/json");
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const payload = JSON.parse(e.target.result);
      if (payload.format !== "pranto-shield-backup") throw new Error('Not a recognised Pranto Shield backup file (missing "pranto-shield-backup" marker).');
      if (Array.isArray(payload.rows)) applyDataset(payload.rows, "Restored backup");
      if (payload.roadmap) saveRoadmapStore(payload.roadmap);
      if (Array.isArray(payload.snapshots)) saveSnapshots(payload.snapshots);
      renderAll();
      alert("Backup restored.");
    } catch (err) {
      alert("Could not restore this backup: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetLocalData() {
  if (!confirm("This clears the saved remediation roadmap and snapshot history from this browser. Continue?")) return;
  localStorage.removeItem(ROADMAP_KEY);
  localStorage.removeItem(SNAPSHOTS_KEY);
  renderAll();
}

// ---------------------------------------------------------------
// Rendering: Executive report
// ---------------------------------------------------------------

function renderReport() {
  document.getElementById("reportMeta").textContent = `Generated ${new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} · Source: ${state.sourceLabel} · ${state.rows.length} controls`;

  const rows = state.rows;
  const overall = weightedCompliance(rows);
  const counts = statusCounts(rows);
  const kpis = document.getElementById("reportKpis");
  kpis.innerHTML = "";
  [
    ["Overall compliance", overall === null ? "—" : Math.round(overall) + "%"],
    ["Fully compliant", counts[STATUS.FULL]],
    ["Partially compliant", counts[STATUS.PART]],
    ["Not compliant", counts[STATUS.NONE]],
  ].forEach(([label, value]) => {
    const el = document.createElement("div");
    el.className = "kpi";
    el.innerHTML = `<div class="kpi-label">${label}</div><div class="kpi-value">${value}</div>`;
    kpis.appendChild(el);
  });

  const bySection = groupBy(rows, r => r.section);
  const tbody = document.getElementById("reportTable").querySelector("tbody");
  tbody.innerHTML = "";
  [...bySection.entries()].sort((a, b) => a[0].localeCompare(b[0])).forEach(([section, secRows]) => {
    const c = statusCounts(secRows);
    const wc = weightedCompliance(secRows);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="section-cell">${escapeHtml(section)}</td>
      <td>${escapeHtml(secRows[0].category)}</td>
      <td>${secRows.length}</td>
      <td>${c[STATUS.FULL]}</td>
      <td>${c[STATUS.PART]}</td>
      <td>${c[STATUS.NONE]}</td>
      <td>${wc === null ? "—" : Math.round(wc) + "%"}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ---------------------------------------------------------------
// Upload / parsing
// ---------------------------------------------------------------

const HEADER_ALIASES = {
  category: ["category"],
  section: ["section"],
  ref: ["standard ref", "standardref", "ref", "reference", "control ref", "clause"],
  requirement: ["assessment question", "requirement", "question", "control", "description"],
  compliance: ["compliance", "status", "compliance status"],
  notes: ["notes", "note", "comment", "comments"],
  owner: ["owner", "control owner", "responsible"],
  priority: ["priority", "risk priority"],
};

function normalizeHeaderKey(h) {
  return String(h || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function mapHeaders(headerRow) {
  const map = {};
  headerRow.forEach((h, idx) => {
    const norm = normalizeHeaderKey(h);
    for (const field in HEADER_ALIASES) {
      if (HEADER_ALIASES[field].includes(norm)) map[field] = idx;
    }
  });
  return map;
}

function parseWorkbookRows(rowsAoA) {
  const log = [];
  if (!rowsAoA.length) { log.push({ level: "bad", msg: "The file appears to be empty." }); return { rows: [], log }; }

  const headerIdx = 0;
  const headerMap = mapHeaders(rowsAoA[headerIdx]);
  if (headerMap.ref === undefined || headerMap.compliance === undefined) {
    log.push({ level: "bad", msg: `Could not find required columns "Standard Ref" and "Compliance". Found headers: ${rowsAoA[headerIdx].join(", ")}` });
    return { rows: [], log };
  }
  log.push({ level: "ok", msg: `Matched columns: ${Object.keys(headerMap).join(", ")}` });

  const seenRefs = new Set();
  const out = [];
  let blanks = 0, dupes = 0, unknownCompliance = 0;

  for (let i = 1; i < rowsAoA.length; i++) {
    const row = rowsAoA[i];
    if (!row || row.every(c => c === undefined || c === null || String(c).trim() === "")) continue;
    const ref = headerMap.ref !== undefined ? String(row[headerMap.ref] ?? "").trim() : "";
    const requirement = headerMap.requirement !== undefined ? String(row[headerMap.requirement] ?? "").trim() : "";
    const complianceRaw = headerMap.compliance !== undefined ? String(row[headerMap.compliance] ?? "").trim() : "";

    if (!ref) { blanks++; continue; }
    if (seenRefs.has(ref.toUpperCase())) dupes++;
    seenRefs.add(ref.toUpperCase());

    const normalizedStatus = normalizeStatus(complianceRaw);
    if (complianceRaw && normalizedStatus === STATUS.UNSET && normalizeHeaderKey(complianceRaw) !== "not assessed") unknownCompliance++;

    out.push({
      ref,
      category: headerMap.category !== undefined ? String(row[headerMap.category] ?? "").trim() : "",
      section: headerMap.section !== undefined ? String(row[headerMap.section] ?? "").trim() : "",
      requirement,
      compliance: complianceRaw,
      notes: headerMap.notes !== undefined ? String(row[headerMap.notes] ?? "").trim() : "",
      owner: headerMap.owner !== undefined ? String(row[headerMap.owner] ?? "").trim() : "",
      priority: headerMap.priority !== undefined ? String(row[headerMap.priority] ?? "").trim() : "",
    });
  }

  log.push({ level: "ok", msg: `Parsed ${out.length} control rows.` });
  if (blanks) log.push({ level: "warn", msg: `Skipped ${blanks} row(s) with a blank reference.` });
  if (dupes) log.push({ level: "warn", msg: `Found ${dupes} duplicate control reference(s) — later rows overwrite earlier ones.` });
  if (unknownCompliance) log.push({ level: "warn", msg: `${unknownCompliance} row(s) had an unrecognised compliance value and were set to "Not Assessed".` });

  return { rows: out, log };
}

function handleWorkbookFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: "array" });
      let sheetName = wb.SheetNames.find(n => normalizeHeaderKey(n).includes("requirement")) || wb.SheetNames[0];
      const sheet = wb.Sheets[sheetName];
      const aoa = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });
      const { rows, log } = parseWorkbookRows(aoa);
      showParseLog(log, `Sheet: "${sheetName}"`);
      if (rows.length) applyDataset(rows, `Imported · ${file.name}`);
    } catch (err) {
      showParseLog([{ level: "bad", msg: "Could not read this file: " + err.message }], "");
    }
  };
  reader.readAsArrayBuffer(file);
}

function showParseLog(log, prefix) {
  const panel = document.getElementById("parseLogPanel");
  const el = document.getElementById("parseLog");
  panel.style.display = "block";
  const lines = [];
  if (prefix) lines.push(`<span class="ok">${prefix}</span>`);
  log.forEach(l => lines.push(`<span class="${l.level}">${l.level === "ok" ? "✓" : l.level === "warn" ? "△" : "✕"} ${escapeHtml(l.msg)}</span>`));
  el.innerHTML = lines.join("\n");
}

function applyDataset(rawRows, label) {
  state.rows = buildRows(rawRows);
  state.sourceLabel = label;
  document.getElementById("datasetPill").textContent = `${label} · ${state.rows.length} controls`;
  renderAll();
}

function clearData() {
  applyDataset([], "Empty dataset — import a workbook");
  document.getElementById("parseLogPanel").style.display = "none";
}

// ---------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------

function cssv(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
function pct(n, total) { return total ? Math.round((n / total) * 100) + "%" : "0%"; }
function shorten(s, n) { return s.length > n ? s.slice(0, n - 1) + "…" : s; }
function escapeHtml(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function csvEscape(v) { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; }
function downloadFile(name, content, mime) {
  const blob = new Blob([content], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------

const VIEW_TITLES = {
  dashboard: "Compliance Register",
  upload: "Import Workbook",
  clauses: "Clauses 4–10",
  annex: "Annex A Themes",
  explorer: "Control Explorer",
  gaps: "Gap Analysis",
  roadmap: "Remediation Roadmap",
  history: "History & Trend",
  report: "Executive Report",
  settings: "Settings",
};

function goToView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById("view-" + view).classList.remove("hidden");
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  document.getElementById("crumbView").textContent = VIEW_TITLES[view];
  if (view === "clauses") renderSectionDetail("clausesDetail", "Mandatory Clauses");
  if (view === "annex") renderSectionDetail("annexDetail", "Annex A Controls");
  if (view === "explorer") { populateExplorerFilters(); renderExplorer(); }
  if (view === "gaps") renderGapAnalysis();
  if (view === "roadmap") renderRoadmap();
  if (view === "history") renderHistory();
  if (view === "report") renderReport();
  if (view === "dashboard") renderDashboard();
}

function renderAll() {
  const active = document.querySelector(".nav-item.active");
  goToView(active ? active.dataset.view : "dashboard");
}

// ---------------------------------------------------------------
// Theme
// ---------------------------------------------------------------

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("pranto-shield-theme", theme);
  // re-render charts so they pick up new CSS var colors
  renderAll();
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  applyTheme(cur === "dark" ? "light" : "dark");
}

// ---------------------------------------------------------------
// Init
// ---------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("pranto-shield-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => goToView(btn.dataset.view));
  });
  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => goToView(btn.dataset.goto));
  });

  document.getElementById("themeToggleTop").addEventListener("click", toggleTheme);
  document.getElementById("themeToggleSettings").addEventListener("click", toggleTheme);

  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("fileInput");
  dropzone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", e => { if (e.target.files[0]) handleWorkbookFile(e.target.files[0]); });
  ["dragenter", "dragover"].forEach(evt => dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.add("dragover"); }));
  ["dragleave", "drop"].forEach(evt => dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.remove("dragover"); }));
  dropzone.addEventListener("drop", e => { if (e.dataTransfer.files[0]) handleWorkbookFile(e.dataTransfer.files[0]); });

  document.getElementById("loadSampleBtn").addEventListener("click", () => {
    applyDataset(SAMPLE_ASSESSMENT, "Sample dataset");
    showParseLog([{ level: "ok", msg: `Loaded ${SAMPLE_ASSESSMENT.length} sample control rows.` }], "Sample assessment");
  });
  document.getElementById("clearDataBtn").addEventListener("click", clearData);

  ["explorerSearch", "explorerCategory", "explorerSection", "explorerStatus"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderExplorer);
  });
  document.getElementById("explorerExportBtn").addEventListener("click", exportExplorerCSV);
  document.getElementById("printReportBtn").addEventListener("click", () => window.print());

  document.getElementById("saveSnapshotBtn").addEventListener("click", () => {
    const label = document.getElementById("snapshotLabel").value.trim();
    saveCurrentSnapshot(label);
    document.getElementById("snapshotLabel").value = "";
    renderHistory();
  });

  document.getElementById("exportBackupBtn").addEventListener("click", exportBackup);
  document.getElementById("importBackupBtn").addEventListener("click", () => document.getElementById("importBackupInput").click());
  document.getElementById("importBackupInput").addEventListener("change", e => { if (e.target.files[0]) importBackup(e.target.files[0]); });
  document.getElementById("resetLocalBtn").addEventListener("click", resetLocalData);

  // initial load
  applyDataset(SAMPLE_ASSESSMENT, "Sample dataset");
  goToView("dashboard");
});
