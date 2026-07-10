const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const cliPath = path.join(repoRoot, "tools/ulos-cli/src/index.js");
const testTempParent = path.join(repoRoot, "tmp", "ulos-cli-tests");
const tempRoot = path.join(testTempParent, "generate");

function runCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function output(result) {
  return `${result.stdout}${result.stderr}`;
}

function unsafeRepoSiblingPath(name) {
  return path.join(path.dirname(repoRoot), name);
}

function removeEmptyTempParent() {
  try {
    if (fs.existsSync(testTempParent) && fs.readdirSync(testTempParent).length === 0) {
      fs.rmdirSync(testTempParent);
    }
  } catch {
    // Another test process may be creating or removing a sibling temp directory.
  }
}

test.after(() => {
  fs.rmSync(tempRoot, { recursive: true, force: true });
  removeEmptyTempParent();
});

test("typescript standard dry-run generation exits 0 without writing", () => {
  const result = runCli(["generate", "--domain", "typescript", "--profile", "standard", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Standard pack generation dry run/);
  assert.match(result.stdout, /Files planned: 25/);
});

test("typescript compact dry-run generation exits 0 without writing", () => {
  const result = runCli(["generate", "--domain", "typescript", "--profile", "compact", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Compact pack generation dry run/);
  assert.match(result.stdout, /Files planned: 5/);
});

test("dsa standard dry-run generation plans exactly 25 files", () => {
  const result = runCli(["generate", "--domain", "dsa", "--profile", "standard", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Standard pack generation dry run/);
  assert.match(result.stdout, /Files planned: 25/);
});

test("dsa compact dry-run generation plans exactly 5 files", () => {
  const result = runCli(["generate", "--domain", "dsa", "--profile", "compact", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Compact pack generation dry run/);
  assert.match(result.stdout, /Files planned: 5/);
});

test("frontend-system-design standard dry-run generation plans exactly 25 files", () => {
  const result = runCli(["generate", "--domain", "frontend-system-design", "--profile", "standard", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Standard pack generation dry run/);
  assert.match(result.stdout, /Files planned: 25/);
});

test("frontend-system-design compact dry-run generation plans exactly 5 files", () => {
  const result = runCli(["generate", "--domain", "frontend-system-design", "--profile", "compact", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Compact pack generation dry run/);
  assert.match(result.stdout, /Files planned: 5/);
});

test("nodejs standard dry-run generation plans exactly 25 files", () => {
  const result = runCli(["generate", "--domain", "nodejs", "--profile", "standard", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Standard pack generation dry run/);
  assert.match(result.stdout, /Files planned: 25/);
});

test("nodejs compact dry-run generation plans exactly 5 files", () => {
  const result = runCli(["generate", "--domain", "nodejs", "--profile", "compact", "--dry-run"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Compact pack generation dry run/);
  assert.match(result.stdout, /Files planned: 5/);
});

test("invalid domain exits non-zero", () => {
  const result = runCli(["generate", "--domain", "not-a-domain", "--profile", "standard", "--dry-run"]);
  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsupported domain: not-a-domain/);
  assert.match(result.stderr, /Supported domains: sql-postgresql, english, javascript, typescript, dsa, frontend-system-design, nodejs/);
});

test("invalid profile exits non-zero", () => {
  const result = runCli(["generate", "--domain", "typescript", "--profile", "oversized", "--dry-run"]);
  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsupported profile: oversized/);
  assert.match(result.stderr, /Supported profiles: standard, compact/);
});

test("standard generation rejects unsafe output paths", () => {
  const unsafePath = unsafeRepoSiblingPath("ulos-cli-stage-20-unsafe-output");
  const result = runCli([
    "generate",
    "--domain",
    "typescript",
    "--profile",
    "standard",
    "--dry-run",
    "--out-dir",
    unsafePath,
  ]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Refusing to write outside repository root/);
});

test("standard generation rejects unexpected files in selected output directory", () => {
  const outDir = path.join(tempRoot, "unexpected-standard-output");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "UNEXPECTED.txt"), "test fixture\n", "utf8");

  const result = runCli([
    "generate",
    "--domain",
    "typescript",
    "--profile",
    "standard",
    "--out-dir",
    path.relative(repoRoot, outDir),
  ]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unexpected file\(s\) in standard pack directory: UNEXPECTED\.txt/);
});
