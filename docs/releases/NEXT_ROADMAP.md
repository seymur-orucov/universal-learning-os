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
- Stage 22.0: Studio MVP implementation completed as a local React/Vite UI with a Node CLI bridge.
- Stage 22.1: Studio MVP hardening completed with practical docs, smoke scripts, bridge/server smoke checks, bridge error clarity, and UI copy polish.
- Stage 23.0: v0.3.0 release preparation completed as release documentation, final checklists, validation guidance, ADR coverage, and manual acceptance coverage only.
- Stage 23.1: v0.3.0 release candidate hardening.
- Stage 23.2: v0.3.0 tagging finalization.
- Stage 24.0: Real Learning Pilot and Framework Pause completed as learner-facing usage guides, pilot plan, pause note, ADR, and manual acceptance coverage.
- Stage 25.0: DSA Domain completed as the first learning-stack expansion after the framework pause, adding one canonical domain and two contract-preserving generated packs.
- Stage 26.0: Front-End System Design Domain completed with requirements-first architecture practice, design defense, and two contract-preserving generated packs.
- Stage 27.0: Node.js Domain completed with runtime-first backend progression, PostgreSQL/production reasoning, and two contract-preserving generated packs.
- Stage 27.1: Deep Teaching and Progressive Lesson Delivery completed as a targeted framework correction driven by real SQL lesson evidence.
- Stage 28.0: Optional Notion Lesson Journal Integration completed as an explicit connected-tool workflow across all registered packs.
- Stage 29.0: Downloadable Obsidian Lesson Notes completed with generic export routing, shared normalization, portable Markdown artifacts, and preserved Notion compatibility.
- Stage 30.0: Git Domain completed with mental-model-first progression, recovery and destructive-operation safety, provider-neutral collaboration, leadership workflow design, and two contract-preserving generated packs.
- Stage 31.0: Go Domain completed with language-first and standard-library-first progression, explicit errors, safe concurrency, HTTP/PostgreSQL/production engineering, and two contract-preserving generated packs.
- Broad framework and Studio feature expansion remains paused; Stage 31.0 adds no code runner, compiler integration, hosted service, learner database, or automatic state workflow.

## Recommended Priority

1. Run SQL/PostgreSQL, English, DSA, Front-End System Design, Node.js, Git, and Go real learning pilots in ChatGPT Projects.
2. Use pilot evidence before proposing framework or Studio expansion or another domain.
3. Keep learner runtime helpers optional and scaffold-oriented; do not require daily repository updates.
4. Keep Studio local-first, CLI-backed, and optional.

## Stage 31.0 Go Domain

- Adds only `go` as the ninth canonical domain for experienced JavaScript/TypeScript engineers moving toward backend, systems, platform, infrastructure, or full-stack engineering.
- Progresses from Go's compiled model, toolchain, types, values, methods, interfaces, errors, generics, I/O, and testing through safe concurrency, `net/http`, application design, PostgreSQL, security, reliability, observability, profiling, performance, deployment, and later optional specialization.
- Uses the standard library as the conceptual foundation: `net/http` before frameworks, `database/sql` and explicit SQL before ORM convenience, `testing` before optional test frameworks, and direct `context`/`sync`/channel ownership reasoning.
- Requires every goroutine design to identify ownership, stopping, errors, resource release, bounds, backpressure, waiting, and shutdown; race, deadlock, leak, cancellation, overload, and graceful-shutdown evidence are explicit.
- Adds seven progressive projects, learner-produced evidence rules, Azerbaijani instruction with preserved English terminology, ADR-0058, automated coverage, manual acceptance, launch kits, and a planned pilot.
- Increases supported domains from eight to nine and generated packs from sixteen to eighteen.
- Adds `go-standard` with exactly 25 files and `go-compact` with exactly five files while preserving teaching-first delivery, learner-facing metadata boundaries, optional continuity, and generic Obsidian/Notion lesson exports.
- Keeps Studio optional and generic with only fallback/smoke compatibility; adds no Go screen, compiler, code runner, dependency, hosted backend, learner runtime, release, or tag.

## Stage 30.0 Git Domain

- Adds only `git` as the eighth canonical domain and teaches Git as distributed version control and a commit DAG rather than command memorization.
- Progresses from repository state, commits, inspection, branches, merge, conflicts, and remotes through recovery, rebase, releases, investigation, internals, automation, scale, security, and Senior/Lead workflow governance.
- Requires risk, local/shared-history analysis, safer alternatives, recovery limits, disposable practice, and verification for destructive operations; treats credential rotation as mandatory after secret exposure.
- Adds five progressive projects, a reusable incident/scenario library, learner-produced evidence rules, Azerbaijani instruction with preserved English Git terminology, ADR-0057, automated coverage, manual acceptance, launch kits, and a planned pilot.
- Increases supported domains from seven to eight and generated packs from fourteen to sixteen.
- Adds `git-standard` with exactly 25 files and `git-compact` with exactly five files while preserving Learner-Facing Mentor Mode, optional continuity, and generic Obsidian/Notion lesson exports.
- Keeps Studio optional and CLI-backed with only fallback/smoke compatibility; adds no Git screen, terminal, repository manipulation, provider API, dependency, learner runtime, or release tag.

## Stage 29.0 Downloadable Obsidian Lesson Notes

- Adds `SAVE_LESSON` with default/`OBSIDIAN` Markdown artifact routing and explicit `NOTION` routing; preserves `SAVE_LESSON_TO_NOTION` as an alias.
- Shares grounded normalization across both exporters and omits unsupported values, empty sections, invented evidence, mastery, and completion.
- Requires stable English `.md` filenames, valid YAML, localized domain-adaptive notes, confirmed artifact naming/linking, an honest one-block fallback, and stable session regeneration.
- Produces a normal portable Markdown artifact without accessing or writing an Obsidian vault.
- Preserves seven domains, fourteen packs, exact 25/5 file budgets, and unchanged canonical domain and learner content.

## Stage 28.0 Optional Notion Lesson Journal Integration

- Adds `SAVE_LESSON_TO_NOTION` and `notion-lesson-logger` as global runtime contracts inherited by all registered domains.
- Shows the exact optional action once only at meaningful lesson closure and requires explicit learner invocation.
- Uses ChatGPT's connected Notion tool, deterministic available-context titles, target discovery, duplicate-safe update behavior, confirmed-success reporting, and a clean Markdown fallback.
- Stores no Notion client, credentials, opaque target ids, or learner journal data in Universal Learning OS.
- Keeps journal notes separate from learner state, evidence, and mastery.
- Preserves fourteen packs, exactly 25 standard files, exactly 5 compact files, and unchanged canonical domain content.

## Stage 27.1 Deep Teaching and Progressive Lesson Delivery

- Makes `START_LESSON` teaching-first by default and permits lessons to span teaching, guided checks, feedback, guided practice, independent practice, and closure across multiple turns.
- Retains one clear learner action per response and requires an explicit request for diagnostic, challenge-first, practice-only, or assessment behavior before teaching.
- Prevents tasks from depending on untaught concepts and requires technically correct simplification across schema, architecture, coding, language, and algorithm work.
- Corrects SQL Lesson 1 to use prerequisite-safe relational-model examples and reserves many-to-many bridge-table work for Lesson 14.
- Keeps seven domains, fourteen generated packs, exact 25-file standard and five-file compact contracts, Learner-Facing Mentor Mode, optional learner-state workflows, Studio scope, and release/tag status unchanged.

## Stage 27.0 Node.js Domain

- Adds only `nodejs` for experienced JavaScript/TypeScript Front-End Engineers moving toward backend or full-stack work.
- Uses a runtime-first progression through event loop, HTTP, Fastify/Express, architecture, validation/errors, PostgreSQL/transactions, identity/security, testing, performance, reliability, observability, and deployment.
- Uses Fastify as the documented practical default, compares Express honestly, preserves raw SQL reasoning, and keeps NestJS as a later optional specialization.
- Increases supported domains from 6 to 7 and generated packs from 12 to 14.
- Adds `nodejs-standard` with exactly 25 files and `nodejs-compact` with exactly 5 files; every existing pack contract remains unchanged.
- Preserves Learner-Facing Mentor Mode, optional continuity helpers, optional Studio, and ChatGPT Projects as the daily runtime.
- Adds no learner runtime infrastructure, Studio workflow, authentication/cloud/framework database service, ChatGPT API integration, LMS, additional domain, or release tag.

## Stage 26.0 Front-End System Design Domain

- Adds only `frontend-system-design` for Senior/Lead/Staff frontend interviews, architecture reviews, platform design, and design defense.
- Centers requirement clarification, frontend boundaries, state/data flow, contextual trade-offs, failure analysis, testing, delivery, and implementation-ready plans.
- Increases supported domains from 5 to 6 and generated packs from 10 to 12.
- Adds `frontend-system-design-standard` with exactly 25 files and `frontend-system-design-compact` with exactly 5 files; existing contracts remain unchanged.
- Preserves Learner-Facing Mentor Mode, optional learner continuity helpers, optional Studio, and ChatGPT Projects as the daily runtime.
- Adds no Node.js domain, learner runtime infrastructure, Studio feature, or release tag.

## Stage 25.0 DSA Domain

- Adds only the `dsa` domain for practical Senior Front-End interview preparation.
- Uses JavaScript by default and supports TypeScript when requested or clarity-improving.
- Adds pattern-based progression from Big O through interview simulations, progressive hints, complexity/edge-case reasoning, and learner-produced assessment evidence.
- Increases supported domains from 4 to 5 and generated packs from 8 to 10.
- Adds `dsa-standard` with exactly 25 files and `dsa-compact` with exactly 5 files; all existing pack contracts remain unchanged.
- Preserves Learner-Facing Mentor Mode, optional learner continuity helpers, optional Studio, and ChatGPT Projects as the daily learning runtime.
- Adds no new Studio feature and no release tag.

## Stage 23.0 v0.3.0 Release Preparation

Stage 23.0 prepares the repository for a future `v0.3.0` tag.

- Adds v0.3.0 release notes, release checklist, and release-candidate status.
- Adds ADR-0048 and manual acceptance coverage.
- Updates the release index, roadmap, validation report, and changelog.
- Documents final validation commands for generated packs, optional learner runtime helpers, CLI automated tests, and Studio build/smoke checks.
- Does not tag `v0.3.0`.
- Does not add a domain.
- Does not change generated pack contracts.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Studio remains local-first and CLI-backed.
- ChatGPT Projects remain the daily learning runtime.
- Handoff and snapshot workflows remain optional and user-requested.

## Stage 22.0 Studio MVP Implementation

Stage 22.0 implements the first local Universal Learning OS Studio MVP under `apps/studio/`.

- Studio is a local React/Vite UI with a small Node command bridge.
- The bridge allows only fixed CLI-backed actions for `list-domains`, `validate`, `validate-learner`, `inspect-pack`, `generate --dry-run`, `create-handoff`, and `create-snapshot`.
- The bridge validates supported domains, profiles, snapshot types, and repo-local output paths, and invokes the CLI with argument arrays instead of shell command strings.
- ChatGPT Projects remain the daily learning runtime.
- The CLI remains the source of truth for domain listing, validation, pack inspection, generation dry-runs, handoff scaffolds, snapshot scaffolds, and learner artifact validation.
- Handoff and snapshot workflows remain optional and user-requested.
- No domain is added.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact pack file lists remain unchanged.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.
- No authentication, cloud storage, database storage, ChatGPT API integration, transcript import, automatic mastery inference, YAML learner-state patch generation, or heavy runtime learner-state system is introduced.

## Stage 22.1 Studio MVP Hardening

Stage 22.1 hardens the local Studio MVP before v0.3.0 release preparation.

- Studio README now documents what Studio is and is not, prerequisites, install, two-process local running, build, smoke checks, troubleshooting, allowed CLI actions, and the security boundary.
- Studio scripts include local server, Vite dev/build/preview, bridge smoke, and health smoke commands.
- The bridge/server smoke utility checks `/api/health`, `list-domains`, unsupported domain rejection, and unsafe output path rejection without leaving temporary artifacts.
- Bridge rejection output is surfaced consistently with command results while preserving allowlisted actions, argument arrays, and `shell: false`.
- UI copy clarifies that Studio is a local CLI-backed control panel, ChatGPT Projects remain the daily learning runtime, handoff/snapshot are optional and user-requested, and validation/generation behavior comes from the CLI.
- No generated pack contract changed: standard packs remain exactly 25 files and compact packs remain exactly 5 files.
- No domain, authentication, cloud storage, database storage, ChatGPT API integration, transcript import, automatic mastery inference, YAML learner-state patch generation, or heavy runtime learner-state system is added.

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

- Which domain, if any, should follow Front-End System Design after pilot evidence is reviewed?
- Should optional learner snapshot tooling be a CLI command, a template workflow, or both?
- Should import-from-handoff remain manual, become an optional CLI command, or wait for a runtime app?
- Should optional progress summaries be Markdown-only or eventually machine-readable?
