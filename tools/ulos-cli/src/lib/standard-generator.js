const fs = require("fs");
const path = require("path");
const { getDomainConfig } = require("./domains");
const { assertGeneratedPackPath, getGeneratedPackPath } = require("./paths");

const STANDARD_FILES = [
  "PROJECT_INSTRUCTIONS.md",
  "PACK_MANIFEST.md",
  "FILE_BUDGET.md",
  "STARTUP_PROMPT.md",
  "CONTINUATION_PROMPT.md",
  "FRAMEWORK_CONTEXT.md",
  "LEARNING_ENGINE_CONTEXT.md",
  "EVIDENCE_MASTERY_CONTEXT.md",
  "LOCALIZATION_CONTEXT.md",
  "LEARNER_STATE_BOUNDARIES.md",
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

const COMMAND_SOURCES = [
  ["COMMAND_START_LESSON.md", "START_LESSON.md"],
  ["COMMAND_CONTINUE_LESSON.md", "CONTINUE_LESSON.md"],
  ["COMMAND_PRACTICE.md", "PRACTICE.md"],
  ["COMMAND_REVIEW.md", "REVIEW.md"],
  ["COMMAND_ASSESS.md", "ASSESS.md"],
  ["COMMAND_SHOW_PROGRESS.md", "SHOW_PROGRESS.md"],
];

const SKILL_SOURCES = [
  ["SKILL_LESSON_INSTRUCTOR.md", "lesson-instructor"],
  ["SKILL_PRACTICE_COACH.md", "practice-coach"],
  ["SKILL_HOMEWORK_REVIEWER.md", "homework-reviewer"],
  ["SKILL_PROGRESS_MANAGER.md", "progress-manager"],
];

function readRequired(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`Missing required source: ${filePath}`);
  return fs.readFileSync(filePath, "utf8").trim();
}

function safePrefix(config) {
  return config.launchPrefix;
}

function domainOutputFiles(config) {
  const prefix = safePrefix(config);
  return [
    `${prefix}_DOMAIN_CONTEXT.md`,
    `${prefix}_SKILL_GRAPH.md`,
    `${prefix}_SYLLABUS.md`,
    `${prefix}_PRACTICE_ASSESSMENT_RULES.md`,
    `${prefix}_GLOSSARY_PROJECTS.md`,
  ];
}

function sourceSection(source, content) {
  return `Canonical source: \`${source}\`.\n\n${content}\n`;
}

function buildProjectInstructions(config) {
  return `# ${config.title} Mentor OS

## Purpose

${config.purpose}

## Localization

- Instruction language: Azerbaijani.
- Keep ${config.terms} in English where natural.
- Keep code, APIs, file names, commands, test names, library names, and config keys in English.

## Lesson Depth

\`START_LESSON\` normally presents title, objective, why the topic matters, conceptual explanation, mental model, test-level or architectural boundary, a realistic code example and explanation, common mistakes, guided practice, independent practice, and a concise next action. Exercises come after sufficient explanation. Adapt depth to learner evidence; unfamiliar topics receive full teaching before assessment.

## Core Rules

- Select unit, component, integration, or E2E level by observable risk and boundary, not habit.
- Mastery requires reviewed learner evidence or explicit user instruction.
- Displayed lessons, examples, copied answers, file upload, and Project setup do not imply mastery.
- Learner progress belongs to learner state outside this pack.

## Learner-Facing Mentor Mode

Normal teaching focuses on explanation, mental models, realistic examples, guided practice, feedback, and one next action.

Do not show \`Evidence Generated\`, \`Proposed State Updates\`, YAML learner state updates, internal skill IDs, mastery tables, pack implementation details, continuation prompt blocks, or audit/debug output unless explicitly requested through progress, state, handoff, continuation, or debug workflows.

## Commands

\`START_LESSON\`, \`CONTINUE_LESSON\`, \`PRACTICE\`, \`REVIEW\`, \`ASSESS\`, and \`SHOW_PROGRESS\`.
`;
}

function buildManifest(config, outputFiles) {
  const all = [...STANDARD_FILES, ...outputFiles];
  return `# ${config.title} Standard Project Pack Manifest

- Pack id: \`${config.id}-standard\`
- Pack version: \`0.1.0-stage-16.0\`
- Profile: \`standard\`
- File budget: exactly 25 files
- Canonical domain: \`domains/${config.id}/\`

## Included Files

${all.map((name, index) => `${index + 1}. \`${name}\``).join("\n")}

## Traceability and Boundaries

Framework, command, skill, and domain material is derived from the corresponding canonical repository sources. Domain summaries preserve \`DOMAIN.md\`, \`SYLLABUS.md\`, \`SKILL_GRAPH.md\`, \`PRACTICE_RULES.md\`, \`ASSESSMENT_RULES.md\`, \`PROJECTS.md\`, \`GLOSSARY.md\`, and \`QUALITY_REVIEW.md\`. Learner state and unrelated domains are excluded. This pack must not silently change framework semantics.
`;
}

function buildFiles(repoRoot, config) {
  const domainDir = path.join(repoRoot, "domains", config.id);
  const outputFiles = domainOutputFiles(config);
  const files = {
    "PROJECT_INSTRUCTIONS.md": buildProjectInstructions(config),
    "PACK_MANIFEST.md": buildManifest(config, outputFiles),
    "FILE_BUDGET.md": "# File Budget\n\nProfile: `standard`. This generated pack contains exactly 25 top-level Markdown files. Directories and external launch-kit files are not part of the count.\n",
    "STARTUP_PROMPT.md": `# Startup Prompt\n\nUse ${config.title} Mentor OS. Teach in Azerbaijani while preserving ${config.terms} in English. If learner state is absent, begin with a short level diagnostic and then a beginner-safe, explanation-first lesson. Keep framework metadata hidden unless explicitly requested.\n`,
    "CONTINUATION_PROMPT.md": `# Continuation Prompt\n\nContinue ${config.title} learning from the learner-provided session summary or stated goal. Recheck prerequisites, teach before exercising unfamiliar material, request observable learner work before recommending progress, and keep internal metadata hidden unless explicitly requested.\n`,
    "FRAMEWORK_CONTEXT.md": sourceSection("specification/FRAMEWORK_SPEC.md", readRequired(path.join(repoRoot, "specification", "FRAMEWORK_SPEC.md"))),
    "LEARNING_ENGINE_CONTEXT.md": sourceSection("core/learning-engine/LESSON_STRUCTURE.md", readRequired(path.join(repoRoot, "core", "learning-engine", "LESSON_STRUCTURE.md"))),
    "EVIDENCE_MASTERY_CONTEXT.md": sourceSection("core/mastery-model/EVIDENCE_REQUIREMENTS.md", readRequired(path.join(repoRoot, "core", "mastery-model", "EVIDENCE_REQUIREMENTS.md"))),
    "LOCALIZATION_CONTEXT.md": sourceSection("specification/LOCALIZATION_SPEC.md", readRequired(path.join(repoRoot, "specification", "LOCALIZATION_SPEC.md"))),
    "LEARNER_STATE_BOUNDARIES.md": sourceSection("specification/STATE_SPEC.md", readRequired(path.join(repoRoot, "specification", "STATE_SPEC.md"))),
  };

  for (const [output, source] of COMMAND_SOURCES) {
    files[output] = sourceSection(`commands/${source}`, readRequired(path.join(repoRoot, "commands", source)));
  }
  for (const [output, skill] of SKILL_SOURCES) {
    files[output] = sourceSection(`skills/${skill}/SKILL.md`, readRequired(path.join(repoRoot, "skills", skill, "SKILL.md")));
  }

  files[outputFiles[0]] = sourceSection(`domains/${config.id}/DOMAIN.md`, readRequired(path.join(domainDir, "DOMAIN.md")));
  files[outputFiles[1]] = sourceSection(`domains/${config.id}/SKILL_GRAPH.md`, readRequired(path.join(domainDir, "SKILL_GRAPH.md")));
  files[outputFiles[2]] = sourceSection(`domains/${config.id}/SYLLABUS.md`, readRequired(path.join(domainDir, "SYLLABUS.md")));
  files[outputFiles[3]] = [
    sourceSection(`domains/${config.id}/PRACTICE_RULES.md`, readRequired(path.join(domainDir, "PRACTICE_RULES.md"))),
    sourceSection(`domains/${config.id}/ASSESSMENT_RULES.md`, readRequired(path.join(domainDir, "ASSESSMENT_RULES.md"))),
    sourceSection(`domains/${config.id}/QUALITY_REVIEW.md`, readRequired(path.join(domainDir, "QUALITY_REVIEW.md"))),
  ].join("\n");
  files[outputFiles[4]] = [
    sourceSection(`domains/${config.id}/GLOSSARY.md`, readRequired(path.join(domainDir, "GLOSSARY.md"))),
    sourceSection(`domains/${config.id}/PROJECTS.md`, readRequired(path.join(domainDir, "PROJECTS.md"))),
  ].join("\n");
  return { files, names: [...STANDARD_FILES, ...outputFiles] };
}

function generateStandardPack(repoRoot, domain, options = {}) {
  const config = getDomainConfig(domain);
  if (!config) throw new Error(`Unsupported domain: ${domain}`);
  const outputDir = getGeneratedPackPath(repoRoot, domain, "standard");
  const { files, names } = buildFiles(repoRoot, config);
  if (names.length !== 25 || Object.keys(files).length !== 25) {
    throw new Error("Standard pack contract violation: generator must produce exactly 25 files");
  }

  if (!options.dryRun) {
    assertGeneratedPackPath(repoRoot, outputDir);
    fs.mkdirSync(outputDir, { recursive: true });
    for (const entry of fs.readdirSync(outputDir, { withFileTypes: true })) {
      if (!names.includes(entry.name)) {
        if (!entry.isFile()) throw new Error(`Unexpected non-file entry in standard pack: ${entry.name}`);
        fs.unlinkSync(path.join(outputDir, entry.name));
      }
    }
    for (const name of names) fs.writeFileSync(path.join(outputDir, name), files[name], "utf8");
  }
  return { outputDir, filesWritten: names.length, files: names, dryRun: Boolean(options.dryRun) };
}

module.exports = { STANDARD_FILES, domainOutputFiles, generateStandardPack };
