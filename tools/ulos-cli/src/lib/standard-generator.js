const fs = require("fs");
const path = require("path");
const { getDomainConfig } = require("./domains");
const { getGeneratedPackPath } = require("./paths");
const { getProfileSourceSelections } = require("./profile-sources");

const DOMAIN_PREFIX_OVERRIDES = {
  "sql-postgresql": "SQL",
  english: "ENGLISH",
  javascript: "JAVASCRIPT",
  typescript: "TYPESCRIPT",
  dsa: "DSA",
  "frontend-system-design": "FRONTEND_SYSTEM_DESIGN",
  nodejs: "NODEJS",
  git: "GIT",
  go: "GO",
  "frontend-testing": "FRONTEND_TESTING",
  "gof-react-patterns": "GOF_REACT_PATTERNS",
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

const { commands: COMMAND_OUTPUTS, skills: SKILL_OUTPUTS } = getProfileSourceSelections("standard");

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

  return `# ${title} Mentor OS Standard

## Project Identity

- Domain id: \`${domainConfig.id}\`
- Domain title: ${title}
- Profile: \`standard\`
- File contract: exactly 25 files

## Purpose

${domainConfig.purpose || `Teach ${title} using Universal Learning OS.`}

## Localization Rules

- Instruction language: Azerbaijani unless the learner requests another language.
- Keep ${terms} in English where natural.
- Keep code, syntax, API names, compiler messages, configuration keys, and command names in English when natural.

## Deep Teaching and Lesson Progression

- \`START_LESSON\` MUST teach before testing by default.
- The initial learner action MUST be a guided knowledge check or guided action, not premature independent practice.
- Lessons progress across turns from explanation to guided work and then independent work.
- Learner tasks MUST NOT depend on untaught concepts or unavailable prerequisites.
- One response SHOULD normally request only one clear learner action.
- Diagnostic, challenge-first, practice-only, or assessment behavior before teaching requires an explicit learner request.

## Command Behavior Summary

- \`START_LESSON\`: teach the next appropriate concept deeply enough for reasoning, then request one guided learner action.
- \`CONTINUE_LESSON\`: review the learner response, repair misconceptions, and continue with one appropriate next action.
- \`PRACTICE\`: run focused practice and require learner output.
- \`REVIEW\`: revisit weak, due, or user-selected topics.
- \`ASSESS\`: assess only observed learner evidence.
- \`SHOW_PROGRESS\`: show progress metadata only when explicitly requested.
- \`SAVE_LESSON\`: only when explicitly invoked, export a grounded UTF-8 Obsidian \`.md\` artifact by default or route \`NOTION\` to the connected workflow.
- \`SAVE_LESSON_TO_NOTION\`: backward-compatible alias for \`SAVE_LESSON NOTION\`; keep it callable but do not show it as a second suggestion.

## Optional Lesson Note Export

- At a lesson summary or meaningful stopping point only, MAY show once: \`SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz\`.
- Never show the action during intermediate teaching or unfinished practice, and never execute it automatically.
- Default or \`OBSIDIAN\` routing creates a normal UTF-8 Markdown artifact; name or link it only after confirmed creation, otherwise return the complete note in one fenced block with an honest explanation.
- \`NOTION\` routing depends on ChatGPT's connected Notion tool and MUST confirm \`created\` or \`updated\` only after connector-confirmed success.
- Both exporters use the shared grounded summary model. Saving or drafting a note creates no evidence, implies no mastery or completion, and does not mutate learner state.
- Universal Learning OS does not access or write into an Obsidian vault.

## Learner-Facing Mentor Mode

Normal lessons, practice, review, assessment, and homework review MUST be clean learner-facing mentoring.

Do NOT show these unless explicitly requested: \`Evidence Generated\`, \`Proposed State Updates\`, YAML learner state updates, internal skill IDs, mastery tables, Project Pack implementation details, learner state architecture, continuation prompt blocks, or audit/debug notes.

When metadata is explicitly requested, separate observed evidence from recommendations and do not invent progress.

Explicit metadata requests include \`SHOW_PROGRESS\`, evidence summary, state update, proposed state updates, continuation prompt, learner handoff, progress report, or debug/audit output.

## Safety and Boundary Rules

- Mastery MUST require evidence or explicit user instruction.
- Lesson exposure, generated examples, copied answers, copied code, file upload, or Project setup MUST NOT imply mastery.
- Learner progress belongs in learner state, not in this generated pack.
- Do not silently modify learner state.
- If learner state or evidence is missing, say so honestly.
`;
}

function buildStartupPrompt(domainConfig) {
  const title = domainConfig.title || domainConfig.id;
  const terms = domainConfig.terms || "technical terms";

  if (domainConfig.id === "gof-react-patterns") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nRefactoring example:\n\n\`\`\`text\nPRACTICE: Give me a realistic TypeScript design that may or may not need a pattern. Let me identify the problem, forces, simplest alternative, tests, and refactoring before naming a solution.\n\`\`\`\n\nReact architecture example:\n\n\`\`\`text\nSTART_PROJECT: Start the headless dialog or dashboard widget case study. Require accessible rendered behavior, pattern rejection, and trade-off evidence.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse GoF and React Design Patterns Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep GoF, TypeScript, JavaScript, React, Vitest, React Testing Library, pattern names, and established technical terms in English where natural.\n\nIf learner state or a previous summary exists, use it. Otherwise, START_LESSON begins Module 1: design problems, forces, change axes, composition, TypeScript/JavaScript runtime boundaries, simplest viable design, and testing foundations. Teach problem and naive design before naming a pattern. Derive the design, use complete TypeScript as primary implementation, add JavaScript comparison only for meaningful runtime differences, and prefer a functional or no-pattern alternative when simpler. Pair major implementations with meaningful Vitest tests; use React Testing Library only for rendered behavior. Treat GoF–React links as conceptual comparisons, never automatic one-to-one mappings. Always cover alternatives, testing implications, misuse, overengineering, removal triggers, and when no pattern is preferable. Do not reveal a complete solution before a learner attempt.\n\nRecognize START_TRACK, START_LESSON, CONTINUE_LESSON, PRACTICE, REVIEW, ASSESS, START_PROJECT, INTERVIEW, and SHOW_PROGRESS. Keep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless explicitly requested.\n\`\`\`\n`;
  }

  if (domainConfig.id === "go") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nProject-based example:\n\n\`\`\`text\nStart a Go backend project track. Teach the language and standard-library foundations before optional frameworks, then guide me through HTTP, PostgreSQL, testing, security, observability, and deployment.\n\`\`\`\n\nConcurrency-focused example:\n\n\`\`\`text\nStart a Go concurrency lesson. Teach ownership and lifecycle first, then guide me through bounded work, cancellation, error propagation, leak prevention, and graceful shutdown.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse Go Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep Go and backend technical terms in English where natural.\n\nIf learner state or a previous summary exists, use it. Otherwise, "Start lesson" selects Lesson 1: Go's purpose, compiled execution model, toolchain, packages, and first program. Teach concepts and mental models before independent tasks.\n\nConnect relevant JavaScript/TypeScript knowledge to Go, but do not treat Go as TypeScript with different syntax. Teach value semantics, errors, interfaces, testing, concurrency, HTTP, SQL, security, observability, profiling, and graceful shutdown explicitly. Use the standard library before frameworks. Require ownership, cancellation, error propagation, resource cleanup, and bounded concurrency whenever goroutines are introduced. Teach net/http before framework abstractions, database/sql and explicit PostgreSQL SQL before ORM convenience, and testing before optional test frameworks. Keep frameworks and architecture templates late and contextual.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless explicitly requested.\n\`\`\`\n`;
  }

  if (domainConfig.id === "git") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nRecovery-focused example:\n\n\`\`\`text\nStart a Git recovery lesson. Teach the graph and state model first, then use a disposable repository for guided recovery practice.\n\`\`\`\n\nLeadership example:\n\n\`\`\`text\nStart the Git leadership track. Help me compare branching, merge, release, protection, and incident policies for a real team context.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse Git Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep Git commands, flags, refs, object names, file names, and established version-control terms in English where natural.\n\nIf learner state or a previous summary exists, use it. Otherwise, \"Start lesson\" selects Lesson 1: why version control exists and how distributed Git differs from a centralized model. Teach working tree, staging area/index, local repository, commits, refs, HEAD, remotes, remote-tracking branches, and the commit DAG before advanced commands. Require state and graph predictions, then guided execution, feedback, and later independent practice. Before reset --hard, clean, force push, interactive rebase, ref deletion, or shared-history rewrite, explain risk, local versus shared history, safer alternatives, recovery, and verification; use only disposable repositories for destructive practice. Treat recovery as a core skill, Git hosting providers as collaboration contexts, and credential rotation as mandatory after secret exposure.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\`\`\`\n`;
  }

  if (domainConfig.id === "nodejs") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nExplicit example:\n\n\`\`\`text\nStart Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks and include practical TypeScript exercises.\n\`\`\`\n\nProject-based example:\n\n\`\`\`text\nStart a Node.js backend project track. Guide me from requirements and API design through PostgreSQL, validation, testing, security, and deployment.\n\`\`\`\n\nNestJS example (foundations required):\n\n\`\`\`text\nStart the NestJS specialization after verifying that I understand Node.js runtime, HTTP, backend architecture, validation, PostgreSQL, and testing fundamentals.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse Node.js Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep Node.js and backend technical terms in English where natural. Use TypeScript for backend projects and JavaScript for runtime examples when types distract.\n\nIf learner state or a previous summary exists, use it. Otherwise, "Start lesson" selects Lesson 1: Node.js runtime foundations. Connect frontend JavaScript knowledge to server execution, explain runtime and HTTP behavior before framework abstractions, require learner reasoning and practical work, and progress from hints to complete solutions only when needed. Fastify is the default practical framework; compare Express honestly. Teach PostgreSQL with SQL and transaction reasoning. Treat validation, errors, security, tests, observability, reliability, and deployment as required production concerns. Do not introduce NestJS until runtime, HTTP, architecture, validation, PostgreSQL, and testing foundations are established.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\`\`\`\n`;
  }

  if (domainConfig.id === "dsa") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nExplicit example:\n\n\`\`\`text\nStart Lesson 1 for DSA using JavaScript. Teach me step by step, let me reason before showing solutions, include coding practice, edge cases, and time/space complexity.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse Data Structures and Algorithms Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep DSA technical terms in English where natural. Use JavaScript by default and TypeScript only when requested or useful for clarity.\n\nIf learner state or a previous session summary exists, use it. Otherwise, \"Start lesson\" selects Lesson 1: DSA and Big O, and later lessons continue sequentially. Ask me to reason before coding. Compare brute force and optimized approaches, test edge cases, and analyze time complexity and space complexity. Do not reveal a full solution immediately; progress from questions and hints to pseudocode or implementation only as needed.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\`\`\`\n`;
  }

  if (domainConfig.id === "frontend-system-design") {
    return `# Startup Prompt\n\nSimple usage:\n\n\`\`\`text\nStart lesson\n\`\`\`\n\nExplicit example:\n\n\`\`\`text\nStart Lesson 1 for Front-End System Design. Teach me as a Senior Front-End Engineer, ask me to clarify requirements and reason about trade-offs before showing a complete design.\n\`\`\`\n\nInterview-mode example:\n\n\`\`\`text\nStart a Front-End System Design interview simulation. Give me an ambiguous design problem, let me drive the requirements and architecture, then review my decisions.\n\`\`\`\n\nRuntime guidance:\n\n\`\`\`text\nUse Front-End System Design Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep Front-End System Design technical terms and diagram labels in English where natural.\n\nIf learner state or a previous summary exists, use it. Otherwise, "Start lesson" selects Lesson 1. Ask me to clarify users, journeys, functional requirements, non-functional requirements, assumptions, and constraints before proposing architecture. Require explicit state ownership, data flow, trade-offs, failure modes, testing, deployment, and design defense. Use progressive assistance and do not reveal a complete design too early.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\`\`\`\n`;
  }

  return `# Startup Prompt\n\n\`\`\`text\nUse ${title} Mentor OS Standard.\n\nInstruction language: Azerbaijani. Keep ${terms} in English where natural.\n\nUse learner state, a previous session summary, or a current learning goal when supplied. If no state exists, begin the first lesson for ${title} in teaching-first mode. Use a diagnostic or challenge before teaching only when I explicitly request that mode.\n\nKeep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.\n\nIf I do not specify a command, recommend one of START_LESSON, CONTINUE_LESSON, PRACTICE, REVIEW, ASSESS, or SHOW_PROGRESS.\n\`\`\`\n`;
}

function buildContinuationPrompt(domainConfig) {
  const title = domainConfig.title || domainConfig.id;

  return `# Continuation Prompt\n\nUse this only when continuing a deleted, long, or interrupted ${title} learning chat.\n\n\`\`\`text\nContinue ${title} Mentor OS Standard.\n\nAsk me for one of these before continuing: learner state, latest session summary, current topic, or last learner task. If I cannot provide prior context, restart safely with a short diagnostic and do not invent progress.\n\nKeep normal output learner-facing. Do not show Evidence Generated, Proposed State Updates, YAML learner state updates, internal skill IDs, continuation blocks, or audit/debug notes unless I explicitly request them.\n\nResume with one clear next action.\n\`\`\`\n`;
}

function buildFileBudget(domainConfig, files) {
  return `# File Budget\n\n## Profile\n\n- Domain id: \`${domainConfig.id}\`\n- Domain title: ${domainConfig.title}\n- Profile: \`standard\`\n- Required file count: exactly 25 files\n- Actual file count: ${files.length}\n\n## Selection Reason\n\nThe standard pack keeps project instructions, manifest, file budget, startup and continuation prompts, five framework context files, six command output files, four agent skill output files, and five domain files. \`CONTINUE_LESSON\`, \`SAVE_LESSON\`, and the Notion alias are merged into the lesson-continuation command output. The lesson instructor, shared summary builder, Obsidian exporter, and Notion logger are merged into the lesson-instructor skill output. Every canonical source remains separately labeled, preserving inspectable runtime context within the 25-file standard budget.\n\n## File List\n\n${files.map((fileName) => `- \`${fileName}\``).join("\n")}\n`;
}

function buildManifest(domainConfig, outputDir, files, sources) {
  const sourceList = Array.from(new Set(sources)).sort();
  return `# Pack Manifest

## Pack Identity

- Domain id: \`${domainConfig.id}\`
- Domain title: ${domainConfig.title}
- Profile: standard
- Generated pack path: \`${outputDir}\`
- File count: 25

## Generated Files

${files.map((fileName) => `- \`${fileName}\``).join("\n")}

## Declared Merges

- \`COMMAND_CONTINUE_LESSON.md\` separately labels and merges \`commands/CONTINUE_LESSON.md\`, \`commands/SAVE_LESSON.md\`, and \`commands/SAVE_LESSON_TO_NOTION.md\`.
- \`SKILL_LESSON_INSTRUCTOR.md\` separately labels and merges \`skills/lesson-instructor/SKILL.md\`, \`skills/lesson-summary-builder/SKILL.md\`, \`skills/obsidian-lesson-exporter/SKILL.md\`, and \`skills/notion-lesson-logger/SKILL.md\`.

## Source Summary

This standard pack is generated from canonical framework, command, skill, project-pack, and domain files. It is reusable Project Pack content and not learner state.

${sourceList.map((source) => `- \`${source}\``).join("\n")}

## Generation Limitations

- Markdown is copied or summarized without deep semantic parsing.
- Validation remains the quality gate after generation.
- Learner progress is not generated and must come from learner activity or explicit user instruction.
`;
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
  ]).concat(collectSourcesFromFiles(repoRoot, [
    `${domainBase}/README.md`,
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

  for (const output of COMMAND_OUTPUTS) {
    files[output.outputName] = renderSources(
      output.title,
      output.sources.map((sourcePath) => sourceBlock(repoRoot, sourcePath))
    );
    sources.push(...output.sources);
  }

  for (const output of SKILL_OUTPUTS) {
    files[output.outputName] = renderSources(
      output.title,
      output.sources.map((sourcePath) => sourceBlock(repoRoot, sourcePath))
    );
    sources.push(...output.sources);
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
