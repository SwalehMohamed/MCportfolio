// ============================================================================
// SOLUTIONS DATA
// Centralised content for the four digital transformation systems.
// Each solution contains all narrative content used across the site.
// Update text here — every page that imports this data reflects changes.
// ============================================================================

export interface SolutionWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface Solution {
  id: 'dials' | 'pmfs' | 'esms' | 'mcrf';
  number: string;
  name: string;
  fullName: string;
  altName?: string;
  tagline: string;
  themeColor: string;
  themeColorLight: string;
  themeIcon: string;
  shortDescription: string;
  heroHeading: string;
  heroSubheading: string;
  overview: string[];
  challenge: string[];
  solution: string[];
  capabilities: string[];
  workflow: SolutionWorkflowStep[];
  benefits: string[];
  governance: string[];
  analytics: string[];
  accountability: string[];
  futureOpportunities: string[];
  // Screenshots — use labelled placeholders when no real screenshots exist
  screenshots: { label: string; category: string }[];
  url: string;
  qrCode: string;
  theme: 'blue' | 'teal' | 'gold' | 'green';
}

export const solutions: Solution[] = [
  {
    id: 'dials',
    number: '01',
    name: 'DIALS',
    fullName: 'Declaration of Income, Assets & Liabilities System',
    tagline: 'Strengthening Transparency & Accountability',
    themeColor: '#1d5288',
    themeColorLight: '#d4e3f4',
    themeIcon: 'ShieldCheck',
    shortDescription:
      'A digital platform designed to streamline the management of employee declarations, supporting structured submission, review, compliance monitoring, verification, reporting and auditability.',
    heroHeading: 'Declaration of Income, Assets & Liabilities System',
    heroSubheading: 'Digitising transparency and strengthening accountability.',
    overview: [
      'The Declaration of Income, Assets & Liabilities System (DIALS) provides a digital environment for managing the full declaration lifecycle — from initial submission through review, verification, approval and ongoing compliance monitoring.',
      'By replacing paper-based declaration processes with a structured digital workflow, the system creates a reliable, auditable record of declarations while reducing the administrative burden on both employees and reviewing officers.',
    ],
    challenge: [
      'Managing declarations of income, assets and liabilities through paper-based or manual processes creates challenges in record management, tracking, retrieval and verification.',
      'Manual workflows make it difficult to monitor compliance across the organisation, track submission status, and maintain a clear audit trail of reviews and approvals.',
      'The absence of a centralised digital system limits visibility for management and oversight bodies, making accountability harder to demonstrate.',
    ],
    solution: [
      'DIALS digitises the entire declaration process — providing employees with a self-service platform for structured submission and giving reviewing officers guided workflows for review, verification and approval.',
      'The system maintains a complete audit trail of every action, enabling compliance monitoring and management reporting without the overhead of manual record-keeping.',
    ],
    capabilities: [
      'Digital declarations',
      'Employee self-service',
      'Guided declaration workflows',
      'Document management',
      'Review workflows',
      'Approval processes',
      'Compliance monitoring',
      'Verification and validation',
      'Audit trails',
      'Role-based access',
      'Dashboards',
      'Reporting and analytics',
    ],
    workflow: [
      {
        step: '01',
        title: 'Declaration Submission',
        description: 'Employees complete structured digital declarations through a self-service portal with guided workflows and document upload.',
      },
      {
        step: '02',
        title: 'Review & Verification',
        description: 'Reviewing officers examine submitted declarations, verify supporting documents and request additional information where needed.',
      },
      {
        step: '03',
        title: 'Approval',
        description: 'Declarations proceed through defined approval workflows, with each approval stage recorded in the audit trail.',
      },
      {
        step: '04',
        title: 'Compliance Monitoring',
        description: 'The system tracks declaration status across the organisation, flagging outstanding or overdue declarations for follow-up.',
      },
      {
        step: '05',
        title: 'Reporting & Audit',
        description: 'Management dashboards and reports provide visibility into compliance levels, submission trends and audit readiness.',
      },
    ],
    benefits: [
      'Reduced dependence on paper-based processes',
      'Improved visibility of declaration status',
      'Better record management and retrieval',
      'Stronger accountability through audit trails',
      'Easier compliance monitoring across the organisation',
      'Improved management reporting and oversight',
    ],
    governance: [
      'Role-based access control ensures only authorised personnel can view, review or approve declarations',
      'Every action — submission, review, approval, modification — is recorded in a tamper-evident audit trail',
      'Compliance monitoring dashboards provide management with organisation-wide visibility',
      'Document management ensures all supporting evidence is securely stored and retrievable',
    ],
    analytics: [
      'Declaration submission rates and compliance levels',
      'Outstanding and overdue declarations by department',
      'Review and approval cycle times',
      'Compliance trends over time for management oversight',
    ],
    accountability: [
      'Complete audit trail of every declaration action',
      'Transparent review and approval workflows',
      'Management dashboards for oversight and compliance monitoring',
      'Verifiable record of declarations for audit and governance purposes',
    ],
    futureOpportunities: [
      'Integration with human resource management systems for automated employee data',
      'Automated reminders and notifications for declaration cycles',
      'Advanced analytics for risk-based verification and compliance forecasting',
      'Mobile-first access for declaration submission on any device',
    ],
    screenshots: [
      { label: 'DIALS — Employee Declaration Dashboard', category: 'DIALS' },
      { label: 'DIALS — Declaration Submission Form', category: 'DIALS' },
      { label: 'DIALS — Compliance Monitoring Dashboard', category: 'DIALS' },
      { label: 'DIALS — Review & Approval Workflow', category: 'DIALS' },
    ],
    url: '[CONFIGURE: DIALS URL]',
    qrCode: '[CONFIGURE: DIALS URL]',
    theme: 'blue',
  },
  {
    id: 'pmfs',
    number: '02',
    name: 'PMFS',
    fullName: 'Project Management & Feedback System',
    tagline: 'Improving Project Visibility & Citizen Engagement',
    themeColor: '#16a085',
    themeColorLight: '#cdf2e8',
    themeIcon: 'ClipboardList',
    shortDescription:
      'A digital platform designed to support project planning, monitoring, reporting and management while providing structured channels for citizen feedback and engagement.',
    heroHeading: 'Project Management & Feedback System',
    heroSubheading:
      'From project planning to citizen feedback — connected through one digital platform.',
    overview: [
      'The Project Management & Feedback System (PMFS) provides a centralised digital platform for managing the full project lifecycle — from registration and planning through monitoring, reporting and completion.',
      'Beyond internal project management, the system creates structured channels for citizen feedback and engagement, giving the County a clearer picture of how projects are experienced by the communities they serve.',
    ],
    challenge: [
      'Government projects span multiple departments, locations and phases, making it difficult to maintain consolidated visibility of project status, progress and outcomes.',
      'Without a centralised digital platform, project information is dispersed across documents, spreadsheets and individual systems, limiting the ability to monitor and report effectively.',
      'Collecting and structuring citizen feedback on projects is challenging without dedicated digital channels, limiting the County\u2019s ability to understand and respond to community experiences.',
    ],
    solution: [
      'PMFS brings project registration, planning, monitoring, reporting and documentation into a single digital platform — giving project teams, managers and decision-makers a consolidated view of project activity.',
      'Integrated citizen feedback channels allow members of the public to submit feedback, raise issues and track responses, creating a structured loop between project delivery and community experience.',
    ],
    capabilities: [
      'Project registration',
      'Project planning',
      'Project monitoring',
      'Milestone tracking',
      'Progress reporting',
      'Project documentation',
      'Geographic/project location information',
      'Citizen feedback',
      'Complaints/issues management',
      'Notifications',
      'Dashboards',
      'Analytics',
      'Management reporting',
      'Audit trails',
    ],
    workflow: [
      {
        step: '01',
        title: 'Project Registration',
        description: 'Projects are registered in the system with key details including scope, location, timeline and responsible parties.',
      },
      {
        step: '02',
        title: 'Planning & Milestones',
        description: 'Project plans are defined with milestones, deliverables and timelines, creating a structured baseline for monitoring.',
      },
      {
        step: '03',
        title: 'Monitoring & Progress',
        description: 'Project teams update progress against milestones, with documentation and reports captured throughout the project lifecycle.',
      },
      {
        step: '04',
        title: 'Citizen Feedback',
        description: 'Citizens submit feedback, comments and complaints through structured digital channels linked to specific projects.',
      },
      {
        step: '05',
        title: 'Reporting & Analytics',
        description: 'Dashboards and management reports provide visibility across all projects, with analytics on progress, issues and feedback trends.',
      },
    ],
    benefits: [
      'Improved project visibility across departments',
      'Better monitoring of project progress and milestones',
      'Centralised project information and documentation',
      'More structured citizen feedback and engagement',
      'Improved management reporting',
      'Better management decision-making through consolidated project data',
    ],
    governance: [
      'Audit trails record all project updates, changes and feedback handling',
      'Role-based access ensures project data is accessible only to authorised personnel',
      'Geographic and location information provides transparency on where projects are being delivered',
      'Management dashboards support oversight and accountability for project delivery',
    ],
    analytics: [
      'Project status and progress across the County',
      'Milestone achievement and timeline performance',
      'Citizen feedback volume, categories and resolution status',
      'Project distribution by location, department and status',
    ],
    accountability: [
      'Transparent project records with full audit trails',
      'Citizen feedback creates an external accountability mechanism',
      'Management dashboards provide oversight of project delivery performance',
      'Centralised documentation ensures decisions and changes are traceable',
    ],
    futureOpportunities: [
      'Public-facing project portals for greater citizen transparency',
      'Integration with geographic information systems for project mapping',
      'Mobile field reporting for on-site project monitoring',
      'Advanced analytics for project performance benchmarking and forecasting',
    ],
    screenshots: [
      { label: 'PMFS — Project Overview Dashboard', category: 'PMFS' },
      { label: 'PMFS — Project Registration & Planning', category: 'PMFS' },
      { label: 'PMFS — Citizen Feedback Portal', category: 'PMFS' },
      { label: 'PMFS — Project Monitoring & Milestones', category: 'PMFS' },
    ],
    url: '[CONFIGURE: PMFS URL]',
    qrCode: '[CONFIGURE: PMFS URL]',
    theme: 'teal',
  },
  {
    id: 'esms',
    number: '03',
    name: 'ESMS',
    fullName: 'Elimu Scheme Management System',
    tagline: 'Digitising Education Support',
    themeColor: '#c4961f',
    themeColorLight: '#f9edcb',
    themeIcon: 'GraduationCap',
    shortDescription:
      'A digital platform designed to support education programme applications, assessment, beneficiary management, approvals, funding administration, monitoring and reporting.',
    heroHeading: 'Elimu Scheme Management System',
    heroSubheading: 'Digitising education support and expanding opportunity.',
    overview: [
      'The Elimu Scheme Management System (ESMS) provides a digital platform for managing education support programmes — from application intake and eligibility assessment through beneficiary management, approvals, funding administration and ongoing monitoring.',
      'By centralising programme management in a single system, ESMS gives programme administrators, managers and decision-makers a comprehensive view of applications, beneficiaries, institutions and funding across the education support lifecycle.',
    ],
    challenge: [
      'Education support programmes involve multiple stages — applications, assessment, verification, approval, funding and monitoring — each creating administrative overhead when managed manually.',
      'Without a centralised system, tracking beneficiaries, managing relationships with training institutions, and maintaining programme records is time-consuming and prone to information gaps.',
      'Manual processes make it difficult to generate timely reports on programme performance, funding utilisation and beneficiary outcomes.',
    ],
    solution: [
      'ESMS digitises the entire education support lifecycle — providing online application portals for applicants, structured assessment and verification workflows for administrators, and comprehensive beneficiary and institution management.',
      'Programme managers gain dashboards and reporting tools that consolidate application, beneficiary, institution and funding data in one place, supporting better programme oversight and decision-making.',
    ],
    capabilities: [
      'Online applications',
      'Applicant profiles',
      'Eligibility assessment',
      'Document management',
      'Verification',
      'Approval workflows',
      'Beneficiary management',
      'Training institution management',
      'Programme management',
      'Funding/award tracking',
      'Notifications',
      'Application status tracking',
      'Dashboards',
      'Analytics',
      'Reports',
      'Audit trails',
      'Role-based access',
    ],
    workflow: [
      {
        step: '01',
        title: 'Online Application',
        description: 'Applicants submit applications through an online portal, creating structured applicant profiles with supporting documents.',
      },
      {
        step: '02',
        title: 'Eligibility Assessment',
        description: 'Applications are assessed for eligibility through defined criteria, with verification of documents and applicant information.',
      },
      {
        step: '03',
        title: 'Approval',
        description: 'Eligible applications proceed through approval workflows, with decisions recorded and notifications sent to applicants.',
      },
      {
        step: '04',
        title: 'Beneficiary & Institution Management',
        description: 'Approved applicants are managed as beneficiaries, with training institutions tracked and programme allocations recorded.',
      },
      {
        step: '05',
        title: 'Funding & Monitoring',
        description: 'Funding and awards are tracked, with programme monitoring and reporting providing visibility into programme performance.',
      },
    ],
    benefits: [
      'More efficient application management',
      'Better visibility of beneficiaries and programme participation',
      'Centralised programme information and documentation',
      'Improved accountability through audit trails and approval workflows',
      'Better reporting on programme performance and funding',
      'Easier programme monitoring for administrators and managers',
    ],
    governance: [
      'Role-based access ensures only authorised personnel can assess, approve or manage beneficiaries',
      'Audit trails record every action in the application and approval process',
      'Document management ensures all applicant evidence is securely stored and verifiable',
      'Approval workflows create a transparent, traceable decision-making process',
    ],
    analytics: [
      'Application volumes and approval rates by programme',
      'Beneficiary numbers and programme participation trends',
      'Institution distribution and programme allocation',
      'Funding utilisation and programme performance reports',
    ],
    accountability: [
      'Transparent application assessment and approval workflows',
      'Complete audit trail of all programme decisions',
      'Beneficiary and funding records that are traceable and verifiable',
      'Management reporting for oversight of programme delivery and funding',
    ],
    futureOpportunities: [
      'Online applicant portals with real-time status tracking',
      'Integration with education management systems for beneficiary verification',
      'Advanced analytics for programme outcome tracking and impact assessment',
      'Mobile-first application access for wider reach',
    ],
    screenshots: [
      { label: 'ESMS — Programme Management Dashboard', category: 'ESMS' },
      { label: 'ESMS — Online Application Portal', category: 'ESMS' },
      { label: 'ESMS — Beneficiary Management', category: 'ESMS' },
      { label: 'ESMS — Institution & Funding Tracking', category: 'ESMS' },
    ],
    url: '[CONFIGURE: ESMS URL]',
    qrCode: '[CONFIGURE: ESMS URL]',
    theme: 'gold',
  },
  {
    id: 'mcrf',
    number: '04',
    name: 'MCRF',
    fullName: 'Mombasa County Revolving Fund Management System',
    altName: 'Stawisha Fund Management System',
    tagline: 'Digitising Access to Finance & Enterprise Support',
    themeColor: '#0e8069',
    themeColorLight: '#9ae5d2',
    themeIcon: 'Landmark',
    shortDescription:
      'A digital platform designed to support the management of revolving fund programmes, from application and assessment through approval, disbursement, repayment monitoring and reporting.',
    heroHeading: 'Mombasa County Revolving Fund Management System',
    heroSubheading: 'Digitising access to finance and supporting enterprise development.',
    overview: [
      'The Mombasa County Revolving Fund Management System (MCRF), also known as the Stawisha Fund Management System, provides a digital platform for managing revolving fund programmes — from application intake and eligibility assessment through approval, disbursement, repayment monitoring and reporting.',
      'The system supports both individual and group applications, giving fund administrators a comprehensive tool for managing the full fund lifecycle while maintaining transparency, accountability and strong monitoring capabilities.',
    ],
    challenge: [
      'Revolving fund programmes involve complex lifecycles — applications, eligibility assessment, defaulter screening, verification, board approvals, disbursement and repayment monitoring — each creating significant administrative burden when managed manually.',
      'Without a centralised digital system, tracking applicants, managing fund administration, monitoring repayments and generating reports is difficult and time-consuming.',
      'Maintaining transparency and accountability in fund management requires structured processes and auditable records that manual systems struggle to provide reliably.',
    ],
    solution: [
      'MCRF digitises the entire revolving fund lifecycle — supporting both individual and group applications, structured eligibility assessment and defaulter screening, board decision management, disbursement tracking and repayment monitoring.',
      'The system provides fund administrators and management with dashboards and reporting tools that consolidate fund data, supporting transparency, efficient administration and stronger oversight.',
    ],
    capabilities: [
      'Digital applications',
      'Individual applications',
      'Group applications',
      'Applicant profiles',
      'Document management',
      'Eligibility assessment',
      'Defaulter screening',
      'Verification',
      'Approval workflows',
      'Board decision management',
      'Fund administration',
      'Disbursement tracking',
      'Repayment monitoring',
      'Notifications',
      'Dashboards',
      'Analytics',
      'Reporting',
      'Audit trails',
    ],
    workflow: [
      {
        step: '01',
        title: 'Digital Application',
        description: 'Individuals and groups submit applications through a digital portal, creating structured applicant profiles with supporting documents.',
      },
      {
        step: '02',
        title: 'Assessment & Screening',
        description: 'Applications undergo eligibility assessment, defaulter screening and verification through defined workflows.',
      },
      {
        step: '03',
        title: 'Board Approval',
        description: 'Verified applications are presented for board decision management, with approval outcomes recorded in the system.',
      },
      {
        step: '04',
        title: 'Disbursement',
        description: 'Approved funds are disbursed with disbursement tracking recording all transactions and fund allocations.',
      },
      {
        step: '05',
        title: 'Repayment Monitoring',
        description: 'The system monitors repayments, tracking repayment status and flagging issues for follow-up and reporting.',
      },
    ],
    benefits: [
      'Transparency in fund application, assessment and approval processes',
      'Efficient fund administration through digital workflows',
      'Better applicant management for both individual and group applications',
      'Stronger monitoring of disbursements and repayments',
      'Improved reporting on fund performance and administration',
      'Accountability through audit trails and board decision records',
    ],
    governance: [
      'Role-based access ensures only authorised personnel can assess, approve or manage fund applications',
      'Audit trails record every action from application through disbursement and repayment',
      'Board decision management creates a transparent, traceable approval process',
      'Defaulter screening supports responsible fund administration',
    ],
    analytics: [
      'Application volumes and approval rates',
      'Disbursement tracking and fund allocation',
      'Repayment monitoring and status tracking',
      'Fund administration reports for management oversight',
    ],
    accountability: [
      'Complete audit trail of all fund transactions and decisions',
      'Transparent board approval and decision management process',
      'Repayment monitoring creates ongoing accountability for fund beneficiaries',
      'Management dashboards provide oversight of fund administration and performance',
    ],
    futureOpportunities: [
      'Mobile-first application access for wider reach',
      'Integration with financial systems for automated repayment tracking',
      'Advanced analytics for fund performance and risk assessment',
      'Digital financial literacy resources for applicants and beneficiaries',
    ],
    screenshots: [
      { label: 'MCRF — Fund Management Dashboard', category: 'MCRF' },
      { label: 'MCRF — Digital Application Portal', category: 'MCRF' },
      { label: 'MCRF — Disbursement & Repayment Tracking', category: 'MCRF' },
      { label: 'MCRF — Board Decision Management', category: 'MCRF' },
    ],
    url: '[CONFIGURE: MCRF URL]',
    qrCode: '[CONFIGURE: MCRF URL]',
    theme: 'green',
  },
];

export const solutionThemes = {
  blue: {
    gradient: 'from-primary-700 to-primary-900',
    text: 'text-primary-700',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    chip: 'bg-primary-100 text-primary-700',
    accent: 'bg-primary-600',
  },
  teal: {
    gradient: 'from-secondary-600 to-secondary-800',
    text: 'text-secondary-700',
    bg: 'bg-secondary-50',
    border: 'border-secondary-200',
    chip: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-secondary-600',
  },
  gold: {
    gradient: 'from-accent-600 to-accent-800',
    text: 'text-accent-700',
    bg: 'bg-accent-50',
    border: 'border-accent-200',
    chip: 'bg-accent-100 text-accent-800',
    accent: 'bg-accent-500',
  },
  green: {
    gradient: 'from-secondary-700 to-primary-800',
    text: 'text-secondary-800',
    bg: 'bg-secondary-50',
    border: 'border-secondary-200',
    chip: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-secondary-700',
  },
};

export function getSolution(id: string): Solution | undefined {
  return solutions.find((s) => s.id === id);
}
