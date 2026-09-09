// Lightweight SVG chart helpers — no charting library, no dependencies. (Pranto Shield)
const Charts = (() => {

  const NS = "http://www.w3.org/2000/svg";
  const svgEl = (tag, attrs = {}) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  };

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // ---- Radar chart: array of {label, value(0-100)} ----
  function radar(container, points) {
    container.innerHTML = "";
    const size = 300, cx = size / 2, cy = size / 2, R = 100;
    const n = points.length;
    const svg = svgEl("svg", { viewBox: `0 0 ${size} ${size}`, width: "100%", height: "260" });

    const grid = cssVar('--border') || '#333';
    const accentColor = cssVar('--accent') || '#2DD4C7';
    const textMid = cssVar('--text-mid') || '#999';

    // rings
    [0.25, 0.5, 0.75, 1].forEach(f => {
      const pts = points.map((_, i) => angPoint(i, n, f * R, cx, cy)).map(p => p.join(",")).join(" ");
      svg.appendChild(svgEl("polygon", { points: pts, fill: "none", stroke: grid, "stroke-width": "1" }));
    });
    // spokes + labels
    points.forEach((p, i) => {
      const [x, y] = angPoint(i, n, R, cx, cy);
      svg.appendChild(svgEl("line", { x1: cx, y1: cy, x2: x, y2: y, stroke: grid, "stroke-width": "1" }));
      const [lx, ly] = angPoint(i, n, R + 26, cx, cy);
      const t = svgEl("text", { x: lx, y: ly, "text-anchor": "middle", "font-size": "11", fill: textMid, "font-family": "IBM Plex Sans, sans-serif" });
      t.textContent = p.label;
      svg.appendChild(t);
      const t2 = svgEl("text", { x: lx, y: ly + 13, "text-anchor": "middle", "font-size": "11", fill: accentColor, "font-family": "IBM Plex Mono, monospace", "font-weight": "600" });
      t2.textContent = Math.round(p.value) + "%";
      svg.appendChild(t2);
    });
    // data polygon
    const dataPts = points.map((p, i) => angPoint(i, n, (p.value / 100) * R, cx, cy)).map(pt => pt.join(",")).join(" ");
    svg.appendChild(svgEl("polygon", { points: dataPts, fill: accentColor, "fill-opacity": "0.22", stroke: accentColor, "stroke-width": "2" }));
    points.forEach((p, i) => {
      const [x, y] = angPoint(i, n, (p.value / 100) * R, cx, cy);
      svg.appendChild(svgEl("circle", { cx: x, cy: y, r: 3, fill: accentColor }));
    });

    container.appendChild(svg);
  }
  function angPoint(i, n, r, cx, cy) {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  // ---- Donut chart: array of {label, value, color} ----
  function donut(container, segments) {
    container.innerHTML = "";
    const total = segments.reduce((s, x) => s + x.value, 0) || 1;
    const size = 220, cx = size / 2, cy = size / 2, R = 88, r2 = 54;
    const svg = svgEl("svg", { viewBox: `0 0 ${size} ${size}`, width: "220", height: "220" });
    let angle = -Math.PI / 2;

    if (total === 0 || segments.every(s => s.value === 0)) {
      svg.appendChild(svgEl("circle", { cx, cy, r: R, fill: "none", stroke: cssVar('--border'), "stroke-width": 20 }));
    } else {
      segments.forEach(seg => {
        if (seg.value <= 0) return;
        const frac = seg.value / total;
        const a0 = angle, a1 = angle + frac * Math.PI * 2;
        angle = a1;
        const large = (a1 - a0) > Math.PI ? 1 : 0;
        const p0 = [cx + R * Math.cos(a0), cy + R * Math.sin(a0)];
        const p1 = [cx + R * Math.cos(a1), cy + R * Math.sin(a1)];
        const q0 = [cx + r2 * Math.cos(a1), cy + r2 * Math.sin(a1)];
        const q1 = [cx + r2 * Math.cos(a0), cy + r2 * Math.sin(a0)];
        const d = `M ${p0[0]},${p0[1]} A ${R},${R} 0 ${large} 1 ${p1[0]},${p1[1]} L ${q0[0]},${q0[1]} A ${r2},${r2} 0 ${large} 0 ${q1[0]},${q1[1]} Z`;
        svg.appendChild(svgEl("path", { d, fill: seg.color }));
      });
    }
    const label = svgEl("text", { x: cx, y: cy - 3, "text-anchor": "middle", "font-size": "24", "font-weight": "700", fill: cssVar('--text-hi'), "font-family": "Source Serif 4, serif" });
    label.textContent = total;
    svg.appendChild(label);
    const sub = svgEl("text", { x: cx, y: cy + 15, "text-anchor": "middle", "font-size": "10", fill: cssVar('--text-lo'), "font-family": "IBM Plex Sans, sans-serif" });
    sub.textContent = "controls";
    svg.appendChild(sub);

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "24px";
    wrap.style.flexWrap = "wrap";
    wrap.style.justifyContent = "center";
    wrap.appendChild(svg);

    const legend = document.createElement("div");
    legend.style.display = "flex";
    legend.style.flexDirection = "column";
    legend.style.gap = "8px";
    segments.forEach(seg => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "8px";
      row.style.fontSize = "12.5px";
      row.innerHTML = `<span style="width:9px;height:9px;border-radius:50%;background:${seg.color};display:inline-block;flex-shrink:0;"></span>
        <span style="color:var(--text-mid);min-width:110px;">${seg.label}</span>
        <span style="font-family:'IBM Plex Mono',monospace;color:var(--text-hi);">${seg.value}</span>`;
      legend.appendChild(row);
    });
    wrap.appendChild(legend);
    container.appendChild(wrap);
  }

  // ---- Line chart: array of {label, value(0-100)} — used for compliance trend over time ----
  function line(container, points, opts = {}) {
    container.innerHTML = "";
    if (!points.length) { container.innerHTML = `<p class="muted">No history yet — save a snapshot to start tracking trend.</p>`; return; }
    const w = 560, h = 220, padL = 34, padR = 16, padT = 16, padB = 30;
    const innerW = w - padL - padR, innerH = h - padT - padB;
    const svg = svgEl("svg", { viewBox: `0 0 ${w} ${h}`, width: "100%", height: "220" });
    const grid = cssVar('--border') || '#333';
    const accentColor = cssVar('--accent') || '#2DD4C7';
    const textLo = cssVar('--text-lo') || '#888';

    // gridlines + y labels
    [0, 25, 50, 75, 100].forEach(v => {
      const y = padT + innerH - (v / 100) * innerH;
      svg.appendChild(svgEl("line", { x1: padL, y1: y, x2: w - padR, y2: y, stroke: grid, "stroke-width": "1" }));
      const t = svgEl("text", { x: padL - 8, y: y + 3, "text-anchor": "end", "font-size": "9.5", fill: textLo, "font-family": "IBM Plex Mono, monospace" });
      t.textContent = v;
      svg.appendChild(t);
    });

    const n = points.length;
    const xFor = i => n === 1 ? padL + innerW / 2 : padL + (i / (n - 1)) * innerW;
    const yFor = v => padT + innerH - (Math.max(0, Math.min(100, v)) / 100) * innerH;

    const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(i)},${yFor(p.value)}`).join(" ");
    svg.appendChild(svgEl("path", { d: path, fill: "none", stroke: accentColor, "stroke-width": "2.5", "stroke-linejoin": "round", "stroke-linecap": "round" }));

    points.forEach((p, i) => {
      const x = xFor(i), y = yFor(p.value);
      svg.appendChild(svgEl("circle", { cx: x, cy: y, r: 3.5, fill: accentColor }));
      const lbl = svgEl("text", { x, y: h - padB + 14, "text-anchor": "middle", "font-size": "9.5", fill: textLo, "font-family": "IBM Plex Sans, sans-serif" });
      lbl.textContent = p.label;
      svg.appendChild(lbl);
      const val = svgEl("text", { x, y: y - 9, "text-anchor": "middle", "font-size": "10", fill: cssVar('--text-hi'), "font-family": "IBM Plex Mono, monospace", "font-weight": "600" });
      val.textContent = Math.round(p.value) + "%";
      svg.appendChild(val);
    });

    container.appendChild(svg);
  }

  return { radar, donut, line };
})();
