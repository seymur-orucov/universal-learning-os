const fs = require("fs");
const path = require("path");

function findRepoRoot(startDir = process.cwd()) {
  let current = path.resolve(startDir);

  while (true) {
    if (
      fs.existsSync(path.join(current, "AGENTS.md")) &&
      fs.existsSync(path.join(current, "exports", "generated"))
    ) {
      return current;
    }

    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error("Could not find repository root. Run the CLI from inside universal-learning-os.");
    }
    current = parent;
  }
}

function getGeneratedPackPath(repoRoot, domain, profile) {
  return path.join(repoRoot, "exports", "generated", `${domain}-${profile}`);
}

function assertGeneratedPackPath(repoRoot, outputDir) {
  const generatedRoot = path.resolve(repoRoot, "exports", "generated");
  const resolvedOutput = path.resolve(outputDir);
  if (!resolvedOutput.startsWith(`${generatedRoot}${path.sep}`)) {
    throw new Error(`Refusing to write outside exports/generated: ${resolvedOutput}`);
  }
}

module.exports = {
  assertGeneratedPackPath,
  findRepoRoot,
  getGeneratedPackPath,
};
