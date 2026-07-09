const path = require("path");
const { validateLearnerArtifacts } = require("../lib/learner-runtime");

function validateLearner(repoRoot) {
  const result = validateLearnerArtifacts(repoRoot);

  console.log("Universal Learning OS Learner Artifact Validation");
  console.log("");
  console.log(`Learner root: ${result.learnerRoot}`);
  console.log(`Files checked: ${result.files.length}`);

  if (result.files.length > 0) {
    console.log("");
    console.log("Files:");
    for (const filePath of result.files) {
      console.log(`- ${path.relative(repoRoot, filePath)}`);
    }
  }

  if (!result.passed) {
    console.log("");
    console.log("Violations:");
    for (const violation of result.violations) {
      console.log(`- ${path.relative(repoRoot, violation.filePath)}: contains \`${violation.marker}\``);
    }
    console.log("");
    console.log("Result: FAIL");
    return 1;
  }

  console.log("");
  console.log("Result: PASS");
  return 0;
}

module.exports = {
  validateLearner,
};
