# Stage 18.2 Optional Learner Snapshot Test

## Purpose

Verify the optional learner snapshot format is documented as a periodic, user-requested workflow that does not change generated pack contracts or introduce runtime commands.

## Test 1: Snapshot Strategy Exists

Expected file:

```text
docs/learner-state/OPTIONAL_LEARNER_SNAPSHOT_FORMAT.md
```

## Test 2: Snapshot Template Exists

Expected file:

```text
templates/learner-snapshot/LEARNER_SNAPSHOT_TEMPLATE.md
```

## Test 3: Snapshot Example Exists

Expected file:

```text
templates/learner-snapshot/LEARNER_SNAPSHOT_EXAMPLE.md
```

## Test 4: Required Fields Are Documented

Expected required fields:

- Snapshot type.
- Domain.
- Date.
- Scope.
- Completed topics.
- Current strengths.
- Current weak areas.
- Recommended next actions.
- Source note.

## Test 5: Optional Evidence and Progress Fields Are Optional

Expected: evidence summary, assessment result, review queue, open blockers/questions, suggested next milestone, and handoff-ready summary are documented as optional.

## Test 6: No Daily Repo Update Requirement

Expected: docs state snapshots are optional, periodic, user-requested, and not required after every lesson.

## Test 7: Generated Pack Contracts Unchanged

Expected:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- No generated pack files are renamed or removed.

## Test 8: Sensitive Data Guardrail

Expected: docs warn against storing sensitive personal data, full private chat transcripts, unnecessary personal details, credentials, private workplace/client details, or raw private content by default.

## Test 9: Internal Metadata Hidden by Default

Expected: docs warn against exposing internal skill IDs, YAML state patches, debug/audit metadata, generated pack implementation details, or evidence/state/proposed updates by default.

## Test 10: Validation Still Passes

Run:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: all eight generated packs pass validation.

## Test 11: No New Domain

Run:

```sh
node tools/ulos-cli/src/index.js list-domains
```

Expected: exactly `sql-postgresql`, `english`, `javascript`, and `typescript` are listed.

## Test 12: No CLI Runtime Command Implemented

Expected: Stage 18.2 adds documentation/templates/manual acceptance only. No snapshot generation, handoff export, learner-state import, or learner-state validation CLI command is added.
