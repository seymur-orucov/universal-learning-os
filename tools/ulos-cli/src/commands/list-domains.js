const { SUPPORTED_DOMAINS, SUPPORTED_PROFILES } = require("../lib/domains");

function listDomains() {
  console.log("Supported domains:\n");

  for (const domain of SUPPORTED_DOMAINS) {
    console.log(`- ${domain}`);
    console.log(`  profiles: ${SUPPORTED_PROFILES.join(", ")}\n`);
  }
}

module.exports = {
  listDomains,
};
