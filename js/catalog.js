// Canonical ISO/IEC 27001:2022 structure (clause + Annex A control catalogue)
// Titles are short reference labels; not a reproduction of standard text.
const CONTROL_CATALOG = [
  {
    "ref": "4.1",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "title": "Understanding the organisation and its context"
  },
  {
    "ref": "4.2",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "title": "Understanding the needs and expectations of interested parties"
  },
  {
    "ref": "4.3",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "title": "Determining the scope of the ISMS"
  },
  {
    "ref": "4.4",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "title": "Information security management system"
  },
  {
    "ref": "5.1",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "title": "Leadership and commitment"
  },
  {
    "ref": "5.2",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "title": "Information security policy"
  },
  {
    "ref": "5.3",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "title": "Organisational roles, responsibilities and authorities"
  },
  {
    "ref": "6.1.1",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "title": "Actions to address risks and opportunities, general"
  },
  {
    "ref": "6.1.2",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "title": "Information security risk assessment process"
  },
  {
    "ref": "6.1.3",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "title": "Information security risk treatment process"
  },
  {
    "ref": "6.2",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "title": "Information security objectives and planning to achieve them"
  },
  {
    "ref": "6.3",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "title": "Planning of changes to the ISMS"
  },
  {
    "ref": "7.1",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Resources"
  },
  {
    "ref": "7.2",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Competence"
  },
  {
    "ref": "7.3",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Awareness"
  },
  {
    "ref": "7.4",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Communication"
  },
  {
    "ref": "7.5.1",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Documented information, general"
  },
  {
    "ref": "7.5.2",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Creating and updating documented information"
  },
  {
    "ref": "7.5.3",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "title": "Control of documented information"
  },
  {
    "ref": "8.1",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "title": "Operational planning and control"
  },
  {
    "ref": "8.2",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "title": "Information security risk assessment (operational)"
  },
  {
    "ref": "8.3",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "title": "Information security risk treatment (operational)"
  },
  {
    "ref": "9.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "title": "Monitoring, measurement, analysis and evaluation"
  },
  {
    "ref": "9.2.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "title": "Internal audit, general"
  },
  {
    "ref": "9.2.2",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "title": "Internal audit programme"
  },
  {
    "ref": "9.3.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "title": "Management review, general"
  },
  {
    "ref": "9.3.2",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "title": "Management review inputs"
  },
  {
    "ref": "9.3.3",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "title": "Management review results"
  },
  {
    "ref": "10.1",
    "category": "Mandatory Clauses",
    "section": "10 - Improvement",
    "title": "Continual improvement"
  },
  {
    "ref": "10.2",
    "category": "Mandatory Clauses",
    "section": "10 - Improvement",
    "title": "Nonconformity and corrective action"
  },
  {
    "ref": "A.5.1",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Policies for information security"
  },
  {
    "ref": "A.5.2",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information security roles and responsibilities"
  },
  {
    "ref": "A.5.3",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Segregation of duties"
  },
  {
    "ref": "A.5.4",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Management responsibilities"
  },
  {
    "ref": "A.5.5",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Contact with authorities"
  },
  {
    "ref": "A.5.6",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Contact with special interest groups"
  },
  {
    "ref": "A.5.7",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Threat intelligence"
  },
  {
    "ref": "A.5.8",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information security in project management"
  },
  {
    "ref": "A.5.9",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Inventory of information and other associated assets"
  },
  {
    "ref": "A.5.10",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Acceptable use of information and other associated assets"
  },
  {
    "ref": "A.5.11",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Return of assets"
  },
  {
    "ref": "A.5.12",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Classification of information"
  },
  {
    "ref": "A.5.13",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Labelling of information"
  },
  {
    "ref": "A.5.14",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information transfer"
  },
  {
    "ref": "A.5.15",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Access control"
  },
  {
    "ref": "A.5.16",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Identity management"
  },
  {
    "ref": "A.5.17",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Authentication information"
  },
  {
    "ref": "A.5.18",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Access rights"
  },
  {
    "ref": "A.5.19",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information security in supplier relationships"
  },
  {
    "ref": "A.5.20",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Addressing information security within supplier agreements"
  },
  {
    "ref": "A.5.21",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Managing information security in the ICT supply chain"
  },
  {
    "ref": "A.5.22",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Monitoring, review and change management of supplier services"
  },
  {
    "ref": "A.5.23",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information security for use of cloud services"
  },
  {
    "ref": "A.5.24",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information security incident management planning"
  },
  {
    "ref": "A.5.25",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Assessment and decision on information security events"
  },
  {
    "ref": "A.5.26",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Response to information security incidents"
  },
  {
    "ref": "A.5.27",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Learning from information security incidents"
  },
  {
    "ref": "A.5.28",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Collection of evidence"
  },
  {
    "ref": "A.5.29",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Information security during disruption"
  },
  {
    "ref": "A.5.30",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "ICT readiness for business continuity"
  },
  {
    "ref": "A.5.31",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Legal, statutory, regulatory and contractual requirements"
  },
  {
    "ref": "A.5.32",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Intellectual property rights"
  },
  {
    "ref": "A.5.33",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Protection of records"
  },
  {
    "ref": "A.5.34",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Privacy and protection of personal data"
  },
  {
    "ref": "A.5.35",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Independent review of information security"
  },
  {
    "ref": "A.5.36",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Compliance with policies, rules and standards"
  },
  {
    "ref": "A.5.37",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "title": "Documented operating procedures"
  },
  {
    "ref": "A.6.1",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Screening"
  },
  {
    "ref": "A.6.2",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Terms and conditions of employment"
  },
  {
    "ref": "A.6.3",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Information security awareness, education and training"
  },
  {
    "ref": "A.6.4",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Disciplinary process"
  },
  {
    "ref": "A.6.5",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Responsibilities after termination or change of employment"
  },
  {
    "ref": "A.6.6",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Confidentiality or non-disclosure agreements"
  },
  {
    "ref": "A.6.7",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Remote working"
  },
  {
    "ref": "A.6.8",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "title": "Information security event reporting"
  },
  {
    "ref": "A.7.1",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Physical security perimeters"
  },
  {
    "ref": "A.7.2",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Physical entry"
  },
  {
    "ref": "A.7.3",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Securing offices, rooms and facilities"
  },
  {
    "ref": "A.7.4",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Physical security monitoring"
  },
  {
    "ref": "A.7.5",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Protecting against physical and environmental threats"
  },
  {
    "ref": "A.7.6",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Working in secure areas"
  },
  {
    "ref": "A.7.7",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Clear desk and clear screen"
  },
  {
    "ref": "A.7.8",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Equipment siting and protection"
  },
  {
    "ref": "A.7.9",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Security of assets off-premises"
  },
  {
    "ref": "A.7.10",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Storage media"
  },
  {
    "ref": "A.7.11",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Supporting utilities"
  },
  {
    "ref": "A.7.12",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Cabling security"
  },
  {
    "ref": "A.7.13",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Equipment maintenance"
  },
  {
    "ref": "A.7.14",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "title": "Secure disposal or re-use of equipment"
  },
  {
    "ref": "A.8.1",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "User endpoint devices"
  },
  {
    "ref": "A.8.2",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Privileged access rights"
  },
  {
    "ref": "A.8.3",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Information access restriction"
  },
  {
    "ref": "A.8.4",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Access to source code"
  },
  {
    "ref": "A.8.5",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Secure authentication"
  },
  {
    "ref": "A.8.6",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Capacity management"
  },
  {
    "ref": "A.8.7",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Protection against malware"
  },
  {
    "ref": "A.8.8",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Management of technical vulnerabilities"
  },
  {
    "ref": "A.8.9",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Configuration management"
  },
  {
    "ref": "A.8.10",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Information deletion"
  },
  {
    "ref": "A.8.11",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Data masking"
  },
  {
    "ref": "A.8.12",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Data leakage prevention"
  },
  {
    "ref": "A.8.13",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Information backup"
  },
  {
    "ref": "A.8.14",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Redundancy of information processing facilities"
  },
  {
    "ref": "A.8.15",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Logging"
  },
  {
    "ref": "A.8.16",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Monitoring activities"
  },
  {
    "ref": "A.8.17",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Clock synchronization"
  },
  {
    "ref": "A.8.18",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Use of privileged utility programs"
  },
  {
    "ref": "A.8.19",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Installation of software on operational systems"
  },
  {
    "ref": "A.8.20",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Networks security"
  },
  {
    "ref": "A.8.21",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Security of network services"
  },
  {
    "ref": "A.8.22",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Segregation of networks"
  },
  {
    "ref": "A.8.23",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Web filtering"
  },
  {
    "ref": "A.8.24",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Use of cryptography"
  },
  {
    "ref": "A.8.25",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Secure development life cycle"
  },
  {
    "ref": "A.8.26",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Application security requirements"
  },
  {
    "ref": "A.8.27",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Secure system architecture and engineering principles"
  },
  {
    "ref": "A.8.28",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Secure coding"
  },
  {
    "ref": "A.8.29",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Security testing in development and acceptance"
  },
  {
    "ref": "A.8.30",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Outsourced development"
  },
  {
    "ref": "A.8.31",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Separation of development, test and production environments"
  },
  {
    "ref": "A.8.32",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Change management"
  },
  {
    "ref": "A.8.33",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Test information"
  },
  {
    "ref": "A.8.34",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "title": "Protection of information systems during audit testing"
  }
];
