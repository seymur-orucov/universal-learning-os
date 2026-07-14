const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const cliPath = path.join(repoRoot, "tools/ulos-cli/src/index.js");

function runCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function output(result) {
  return `${result.stdout}${result.stderr}`;
}

test("list-domains exits 0 and reports the exact supported domains", () => {
  const result = runCli(["list-domains"]);
  assert.equal(result.status, 0, output(result));

  const domains = result.stdout
    .split(/\r?\n/)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());

  assert.deepEqual(domains, [
    "sql-postgresql",
    "english",
    "javascript",
    "typescript",
    "dsa",
    "frontend-system-design",
    "nodejs",
    "git",
  ]);
  assert.equal(domains.filter((domain) => domain === "git").length, 1);
});

test("validate exits 0 for generated pack contracts", () => {
  const result = runCli(["validate"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Domains checked: 8/);
  assert.match(result.stdout, /Packs checked: 16/);

  const generatedPackDirectories = fs
    .readdirSync(path.join(repoRoot, "exports", "generated"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /-(standard|compact)$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
  assert.equal(generatedPackDirectories.length, 16);
  assert.deepEqual(generatedPackDirectories, [
    "dsa-compact",
    "dsa-standard",
    "english-compact",
    "english-standard",
    "frontend-system-design-compact",
    "frontend-system-design-standard",
    "git-compact",
    "git-standard",
    "javascript-compact",
    "javascript-standard",
    "nodejs-compact",
    "nodejs-standard",
    "sql-postgresql-compact",
    "sql-postgresql-standard",
    "typescript-compact",
    "typescript-standard",
  ]);
});

test("git standard inspect preserves the exact 25-file contract and GIT filenames", () => {
  const result = runCli(["inspect-pack", "--domain", "git", "--profile", "standard"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 25/);
  assert.match(result.stdout, /Expected rule: exactly 25 files/);
  assert.match(result.stdout, /Rule status: PASS/);
  for (const fileName of [
    "GIT_DOMAIN_CONTEXT.md",
    "GIT_SYLLABUS.md",
    "GIT_SKILL_GRAPH.md",
    "GIT_GLOSSARY_PROJECTS.md",
    "GIT_PRACTICE_ASSESSMENT_RULES.md",
  ]) assert.match(result.stdout, new RegExp(fileName.replace(".", "\\.")));
});

test("git compact inspect preserves the exact 5-file list", () => {
  const result = runCli(["inspect-pack", "--domain", "git", "--profile", "compact"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 5/);
  assert.match(result.stdout, /Rule status: PASS/);

  const lines = result.stdout.split(/\r?\n/);
  const files = lines
    .slice(lines.findIndex((line) => line === "Files:") + 1)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
  assert.deepEqual(files, [
    "COMMANDS_CORE.md",
    "DOMAIN_CORE.md",
    "MENTOR_SKILLS_CORE.md",
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
  ]);
});

test("dsa standard inspect preserves the exact 25-file contract", () => {
  const result = runCli(["inspect-pack", "--domain", "dsa", "--profile", "standard"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 25/);
  assert.match(result.stdout, /Expected rule: exactly 25 files/);
  assert.match(result.stdout, /Rule status: PASS/);
});

test("dsa compact inspect preserves the exact 5-file list", () => {
  const result = runCli(["inspect-pack", "--domain", "dsa", "--profile", "compact"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 5/);
  assert.match(result.stdout, /Expected rule: exactly 5 files/);
  assert.match(result.stdout, /Rule status: PASS/);

  const lines = result.stdout.split(/\r?\n/);
  const files = lines
    .slice(lines.findIndex((line) => line === "Files:") + 1)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());

  assert.deepEqual(files, [
    "COMMANDS_CORE.md",
    "DOMAIN_CORE.md",
    "MENTOR_SKILLS_CORE.md",
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
  ]);
});

test("frontend-system-design standard inspect preserves the exact 25-file contract", () => {
  const result = runCli(["inspect-pack", "--domain", "frontend-system-design", "--profile", "standard"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 25/);
  assert.match(result.stdout, /Expected rule: exactly 25 files/);
  assert.match(result.stdout, /Rule status: PASS/);
});

test("frontend-system-design compact inspect preserves the exact 5-file list", () => {
  const result = runCli(["inspect-pack", "--domain", "frontend-system-design", "--profile", "compact"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 5/);
  assert.match(result.stdout, /Rule status: PASS/);

  const lines = result.stdout.split(/\r?\n/);
  const files = lines
    .slice(lines.findIndex((line) => line === "Files:") + 1)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());

  assert.deepEqual(files, [
    "COMMANDS_CORE.md",
    "DOMAIN_CORE.md",
    "MENTOR_SKILLS_CORE.md",
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
  ]);
});

test("nodejs standard inspect preserves the exact 25-file contract", () => {
  const result = runCli(["inspect-pack", "--domain", "nodejs", "--profile", "standard"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 25/);
  assert.match(result.stdout, /Expected rule: exactly 25 files/);
  assert.match(result.stdout, /Rule status: PASS/);
});

test("nodejs compact inspect preserves the exact 5-file list", () => {
  const result = runCli(["inspect-pack", "--domain", "nodejs", "--profile", "compact"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 5/);
  assert.match(result.stdout, /Expected rule: exactly 5 files/);
  assert.match(result.stdout, /Rule status: PASS/);

  const lines = result.stdout.split(/\r?\n/);
  const files = lines
    .slice(lines.findIndex((line) => line === "Files:") + 1)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());

  assert.deepEqual(files, [
    "COMMANDS_CORE.md",
    "DOMAIN_CORE.md",
    "MENTOR_SKILLS_CORE.md",
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
  ]);
});

test("typescript standard inspect preserves the 25-file contract", () => {
  const result = runCli(["inspect-pack", "--domain", "typescript", "--profile", "standard"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 25/);
  assert.match(result.stdout, /Expected rule: exactly 25 files/);
  assert.match(result.stdout, /Rule status: PASS/);
});

test("typescript compact inspect preserves the 5-file exact file list", () => {
  const result = runCli(["inspect-pack", "--domain", "typescript", "--profile", "compact"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /File count: 5/);
  assert.match(result.stdout, /Expected rule: exactly 5 files/);
  assert.match(result.stdout, /Rule status: PASS/);

  const files = result.stdout
    .split(/\r?\n/)
    .slice(result.stdout.split(/\r?\n/).findIndex((line) => line === "Files:") + 1)
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());

  assert.deepEqual(files, [
    "COMMANDS_CORE.md",
    "DOMAIN_CORE.md",
    "MENTOR_SKILLS_CORE.md",
    "PROJECT_INSTRUCTIONS.md",
    "STARTUP_PROMPT.md",
  ]);
});
