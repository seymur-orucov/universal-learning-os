# Standard Generation Plan Test

## Purpose

Verify Stage 16.0 adds the standard pack generation plan, templates, mapping, CLI guidance, and validation expectations without generating or overwriting standard packs.

## Preconditions

- Node.js 18 or newer is available.
- Commands are run from the repository root.
- Existing generated packs are present under `exports/generated/`.

## Test 1: Plan Document Exists

Confirm this file exists:

```text
exports/project-pack-spec/STANDARD_GENERATION_PLAN.md
```

Expected: the document defines the standard pack purpose, exact 25-file output contract, required files, framework context files, command files, skill files, domain files, naming conventions, safety rules, limitations, and validation plan.

## Test 2: Template Directory Exists

Confirm this directory exists:

```text
tools/ulos-cli/templates/standard-pack/
```

Expected: the directory contains planning templates for project instructions, manifest, file budget, startup prompt, continuation prompt, framework context, learning engine context, evidence mastery context, learner state boundaries, localization context, and five domain output files.

## Test 3: Mapping File Exists

Confirm this file exists:

```text
tools/ulos-cli/templates/standard-pack/MAPPING.md
```

Expected: the mapping lists all 25 standard output files and maps each to canonical source files.

## Test 4: All 25 Standard Output Files Are Documented

Review `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md` and `tools/ulos-cli/templates/standard-pack/MAPPING.md`.

Expected: both documents cover:

```text
PROJECT_INSTRUCTIONS.md
PACK_MANIFEST.md
FILE_BUDGET.md
STARTUP_PROMPT.md
CONTINUATION_PROMPT.md
FRAMEWORK_CONTEXT.md
LEARNING_ENGINE_CONTEXT.md
EVIDENCE_MASTERY_CONTEXT.md
LEARNER_STATE_BOUNDARIES.md
LOCALIZATION_CONTEXT.md
COMMAND_START_LESSON.md
COMMAND_CONTINUE_LESSON.md
COMMAND_PRACTICE.md
COMMAND_REVIEW.md
COMMAND_ASSESS.md
COMMAND_SHOW_PROGRESS.md
SKILL_LESSON_INSTRUCTOR.md
SKILL_PRACTICE_COACH.md
SKILL_HOMEWORK_REVIEWER.md
SKILL_PROGRESS_MANAGER.md
<DOMAIN>_DOMAIN_CONTEXT.md
<DOMAIN>_SYLLABUS.md
<DOMAIN>_SKILL_GRAPH.md
<DOMAIN>_GLOSSARY_PROJECTS.md
<DOMAIN>_PRACTICE_ASSESSMENT_RULES.md
```

## Test 5: Standard Generate Uses the Plan

Run:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

Expected: the command generates exactly 25 standard files from canonical sources, follows `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`, and exits 0.

## Test 6: Validation Still Passes

Run:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: all generated standard and compact packs pass validation.

## Test 7: Existing Standard Packs Remain Exactly 25 Files

Inspect these packs:

```text
exports/generated/sql-postgresql-standard/
exports/generated/english-standard/
exports/generated/javascript-standard/
exports/generated/typescript-standard/
```

Expected: each directory remains exactly 25 files.

## Test 8: Existing Compact Packs Remain Maximum 5 Files

Inspect these packs:

```text
exports/generated/sql-postgresql-compact/
exports/generated/english-compact/
exports/generated/javascript-compact/
exports/generated/typescript-compact/
```

Expected: each directory contains no more than 5 files.

## Test 9: Compact Generator Still Works

Run:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
```

Expected: the command reports the five compact files that would be written and exits 0.
