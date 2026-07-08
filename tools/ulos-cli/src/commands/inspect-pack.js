const { isSupportedDomain, isSupportedProfile } = require("../lib/domains");
const { getGeneratedPackPath } = require("../lib/paths");
const {
  listFiles,
  expectedRule,
  fileExists,
  readFileIfExists,
} = require("../lib/file-counts");

function hasLearnerFacingMentorMode(projectInstructions) {
  if (!projectInstructions) {
    return false;
  }

  return projectInstructions.includes("Learner-Facing Mentor Mode");
}

function inspectPack(repoRoot, options) {
  const { domain, profile } = options;

  if (!isSupportedDomain(domain)) {
    console.error(`Unsupported domain: ${domain || "<missing>"}`);
    console.error("Supported domains: sql-postgresql, english, javascript, typescript");
    return 1;
  }

  if (!isSupportedProfile(profile)) {
    console.error(`Unsupported profile: ${profile || "<missing>"}`);
    console.error("Supported profiles: standard, compact");
    return 1;
  }

  const packPath = getGeneratedPackPath(repoRoot, domain, profile);
  const files = listFiles(packPath);
  const rule = expectedRule(profile);
  const projectInstructionsExists = fileExists(packPath, "PROJECT_INSTRUCTIONS.md");
  const startupPromptExists = fileExists(packPath, "STARTUP_PROMPT.md");
  const projectInstructions = readFileIfExists(packPath, "PROJECT_INSTRUCTIONS.md");
  const learnerFacingMentorMode = hasLearnerFacingMentorMode(projectInstructions);

  console.log(`Pack: ${domain}-${profile}`);
  console.log(`Path: ${packPath}`);
  console.log(`Profile: ${profile}`);
  console.log(`File count: ${files.length}`);
  console.log(`Expected rule: ${rule.label}`);
  console.log(`Rule status: ${rule.passes(files.length) ? "PASS" : "FAIL"}`);
  console.log(`PROJECT_INSTRUCTIONS.md: ${projectInstructionsExists ? "present" : "missing"}`);
  console.log(`STARTUP_PROMPT.md: ${startupPromptExists ? "present" : "missing"}`);
  console.log(`Learner-Facing Mentor Mode: ${learnerFacingMentorMode ? "present" : "missing"}`);
  console.log("Files:");
  for (const file of files) {
    console.log(`- ${file}`);
  }

  return rule.passes(files.length) && projectInstructionsExists && startupPromptExists ? 0 : 1;
}

module.exports = {
  inspectPack,
};
