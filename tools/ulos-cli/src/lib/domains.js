const DOMAIN_CONFIG = [
  { id: "sql-postgresql", launchPrefix: "SQL_POSTGRESQL" },
  { id: "english", launchPrefix: "ENGLISH" },
  { id: "javascript", launchPrefix: "JAVASCRIPT" },
  { id: "typescript", launchPrefix: "TYPESCRIPT" },
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
