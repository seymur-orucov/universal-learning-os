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
