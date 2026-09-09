// Sample ISO/IEC 27001:2022 gap-assessment dataset (fictional demo data)
const SAMPLE_ASSESSMENT = [
  {
    "ref": "4.1",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the ISMS requirement for understanding the organisation and its context, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "4.2",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the ISMS requirement for understanding the needs and expectations of interested parties, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "4.3",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the ISMS requirement for determining the scope of the isms, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "4.4",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the ISMS requirement for information security management system, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.1",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "requirement": "Has the organisation addressed the ISMS requirement for leadership and commitment, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Gap identified during review \u2014 leadership and commitment not yet formally established. Remediation plan required."
  },
  {
    "ref": "5.2",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "requirement": "Has the organisation addressed the ISMS requirement for information security policy, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.3",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "requirement": "Has the organisation addressed the ISMS requirement for organisational roles, responsibilities and authorities, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.1.1",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the ISMS requirement for actions to address risks and opportunities, general, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 actions to address risks and opportunities, general not yet formally established. Remediation plan required."
  },
  {
    "ref": "6.1.2",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the ISMS requirement for information security risk assessment process, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.1.3",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the ISMS requirement for information security risk treatment process, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.2",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the ISMS requirement for information security objectives and planning to achieve them, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "IT Security Team",
    "priority": "High",
    "notes": "Gap identified during review \u2014 information security objectives and planning to achieve them not yet formally established. Remediation plan required."
  },
  {
    "ref": "6.3",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the ISMS requirement for planning of changes to the isms, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.1",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for resources, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.2",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for competence, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.3",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for awareness, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.4",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for communication, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.5.1",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for documented information, general, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.5.2",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for creating and updating documented information, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "IT Security Team",
    "priority": "High",
    "notes": "Creating and updating documented information is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "7.5.3",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the ISMS requirement for control of documented information, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Control of documented information is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "8.1",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the ISMS requirement for operational planning and control, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.2",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the ISMS requirement for information security risk assessment (operational), with documented evidence available for review?",
    "compliance": "Not Applicable",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.3",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the ISMS requirement for information security risk treatment (operational), with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 information security risk treatment (operational) not yet formally established. Remediation plan required."
  },
  {
    "ref": "9.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the ISMS requirement for monitoring, measurement, analysis and evaluation, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.2.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the ISMS requirement for internal audit, general, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.2.2",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the ISMS requirement for internal audit programme, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.3.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the ISMS requirement for management review, general, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.3.2",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the ISMS requirement for management review inputs, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.3.3",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the ISMS requirement for management review results, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Medium",
    "notes": "Management review results is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "10.1",
    "category": "Mandatory Clauses",
    "section": "10 - Improvement",
    "requirement": "Has the organisation addressed the ISMS requirement for continual improvement, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Continual improvement is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "10.2",
    "category": "Mandatory Clauses",
    "section": "10 - Improvement",
    "requirement": "Has the organisation addressed the ISMS requirement for nonconformity and corrective action, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.1",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to policies for information security?",
    "compliance": "Not Applicable",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.2",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security roles and responsibilities?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Control gap \u2014 information security roles and responsibilities has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.3",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to segregation of duties?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "Medium",
    "notes": "Segregation of duties is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.4",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to management responsibilities?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Control gap \u2014 management responsibilities has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.5",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to contact with authorities?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.6",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to contact with special interest groups?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.7",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to threat intelligence?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.8",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security in project management?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.9",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to inventory of information and other associated assets?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.10",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to acceptable use of information and other associated assets?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.11",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to return of assets?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Return of assets is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.12",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to classification of information?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.13",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to labelling of information?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.14",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information transfer?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "Low",
    "notes": "Control gap \u2014 information transfer has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.15",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to access control?",
    "compliance": "Partially Compliant",
    "owner": "GRC Office",
    "priority": "High",
    "notes": "Access control is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.16",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to identity management?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.17",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to authentication information?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.18",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to access rights?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.19",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security in supplier relationships?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.20",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to addressing information security within supplier agreements?",
    "compliance": "Not Applicable",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.21",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to managing information security in the ict supply chain?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "Low",
    "notes": "Managing information security in the ICT supply chain is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.22",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to monitoring, review and change management of supplier services?",
    "compliance": "Partially Compliant",
    "owner": "IT Security Team",
    "priority": "Low",
    "notes": "Monitoring, review and change management of supplier services is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.23",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security for use of cloud services?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.24",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security incident management planning?",
    "compliance": "Not Compliant",
    "owner": "IT Security Team",
    "priority": "Low",
    "notes": "Control gap \u2014 information security incident management planning has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.25",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to assessment and decision on information security events?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.26",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to response to information security incidents?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.27",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to learning from information security incidents?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.28",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to collection of evidence?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.29",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security during disruption?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "Control gap \u2014 information security during disruption has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.30",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to ict readiness for business continuity?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.31",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to legal, statutory, regulatory and contractual requirements?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Control gap \u2014 legal, statutory, regulatory and contractual requirements has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.32",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to intellectual property rights?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "Intellectual property rights is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.33",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to protection of records?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Control gap \u2014 protection of records has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.5.34",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to privacy and protection of personal data?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.35",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to independent review of information security?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.36",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to compliance with policies, rules and standards?",
    "compliance": "Partially Compliant",
    "owner": "IT Security Team",
    "priority": "High",
    "notes": "Compliance with policies, rules and standards is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.5.37",
    "category": "Annex A Controls",
    "section": "A.5 - Organizational controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to documented operating procedures?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.1",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to screening?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Control gap \u2014 screening has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.6.2",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to terms and conditions of employment?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Low",
    "notes": "Terms and conditions of employment is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.3",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security awareness, education and training?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.4",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to disciplinary process?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Medium",
    "notes": "Disciplinary process is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.5",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to responsibilities after termination or change of employment?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Control gap \u2014 responsibilities after termination or change of employment has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.6.6",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to confidentiality or non-disclosure agreements?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Control gap \u2014 confidentiality or non-disclosure agreements has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.6.7",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to remote working?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.8",
    "category": "Annex A Controls",
    "section": "A.6 - People controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information security event reporting?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "Low",
    "notes": "Information security event reporting is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.7.1",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to physical security perimeters?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Physical security perimeters is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.7.2",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to physical entry?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to securing offices, rooms and facilities?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.4",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to physical security monitoring?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "Control gap \u2014 physical security monitoring has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.7.5",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to protecting against physical and environmental threats?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.6",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to working in secure areas?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.7",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to clear desk and clear screen?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.8",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to equipment siting and protection?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.9",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to security of assets off-premises?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.10",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to storage media?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.11",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to supporting utilities?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.12",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to cabling security?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Control gap \u2014 cabling security has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.7.13",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to equipment maintenance?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Equipment maintenance is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.7.14",
    "category": "Annex A Controls",
    "section": "A.7 - Physical controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to secure disposal or re-use of equipment?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.1",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to user endpoint devices?",
    "compliance": "Partially Compliant",
    "owner": "GRC Office",
    "priority": "Medium",
    "notes": "User endpoint devices is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.2",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to privileged access rights?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "Low",
    "notes": "Privileged access rights is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.3",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information access restriction?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.4",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to access to source code?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.5",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to secure authentication?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.6",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to capacity management?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.7",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to protection against malware?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.8",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to management of technical vulnerabilities?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.9",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to configuration management?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.10",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information deletion?",
    "compliance": "Partially Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Information deletion is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.11",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to data masking?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Data masking is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.12",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to data leakage prevention?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "High",
    "notes": "Control gap \u2014 data leakage prevention has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.13",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information backup?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.14",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to redundancy of information processing facilities?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "Redundancy of information processing facilities is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.15",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to logging?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.16",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to monitoring activities?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.17",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to clock synchronization?",
    "compliance": "Partially Compliant",
    "owner": "A. Rahman",
    "priority": "Medium",
    "notes": "Clock synchronization is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.18",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to use of privileged utility programs?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.19",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to installation of software on operational systems?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.20",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to networks security?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Control gap \u2014 networks security has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.21",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to security of network services?",
    "compliance": "Fully Compliant",
    "owner": "IT Security Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.22",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to segregation of networks?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.23",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to web filtering?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Control gap \u2014 web filtering has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.24",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to use of cryptography?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.25",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to secure development life cycle?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.26",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to application security requirements?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "High",
    "notes": "Control gap \u2014 application security requirements has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.27",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to secure system architecture and engineering principles?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Control gap \u2014 secure system architecture and engineering principles has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.28",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to secure coding?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.29",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to security testing in development and acceptance?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.30",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to outsourced development?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.31",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to separation of development, test and production environments?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Control gap \u2014 separation of development, test and production environments has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.32",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to change management?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.8.33",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to test information?",
    "compliance": "Not Compliant",
    "owner": "GRC Office",
    "priority": "Medium",
    "notes": "Control gap \u2014 test information has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.34",
    "category": "Annex A Controls",
    "section": "A.8 - Technological controls",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to protection of information systems during audit testing?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  }
];
