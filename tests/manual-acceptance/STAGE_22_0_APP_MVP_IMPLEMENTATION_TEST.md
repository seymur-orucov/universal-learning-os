# Stage 22.0 App MVP Implementation Manual Acceptance Test

## Purpose

Verify that Universal Learning OS Studio exists as a local CLI-backed control panel without changing generated pack contracts or learner-runtime boundaries.

## Checklist

- [ ] App exists under `apps/studio/`.
- [ ] App has a minimal React/Vite UI.
- [ ] App has a local Node CLI bridge.
- [ ] Bridge uses allowlisted actions only.
- [ ] Bridge does not expose arbitrary shell execution.
- [ ] Dashboard loads.
- [ ] `list-domains` action works.
- [ ] `validate` action works.
- [ ] `validate-learner` action works.
- [ ] `inspect-pack` action works.
- [ ] `generate --dry-run` action works.
- [ ] `create-handoff` action works.
- [ ] `create-snapshot` action works.
- [ ] Unsupported domains are rejected.
- [ ] Unsupported snapshot types are rejected.
- [ ] Unsafe output paths are rejected.
- [ ] Generated pack contracts are unchanged.
- [ ] No new domain is added.
- [ ] ChatGPT Projects remain the daily learning runtime.
- [ ] Handoff and snapshot workflows remain optional and user-requested.
- [ ] Existing CLI tests still pass.
- [ ] App build passes.

## Suggested Commands

```sh
cd apps/studio
npm install
npm run build
npm run server
```

Stop the local server after the smoke check.

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
cd tools/ulos-cli
npm test
cd ../..
git diff --check
```

## Expected Domain List

`list-domains` must continue to show exactly:

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`

## Generated Pack Contract Checks

- [ ] Standard generated packs remain exactly 25 files.
- [ ] Compact generated packs remain exactly 5 files.
- [ ] Compact exact file list remains unchanged:
  - `COMMANDS_CORE.md`
  - `DOMAIN_CORE.md`
  - `MENTOR_SKILLS_CORE.md`
  - `PROJECT_INSTRUCTIONS.md`
  - `STARTUP_PROMPT.md`

## Forbidden Scope Checks

- [ ] No heavy runtime learner-state system is implemented.
- [ ] No mandatory daily learner-state workflow is introduced.
- [ ] No YAML learner-state patches are generated.
- [ ] No full ChatGPT transcript import is implemented.
- [ ] No automatic mastery inference from chat history is implemented.
- [ ] No auth, cloud, database, or ChatGPT API integration is added.
