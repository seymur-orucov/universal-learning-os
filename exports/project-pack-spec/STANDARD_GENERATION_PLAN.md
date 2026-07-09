# Standard Pack Generation Plan

## Purpose

Define the standard Project Pack generation contract used by the Stage 16.1 CLI generator.

Standard packs are ChatGPT Project-ready generated packs for one supported domain. They preserve more file-level structure than compact packs so framework, command, skill, and domain content can be inspected separately.

## Exact Output Contract

A generated standard pack MUST contain exactly 25 files.

The required file names are:

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

Current generated packs use these domain prefixes:

- `SQL` for `sql-postgresql`.
- `ENGLISH` for `english`.
- `JAVASCRIPT` for `javascript`.
- `TYPESCRIPT` for `typescript`.

Future domains MUST use a deterministic uppercase domain prefix. The default rule is to uppercase the domain id, replace non-alphanumeric separators with `_`, then allow a domain config override only when a shorter human-readable prefix is necessary.

## Required Files

Every standard pack MUST include:

- `PROJECT_INSTRUCTIONS.md` for project-level behavior and Learner-Facing Mentor Mode.
- `PACK_MANIFEST.md` for profile, source traceability, summarized files, and excluded files.
- `FILE_BUDGET.md` for the exact 25-file budget.
- `STARTUP_PROMPT.md` for first-session startup.
- `CONTINUATION_PROMPT.md` for multi-session continuation.

## Framework Context Files

The framework context files are generated summaries. They MUST preserve canonical-source boundaries and reference canonical documents instead of silently inventing new rules.

- `FRAMEWORK_CONTEXT.md` summarizes framework boundaries from `specification/FRAMEWORK_SPEC.md` and related architecture docs.
- `LEARNING_ENGINE_CONTEXT.md` summarizes lifecycle and learning-engine behavior from `specification/LEARNING_LIFECYCLE.md` and `core/learning-engine/`.
- `EVIDENCE_MASTERY_CONTEXT.md` summarizes mastery and evidence rules from `core/mastery-model/`.
- `LEARNER_STATE_BOUNDARIES.md` summarizes learner-state rules from `specification/STATE_SPEC.md` and learner templates.
- `LOCALIZATION_CONTEXT.md` summarizes localization rules from `specification/LOCALIZATION_SPEC.md`.

## Command Files

The default standard learning pack includes six command outputs:

- `COMMAND_START_LESSON.md` from `commands/START_LESSON.md`.
- `COMMAND_CONTINUE_LESSON.md` from `commands/CONTINUE_LESSON.md`.
- `COMMAND_PRACTICE.md` from `commands/PRACTICE.md`.
- `COMMAND_REVIEW.md` from `commands/REVIEW.md`.
- `COMMAND_ASSESS.md` from `commands/ASSESS.md`.
- `COMMAND_SHOW_PROGRESS.md` from `commands/SHOW_PROGRESS.md`.

Command files MUST remain user-invoked workflow descriptions and MUST NOT become agent skills or domain content.

## Skill Files

The default standard learning pack includes four agent skill outputs:

- `SKILL_LESSON_INSTRUCTOR.md` from `skills/lesson-instructor/SKILL.md`.
- `SKILL_PRACTICE_COACH.md` from `skills/practice-coach/SKILL.md`.
- `SKILL_HOMEWORK_REVIEWER.md` from `skills/homework-reviewer/SKILL.md`.
- `SKILL_PROGRESS_MANAGER.md` from `skills/progress-manager/SKILL.md`.

Agent skill files MUST describe reusable assistant capabilities. They MUST NOT be treated as learner competencies and MUST NOT directly mark mastery without evidence and lifecycle authorization.

## Domain-Specific Generated Files

The five domain-specific standard outputs are:

- `<DOMAIN>_DOMAIN_CONTEXT.md`: domain identity, scope, audience, mentor behavior, and selected domain overview content.
- `<DOMAIN>_SYLLABUS.md`: ordered learning paths from `domains/<domain>/SYLLABUS.md`.
- `<DOMAIN>_SKILL_GRAPH.md`: concepts, learning skills, prerequisites, and progression from `domains/<domain>/SKILL_GRAPH.md`.
- `<DOMAIN>_GLOSSARY_PROJECTS.md`: terminology and project guidance from `domains/<domain>/GLOSSARY.md` and `domains/<domain>/PROJECTS.md`.
- `<DOMAIN>_PRACTICE_ASSESSMENT_RULES.md`: practice and assessment expectations from `domains/<domain>/PRACTICE_RULES.md` and `domains/<domain>/ASSESSMENT_RULES.md`.

Domain files MUST contain reusable domain content only. They MUST NOT contain learner-specific progress.

## Safety Rules

- Standard generation MUST verify exactly 25 output files before reporting success.
- Standard generation MUST write only to the default `exports/generated/<domain>-standard/` directory or to a safe `--out-dir` inside the repository root.
- Standard generation MUST preserve canonical source traceability in `PACK_MANIFEST.md`.
- Standard generation MUST support dry-run output before writing.
- Standard generation MUST NOT remove, rename, or break existing generated packs.
- Compact generation MUST continue to produce the 5-file compact profile.

## Current Limitations

- Templates under `tools/ulos-cli/templates/standard-pack/` document the source plan and renderer intent.
- The CLI renders standard packs from canonical Markdown sources without deep semantic parsing.
- Existing standard packs are committed derived artifacts and can be regenerated by the CLI.
- Validation checks file counts, required files, manifest basics, metadata guardrails, and launch kit presence, but does not yet prove semantic equivalence to canonical sources.

## Validation Plan

`node tools/ulos-cli/src/index.js validate` confirms:

- every existing standard pack directory exists;
- standard packs contain exactly 25 files;
- compact packs contain exactly 5 files;
- required standard and compact files exist;
- learner-facing metadata guardrails exist;
- standard manifests mention pack identity and budget;
- launch kit files exist.

Stage 16.1 implements generator checks for the documented 25-file standard output contract. Future validation may add source mapping and drift checks.
