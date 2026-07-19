# Learner Handoff Export Model

## Purpose

A learner handoff is a concise, safe summary for continuing learning in another ChatGPT Project chat, after a long/deleted chat, or after a periodic progress export request.

Daily learning progress remains chat-local by default. Handoff export is optional and user-requested.

## When to Create a Handoff

Create a handoff when:

- the learner asks for a continuation handoff;
- the learner is switching chats or projects;
- a long chat may become hard to continue;
- an assessment or milestone needs a concise summary;
- the learner explicitly asks to export progress.

## When Not to Create a Handoff

Do not create a handoff when:

- the learner is simply continuing the current lesson;
- the learner did not ask for progress export or continuation context;
- creating the handoff would expose sensitive details unnecessarily;
- there is not enough context to summarize honestly.

Do not require repository updates after every lesson.

## Required Fields

### Domain

The learning domain, such as `SQL/PostgreSQL`, `English`, `JavaScript`, or `TypeScript`.

### Current Lesson/Topic

The current lesson, concept, or skill being studied.

### Last Completed Activity

The latest meaningful learner activity and its result.

### Completed Topics

A short list of topics completed or recently reviewed.

### Current Strengths

Observed strengths based on recent learner work.

### Current Weak Areas

Known weak areas, misconceptions, or review needs.

### Recommended Next Action

One practical next step for the next chat.

### Mentor Behavior Reminders

Short reminders that preserve learner-facing behavior, evidence-based mastery, and metadata visibility guardrails.

## Optional Fields

Use these only when helpful and explicitly appropriate for a handoff, progress export, or assessment summary.

### Evidence Summary

A concise summary of reviewed learner evidence. Do not include raw private transcript content by default.

### Assessment Snapshot

Assessment outcome, limitations, and what cannot yet be concluded.

### Suggested Review Queue

Topics or skills that should be reviewed soon.

### Explicit User Preferences

Known user preferences such as instruction language, terminology language, pacing, or practice style.

### Open Questions/Blockers

Questions, blockers, missing context, or unresolved decisions.

## Fields to Avoid Unless Explicitly Requested

- Full private chat transcript.
- Sensitive personal details.
- Internal skill IDs.
- YAML state patches.
- Debug/audit metadata.
- Generated pack implementation details.

## Metadata Handling

Normal handoffs should be concise, learner-facing, and safe to paste into a new ChatGPT Project chat. They should not expose internal evidence/state/proposed-update metadata by default.

If the learner explicitly requests a progress handoff, include only the minimum useful evidence summary and clearly separate observed evidence from recommendations.

## Relationship to Repository State

A handoff can remain entirely outside the repository. It may be pasted into a future ChatGPT chat. Storing a handoff under `learners/active-learner/` is optional and should happen only on explicit user request.

## Safe Handoff Checklist

- Required fields are present.
- Optional evidence/progress fields are clearly optional.
- No sensitive personal data is included by default.
- No full private transcript is included by default.
- No internal metadata is exposed by default.
- The next action is clear.
- The handoff can be pasted into a new ChatGPT Project chat.
