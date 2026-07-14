const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "../../..");
const generatedRoot = path.join(repoRoot, "exports", "generated");
const fixtureRoot = path.join(__dirname, "fixtures", "obsidian-lesson-notes");
const { DOMAIN_CONFIG, SUPPORTED_PROFILES } = require("../src/lib/domains");
const { COMPACT_FILES } = require("../src/lib/compact-generator");
const { getStandardFiles } = require("../src/lib/standard-generator");
const { getProfileSourceSelections } = require("../src/lib/profile-sources");

const action = "SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz";
const fixtureNames = fs.readdirSync(fixtureRoot).filter((name) => name.endsWith(".md")).sort();

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

function readFixture(name) {
  return fs.readFileSync(path.join(fixtureRoot, name), "utf8");
}

function frontmatter(note) {
  const match = note.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  assert.ok(match, "note should start with YAML frontmatter");
  const values = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-z][a-z0-9-]*):(?:\s*(.*))?$/i);
    if (field) values[field[1]] = field[2] || "";
  }
  return { raw: match[1], values, bodyStart: match[0].length };
}

test("01 canonical generic command and three lesson-note skills exist", () => {
  for (const file of [
    "commands/SAVE_LESSON.md",
    "skills/lesson-summary-builder/SKILL.md",
    "skills/obsidian-lesson-exporter/SKILL.md",
    "skills/notion-lesson-logger/SKILL.md",
  ]) assert.ok(fs.existsSync(path.join(repoRoot, file)), file);
});

test("02 canonical generic closure action is exact", () => {
  assert.match(read("commands/SAVE_LESSON.md"), new RegExp(action));
  assert.match(read("specification/LEARNING_LIFECYCLE.md"), new RegExp(action));
});

test("03 routing defaults no-target and OBSIDIAN requests to Markdown artifacts", () => {
  const command = read("commands/SAVE_LESSON.md");
  assert.match(command, /with no target, routes to `OBSIDIAN`/);
  assert.match(command, /`SAVE_LESSON OBSIDIAN` routes to a downloadable UTF-8 Obsidian Markdown \(`\.md`\) artifact/);
});

test("04 routing sends NOTION to the connected workflow and rejects unsupported targets", () => {
  const command = read("commands/SAVE_LESSON.md");
  assert.match(command, /`SAVE_LESSON NOTION` routes to the connected Notion workflow/);
  assert.match(command, /unsupported format or destination/);
  assert.match(command, /MUST NOT be guessed/);
});

test("05 SAVE_LESSON_TO_NOTION is a callable alias and not a second suggestion", () => {
  const alias = read("commands/SAVE_LESSON_TO_NOTION.md");
  assert.match(alias, /routes to `SAVE_LESSON NOTION`/);
  assert.match(alias, /MUST NOT be shown as a second suggestion/);
});

test("06 shared normalized model contains only the requested grounded categories", () => {
  const builder = read("skills/lesson-summary-builder/SKILL.md");
  for (const marker of ["lesson identity", "objective", "concepts", "examples", "learner work", "observed mistakes", "existing evidence or assessment results", "lesson status", "next steps"]) {
    assert.match(builder.toLowerCase(), new RegExp(marker), marker);
  }
});

test("07 shared normalization omits unsupported values empty sections and invented dates", () => {
  const builder = read("skills/lesson-summary-builder/SKILL.md");
  assert.match(builder, /Unsupported values and empty categories MUST be omitted/);
  assert.match(builder, /Do not emit placeholders/);
  assert.match(builder, /invented dates/);
});

test("08 shared normalization separates examples work evidence assessment mastery and completion", () => {
  const builder = read("skills/lesson-summary-builder/SKILL.md");
  assert.match(builder, /Distinguish assistant-provided examples from learner work/);
  assert.match(builder, /Distinguish displayed instruction from observed evidence/);
  assert.match(builder, /assessment-derived mastery value without upgrading, downgrading, or creating one/);
  assert.match(builder, /Do not infer completion/);
});

test("09 shared normalization preserves instruction and terminology languages", () => {
  const builder = read("skills/lesson-summary-builder/SKILL.md");
  assert.match(builder, /learner's instruction language/);
  assert.match(builder, /configured terminology language/);
});

test("10 compact profile includes every canonical command and skill source", () => {
  const compact = getProfileSourceSelections("compact");
  for (const source of ["commands/SAVE_LESSON.md", "commands/SAVE_LESSON_TO_NOTION.md"]) assert.ok(compact.commands.includes(source), source);
  for (const source of ["skills/lesson-summary-builder/SKILL.md", "skills/obsidian-lesson-exporter/SKILL.md", "skills/notion-lesson-logger/SKILL.md"]) assert.ok(compact.skills.includes(source), source);
});

test("11 standard profile preserves the three-command and four-skill merges", () => {
  const standard = getProfileSourceSelections("standard");
  assert.equal(standard.commands.find((entry) => entry.outputName === "COMMAND_CONTINUE_LESSON.md").sources.length, 3);
  assert.equal(standard.skills.find((entry) => entry.outputName === "SKILL_LESSON_INSTRUCTOR.md").sources.length, 4);
});

test("12 global selections require no domain-specific branch for a future registry domain", () => {
  for (const id of [...DOMAIN_CONFIG.map(({ id }) => id), "synthetic-future-domain"]) {
    assert.ok(getProfileSourceSelections("compact").commands.includes("commands/SAVE_LESSON.md"), id);
    assert.ok(getProfileSourceSelections("standard").skills.some((entry) => entry.sources.includes("skills/obsidian-lesson-exporter/SKILL.md")), id);
  }
});

test("13 every generated registry pack contains generic command builder and both exporters", () => {
  for (const { id } of DOMAIN_CONFIG) for (const profile of SUPPORTED_PROFILES) {
    const content = runtimeContent(id, profile);
    for (const marker of ["commands/SAVE_LESSON.md", "skills/lesson-summary-builder/SKILL.md", "skills/obsidian-lesson-exporter/SKILL.md", "skills/notion-lesson-logger/SKILL.md"]) {
      assert.match(content, new RegExp(marker.replace(/[/.]/g, "\\$&")), `${id}-${profile}: ${marker}`);
    }
  }
});

test("14 every generated registry pack constrains the generic action to explicit meaningful closure", () => {
  for (const { id } of DOMAIN_CONFIG) for (const profile of SUPPORTED_PROFILES) {
    const content = runtimeContent(id, profile);
    assert.match(content, new RegExp(action), `${id}-${profile}`);
    assert.match(content, /meaningful stopping point/i, `${id}-${profile}`);
    assert.match(content, /unfinished practice/i, `${id}-${profile}`);
    assert.match(content, /never execute it automatically|MUST NOT invoke/i, `${id}-${profile}`);
  }
});

test("15 preferred filename includes a known lesson number and English title", () => {
  const exporter = read("skills/obsidian-lesson-exporter/SKILL.md");
  assert.match(exporter, /Lesson NN - English Title\.md/);
});

test("16 unknown lesson numbers are omitted", () => {
  const exporter = read("skills/obsidian-lesson-exporter/SKILL.md");
  assert.match(exporter, /Omit the number when unknown/);
  assert.ok(fixtureNames.includes("Array Methods.md"));
  assert.doesNotMatch("Array Methods.md", /^Lesson\s+/);
});

test("17 filename contract sanitizes invalid and non-English characters", () => {
  const exporter = read("skills/obsidian-lesson-exporter/SKILL.md");
  assert.match(exporter, /Sanitize invalid filename characters/);
  assert.match(exporter, /non-English filename characters/);
  assert.match(exporter, /ASCII\/English/);
});

test("18 filename contract defines dated and undated fallbacks", () => {
  const exporter = read("skills/obsidian-lesson-exporter/SKILL.md");
  assert.match(exporter, /Lesson Notes - YYYY-MM-DD\.md/);
  assert.match(exporter, /Lesson Notes\.md/);
});

test("19 regeneration reuses the stable filename and supersedes the earlier artifact honestly", () => {
  const exporter = read("skills/obsidian-lesson-exporter/SKILL.md");
  assert.match(exporter, /Regeneration in the same session MUST reuse the stable filename/);
  assert.match(exporter, /supersedes the earlier session artifact/);
  assert.match(exporter, /Do not claim that an earlier local or vault file was found, edited, deleted, or overwritten/);
});

test("20 all synthetic fixture filenames are ASCII English Markdown names", () => {
  assert.equal(fixtureNames.length, 7);
  for (const name of fixtureNames) {
    assert.match(name, /^[\x20-\x7E]+\.md$/);
    assert.doesNotMatch(name, /[<>:"/\\|?*]/);
  }
});

test("21 every synthetic note starts with one well-formed YAML frontmatter block", () => {
  for (const name of fixtureNames) {
    const note = readFixture(name);
    const yaml = frontmatter(note);
    assert.equal((note.match(/^---$/gm) || []).length, 2, name);
    assert.ok(yaml.bodyStart > 0, name);
  }
});

test("22 fixture frontmatter contains required type title mastery status and tags", () => {
  for (const name of fixtureNames) {
    const { raw, values } = frontmatter(readFixture(name));
    assert.equal(values.type, "lesson-note", name);
    assert.match(values.title, /^".+"$/, name);
    assert.ok(values.mastery, name);
    assert.ok(values.status, name);
    assert.match(raw, /tags:\r?\n\s+- plos\r?\n\s+- lesson/, name);
  }
});

test("23 optional frontmatter fields appear only when grounded", () => {
  const noNumber = frontmatter(readFixture("Array Methods.md"));
  assert.equal(noNumber.values.lesson, undefined);
  assert.equal(noNumber.values.track, undefined);
  assert.equal(noNumber.values.module, undefined);
  assert.doesNotMatch(noNumber.raw, /(?:unknown|N\/A|null)/i);
});

test("24 unfinished lesson remains in-progress and not-assessed", () => {
  const { values } = frontmatter(readFixture("Lesson 03 - SQL Joins.md"));
  assert.equal(values.status, "in-progress");
  assert.equal(values.mastery, "not-assessed");
});

test("25 existing assessment-derived mastery is preserved without a new claim", () => {
  const note = readFixture("Lesson 05 - Sliding Window.md");
  assert.equal(frontmatter(note).values.mastery, "working");
  assert.match(note, /Prior assessment recorded mastery as `working`/);
  assert.match(read("skills/obsidian-lesson-exporter/SKILL.md"), /preserved unchanged/);
});

test("26 fixtures demonstrate localized content with domain-adaptive sections", () => {
  assert.match(readFixture("Lesson 07 - Present Perfect vs Past Simple.md"), /## Müqayisə/);
  assert.match(readFixture("Lesson 14 - Many-to-Many Relationships.md"), /## Model/);
  assert.match(readFixture("Lesson 09 - State Ownership and Data Flow.md"), /## Design correction/);
});

test("27 programming SQL and algorithm fixtures preserve labeled fenced code", () => {
  assert.match(readFixture("Lesson 14 - Many-to-Many Relationships.md"), /```sql[\s\S]+```/);
  assert.match(readFixture("Lesson 08 - Event Loop and Async Ordering.md"), /```javascript[\s\S]+```/);
  assert.match(readFixture("Lesson 05 - Sliding Window.md"), /```javascript[\s\S]+```/);
});

test("28 fixtures use useful tables callouts and restrained wikilinks without plugins", () => {
  const english = readFixture("Lesson 07 - Present Perfect vs Past Simple.md");
  const design = readFixture("Lesson 09 - State Ownership and Data Flow.md");
  assert.match(english, /\| Kontekst \| Zaman \| Nümunə \|/);
  assert.match(design, /> \[!info\]/);
  assert.equal((design.match(/\[\[/g) || []).length, 2);
  for (const name of fixtureNames) assert.doesNotMatch(readFixture(name), /dataview|templater|```tasks/i, name);
});

test("29 recall answers occur later than recall questions", () => {
  for (const name of fixtureNames.filter((entry) => entry !== "Lesson 03 - SQL Joins.md")) {
    const note = readFixture(name);
    assert.ok(note.indexOf("## Recall questions") > 0, name);
    assert.ok(note.indexOf("## Recall answers") > note.indexOf("## Recall questions"), name);
  }
});

test("30 artifact success fallback and stable regeneration semantics are explicit", () => {
  const exporter = read("skills/obsidian-lesson-exporter/SKILL.md");
  assert.match(exporter, /Mention its filename or provide a link only after the runtime confirms successful creation/);
  assert.match(exporter, /complete note in exactly one fenced block/);
  assert.match(exporter, /Do not claim a download exists/);
});

test("31 Notion routing retains discovery duplicate confirmation and fallback contracts", () => {
  const notion = read("skills/notion-lesson-logger/SKILL.md");
  assert.match(notion, /PLOS Learning Journal/);
  assert.match(notion, /Update one unambiguous match/);
  assert.match(notion, /ask before creating a duplicate/i);
  assert.match(notion, /only after confirmed connector success/);
  assert.match(notion, /Notion-compatible Markdown without claiming a write/);
});

test("32 generated packs preserve budgets and contain no secrets ids paths unsupported claims or state fields", () => {
  const forbidden = [
    /(?:notion|obsidian)?[_ -]?(?:api[_ -]?)?(?:token|secret|key)\s*[:=]\s*[^\s`]+/i,
    /(?:page|database|workspace|vault)[_-]?id\s*[:=]\s*[a-z0-9_-]{8,}/i,
    /[a-z]:\\(?:users|documents|desktop|obsidian|vault)\\/i,
    /\/(?:users|home)\/[^\s`]+/i,
    /(?:learner_profile_ref|learning_skill_records|evidence_log)\s*:/i,
    /(?:create|export|download)(?:s|ed|ing)?\s+(?:an?\s+)?(?:pdf|docx|html)\b/i,
  ];
  for (const { id } of DOMAIN_CONFIG) {
    assert.equal(getStandardFiles(id).length, 25, id);
    assert.equal(COMPACT_FILES.length, 5, id);
    for (const profile of SUPPORTED_PROFILES) {
      const files = fs.readdirSync(path.join(generatedRoot, `${id}-${profile}`), { withFileTypes: true }).filter((entry) => entry.isFile());
      assert.equal(files.length, profile === "standard" ? 25 : 5, `${id}-${profile}`);
      const content = runtimeContent(id, profile);
      for (const pattern of forbidden) assert.doesNotMatch(content, pattern, `${id}-${profile}: ${pattern}`);
    }
  }
});
