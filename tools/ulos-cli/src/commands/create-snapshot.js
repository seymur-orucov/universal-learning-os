const {
  SNAPSHOT_TYPES,
  SUPPORTED_DOMAINS,
  assertSupportedDomain,
  buildSnapshotContent,
  defaultSnapshotPath,
  readTemplate,
  writeScaffold,
} = require("../lib/learner-runtime");

function createSnapshot(repoRoot, options) {
  try {
    if (!options.domain) {
      throw new Error("Missing required option: --domain <domain>");
    }

    const domainConfig = assertSupportedDomain(options.domain);
    const snapshotType = options.type;

    if (!snapshotType) {
      throw new Error("Missing required option: --type <milestone|monthly|assessment|progress>");
    }

    if (!SNAPSHOT_TYPES.includes(snapshotType)) {
      throw new Error(`Unsupported snapshot type: ${snapshotType || "<missing>"}`);
    }

    const template = readTemplate(repoRoot, "templates/learner-snapshot/LEARNER_SNAPSHOT_TEMPLATE.md");
    const outputPath = options.out || defaultSnapshotPath(domainConfig.id, snapshotType);
    const content = buildSnapshotContent(domainConfig, snapshotType, template);
    const targetPath = writeScaffold(repoRoot, outputPath, content, { force: options.force });

    console.log("create-snapshot completed successfully");
    console.log("");
    console.log("Command: create-snapshot");
    console.log(`Domain: ${domainConfig.id}`);
    console.log(`Type: ${snapshotType}`);
    console.log(`Output: ${targetPath}`);
    console.log("Note: this snapshot is optional, periodic, and user-requested.");
    console.log("");
    console.log("Next:");
    console.log("- fill only learner-approved summary fields");
    console.log("- run: node tools/ulos-cli/src/index.js validate-learner");
    return 0;
  } catch (error) {
    console.error(`Create snapshot failed: ${error.message}`);
    if (String(error.message).startsWith("Unsupported domain:") || String(error.message).startsWith("Missing required option: --domain")) {
      console.error(`Supported domains: ${SUPPORTED_DOMAINS.join(", ")}`);
    }
    if (String(error.message).startsWith("Unsupported snapshot type:") || String(error.message).startsWith("Missing required option: --type")) {
      console.error(`Supported snapshot types: ${SNAPSHOT_TYPES.join(", ")}`);
    }
    return 1;
  }
}

module.exports = {
  createSnapshot,
};
