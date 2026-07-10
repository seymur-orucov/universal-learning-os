const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const generatedRoot = path.join(repoRoot, "exports", "generated");
const domains = [
  "sql-postgresql",
  "english",
  "javascript",
  "typescript",
  "dsa",
  "frontend-system-design",
  "nodejs",
];

function readGenerated(domain, profile, fileName) {
  return fs.readFileSync(path.join(generatedRoot, `${domain}-${profile}`, fileName), "utf8");
}

test("all generated project instructions enforce teaching-first progression", () => {
  for (const domain of domains) {
    for (const profile of ["standard", "compact"]) {
      const content = readGenerated(domain, profile, "PROJECT_INSTRUCTIONS.md");
      assert.match(content, /START_LESSON.*teach before testing by default/s, `${domain}-${profile}`);
      assert.match(content, /guided knowledge check or guided action, not premature independent practice/, `${domain}-${profile}`);
      assert.match(content, /explanation to guided work and then independent work/, `${domain}-${profile}`);
      assert.match(content, /MUST NOT depend on untaught concepts or unavailable prerequisites/, `${domain}-${profile}`);
      assert.match(content, /one clear learner action/, `${domain}-${profile}`);
      assert.match(content, /challenge-first.*requires an explicit learner request/, `${domain}-${profile}`);
    }
  }
});

test("generated lesson commands require sufficient teaching before independent practice", () => {
  for (const domain of domains) {
    const standard = readGenerated(domain, "standard", "COMMAND_START_LESSON.md");
    const compact = readGenerated(domain, "compact", "COMMANDS_CORE.md");

    for (const content of [standard, compact]) {
      assert.match(content, /begin in Deep Teaching Mode and teach sufficiently before requesting independent work/);
      assert.match(content, /one guided knowledge check/);
      assert.match(content, /Tasks MUST NOT depend on concepts that have not been taught or established as prerequisites/);
    }
  }
});

test("generated lesson instructor content keeps exercises prerequisite-safe and technically correct", () => {
  for (const domain of domains) {
    const standard = readGenerated(domain, "standard", "SKILL_LESSON_INSTRUCTOR.md");
    const compact = readGenerated(domain, "compact", "MENTOR_SKILLS_CORE.md");

    for (const content of [standard, compact]) {
      assert.match(content, /MUST NOT require an untaught concept or unavailable prerequisite/);
      assert.match(content, /MUST keep schema, architecture, coding, language, and algorithm tasks technically correct/);
      assert.match(content, /simplification MUST NOT create a false mental model/);
    }
  }
});

test("SQL generated content preserves schema and cardinality correctness", () => {
  for (const [profile, fileName] of [
    ["standard", "SQL_PRACTICE_ASSESSMENT_RULES.md"],
    ["compact", "DOMAIN_CORE.md"],
  ]) {
    const content = readGenerated("sql-postgresql", profile, fileName);
    assert.match(content, /Cardinality and schema exercises MUST remain technically valid and aligned with the current syllabus position/);
    assert.match(content, /students`, `courses`, and `enrollments`/);
    assert.match(content, /MUST NOT be simplified to exactly two tables/);
  }
});

test("SQL Lesson 1 is prerequisite-safe and reserves many-to-many work for Lesson 14", () => {
  const syllabus = fs.readFileSync(path.join(repoRoot, "domains/sql-postgresql/SYLLABUS.md"), "utf8");
  const lessonOne = syllabus.match(/#### Lesson 1:[\s\S]*?(?=#### Lesson 2:)/)?.[0];
  assert.ok(lessonOne, "Lesson 1 outline should exist");
  assert.match(lessonOne, /customers\/orders, authors\/books, or departments\/employees/);
  assert.match(lessonOne, /without independently designing keys, normalized schemas, bridge tables, or many-to-many relationships/);
  assert.doesNotMatch(lessonOne, /students enroll in courses/i);
  assert.doesNotMatch(lessonOne, /exactly two tables/i);

  const lessonFourteen = syllabus.match(/#### Lesson 14:[\s\S]*?(?=\n- Practice expectations:)/)?.[0];
  assert.ok(lessonFourteen, "Lesson 14 outline should exist");
  assert.match(lessonFourteen, /students`, `courses`, and `enrollments`/);
  assert.match(lessonFourteen, /Explain bridge-table structure and cardinality before requiring independent use/);
});

test("deep teaching changes preserve learner-facing metadata boundaries", () => {
  for (const domain of domains) {
    for (const profile of ["standard", "compact"]) {
      const content = readGenerated(domain, profile, "PROJECT_INSTRUCTIONS.md");
      assert.match(content, /## Learner-Facing Mentor Mode/);
      assert.match(content, /Do NOT show these unless explicitly requested/);
      assert.match(content, /Evidence Generated/);
      assert.match(content, /internal skill IDs/);
    }
  }
});
