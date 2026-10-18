export const profile = {
  name: 'Abi Sarasan',
  role: 'Senior IT Administrator',
  location: 'Dubai, United Arab Emirates',
  linkedin: 'https://www.linkedin.com/in/abi-sarasan-',
  // TODO: replace with your preferred contact email / phone
  email: 'sarasanabi@gmail.com',
  headline: 'Modern IT operations, secured and automated.',
  intro:
    'Senior IT Administrator with 12+ years of enterprise experience across the UAE, KSA and Singapore. I run hybrid Entra ID and Intune environments, and I am building AI-driven automation with n8n and Claude to make IT support faster and safer.',
  about: [
    'My core expertise spans Windows Server, Active Directory, Microsoft 365 and Exchange hybrid environments, Azure, and modern device management with Intune, backed by hands-on work in hybrid Entra ID architectures.',
    'I am expanding into AI-driven automation, using n8n and Claude to streamline IT workflows, reduce manual overhead, and build smarter helpdesk and support systems. Combining traditional infrastructure strength with automation and AI is where I see enterprise IT heading.',
  ],
};

export const highlights = [
  ['Enterprise vision', 'aligning IT infrastructure, security and support with business goals'],
  ['Hybrid identity and endpoint', 'Entra ID, Intune, Conditional Access, Autopilot'],
  ['Generative AI and Claude workloads', 'running AI workloads and driving organisation-wide AI adoption for up to 20x faster work'],
  ['Automation', 'n8n and Claude workflows for ticket triage, onboarding and self-service'],
  ['360° coverage', 'identity, endpoints, cloud, network security, backup and ITSM'],
];

export const stats = [
  { value: 12, suffix: '+', label: 'Years in enterprise IT' },
  { value: 3, suffix: '', label: 'Countries: UAE, KSA, Singapore' },
  { value: 5, suffix: '', label: 'Organisations served' },
  { value: 4, suffix: 'X', label: 'Efficiency goal with automation' },
];

export const ticker = [
  'Microsoft Intune', 'Entra ID', 'Microsoft 365', 'Exchange Hybrid', 'Azure', 'Windows Server',
  'Active Directory', 'Fortinet', 'Microsoft Defender', 'PowerShell', 'n8n', 'Claude', 'AWS',
  'VMware', 'ManageEngine', 'Jira', 'ITIL',
];

export const services = [
  { n: '01', title: 'Hybrid Identity & Entra ID', text: 'Active Directory, Entra ID, DNS and DHCP across multi-site Windows Server estates from 2008 to 2022.' },
  { n: '02', title: 'Modern Device Management', text: 'Intune-led onboarding, compliance policies and app deployment for Windows, Mac and mobile fleets.' },
  { n: '03', title: 'Microsoft 365 & Cloud', text: 'Microsoft 365, Exchange hybrid, Windows 365 and Azure administration, plus AWS and Google Workspace exposure.' },
  { n: '04', title: 'Security & Compliance', text: 'Fortinet firewalls (HA, VPN), Defender endpoint security, patching, vulnerability assessments and audits.' },
  { n: '05', title: 'AI & Workflow Automation', text: 'n8n and Claude workflows for triage, incident summaries and expense processing, plus PowerShell automation.' },
  { n: '06', title: 'Service Desk & ITSM', text: 'ManageEngine ServiceDesk Plus and Jira, SLA-driven and aligned with ITIL best practice.' },
];

export const process = [
  { n: '1', title: 'Assess', text: 'Map the current environment, risks and the manual work that slows teams down.' },
  { n: '2', title: 'Design & Build', text: 'Architect secure, cost-effective solutions and automate with PowerShell, Intune policies and n8n.' },
  { n: '3', title: 'Operate & Improve', text: 'Monitor against SLAs, document for audit readiness and keep tuning for resilience.' },
];

export const buildTypes = [
  { title: 'AI Automation', text: 'AI workflows with n8n and Claude that read, classify and act on emails, tickets and documents.' },
  { title: 'Voice Agent', text: 'Voice AI agents that answer calls, handle common requests and hand over to a person when needed.' },
  { title: 'Work Automation', text: 'Custom workflows that remove repetitive tasks: approvals, reporting, onboarding and notifications.' },
  { title: 'Gym Management Software', text: 'Member management, attendance, memberships and payment tracking in one simple system.' },
];

export const projects = [
  {
    title: 'SmartLedger',
    tag: 'AI-Powered Expense Automation',
    text: 'An AI workflow that extracts and validates receipt data into structured financial reports, cutting manual entry and improving accuracy.',
    tools: ['AI', 'n8n', 'Automation'],
  },
  {
    title: 'Agentic Security Response',
    tag: 'n8n + Claude',
    text: 'A prototype that auto-classifies suspicious email and account activity, flags mailbox rule anomalies and drafts incident summaries to shrink time-to-containment.',
    tools: ['n8n', 'Claude', 'Microsoft 365'],
  },
  {
    title: 'VMware Horizon VDI Delivery',
    tag: 'VMware PSO, ASEAN',
    text: 'Design, installation and configuration of Horizon View deployments (up to 100 desktops), including a Singapore petroleum client engagement.',
    tools: ['VMware', 'Horizon View', 'vSphere'],
  },
];

export const experience = [
  {
    company: 'News Group International',
    role: 'Senior Information Technology Administrator',
    period: 'Apr 2024 – Present',
    place: 'Dubai, UAE · On-site',
    points: [
      'Manage tickets in ManageEngine ServiceDesk Plus and Jira to strict SLAs following ITIL.',
      'Administer multi-site Windows Server, Active Directory, Entra ID, DNS and DHCP.',
      'Configure Fortinet firewalls (HA, VPN tunnels) and Microsoft Defender endpoint security.',
      'Lead Intune device management and oversee Microsoft 365 and Windows 365.',
      'Build AI and n8n workflows for early threat detection and faster incident response.',
    ],
  },
  {
    company: 'F9 Infotech',
    role: 'Lead Technical Specialist',
    period: 'Oct 2022 – Mar 2024',
    place: 'UAE, India, Canada · On-site',
    points: [
      'First technical hire: built the entire technical infrastructure from the ground up.',
      'Recruited and interviewed the IT team, then trained them into next-era IT engineers.',
      'Scaled IT to support company growth to ₹100 crore and expansion into new geographies (UAE, India, Canada).',
      'Delivered end-to-end cybersecurity operations and IT infrastructure security.',
      'Ran vulnerability assessments on websites and digital assets for proactive remediation.',
      'Automated security administration, reporting and threat hunting with PowerShell.',
      'Led patching, compliance audits and security documentation for audit readiness.',
    ],
  },
  {
    company: 'Syntrasol General Trading',
    role: 'Information Technology Administrator',
    period: 'Nov 2021 – Oct 2022',
    place: 'United Arab Emirates',
    points: [
      'Managed HP ProLiant servers: deployment, monitoring, patching and disaster recovery.',
      'Administered Office 365: Azure AD lifecycle, Exchange Online, Teams, SharePoint, OneDrive.',
      'Enforced mobile compliance with AirWatch (Workspace ONE) and ran tape backup workflows.',
    ],
  },
  {
    company: 'Lockton Middle East North Africa',
    role: 'Information Technology Administrator',
    period: 'Dec 2019 – Oct 2022',
    place: 'Dubai, UAE · On-site',
    points: [
      'Sole IT administrator across three sites (UAE, Jordan, Egypt), recognised as a vital worker during the pandemic.',
      'Managed Intune MDM, Microsoft 365, Azure AD and VMware, with AWS certification.',
      'Handled identity and access via ManageEngine AD Manager and monthly AD Audit reporting.',
    ],
  },
  {
    company: 'EZDC Automation',
    role: 'VDI Administrator',
    period: 'Nov 2014 – Dec 2015',
    place: 'Chennai, India',
    points: [
      'Services partner to VMware PSO (ASEAN) on pre- and post-sales engagements.',
      'Consulted on vSphere and Horizon View design, deployment and documentation.',
    ],
  },
];

export const education = [
  // TODO: add degree and years from your LinkedIn Education section
  { school: 'Manipal International University', detail: 'Add degree and years' },
];

export const certifications = [
  'Introduction to AI Concepts (Microsoft Learn)',
  'AWS Certified',
  'ITIL',
  'Microsoft Azure Security',
  'VMware',
  'UAE Pledge Certificate',
];

export const logLines = [
  ['INFO', 'mail trigger: new report from finance@'],
  ['INFO', 'Claude classify -> category: suspicious-login'],
  ['WARN', 'mailbox rule anomaly: forward-all detected'],
  ['INFO', 'Entra ID: sign-in risk lookup'],
  ['INFO', 'draft incident summary -> ticket queue'],
  ['OK', 'containment recommended, analyst notified'],
];
