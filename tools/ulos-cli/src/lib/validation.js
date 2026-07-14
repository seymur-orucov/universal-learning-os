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

function readLessonNoteRuntimeFiles(packPath, profile) {
  const names = profile === "compact"
    ? ["PROJECT_INSTRUCTIONS.md", "COMMANDS_CORE.md", "MENTOR_SKILLS_CORE.md"]
    : ["PROJECT_INSTRUCTIONS.md", "COMMAND_CONTINUE_LESSON.md", "SKILL_LESSON_INSTRUCTOR.md"];

  return names.map((fileName) => readFileIfExists(packPath, fileName) || "").join("\n");
}

function checkLessonNoteRoutingAndClosure(packPath, profile) {
  const content = readLessonNoteRuntimeFiles(packPath, profile);
  const required = [
    "SAVE_LESSON",
    "with no target, routes to `OBSIDIAN`",
    "SAVE_LESSON OBSIDIAN",
    "SAVE_LESSON NOTION",
    "SAVE_LESSON_TO_NOTION",
    "backward-compatible alias",
    "Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz",
    "explicit",
    "meaningful stopping point",
    "unfinished practice",
    "do not show the Notion alias as a second suggestion",
  ];
  const missing = required.filter((marker) => !content.toLowerCase().includes(marker.toLowerCase()));

  if (missing.length > 0) {
    return fail("lesson-note routing and closure", `missing marker(s): ${missing.join(", ")}`);
  }

  return pass("lesson-note routing and closure", "default Obsidian, explicit targets, alias, and generic closure boundary present");
}

function checkObsidianLessonNoteContract(packPath, profile) {
  const content = readLessonNoteRuntimeFiles(packPath, profile);
  const required = [
    "Lesson Summary Builder Agent Skill",
    "Unsupported values and empty categories MUST be omitted",
    "Obsidian Lesson Exporter Agent Skill",
    "Lesson NN - English Title.md",
    "Lesson Notes - YYYY-MM-DD.md",
    "Lesson Notes.md",
    "type: lesson-note",
    "mastery: not-assessed",
    "status: in-progress",
    "plos",
    "lesson",
    "ASCII/English",
    "Adapt sections to the domain",
    "recall questions",
    "place their answers later",
    "exactly one fenced block",
    "only after the runtime confirms successful creation",
    "supersedes the earlier session artifact",
    "does not access or write into an Obsidian vault",
  ];
  const missing = required.filter((marker) => !content.toLowerCase().includes(marker.toLowerCase()));

  if (missing.length > 0) {
    return fail("Obsidian lesson-note contract", `missing marker(s): ${missing.join(", ")}`);
  }

  return pass("Obsidian lesson-note contract", "shared summary, filename, YAML, adaptive note, artifact, fallback, and regeneration semantics present");
}

function checkNotionCompatibilityContract(packPath, profile) {
  const content = readLessonNoteRuntimeFiles(packPath, profile);
  const required = [
    "PLOS Learning Journal",
    "unambiguous match",
    "ask before creating a duplicate",
    "only after confirmed connector success",
    "Notion-compatible Markdown",
    "without claiming a write",
  ];
  const missing = required.filter((marker) => !content.toLowerCase().includes(marker.toLowerCase()));

  if (missing.length > 0) {
    return fail("Notion compatibility contract", `missing marker(s): ${missing.join(", ")}`);
  }

  return pass("Notion compatibility contract", "target discovery, duplicates, confirmed success, and fallback present");
}

function checkLessonNoteSafetyBoundaries(packPath, profile) {
  const content = readLessonNoteRuntimeFiles(packPath, profile);
  const required = [
    "does not create evidence",
    "does not mutate learner state",
    "MUST NOT infer mastery",
  ];
  const missing = required.filter((marker) => !content.toLowerCase().includes(marker.toLowerCase()));
  const forbidden = [
    { label: "embedded credential", pattern: /(?:notion|obsidian)?[_ -]?(?:api[_ -]?)?(?:token|secret|key)\s*[:=]\s*[^\s`]+/i },
    { label: "opaque target id", pattern: /(?:page|database|workspace|vault)[_-]?id\s*[:=]\s*[a-z0-9_-]{8,}/i },
    { label: "active learner source", pattern: /learners\/active-learner\//i },
    { label: "active learner state field", pattern: /(?:learner_profile_ref|learning_skill_records|evidence_log)\s*:/i },
    { label: "Windows local path", pattern: /[a-z]:\\(?:users|documents|desktop|obsidian|vault)\\/i },
    { label: "POSIX local path", pattern: /\/(?:users|home)\/[^\s`]+/i },
    { label: "Obsidian internal path", pattern: /(?:^|[\s`])\.obsidian\//im },
    { label: "unsupported export claim", pattern: /(?:create|export|download)(?:s|ed|ing)?\s+(?:an?\s+)?(?:pdf|docx|html)\b/i },
    { label: "automatic mastery claim", pattern: /automatically\s+(?:mark|set|change|upgrade)[^\n.]{0,40}mastery/i },
    { label: "automatic state claim", pattern: /automatically\s+(?:mutate|update|write)[^\n.]{0,40}(?:learner\s+)?state/i },
  ];
  const violations = forbidden.filter(({ pattern }) => pattern.test(content)).map(({ label }) => label);

  if (missing.length > 0 || violations.length > 0) {
    const details = [];
    if (missing.length > 0) details.push(`missing marker(s): ${missing.join(", ")}`);
    if (violations.length > 0) details.push(`found: ${violations.join(", ")}`);
    return fail("lesson-note safety boundaries", details.join("; "));
  }

  return pass("lesson-note safety boundaries", "evidence, mastery, state, credential, id, path, and format boundaries present");
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

  const fileCountDetail = `${files.length}/${rule.expected}`;
  checks.push(rule.passes(files.length) ? pass("file count", fileCountDetail) : fail("file count", fileCountDetail));

  checks.push(checkRequiredFiles(packPath, profile));
  checks.push(checkLearnerFacingMode(projectInstructions));
  checks.push(checkMetadataGuardrail(projectInstructions));
  checks.push(checkLessonNoteRoutingAndClosure(packPath, profile));
  checks.push(checkObsidianLessonNoteContract(packPath, profile));
  checks.push(checkNotionCompatibilityContract(packPath, profile));
  checks.push(checkLessonNoteSafetyBoundaries(packPath, profile));

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
