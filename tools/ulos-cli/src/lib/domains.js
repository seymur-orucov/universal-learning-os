const SUPPORTED_DOMAINS = [
  "sql-postgresql",
  "english",
  "javascript",
  "typescript",
];

const SUPPORTED_PROFILES = ["standard", "compact"];

function isSupportedDomain(domain) {
  return SUPPORTED_DOMAINS.includes(domain);
}

function isSupportedProfile(profile) {
  return SUPPORTED_PROFILES.includes(profile);
}

module.exports = {
  SUPPORTED_DOMAINS,
  SUPPORTED_PROFILES,
  isSupportedDomain,
  isSupportedProfile,
};
