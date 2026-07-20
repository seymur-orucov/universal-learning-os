const DOMAIN_CONFIG = [
  {
    id: "sql-postgresql",
    launchPrefix: "SQL_POSTGRESQL",
    title: "SQL/PostgreSQL",
    purpose: "Teach SQL and PostgreSQL step by step from beginner to advanced practical database competence.",
    terms: "SQL/PostgreSQL technical terms",
  },
  {
    id: "english",
    launchPrefix: "ENGLISH",
    title: "English",
    purpose: "Teach English for Software Engineers from B1 toward B2/C1 professional communication.",
    terms: "English target-language examples and software communication terms",
  },
  {
    id: "javascript",
    launchPrefix: "JAVASCRIPT",
    title: "JavaScript",
    purpose: "Teach JavaScript from beginner foundations to advanced/professional runtime reasoning for frontend/backend engineering and interviews.",
    terms: "JavaScript technical terms",
  },
  {
    id: "typescript",
    launchPrefix: "TYPESCRIPT",
    title: "TypeScript",
    purpose: "Teach TypeScript from foundations to advanced/professional fluency for frontend/backend engineering, React projects, API typing, large codebases, and interviews.",
    terms: "TypeScript technical terms",
  },
  {
    id: "dsa",
    launchPrefix: "DSA",
    title: "Data Structures and Algorithms",
    purpose: "Build practical, interview-ready algorithmic problem-solving through reusable patterns, JavaScript-first implementation, complexity analysis, and guided-to-independent practice.",
    terms: "DSA technical terms",
  },
  {
    id: "frontend-system-design",
    launchPrefix: "FRONTEND_SYSTEM_DESIGN",
    title: "Front-End System Design",
    purpose: "Develop requirements-first frontend architecture judgment, trade-off reasoning, failure analysis, and design defense for Senior, Lead, Staff, and Front-End Architect-level work and interviews.",
    terms: "Front-End System Design technical terms",
  },
  {
    id: "nodejs",
    launchPrefix: "NODEJS",
    title: "Node.js",
    purpose: "Develop runtime-first, production-aware Node.js backend competence for experienced JavaScript/TypeScript Front-End Engineers moving toward backend or full-stack engineering.",
    terms: "Node.js and backend technical terms",
  },
  {
    id: "git",
    launchPrefix: "GIT",
    title: "Git",
    purpose: "Develop mental-model-first, recovery-aware Git competence from everyday repository work to advanced collaboration, release governance, debugging, and workflow design.",
    terms: "Git commands and version-control technical terms",
  },
  {
    id: "go",
    launchPrefix: "GO",
    title: "Go",
    purpose:
      "Develop language-first, concurrency-aware, production-ready Go competence for experienced JavaScript/TypeScript engineers moving toward backend, systems, platform, or full-stack engineering.",
    terms: "Go, backend, concurrency, systems, and production engineering technical terms",
  },
  {
    id: "frontend-testing",
    launchPrefix: "FRONTEND_TESTING",
    title: "Front-End Testing",
    purpose:
      "Develop production-oriented testing judgment and implementation skills for TypeScript, React, Vitest, React Testing Library, MSW, and Playwright.",
    terms: "testing, TypeScript, React, Vitest, React Testing Library, MSW, and Playwright terminology",
  },
  {
    id: "gof-react-patterns",
    launchPrefix: "GOF_REACT_PATTERNS",
    title: "GoF and React Design Patterns",
    purpose:
      "Develop pattern-selection, refactoring, and architecture judgment across GoF and React patterns without overengineering or false one-to-one mappings.",
    terms: "GoF, TypeScript, JavaScript, React, Vitest, and React Testing Library terminology",
  },
];

const SUPPORTED_DOMAINS = DOMAIN_CONFIG.map((domain) => domain.id);

const SUPPORTED_PROFILES = ["standard", "compact"];

function isSupportedDomain(domain) {
  return SUPPORTED_DOMAINS.includes(domain);
}

function isSupportedProfile(profile) {
  return SUPPORTED_PROFILES.includes(profile);
}

function getDomainConfig(domainId) {
  return DOMAIN_CONFIG.find((domain) => domain.id === domainId);
}

module.exports = {
  DOMAIN_CONFIG,
  SUPPORTED_DOMAINS,
  SUPPORTED_PROFILES,
  getDomainConfig,
  isSupportedDomain,
  isSupportedProfile,
};
