// All site content lives here. Source of truth: the CV (Qusai Awwad-CV.pdf) and the
// project details confirmed by Qusai. Nothing in this file should be invented:
// add numbers only after they are verified.

export const profile = {
  name: 'Qusai Fawzi Awwad',
  title: 'Industrial Engineer | Supply Chain & Manufacturing | ERP & Data Analytics',
  intro:
    'Industrial Engineer who turns operational complexity into systems that run. I have led a production team of about 60, led the SAP production setup from material coding to BOMs, and built Python planning tools that turn raw data into clear decisions.',
  email: 'qusai.fawzi.awwad1@gmail.com',
  location: 'Zarqa, Jordan',
  linkedin: 'https://www.linkedin.com/in/qusai-awwad/',
  github: 'https://github.com/Qosi-Alqasrawe',
  cv: '/Qusai-Awwad-CV.pdf',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Case Studies' },
  { id: 'skills', label: 'Expertise' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const heroFacts = [
  { value: '~60', label: 'People led in the production department' },
  { value: 'SAP + Odoo', label: 'ERP platforms worked with' },
  { value: 'CSCA', label: 'ISCEA certified' },
  { value: '1st', label: 'Supply Chain Hackathon' },
]

export const about = {
  lead:
    'Industrial Engineer and Certified Supply Chain Analyst (CSCA) working across production planning, ERP, business development and industrial project planning.',
  body:
    'I develop production and business plans, build SOPs and ISO-based processes, and translate operational requirements into practical ERP workflows. I have led multi-level production teams, managed project timelines, supported licensing and logistics, and built data-driven models that improve planning accuracy.',
  pillars: [
    {
      icon: 'factory',
      title: 'Manufacturing operations',
      text: 'Led a production team of about 60 people, from shift supervisors to machine operators.',
    },
    {
      icon: 'chain',
      title: 'Supply chain planning',
      text: 'Make-to-Order planning, material availability, demand analysis and inventory control.',
    },
    {
      icon: 'erp',
      title: 'ERP implementation',
      text: 'SAP PP/MM production setup and Odoo ERP workflows, built around how the plant really works.',
    },
    {
      icon: 'data',
      title: 'Data & Python',
      text: 'Streamlit planning tools in Python and Pandas that turn Excel data into clear decisions.',
    },
  ],
  languages: 'Arabic (Native) · English (Very Good)',
}

export const experience = [
  {
    company: 'UNIVAL-JO (Trusted Union For Industrial Consultation)',
    role: 'Planning Engineer & Business Development',
    place: 'Amman',
    dates: 'Sep 2026 – Present',
    summary:
      'Planning, licensing and ERP setup for an industrial manufacturing project in Saudi Arabia.',
    points: [
      'Developed business models and project plans from production capacity, market requirements, investment needs and operational constraints.',
      'Planned and followed up on current projects: defined timelines, monitored progress, flagged delays and corrective actions.',
      'Managed factory registration and licensing through Saudi government entities and e-services platforms, tracking applications, documents and approvals.',
      'Coordinated logistics: shipment planning, transportation, customs clearance, HS Codes and regulatory requirements.',
      'Developed and implemented SOPs, supported ISO 9001 and ISO 45001 application, and followed up on Odoo ERP workflows.',
    ],
    tools: ['Odoo ERP', 'ISO 9001', 'ISO 45001', 'SOP development', 'Project planning'],
  },
  {
    company: 'Hammoudeh-Group (Al Mafraq Plastic)',
    role: 'Production & Supply Chain Engineer',
    place: 'Mafraq',
    dates: 'Mar 2025 – Sep 2026',
    summary:
      'Production planning and ERP-driven operations in a plastic manufacturing plant.',
    points: [
      'Led and followed up a multi-level production team of approximately 60 employees: shift supervisors, machine operators and production workers.',
      'Analyzed production, inventory and material data to support planning and operational decisions.',
      'Used SAP ERP for production orders, material issuance, inventory tracking and reporting.',
      'Built Make-to-Order production plans while monitoring material availability, capacity and customer demand.',
      'Implemented ISO 9001 requirements, developed the related SOPs and integrated quality procedures into daily workflows.',
      'Worked with warehouse and management teams to improve material flow, reduce waste and prevent shortages.',
    ],
    tools: ['SAP PP/MM', 'Make-to-Order planning', 'ISO 9001', 'Inventory analysis', 'Excel'],
  },
  {
    company: 'Mudieb Haddad & Sons Company (Mr. Chips)',
    role: 'Production Intern',
    place: 'Zarqa',
    dates: 'Jul 2024 – Aug 2024',
    summary: 'Hands-on production line experience and daily production calculation.',
    points: [
      'Managed the production line, ensuring efficient operation, improvement, and adherence to safety standards.',
      'Calculated daily production, ensuring required quantities are met and maintaining operation of production lines.',
    ],
    tools: ['Production line management', 'Safety standards'],
  },
]

// visual keys map to components in src/components/Visuals.jsx
export const projects = [
  {
    slug: 'sap-production-setup',
    title: 'SAP Production System Setup',
    category: 'ERP Implementation',
    context: 'Hammoudeh-Group · Plastic manufacturing',
    status: 'Delivered',
    visual: 'sap',
    summary:
      'Led the production-side setup of SAP PP/MM: material coding, BOMs with waste logic, production orders and custom reports.',
    overview:
      'A structured production management system built in SAP PP and MM for the Production Department of a plastic manufacturing plant. I led the production-side structuring and worked directly with the external SAP implementation partner to turn manufacturing requirements into practical ERP configuration.',
    challenge:
      'The plant needed a structured production management system: reliable material traceability, accurate production planning, clear inventory visibility and control over raw material consumption and production waste.',
    role:
      'I led the production-side setup and structuring of the SAP system, working closely with the external implementation partner to translate manufacturing requirements into practical ERP configuration, and coordinated system validation.',
    solution: [
      'Structured and reorganized raw material and finished goods master data.',
      'Designed a standardized material coding system.',
      'Created and structured Bills of Materials, with material consumption logic and production waste calculations built in.',
      'Configured production order and material issuance workflows.',
      'Improved inventory tracking and production reporting, with customized reports for operational monitoring and decision-making.',
      'Coordinated system validation with the external implementation partner.',
    ],
    tools: ['SAP PP', 'SAP MM', 'BOM structuring', 'Master data', 'Production reporting'],
    results: [
      'Better material traceability from raw material to finished goods.',
      'More accurate production planning.',
      'Clearer inventory visibility.',
      'Tighter control over raw material consumption and production waste.',
    ],
    links: [],
  },
  {
    slug: 'factory-establishment-odoo',
    title: 'Factory Establishment & Odoo ERP Setup',
    category: 'Industrial Project Management',
    context: 'UNIVAL-JO · Al Kharj Industrial City, Saudi Arabia',
    status: 'Ongoing',
    visual: 'odoo',
    summary:
      'Operational readiness, licensing, layout planning and Odoo ERP implementation for a cleanroom sandwich panel factory.',
    overview:
      'Supporting the establishment and operational readiness of a manufacturing facility in Al Kharj Industrial City, Saudi Arabia, specializing in cleanroom sandwich panel manufacturing. The project combines factory planning, regulatory work and ERP implementation.',
    challenge:
      'Bring a new factory from plan to operational readiness: meet Saudi industrial licensing requirements, plan the production line and space, and have ERP workflows and master data ready before production starts.',
    role:
      'Coordinating and managing several workstreams: factory setup planning, licensing and regulatory requirements, production line layout, production processes and BOM structuring, Odoo ERP implementation, and ISO documentation. I also coordinate with suppliers, contractors, consultants and implementation partners.',
    solution: [
      'Factory setup planning and operational readiness.',
      'Saudi industrial licensing and regulatory requirements.',
      'Production line layout and factory space planning.',
      'Manufacturing processes, production planning and BOM structuring.',
      'Odoo ERP implementation across Sales, Purchase, Inventory, Manufacturing and Accounting.',
      'Preparation of raw material, finished product, supplier and customer master data.',
      'ISO 9001 and ISO 45001 documentation and operational procedures.',
    ],
    tools: ['Odoo ERP', 'ISO 9001', 'ISO 45001', 'Production layout', 'BOM structuring', 'Licensing'],
    results: [],
    note: 'In progress. Client details, financials and internal documents are intentionally not published.',
    links: [],
  },
  {
    slug: 'iso-9001-production',
    title: 'Production Department Process Standardization (ISO 9001)',
    category: 'Process Improvement',
    context: 'Hammoudeh-Group · Production Department',
    status: 'Implementation, not yet certified',
    visual: 'iso',
    summary:
      'Documented and structured production procedures to align with ISO 9001, designed around SAP-based workflows.',
    overview:
      'A focused process-standardization and documentation project for the Production Department, aligning its operating procedures with ISO 9001 requirements. The scope covered the Production Department only, not the whole company, and ISO 9001 certification has not yet been achieved.',
    challenge:
      'Production operations needed standardized documentation and workflows, with stronger process control and traceability.',
    role:
      'I documented and structured the department’s operating procedures to align with ISO 9001 requirements and integrated them into daily workflows.',
    solution: [
      'Developed 7 procedures covering production-related activities.',
      'Designed most procedures around system-based workflows in SAP ERP rather than paper-based documentation.',
      'Standardized how production operations are run, controlled and recorded.',
    ],
    tools: ['ISO 9001', 'SOP development', 'SAP ERP', 'Process documentation'],
    results: [],
    note: 'ISO 9001 certification has not been achieved yet. This project covers the Production Department only.',
    links: [],
  },
  {
    slug: 'production-planning-model',
    title: 'Production Planning Recommendation Model',
    category: 'Data Analytics & Python',
    context: 'Python · Streamlit · Pandas',
    status: 'Built',
    visual: 'planner',
    summary:
      'A weekly planning tool that turns stock and demand Excel files into coverage alerts and a machine-based production plan.',
    overview:
      'A Streamlit planning tool that converts Excel stock data into clear production and management decisions. It combines stock and item files into one planning view, calculates demand and coverage, flags risks and builds a production plan by machine. It was built to replace manual Excel work.',
    challenge:
      'Production planning relied on manual Excel work. The goal was a repeatable tool that turns stock and demand data into clear planning decisions.',
    role:
      'Designed and built the tool end to end: planning logic, business rules, alerts, exports and the management dashboard.',
    solution: [
      'Reads inventory balances and monthly demand, then calculates stock coverage in days.',
      'Classifies products by demand level and applies configurable target months, safety days and batch rounding per class.',
      'Raises product and customer alerts on coverage thresholds (defaults: red under 7 days, orange under 21, yellow under 60).',
      'Generates recommended production quantities by product and machine, and lets the planner confirm the final quantity.',
      'Fills the official production plan file automatically and exports management reports as Excel and PDF.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'openpyxl', 'ReportLab'],
    results: [
      'Replaces manual Excel planning with a repeatable, rule-based weekly process.',
      'Gives planners and management a single view of risk, priorities and recommended quantities.',
    ],
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Qosi-Alqasrawe/stock-planner' },
      { label: 'LinkedIn post', url: 'https://lnkd.in/p/dr8FSSyZ' },
    ],
  },
  {
    slug: 'demand-inventory-planning',
    title: 'Demand & Inventory Planning System',
    category: 'Supply Chain Optimization',
    context: 'Python · Pandas · NumPy · Streamlit',
    status: 'Built',
    visual: 'inventory',
    summary:
      'SKU-level demand forecasting, safety stock and reorder logic with Order, Review or Hold decisions and purchase proposals.',
    overview:
      'A planning system that combines SKU-level demand forecasting, inventory analysis and branch-level planning. It turns monthly sales history and stock positions into reorder decisions and purchase order proposals.',
    challenge:
      'Demand across SKUs and branches includes intermittent and lumpy patterns. Planners need a consistent way to decide what to order, what to review and what to hold.',
    role:
      'Designed and built the system end to end: demand processing, forecasting approach, inventory policy calculations and the planner-facing reports.',
    solution: [
      'Builds forecasts at SKU and branch level from monthly sales files.',
      'Applies rolling backtesting to select suitable forecasting methods and handles intermittent and lumpy demand patterns.',
      'Calculates safety stock, reorder point, days of supply, order-up-to level and suggested order quantity.',
      'Classifies each SKU as Order, Review or Hold.',
      'Generates purchase order proposals and an overstock report.',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Excel reporting'],
    results: [
      'Every SKU classified as Order, Review or Hold.',
      'Purchase order proposals and an overstock report generated directly from the data.',
    ],
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Qosi-Alqasrawe/Supply-Chain-Porject' },
      { label: 'LinkedIn post', url: 'https://lnkd.in/p/daWD-p47' },
    ],
  },
]

export const skills = [
  {
    icon: 'chain',
    title: 'Supply Chain & Production Planning',
    items: [
      'Production planning & scheduling',
      'Make-to-Order planning',
      'Demand analysis',
      'Inventory planning',
      'Material availability',
    ],
  },
  {
    icon: 'erp',
    title: 'ERP Systems',
    items: [
      'SAP production system setup',
      'Production orders & material issuance',
      'BOM structuring',
      'Inventory tracking & reporting',
      'Odoo ERP workflows',
    ],
  },
  {
    icon: 'iso',
    title: 'ISO & Process Management',
    items: [
      'ISO 9001 & ISO 45001',
      'SOP development',
      'Process documentation',
      'Workflow integration',
    ],
  },
  {
    icon: 'data',
    title: 'Demand & Inventory Analytics',
    items: [
      'Forecasting',
      'Stock coverage & days of supply',
      'Safety stock & reorder point',
      'ABC classification',
      'Order recommendations',
    ],
  },
  {
    icon: 'project',
    title: 'Business Development & Project Planning',
    items: [
      'Business models',
      'Project plans & timelines',
      'Capacity analysis',
      'Market requirements',
      'Delay monitoring',
    ],
  },
  {
    icon: 'license',
    title: 'Industrial Licensing & Compliance',
    items: [
      'Factory registration',
      'Government e-services',
      'Licensing documentation',
      'Application tracking',
    ],
  },
  {
    icon: 'truck',
    title: 'Logistics Coordination',
    items: [
      'Shipment planning',
      'Transportation',
      'Customs clearance & HS Codes',
      'Regulatory coordination',
    ],
  },
  {
    icon: 'factory',
    title: 'Manufacturing Operations',
    items: [
      'Production line coordination',
      'Material flow',
      'Waste monitoring',
      'Production capacity',
      'Cross-functional operations',
    ],
  },
  {
    icon: 'chart',
    title: 'Data Tools & Reporting',
    items: ['Python · Pandas · NumPy', 'Streamlit dashboards', 'Excel reports', 'Management reporting'],
  },
]

export const personalSkills = [
  'Attention to detail & data accuracy',
  'Data-driven problem solving',
  'Analytical thinking',
  'Production team leadership',
  'Planning & organization',
  'Cross-functional collaboration',
  'Continuous learning & adaptability',
]

export const education = {
  school: 'The Hashemite University',
  place: 'Zarqa, Jordan',
  degree: 'Bachelor’s Degree in Industrial Engineering',
  dates: 'Oct 2020 – Feb 2025',
  grade: 'Overall grade: Very Good',
}

export const certifications = [
  {
    name: 'Certified Supply Chain Analyst (CSCA)',
    issuer: 'International Supply Chain Education Alliance (ISCEA)',
    date: 'Jul 2024',
  },
  {
    name: 'Career Essentials in Project Management',
    issuer: 'Microsoft & LinkedIn',
    date: 'Nov 2024',
  },
]

export const achievements = [
  {
    kind: 'Professional',
    title: 'SAP Production System Setup',
    text: 'Led the full setup and structuring of the SAP production system for the Production Department: material coding, BOM development, production reports and system validation.',
  },
  {
    kind: 'Professional',
    title: 'ISO 9001 Implementation – Production Department',
    text: 'Led the implementation of ISO 9001 requirements at Hammoudeh-Group, developed the related SOPs and integrated quality procedures into operational workflows.',
  },
  {
    kind: 'Professional',
    title: 'ISO-Based Process Development',
    text: 'Developed SOPs and supported ISO 9001 and ISO 45001 application at UNIVAL-JO, including ERP workflow integration.',
  },
  {
    kind: 'Competition',
    rank: '1st',
    title: 'Supply Chain Hackathon',
    text: 'First place through strategic decision-making in The Fresh Connection simulation.',
  },
  {
    kind: 'Competition',
    rank: 'Finalist',
    title: 'Global Student Challenge – The Fresh Connection',
    text: 'Reached the global finals.',
  },
  {
    kind: 'Competition',
    rank: '3rd',
    title: 'ISCEA Global Supply Chain Competition',
    text: 'Third place for supply chain strategy development and risk mitigation.',
  },
]
