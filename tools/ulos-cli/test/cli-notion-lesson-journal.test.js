const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const generatedRoot = path.join(repoRoot, "exports", "generated");
const { DOMAIN_CONFIG, SUPPORTED_PROFILES } = require("../src/lib/domains");
const { COMPACT_FILES } = require("../src/lib/compact-generator");
const { getStandardFiles } = require("../src/lib/standard-generator");
const { getProfileSourceSelections } = require("../src/lib/profile-sources");

const actionLine = "SAVE_LESSON_TO_NOTION — Bu dərsin əsas məqamlarını Notion-a yadda saxla";

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function readGenerated(domain, profile, fileName) {
  return fs.readFileSync(path.join(generatedRoot, `${domain}-${profile}`, fileName), "utf8");
}

function runtimeContent(domain, profile) {
  const names = profile === "compact"
    ? ["PROJECT_INSTRUCTIONS.md", "COMMANDS_CORE.md", "MENTOR_SKILLS_CORE.md"]
    : ["PROJECT_INSTRUCTIONS.md", "COMMAND_CONTINUE_LESSON.md", "SKILL_LESSON_INSTRUCTOR.md"];
  return names.map((fileName) => readGenerated(domain, profile, fileName)).join("\n");
}

test("canonical command and skill exist with the exact learner action", () => {
  const command = read("commands/SAVE_LESSON_TO_NOTION.md");
  const skill = read("skills/notion-lesson-logger/SKILL.md");
  assert.match(command, new RegExp(actionLine));
  assert.match(skill, /Notion Lesson Logger Agent Skill/);
});

test("canonical command defines available-context titles and honest omissions", () => {
  const command = read("commands/SAVE_LESSON_TO_NOTION.md");
  assert.match(command, /<date> — <domain> — <lesson-id-or-title>/);
  assert.match(command, /YYYY-MM-DD/);
  assert.match(command, /Do not invent missing values/);
  assert.match(command, /Omit unavailable components/);
});

test("shared compact selections include the global command and skill", () => {
  const selection = getProfileSourceSelections("compact");
  assert.ok(selection.commands.includes("commands/SAVE_LESSON_TO_NOTION.md"));
  assert.ok(selection.skills.includes("skills/notion-lesson-logger/SKILL.md"));
});

test("shared standard selections declare the two budget-preserving merges", () => {
  const selection = getProfileSourceSelections("standard");
  const commandMerge = selection.commands.find((entry) => entry.outputName === "COMMAND_CONTINUE_LESSON.md");
  const skillMerge = selection.skills.find((entry) => entry.outputName === "SKILL_LESSON_INSTRUCTOR.md");
  assert.deepEqual(commandMerge.sources, ["commands/CONTINUE_LESSON.md", "commands/SAVE_LESSON_TO_NOTION.md"]);
  assert.deepEqual(skillMerge.sources, ["skills/lesson-instructor/SKILL.md", "skills/notion-lesson-logger/SKILL.md"]);
});

test("profile selections are domain-independent so every registry entry and a future entry inherit them", () => {
  const domainIds = [...DOMAIN_CONFIG.map(({ id }) => id), "future-registered-domain"];
  for (const domainId of domainIds) {
    const compact = getProfileSourceSelections("compact");
    const standard = getProfileSourceSelections("standard");
    assert.ok(compact.commands.includes("commands/SAVE_LESSON_TO_NOTION.md"), domainId);
    assert.ok(standard.commands.some((entry) => entry.sources.includes("commands/SAVE_LESSON_TO_NOTION.md")), domainId);
  }
});

test("every registry pack includes command, skill, and exact closure action", () => {
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      assert.match(content, /commands\/SAVE_LESSON_TO_NOTION\.md/, `${id}-${profile} command`);
      assert.match(content, /skills\/notion-lesson-logger\/SKILL\.md/, `${id}-${profile} skill`);
      assert.match(content, new RegExp(actionLine), `${id}-${profile} action`);
    }
  }
});

test("every registry pack requires explicit invocation and forbids automatic execution", () => {
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      assert.match(content, /explicit(?:ly)? (?:learner )?invocation|explicit-only/i, `${id}-${profile}`);
      assert.match(content, /never execute it automatically|MUST NOT save automatically/i, `${id}-${profile}`);
    }
  }
});

test("every registry pack limits the suggestion to meaningful closure", () => {
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      assert.match(content, /summary or meaningful stopping point/i, `${id}-${profile}`);
      assert.match(content, /intermediate teaching|unfinished practice/i, `${id}-${profile}`);
    }
  }
});

test("target discovery and duplicate handling are canonical and generated", () => {
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      assert.match(content, /PLOS Learning Journal/, `${id}-${profile} target`);
      assert.match(content, /unambiguous match/, `${id}-${profile} duplicate`);
      assert.match(content, /ask before creating a duplicate/, `${id}-${profile} unsupported update`);
    }
  }
});

test("every registry pack requires confirmed success and a Markdown fallback", () => {
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      assert.match(content, /only after (?:the )?connector confirms success|only after confirmed connector success/i, `${id}-${profile}`);
      assert.match(content, /Notion-compatible Markdown/, `${id}-${profile}`);
      assert.match(content, /without claiming a write|do not claim/i, `${id}-${profile}`);
    }
  }
});

test("journal behavior stays separate from evidence mastery and learner state", () => {
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      assert.match(content, /does not create evidence|creates no evidence/i, `${id}-${profile} evidence`);
      assert.match(content, /does not .*mastery|implies no mastery/i, `${id}-${profile} mastery`);
      assert.match(content, /does not mutate learner state/, `${id}-${profile} state`);
    }
  }
});

test("all registry packs preserve exact file counts", () => {
  for (const { id } of DOMAIN_CONFIG) {
    const standardPath = path.join(generatedRoot, `${id}-standard`);
    const compactPath = path.join(generatedRoot, `${id}-compact`);
    assert.equal(fs.readdirSync(standardPath, { withFileTypes: true }).filter((entry) => entry.isFile()).length, 25, id);
    assert.equal(fs.readdirSync(compactPath, { withFileTypes: true }).filter((entry) => entry.isFile()).length, 5, id);
    assert.equal(getStandardFiles(id).length, 25, id);
    assert.equal(COMPACT_FILES.length, 5, id);
  }
});

test("Notion runtime files contain no assigned credentials opaque ids or active learner-state content", () => {
  const forbidden = [
    /notion[_ -]?(?:api[_ -]?)?(?:token|secret|key)\s*[:=]\s*[^\s`]+/i,
    /(?:page|database|workspace)[_-]?id\s*[:=]\s*[a-z0-9_-]{8,}/i,
    /learners\/active-learner\//i,
    /(?:learner_profile_ref|learning_skill_records|evidence_log)\s*:/i,
  ];
  for (const { id } of DOMAIN_CONFIG) {
    for (const profile of SUPPORTED_PROFILES) {
      const content = runtimeContent(id, profile);
      for (const pattern of forbidden) assert.doesNotMatch(content, pattern, `${id}-${profile}: ${pattern}`);
    }
  }
});
