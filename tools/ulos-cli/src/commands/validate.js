const { DOMAIN_CONFIG, SUPPORTED_PROFILES } = require("../lib/domains");
const { validatePack } = require("../lib/validation");

function validate(repoRoot) {
  const results = [];

  console.log("Universal Learning OS Pack Validation\n");
  console.log(`Domains checked: ${DOMAIN_CONFIG.length}`);
  console.log(`Packs checked: ${DOMAIN_CONFIG.length * SUPPORTED_PROFILES.length}\n`);

  for (const domain of DOMAIN_CONFIG.map((entry) => entry.id)) {
    for (const profile of SUPPORTED_PROFILES) {
      const result = validatePack(repoRoot, domain, profile);
      results.push(result);

      console.log(`[${result.passed ? "PASS" : "FAIL"}] ${result.packName}`);
      for (const check of result.checks) {
        console.log(`  - ${check.label}: ${check.passed ? "ok" : "FAIL"}${check.detail ? ` (${check.detail})` : ""}`);
      }
      console.log("");
    }
  }

  const hasFailure = results.some((result) => !result.passed);

  if (hasFailure) {
    console.error("Result: FAIL");
    return 1;
  }

  console.log("Result: PASS");
  return 0;
}

module.exports = {
  validate,
};
