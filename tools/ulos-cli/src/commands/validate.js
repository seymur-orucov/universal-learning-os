const fs = require("fs");
const { SUPPORTED_DOMAINS, SUPPORTED_PROFILES } = require("../lib/domains");
const { getGeneratedPackPath } = require("../lib/paths");
const { countFiles, expectedRule } = require("../lib/file-counts");

function validate(repoRoot) {
  let hasFailure = false;

  console.log("Generated Project Pack Validation\n");

  for (const domain of SUPPORTED_DOMAINS) {
    for (const profile of SUPPORTED_PROFILES) {
      const packPath = getGeneratedPackPath(repoRoot, domain, profile);
      const exists = fs.existsSync(packPath);
      const count = countFiles(packPath);
      const rule = expectedRule(profile);
      const passed = exists && rule.passes(count);
      const status = passed ? "PASS" : "FAIL";

      if (!passed) {
        hasFailure = true;
      }

      console.log(`${status} ${domain}-${profile}`);
      console.log(`  path: ${packPath}`);
      console.log(`  exists: ${exists ? "yes" : "no"}`);
      console.log(`  files: ${count}`);
      console.log(`  rule: ${rule.label}\n`);
    }
  }

  if (hasFailure) {
    console.error("Validation failed.");
    return 1;
  }

  console.log("Validation passed.");
  return 0;
}

module.exports = {
  validate,
};
