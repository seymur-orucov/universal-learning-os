const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const domainRoot = path.join(repoRoot, "domains", "gof-react-patterns");
const generatedRoot = path.join(repoRoot, "exports", "generated");
const launchRoot = path.join(generatedRoot, "project-launch-kits");
const tempRoot = path.join(repoRoot, "tmp", "ulos-cli-tests", "gof-react-patterns-domain");
const cliPath = path.join(repoRoot, "tools/ulos-cli/src/index.js");
const { COMPACT_FILES, generateCompactPack } = require("../src/lib/compact-generator");
const { DOMAIN_CONFIG } = require("../src/lib/domains");
const { generateStandardPack, getStandardFiles } = require("../src/lib/standard-generator");
const { validatePack } = require("../src/lib/validation");

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

const gofPatterns = [
  "Factory Method", "Abstract Factory", "Builder", "Prototype", "Singleton",
  "Adapter", "Bridge", "Composite", "Decorator", "Facade", "Flyweight", "Proxy",
  "Chain of Responsibility", "Command", "Iterator", "Mediator", "Memento", "Observer",
  "State", "Strategy", "Template Method", "Visitor", "Interpreter",
];

const reactPatterns = [
  "Compound Components", "Controlled and Uncontrolled Components", "Container/Presentational",
  "Custom Hooks", "Render Props", "Higher-Order Components", "Provider Pattern",
  "Reducer Pattern", "State Reducer", "Prop Getter", "Headless UI", "Slots",
  "Polymorphic Components", "State Colocation", "Lifting State Up", "Derived State",
  "External Store", "Adapter Hooks", "Optimistic UI", "Error Boundary",
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
  const packRoot = path.join(generatedRoot, `gof-react-patterns-${profile}`);
  return fs.readdirSync(packRoot)
    .filter((name) => name.endsWith(".md"))
    .map((name) => read(path.join(packRoot, name)))
    .join("\n");
}

test.after(() => {
  fs.rmSync(tempRoot, { recursive: true, force: true });
  const parent = path.dirname(tempRoot);
  if (fs.existsSync(parent) && fs.readdirSync(parent).length === 0) fs.rmdirSync(parent);
});

test("gof-react-patterns registry identity and metadata are exact", () => {
  const entries = DOMAIN_CONFIG.filter(({ id }) => id === "gof-react-patterns");
  assert.equal(DOMAIN_CONFIG.length, 11);
  assert.equal(entries.length, 1);
  assert.deepEqual(entries[0], {
    id: "gof-react-patterns",
    launchPrefix: "GOF_REACT_PATTERNS",
    title: "GoF and React Design Patterns",
    purpose:
      "Develop pattern-selection, refactoring, and architecture judgment across GoF and React patterns without overengineering or false one-to-one mappings.",
    terms: "GoF, TypeScript, JavaScript, React, Vitest, and React Testing Library terminology",
  });
});

test("canonical domain has exactly nine learner-neutral files", () => {
  assert.deepEqual(fs.readdirSync(domainRoot).sort(), canonicalFiles);
  const content = canonicalFiles.map((name) => read(path.join(domainRoot, name))).join("\n");
  for (const forbidden of [/learner_profile_ref\s*:/i, /learning_skill_records\s*:/i, /evidence_log\s*:/i]) {
    assert.doesNotMatch(content, forbidden);
  }
});

test("syllabus covers exactly 15 modules, all 23 GoF patterns, all 20 React patterns, and the 28-part contract", () => {
  const syllabus = read(path.join(domainRoot, "SYLLABUS.md"));
  assert.equal((syllabus.match(/^## Module \d+ /gm) || []).length, 15);
  for (const pattern of gofPatterns) assert.ok(syllabus.includes(pattern), `missing GoF pattern: ${pattern}`);
  for (const pattern of reactPatterns) assert.ok(syllabus.includes(pattern), `missing React pattern: ${pattern}`);
  assert.match(syllabus, /28-Part Contract/);
  assert.match(syllabus, /Problem.*naive design.*forces.*derivation.*implementation.*tests.*trade-offs.*practice/is);
});

test("content includes comparisons, anti-patterns, practice schema, checkpoints, cases, capstones, interview modes, glossary, diagrams, and teaching-first evidence boundaries", () => {
  const content = canonicalFiles.map((name) => read(path.join(domainRoot, name))).join("\n");
  const markers = [
    /TypeScript/, /JavaScript/, /React\/TSX/, /Vitest/, /React Testing Library/,
    /functional alternative/i, /no-pattern/i, /false one-to-one/i, /overengineering/i,
    /solution.*attempt/is, /task_id/, /hint_ladder/, /retrieval review/i,
    /Twelve Refactoring Laboratories/, /Pattern Removal/i, /Junior/, /Mid/, /Senior/, /Staff\/Lead/,
    /Foundations/, /Creational GoF/, /Structural GoF/, /Behavioral GoF/, /Final capstone/,
    /12 detailed case studies/i, /three capstone/i, /```mermaid/,
    /Lesson exposure.*mastery/is, /implementation.*tests.*explanation.*trade-off.*transfer/is,
  ];
  for (const marker of markers) assert.match(content, marker, `missing marker: ${marker}`);
  assert.ok((content.match(/```mermaid/g) || []).length >= 6);
  assert.doesNotMatch(content, /\bclass\s+(?:Dog|Car)\b/);
});

test("standard and compact dry-runs and filename contracts are exact", () => {
  assert.equal(generateStandardPack(repoRoot, "gof-react-patterns", { dryRun: true }).filesWritten, 25);
  assert.deepEqual(generateCompactPack(repoRoot, "gof-react-patterns", { dryRun: true }).files, COMPACT_FILES);
  const standard = getStandardFiles("gof-react-patterns");
  assert.equal(standard.length, 25);
  for (const name of [
    "GOF_REACT_PATTERNS_DOMAIN_CONTEXT.md",
    "GOF_REACT_PATTERNS_SYLLABUS.md",
    "GOF_REACT_PATTERNS_SKILL_GRAPH.md",
    "GOF_REACT_PATTERNS_GLOSSARY_PROJECTS.md",
    "GOF_REACT_PATTERNS_PRACTICE_ASSESSMENT_RULES.md",
  ]) assert.ok(standard.includes(name), name);
  assert.deepEqual([...COMPACT_FILES].sort(), [
    "COMMANDS_CORE.md", "DOMAIN_CORE.md", "MENTOR_SKILLS_CORE.md",
    "PROJECT_INSTRUCTIONS.md", "STARTUP_PROMPT.md",
  ]);
});

test("generated standard and compact packs pass validation and preserve content integrity", () => {
  for (const profile of ["standard", "compact"]) {
    assert.equal(validatePack(repoRoot, "gof-react-patterns", profile).passed, true);
    const content = packContent(profile);
    for (const marker of [
      /START_TRACK/, /START_LESSON/, /CONTINUE_LESSON/, /PRACTICE/, /REVIEW/,
      /ASSESS/, /START_PROJECT/, /INTERVIEW/, /SHOW_PROGRESS/,
      /problem.*naive design.*forces/is, /TypeScript/, /JavaScript/, /React/,
      /Vitest/, /React Testing Library/, /no-pattern/i, /Do not silently modify learner state/i,
    ]) assert.match(content, marker, `${profile}: ${marker}`);
  }
});

test("all eight standard and compact launch-kit files exist", () => {
  for (const name of [
    "GOF_REACT_PATTERNS_PROJECT_SETUP.md",
    "GOF_REACT_PATTERNS_UPLOAD_FILE_LIST.md",
    "GOF_REACT_PATTERNS_STARTUP_PROMPT_READY.md",
    "GOF_REACT_PATTERNS_CONTINUATION_PROMPT_READY.md",
    "GOF_REACT_PATTERNS_COMPACT_PROJECT_SETUP.md",
    "GOF_REACT_PATTERNS_COMPACT_UPLOAD_FILE_LIST.md",
    "GOF_REACT_PATTERNS_COMPACT_STARTUP_PROMPT_READY.md",
    "GOF_REACT_PATTERNS_COMPACT_CONTINUATION_PROMPT_READY.md",
  ]) assert.ok(fs.existsSync(path.join(launchRoot, name)), name);
});

test("handoff and snapshot helpers accept the domain and remove temporary files", () => {
  fs.mkdirSync(tempRoot, { recursive: true });
  const handoff = path.join(tempRoot, "handoff.md");
  const snapshot = path.join(tempRoot, "snapshot.md");
  const handoffResult = runCli(["create-handoff", "--domain", "gof-react-patterns", "--out", path.relative(repoRoot, handoff)]);
  assert.equal(handoffResult.status, 0, output(handoffResult));
  assert.match(read(handoff), /Domain id: `gof-react-patterns`/);
  const snapshotResult = runCli([
    "create-snapshot", "--domain", "gof-react-patterns", "--type", "milestone",
    "--out", path.relative(repoRoot, snapshot),
  ]);
  assert.equal(snapshotResult.status, 0, output(snapshotResult));
  assert.match(read(snapshot), /Domain id: `gof-react-patterns`/);
  fs.rmSync(handoff);
  fs.rmSync(snapshot);
});

test("all eleven domains retain exact 25 and 5 generated contracts", () => {
  for (const { id } of DOMAIN_CONFIG) {
    assert.equal(fs.readdirSync(path.join(generatedRoot, `${id}-standard`)).length, 25, `${id}-standard`);
    assert.equal(fs.readdirSync(path.join(generatedRoot, `${id}-compact`)).length, 5, `${id}-compact`);
  }
});
