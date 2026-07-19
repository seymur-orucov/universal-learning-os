# v0.3.0 Release Checklist

## Git Status

- [ ] Run `git status --short`.
- [ ] Confirm the working tree is clean before final tagging.
- [ ] Confirm no unreviewed Stage 22.0 or Stage 22.1 work is being overwritten.

## Generated Pack Validation

- [ ] Run `node tools/ulos-cli/src/index.js validate`.
- [ ] Confirm generated pack validation passes.

## Learner Runtime Validation

- [ ] Run `node tools/ulos-cli/src/index.js validate-learner`.
- [ ] Confirm optional learner artifact validation passes.
- [ ] Confirm handoff and snapshot workflows remain optional and user-requested.

## CLI Automated Tests

- [ ] Run `npm test` from `tools/ulos-cli/`.
- [ ] Confirm the automated CLI suite passes.
- [ ] Confirm the expected Stage 20.0 suite remains 23/23 passing unless the suite has been intentionally expanded in a later approved stage.

## Studio Build

- [ ] Run `npm install` from `apps/studio/` if dependencies are not installed.
- [ ] Run `npm run build` from `apps/studio/`.
- [ ] Confirm the Vite build passes.

## Studio Bridge Smoke Checks

- [ ] Run `npm run smoke:bridge` from `apps/studio/`.
- [ ] Confirm bridge health passes.
- [ ] Confirm `list-domains` succeeds through the bridge.
- [ ] Confirm unsupported domains are rejected.
- [ ] Confirm unsafe output paths are rejected.

## Studio Health Smoke Checks

- [ ] Run `npm run smoke:health` from `apps/studio/`.
- [ ] Confirm the local server health check passes.

## Domain List Verification

- [ ] Run `node tools/ulos-cli/src/index.js list-domains`.
- [ ] Confirm the supported domain list is exactly:
  - `sql-postgresql`
  - `english`
  - `javascript`
  - `typescript`

## Standard Pack Count Verification

- [ ] `sql-postgresql-standard` has exactly 25 files.
- [ ] `english-standard` has exactly 25 files.
- [ ] `javascript-standard` has exactly 25 files.
- [ ] `typescript-standard` has exactly 25 files.

## Compact Pack Count Verification

- [ ] `sql-postgresql-compact` has exactly 5 files.
- [ ] `english-compact` has exactly 5 files.
- [ ] `javascript-compact` has exactly 5 files.
- [ ] `typescript-compact` has exactly 5 files.

## Compact Exact File List Verification

- [ ] Every compact pack contains exactly `PROJECT_INSTRUCTIONS.md`.
- [ ] Every compact pack contains exactly `STARTUP_PROMPT.md`.
- [ ] Every compact pack contains exactly `DOMAIN_CORE.md`.
- [ ] Every compact pack contains exactly `COMMANDS_CORE.md`.
- [ ] Every compact pack contains exactly `MENTOR_SKILLS_CORE.md`.
- [ ] No compact pack contains additional files.

## Security Boundary Checks

- [ ] Studio bridge actions are allowlisted.
- [ ] Studio bridge uses `spawn` argument arrays.
- [ ] Studio bridge uses `shell: false`.
- [ ] Studio does not expose arbitrary shell execution.
- [ ] Studio rejects unsupported domains, profiles, snapshot types, and unsafe output paths.

## No Forbidden Runtime Behavior Checks

- [ ] No mandatory daily learner-state workflow is introduced.
- [ ] No heavy runtime learner-state system is introduced.
- [ ] No full ChatGPT transcript import is introduced.
- [ ] No automatic mastery inference from chat history is introduced.
- [ ] No YAML learner-state patch generation is introduced.
- [ ] No sensitive personal data storage is introduced.

## No Generated Pack Contract Changes

- [ ] Standard packs remain exactly 25 files.
- [ ] Compact packs remain exactly 5 files.
- [ ] Compact exact file list remains unchanged.
- [ ] Learner-Facing Mentor Mode remains unchanged.
- [ ] Generated packs remain learner-neutral.

## No New Domain

- [ ] No domain is added for v0.3.0.
- [ ] Supported domains remain `sql-postgresql`, `english`, `javascript`, and `typescript`.

## No Auth/Cloud/Database/ChatGPT API

- [ ] No authentication is added.
- [ ] No cloud storage is added.
- [ ] No database storage is added.
- [ ] No ChatGPT API integration is added.
- [ ] Studio remains local-first and CLI-backed.

## Final Verification Commands

Run from the repository root before final approval:

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
cd apps/studio
npm install
npm run build
npm run smoke:bridge
npm run smoke:health
cd ../..
git diff --check
git status --short
```

## Final Tag Commands

Do not run until final approval:

```sh
git tag -a v0.3.0 -m "Universal Learning OS v0.3.0"
git push origin v0.3.0
```
