# Acceptance Checklist

## Repository Structure Checks

- [ ] `tests/manual-acceptance/` exists.
- [ ] `exports/generated/project-launch-kits/` exists.
- [ ] `learners/active-learner/` exists.

## Pack File Budget Checks

- [ ] SQL/PostgreSQL standard pack has exactly 25 files.
- [ ] English standard pack has exactly 25 files.
- [ ] JavaScript standard pack has exactly 25 files.
- [ ] TypeScript standard pack has exactly 25 files.
- [ ] SQL/PostgreSQL compact pack has exactly 5 files.
- [ ] English compact pack has exactly 5 files.
- [ ] JavaScript compact pack has exactly 5 files.
- [ ] TypeScript compact pack has exactly 5 files.
- [ ] No launch kit files are inside generated pack directories.
- [ ] No learner state files are inside generated pack directories.

## Launch Kit Checks

- [ ] Standard and compact launch kit files exist for SQL/PostgreSQL.
- [ ] Standard and compact launch kit files exist for English.
- [ ] Standard and compact launch kit files exist for JavaScript.
- [ ] Standard and compact launch kit files exist for TypeScript.
- [ ] Startup prompts are ready to paste.
- [ ] Continuation prompts contain required placeholders.

## Active Learner State Checks

- [ ] `learners/active-learner/PROFILE.md` avoids personal identifiers.
- [ ] SQL state exists.
- [ ] English state exists.
- [ ] Session handoff exists.
- [ ] Missing evidence is marked honestly.

## SQL Runtime Behavior Checks

- [ ] Uses Azerbaijani explanations.
- [ ] Keeps SQL/PostgreSQL terms in English.
- [ ] Checks learner state.
- [ ] Starts review, assessment, or appropriate lesson.

## English Runtime Behavior Checks

- [ ] Uses Azerbaijani explanations.
- [ ] Keeps English examples in English.
- [ ] Prioritizes speaking-first learning.
- [ ] Does not claim speaking mastery without learner production evidence.

## Continuation Behavior Checks

- [ ] Uses provided handoff only.
- [ ] Reports missing state honestly.
- [ ] Produces next handoff.

## Deleted Chat Recovery Checks

- [ ] Does not claim deleted chats can be restored.
- [ ] Reconstructs only from provided summaries/evidence.
- [ ] Uses review or assessment when evidence is insufficient.

## Evidence/Mastery Checks

- [ ] Does not mark mastery from lesson exposure.
- [ ] Does not mark mastery from file inclusion or project setup.
- [ ] Uses `not enough evidence` for missing evidence.

## Localization Checks

- [ ] SQL localization preserves SQL terms.
- [ ] English localization preserves English target output.
- [ ] Localization defaults remain project-specific.

## Privacy Checks

- [ ] No sensitive personal data is stored.
- [ ] No private workplace content is stored without explicit summary and approval.

## Final Release Readiness Status

`<ready | blocked | needs follow-up>`

## v0.2.0 Release Readiness

- [ ] `docs/releases/v0.2.0.md` exists.
- [ ] `docs/releases/V0_2_0_RELEASE_CHECKLIST.md` exists.
- [ ] `docs/releases/RELEASE_CHECKLIST.md` exists.
- [ ] `docs/releases/KNOWN_LIMITATIONS.md` exists.
- [ ] `docs/releases/NEXT_ROADMAP.md` exists.
- [ ] `node tools/ulos-cli/src/index.js validate` passes.
