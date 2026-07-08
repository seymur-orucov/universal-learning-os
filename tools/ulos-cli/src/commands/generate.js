const { isSupportedDomain, isSupportedProfile } = require("../lib/domains");

function generate(options) {
  const { domain, profile } = options;

  if (!isSupportedDomain(domain)) {
    console.error(`Unsupported domain: ${domain || "<missing>"}`);
    console.error("Supported domains: sql-postgresql, english, javascript, typescript");
    return 1;
  }

  if (!isSupportedProfile(profile)) {
    console.error(`Unsupported profile: ${profile || "<missing>"}`);
    console.error("Supported profiles: standard, compact");
    return 1;
  }

  console.log("Generate command is planned for a future stage.");
  console.log("Current generated packs are maintained as repository files.");
  console.log(`Requested pack: ${domain}-${profile}`);
  return 0;
}

module.exports = {
  generate,
};
