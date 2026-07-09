const {
  SNAPSHOT_TYPES,
  assertSupportedDomain,
  buildSnapshotContent,
  defaultSnapshotPath,
  readTemplate,
  writeScaffold,
} = require("../lib/learner-runtime");

function createSnapshot(repoRoot, options) {
  try {
    const domainConfig = assertSupportedDomain(options.domain);
    const snapshotType = options.type;

    if (!SNAPSHOT_TYPES.includes(snapshotType)) {
      throw new Error(`Unsupported snapshot type: ${snapshotType || "<missing>"}`);
    }

    const template = readTemplate(repoRoot, "templates/learner-snapshot/LEARNER_SNAPSHOT_TEMPLATE.md");
    const outputPath = options.out || defaultSnapshotPath(domainConfig.id, snapshotType);
    const content = buildSnapshotContent(domainConfig, snapshotType, template);
    const targetPath = writeScaffold(repoRoot, outputPath, content, { force: options.force });

    console.log("Created learner snapshot scaffold");
    console.log("");
    console.log(`Domain: ${domainConfig.id}`);
    console.log(`Type: ${snapshotType}`);
    console.log(`Output: ${targetPath}`);
    console.log("Optional: yes");
    console.log("Periodic: yes");
    console.log("User-requested: yes");
    console.log("");
    console.log("Next:");
    console.log("- fill only learner-approved summary fields");
    console.log("- run: node tools/ulos-cli/src/index.js validate-learner");
    return 0;
  } catch (error) {
    console.error(`Create snapshot failed: ${error.message}`);
    if (String(error.message).startsWith("Unsupported domain:")) {
      console.error("Supported domains: sql-postgresql, english, javascript, typescript");
    }
    if (String(error.message).startsWith("Unsupported snapshot type:")) {
      console.error(`Supported snapshot types: ${SNAPSHOT_TYPES.join(", ")}`);
    }
    return 1;
  }
}

module.exports = {
  createSnapshot,
};
