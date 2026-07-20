# Manual Acceptance Tests

These are manual acceptance tests for Universal Learning OS.

They validate generated Project Packs, launch kits, active learner state, and the CLI validation tool. Most tests are manual; generated pack quality-gate validation is executable through `tools/ulos-cli`.

## Quick CLI Quality Gate

Run from the repository root:

```sh
node tools/ulos-cli/src/index.js validate
```

## Artifacts Under Test

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/typescript-standard/`
- `exports/generated/dsa-standard/`
- `exports/generated/frontend-system-design-standard/`
- `exports/generated/nodejs-standard/`
- `exports/generated/git-standard/`
- `exports/generated/go-standard/`
- `exports/generated/frontend-testing-standard/`
- `exports/generated/gof-react-patterns-standard/`
- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`
- `exports/generated/dsa-compact/`
- `exports/generated/frontend-system-design-compact/`
- `exports/generated/nodejs-compact/`
- `exports/generated/git-compact/`
- `exports/generated/go-compact/`
- `exports/generated/frontend-testing-compact/`
- `exports/generated/gof-react-patterns-compact/`
- `exports/generated/project-launch-kits/`
- `learners/active-learner/`
- `tools/ulos-cli/`

## File Budget Boundary

Generated pack directories must remain exactly 25 files each:

- SQL/PostgreSQL generated pack: 25 files.
- English generated pack: 25 files.
- JavaScript generated pack: 25 files.
- TypeScript generated pack: 25 files.
- DSA generated pack: 25 files.
- Front-End System Design generated pack: 25 files.
- Node.js generated pack: 25 files.
- Git generated pack: 25 files.
- Go generated pack: 25 files.
- Front-End Testing generated pack: 25 files.
- GoF and React Design Patterns generated pack: 25 files.

Compact/free generated pack directories must remain exactly 5 files each:

- SQL/PostgreSQL compact pack: exactly 5 files.
- English compact pack: exactly 5 files.
- JavaScript compact pack: exactly 5 files.
- TypeScript compact pack: exactly 5 files.
- DSA compact pack: exactly 5 files.
- Front-End System Design compact pack: exactly 5 files.
- Node.js compact pack: exactly 5 files.
- Git compact pack: exactly 5 files.
- Go compact pack: exactly 5 files.
- Front-End Testing compact pack: exactly 5 files.
- GoF and React Design Patterns compact pack: exactly 5 files.

Manual tests MUST NOT add files inside individual generated pack directories.

## Domain-Specific Manual Tests

- JavaScript tests live under `tests/manual-acceptance/javascript/`.
- TypeScript tests live under `tests/manual-acceptance/typescript/`.
- Compact pack tests live under `tests/manual-acceptance/compact/`.
- CLI validation test lives at `tests/manual-acceptance/CLI_VALIDATION_TEST.md`.
- Stage 27.1 deep teaching behavior lives at `tests/manual-acceptance/STAGE_27_1_DEEP_TEACHING_TEST.md`.
- Stage 28.0 optional Notion lesson journal behavior lives at `tests/manual-acceptance/STAGE_28_0_NOTION_LESSON_JOURNAL_TEST.md`.
- Stage 29.0 downloadable Obsidian lesson-note and generic routing behavior lives at `tests/manual-acceptance/STAGE_29_0_OBSIDIAN_LESSON_NOTES_TEST.md`.
- Stage 30.0 Git domain coverage lives at `tests/manual-acceptance/STAGE_30_0_GIT_DOMAIN_TEST.md`.
- Stage 31.0 Go domain coverage lives at `tests/manual-acceptance/STAGE_31_0_GO_DOMAIN_TEST.md`.
- Stage 32.0 Front-End Testing domain coverage lives at `tests/manual-acceptance/STAGE_32_0_FRONTEND_TESTING_DOMAIN_TEST.md`.
- Stage 33.0 GoF and React Design Patterns coverage lives at `tests/manual-acceptance/STAGE_33_0_GOF_REACT_PATTERNS_DOMAIN_TEST.md`.

## OPEN QUESTION

- Which manual tests should become executable checks first?
