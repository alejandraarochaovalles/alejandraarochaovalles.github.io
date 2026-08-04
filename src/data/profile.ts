// ─────────────────────────────────────────────────────────────
//  ÚNICO FICHERO QUE NECESITAS EDITAR.
//  Todo el texto del sitio sale de aquí.
// ─────────────────────────────────────────────────────────────

export const site = {
  domain: 'tudominio.com',              // TODO
  url: 'https://tudominio.com',         // TODO
  title: 'Alejandra Arocha — Agile Coach & Delivery Systems',
  description:
    'Agile Coach and electronic engineer. Delivery metrics at scale, AI-enabled refinement and flow optimisation for large product organisations. Barcelona, remote.',
};

export const person = {
  name: 'Alejandra Arocha',
  legalName: 'María Alejandra Arocha Ovalles',
  role: 'Agile Coach & Scrum Master',
  roleSub: 'Delivery metrics · Flow · AI-enabled refinement',
  location: 'Barcelona · Remote (EU/UK) · B2B',
  email: 'alejandraarochaovalles@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alejandra-arocha' },
    { label: 'GitHub', href: 'https://github.com/alejandraarochaovalles-svg' },
    { label: 'Newsletter', href: 'https://www.linkedin.com/newsletters/TODO' }, // TODO
    { label: 'CV (PDF)', href: '/alejandra-arocha-cv.pdf' },
  ],
};

export const thesis = {
  headline: 'I coach delivery teams. I also build the systems that measure them.',
  body:
    'Electronic engineer by training, Agile Coach by trade. I design delivery metrics systems for large product organisations — most recently across 50+ teams in a 10,000-person insurance group — and I build the tooling that makes them usable: flow dashboards, multi-agent refinement pipelines, assessment tools teams actually open on a Monday.',
};

// Elemento firma del hero: el sistema real de refinamiento.
export const pipeline = [
  { step: 'Raw story', note: 'input guardrail' },
  { step: 'PO Analyst', note: 'role · action · benefit' },
  { step: 'Tech Lead', note: 'Fibonacci · risks' },
  { step: 'QA Analyst', note: 'Gherkin · DoD' },
  { step: 'Reflector', note: 'score ≥ 7.0', highlight: true },
  { step: 'Jira', note: 'consolidated' },
];

export const expertise = [
  'Agile coaching & Scrum mastery',
  'DORA and flow metrics — lead time, cycle time, throughput',
  'Delivery predictability at scale',
  'Change facilitation & agile transformation',
  'Stakeholder management with senior leadership',
  'Distributed and remote delivery',
  'AI-assisted delivery insight & decision support',
  'Regulated environments — insurance, banking, telecom, retail',
];

export const projects = [
  {
    id: '01',
    kind: 'Multi-agent system',
    name: 'User Story Refinement Engine',
    problem:
      'Refinement is decision work, not paperwork — but teams spend hours turning vague requests into stories a developer can pick up.',
    architecture:
      'Five specialised agents behind an orchestrator. Input and output guardrails, three shared skills, four Jira tools scoped to least privilege, session memory plus a long-term store of every refined story. A Reflector agent scores each output; below threshold, only the failing agents re-run.',
    metrics: [
      ['5', 'agents in pipeline'],
      ['7.0', 'reflector pass score'],
      ['2', 'max retries'],
    ],
    stack: ['Python', 'Groq · Llama 3.3 70B', 'Pydantic v2', 'asyncio', 'Jinja2', 'Flask', 'Chart.js', 'uv'],
    links: [
      { label: 'Repository', href: 'https://github.com/alejandraarochaovalles-svg/Agente-Refinador-de-Historias-de-Usuario' },
    ],
  },
  {
    id: '02',
    kind: 'Delivery analytics',
    name: 'Cross-team Metrics System',
    problem:
      'Fifty-plus teams, no shared view of how work actually flows. Leadership asked for status; the teams needed evidence.',
    architecture:
      'A delivery metrics system built on Azure DevOps work-item data, from company-wide rollup down to a single team: lead time, cycle time and throughput surfaced as bottlenecks and systemic risks rather than raw charts. Built and refactored with GitHub Copilot, now migrating to a lighter UI for non-technical stakeholders.',
    metrics: [
      ['50+', 'teams covered'],
      ['~10k', 'employee organisation'],
      ['1:1', 'monthly team reviews'],
    ],
    stack: ['Azure DevOps API', 'Flow metrics', 'GitHub Copilot', 'Data viz'],
    links: [],
  },
  {
    id: '03',
    kind: 'Assessment tool',
    name: 'AI Readiness Assessment',
    problem:
      'Organisations ask "are we ready for AI?" and get a slide deck. They need a diagnosis they can act on.',
    architecture:
      'A live self-assessment that scores an organisation across capability dimensions and returns concrete next actions instead of a maturity label. Shipped and deployed, not a prototype.',
    metrics: [],
    stack: ['JavaScript', 'Netlify'],
    links: [{ label: 'Live tool', href: 'https://TODO.netlify.app' }], // TODO
  },
];

export const experience = [
  {
    period: '2023 — present',
    org: 'Capitole Consulting',
    role: 'Agile Coach / Delivery Consultant',
    bullets: [
      'Led delivery improvement initiatives inside a large insurance organisation (~10,000 employees).',
      'Designed and implemented a cross-team delivery metrics system across 50+ teams.',
      'Analysed lead time, cycle time and throughput to surface bottlenecks and systemic risks.',
      'Runs a monthly 1:1 coaching cycle per team, with an action backlog tracked in Azure DevOps.',
      'Shipped AI-assisted refinement prompts for story splitting, INVEST and acceptance criteria.',
      'Enabled leadership to make data-informed prioritisation decisions.',
    ],
  },
  {
    period: '2019 — present',
    org: 'IEBS Business School',
    role: 'Professor',
    bullets: [
      'Designed and delivers an Agile change management module integrating AI and Lean Change Management, within a Project Management master\u2019s programme.',
      'Delivers corporate training on Agile culture, team management and AI in production environments.',
      'Reviews student work and gives structured feedback to practitioners applying these concepts in real organisations.',
    ],
  },
  {
    period: '2018 — 2023',
    org: 'Prisma',
    role: 'Agile Coach / Scrum Master',
    bullets: [
      'Supported teams across retail, banking and insurance.',
      'Stabilised delivery processes, reducing rework and improving flow efficiency.',
      'Facilitated Scrum ceremonies in distributed environments.',
      'Analysed delivery metrics and team dynamics to drive continuous improvement.',
      'Identified dependencies and prioritisation issues affecting delivery performance.',
    ],
  },
];

export const earlier = [
  { org: 'AFP Capital', role: 'Agile Coach', note: 'Transformation programme, pension funds' },
  { org: 'Everis', role: 'Scrum Master', note: 'Digital product delivery, financial services' },
  { org: 'Technisys', role: 'Scrum Master', note: 'Banking technology platform' },
  { org: 'eWin Smart Solutions', role: 'Scrum Master', note: 'Software product delivery' },
];

export const credentials = {
  education: [
    { title: 'Electronic Engineering', where: 'Universidad Simón Bolívar' },
    { title: 'Máster en IA e Innovación', where: 'Founderz & Microsoft — in progress, 2026' },
  ],
  certifications: [
    'ICAgile — Coaching Agile Transitions',
    'ICAgile — Enterprise Agility',
    'Lean Change Agent — Lean Change Management',
    'Management 3.0 Foundations',
  ],
  tools: ['Jira', 'Azure DevOps', 'Confluence', 'Python', 'Git & CI/CD', 'Power BI', 'GitHub Copilot', 'LLM APIs'],
  languages: 'Spanish (native) · English (professional)',
};

export const writing = {
  newsletter: 'Change, Tech & Human Systems',
  newsletterHref: 'https://www.linkedin.com/newsletters/TODO', // TODO
  pieces: [
    {
      title: 'The Agile Productivity Paradox: Why AI-Powered Teams Aren\u2019t Always Delivering Faster',
      href: '#', // TODO
    },
    { title: 'Refinement is decision work', href: '#' }, // TODO
  ],
};
