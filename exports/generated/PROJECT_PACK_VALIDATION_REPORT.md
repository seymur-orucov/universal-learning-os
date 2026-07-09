# Project Pack Validation Report

## Validation Marker

`v0.2.0-release-candidate-stage-17.1`

## Quick Validation

Preferred quick quality gate:

```sh
node tools/ulos-cli/src/index.js validate
```

The CLI validates generated pack directories, profile file counts, required files, Learner-Facing Mentor Mode markers, metadata guardrails, standard manifest basics, compact structure, and launch kit presence. It exits non-zero on failure and is the official generated-pack quality gate for v0.2.0 readiness.

Stage 20.0 also provides automated CLI regression tests:

```sh
node --test tools/ulos-cli/test/*.test.js
```

From `tools/ulos-cli/`, run the same suite with:

```sh
npm test
```

These tests cover domain listing, generated pack validation, TypeScript standard/compact inspection, generation dry-runs, invalid inputs, path safety, unexpected-file protection, learner handoff/snapshot scaffolds, overwrite protection, and learner forbidden-marker validation.

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
