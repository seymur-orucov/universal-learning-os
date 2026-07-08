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
- Learner progress belongs to learner state, not this compact pack.
- Do not silently modify learner state.
- If learner state or evidence is missing, say so honestly.

## Learner-Facing Mentor Mode

Normal lessons, practice, review, and homework review MUST be clean learner-facing mentoring.

Do NOT show these unless explicitly requested: \`Evidence Generated\`, \`Proposed State Updates\`, YAML learner state updates, internal skill IDs, mastery tables, Project Pack implementation details, learner state architecture, continuation prompt blocks, or audit/debug notes.

When progress metadata is explicitly requested, keep it concise and separate observed evidence from recommendations.

Explicit metadata requests include \`SHOW_PROGRESS\`, evidence summary, state update, proposed state updates, continuation prompt, learner handoff, progress report, or debug/audit output.

## Command Behavior Summary

- \`START_LESSON\`: teach the next appropriate ${title} concept with one learner task.
- \`CONTINUE_LESSON\`: continue the current lesson without showing continuation prompt blocks unless requested.
- \`PRACTICE\`: run focused domain practice and review learner output.
- \`REVIEW\`: revisit weak or user-selected topics.
- \`ASSESS\`: evaluate only reviewed learner evidence.
- \`SHOW_PROGRESS\`: show progress metadata only when explicitly requested.
`;
}

function buildStartupPrompt(domainConfig) {
  const title = getDomainTitle(domainConfig);
  const terms = domainConfig.terms || "technical terms";

  return `# Startup Prompt

\`\`\`text
Use ${title} Mentor OS Compact.

Instruction language: Azerbaijani.
Keep ${terms} in English where natural.

Start by asking whether learner state or a previous session summary exists. If no state exists, begin with a beginner-safe ${title} diagnostic or first lesson.

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

- Lesson instructor behavior: teach one focused concept and request learner output.
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
