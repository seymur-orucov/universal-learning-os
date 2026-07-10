const fs = require("fs");
const path = require("path");
const { getDomainConfig } = require("./domains");
const { getGeneratedPackPath } = require("./paths");

const DOMAIN_PREFIX_OVERRIDES = {
  "sql-postgresql": "SQL",
  english: "ENGLISH",
  javascript: "JAVASCRIPT",
  typescript: "TYPESCRIPT",
  dsa: "DSA",
};

const BASE_STANDARD_FILES = [
  "PROJECT_INSTRUCTIONS.md",
  "PACK_MANIFEST.md",
  "FILE_BUDGET.md",
  "STARTUP_PROMPT.md",
  "CONTINUATION_PROMPT.md",
  "FRAMEWORK_CONTEXT.md",
  "LEARNING_ENGINE_CONTEXT.md",
  "EVIDENCE_MASTERY_CONTEXT.md",
  "LEARNER_STATE_BOUNDARIES.md",
  "LOCALIZATION_CONTEXT.md",
  "COMMAND_START_LESSON.md",
  "COMMAND_CONTINUE_LESSON.md",
  "COMMAND_PRACTICE.md",
  "COMMAND_REVIEW.md",
  "COMMAND_ASSESS.md",
  "COMMAND_SHOW_PROGRESS.md",
  "SKILL_LESSON_INSTRUCTOR.md",
  "SKILL_PRACTICE_COACH.md",
  "SKILL_HOMEWORK_REVIEWER.md",
  "SKILL_PROGRESS_MANAGER.md",
];

const DOMAIN_OUTPUT_SUFFIXES = [
  "DOMAIN_CONTEXT.md",
  "SYLLABUS.md",
  "SKILL_GRAPH.md",
  "GLOSSARY_PROJECTS.md",
  "PRACTICE_ASSESSMENT_RULES.md",
];

const COMMAND_OUTPUTS = [
  ["COMMAND_START_LESSON.md", "commands/START_LESSON.md", "Start Lesson Command"],
  ["COMMAND_CONTINUE_LESSON.md", "commands/CONTINUE_LESSON.md", "Continue Lesson Command"],
  ["COMMAND_PRACTICE.md", "commands/PRACTICE.md", "Practice Command"],
  ["COMMAND_REVIEW.md", "commands/REVIEW.md", "Review Command"],
  ["COMMAND_ASSESS.md", "commands/ASSESS.md", "Assess Command"],
  ["COMMAND_SHOW_PROGRESS.md", "commands/SHOW_PROGRESS.md", "Show Progress Command"],
];

const SKILL_OUTPUTS = [
  ["SKILL_LESSON_INSTRUCTOR.md", "skills/lesson-instructor/SKILL.md", "Lesson Instructor Skill"],
  ["SKILL_PRACTICE_COACH.md", "skills/practice-coach/SKILL.md", "Practice Coach Skill"],
  ["SKILL_HOMEWORK_REVIEWER.md", "skills/homework-reviewer/SKILL.md", "Homework Reviewer Skill"],
  ["SKILL_PROGRESS_MANAGER.md", "skills/progress-manager/SKILL.md", "Progress Manager Skill"],
];

function getDomainPrefix(domainId) {
  return DOMAIN_PREFIX_OVERRIDES[domainId] || domainId.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function getStandardFiles(domainId) {
  const prefix = getDomainPrefix(domainId);
  return BASE_STANDARD_FILES.concat(DOMAIN_OUTPUT_SUFFIXES.map((suffix) => `${prefix}_${suffix}`));
}

function readRequired(repoRoot, relativePath) {
  const filePath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required source file: ${relativePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function readOptional(repoRoot, relativePath) {
  const filePath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

function sourceBlock(repoRoot, relativePath, required = true) {
  const content = required ? readRequired(repoRoot, relativePath) : readOptional(repoRoot, relativePath);
  if (!content) {
    return null;
  }
  return { relativePath, content };
}

function renderSources(title, sources) {
  const sections = sources
    .filter(Boolean)
    .map((source) => `## Source: ${source.relativePath}\n\n${source.content.trim()}\n`)
    .join("\n");

  return `# ${title}\n\nThis generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.\n\n${sections}`;
}

function resolveOutputDir(repoRoot, domainId, options) {
  if (!options.outDir) {
    return getGeneratedPackPath(repoRoot, domainId, "standard");
  }

  const outputDir = path.isAbsolute(options.outDir)
    ? path.resolve(options.outDir)
    : path.resolve(repoRoot, options.outDir);
  const resolvedRepoRoot = path.resolve(repoRoot);

  if (outputDir !== resolvedRepoRoot && !outputDir.startsWith(resolvedRepoRoot + path.sep)) {
    throw new Error(`Refusing to write outside repository root: ${outputDir}`);
  }

  return outputDir;
}

function ensureSafeTargetDirectory(outputDir) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function failOnUnexpectedFiles(outputDir, expectedFiles) {
  if (!fs.existsSync(outputDir)) {
    return;
  }

  const unexpected = fs
    .readdirSync(outputDir, { withFileTypes: true })
    .filter((entry) => !entry.isFile() || !expectedFiles.includes(entry.name))
    .map((entry) => entry.name)
    .sort();

  if (unexpected.length > 0) {
    throw new Error(`Unexpected file(s) in standard pack directory: ${unexpected.join(", ")}`);
  }
}

function collectSourcesFromFiles(repoRoot, relativePaths, required = true) {
  return relativePaths.map((relativePath) => sourceBlock(repoRoot, relativePath, required)).filter(Boolean);
}

function buildProjectInstructions(domainConfig) {
  const title = domainConfig.title || domainConfig.id;
  const terms = domainConfig.terms || "technical terms";

  return `# ${title} Mentor OS Standard\n\n## Project Identity\n\n- Domain id: \`${domainConfig.id}\`\n- Domain title: ${title}\n- Profile: \`standard\`\n- File contract: exactly 25 files\n\n## Purpose\n\n${domainConfig.purpose || `Teach ${title} using Universal Learning OS.`}\n\n## Localization Rules\n\n- Instruction language: Azerbaijani unless the learner requests another language.\n- Keep ${terms} in English where natural.\n- Keep code, syntax, API names, compiler messages, configuration keys, and command names in English when natural.\n\n## Command Behavior Summary\n\n- \`START_LESSON\`: start the next appropriate lesson and request one learner action.\n- \`CONTINUE_LESSON\`: continue the current lesson without showing internal continuation blocks unless requested.\n- \`PRACTICE\`: run focused practice and require learner output.\n- \`REVIEW\`: revisit weak, due, or user-selected topics.\n- \`ASSESS\`: assess only observed learner evidence.\n- \`SHOW_PROGRESS\`: show progress metadata only when explicitly requested.\n\n## Learner-Facing Mentor Mode\n\nNormal lessons, practice, review, assessment, and homework review MUST be clean learner-facing mentoring.\n\nDo NOT show these unless explicitly requested: \`Evidence Generated\`, \`Proposed State Updates\`, YAML learner state updates, internal skill IDs, mastery tables, Project Pack implementation details, learner state architecture, continuation prompt blocks, or audit/debug notes.\n\nWhen metadata is explicitly requested, separate observed evidence from recommendations and do not invent progress.\n\nExplicit metadata requests include \`SHOW_PROGRESS\`, evidence summary, state update, proposed state updates, continuation prompt, learner handoff, progress report, or debug/audit output.\n\n## Safety and Boundary Rules\n\n- Mastery MUST require evidence or explicit user instruction.\n- Lesson exposure, generated examples, copied answers, copied code, file upload, or Project setup MUST NOT imply mastery.\n- Learner progress belongs in learner state, not in this generated pack.\n- Do not silently modify learner state.\n- If learner state or evidence is missing, say so honestly.\n`;
}

function buildStartupPrompt(domainConfig) {
  const title = domainConfig.title || domainConfig.id;
  const terms = domainConfig.terms || "technical terms";

  if (domainConfig.id === "dsa") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nExplicit example:\n\n\`\`\`text\nStart Lesson 1 for DSA using JavaScript. Teach me step by step, let me reason before showing solutions, include coding practice, edge cases, and time/space complexity.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse Data Structures and Algorithms Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep DSA technical terms in English where natural. Use JavaScript by default and TypeScript only when requested or useful for clarity.\n\nIf learner state or a previous session summary exists, use it. Otherwise, \"Start lesson\" selects Lesson 1: DSA and Big O, and later lessons continue sequentially. Ask me to reason before coding. Compare brute force and optimized approaches, test edge cases, and analyze time complexity and space complexity. Do not reveal a full solution immediately; progress from questions and hints to pseudocode or implementation only as needed.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\`\`\`\n`;
  }

  return `# Startup Prompt\n\n\`\`\`text\nUse ${title} Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep ${terms} in English where natural.\n\nStart by asking whether learner state, a previous session summary, or a current learning goal exists. If no state exists, begin with a beginner-safe diagnostic or first lesson for ${title}.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\nIf I do not specify a command, recommend one of START_LESSON, CONTINUE_LESSON, PRACTICE, REVIEW, ASSESS, or SHOW_PROGRESS.\n\`\`\`\n`;
}

function buildContinuationPrompt(domainConfig) {
  const title = domainConfig.title || domainConfig.id;

  return `# Continuation Prompt\n\nUse this only when continuing a deleted, long, or interrupted ${title} learning chat.\n\n\`\`\`text\nContinue ${title} Mentor OS Standard.\n\nAsk me for one of these before continuing: learner state, latest session summary, current topic, or last learner task. If I cannot provide prior context, restart safely with a short diagnostic and do not invent progress.\n\nKeep normal output learner-facing. Do not show Evidence Generated, Proposed State Updates, YAML learner state updates, internal skill IDs, continuation blocks, or audit/debug notes unless I explicitly request them.\n\nResume with one clear next action.\n\`\`\`\n`;
}

function buildFileBudget(domainConfig, files) {
  return `# File Budget\n\n## Profile\n\n- Domain id: \`${domainConfig.id}\`\n- Domain title: ${domainConfig.title}\n- Profile: \`standard\`\n- Required file count: exactly 25 files\n- Actual file count: ${files.length}\n\n## Selection Reason\n\nThe standard pack keeps project instructions, manifest, file budget, startup and continuation prompts, five framework context files, six command files, four agent skill files, and five domain files. This preserves inspectable runtime context while staying within the 25-file standard budget.\n\n## File List\n\n${files.map((fileName) => `- \`${fileName}\``).join("\n")}\n`;
}

function buildManifest(domainConfig, outputDir, files, sources) {
  const sourceList = Array.from(new Set(sources)).sort();
  return `# Pack Manifest\n\n## Pack Identity\n\n- Domain id: \`${domainConfig.id}\`\n- Domain title: ${domainConfig.title}\n- Profile: standard\n- Generated pack path: \`${outputDir}\`\n- File count: 25\n\n## Generated Files\n\n${files.map((fileName) => `- \`${fileName}\``).join("\n")}\n\n## Source Summary\n\nThis standard pack is generated from canonical framework, command, skill, project-pack, and domain files. It is reusable Project Pack content and not learner state.\n\n${sourceList.map((source) => `- \`${source}\``).join("\n")}\n\n## Generation Limitations\n\n- Markdown is copied or summarized without deep semantic parsing.\n- Validation remains the quality gate after generation.\n- Learner progress is not generated and must come from learner activity or explicit user instruction.\n`;
}

function buildDomainFiles(repoRoot, domainConfig, prefix) {
  const domainBase = `domains/${domainConfig.id}`;
  const standardRequired = [
    `${domainBase}/DOMAIN.md`,
    `${domainBase}/SYLLABUS.md`,
    `${domainBase}/SKILL_GRAPH.md`,
    `${domainBase}/GLOSSARY.md`,
    `${domainBase}/PROJECTS.md`,
    `${domainBase}/PRACTICE_RULES.md`,
    `${domainBase}/ASSESSMENT_RULES.md`,
  ];
  for (const relativePath of standardRequired) {
    readRequired(repoRoot, relativePath);
  }

  const optionalCommon = [`${domainBase}/QUALITY_REVIEW.md`];
  const javascriptAlternates = domainConfig.id === "javascript"
    ? [
      `${domainBase}/DOMAIN_OVERVIEW.md`,
      `${domainBase}/MENTOR_BEHAVIOR.md`,
      `${domainBase}/PRACTICE_MODEL.md`,
      `${domainBase}/ASSESSMENT_MODEL.md`,
      `${domainBase}/MASTERY_EXPECTATIONS.md`,
      `${domainBase}/PROJECT_PACK_SELECTION.md`,
    ]
    : [];

  const domainContextSources = collectSourcesFromFiles(repoRoot, [
    `${domainBase}/DOMAIN.md`,
    `${domainBase}/README.md`,
  ]).concat(collectSourcesFromFiles(repoRoot, [
    `${domainBase}/DOMAIN_OVERVIEW.md`,
    `${domainBase}/MENTOR_BEHAVIOR.md`,
    `${domainBase}/PROJECT_PACK_SELECTION.md`,
    `${domainBase}/QUALITY_REVIEW.md`,
  ], false));

  const syllabusSources = collectSourcesFromFiles(repoRoot, [`${domainBase}/SYLLABUS.md`]);
  const skillGraphSources = collectSourcesFromFiles(repoRoot, [`${domainBase}/SKILL_GRAPH.md`]).concat(
    collectSourcesFromFiles(repoRoot, [`${domainBase}/MASTERY_EXPECTATIONS.md`], false)
  );
  const glossaryProjectSources = collectSourcesFromFiles(repoRoot, [
    `${domainBase}/GLOSSARY.md`,
    `${domainBase}/PROJECTS.md`,
  ]);
  const practiceAssessmentSources = collectSourcesFromFiles(repoRoot, [
    `${domainBase}/PRACTICE_RULES.md`,
    `${domainBase}/ASSESSMENT_RULES.md`,
  ]).concat(collectSourcesFromFiles(repoRoot, [
    `${domainBase}/PRACTICE_MODEL.md`,
    `${domainBase}/ASSESSMENT_MODEL.md`,
  ], false));

  const allSources = standardRequired.concat(optionalCommon, javascriptAlternates)
    .filter((relativePath) => fs.existsSync(path.join(repoRoot, relativePath)));

  return {
    files: {
      [`${prefix}_DOMAIN_CONTEXT.md`]: renderSources(`${domainConfig.title} Domain Context`, domainContextSources),
      [`${prefix}_SYLLABUS.md`]: renderSources(`${domainConfig.title} Syllabus`, syllabusSources),
      [`${prefix}_SKILL_GRAPH.md`]: renderSources(`${domainConfig.title} Skill Graph`, skillGraphSources),
      [`${prefix}_GLOSSARY_PROJECTS.md`]: renderSources(`${domainConfig.title} Glossary and Projects`, glossaryProjectSources),
      [`${prefix}_PRACTICE_ASSESSMENT_RULES.md`]: renderSources(`${domainConfig.title} Practice and Assessment Rules`, practiceAssessmentSources),
    },
    sources: allSources,
  };
}

function buildStandardPack(repoRoot, domainConfig, outputDir) {
  const prefix = getDomainPrefix(domainConfig.id);
  const standardFiles = getStandardFiles(domainConfig.id);
  const sources = [
    "exports/project-pack-spec/STANDARD_GENERATION_PLAN.md",
    "tools/ulos-cli/templates/standard-pack/MAPPING.md",
  ];
  for (const sourcePath of sources) {
    readRequired(repoRoot, sourcePath);
  }

  const files = {
    "PROJECT_INSTRUCTIONS.md": buildProjectInstructions(domainConfig),
    "STARTUP_PROMPT.md": buildStartupPrompt(domainConfig),
    "CONTINUATION_PROMPT.md": buildContinuationPrompt(domainConfig),
  };

  files["FRAMEWORK_CONTEXT.md"] = renderSources("Framework Context", collectSourcesFromFiles(repoRoot, [
    "specification/FRAMEWORK_SPEC.md",
    "docs/ARCHITECTURE.md",
    "docs/VISION.md",
  ]));
  sources.push("specification/FRAMEWORK_SPEC.md", "docs/ARCHITECTURE.md", "docs/VISION.md");

  const learningSources = collectSourcesFromFiles(repoRoot, [
    "specification/LEARNING_LIFECYCLE.md",
    "core/learning-engine/README.md",
    "core/learning-engine/LESSON_STRUCTURE.md",
    "core/learning-engine/PRACTICE_MODEL.md",
    "core/learning-engine/REVIEW_MODEL.md",
    "core/learning-engine/ASSESSMENT_MODEL.md",
    "core/learning-engine/NEXT_ACTION_MODEL.md",
    "core/learning-engine/SESSION_SELECTION.md",
  ]);
  files["LEARNING_ENGINE_CONTEXT.md"] = renderSources("Learning Engine Context", learningSources);
  sources.push(...learningSources.map((source) => source.relativePath));

  const evidenceSources = collectSourcesFromFiles(repoRoot, [
    "core/mastery-model/MASTERY_LEVELS.md",
    "core/mastery-model/EVIDENCE_REQUIREMENTS.md",
    "specification/LEARNING_LIFECYCLE.md",
  ]);
  files["EVIDENCE_MASTERY_CONTEXT.md"] = renderSources("Evidence and Mastery Context", evidenceSources);
  sources.push(...evidenceSources.map((source) => source.relativePath));

  const stateSources = collectSourcesFromFiles(repoRoot, [
    "specification/STATE_SPEC.md",
    "learners/README.md",
    "learners/_template/README.md",
    "learners/_template/STATE.md",
  ]);
  files["LEARNER_STATE_BOUNDARIES.md"] = renderSources("Learner State Boundaries", stateSources);
  sources.push(...stateSources.map((source) => source.relativePath));

  const localizationSources = collectSourcesFromFiles(repoRoot, [
    "specification/LOCALIZATION_SPEC.md",
    `domains/${domainConfig.id}/DOMAIN.md`,
    `domains/${domainConfig.id}/GLOSSARY.md`,
  ]);
  files["LOCALIZATION_CONTEXT.md"] = renderSources("Localization Context", localizationSources);
  sources.push(...localizationSources.map((source) => source.relativePath));

  for (const [outputName, sourcePath, title] of COMMAND_OUTPUTS) {
    files[outputName] = renderSources(title, [sourceBlock(repoRoot, sourcePath)]);
    sources.push(sourcePath);
  }

  for (const [outputName, sourcePath, title] of SKILL_OUTPUTS) {
    files[outputName] = renderSources(title, [sourceBlock(repoRoot, sourcePath)]);
    sources.push(sourcePath);
  }

  const domainResult = buildDomainFiles(repoRoot, domainConfig, prefix);
  Object.assign(files, domainResult.files);
  sources.push(...domainResult.sources);

  files["FILE_BUDGET.md"] = buildFileBudget(domainConfig, standardFiles);
  files["PACK_MANIFEST.md"] = buildManifest(domainConfig, outputDir, standardFiles, sources);

  const missingOutputs = standardFiles.filter((fileName) => !files[fileName]);
  const extraOutputs = Object.keys(files).filter((fileName) => !standardFiles.includes(fileName));
  if (missingOutputs.length > 0 || extraOutputs.length > 0 || standardFiles.length !== 25) {
    throw new Error(`Standard generator output contract mismatch. Missing: ${missingOutputs.join(", ") || "none"}; extra: ${extraOutputs.join(", ") || "none"}; count: ${standardFiles.length}`);
  }

  return { files, fileNames: standardFiles, sources: Array.from(new Set(sources)).sort() };
}

function generateStandardPack(repoRoot, domain, options = {}) {
  const domainConfig = getDomainConfig(domain);
  if (!domainConfig) {
    throw new Error(`Unsupported domain: ${domain}`);
  }

  const outputDir = resolveOutputDir(repoRoot, domain, options);
  const result = buildStandardPack(repoRoot, domainConfig, outputDir);

  if (!options.dryRun) {
    ensureSafeTargetDirectory(outputDir);
    failOnUnexpectedFiles(outputDir, result.fileNames);

    for (const fileName of result.fileNames) {
      fs.writeFileSync(path.join(outputDir, fileName), result.files[fileName], "utf8");
    }
  }

  return {
    outputDir,
    filesWritten: result.fileNames.length,
    files: result.fileNames,
    sources: result.sources,
    dryRun: Boolean(options.dryRun),
  };
}

module.exports = {
  getDomainPrefix,
  getStandardFiles,
  generateStandardPack,
};
