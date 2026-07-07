# Manual Acceptance Test Plan

## Test Scope

Validate generated Project Packs, launch kits, active learner state, continuation flows, deleted-chat recovery, localization behavior, and evidence/mastery guardrails.

## Out of Scope

- Executable automation.
- Schema validation.
- Real ChatGPT product API testing.
- Creating new domain packs.
- Modifying generated pack directories.
- Creating fake learner progress.

## Test Artifacts

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/project-launch-kits/`
- `learners/active-learner/`

## Test Environments

- Local repository inspection.
- Optional manual ChatGPT Project upload.

## Preconditions

- Both generated pack directories exist.
- Each generated pack directory contains exactly 25 files.
- Active learner state exists under `learners/active-learner/`.
- Launch kit files exist under `exports/generated/project-launch-kits/`.

## Pass/Fail Criteria

- PASS: expected behavior is observed without violating file budget, evidence/mastery, localization, privacy, or learner-state boundaries.
- FAIL: assistant invents prior context, claims mastery without evidence, stores sensitive data, modifies reusable pack content as learner state, or violates localization expectations.

## Manual Test Execution Order

1. File budget test.
2. SQL startup smoke test.
3. English startup smoke test.
4. Continuation flow test.
5. Deleted chat recovery test.
6. Learner state update test.
7. Evidence/mastery guardrail test.
8. Localization guardrail test.
9. Final acceptance checklist.

## Risks

- Manual validation may miss drift between generated packs and canonical files.
- ChatGPT Project upload behavior may vary by file-count rules.
- Product behavior may change before automation exists.

## Known Limitations

- Tests are documentation-only.
- Results are not stored in a machine-readable format.
- No automated pass/fail command exists.
