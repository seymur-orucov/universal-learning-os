# Stage 18.1 Learner Handoff Export Test

## Purpose

Verify the learner handoff export model is documented as an optional, user-requested workflow that does not change generated pack contracts or require daily repository updates.

## Test 1: Handoff Model Exists

Expected file:

```text
docs/learner-state/LEARNER_HANDOFF_EXPORT_MODEL.md
```

## Test 2: Handoff Example Exists

Expected file:

```text
templates/learner-handoff/LEARNER_HANDOFF_EXAMPLE.md
```

## Test 3: Required Fields Are Documented

Expected required fields:

- Domain.
- Current lesson/topic.
- Last completed activity.
- Completed topics.
- Current strengths.
- Current weak areas.
- Recommended next action.
- Mentor behavior reminders.

## Test 4: Optional Evidence and Progress Fields Are Optional

Expected: evidence summary, assessment snapshot, suggested review queue, explicit user preferences, and open questions/blockers are documented as optional.

## Test 5: No Daily Repo Update Requirement

Expected: docs state daily learning progress remains chat-local by default and handoff export is optional and user-requested.

## Test 6: Generated Pack Contracts Unchanged

Expected:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- No generated pack files are renamed or removed.

## Test 7: Sensitive Data Guardrail

Expected: docs warn against including sensitive personal data, private full chat transcripts, unnecessary personal details, credentials, private workplace/client details, or raw private content by default.

## Test 8: Internal Metadata Hidden by Default

Expected: docs warn against exposing internal skill IDs, YAML state patches, debug/audit metadata, generated pack implementation details, or evidence/state/proposed updates by default.

## Test 9: Validation Still Passes

Run:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: all eight generated packs pass validation.

## Test 10: No New Domain

Run:

```sh
node tools/ulos-cli/src/index.js list-domains
```

Expected: exactly `sql-postgresql`, `english`, `javascript`, and `typescript` are listed.
