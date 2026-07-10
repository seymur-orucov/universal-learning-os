const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const cliPath = path.join(repoRoot, "tools/ulos-cli/src/index.js");
const testTempParent = path.join(repoRoot, "tmp", "ulos-cli-tests");
const tempRoot = path.join(testTempParent, "learner-runtime");
const handoffTestDir = path.join(repoRoot, "learners", "active-learner", "handoffs", "stage-20-cli-tests");
const snapshotTestDir = path.join(repoRoot, "learners", "active-learner", "snapshots", "stage-20-cli-tests");

function runCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function output(result) {
  return `${result.stdout}${result.stderr}`;
}

function repoRelative(filePath) {
  return path.relative(repoRoot, filePath);
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

function cleanup() {
  fs.rmSync(tempRoot, { recursive: true, force: true });
  removeEmptyTempParent();
  fs.rmSync(handoffTestDir, { recursive: true, force: true });
  fs.rmSync(snapshotTestDir, { recursive: true, force: true });
}

test.before(() => {
  cleanup();
});

test.after(() => {
  cleanup();
});

test("validate-learner passes before temporary learner artifacts are created", () => {
  const result = runCli(["validate-learner"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Status: PASS/);
});

test("create-handoff creates a supported-domain scaffold with learner-facing notes", () => {
  const outPath = path.join(handoffTestDir, "typescript-handoff.md");
  const result = runCli(["create-handoff", "--domain", "typescript", "--out", repoRelative(outPath)]);

  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /create-handoff completed successfully/);
  assert.match(result.stdout, /Domain: typescript/);

  const content = fs.readFileSync(outPath, "utf8");
  assert.match(content, /Domain id: `typescript`/);
  assert.match(content, /optional and user-requested/);
});

test("create-handoff accepts dsa and cleans up with the test fixture", () => {
  const outPath = path.join(handoffTestDir, "dsa-handoff.md");
  const result = runCli(["create-handoff", "--domain", "dsa", "--out", repoRelative(outPath)]);
  assert.equal(result.status, 0, output(result));
  assert.match(fs.readFileSync(outPath, "utf8"), /Domain id: `dsa`/);
});

test("create-handoff accepts frontend-system-design and cleans up with the test fixture", () => {
  const outPath = path.join(handoffTestDir, "frontend-system-design-handoff.md");
  const result = runCli(["create-handoff", "--domain", "frontend-system-design", "--out", repoRelative(outPath)]);
  assert.equal(result.status, 0, output(result));
  assert.match(fs.readFileSync(outPath, "utf8"), /Domain id: `frontend-system-design`/);
});

test("create-handoff accepts nodejs and cleans up with the test fixture", () => {
  const outPath = path.join(handoffTestDir, "nodejs-handoff.md");
  const result = runCli(["create-handoff", "--domain", "nodejs", "--out", repoRelative(outPath)]);
  assert.equal(result.status, 0, output(result));
  assert.match(fs.readFileSync(outPath, "utf8"), /Domain id: `nodejs`/);
});

test("create-handoff rejects unsupported domains and lists supported domains", () => {
  const result = runCli(["create-handoff", "--domain", "not-a-domain", "--out", repoRelative(path.join(handoffTestDir, "bad.md"))]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsupported domain: not-a-domain/);
  assert.match(result.stderr, /Supported domains: sql-postgresql, english, javascript, typescript, dsa, frontend-system-design, nodejs/);
});

test("create-handoff rejects unsafe output paths", () => {
  const result = runCli(["create-handoff", "--domain", "typescript", "--out", unsafeRepoSiblingPath("ulos-cli-stage-20-handoff.md")]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsafe output path:/);
});

test("create-handoff protects existing files unless --force is used", () => {
  const outPath = path.join(handoffTestDir, "force-handoff.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, "existing handoff\n", "utf8");

  const withoutForce = runCli(["create-handoff", "--domain", "typescript", "--out", repoRelative(outPath)]);
  assert.notEqual(withoutForce.status, 0, output(withoutForce));
  assert.match(withoutForce.stderr, /Target file already exists/);

  const withForce = runCli(["create-handoff", "--domain", "typescript", "--out", repoRelative(outPath), "--force"]);
  assert.equal(withForce.status, 0, output(withForce));
  assert.match(fs.readFileSync(outPath, "utf8"), /Domain id: `typescript`/);
});

test("create-snapshot creates a supported type scaffold with learner-facing notes", () => {
  const outPath = path.join(snapshotTestDir, "typescript-monthly.md");
  const result = runCli([
    "create-snapshot",
    "--domain",
    "typescript",
    "--type",
    "monthly",
    "--out",
    repoRelative(outPath),
  ]);

  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /create-snapshot completed successfully/);
  assert.match(result.stdout, /Domain: typescript/);
  assert.match(result.stdout, /Type: monthly/);

  const content = fs.readFileSync(outPath, "utf8");
  assert.match(content, /Domain id: `typescript`/);
  assert.match(content, /Snapshot type: `monthly`/);
  assert.match(content, /optional, periodic, and user-requested/);
});

test("create-snapshot accepts dsa milestone and cleans up with the test fixture", () => {
  const outPath = path.join(snapshotTestDir, "dsa-milestone.md");
  const result = runCli([
    "create-snapshot",
    "--domain",
    "dsa",
    "--type",
    "milestone",
    "--out",
    repoRelative(outPath),
  ]);
  assert.equal(result.status, 0, output(result));
  const content = fs.readFileSync(outPath, "utf8");
  assert.match(content, /Domain id: `dsa`/);
  assert.match(content, /Snapshot type: `milestone`/);
});

test("create-snapshot accepts frontend-system-design milestone and cleans up with the test fixture", () => {
  const outPath = path.join(snapshotTestDir, "frontend-system-design-milestone.md");
  const result = runCli([
    "create-snapshot",
    "--domain",
    "frontend-system-design",
    "--type",
    "milestone",
    "--out",
    repoRelative(outPath),
  ]);
  assert.equal(result.status, 0, output(result));
  const content = fs.readFileSync(outPath, "utf8");
  assert.match(content, /Domain id: `frontend-system-design`/);
  assert.match(content, /Snapshot type: `milestone`/);
});

test("create-snapshot accepts nodejs milestone and cleans up with the test fixture", () => {
  const outPath = path.join(snapshotTestDir, "nodejs-milestone.md");
  const result = runCli([
    "create-snapshot",
    "--domain",
    "nodejs",
    "--type",
    "milestone",
    "--out",
    repoRelative(outPath),
  ]);
  assert.equal(result.status, 0, output(result));
  const content = fs.readFileSync(outPath, "utf8");
  assert.match(content, /Domain id: `nodejs`/);
  assert.match(content, /Snapshot type: `milestone`/);
});

test("create-snapshot rejects unsupported domains", () => {
  const result = runCli([
    "create-snapshot",
    "--domain",
    "not-a-domain",
    "--type",
    "monthly",
    "--out",
    repoRelative(path.join(snapshotTestDir, "bad-domain.md")),
  ]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsupported domain: not-a-domain/);
  assert.match(result.stderr, /Supported domains: sql-postgresql, english, javascript, typescript, dsa, frontend-system-design, nodejs/);
});

test("create-snapshot rejects unsupported types and lists allowed types", () => {
  const result = runCli([
    "create-snapshot",
    "--domain",
    "typescript",
    "--type",
    "daily",
    "--out",
    repoRelative(path.join(snapshotTestDir, "bad-type.md")),
  ]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsupported snapshot type: daily/);
  assert.match(result.stderr, /Supported snapshot types: milestone, monthly, assessment, progress/);
});

test("create-snapshot rejects unsafe output paths", () => {
  const result = runCli([
    "create-snapshot",
    "--domain",
    "typescript",
    "--type",
    "monthly",
    "--out",
    unsafeRepoSiblingPath("ulos-cli-stage-20-snapshot.md"),
  ]);

  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stderr, /Unsafe output path:/);
});

test("create-snapshot protects existing files unless --force is used", () => {
  const outPath = path.join(snapshotTestDir, "force-snapshot.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, "existing snapshot\n", "utf8");

  const withoutForce = runCli([
    "create-snapshot",
    "--domain",
    "typescript",
    "--type",
    "monthly",
    "--out",
    repoRelative(outPath),
  ]);
  assert.notEqual(withoutForce.status, 0, output(withoutForce));
  assert.match(withoutForce.stderr, /Target file already exists/);

  const withForce = runCli([
    "create-snapshot",
    "--domain",
    "typescript",
    "--type",
    "monthly",
    "--out",
    repoRelative(outPath),
    "--force",
  ]);
  assert.equal(withForce.status, 0, output(withForce));
  assert.match(fs.readFileSync(outPath, "utf8"), /Snapshot type: `monthly`/);
});

test("validate-learner passes with valid temporary artifacts", () => {
  const result = runCli(["validate-learner"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /Status: PASS/);
});

test("validate-learner reports forbidden markdown markers with filename and marker", () => {
  const outPath = path.join(handoffTestDir, "forbidden-marker.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, "# Bad Artifact\n\nProposed State Updates\n", "utf8");

  const result = runCli(["validate-learner"]);
  assert.notEqual(result.status, 0, output(result));
  assert.match(result.stdout, /Violations found: 1/);
  assert.match(result.stdout, /forbidden-marker\.md: contains `Proposed State Updates`/);
});

test("validate-learner ignores non-markdown learner artifacts with a warning", () => {
  fs.rmSync(path.join(handoffTestDir, "forbidden-marker.md"), { force: true });
  const outPath = path.join(snapshotTestDir, "ignored.txt");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, "Proposed State Updates\n", "utf8");

  const result = runCli(["validate-learner"]);
  assert.equal(result.status, 0, output(result));
  assert.match(result.stdout, /ignored non-markdown learner artifact:/);
  assert.match(result.stdout, /Status: PASS/);
});
