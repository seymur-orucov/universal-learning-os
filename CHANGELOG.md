# Changelog

All notable repository-level changes SHOULD be recorded here.

## Unreleased

- Adds Stage 21.0 app architecture planning docs for a future local-first, CLI-backed Universal Learning OS Studio control panel.
- Adds ADR-0044 and manual acceptance coverage for Stage 21.0.
- Clarifies that Stage 21.0 does not change generated pack contracts, add app dependencies, add a domain, or replace ChatGPT Projects as the daily learning runtime.
- Adds Stage 21.1 app MVP implementation planning docs, ADR-0045, and manual acceptance coverage without adding app runtime code or dependencies.
- Clarifies that the future Studio MVP should call the existing CLI instead of duplicating domain, pack, validation, generation, or learner artifact logic.

## v0.2.0

- Supports four domains: `sql-postgresql`, `english`, `javascript`, and `typescript`.
- Provides standard generated Project Packs for all supported domains with exactly 25 files each.
- Provides compact/free generated Project Packs for all supported domains with exactly 5 files each.
- Adds CLI support for `list-domains`, `validate`, `inspect-pack`, and `generate`.
- Adds standard and compact pack generation, including dry-run support.
- Adds validation automation for generated pack directories, file counts, required files, metadata guardrails, standard manifests, compact structure, and launch kits.
- Adds Learner-Facing Mentor Mode consistency across generated packs.
- Adds launch kits for standard and compact ChatGPT Project setup.
- Adds v0.2.0 release notes, release checklist, release-candidate status, tagging instructions, and generated pack smoke test guidance.
- Marks the repository ready to tag as `v0.2.0` after `node tools/ulos-cli/src/index.js validate` passes on `main` with a clean working tree.

## v0.1.0-rc1

- Added Stage 10.7 v0.1.0-rc1 release readiness documentation under `docs/releases/`.
- Added ADR-0028 for release readiness documentation scope.
- Added Stage 10.6 manual acceptance tests under `tests/manual-acceptance/`.
- Added ADR-0027 for manual acceptance test scope and location.
- Added Stage 10.5 generic active learner starter state under `learners/active-learner/`.
- Added ADR-0026 for active learner state bootstrap and privacy boundaries.
- Added Stage 10.4 ChatGPT Project launch kits under `exports/generated/project-launch-kits/`.
- Added ADR-0025 for launch kit location and generated pack file-count boundaries.
- Added Stage 10.3 generated Project Pack validation report and ChatGPT Project upload/use guides.
- Added missing English Standard Project Pack under `exports/generated/english-standard/` as a Stage 10.2 consistency fix.
- Added ADR-0024 for generated pack validation and guide placement.
- Added ADR-0023 for the English generated Project Pack.
- Added Stage 10.1 SQL/PostgreSQL Standard Project Pack under `exports/generated/sql-postgresql-standard/`.
- Added `exports/generated/README.md` for generated Project Pack boundaries.
- Added ADR-0022 for generated Project Pack location and canonical-source boundaries.
- Added Stage 0 repository foundation.
- Added Stage 1 framework specification skeleton.
- Added initial architecture decision record.
