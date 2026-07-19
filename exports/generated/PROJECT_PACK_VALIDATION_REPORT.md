# Project Pack Validation Report

## Validation Marker

`stage-32.0-frontend-testing-domain`

## Quick Validation

Preferred quick quality gate:

```sh
node tools/ulos-cli/src/index.js validate
```

The CLI validates generated pack directories, profile file counts, required files, Learner-Facing Mentor Mode markers, metadata guardrails, optional Notion journal contracts and privacy boundaries, standard manifest basics, compact structure, and launch kit presence. It exits non-zero on failure and is the official generated-pack quality gate.

Stage 20.0 also provides automated CLI regression tests:

```sh
node --test tools/ulos-cli/test/*.test.js
```

From `tools/ulos-cli/`, run the same suite with:

```sh
npm test
```

The Stage 32.0 suite passes 126/126 tests. Registry-driven coverage checks all twenty generated packs, exact 25/5 counts, Front-End Testing canonical/registry contracts, standard and compact dry-runs, inspection, learner helpers, teaching-first delivery, testing-level boundaries, Vitest, React Testing Library, MSW, Playwright reliability, lesson exports, invalid-domain rejection, path safety, and learner-facing metadata boundaries.

Packs can be regenerated before validation:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
node tools/ulos-cli/src/index.js generate --domain dsa --profile compact
node tools/ulos-cli/src/index.js generate --domain dsa --profile standard
node tools/ulos-cli/src/index.js generate --domain frontend-system-design --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-system-design --profile standard
node tools/ulos-cli/src/index.js generate --domain nodejs --profile compact
node tools/ulos-cli/src/index.js generate --domain nodejs --profile standard
node tools/ulos-cli/src/index.js generate --domain git --profile compact
node tools/ulos-cli/src/index.js generate --domain git --profile standard
node tools/ulos-cli/src/index.js generate --domain go --profile compact
node tools/ulos-cli/src/index.js generate --domain go --profile standard
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile standard
node tools/ulos-cli/src/index.js validate
```

Standard and compact pack generation are implemented. The standard 25-file output contract is documented in `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`, with templates and source mapping under `tools/ulos-cli/templates/standard-pack/`.

## Scope

Validated generated Project Packs:

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
| `dsa-standard` | exactly 25 | PASS | Generated standard pack. |
| `frontend-system-design-standard` | exactly 25 | PASS | Generated standard pack. |
| `nodejs-standard` | exactly 25 | PASS | Generated standard pack. |
| `git-standard` | exactly 25 | PASS | Generated standard pack. |
| `go-standard` | exactly 25 | PASS | Generated standard pack. |
| `frontend-testing-standard` | exactly 25 | PASS | Generated standard pack. |

## Compact Profile Checks

| Pack | Expected count | Status | Notes |
| --- | --- | --- | --- |
| `sql-postgresql-compact` | exactly 5 | PASS | Generated compact pack. |
| `english-compact` | exactly 5 | PASS | Generated compact pack. |
| `javascript-compact` | exactly 5 | PASS | Generated compact pack. |
| `typescript-compact` | exactly 5 | PASS | Generated compact pack. |
| `dsa-compact` | exactly 5 | PASS | Generated compact pack. |
| `frontend-system-design-compact` | exactly 5 | PASS | Generated compact pack. |
| `nodejs-compact` | exactly 5 | PASS | Generated compact pack. |
| `git-compact` | exactly 5 | PASS | Generated compact pack. |
| `go-compact` | exactly 5 | PASS | Generated compact pack. |
| `frontend-testing-compact` | exactly 5 | PASS | Generated compact pack. |

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

## Current Stage 32.0 Summary

- All ten supported domains have one standard and one compact generated pack, for twenty packs total.
- Pack validation passes all twenty packs; learner validation passes with zero violations.
- Every standard pack contains exactly 25 files and every compact pack exactly five files.
- `frontend-testing-standard` contains the five required `FRONTEND_TESTING_*` files; `frontend-testing-compact` contains the exact five compact contract files.
- Both Front-End Testing packs preserve teaching-first progression, Azerbaijani instruction with English terminology, accurate unit/component/integration/E2E boundaries, MSW at the network boundary, resilient Playwright locators and auto-waiting, flaky-test prevention, learner-produced evidence, metadata visibility, and generic Obsidian/Notion lesson exports.
- The automated CLI suite passes 126/126 tests; Studio dependency install/audit, production build, bridge smoke, and health smoke pass.
- No learner state, browser runner integration, release tag, testing-specific Studio screen, hosted service, or automatic state workflow is part of Stage 32.0.

## Historical Stage 31.0 Summary

- All nine supported domains have one standard and one compact generated pack, for eighteen packs total.
- Pack validation passes all eighteen packs; learner validation passes with zero violations.
- Every standard pack contains exactly 25 files and every compact pack exactly five files.
- `go-standard` contains the five required `GO_*` files; `go-compact` contains the exact five compact contract files.
- Both Go packs preserve teaching-first, language-first and standard-library-first progression, explicit errors/failure paths, safe bounded concurrency, Azerbaijani instruction with English terminology, HTTP/SQL/security/production scope, learner-produced evidence, metadata visibility, and generic Obsidian/Notion lesson exports.
- The automated CLI suite passes 120/120 tests; Studio dependency install/audit, production build, bridge smoke, and health smoke pass.
- No learner state, code runner, compiler integration, release tag, commit, branch, push, hosted service, or Studio screen is part of Stage 31.0.

## Historical Stage 30.0 Summary

- All eight supported domains have one standard and one compact generated pack, for sixteen packs total.
- Pack validation passes all sixteen packs; learner validation passes with zero violations.
- Every standard pack contains exactly 25 files and every compact pack exactly five files.
- `git-standard` contains the five required `GIT_*` domain files; `git-compact` contains the exact five compact contract files.
- Both Git packs preserve teaching-first progression, destructive-operation safety, recovery, Azerbaijani instruction with English Git terminology, learner-produced evidence, metadata visibility, and generic Obsidian/Notion lesson exports.
- The automated CLI suite passes 106/106 tests; Studio production build, bridge smoke, and health smoke pass.
- No learner state, temporary test artifact, release tag, commit, branch, push, or provider integration is part of Stage 30.0.

## Historical Stage 29.0 Summary

- All seven supported domains have one standard and one compact generated pack, for fourteen packs total.
- CLI validation passes the lesson-note routing/closure, Obsidian contract, Notion compatibility, safety, file-budget, manifest/compact-structure, and launch-kit checks for every pack.
- Standard packs remain exactly 25 files through the declared three-command and four-skill source merges.
- Compact packs remain exactly five files with all canonical lesson-note sources in `COMMANDS_CORE.md` and `MENTOR_SKILLS_CORE.md`.
- `SAVE_LESSON` defaults to a portable UTF-8 Obsidian Markdown artifact, routes `NOTION` to the connected workflow, and retains `SAVE_LESSON_TO_NOTION` as a compatibility alias.
- Shared normalization preserves grounded omission, localization, evidence, assessment, mastery, completion, and learner-state boundaries across both exporters.
- Validation rejects embedded credentials, opaque ids, local/vault paths, unsupported export claims, active learner-state fields, and automatic state/mastery claims.
- Live ChatGPT attachment/download behavior, opening/importing a file in Obsidian, and connected Notion permissions remain manual checks.

## Stage 28.0 Summary

- All seven supported domains have standard and compact generated packs, for fourteen generated packs total.
- All standard packs are expected to contain exactly 25 files.
- All compact packs are expected to contain exactly 5 files.
- Launch kits remain the user-facing setup helpers.
- Generated packs are reusable and learner-neutral; learner runtime state remains separate under `learners/active-learner/` when used.

Every generated standard and compact pack includes `SAVE_LESSON_TO_NOTION` and `notion-lesson-logger`. The exact optional Azerbaijani action appears only at meaningful lesson closure, never executes automatically, and requires an explicit learner invocation. The workflow prefers a runtime-supplied target, otherwise searches for `PLOS Learning Journal`; it handles duplicate updates or ambiguity, confirms `created`/`updated` only after connector success, and returns a Notion-compatible Markdown draft without claiming a write on failure.

The journal is external learner content and creates no evidence, mastery, or learner-state update. Universal Learning OS stores no Notion client, credentials, opaque target ids, or learner journal data. Standard packs preserve 25 files through declared, separately labeled command/skill merges; compact packs preserve five files through their existing merged cores. Canonical domain content remains unchanged.

## v0.2.0 Release Candidate Summary

- Domains checked: 4.
- Packs checked: 8.
- Standard profile: exactly 25 files.
- Compact profile: exactly 5 files.
- Validation command: `node tools/ulos-cli/src/index.js validate`.
- Current status: PASS after validation.

## Stage 18.0 Runtime Learner State Strategy Note

Stage 18.0 adds documentation and a learner handoff template only. It does not change generated pack contracts, generated pack file counts, Learner-Facing Mentor Mode, or validation requirements.

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Generated packs remain reusable and learner-neutral.
- Daily ChatGPT learning does not require repository learner-state updates after every lesson.

## Stage 18.1 Learner Handoff Export Note

Stage 18.1 adds handoff export documentation, a SQL/PostgreSQL handoff example, and a manual acceptance test only. It does not change generated pack contracts, generated pack file counts, CLI runtime behavior, Learner-Facing Mentor Mode, or validation requirements.

- Handoff export is optional and user-requested.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Generated packs remain learner-neutral.
- No CLI handoff export command is implemented in Stage 18.1.

## Stage 18.2 Optional Learner Snapshot Note

Stage 18.2 adds optional learner snapshot documentation, a snapshot template, a SQL/PostgreSQL snapshot example, and a manual acceptance test only. It does not change generated pack contracts, generated pack file counts, CLI runtime behavior, Learner-Facing Mentor Mode, or validation requirements.

- Snapshot export is optional, periodic, and user-requested.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Generated packs remain learner-neutral.
- No CLI snapshot command is implemented in Stage 18.2.

## Stage 19.0 CLI Learner Runtime Helpers Note

Stage 19.0 adds lightweight optional CLI helpers for learner handoff and snapshot scaffolds plus learner artifact validation. These commands do not change generated pack contracts, generated pack file counts, Learner-Facing Mentor Mode, or generated pack validation requirements.

- `create-handoff` creates optional user-requested handoff scaffolds.
- `create-snapshot` creates optional periodic user-requested snapshot scaffolds.
- `validate-learner` checks optional handoff/snapshot markdown for obvious forbidden internal-default metadata markers.
- Existing `validate` remains the generated pack quality gate.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.

## Stage 19.1 CLI Learner Runtime Hardening Note

Stage 19.1 hardens the existing Stage 19.0 learner CLI helpers. It does not change generated pack contracts, generated pack file counts, compact file lists, Learner-Facing Mentor Mode, or generated pack validation requirements.

- `create-handoff` success output identifies the command, domain, output path, and optional user-requested status.
- `create-snapshot` success output identifies the command, domain, snapshot type, output path, and optional periodic user-requested status.
- `validate-learner` reports whether learner runtime artifacts were found, handoff/snapshot markdown counts, ignored non-markdown files, violation count, and final pass/fail status.
- Handoff and snapshot scaffolds remain learner-facing and omit full transcript fields, YAML learner-state patch fields, and internal metadata by default.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.

## Stage 20.0 Automated CLI Tests Note

Stage 20.0 adds automated CLI tests only. It does not change generated pack contracts, generated pack file counts, compact file lists, Learner-Facing Mentor Mode, learner-neutral generated packs, or optional learner runtime behavior.

- Test command: `node --test tools/ulos-cli/test/*.test.js`.
- Package script: run `npm test` from `tools/ulos-cli/`.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- Learner runtime helper tests use temporary files and clean them up after execution.

## Stage 21.0 App Architecture Plan Note

Stage 21.0 adds app architecture planning documentation, an app architecture ADR, and a manual acceptance checklist only. It does not add an app implementation, app dependencies, a new domain, generated pack contract changes, or learner runtime expansion.

- Universal Learning OS Studio is planned as a local-first, CLI-backed control panel.
- ChatGPT Projects remain the daily learning runtime.
- The CLI remains the source of truth for validation, generation, pack inspection, and optional learner handoff/snapshot scaffolds.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.

## Stage 21.1 App MVP Implementation Plan Note

Stage 21.1 adds implementation planning documentation for a future local Universal Learning OS Studio MVP, an app MVP implementation ADR, and a manual acceptance checklist only. It does not add app runtime code, app dependencies, a new domain, generated pack contract changes, or learner runtime expansion.

- Studio remains planned as a local CLI-backed control panel.
- The future app should call existing CLI commands instead of duplicating validation or generation logic.
- ChatGPT Projects remain the daily learning runtime.
- The CLI remains the source of truth for domain listing, pack validation, pack inspection, generation/dry-run, handoff scaffold creation, snapshot scaffold creation, and learner artifact validation.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.

## Stage 22.0 Studio MVP Implementation Note

Stage 22.0 adds the first local Universal Learning OS Studio MVP under `apps/studio/`. This app is a local CLI-backed control panel and does not change generated pack contracts, generated pack file counts, compact file lists, Learner-Facing Mentor Mode, or generated pack validation requirements.

- Studio calls the existing CLI instead of duplicating validation, generation, inspection, handoff, or snapshot logic.
- ChatGPT Projects remain the daily learning runtime.
- The CLI remains the source of truth for domain listing, pack validation, pack inspection, generation dry-runs, handoff scaffold creation, snapshot scaffold creation, and learner artifact validation.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.
- Handoff and snapshot scaffolds remain optional and user-requested.

## Stage 22.1 Studio MVP Hardening Note

Stage 22.1 hardens the local Studio MVP documentation, npm scripts, smoke checks, bridge behavior clarity, and UI copy. It does not change generated pack contracts, generated pack file counts, compact file lists, Learner-Facing Mentor Mode, generated pack validation requirements, or learner-neutral generated pack behavior.

- Studio remains local-first and CLI-backed.
- ChatGPT Projects remain the daily learning runtime.
- The CLI remains the source of truth for domain listing, pack validation, pack inspection, generation dry-runs, handoff scaffold creation, snapshot scaffold creation, and learner artifact validation.
- Bridge actions remain allowlisted and use argument arrays with `shell: false`.
- Handoff and snapshot scaffolds remain optional and user-requested.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- No domain, authentication, cloud storage, database storage, ChatGPT API integration, transcript import, automatic mastery inference, YAML learner-state patch generation, generated pack editing, or heavy runtime learner-state system is added.

## Stage 23.0 v0.3.0 Preparation Note

Stage 23.0 adds release preparation documentation, final checklists, release-candidate status, ADR coverage, changelog updates, roadmap updates, and manual acceptance coverage for a future `v0.3.0` tag. It does not change generated pack contracts, generated pack file counts, compact file lists, Learner-Facing Mentor Mode, or learner-neutral generated pack behavior.

- Generated pack contracts remain unchanged.
- Supported domains remain 4: `sql-postgresql`, `english`, `javascript`, and `typescript`.
- Generated packs remain 8 total: 4 standard packs and 4 compact packs.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- Learner runtime CLI helpers remain optional and user-requested.
- Studio MVP does not change generated packs.
- Studio remains local-first and CLI-backed.
- No new domain, authentication, cloud storage, database storage, ChatGPT API integration, transcript import, automatic mastery inference, YAML learner-state patch generation, generated pack editing, or heavy runtime learner-state system is added.

## Stage 24.0 Real Learning Pilot and Framework Pause Note

Stage 24.0 adds learner-facing Getting Started and ChatGPT Project setup guides, a real learning pilot plan, a framework pause note, ADR-0050, and manual acceptance coverage. It does not change generated pack contracts or claim that pilots have been completed.

- The primary workflow is generated pack to ChatGPT Project to lesson to learning.
- Studio is optional, local-first, and CLI-backed; it is not the learning runtime.
- The next focus is actual use of the learning stack through SQL/PostgreSQL and English pilots.
- Standard packs remain exactly 25 files and compact packs remain exactly 5 files.
- Generated packs remain learner-neutral and Learner-Facing Mentor Mode remains unchanged.
- Daily learning does not require repository updates; handoff and snapshot remain optional and user-requested.

## Stage 25.0 DSA Domain Note

Stage 25.0 expands the learning stack without expanding framework or Studio features.

- Supported domains increase from 4 to 5: `sql-postgresql`, `english`, `javascript`, `typescript`, and `dsa`.
- Generated packs increase from 8 to 10 with `dsa-standard` and `dsa-compact`.
- Every standard pack remains exactly 25 files.
- Every compact pack remains exactly 5 files with the unchanged exact compact file list.
- DSA preserves Learner-Facing Mentor Mode, JavaScript-first implementation, progressive hints, edge-case reasoning, and time/space complexity analysis.
- Studio remains optional and ChatGPT Projects remain the daily learning runtime.
- Stage 25.0 creates no release tag.

## Stage 26.0 Front-End System Design Domain Note

- Supported domains increase from 5 to 6 with `frontend-system-design`.
- Generated packs increase from 10 to 12 with one 25-file standard pack and one 5-file compact pack.
- Existing standard and compact contracts remain unchanged, including the exact compact file list.
- The learning model is frontend-specific, requirements-first, trade-off-aware, failure-oriented, and based on learner-produced architecture evidence.
- Learner-Facing Mentor Mode is preserved; Studio remains optional and ChatGPT Projects remain the daily runtime.
- No Node.js domain, new learner runtime, Studio expansion, or release tag is added.
