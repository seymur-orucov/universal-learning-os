# Project Pack Validation Report

## Validation Marker

`repository-working-tree-stage-13.0`

## Quick Validation

Preferred quick check:

```sh
node tools/ulos-cli/src/index.js validate
```

The CLI validates standard and compact generated pack file counts and exits non-zero on failure.

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
- Compact profile: maximum 5 files.

## Standard Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-standard` | 25 | PASS | Existing standard pack preserved. |
| `english-standard` | 25 | PASS | Existing standard pack preserved. |
| `javascript-standard` | 25 | PASS | Standard JavaScript pack preserved. |
| `typescript-standard` | 25 | PASS | TypeScript standard pack added. |

## Compact Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-compact` | max 5 | PASS | Contains the required 5 compact files. |
| `english-compact` | max 5 | PASS | Contains the required 5 compact files. |
| `javascript-compact` | max 5 | PASS | Contains the required 5 compact files. |
| `typescript-compact` | max 5 | PASS | Contains the required 5 compact files. |

## Required Compact Files

Each compact pack should contain:

- `PROJECT_INSTRUCTIONS.md`
- `STARTUP_PROMPT.md`
- `DOMAIN_CORE.md`
- `COMMANDS_CORE.md`
- `MENTOR_SKILLS_CORE.md`

## Learner-Facing Mentor Mode

Compact packs preserve Learner-Facing Mentor Mode. Normal lessons, practice, review, and homework review should not show evidence/state/YAML/internal metadata unless explicitly requested through `SHOW_PROGRESS`, evidence summary, state update, proposed state updates, continuation prompt, learner handoff, progress report, or debug/audit output.

## Known Limitations

- Validation is still mostly human-readable, but `tools/ulos-cli` now provides a minimal file-count validation prototype.
- Compact packs summarize aggressively to satisfy the Free Project 5-file limit.
- Generated packs may drift from canonical sources until regeneration tooling exists.

## OPEN QUESTION

- Which standard and compact validation checks should become executable first?
