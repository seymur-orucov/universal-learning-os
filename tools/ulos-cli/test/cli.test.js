const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { cleanUnexpectedFiles, COMPACT_FILES, generateCompactPack } = require("../src/lib/compact-generator");
const { DOMAIN_CONFIG, SUPPORTED_PROFILES } = require("../src/lib/domains");
const { expectedRule } = require("../src/lib/file-counts");
const { assertGeneratedPackPath } = require("../src/lib/paths");
const { generateStandardPack } = require("../src/lib/standard-generator");
const { validatePack } = require("../src/lib/validation");

const repoRoot = path.resolve(__dirname, "..", "..", "..");

test("frontend-testing is registered exactly once", () => {
  assert.equal(DOMAIN_CONFIG.filter(({ id }) => id === "frontend-testing").length, 1);
  assert.deepEqual(SUPPORTED_PROFILES, ["standard", "compact"]);
});

test("standard and compact contracts require exact counts", () => {
  assert.equal(expectedRule("standard").passes(25), true);
  assert.equal(expectedRule("standard").passes(24), false);
  assert.equal(expectedRule("compact").passes(5), true);
  assert.equal(expectedRule("compact").passes(4), false);
});

test("frontend-testing dry runs plan 25 and 5 files without writes", () => {
  assert.equal(generateStandardPack(repoRoot, "frontend-testing", { dryRun: true }).filesWritten, 25);
  assert.deepEqual(generateCompactPack(repoRoot, "frontend-testing", { dryRun: true }).files, COMPACT_FILES);
});

test("generated frontend-testing packs pass repository validation", () => {
  assert.equal(validatePack(repoRoot, "frontend-testing", "standard").passed, true);
  assert.equal(validatePack(repoRoot, "frontend-testing", "compact").passed, true);
});

test("domain artifacts retain required technology, boundaries, reliability, and language", () => {
  const standardDir = path.join(repoRoot, "exports", "generated", "frontend-testing-standard");
  const compactDir = path.join(repoRoot, "exports", "generated", "frontend-testing-compact");
  const standard = fs.readFileSync(path.join(standardDir, "FRONTEND_TESTING_SYLLABUS.md"), "utf8");
  const compact = fs.readFileSync(path.join(compactDir, "DOMAIN_CORE.md"), "utf8");
  const instructions = [
    fs.readFileSync(path.join(standardDir, "PROJECT_INSTRUCTIONS.md"), "utf8"),
    fs.readFileSync(path.join(compactDir, "PROJECT_INSTRUCTIONS.md"), "utf8"),
  ].join("\n");
  for (const marker of [
    "Vitest",
    "React Testing Library",
    "MSW",
    "Playwright",
    "unit, component, integration və E2E",
    "waitForTimeout",
    "Exercises come after sufficient explanation",
    "Azerbaijani",
  ]) {
    assert.ok(`${standard}\n${compact}\n${instructions}`.includes(marker), `missing content marker: ${marker}`);
  }
});

test("unexpected compact files are removed but required files remain", (t) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "ulos-compact-"));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  for (const name of COMPACT_FILES) fs.writeFileSync(path.join(directory, name), name);
  fs.writeFileSync(path.join(directory, "UNEXPECTED.md"), "remove me");
  cleanUnexpectedFiles(directory);
  assert.deepEqual(fs.readdirSync(directory).sort(), [...COMPACT_FILES].sort());
});

test("generated-pack path guard rejects writes outside exports/generated", () => {
  assert.throws(
    () => assertGeneratedPackPath(repoRoot, path.join(repoRoot, "domains", "frontend-testing")),
    /Refusing to write outside exports\/generated/,
  );
  assert.doesNotThrow(() =>
    assertGeneratedPackPath(repoRoot, path.join(repoRoot, "exports", "generated", "safe-pack")),
  );
});
