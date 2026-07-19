# Stage 21.1 App MVP Implementation Plan Manual Acceptance Test

## Scope

This checklist validates that Stage 21.1 adds implementation planning only. It must not add app runtime code, app dependencies, new domains, generated pack contract changes, or heavy learner-state runtime behavior.

## Document Checks

- [ ] `docs/app/APP_MVP_IMPLEMENTATION_PLAN.md` exists.
- [ ] `docs/app/APP_UI_FLOW.md` exists.
- [ ] `docs/app/APP_CLI_INTEGRATION_PLAN.md` exists.
- [ ] `docs/decisions/ADR-0045-app-mvp-implementation-plan.md` exists.
- [ ] The MVP is documented as a local CLI-backed control panel.
- [ ] The implementation plan recommends a future local React/Vite UI or simple Node-backed local web UI, but does not implement it.
- [ ] ChatGPT Projects remain documented as the daily learning runtime.
- [ ] The CLI remains documented as the source of truth for domain listing, validation, pack inspection, generation/dry-run, handoff scaffolds, snapshot scaffolds, and learner artifact validation.

## Contract Checks

- [ ] Generated pack contracts remain unchanged.
- [ ] Standard packs remain exactly 25 files.
- [ ] Compact packs remain exactly 5 files.
- [ ] The compact exact file list remains `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.
- [ ] Learner-Facing Mentor Mode remains unchanged.
- [ ] Generated packs remain learner-neutral.
- [ ] Handoff and snapshot commands remain optional and user-requested.
- [ ] No mandatory daily learner-state workflow is introduced.
- [ ] No heavy runtime learner-state system is implemented.

## Repository Checks

- [ ] No app implementation is added.
- [ ] No app runtime code is added.
- [ ] No React, Vite, Next.js, Electron, or Tauri dependency is added.
- [ ] No new domain is added.
- [ ] Existing CLI automated tests still pass.
- [ ] Existing generated pack validation still passes.
- [ ] `git diff --check` is clean.

## Validation Commands

Run:

```sh
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
cd tools/ulos-cli
npm test
cd ../..
git diff --check
```

Expected `list-domains` output contains exactly:

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
