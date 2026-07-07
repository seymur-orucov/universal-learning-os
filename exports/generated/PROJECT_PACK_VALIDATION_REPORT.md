# Project Pack Validation Report

## Validation Marker

`repository-working-tree-stage-10.3`

## Scope

Validated generated Project Packs:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`

This report is a derived audit artifact. It is not canonical framework source and not learner state.

## SQL/PostgreSQL Standard Pack

Exact file count: 25

| Requirement | Status | Notes |
| --- | --- | --- |
| Directory exists | PASS | `exports/generated/sql-postgresql-standard/` |
| Contains exactly 25 files | PASS | 25 files |
| Required project files exist | PASS | Instructions, manifest, budget, startup, continuation |
| Manifest lists all included files | PASS | `PACK_MANIFEST.md` |
| File budget counts exactly 25 files | PASS | `FILE_BUDGET.md` |
| Remaining capacity is 0 | PASS | `FILE_BUDGET.md` |
| Canonical source summaries declared | PASS | `PACK_MANIFEST.md` |
| Excluded files declared | PASS | `PACK_MANIFEST.md` |
| No learner-specific progress | PASS | reusable pack content only |
| No mastery from exposure/setup/files | PASS | preserved in instructions and evidence context |
| Learner state separated | PASS | `LEARNER_STATE_BOUNDARIES.md` |
| Localization is project-specific | PASS | Azerbaijani instruction with English SQL/PostgreSQL terms |
| Agent skills not learner skills | PASS | framework and skill files state boundary |
| Commands not agent skills | PASS | command files remain workflow contracts |
| No English domain files included | PASS | SQL-only domain context |
| SQL progression preserved | PASS | fundamentals through optimization |
| Northwind guidance preserved | PASS | summarized in `SQL_SYLLABUS.md` |

## English Standard Pack

Exact file count: 25

| Requirement | Status | Notes |
| --- | --- | --- |
| Directory exists | PASS | `exports/generated/english-standard/` |
| Contains exactly 25 files | PASS | 25 files |
| Required project files exist | PASS | Instructions, manifest, budget, startup, continuation |
| Manifest lists all included files | PASS | `PACK_MANIFEST.md` |
| File budget counts exactly 25 files | PASS | `FILE_BUDGET.md` |
| Remaining capacity is 0 | PASS | `FILE_BUDGET.md` |
| Canonical source summaries declared | PASS | `PACK_MANIFEST.md` |
| Excluded files declared | PASS | `PACK_MANIFEST.md` |
| No learner-specific progress | PASS | reusable pack content only |
| No mastery from exposure/setup/files | PASS | preserved in instructions and evidence context |
| Learner state separated | PASS | `LEARNER_STATE_BOUNDARIES.md` |
| Localization is project-specific | PASS | Azerbaijani instruction with English target language |
| Agent skills not learner skills | PASS | framework and skill files state boundary |
| Commands not agent skills | PASS | command files remain workflow contracts |
| No SQL/PostgreSQL domain files included | PASS | English-only domain context |
| B1-to-C1 progression preserved | PASS | summarized in `ENGLISH_SYLLABUS.md` |
| Speaking mastery requires evidence | PASS | preserved in instructions and evidence context |

## Fixes Made During Stage 10.3

- `exports/generated/english-standard/` was missing from the working tree and was created as a Stage 10.2 consistency fix.
- Added exactly 25 English Standard Project Pack files.
- Added upload and usage guides outside individual pack directories.
- Updated `exports/generated/README.md`, `exports/README.md`, and `CHANGELOG.md`.
- Added `docs/decisions/ADR-0024-project-pack-validation-and-upload-guides.md`.

## Known Limitations

- Validation is manual and human-readable; no automation exists yet.
- Generated packs may drift from canonical sources until regeneration tooling exists.
- Neither pack contains real learner state, schemas, executable scripts, or full exercise banks.
- ChatGPT Project file-count behavior may vary if Project Instructions are counted separately from uploaded source files.

## OPEN QUESTION

- Should future validation include checksums or source commit metadata?
- Should generated packs include 24-file variants for environments that count Project Instructions separately?
- Which validation checks should become automated first?
