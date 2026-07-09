const path = require("path");
const { validateLearnerArtifacts } = require("../lib/learner-runtime");

function validateLearner(repoRoot) {
  const result = validateLearnerArtifacts(repoRoot);

  console.log("Universal Learning OS Learner Artifact Validation");
  console.log("");
  console.log(`Learner root: ${result.learnerRoot}`);
  console.log(`Learner runtime artifacts found: ${result.learnerArtifactsFound ? "yes" : "no"}`);
  console.log(`Handoff directory found: ${result.handoffDirExists ? "yes" : "no"}`);
  console.log(`Snapshot directory found: ${result.snapshotDirExists ? "yes" : "no"}`);
  console.log(`Handoff files checked: ${result.handoffFiles.length}`);
  console.log(`Snapshot files checked: ${result.snapshotFiles.length}`);
  console.log(`Violations found: ${result.violations.length}`);

  if (result.files.length > 0) {
    console.log("");
    console.log("Markdown files checked:");
    for (const filePath of result.files) {
      console.log(`- ${path.relative(repoRoot, filePath)}`);
    }
  }

  if (result.ignoredFiles.length > 0) {
    console.log("");
    console.log("Warnings:");
    for (const filePath of result.ignoredFiles) {
      console.log(`- ignored non-markdown learner artifact: ${path.relative(repoRoot, filePath)}`);
    }
  }

  if (!result.passed) {
    console.log("");
    console.log("Violations:");
    for (const violation of result.violations) {
      console.log(`- ${path.relative(repoRoot, violation.filePath)}: contains \`${violation.marker}\``);
    }
    console.log("");
    console.log("Status: FAIL");
    return 1;
  }

  console.log("");
  console.log("Status: PASS");
  return 0;
}

module.exports = {
  validateLearner,
};
