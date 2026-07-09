# Optional Learner Snapshot Format

## What a Learner Snapshot Is

A learner snapshot is a concise, durable progress summary created when the learner explicitly wants to export or preserve progress. It is suitable for optional repository storage, milestone review, assessment archiving, or future continuation planning.

Daily learning progress remains chat-local by default.

## What a Learner Snapshot Is Not

A learner snapshot is not:

- a mandatory daily runtime database;
- a full private chat transcript;
- a generated Project Pack file;
- proof of mastery without evidence;
- a replacement for the learning chat;
- an automatic repository update after every lesson.

## Recommended Snapshot Cadence

Create snapshots:

- on user request;
- after assessments;
- after major milestones;
- monthly or periodically;
- before switching projects/chats if the learner wants durable progress.

Do not create snapshots after every normal lesson unless explicitly requested.

## Suggested Location

```text
learners/active-learner/snapshots/
```

This location is optional. A learner may keep snapshots outside the repository if preferred.

## Suggested Filename Pattern

```text
<domain>-snapshot-YYYY-MM-DD.md
<domain>-milestone-<slug>-YYYY-MM-DD.md
<domain>-assessment-YYYY-MM-DD.md
```

Examples:

```text
sql-postgresql-snapshot-2026-07-09.md
typescript-milestone-generics-basics-2026-07-09.md
english-assessment-2026-07-09.md
```

## Required Fields

### Snapshot Type

Examples: milestone summary, monthly progress summary, assessment summary, weak-topic summary.

### Domain

The learning domain, such as `SQL/PostgreSQL`, `English`, `JavaScript`, or `TypeScript`.

### Date

The snapshot date.

### Scope

What period, milestone, assessment, or topic range the snapshot covers.

### Completed Topics

Topics completed or meaningfully reviewed during the snapshot scope.

### Current Strengths

Observed strengths based on recent learner work.

### Current Weak Areas

Known weak areas, misconceptions, or review needs.

### Recommended Next Actions

Concrete next steps for continued learning.

### Source Note

A short note describing where the summary came from, such as a learner-requested summary, assessment result, milestone review, or chat handoff. Do not include full private transcript content by default.

## Optional Fields

Use these only when useful and explicitly appropriate.

### Evidence Summary

Concise summary of reviewed learner evidence.

### Assessment Result

Assessment outcome, limitations, and what cannot yet be concluded.

### Review Queue

Topics or skills that should be reviewed soon.

### Open Blockers/Questions

Missing context, blockers, or unresolved questions.

### Suggested Next Milestone

The next milestone or checkpoint to target.

### Handoff-Ready Summary

A short paste-ready continuation summary for a future ChatGPT Project chat.

## Fields to Avoid Unless Explicitly Requested

- Full private chat transcript.
- Sensitive personal details.
- Unnecessary personal details.
- Internal skill IDs.
- YAML state patches.
- Debug/audit metadata.
- Generated pack implementation details.

## Safety Requirements

- Keep snapshots concise.
- Store only durable learning context.
- Avoid sensitive personal data by default.
- Separate observed evidence from recommendations.
- Do not claim mastery from lesson exposure alone.
- Do not require repository updates after every lesson.

Snapshots should be concise, durable, and safe to store in the repository when the user explicitly wants that.
