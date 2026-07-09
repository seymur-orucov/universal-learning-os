const {
  assertSupportedDomain,
  buildHandoffContent,
  defaultHandoffPath,
  readTemplate,
  writeScaffold,
} = require("../lib/learner-runtime");

function createHandoff(repoRoot, options) {
  try {
    const domainConfig = assertSupportedDomain(options.domain);
    const template = readTemplate(repoRoot, "templates/learner-handoff/LEARNER_HANDOFF_TEMPLATE.md");
    const outputPath = options.out || defaultHandoffPath(domainConfig.id);
    const content = buildHandoffContent(domainConfig, template);
    const targetPath = writeScaffold(repoRoot, outputPath, content, { force: options.force });

    console.log("Created learner handoff scaffold");
    console.log("");
    console.log(`Domain: ${domainConfig.id}`);
    console.log(`Output: ${targetPath}`);
    console.log("Optional: yes");
    console.log("User-requested: yes");
    console.log("");
    console.log("Next:");
    console.log("- fill only learner-approved summary fields");
    console.log("- run: node tools/ulos-cli/src/index.js validate-learner");
    return 0;
  } catch (error) {
    console.error(`Create handoff failed: ${error.message}`);
    if (String(error.message).startsWith("Unsupported domain:")) {
      console.error("Supported domains: sql-postgresql, english, javascript, typescript");
    }
    return 1;
  }
}

module.exports = {
  createHandoff,
};
