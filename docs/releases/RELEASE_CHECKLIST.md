# Release Checklist

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

- [ ] SQL/PostgreSQL domain pack is quality-reviewed.
- [ ] English domain pack is quality-reviewed.

## Generated Packs

- [ ] SQL/PostgreSQL generated pack exists.
- [ ] English generated pack exists.
- [ ] No launch kit files are inside generated pack directories.

## Launch Kits

- [ ] SQL/PostgreSQL setup guide exists.
- [ ] English setup guide exists.
- [ ] Startup prompts are ready to paste.
- [ ] Continuation prompts contain required placeholders.

## Active Learner State

- [ ] `learners/active-learner/` exists.
- [ ] Learner name is not stored.
- [ ] SQL/PostgreSQL state exists.
- [ ] English state exists.
- [ ] Missing evidence is marked honestly.

## Manual Acceptance Tests

- [ ] `tests/manual-acceptance/` contains 11 manual test files.
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

Run:

```sh
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | wc -l
find exports/generated/english-standard -maxdepth 1 -type f | wc -l
```

Expected result:

- SQL/PostgreSQL: 25
- English: 25

## Changelog

- [ ] `CHANGELOG.md` includes Stage 10.7.

## ADR Coverage

- [ ] ADR-0028 exists for release readiness documents.

## Final Approval Placeholder

- Release reviewer:
- Date:
- Status: `<approved | blocked | needs follow-up>`
