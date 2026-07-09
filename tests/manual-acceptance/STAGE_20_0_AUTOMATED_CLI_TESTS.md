# Stage 20.0 Automated CLI Tests

## Purpose

Verify that Stage 20.0 adds repeatable automated CLI tests without changing generated pack contracts, adding domains, or introducing mandatory learner-state workflows.

## Acceptance Checks

- [ ] Automated tests exist under `tools/ulos-cli/test/`.
- [ ] Test command is documented in `tools/ulos-cli/README.md`.
- [ ] `node --test tools/ulos-cli/test/*.test.js` is documented.
- [ ] `npm test` is available from `tools/ulos-cli/`.
- [ ] Tests cover `list-domains`, `validate`, and TypeScript standard/compact `inspect-pack`.
- [ ] Tests verify supported domains remain exactly `sql-postgresql`, `english`, `javascript`, and `typescript`.
- [ ] Tests verify TypeScript standard pack remains exactly 25 files.
- [ ] Tests verify TypeScript compact pack remains exactly 5 files.
- [ ] Tests verify the compact exact file list remains `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- [ ] Tests cover TypeScript standard and compact `generate --dry-run`.
- [ ] Tests cover invalid domain and invalid profile failures.
- [ ] Tests cover unsafe output path rejection.
- [ ] Tests cover unexpected-file protection for selected standard output directories.
- [ ] Tests cover `create-handoff` success, unsupported domain, unsafe path, existing-file protection, and `--force`.
- [ ] Tests cover `create-snapshot` success, unsupported domain, unsupported type, unsafe path, existing-file protection, and `--force`.
- [ ] Tests cover `validate-learner` passing on clean/valid temporary artifacts.
- [ ] Tests cover forbidden marker validation for `Proposed State Updates`.
- [ ] Tests report both filename and forbidden marker for learner validation violations.
- [ ] Tests document or verify non-markdown learner artifact behavior according to Stage 19.1.
- [ ] Tests clean up temporary artifacts under `tmp/ulos-cli-tests/`.
- [ ] Tests clean up Stage 20 temporary handoff/snapshot artifacts.
- [ ] Existing `node tools/ulos-cli/src/index.js validate` still passes.
- [ ] Existing `node tools/ulos-cli/src/index.js validate-learner` still passes after test cleanup.
- [ ] Generated pack contracts remain unchanged.
- [ ] No new domain is added.
- [ ] Learner-Facing Mentor Mode remains unchanged.
- [ ] Handoff/snapshot commands remain optional and user-requested.
- [ ] No mandatory daily learner-state workflow is introduced.
- [ ] No heavy runtime learner-state system is implemented.
- [ ] No generated pack contract is changed.
- [ ] `git diff --check` is clean.

## Commands

```sh
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node --test tools/ulos-cli/test/*.test.js
cd tools/ulos-cli && npm test
git diff --check
```
