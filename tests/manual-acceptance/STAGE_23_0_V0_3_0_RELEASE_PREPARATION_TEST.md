# Stage 23.0 v0.3.0 Release Preparation Manual Acceptance Test

## Purpose

Verify that Stage 23.0 prepares `v0.3.0` release documentation and validation guidance without changing generated pack contracts, learner runtime boundaries, supported domains, or Studio security boundaries.

## Documentation Checks

- [ ] `docs/releases/v0.3.0.md` exists.
- [ ] `docs/releases/V0_3_0_RELEASE_CHECKLIST.md` exists.
- [ ] `docs/releases/v0.3.0-rc-status.md` exists.
- [ ] `docs/decisions/ADR-0048-v0.3.0-release-preparation.md` exists.
- [ ] `docs/releases/README.md` references v0.3.0 release notes, checklist, and release-candidate status.
- [ ] `CHANGELOG.md` includes a v0.3.0 summary.
- [ ] `docs/releases/NEXT_ROADMAP.md` includes Stage 23.0 as v0.3.0 release preparation.

## Generated Pack Contract Checks

- [ ] No new domain was added.
- [ ] Supported domains remain exactly `sql-postgresql`, `english`, `javascript`, and `typescript`.
- [ ] Standard packs remain exactly 25 files.
- [ ] Compact packs remain exactly 5 files.
- [ ] Compact packs retain exactly `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.
- [ ] Generated packs remain learner-neutral.
- [ ] Learner-Facing Mentor Mode remains unchanged.

## CLI Checks

- [ ] `node tools/ulos-cli/src/index.js validate` passes.
- [ ] `node tools/ulos-cli/src/index.js validate-learner` passes.
- [ ] `node tools/ulos-cli/src/index.js list-domains` lists exactly four supported domains.
- [ ] `node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard` reports the standard TypeScript pack correctly.
- [ ] `node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact` reports the compact TypeScript pack correctly.
- [ ] `node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run` passes without writing generated packs.
- [ ] `node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run` passes without writing generated packs.
- [ ] CLI automated tests pass from `tools/ulos-cli/` with `npm test`.

## Studio Checks

- [ ] `npm install` from `apps/studio/` completes or dependencies are already installed.
- [ ] `npm run build` from `apps/studio/` passes.
- [ ] `npm run smoke:bridge` from `apps/studio/` passes.
- [ ] `npm run smoke:health` from `apps/studio/` passes.
- [ ] Studio remains local-first and CLI-backed.
- [ ] Studio bridge actions remain allowlisted.
- [ ] Studio bridge uses argument arrays and `shell: false`.
- [ ] Studio does not expose arbitrary shell execution.

## Forbidden Behavior Checks

- [ ] No authentication was added.
- [ ] No cloud storage was added.
- [ ] No database storage was added.
- [ ] No ChatGPT API integration was added.
- [ ] ChatGPT Projects remain the daily learning runtime.
- [ ] Handoff and snapshot workflows remain optional and user-requested.
- [ ] No mandatory daily learner-state workflow was introduced.
- [ ] No heavy runtime learner-state system was introduced.
- [ ] No full ChatGPT transcript import was introduced.
- [ ] No automatic mastery inference from chat history was introduced.
- [ ] No YAML learner-state patch generation was introduced.
- [ ] Tag commands are documented but not executed.

## Final Repository Checks

- [ ] `git diff --check` is clean.
- [ ] `git status --short` shows only intended Stage 23.0 files before commit.
- [ ] No temporary smoke or test artifacts remain.
