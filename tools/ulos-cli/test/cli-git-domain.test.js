const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const domainRoot = path.join(repoRoot, "domains", "git");
const generatedRoot = path.join(repoRoot, "exports", "generated");
const { DOMAIN_CONFIG } = require("../src/lib/domains");
const { COMPACT_FILES } = require("../src/lib/compact-generator");
const { getStandardFiles } = require("../src/lib/standard-generator");

const canonicalFiles = [
  "ASSESSMENT_RULES.md",
  "DOMAIN.md",
  "GLOSSARY.md",
  "PRACTICE_RULES.md",
  "PROJECTS.md",
  "QUALITY_REVIEW.md",
  "SKILL_GRAPH.md",
  "SYLLABUS.md",
];

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function packContent(profile) {
  const packPath = path.join(generatedRoot, `git-${profile}`);
  return fs.readdirSync(packPath)
    .filter((name) => name.endsWith(".md"))
    .map((name) => read(path.join(packPath, name)))
    .join("\n");
}

test("git registry identity is exact and appears once", () => {
  const entries = DOMAIN_CONFIG.filter(({ id }) => id === "git");
  assert.equal(DOMAIN_CONFIG.length, 10);
  assert.equal(entries.length, 1);
  assert.deepEqual(entries[0], {
    id: "git",
    launchPrefix: "GIT",
    title: "Git",
    purpose: "Develop mental-model-first, recovery-aware Git competence from everyday repository work to advanced collaboration, release governance, debugging, and workflow design.",
    terms: "Git commands and version-control technical terms",
  });
});

test("git canonical directory has exactly the eight required learner-neutral files", () => {
  assert.deepEqual(fs.readdirSync(domainRoot).sort(), canonicalFiles);
  const content = canonicalFiles.map((name) => read(path.join(domainRoot, name))).join("\n");
  for (const forbidden of [/learner_profile_ref\s*:/i, /learning_skill_records\s*:/i, /evidence_log\s*:/i]) {
    assert.doesNotMatch(content, forbidden);
  }
});

test("git standard and compact output filenames preserve exact contracts", () => {
  const standard = getStandardFiles("git");
  assert.equal(standard.length, 25);
  for (const fileName of [
    "GIT_DOMAIN_CONTEXT.md",
    "GIT_SYLLABUS.md",
    "GIT_SKILL_GRAPH.md",
    "GIT_GLOSSARY_PROJECTS.md",
    "GIT_PRACTICE_ASSESSMENT_RULES.md",
  ]) assert.ok(standard.includes(fileName), fileName);
  assert.deepEqual(COMPACT_FILES, [
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
    "DOMAIN_CORE.md",
    "COMMANDS_CORE.md",
    "MENTOR_SKILLS_CORE.md",
  ]);
});

test("generated git packs teach state graph remote and recovery models", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    for (const marker of [
      /working tree/i,
      /staging area\/index/i,
      /commit DAG/i,
      /remote-tracking branch/i,
      /reflog/i,
      /local versus (?:published\/)?shared history/i,
      /disposable repositor/i,
    ]) assert.match(content, marker, `${profile}: ${marker}`);
  }
});

test("generated git packs preserve destructive-operation and secret safety", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    assert.match(content, /reset --hard/);
    assert.match(content, /--force-with-lease/);
    assert.match(content, /safer alternatives/i);
    assert.match(content, /credential revocation|revoke\/rotate|revocation\/rotation/i);
    assert.match(content, /local rewrite alone|local rewrite/i);
  }
});

test("generated git packs preserve deep teaching and evidence boundaries", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    assert.match(content, /START_LESSON.*teach before testing/is);
    assert.match(content, /guided knowledge check or guided action/i);
    assert.match(content, /independent practice/i);
    assert.match(content, /copied (?:answers|commands|code).*not.*mastery|not learner evidence/is);
    assert.match(content, /Do not silently modify learner state/i);
  }
});

test("generated git packs retain generic lesson export behavior", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    assert.match(content, /commands\/SAVE_LESSON\.md/);
    assert.match(content, /commands\/SAVE_LESSON_TO_NOTION\.md/);
    assert.match(content, /skills\/obsidian-lesson-exporter\/SKILL\.md/);
    assert.match(content, /skills\/notion-lesson-logger\/SKILL\.md/);
    assert.match(content, /creates no evidence|does not create evidence/i);
  }
});

test("all registered generated packs preserve 25 and 5 file budgets", () => {
  for (const { id } of DOMAIN_CONFIG) {
    const standardFiles = fs.readdirSync(path.join(generatedRoot, `${id}-standard`), { withFileTypes: true }).filter((entry) => entry.isFile());
    const compactFiles = fs.readdirSync(path.join(generatedRoot, `${id}-compact`), { withFileTypes: true }).filter((entry) => entry.isFile());
    assert.equal(standardFiles.length, 25, `${id}-standard`);
    assert.equal(compactFiles.length, 5, `${id}-compact`);
  }
});
