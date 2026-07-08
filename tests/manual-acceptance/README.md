# Manual Acceptance Tests

These are manual acceptance tests for Universal Learning OS.

They validate generated Project Packs, launch kits, and active learner state. They are not executable automation yet.

## Artifacts Under Test

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/project-launch-kits/`
- `learners/active-learner/`

## File Budget Boundary

Generated pack directories must remain exactly 25 files each:

- SQL/PostgreSQL generated pack: 25 files.
- English generated pack: 25 files.
- JavaScript generated pack: 25 files.

Compact/free generated pack directories must remain no more than 5 files each:

- SQL/PostgreSQL compact pack: max 5 files.
- English compact pack: max 5 files.
- JavaScript compact pack: max 5 files.

Manual tests MUST NOT add files inside individual generated pack directories.

## Domain-Specific Manual Tests

- JavaScript tests live under `tests/manual-acceptance/javascript/`.
- Compact pack tests live under `tests/manual-acceptance/compact/`.

## OPEN QUESTION

- Which manual tests should become executable checks first?
