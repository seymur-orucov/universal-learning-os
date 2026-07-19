const {
  SUPPORTED_DOMAINS,
  assertSupportedDomain,
  buildHandoffContent,
  defaultHandoffPath,
  readTemplate,
  writeScaffold,
} = require("../lib/learner-runtime");

function createHandoff(repoRoot, options) {
  try {
    if (!options.domain) {
      throw new Error("Missing required option: --domain <domain>");
    }

    const domainConfig = assertSupportedDomain(options.domain);
    const template = readTemplate(repoRoot, "templates/learner-handoff/LEARNER_HANDOFF_TEMPLATE.md");
    const outputPath = options.out || defaultHandoffPath(domainConfig.id);
    const content = buildHandoffContent(domainConfig, template);
    const targetPath = writeScaffold(repoRoot, outputPath, content, { force: options.force });

    console.log("create-handoff completed successfully");
    console.log("");
    console.log("Command: create-handoff");
    console.log(`Domain: ${domainConfig.id}`);
    console.log(`Output: ${targetPath}`);
    console.log("Note: this handoff is optional and user-requested.");
    console.log("");
    console.log("Next:");
    console.log("- fill only learner-approved summary fields");
    console.log("- run: node tools/ulos-cli/src/index.js validate-learner");
    return 0;
  } catch (error) {
    console.error(`Create handoff failed: ${error.message}`);
    if (String(error.message).startsWith("Unsupported domain:") || String(error.message).startsWith("Missing required option: --domain")) {
      console.error(`Supported domains: ${SUPPORTED_DOMAINS.join(", ")}`);
    }
    return 1;
  }
}

module.exports = {
  createHandoff,
};
