# Stage 32.0 Front-End Testing Domain Test

## Scope

Verify that `frontend-testing` is the only Stage 32.0 domain addition and remains compatible with the current registry-driven CLI, exact 25/5 pack contracts, learner helpers, generic lesson exports, and optional CLI-backed Studio.

## Automated Preconditions

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain frontend-testing --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain frontend-testing --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile compact --dry-run
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node --test tools/ulos-cli/test/*.test.js
```

Expected: ten domains, twenty packs, exactly 25 standard files, exactly five compact files, and all commands exit successfully.

## Manual Behavior

Use `tests/manual-acceptance/frontend-testing/ACCEPTANCE_CHECKLIST.md` and `REAL_LEARNING_PILOT.md`.

- Confirm explanation and mental model appear before exercises.
- Confirm unit, component, integration, and E2E ownership is risk-based.
- Confirm MSW controls the HTTP boundary and Playwright uses resilient locators plus auto-waiting rather than fixed sleeps.
- Confirm Azerbaijani explanations preserve English technical terminology.
- Confirm normal teaching hides internal evidence, state, pack, and debug metadata.
- Confirm mastery requires learner decisions, implementation, debugging, review, strategy, and capstone evidence.

## Studio

Run the existing Studio build, bridge smoke, and health smoke. No Front-End Testing-specific Studio screen or bridge command should exist; the domain should appear through the dynamic CLI-backed registry.
