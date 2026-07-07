# Manual Acceptance Tests

These are manual acceptance tests for Universal Learning OS.

They validate generated Project Packs, launch kits, and active learner state. They are not executable automation yet.

## Artifacts Under Test

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/project-launch-kits/`
- `learners/active-learner/`

## File Budget Boundary

Generated pack directories must remain exactly 25 files each:

- SQL/PostgreSQL generated pack: 25 files.
- English generated pack: 25 files.

Manual tests MUST NOT add files inside individual generated pack directories.

## OPEN QUESTION

- Which manual tests should become executable checks first?
