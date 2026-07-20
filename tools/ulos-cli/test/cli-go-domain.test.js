const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const cliPath = path.join(repoRoot, "tools/ulos-cli/src/index.js");
const domainRoot = path.join(repoRoot, "domains", "go");
const generatedRoot = path.join(repoRoot, "exports", "generated");
const tempRoot = path.join(repoRoot, "tmp", "ulos-cli-tests", "go-domain");
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
  "README.md",
  "SKILL_GRAPH.md",
  "SYLLABUS.md",
];

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function runCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], { cwd: repoRoot, encoding: "utf8" });
}

function output(result) {
  return `${result.stdout}${result.stderr}`;
}

function packContent(profile) {
  const packPath = path.join(generatedRoot, `go-${profile}`);
  return fs.readdirSync(packPath)
    .filter((name) => name.endsWith(".md"))
    .map((name) => read(path.join(packPath, name)))
    .join("\n");
}

test.after(() => {
  fs.rmSync(tempRoot, { recursive: true, force: true });
  const parent = path.dirname(tempRoot);
  try {
    if (fs.existsSync(parent) && fs.readdirSync(parent).length === 0) fs.rmdirSync(parent);
  } catch {
    // Other test files may be using the shared temporary parent.
  }
});

test("go registry identity is exact and appears once", () => {
  const entries = DOMAIN_CONFIG.filter(({ id }) => id === "go");
  assert.equal(DOMAIN_CONFIG.length, 11);
  assert.equal(entries.length, 1);
  assert.deepEqual(entries[0], {
    id: "go",
    launchPrefix: "GO",
    title: "Go",
    purpose:
      "Develop language-first, concurrency-aware, production-ready Go competence for experienced JavaScript/TypeScript engineers moving toward backend, systems, platform, or full-stack engineering.",
    terms: "Go, backend, concurrency, systems, and production engineering technical terms",
  });
});

test("go canonical directory has exactly the required learner-neutral files", () => {
  assert.deepEqual(fs.readdirSync(domainRoot).sort(), canonicalFiles);
  const content = canonicalFiles.map((name) => read(path.join(domainRoot, name))).join("\n");
  for (const forbidden of [/learner_profile_ref\s*:/i, /learning_skill_records\s*:/i, /evidence_log\s*:/i]) {
    assert.doesNotMatch(content, forbidden);
  }
});

test("go standard and compact filenames preserve exact contracts", () => {
  const standard = getStandardFiles("go");
  assert.equal(standard.length, 25);
  for (const fileName of [
    "GO_DOMAIN_CONTEXT.md",
    "GO_SYLLABUS.md",
    "GO_SKILL_GRAPH.md",
    "GO_GLOSSARY_PROJECTS.md",
    "GO_PRACTICE_ASSESSMENT_RULES.md",
  ]) assert.ok(standard.includes(fileName), fileName);
  assert.deepEqual(COMPACT_FILES, [
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
    "DOMAIN_CORE.md",
    "COMMANDS_CORE.md",
    "MENTOR_SKILLS_CORE.md",
  ]);
});

test("go launch kits exist for both profiles", () => {
  const launchRoot = path.join(generatedRoot, "project-launch-kits");
  for (const name of [
    "GO_PROJECT_SETUP.md",
    "GO_UPLOAD_FILE_LIST.md",
    "GO_STARTUP_PROMPT_READY.md",
    "GO_CONTINUATION_PROMPT_READY.md",
    "GO_COMPACT_PROJECT_SETUP.md",
    "GO_COMPACT_UPLOAD_FILE_LIST.md",
    "GO_COMPACT_STARTUP_PROMPT_READY.md",
    "GO_COMPACT_CONTINUATION_PROMPT_READY.md",
  ]) assert.ok(fs.existsSync(path.join(launchRoot, name)), name);
});

test("generated go packs preserve language-first standard-library-first teaching", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    for (const marker of [
      /language-first/i,
      /standard-library-first|standard library before frameworks/i,
      /net\/http/i,
      /database\/sql/i,
      /explicit (?:PostgreSQL )?SQL/i,
      /before ORM|ORM convenience/i,
      /frameworks.*late|framework-late/i,
      /START_LESSON.*teach before testing/is,
      /guided knowledge check or guided action/i,
    ]) assert.match(content, marker, `${profile}: ${marker}`);
  }
});

test("generated go packs preserve Go data error and concurrency mental models", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    for (const marker of [
      /slice header|backing array/i,
      /value semantics/i,
      /errors\.Is/,
      /failure-path|failure path/i,
      /who starts and owns|who starts.*goroutine/is,
      /bounded concurrency/i,
      /cancellation/i,
      /error propagation/i,
      /goroutine leak/i,
      /graceful shutdown/i,
    ]) assert.match(content, marker, `${profile}: ${marker}`);
  }
});

test("generated go packs preserve production evidence and metadata boundaries", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    for (const marker of [
      /PostgreSQL/i,
      /security/i,
      /observability/i,
      /profiling/i,
      /deployment/i,
      /learner-produced/i,
      /copied (?:solutions|answers|code).*not.*mastery|do not establish mastery/is,
      /Do not silently modify learner state/i,
      /internal skill IDs/i,
    ]) assert.match(content, marker, `${profile}: ${marker}`);
  }
});

test("go handoff and snapshot helpers accept the domain and leave no artifact", () => {
  fs.mkdirSync(tempRoot, { recursive: true });
  const handoff = path.join(tempRoot, "go-handoff.md");
  const snapshot = path.join(tempRoot, "go-snapshot.md");
  const handoffResult = runCli(["create-handoff", "--domain", "go", "--out", path.relative(repoRoot, handoff)]);
  assert.equal(handoffResult.status, 0, output(handoffResult));
  assert.match(read(handoff), /Domain id: `go`/);
  const snapshotResult = runCli(["create-snapshot", "--domain", "go", "--type", "milestone", "--out", path.relative(repoRoot, snapshot)]);
  assert.equal(snapshotResult.status, 0, output(snapshotResult));
  assert.match(read(snapshot), /Domain id: `go`/);
  fs.rmSync(handoff);
  fs.rmSync(snapshot);
});

test("all eleven domains retain exact generated pack budgets", () => {
  for (const { id } of DOMAIN_CONFIG) {
    const standard = fs.readdirSync(path.join(generatedRoot, `${id}-standard`), { withFileTypes: true }).filter((entry) => entry.isFile());
    const compact = fs.readdirSync(path.join(generatedRoot, `${id}-compact`), { withFileTypes: true }).filter((entry) => entry.isFile());
    assert.equal(standard.length, 25, `${id}-standard`);
    assert.equal(compact.length, 5, `${id}-compact`);
  }
});

test("generated go packs retain generic lesson export contracts", () => {
  for (const profile of ["standard", "compact"]) {
    const content = packContent(profile);
    assert.match(content, /commands\/SAVE_LESSON\.md/);
    assert.match(content, /commands\/SAVE_LESSON_TO_NOTION\.md/);
    assert.match(content, /skills\/obsidian-lesson-exporter\/SKILL\.md/);
    assert.match(content, /skills\/notion-lesson-logger\/SKILL\.md/);
    assert.match(content, /creates no evidence|does not create evidence/i);
  }
});
