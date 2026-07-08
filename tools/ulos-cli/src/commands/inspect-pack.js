const { isSupportedDomain, isSupportedProfile } = require("../lib/domains");
const { validatePack } = require("../lib/validation");

function inspectPack(repoRoot, options) {
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

  const result = validatePack(repoRoot, domain, profile);

  console.log(`Pack: ${domain}-${profile}`);
  console.log(`Path: ${result.packPath}`);
  console.log(`Profile: ${profile}`);
  console.log(`File count: ${result.files.length}`);
  console.log(`Expected rule: ${result.rule.label}`);
  console.log(`Rule status: ${result.checks.find((check) => check.label === "file count").passed ? "PASS" : "FAIL"}`);
  console.log("Checks:");
  for (const check of result.checks) {
    console.log(`- ${check.label}: ${check.passed ? "ok" : "FAIL"}${check.detail ? ` (${check.detail})` : ""}`);
  }
  console.log("Files:");
  for (const file of result.files) {
    console.log(`- ${file}`);
  }

  return result.passed ? 0 : 1;
}

module.exports = {
  inspectPack,
};
