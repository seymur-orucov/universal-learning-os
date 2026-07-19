# Release Checklist

For `v0.2.0`, use `docs/releases/V0_2_0_RELEASE_CHECKLIST.md` as the focused release checklist. This file remains the general repository release checklist.

## Repository Structure

- [ ] `specification/` exists.
- [ ] `core/` exists.
- [ ] `commands/` exists.
- [ ] `skills/` exists.
- [ ] `domains/` exists.
- [ ] `exports/generated/` exists.
- [ ] `learners/active-learner/` exists.
- [ ] `tests/manual-acceptance/` exists.

## Canonical Specs

- [ ] Framework, command, skill, domain pack, state, lifecycle, and localization specs exist.
- [ ] Core learning and mastery models exist.

## Commands

- [ ] Selected generated pack command summaries preserve command boundaries.
- [ ] Commands are not treated as agent skills.

## Agent Skills

- [ ] Selected generated pack agent skill summaries preserve agent skill boundaries.
- [ ] Agent skills are not treated as learning skills.

## Domain Packs

- [ ] SQL/PostgreSQL domain pack is present.
- [ ] English domain pack is present.
- [ ] JavaScript domain pack is present.
- [ ] TypeScript domain pack is present.

## Generated Packs

- [ ] Standard generated packs exist for all supported domains.
- [ ] Compact generated packs exist for all supported domains.
- [ ] Standard packs have exactly 25 files.
- [ ] Compact packs have exactly 5 files.
- [ ] No launch kit files are inside generated pack directories.

## Launch Kits

- [ ] Standard and compact setup guides exist for all supported domains.
- [ ] Startup prompts are ready to paste.
- [ ] Continuation prompts contain required placeholders.

## Active Learner State

- [ ] `learners/active-learner/` exists.
- [ ] Learner name is not stored.
- [ ] SQL/PostgreSQL state exists.
- [ ] English state exists.
- [ ] Missing evidence is marked honestly.

## Manual Acceptance Tests

- [ ] `tests/manual-acceptance/` contains current manual test files.
- [ ] Acceptance checklist exists.

## Evidence/Mastery Guardrails

- [ ] No mastery is claimed from lesson exposure.
- [ ] No mastery is claimed from file inclusion or project setup.
- [ ] `not enough evidence` is used when evidence is missing.

## Localization Guardrails

- [ ] SQL/PostgreSQL project supports Azerbaijani instruction with English SQL/PostgreSQL terms.
- [ ] English project supports Azerbaijani instruction with English target language.
- [ ] Localization remains project-specific.

## Privacy Guardrails

- [ ] No sensitive personal data is stored.
- [ ] No private workplace content is stored without explicit summary and approval.
- [ ] Audio/transcript storage is not required by default.

## File Budget Checks

Run the official quality gate:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected result:

- All standard packs: exactly 25 files.
- All compact packs: exactly 5 files.
- All launch kit checks pass.

## Changelog

- [ ] `CHANGELOG.md` includes `v0.2.0`.

## ADR Coverage

- [ ] ADR-0039 exists for v0.2.0 release hardening.

## Final Approval Placeholder

- Release reviewer:
- Date:
- Status: `<approved | blocked | needs follow-up>`
