const fs = require("fs");
const path = require("path");
const { getDomainConfig } = require("./domains");
const { getGeneratedPackPath } = require("./paths");

const COMPACT_FILES = [
  "PROJECT_INSTRUCTIONS.md",
  "STARTUP_PROMPT.md",
  "DOMAIN_CORE.md",
  "COMMANDS_CORE.md",
  "MENTOR_SKILLS_CORE.md",
];

const STANDARD_DOMAIN_FILES = [
  "DOMAIN.md",
  "SYLLABUS.md",
  "SKILL_GRAPH.md",
  "PRACTICE_RULES.md",
  "ASSESSMENT_RULES.md",
  "PROJECTS.md",
  "GLOSSARY.md",
];

const OPTIONAL_DOMAIN_FILES = ["QUALITY_REVIEW.md"];

const JAVASCRIPT_SUPPORT_FILES = [
  "DOMAIN_OVERVIEW.md",
  "MENTOR_BEHAVIOR.md",
  "PRACTICE_MODEL.md",
  "ASSESSMENT_MODEL.md",
  "MASTERY_EXPECTATIONS.md",
  "PROJECT_PACK_SELECTION.md",
];

const COMMAND_FILES = [
  "START_LESSON.md",
  "CONTINUE_LESSON.md",
  "PRACTICE.md",
  "REVIEW.md",
  "ASSESS.md",
  "SHOW_PROGRESS.md",
];

const SKILL_FILES = [
  ["lesson-instructor", "SKILL.md"],
  ["practice-coach", "SKILL.md"],
  ["homework-reviewer", "SKILL.md"],
  ["progress-manager", "SKILL.md"],
  ["assessment-engine", "SKILL.md"],
];

function readRequiredFile(filePath, label) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required ${label}: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function readOptionalFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}

function section(title, sourcePath, content) {
  return `## ${title}\n\nCanonical source: \`${sourcePath}\`.\n\n${content.trim()}\n`;
}

function getDomainTitle(domainConfig) {
  return domainConfig.title || domainConfig.id;
}

function getDomainPurpose(domainConfig) {
  return domainConfig.purpose || `Teach ${getDomainTitle(domainConfig)} using Universal Learning OS.`;
}

function buildProjectInstructions(domainConfig) {
  const title = getDomainTitle(domainConfig);
  const purpose = getDomainPurpose(domainConfig);
  const terms = domainConfig.terms || "technical terms";

  return `# ${title} Mentor OS Compact

## Pack Profile

- Profile: \`compact/free\`
- File budget: max 5 files
- Target environment: ChatGPT Projects Free plan
- Canonical sources summarized: \`specification/\`, \`core/\`, \`commands/\`, \`skills/\`, and \`domains/${domainConfig.id}/\`

## Purpose

${purpose}

## Localization

- Instruction language: Azerbaijani.
- Keep ${terms} in English where natural.
- Code, syntax, API names, config keys, compiler messages, and domain-specific terms should remain in English when natural.

## Core Rules

- Mastery MUST require evidence or explicit user instruction.
- Lessons, generated examples, copied answers, copied code, file upload, and Project setup MUST NOT imply mastery.
- \`START_LESSON\` MUST teach before testing by default.
- The initial learner action MUST be a guided knowledge check or guided action, not premature independent practice.
- Lessons progress across turns from explanation to guided work and then independent work.
- Learner tasks MUST NOT depend on untaught concepts or unavailable prerequisites.
- One response SHOULD normally request only one clear learner action.
- Diagnostic, challenge-first, practice-only, or assessment behavior before teaching requires an explicit learner request.
- Learner progress belongs to learner state, not this compact pack.
- Do not silently modify learner state.
- If learner state or evidence is missing, say so honestly.

## Learner-Facing Mentor Mode

Normal lessons, practice, review, and homework review MUST be clean learner-facing mentoring.

Do NOT show these unless explicitly requested: \`Evidence Generated\`, \`Proposed State Updates\`, YAML learner state updates, internal skill IDs, mastery tables, Project Pack implementation details, learner state architecture, continuation prompt blocks, or audit/debug notes.

When progress metadata is explicitly requested, keep it concise and separate observed evidence from recommendations.

Explicit metadata requests include \`SHOW_PROGRESS\`, evidence summary, state update, proposed state updates, continuation prompt, learner handoff, progress report, or debug/audit output.

## Command Behavior Summary

- \`START_LESSON\`: teach the next appropriate ${title} concept deeply enough for reasoning, then request one guided learner action.
- \`CONTINUE_LESSON\`: review the learner response, repair misconceptions, and continue with one appropriate next action.
- \`PRACTICE\`: run focused domain practice and review learner output.
- \`REVIEW\`: revisit weak or user-selected topics.
- \`ASSESS\`: evaluate only reviewed learner evidence.
- \`SHOW_PROGRESS\`: show progress metadata only when explicitly requested.
`;
}

function buildStartupPrompt(domainConfig) {
  const title = getDomainTitle(domainConfig);
  const terms = domainConfig.terms || "technical terms";

  if (domainConfig.id === "nodejs") {
    return `# Startup Prompt

Simple usage:

\`\`\`text
Start lesson
\`\`\`

Explicit example:

\`\`\`text
Start Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks and include practical TypeScript exercises.
\`\`\`

Project-based example:

\`\`\`text
Start a Node.js backend project track. Guide me from requirements and API design through PostgreSQL, validation, testing, security, and deployment.
\`\`\`

NestJS example (foundations required):

\`\`\`text
Start the NestJS specialization after verifying that I understand Node.js runtime, HTTP, backend architecture, validation, PostgreSQL, and testing fundamentals.
\`\`\`

\`\`\`text
Use Node.js Mentor OS Compact.

Instruction language: Azerbaijani. Keep Node.js and backend technical terms in English where natural. Use TypeScript for projects and JavaScript for focused runtime examples when useful.

If learner state or a previous summary exists, use it. Otherwise, "Start lesson" selects Lesson 1: Node.js runtime foundations. Teach runtime and HTTP before frameworks, require practical learner reasoning, use Fastify as the default practical framework with honest Express comparisons, preserve SQL and transaction reasoning with PostgreSQL, and include validation, errors, tests, security, observability, reliability, and deployment. NestJS is a later specialization only after foundations.

Keep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.
\`\`\`
`;
  }

  if (domainConfig.id === "dsa") {
    return `# Startup Prompt

Simple usage:

\`\`\`text
Start lesson
\`\`\`

Explicit example:

\`\`\`text
Start Lesson 1 for DSA using JavaScript. Teach me step by step, let me reason before showing solutions, include coding practice, edge cases, and time/space complexity.
\`\`\`

\`\`\`text
Use Data Structures and Algorithms Mentor OS Compact.

Instruction language: Azerbaijani. Keep DSA technical terms in English where natural. Use JavaScript by default; TypeScript is optional when requested or helpful for clarity.

If learner state or a previous session summary exists, use it. Otherwise, "Start lesson" selects Lesson 1: DSA and Big O, then continue sequentially. Ask me to reason before coding, compare brute force with optimized approaches, test edge cases, and analyze final time complexity and space complexity. Do not reveal full solutions too early; use progressive hints.

Keep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.
\`\`\`
`;
  }

  if (domainConfig.id === "frontend-system-design") {
    return `# Startup Prompt

Simple usage:

\`\`\`text
Start lesson
\`\`\`

Explicit example:

\`\`\`text
Start Lesson 1 for Front-End System Design. Teach me as a Senior Front-End Engineer, ask me to clarify requirements and reason about trade-offs before showing a complete design.
\`\`\`

Interview-mode example:

\`\`\`text
Start a Front-End System Design interview simulation. Give me an ambiguous design problem, let me drive the requirements and architecture, then review my decisions.
\`\`\`

\`\`\`text
Use Front-End System Design Mentor OS Compact.

Instruction language: Azerbaijani. Keep Front-End System Design technical terms and diagram labels in English where natural.

If learner state or a previous summary exists, use it. Otherwise, "Start lesson" selects Lesson 1. Ask me to clarify users, journeys, functional requirements, non-functional requirements, assumptions, and constraints before proposing architecture. Require explicit state ownership, data flow, trade-offs, failure modes, testing, deployment, and design defense. Use progressive assistance and do not reveal a complete design too early.

Keep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.
\`\`\`
`;
  }

  return `# Startup Prompt

\`\`\`text
Use ${title} Mentor OS Compact.

Instruction language: Azerbaijani.
Keep ${terms} in English where natural.

Use learner state or a previous session summary when supplied. If no state exists, begin the first ${title} lesson in teaching-first mode. Use a diagnostic or challenge before teaching only when I explicitly request that mode.

Keep normal learner-facing output clean. Do not show evidence blocks, proposed state updates, YAML learner state, internal skill IDs, Project Pack details, continuation prompt blocks, or audit/debug notes unless I explicitly ask for them.

If I do not specify a command, recommend START_LESSON, PRACTICE, REVIEW, ASSESS, or SHOW_PROGRESS.
\`\`\`
`;
}

function collectDomainSources(repoRoot, domainConfig) {
  const domainDir = path.join(repoRoot, "domains", domainConfig.id);
  if (!fs.existsSync(domainDir)) {
    throw new Error(`Missing domain directory: ${domainDir}`);
  }

  const sources = [];

  for (const fileName of STANDARD_DOMAIN_FILES) {
    const filePath = path.join(domainDir, fileName);
    sources.push({
      fileName,
      sourcePath: `domains/${domainConfig.id}/${fileName}`,
      content: readRequiredFile(filePath, "domain source file"),
    });
  }

  for (const fileName of OPTIONAL_DOMAIN_FILES) {
    const filePath = path.join(domainDir, fileName);
    const content = readOptionalFile(filePath);
    if (content) {
      sources.push({ fileName, sourcePath: `domains/${domainConfig.id}/${fileName}`, content });
    }
  }

  if (domainConfig.id === "javascript") {
    for (const fileName of JAVASCRIPT_SUPPORT_FILES) {
      const filePath = path.join(domainDir, fileName);
      const content = readOptionalFile(filePath);
      if (content) {
        sources.push({ fileName, sourcePath: `domains/${domainConfig.id}/${fileName}`, content });
      }
    }
  }

  return sources;
}

function buildDomainCore(repoRoot, domainConfig) {
  const sources = collectDomainSources(repoRoot, domainConfig);
  const body = sources
    .map((source) => section(source.fileName, source.sourcePath, source.content))
    .join("\n");

  return `# ${getDomainTitle(domainConfig)} Domain Core

Generated compact domain core for \`${domainConfig.id}\`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

${body}`;
}

function buildCommandsCore(repoRoot) {
  const sections = COMMAND_FILES.map((fileName) => {
    const filePath = path.join(repoRoot, "commands", fileName);
    const content = readRequiredFile(filePath, "command source file");
    return section(fileName, `commands/${fileName}`, content);
  });

  return `# Commands Core

Generated compact command core. Commands are user-invoked workflows, not agent skills.

${sections.join("\n")}`;
}

function buildMentorSkillsCore(repoRoot) {
  const sections = SKILL_FILES.map(([skillDir, fileName]) => {
    const filePath = path.join(repoRoot, "skills", skillDir, fileName);
    const content = readRequiredFile(filePath, "skill source file");
    return section(`${skillDir}/${fileName}`, `skills/${skillDir}/${fileName}`, content);
  });

  return `# Mentor Skills Core

Generated compact mentor skills core. Agent skills are assistant capabilities, not learner competencies.

## Compact Runtime Additions

- Lesson instructor behavior: teach one focused concept deeply enough for reasoning before requesting one guided learner action.
- Exercise readiness: use only the current concept and established prerequisites; keep simplified tasks technically correct.
- Lesson progression: provide feedback and guided work before independent practice unless the learner explicitly requests an exception mode.
- Practice coach behavior: run evidence-producing practice.
- Homework reviewer behavior: review learner submissions without inventing mastery.
- Progress manager behavior: show progress metadata only when explicitly requested.
- Assessment behavior: evaluate reviewed evidence only.
- Next-action behavior: provide one practical next step without showing continuation prompt blocks unless requested.

${sections.join("\n")}`;
}

function ensureSafeTargetDirectory(repoRoot, outputDir) {
  const generatedRoot = path.join(repoRoot, "exports", "generated");
  const resolvedGeneratedRoot = path.resolve(generatedRoot);
  const resolvedOutputDir = path.resolve(outputDir);

  if (!resolvedOutputDir.startsWith(resolvedGeneratedRoot + path.sep)) {
    throw new Error(`Refusing to write outside exports/generated: ${resolvedOutputDir}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });
}

function cleanUnexpectedFiles(outputDir) {
  const entries = fs.readdirSync(outputDir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(outputDir, entry.name);
    if (!COMPACT_FILES.includes(entry.name)) {
      if (entry.isFile()) {
        fs.unlinkSync(entryPath);
      } else {
        throw new Error(`Unexpected non-file entry in compact pack directory: ${entryPath}`);
      }
    }
  }
}

function generateCompactPack(repoRoot, domain, options = {}) {
  const domainConfig = getDomainConfig(domain);
  if (!domainConfig) {
    throw new Error(`Unsupported domain: ${domain}`);
  }

  const outputDir = getGeneratedPackPath(repoRoot, domain, "compact");
  const files = {
    "PROJECT_INSTRUCTIONS.md": buildProjectInstructions(domainConfig),
    "STARTUP_PROMPT.md": buildStartupPrompt(domainConfig),
    "DOMAIN_CORE.md": buildDomainCore(repoRoot, domainConfig),
    "COMMANDS_CORE.md": buildCommandsCore(repoRoot),
    "MENTOR_SKILLS_CORE.md": buildMentorSkillsCore(repoRoot),
  };

  if (!options.dryRun) {
    ensureSafeTargetDirectory(repoRoot, outputDir);
    cleanUnexpectedFiles(outputDir);

    for (const fileName of COMPACT_FILES) {
      fs.writeFileSync(path.join(outputDir, fileName), files[fileName], "utf8");
    }
  }

  return {
    outputDir,
    filesWritten: COMPACT_FILES.length,
    files: COMPACT_FILES,
    dryRun: Boolean(options.dryRun),
  };
}

module.exports = {
  COMPACT_FILES,
  generateCompactPack,
};
