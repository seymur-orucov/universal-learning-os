# ADR-0042: Learner Handoff Export Model

## Status

Accepted for Stage 18.1.

## Context

Stage 18.0 established that daily learning state is primarily chat-local and that repository learner state is optional and snapshot-based. Learners still need a safe way to move between ChatGPT Project chats, resume after a long/deleted chat, or periodically export progress without turning the repository into a mandatory daily runtime database.

The operating rule remains:

```text
ChatGPT Project = learning
Codex/repo = framework maintenance
```

## Decision

Define a canonical learner handoff export model. Handoff export is optional, concise, learner-facing, and user-requested. It is not a generated pack contract, not a CLI runtime command, and not a required repository update after every lesson.

## Handoff Purpose

A handoff helps a future chat or tool continue safely with enough context to choose the next learning action. It should summarize where the learner is, what was recently completed, current strengths and weak areas, and the recommended next action.

## Required Handoff Fields

- Domain.
- Current lesson/topic.
- Last completed activity.
- Completed topics.
- Current strengths.
- Current weak areas.
- Recommended next action.
- Mentor behavior reminders.

## Optional Handoff Fields

- Evidence summary.
- Assessment snapshot.
- Suggested review queue.
- Explicit user preferences.
- Open questions/blockers.

Optional fields should be included only when useful for an explicit handoff, progress export, assessment summary, or learner request.

## What Must Not Be Included by Default

- Full private chat transcripts.
- Sensitive personal details.
- Internal skill IDs.
- YAML state patches.
- Debug/audit metadata.
- Generated pack implementation details.

## Evidence and Progress Metadata

Evidence/progress metadata is not shown in normal learner-facing answers by default. A handoff may include a concise evidence summary when explicitly requested or when the learner asks for a progress export. Proposed state updates and YAML state patches remain out of normal handoffs unless specifically requested.

## Privacy and Sensitive-Data Guardrails

- Do not include sensitive personal data unless the user explicitly requests it and it is necessary.
- Do not include private full chat transcripts by default.
- Prefer summarized evidence over raw learner messages.
- Remove or generalize workplace, client, credential, health, finance, identity, legal, or private code details.

## Relationship to `learners/active-learner/`

`learners/active-learner/` remains optional snapshot storage. A handoff can be pasted into a future chat without being committed to the repository. If the user explicitly asks to store a snapshot in the repository, the update must follow `specification/STATE_SPEC.md` and `specification/LEARNING_LIFECYCLE.md`.

## Relationship to Generated Packs

Stage 18.1 does not change generated pack contracts:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.

Generated packs may support handoff requests through normal conversation, but handoff export remains optional and user-requested.

## Relationship to Future CLI Commands

Future stages may add optional CLI helpers for handoff export, import-from-handoff, learner snapshot formatting, or learner-state validation. Stage 18.1 defines the model only and does not implement commands.

## Consequences

- Learners can move between chats without requiring repository writes.
- Handoffs stay concise and safe to paste into a new ChatGPT Project chat.
- Evidence can be summarized when explicitly requested without exposing internal metadata by default.
- Future tooling has a documented target format.

## Non-Goals for Stage 18.1

- No new domain.
- No generated pack contract change.
- No CLI runtime command.
- No heavy runtime learner-state system.
- No mandatory daily learner-state update workflow.
- No storage of sensitive personal data.
