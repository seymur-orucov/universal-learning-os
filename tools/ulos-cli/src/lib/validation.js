const fs = require("fs");
const path = require("path");
const { getDomainConfig } = require("./domains");
const { getGeneratedPackPath } = require("./paths");
const {
  listFiles,
  expectedRule,
  fileExists,
  readFileIfExists,
} = require("./file-counts");

const STANDARD_REQUIRED_FILES = [
  "PROJECT_INSTRUCTIONS.md",
  "STARTUP_PROMPT.md",
  "PACK_MANIFEST.md",
  "FILE_BUDGET.md",
  "CONTINUATION_PROMPT.md",
];

const COMPACT_REQUIRED_FILES = [
  "PROJECT_INSTRUCTIONS.md",
  "STARTUP_PROMPT.md",
  "DOMAIN_CORE.md",
  "COMMANDS_CORE.md",
  "MENTOR_SKILLS_CORE.md",
];

function pass(label, detail) {
  return { label, detail, passed: true };
}

function fail(label, detail) {
  return { label, detail, passed: false };
}

function checkRequiredFiles(packPath, profile) {
  const requiredFiles = profile === "compact" ? COMPACT_REQUIRED_FILES : STANDARD_REQUIRED_FILES;
  const missing = requiredFiles.filter((fileName) => !fileExists(packPath, fileName));

  if (missing.length > 0) {
    return fail("required files", `missing: ${missing.join(", ")}`);
  }

  return pass("required files", "ok");
}

function checkLearnerFacingMode(projectInstructions) {
  if (projectInstructions && projectInstructions.includes("Learner-Facing Mentor Mode")) {
    return pass("learner-facing mode", "ok");
  }

  return fail("learner-facing mode", "missing marker");
}

function checkMetadataGuardrail(projectInstructions) {
  const requiredPhrases = [
    "Evidence Generated",
    "Proposed State Updates",
    "YAML learner state updates",
    "explicitly requested",
  ];

  const missing = requiredPhrases.filter((phrase) => !projectInstructions || !projectInstructions.includes(phrase));

  if (missing.length > 0) {
    return fail("metadata guardrail", `missing marker phrase(s): ${missing.join(", ")}`);
  }

  return pass("metadata guardrail", "ok");
}

function checkStandardManifest(packPath, domain, profile) {
  if (profile !== "standard") {
    return pass("manifest", "not applicable");
  }

  const manifest = readFileIfExists(packPath, "PACK_MANIFEST.md");
  if (!manifest) {
    return fail("manifest", "PACK_MANIFEST.md missing");
  }

  const packName = `${domain}-${profile}`;
  const mentionsPack = manifest.includes(packName) || manifest.includes(domain);
  const mentionsBudget = manifest.includes("25") || manifest.toLowerCase().includes("standard");

  if (!mentionsPack || !mentionsBudget) {
    const missing = [];
    if (!mentionsPack) missing.push("domain or pack name");
    if (!mentionsBudget) missing.push("standard profile or 25-file budget");
    return fail("manifest", `missing: ${missing.join(", ")}`);
  }

  return pass("manifest", "ok");
}

function checkCompactStructure(files, profile) {
  if (profile !== "compact") {
    return pass("compact structure", "not applicable");
  }

  const extra = files.filter((fileName) => !COMPACT_REQUIRED_FILES.includes(fileName));
  const missing = COMPACT_REQUIRED_FILES.filter((fileName) => !files.includes(fileName));

  if (missing.length > 0 || extra.length > 0) {
    const details = [];
    if (missing.length > 0) details.push(`missing: ${missing.join(", ")}`);
    if (extra.length > 0) details.push(`unexpected: ${extra.join(", ")}`);
    return fail("compact structure", details.join("; "));
  }

  return pass("compact structure", "ok");
}

function expectedLaunchKitFiles(domain, profile) {
  const domainConfig = getDomainConfig(domain);
  const prefix = domainConfig.launchPrefix;

  if (profile === "compact") {
    return [
      `${prefix}_COMPACT_PROJECT_SETUP.md`,
      `${prefix}_COMPACT_UPLOAD_FILE_LIST.md`,
      `${prefix}_COMPACT_STARTUP_PROMPT_READY.md`,
      `${prefix}_COMPACT_CONTINUATION_PROMPT_READY.md`,
    ];
  }

  return [
    `${prefix}_PROJECT_SETUP.md`,
    `${prefix}_UPLOAD_FILE_LIST.md`,
    `${prefix}_STARTUP_PROMPT_READY.md`,
    `${prefix}_CONTINUATION_PROMPT_READY.md`,
  ];
}

function checkLaunchKit(repoRoot, domain, profile) {
  const launchKitPath = path.join(repoRoot, "exports", "generated", "project-launch-kits");
  const expectedFiles = expectedLaunchKitFiles(domain, profile);
  const missing = expectedFiles.filter((fileName) => !fs.existsSync(path.join(launchKitPath, fileName)));

  if (missing.length > 0) {
    return fail("launch kit", `missing: ${missing.join(", ")}`);
  }

  return pass("launch kit", "ok");
}

function validatePack(repoRoot, domain, profile) {
  const packPath = getGeneratedPackPath(repoRoot, domain, profile);
  const exists = fs.existsSync(packPath);
  const files = listFiles(packPath);
  const rule = expectedRule(profile);
  const projectInstructions = readFileIfExists(packPath, "PROJECT_INSTRUCTIONS.md");

  const checks = [];

  checks.push(exists ? pass("directory", "exists") : fail("directory", "missing"));

  const fileCountDetail = profile === "compact"
    ? `${files.length}/<=${rule.expected}`
    : `${files.length}/${rule.expected}`;
  checks.push(rule.passes(files.length) ? pass("file count", fileCountDetail) : fail("file count", fileCountDetail));

  checks.push(checkRequiredFiles(packPath, profile));
  checks.push(checkLearnerFacingMode(projectInstructions));
  checks.push(checkMetadataGuardrail(projectInstructions));

  if (profile === "standard") {
    checks.push(checkStandardManifest(packPath, domain, profile));
  } else {
    checks.push(checkCompactStructure(files, profile));
  }

  checks.push(checkLaunchKit(repoRoot, domain, profile));

  return {
    domain,
    profile,
    packName: `${domain}-${profile}`,
    packPath,
    files,
    rule,
    checks,
    passed: checks.every((check) => check.passed),
  };
}

module.exports = {
  COMPACT_REQUIRED_FILES,
  STANDARD_REQUIRED_FILES,
  expectedLaunchKitFiles,
  validatePack,
};
