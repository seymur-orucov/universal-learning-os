# Stage 22.1 Studio MVP Hardening Manual Acceptance Test

## Purpose

Verify that Stage 22.1 hardens the local Studio MVP without changing generated pack contracts, learner-state boundaries, or CLI source-of-truth behavior.

## Preconditions

- Run from a clean repository checkout or record any unrelated local changes before testing.
- Do not create or modify learner progress unless explicitly directed by the user.
- Do not add a new domain.

## Checks

- [ ] `apps/studio/README.md` explains what Studio is and what Studio is not.
- [ ] `apps/studio/README.md` documents prerequisites, install, local bridge/server run, Vite UI run, URL to open, build, smoke usage, troubleshooting, security boundary, allowed CLI actions, ChatGPT Projects as daily runtime, and CLI source of truth.
- [ ] `apps/studio/package.json` scripts work for `server`, `build`, `preview`, `smoke:bridge`, and `smoke:health`.
- [ ] `cd apps/studio && npm run build` passes.
- [ ] `cd apps/studio && npm run smoke:health` passes and stops its server.
- [ ] `cd apps/studio && npm run smoke:bridge` passes.
- [ ] Bridge/server health smoke passes.
- [ ] `list-domains` bridge smoke passes.
- [ ] Unsupported domain bridge rejection works.
- [ ] Unsafe output path bridge rejection works.
- [ ] Bridge uses allowlisted actions.
- [ ] Bridge does not expose arbitrary shell execution.
- [ ] Bridge passes CLI arguments as arrays and uses `shell: false`.
- [ ] UI reminds that Studio is a local control panel.
- [ ] UI reminds that ChatGPT Projects remain the daily learning runtime.
- [ ] UI reminds that handoff/snapshot are optional and user-requested.
- [ ] UI communicates that validation/generation behavior comes from the CLI.
- [ ] No new domain is added.
- [ ] `node tools/ulos-cli/src/index.js list-domains` shows exactly `sql-postgresql`, `english`, `javascript`, and `typescript`.
- [ ] Generated pack contracts are unchanged.
- [ ] Standard generated packs remain exactly 25 files.
- [ ] Compact generated packs remain exactly 5 files.
- [ ] Compact exact file list remains unchanged: `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- [ ] Learner-Facing Mentor Mode remains unchanged.
- [ ] Handoff/snapshot remain optional and user-requested.
- [ ] No mandatory daily learner-state workflow is introduced.
- [ ] No heavy runtime learner-state system is implemented.
- [ ] No generated pack contract is changed.
- [ ] No authentication, cloud storage, database storage, or ChatGPT API integration is added.
- [ ] `node tools/ulos-cli/src/index.js validate` passes.
- [ ] `node tools/ulos-cli/src/index.js validate-learner` passes.
- [ ] `cd tools/ulos-cli && npm test` passes.
- [ ] No temporary smoke/test artifacts remain.
- [ ] `git diff --check` is clean, except existing line-ending normalization warnings if unavoidable.

## Validation Commands

```sh
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
```

```sh
cd tools/ulos-cli
npm test
cd ../..
```

```sh
cd apps/studio
npm install
npm run build
npm run smoke:bridge
npm run smoke:health
cd ../..
```

```sh
git diff --check
git status --short
```

## Expected Result

All checks pass. Studio remains a local-first CLI-backed control panel, ChatGPT Projects remain the daily learning runtime, generated pack contracts remain unchanged, and no auth/cloud/database/ChatGPT API integration or arbitrary shell execution is introduced.
