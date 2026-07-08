const { DOMAIN_CONFIG, SUPPORTED_PROFILES } = require("../lib/domains");

function listDomains() {
  console.log("Supported domains:\n");

  for (const domain of DOMAIN_CONFIG) {
    console.log(`- ${domain.id}`);
    console.log(`  profiles: ${SUPPORTED_PROFILES.join(", ")}\n`);
  }
}

module.exports = {
  listDomains,
};
