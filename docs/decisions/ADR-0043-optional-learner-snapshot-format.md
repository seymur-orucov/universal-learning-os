# ADR-0043: Optional Learner Snapshot Format

## Status

Accepted for Stage 18.2.

## Context

Stage 18.0 defined runtime learner state as chat-local by default. Stage 18.1 defined a learner handoff export model for moving between ChatGPT Project chats. Learners may also want a more durable progress artifact for milestones, assessments, periodic summaries, or explicit progress export.

The operating rule remains:

```text
ChatGPT Project = learning
Codex/repo = framework maintenance
```

Daily learning progress remains in ChatGPT chats by default. Repository learner snapshots are optional, periodic, and user-requested.

## Decision

Define an optional learner snapshot format as documentation and templates only. A snapshot is a concise durable progress record that may be stored under `learners/active-learner/snapshots/` when the user explicitly wants repository persistence.

Stage 18.2 does not implement CLI commands, validation schemas, automatic export, or a runtime learner-state system.

## Snapshot Purpose

Snapshots preserve useful progress context at meaningful points without requiring repository updates after every lesson. They support:

- milestone archives;
- assessment summaries;
- monthly or periodic progress summaries;
- weak-topic summaries;
- durable context before switching chats or projects.

## Difference Between Handoff and Snapshot

- Handoff: short continuation summary optimized for pasting into a new ChatGPT Project chat.
- Snapshot: durable progress record optimized for optional repository storage and later review.

A handoff can be temporary and chat-facing. A snapshot should be more durable, dated, scoped, and safe to keep.

## When Snapshots Should Be Created

- On explicit user request.
- After assessments.
- After major milestones.
- Monthly or periodically.
- Before switching projects/chats if the learner wants durable progress.

## When Snapshots Should Not Be Created

- After every normal lesson by default.
- When the learner did not request durable progress storage.
- When the available context is too weak to summarize honestly.
- When the snapshot would store sensitive data unnecessarily.

## Required Snapshot Fields

- Snapshot type.
- Domain.
- Date.
- Scope.
- Completed topics.
- Current strengths.
- Current weak areas.
- Recommended next actions.
- Source note.

## Optional Snapshot Fields

- Evidence summary.
- Assessment result.
- Review queue.
- Open blockers/questions.
- Suggested next milestone.
- Handoff-ready summary.

Optional fields should be included only when useful and explicitly appropriate.

## Privacy and Sensitive-Data Guardrails

- Do not store sensitive personal data unless explicitly requested and necessary.
- Do not store full private chat transcripts by default.
- Avoid unnecessary personal details.
- Avoid raw workplace/client content, credentials, private URLs, private code, health, finance, identity, legal, or other sensitive details.
- Prefer concise summaries over raw messages.

## Relationship to `learners/active-learner/`

Snapshots may be stored under `learners/active-learner/snapshots/` only when the user explicitly wants repository persistence. This directory is optional snapshot storage, not a mandatory runtime database.

## Relationship to Generated Packs

Stage 18.2 does not change generated pack contracts:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.
- Evidence/state/proposed updates remain hidden by default in normal learner-facing answers.

## Relationship to Future CLI Commands

Future stages may add optional CLI commands for snapshot generation, handoff export, learner-state validation, import-from-handoff, or progress summary generation. Stage 18.2 defines the format only.

## Consequences

- Learners can preserve milestone progress without daily repository updates.
- Snapshots have a consistent structure for future tooling.
- The repository remains framework-maintenance oriented.
- Sensitive data boundaries remain explicit.

## Non-Goals for Stage 18.2

- No new domain.
- No generated pack contract change.
- No CLI runtime command.
- No heavy runtime learner-state system.
- No mandatory daily learner-state update workflow.
- No automatic snapshot generation.
- No schema or validator implementation.
