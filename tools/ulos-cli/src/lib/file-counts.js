const fs = require("fs");
const path = require("path");

function listFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort();
}

function countFiles(directory) {
  return listFiles(directory).length;
}

function expectedRule(profile) {
  if (profile === "standard") {
    return {
      label: "exactly 25 files",
      expected: 25,
      passes: (count) => count === 25,
    };
  }

  if (profile === "compact") {
    return {
      label: "exactly 5 files",
      expected: 5,
      passes: (count) => count === 5,
    };
  }

  throw new Error(`Unsupported profile: ${profile}`);
}

function fileExists(directory, fileName) {
  return fs.existsSync(path.join(directory, fileName));
}

function readFileIfExists(directory, fileName) {
  const filePath = path.join(directory, fileName);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

module.exports = {
  listFiles,
  countFiles,
  expectedRule,
  fileExists,
  readFileIfExists,
};
