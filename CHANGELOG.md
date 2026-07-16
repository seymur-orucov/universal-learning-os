# Changelog

All notable repository-level changes SHOULD be recorded here.

## Unreleased

- Completes Stage 31.0 by adding the canonical `go` domain for experienced JavaScript/TypeScript engineers moving toward backend, systems, platform, infrastructure, or full-stack work.
- Adds language-first and standard-library-first progression through Go values, errors, testing, safe concurrency, `net/http`, explicit PostgreSQL SQL, security, reliability, observability, profiling, deployment, and seven production-oriented projects; frameworks and ORMs remain later contextual choices.
- Adds `go-standard` (exactly 25 files) and `go-compact` (exactly 5 files), increasing supported domains from 8 to 9 and generated packs from 16 to 18 without changing any profile contract.
- Adds Go registry/generator/learner-helper coverage, launch kits, planned pilot guidance, ADR-0058, Stage 31.0 manual acceptance, 120-test regression coverage, and Studio fallback/smoke compatibility while preserving learner-facing metadata, lesson exports, optional learner state, and all existing domains.
- Completes Stage 30.0 by adding the canonical `git` domain with mental-model-first repository state and graph teaching, provider-neutral collaboration, safe destructive-operation guidance, recovery, rebase, releases, debugging, internals, scale, security, and Senior/Lead workflow governance.
- Adds `git-standard` (exactly 25 files) and `git-compact` (exactly 5 files), increasing supported domains from 7 to 8 and generated packs from 14 to 16 without changing existing pack contracts.
- Adds Git CLI/generator/learner-helper coverage, 106-test regression coverage, launch kits, planned pilot guidance, ADR-0057, manual acceptance, Studio fallback/smoke compatibility, and updated setup/index/validation documentation.
- Preserves Learner-Facing Mentor Mode, optional handoff/snapshot continuity, generic Obsidian and Notion lesson exports, optional CLI-backed Studio scope, and all existing domain content; creates no release tag, commit, branch, push, or provider integration.
- Completes Stage 29.0 by adding generic explicit-only `SAVE_LESSON` routing, default downloadable Obsidian Markdown artifacts, connected Notion routing, and backward-compatible `SAVE_LESSON_TO_NOTION` alias behavior.
- Adds the shared `lesson-summary-builder` and `obsidian-lesson-exporter` contracts with grounded omission rules, stable English filenames, valid YAML, localized domain-adaptive notes, confirmed artifact semantics, honest fallback, and no Obsidian vault access claim.
- Regenerates all fourteen packs through shared profiles while preserving exact 25/5 file budgets and unchanged `domains/**`/`learners/**`; adds semantic validation, registry-driven fixtures/tests, ADR-0056, integration/release guidance, and Stage 29 manual acceptance coverage.
- Completes Stage 28.0 by adding the global, explicit-only `SAVE_LESSON_TO_NOTION` command and reusable `notion-lesson-logger` skill for optional connected Notion lesson journaling.
- Shows the exact optional action only at meaningful lesson closure, requires connector-confirmed create/update wording, handles targets and duplicates safely, returns a Notion-compatible Markdown fallback, and keeps journal writes separate from evidence, mastery, and learner state.
- Preserves all fourteen generated pack contracts by using shared registry-wide source selections, compact merged cores, and separately labeled standard command/skill merges; adds validation, automated tests, ADR-0055, integration guidance, and manual acceptance coverage without storing credentials, target ids, or learner journal data.
- Completes Stage 27.1 by making Deep Teaching Mode and progressive multi-turn lesson delivery the default for `START_LESSON` across all seven domains.
- Requires guided checks before independent practice, prerequisite-safe and technically correct exercises, explicit challenge-first exceptions, and one clear learner action per response while preserving Learner-Facing Mentor Mode.
- Corrects SQL Lesson 1 boundaries, reserves bridge-table and many-to-many work for Lesson 14, regenerates all fourteen packs without changing file contracts, and adds ADR-0054, automated regressions, and manual acceptance coverage.
- Completes Stage 27.0 by adding the canonical `nodejs` domain for experienced frontend engineers moving into runtime-first, production-aware backend and full-stack development.
- Adds `nodejs-standard` (exactly 25 files) and `nodejs-compact` (exactly 5 files), increasing supported domains from 6 to 7 and generated packs from 12 to 14 without changing existing pack contracts.
- Adds Node.js CLI/test coverage, launch kits, a planned real-learning pilot, ADR-0053, and manual acceptance coverage; Fastify is the practical default, PostgreSQL retains explicit SQL/transaction reasoning, and NestJS remains a later specialization.
- Keeps Studio optional and minimally CLI-compatible, keeps ChatGPT Projects as the daily runtime, preserves Learner-Facing Mentor Mode, adds no framework learner runtime or additional domain, and creates no release tag.
- Completes Stage 26.0 by adding the canonical `frontend-system-design` domain for requirements-first frontend architecture, trade-off reasoning, failure analysis, reviews, and interview design defense.
- Adds `frontend-system-design-standard` (exactly 25 files) and `frontend-system-design-compact` (exactly 5 files), increasing supported domains from 5 to 6 and generated packs from 10 to 12 without changing existing pack contracts.
- Adds CLI/test coverage, launch kits, a planned real-learning pilot, ADR-0052, and manual acceptance coverage; Studio remains optional and dynamically CLI-backed.
- Keeps ChatGPT Projects as the daily runtime, preserves Learner-Facing Mentor Mode, adds no Node.js domain or learner runtime infrastructure, and creates no release tag.
- Completes Stage 25.0 by adding the canonical `dsa` domain for practical, JavaScript-first Senior Front-End interview preparation, with TypeScript support when useful or requested.
- Adds `dsa-standard` (exactly 25 files) and `dsa-compact` (exactly 5 files), increasing supported domains from 4 to 5 and generated packs from 8 to 10 without changing existing pack contracts.
- Adds DSA CLI/test coverage, launch kits, a real-learning pilot guide, ADR-0051, and manual acceptance coverage while preserving Learner-Facing Mentor Mode.
- Keeps Studio optional and dynamically CLI-backed, keeps ChatGPT Projects as the learning runtime, adds no heavy learner-state infrastructure, and does not create a release tag.
- Adds Stage 24.0 Getting Started and ChatGPT Project setup guides, a real learning pilot plan, framework pause note, ADR-0050, and manual acceptance coverage.
- Clarifies the primary workflow as generated packs plus ChatGPT Projects, with Studio optional and not the learning runtime.
- Pauses framework/app expansion after the current cycle until SQL/PostgreSQL and English real learning pilots provide evidence; does not claim those pilots are complete.
- Adds Stage 23.0 v0.3.0 release preparation docs, including release notes, release checklist, release-candidate status, ADR-0048, and manual acceptance coverage.
- Summarizes learner runtime strategy docs, optional handoff/snapshot templates, CLI helper behavior, and `validate-learner` as part of the v0.3.0 release baseline.
- Summarizes automated CLI tests, app architecture planning, Studio MVP implementation, and Studio hardening for v0.3.0 readiness.
- Clarifies that v0.3.0 preparation does not change generated pack contracts, add a domain, replace ChatGPT Projects as the daily learning runtime, or add auth/cloud/database/ChatGPT API integration.
- Adds Stage 21.0 app architecture planning docs for a future local-first, CLI-backed Universal Learning OS Studio control panel.
- Adds ADR-0044 and manual acceptance coverage for Stage 21.0.
- Clarifies that Stage 21.0 does not change generated pack contracts, add app dependencies, add a domain, or replace ChatGPT Projects as the daily learning runtime.
- Adds Stage 21.1 app MVP implementation planning docs, ADR-0045, and manual acceptance coverage without adding app runtime code or dependencies.
- Clarifies that the future Studio MVP should call the existing CLI instead of duplicating domain, pack, validation, generation, or learner artifact logic.
- Adds Stage 22.0 Universal Learning OS Studio MVP under `apps/studio/` with a React/Vite UI and local Node CLI bridge.
- Adds ADR-0046 and manual acceptance coverage for the Stage 22.0 Studio MVP.
- Clarifies that Stage 22.0 preserves generated pack contracts, ChatGPT Projects as the daily learning runtime, and CLI source-of-truth boundaries.
- Hardens the Stage 22.1 Studio MVP with practical local usage docs, working smoke scripts, bridge/server smoke checks, consistent bridge rejection output, UI boundary copy, ADR-0047, and manual acceptance coverage.
- Clarifies that Stage 22.1 does not change generated pack contracts, add a domain, replace ChatGPT Projects as the daily runtime, or add auth/cloud/database/ChatGPT API integration.

## v0.3.0

- Adds learner runtime strategy documentation while keeping daily learning in ChatGPT Projects and repository learner state optional, snapshot-based, and evidence-first.
- Adds optional learner handoff and snapshot templates plus CLI helpers for `create-handoff`, `create-snapshot`, and `validate-learner`.
- Adds automated CLI tests for generated pack contracts, generation dry-runs, learner runtime helpers, path safety, overwrite protection, and forbidden marker validation.
- Adds app architecture and MVP implementation planning docs for Universal Learning OS Studio.
- Adds the Studio MVP under `apps/studio/` as a local React/Vite UI with a local Node CLI bridge.
- Hardens Studio with practical README guidance, smoke scripts, bridge/server smoke checks, consistent bridge rejection output, and clearer boundary copy.
- Preserves generated pack contracts: standard packs remain exactly 25 files and compact packs remain exactly 5 files.
- Preserves supported domains: `sql-postgresql`, `english`, `javascript`, and `typescript`.
- Keeps Studio local-first and CLI-backed with allowlisted actions, argument arrays, and `shell: false`.
- Adds no new domain, authentication, cloud storage, database storage, ChatGPT API integration, transcript import, automatic mastery inference, YAML learner-state patch generation, or full LMS runtime.

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
