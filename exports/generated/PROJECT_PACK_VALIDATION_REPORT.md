# Project Pack Validation Report

## Validation Marker

`repository-working-tree-stage-16.0`

## Quick Validation

Preferred quick quality gate:

```sh
node tools/ulos-cli/src/index.js validate
```

The CLI validates generated pack directories, profile file counts, required files, Learner-Facing Mentor Mode markers, metadata guardrails, standard manifest basics, compact structure, and launch kit presence. It exits non-zero on failure.

Both profiles can be regenerated or dry-run before validation:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile standard --dry-run
node tools/ulos-cli/src/index.js validate
```

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
- `exports/generated/frontend-testing-standard/`
- `exports/generated/frontend-testing-compact/`

This report is a derived audit artifact. It is not canonical framework source and not learner state.

## Profile Rules

- Standard profile: exactly 25 files.
- Compact profile: exactly 5 files.

## Standard Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-standard` | 25 | PASS | Existing standard pack preserved. |
| `english-standard` | 25 | PASS | Existing standard pack preserved. |
| `javascript-standard` | 25 | PASS | Standard JavaScript pack preserved. |
| `typescript-standard` | 25 | PASS | TypeScript standard pack added. |
| `frontend-testing-standard` | 25 | PASS | Front-End Testing standard pack generated from canonical sources. |

## Compact Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-compact` | exactly 5 | PASS | Contains the required 5 compact files. |
| `english-compact` | exactly 5 | PASS | Contains the required 5 compact files. |
| `javascript-compact` | exactly 5 | PASS | Contains the required 5 compact files. |
| `typescript-compact` | exactly 5 | PASS | Contains the required 5 compact files. |
| `frontend-testing-compact` | exactly 5 | PASS | Contains the required 5 compact files. |

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

- Validation is still partly human-readable, but `tools/ulos-cli` now provides the preferred quick generated-pack quality gate.
- Compact packs summarize aggressively to satisfy the Free Project 5-file limit.
- Generated packs may drift from canonical sources until regeneration tooling exists.
- Standard and compact packs now have generation tooling; source checksum/drift reporting remains future work.

## OPEN QUESTION

- Should source drift use checksums, semantic section comparison, or both?
