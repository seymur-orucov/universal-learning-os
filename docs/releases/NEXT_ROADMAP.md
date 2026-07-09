# Next Roadmap

## Candidate Next Stages

- v0.2.0: Release-candidate finalization complete after validation passes.
- Stage 18.0: Runtime Learner State Strategy completed as documentation and templates.
- Stage 18.1: Learner Handoff Export Model completed as documentation/templates/manual acceptance only.
- Stage 18.2: Optional Learner Snapshot Format completed as documentation/templates/manual acceptance only.
- Stage 19.0: CLI Learner Runtime Commands completed as lightweight optional scaffold/validation helpers.
- Stage 19.1: CLI Learner Runtime Hardening completed as output, validation, scaffold, and manual acceptance hardening only.
- Stage 20.0: Automated CLI Tests completed for pack contracts, generation dry-runs, learner runtime helpers, path safety, overwrite protection, and forbidden marker validation.
- Stage 21.0: App Architecture Plan completed as documentation/manual acceptance only.
- Stage 21.1: App MVP Implementation Plan completed as documentation/manual acceptance only.
- Stage 22.0: Studio MVP implementation or stronger automated tests and source drift checks.
- Stage 23.0: Package distribution.
- Future domain stages: DSA, Go, System Design, or another explicitly selected domain.

## Recommended Priority

1. Tag v0.2.0 only after validation passes and the working tree is clean.
2. Keep Stage 18.0 as documentation-only unless a future stage explicitly adds optional learner-state tooling.
3. Keep learner runtime helpers optional and scaffold-oriented; do not require daily repository updates.
4. Use Stage 21.0 and Stage 21.1 app planning docs to guide any future local control panel implementation.
5. Consider optional import-from-handoff and progress summary generation only after preserving learner-state guardrails.

## Stage 19.1 CLI Learner Runtime Hardening

Stage 19.1 hardens the existing Stage 19.0 learner CLI helpers without changing generated pack contracts.

- `create-handoff` and `create-snapshot` report command name, domain, output path, and optional/user-requested status.
- `create-snapshot` also reports snapshot type and periodic status.
- `validate-learner` reports learner artifact presence, checked handoff/snapshot counts, ignored non-markdown files, violation count, and pass/fail status.
- Generated handoff/snapshot scaffolds remain learner-facing and do not include full transcript or YAML learner-state patch fields by default.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Supported domains remain `sql-postgresql`, `english`, `javascript`, and `typescript`.

## Stage 20.0 Automated CLI Tests

Stage 20.0 adds repeatable CLI tests with Node's built-in test runner:

```sh
node --test tools/ulos-cli/test/*.test.js
```

From `tools/ulos-cli/`, the same suite is available through:

```sh
npm test
```

Coverage includes:

- `list-domains`, `validate`, and TypeScript standard/compact `inspect-pack` contract checks.
- TypeScript standard and compact `generate --dry-run`.
- Invalid domain/profile handling.
- Standard generation unsafe output path and unexpected-file protection.
- `create-handoff` and `create-snapshot` success/error paths, unsafe output paths, existing-file protection, and `--force`.
- `validate-learner` pass/fail behavior, forbidden markdown markers, and documented non-markdown warnings.
- Temporary artifact cleanup under `tmp/ulos-cli-tests/` and Stage 20 learner test directories.

Stage 20.0 does not add a domain, change generated pack file-count contracts, introduce mandatory learner-state workflows, or build the app.

## Stage 21.0 App Architecture Plan

Stage 21.0 defines the future Universal Learning OS Studio app as a local-first, CLI-backed control panel for generated packs, CLI validation, ChatGPT Project setup, and optional handoff/snapshot helpers.

- The app is planned as a control panel, not a full LMS or daily learning runtime.
- ChatGPT Projects remain the daily learning runtime.
- The CLI remains the source of truth for validation, generation, pack inspection, and optional learner artifact scaffolds.
- Stage 21.0 adds planning docs, an ADR, and a manual acceptance checklist only.
- No app implementation or app dependencies are added.
- No domain is added.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact pack file lists remain unchanged.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.

## Stage 21.1 App MVP Implementation Plan

Stage 21.1 turns the Stage 21.0 app architecture into an implementation-ready plan for a future local Universal Learning OS Studio MVP.

- Studio remains planned as a local CLI-backed control panel.
- The recommended future implementation location is `tools/ulos-studio/`.
- The recommended future stack is a local React/Vite UI or simple Node-backed local web UI with a small command bridge.
- The app should call existing CLI commands instead of reimplementing domain, pack, validation, generation, or learner artifact logic.
- ChatGPT Projects remain the daily learning runtime.
- Stage 21.1 adds planning docs, an ADR, and a manual acceptance checklist only.
- No app implementation, app runtime code, or app dependencies are added.
- No domain is added.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact pack file lists remain unchanged.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.

## OPEN QUESTION

- Which future domain should be prioritized after v0.2.0: DSA, Go, System Design, or another domain?
- Should optional learner snapshot tooling be a CLI command, a template workflow, or both?
- Should import-from-handoff remain manual, become an optional CLI command, or wait for a runtime app?
- Should optional progress summaries be Markdown-only or eventually machine-readable?
