export const profile = {
  name: 'Abi Sarasan',
  role: 'Senior IT Administrator',
  location: 'Dubai, United Arab Emirates',
  linkedin: 'https://www.linkedin.com/in/abi-sarasan-',
  // TODO: replace with your preferred contact email / phone
  email: 'sarasanabi@gmail.com',
  phone: '+971 50 238 3285',
  phoneLink: '+971502383285',
  whatsapp: 'https://wa.me/971502383285?text=Hi%20Abi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20talk.',
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
  { value: 12, suffix: '+', label: 'Years of GCC experience' },
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

export const certSkills = [
  { area: 'Security', skills: ['CompTIA Security+', 'ISC2 Candidate', 'Fortinet NSE 1 Network Security'] },
  { area: 'Cloud', skills: ['AWS Solutions Architect', 'Azure Administrator', 'Oracle Cloud Infrastructure', 'Aviatrix Multi-Cloud Networking', 'Cloud Computing Foundation'] },
  { area: 'Virtualization & DR', skills: ['VMware VCP5 Data Center', 'VMware VCA Cloud', 'Zerto Disaster Recovery'] },
  { area: 'Networking', skills: ['Cisco CCNA', 'CompTIA Network+ (TCP/IP)', 'Fortinet Firewalls'] },
  { area: 'Microsoft Platforms', skills: ['MCITP Enterprise Administrator', 'MCTS', 'Teams Administrator', 'MD-101 Modern Desktop', 'Windows Server Group Policy', 'macOS for IT Admins'] },
  { area: 'ITSM, Agile & AI', skills: ['ITIL Foundation', 'Scrum Foundation', 'Introduction to AI Concepts'] },
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
];

export const philosophy = {
  quote: 'AI is not replacing IT professionals. It is replacing the ones who refuse to adapt.',
  intro:
    'I am an advocate of AI and automation in IT. After 12+ years in enterprise IT, I believe the biggest gains come from letting automation handle the repeatable work and AI handle the reading, sorting and drafting, while people keep control of the decisions.',
  principles: [
    { title: 'Automate the repeatable', text: 'If a task happens twice a week, it should be a script, a policy or a workflow.' },
    { title: 'AI in the loop, humans in control', text: 'Claude and n8n triage, classify and draft. People approve what matters.' },
    { title: 'Security first', text: 'Zero-trust by default: every automation runs with least privilege and leaves an audit trail.' },
    { title: 'Keep learning in public', text: 'Skills decay fast. I keep earning badges, testing tools and sharing what works.' },
  ],
  steps: [
    { label: 'Manual baseline', factor: '1X', width: 5, text: 'Tickets, onboarding and reports handled by hand.' },
    { label: 'Standardise and script', factor: '2X', width: 10, text: 'PowerShell, Intune policies and Autopilot remove repeat clicks.' },
    { label: 'Automate workflows', factor: '5X', width: 25, text: 'n8n workflows connect mail, tickets, identity and chat.' },
    { label: 'Add AI agents', factor: '20X', width: 100, text: 'Claude triages, summarises and drafts responses around the clock.' },
  ],
  note: 'Illustrative model of how gains compound (2X scripting, then 2.5X workflows, then 4X AI agents). It is a target for repetitive IT work, not a measured result.',
};

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
    title: 'Agentic Voice Agent',
    tag: 'Voice AI + n8n + Claude',
    text: 'A voice agent that answers calls, understands the request, takes action through n8n workflows such as logging a ticket or booking a callback, and hands over to a person when needed.',
    tools: ['Voice AI', 'n8n', 'Claude'],
  },
  {
    title: 'Office Replacement Project',
    tag: 'MGTI · Marsh McLennan Saudi',
    text: 'IT delivery for the office replacement project for Marsh McLennan Saudi through MGTI, covering the technology setup of the new office.',
    tools: ['Infrastructure', 'End-user devices', 'KSA'],
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
  {
    school: 'Manipal International University',
    degree: 'Master of Business Administration (MBA), Information Technology',
    years: '2007 – 2009',
    detail: 'A Grade. Batch motivational leader, debate team member, started a college charity unit.',
  },
  {
    school: 'Madurai Kamaraj University',
    degree: 'Bachelor of Computer Application (BCA), Computer Science',
    years: '2000 – 2003',
    detail: 'A Grade. College cricket team captain, college magazine editor, built projects for college labs.',
  },
];

export const certifications = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', date: 'Issued Nov 2024 · Expires Nov 2027', active: true },
  { name: 'Introduction to AI Concepts', issuer: 'Microsoft Learn', date: 'Badge earned Jul 2026', active: true },
  { name: 'ITIL® Foundation Certificate in IT Service Management', issuer: 'PeopleCert', date: 'Issued Nov 2014', id: 'GR750132835AS', active: true },
  { name: 'Microsoft Certified IT Professional (Enterprise Administrator)', issuer: 'Microsoft', date: 'Issued Feb 2011', id: '8113360', active: true },
  { name: 'Microsoft Certified Technology Specialist', issuer: 'Microsoft', date: 'Issued Feb 2011', id: '8113360', active: true },
  { name: 'VMware Certified Associate: VCA Cloud', issuer: 'VMware', date: 'Issued Nov 2013', id: '11643788-87EB-76704873A100', active: true },
  { name: 'VMware Certified Professional 5: Data Center Virtualization (VCP5)', issuer: 'VMware', date: 'Issued Dec 2012', id: '9951421-AF17-787867B651DD', active: true },
  { name: 'Cloud Computing Foundation Certificate', issuer: 'EXIN', date: 'Issued Jul 2012', id: '4548067.1109273', active: true },
  { name: 'Zerto Certified Associate', issuer: 'Zerto (HPE)', date: 'Issued Oct 2021', id: 'E-6VXXXV', active: true },
  { name: 'Microsoft Managing Modern Desktop (MD-101) Cert Prep: Windows Deployment, Updates, and Policies', issuer: 'LinkedIn Learning', date: 'Issued Jul 2022', active: true },
  { name: 'Windows Server 2022: Implementing Group Policy', issuer: 'LinkedIn Learning', date: 'Issued Jun 2022', active: true },
  { name: 'macOS for IT Administrators', issuer: 'LinkedIn Learning', date: 'Issued Nov 2021', active: true },
  { name: 'CompTIA Network+ (N10-007) Cert Prep: The World of TCP/IP', issuer: 'LinkedIn Learning', date: 'Issued Aug 2021', active: true },
  { name: 'Tips for Writing Business Emails', issuer: 'LinkedIn Learning', date: 'Issued Jul 2022', active: true },
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'Issued Dec 2022 · Expired Dec 2025', id: 'AWS03126435' },
  { name: 'ISC2 Candidate', issuer: 'ISC2', date: 'Issued Feb 2025 · Expired Feb 2026' },
  { name: 'Oracle Cloud Infrastructure 2022 Certified Foundations Associate', issuer: 'Oracle', date: 'Issued Feb 2023 · Expired Feb 2025' },
  { name: 'Microsoft Certified: Azure Administrator Associate', issuer: 'Microsoft', date: 'Issued Oct 2021 · Expired Oct 2023', id: '990311196' },
  { name: 'Microsoft 365 Certified: Teams Administrator Associate', issuer: 'Microsoft', date: 'Issued Feb 2022 · Expired Feb 2023', id: '990311196' },
  { name: 'Fortinet Network Security Expert Level 1: Network Security Associate', issuer: 'Fortinet', date: 'Issued Jun 2020 · Expired Jun 2022', id: 'iNTxJY3eza' },
  { name: 'Aviatrix Certified Engineer: Multi-Cloud Network Associate', issuer: 'Aviatrix', date: 'Issued Aug 2020 · Expired Aug 2023', id: '2020-3095' },
  { name: 'Scrum Foundation Professional Certificate', issuer: 'Certiprof', date: 'Issued Sep 2020 · Expired Aug 2022' },
  { name: 'Lifelong Learning', issuer: 'Certiprof', date: 'Issued Jan 2021 · Expired Dec 2023' },
  { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco', date: 'Issued Feb 2011 · Expired Feb 2014', id: 'CSCO11922235' },
];

export const logLines = [
  ['AGENT', 'n8n webhook: scan request received, target example.com (sample)'],
  ['TOOL', 'HTTP GET https://example.com -> 200 OK, headers captured'],
  ['PASS', 'Strict-Transport-Security present (max-age=31536000)'],
  ['PASS', 'X-Content-Type-Options: nosniff'],
  ['FIX', 'Content-Security-Policy not set, recommend adding'],
  ['FIX', 'X-Frame-Options not set, recommend DENY or SAMEORIGIN'],
  ['WARN', 'Server header discloses software version'],
  ['CLAUDE', 'classify findings -> priority: MEDIUM, 3 hardening items found'],
  ['CLAUDE', 'draft remediation steps and plain-language summary'],
  ['DONE', 'report sent to analyst for review (human approves fixes)'],
];

// Issuer -> brand icon in public/logos (monochrome Simple Icons). Issuers without one fall back to initials.
const issuerLogos = {
  CompTIA: 'comptia',
  Microsoft: 'microsoft',
  'Microsoft Learn': 'microsoft',
  'Amazon Web Services': 'amazonaws',
  Oracle: 'oracle',
  Cisco: 'cisco',
  VMware: 'vmware',
  Fortinet: 'fortinet',
  'LinkedIn Learning': 'linkedin',
  ISC2: 'isc2',
};
export const logoFor = (issuer) => (issuerLogos[issuer] ? `/logos/${issuerLogos[issuer]}.svg` : null);
