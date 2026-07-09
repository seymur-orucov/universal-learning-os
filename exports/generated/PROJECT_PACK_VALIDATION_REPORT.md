# Project Pack Validation Report

## Validation Marker

`v0.2.0-readiness-stage-17.0`

## Quick Validation

Preferred quick quality gate:

```sh
node tools/ulos-cli/src/index.js validate
```

The CLI validates generated pack directories, profile file counts, required files, Learner-Facing Mentor Mode markers, metadata guardrails, standard manifest basics, compact structure, and launch kit presence. It exits non-zero on failure and is the official generated-pack quality gate for v0.2.0 readiness.

Packs can be regenerated before validation:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
node tools/ulos-cli/src/index.js validate
```

Standard and compact pack generation are implemented. The standard 25-file output contract is documented in `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`, with templates and source mapping under `tools/ulos-cli/templates/standard-pack/`.

## Scope

Validated generated Project Packs:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/typescript-standard/`
- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`

This report is a derived audit artifact. It is not canonical framework source and not learner state.

## Profile Rules

- Standard profile: exactly 25 files.
- Compact profile: exactly 5 files.

Standard generation writes exactly 25 files. Compact generation writes exactly 5 files. Use `--dry-run` and standard `--out-dir` for safer testing before overwriting default generated packs.

## Standard Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-standard` | exactly 25 | PASS | Generated standard pack. |
| `english-standard` | exactly 25 | PASS | Generated standard pack. |
| `javascript-standard` | exactly 25 | PASS | Generated standard pack. |
| `typescript-standard` | exactly 25 | PASS | Generated standard pack. |

## Compact Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-compact` | exactly 5 | PASS | Generated compact pack. |
| `english-compact` | exactly 5 | PASS | Generated compact pack. |
| `javascript-compact` | exactly 5 | PASS | Generated compact pack. |
| `typescript-compact` | exactly 5 | PASS | Generated compact pack. |

## Required Compact Files

Each compact pack should contain:

- `PROJECT_INSTRUCTIONS.md`
- `STARTUP_PROMPT.md`
- `DOMAIN_CORE.md`
- `COMMANDS_CORE.md`
- `MENTOR_SKILLS_CORE.md`

## Learner-Facing Mentor Mode

Standard and compact packs preserve Learner-Facing Mentor Mode. Normal lessons, practice, review, and homework review should not show evidence/state/YAML/internal metadata unless explicitly requested through `SHOW_PROGRESS`, evidence summary, state update, proposed state updates, continuation prompt, learner handoff, progress report, or debug/audit output.

## Known Limitations

- Validation is still partly human-readable, but `tools/ulos-cli` now provides the preferred quick generated-pack quality gate.
- Compact packs summarize aggressively to satisfy the Free Project 5-file limit.
- Generated packs may drift from canonical sources unless regenerated and validated after source changes.
- Compact packs now have generation tooling.
- Standard packs now have generation tooling.
- `--dry-run` and `--out-dir` support safer standard generation testing.

## v0.2.0 Readiness Summary

- All four supported domains have standard and compact generated packs.
- All standard packs are expected to contain exactly 25 files.
- All compact packs are expected to contain exactly 5 files.
- Launch kits remain the user-facing setup helpers.
- Generated packs are reusable and learner-neutral; learner runtime state remains separate under `learners/active-learner/` when used.
