# ADR-0041: Runtime Learner State Strategy

## Status

Accepted for Stage 18.0.

## Context

After `v0.2.0`, Universal Learning OS supports generated standard and compact Project Packs for four domains. The intended use pattern is now clearer:

- ChatGPT Project = learning.
- Codex/repo = framework maintenance.

Daily learning can happen inside ChatGPT learning chats without updating repository files after every lesson. The repository still needs a documented strategy for learner state so agents do not accidentally turn `learners/active-learner/` into a mandatory runtime database or store sensitive personal data.

## Decision

Runtime learner state is primarily chat-local during daily learning. Repository learner state is optional, snapshot-based, and updated only when the user explicitly requests it or when a periodic handoff/export is useful.

Generated packs remain reusable, learner-neutral artifacts. They may ask whether learner state or a prior session summary exists, but they do not require repository state updates after every lesson.

## What Stays Inside ChatGPT Learning Chats

- Current lesson flow.
- Short-term context for the active chat.
- The learner's latest task attempts and feedback.
- Immediate next action.
- Informal progress understanding for the active session.
- Metadata such as evidence or proposed state updates only when explicitly requested.

## What Belongs in `learners/active-learner/`

`learners/active-learner/` is optional snapshot storage, not a mandatory daily runtime database. It may contain:

- Milestone summaries.
- Monthly progress summaries.
- Assessment summaries.
- Learner handoffs.
- Weak-topic summaries.
- Explicitly approved learner preferences.

Any update must respect `specification/STATE_SPEC.md` and `specification/LEARNING_LIFECYCLE.md`.

## What Codex/Repo Should Update

Codex or repository-maintenance agents may update:

- Framework specifications and docs.
- Domain packs.
- Commands and reusable agent skills.
- Generated packs when explicitly regenerating release artifacts.
- Learner snapshots only when the user explicitly requests a repository update and provides enough evidence or summary context.

## What Codex/Repo Should Not Update

Codex or repository-maintenance agents should not:

- Record daily lesson progress automatically.
- Mark skills mastered from lesson exposure.
- Copy private chat transcripts into the repository by default.
- Store sensitive personal data.
- Convert generated packs into learner-specific state.
- Expose `Evidence Generated`, `Proposed State Updates`, YAML learner state updates, or internal metadata in normal learner-facing answers.

## Optional Periodic Progress Export

Progress export is optional and user-directed. Useful export moments include:

- On explicit user request.
- After assessments.
- At milestones.
- Monthly or periodic reviews.
- Before switching projects, domains, or long chats.

Exports should be concise summaries, not full transcripts.

## Learner Handoff Strategy

Learner handoff should use a compact summary that helps a future chat continue safely. A reusable template lives at `templates/learner-handoff/LEARNER_HANDOFF_TEMPLATE.md`.

Handoffs should separate:

- Current topic.
- Completed topics.
- Strengths and weak areas.
- Last task.
- Recommended next action.
- Mentor behavior and explicit user preferences.
- Optional evidence summary.
- Optional state snapshot.

Evidence and state fields are optional and should be used only for explicit progress/handoff requests.

## Privacy and Sensitive-Data Guardrails

- Do not store sensitive personal data unless the user explicitly requests it and understands the risk.
- Do not store private full chat transcripts by default.
- Do not store unnecessary personal details.
- Prefer minimal summaries over raw conversations.
- Remove or generalize workplace, client, credential, health, financial, or identity-sensitive details.

## Impact on Generated Packs

Stage 18.0 does not change generated pack contracts:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Learner-Facing Mentor Mode remains unchanged.
- Generated packs remain learner-neutral.
- Evidence/state/proposed updates remain hidden by default in normal learner-facing answers.

## Consequences

- Daily learning is lower friction because repository updates are not required after every lesson.
- The repository stays focused on framework maintenance and reusable content.
- Learner state remains evidence-based and optional.
- Future tooling can add snapshot helpers without changing the core pack contract.

## Non-Goals for Stage 18.0

- No runtime learner-state implementation.
- No app or dashboard.
- No new domain.
- No generated pack contract change.
- No mandatory daily state update workflow.
- No automatic import/export command.
- No schema or validator for learner snapshots.
