# Runtime Learner State Strategy

## Summary

Daily learning state is primarily chat-local. The ChatGPT Project is where learning happens. The repository is for framework maintenance, reusable content, generated packs, and optional learner snapshots.

`learners/active-learner/` is not a mandatory daily runtime database. It should not need an update after every lesson.

## Operating Model

```text
ChatGPT Project = learning
Codex/repo = framework maintenance
```

Use ChatGPT learning chats for:

- Current lesson context.
- Recent attempts and feedback.
- Immediate next action.
- Short-term review decisions.
- Temporary evidence discussion when explicitly requested.

Use the repository for:

- Framework contracts.
- Domain packs.
- Commands and reusable agent skills.
- Generated Project Packs.
- Optional learner snapshots when useful.

## Repository Learner State Is Optional

Repository learner state should be snapshot-based. A learner can use generated packs productively without writing repo state after every lesson.

Create or update repo learner state only when:

- the user requests it;
- an assessment or milestone produces a useful summary;
- a handoff is needed before switching chats/projects;
- a periodic review needs durable context.

## Suggested Snapshot Types

- Milestone summary: what was completed and what changed.
- Monthly progress summary: broad progress, recurring weak areas, and next priorities.
- Assessment summary: assessed skills, evidence reviewed, limitations, and recommendations.
- Learner handoff: compact continuation summary for another chat or tool.
- Weak-topic summary: recurring gaps and review priorities.

## Suggested Export Cadence

- On user request.
- After assessments.
- At milestones.
- Before switching projects or long-running chats.
- Before a planned pause in learning.

Do not export after every normal lesson unless the user explicitly asks.

## What Should Stay Out by Default

Never store these unless explicitly requested and necessary:

- Sensitive personal data.
- Private full chat transcripts.
- Unnecessary personal details.
- Raw workplace/client content.
- Credentials, secrets, private URLs, or private code.
- Health, finance, identity, or legal details.

Prefer concise summaries over raw transcripts.

## Learner-Facing Mentor Mode

Normal learner-facing answers should not expose internal progress metadata by default. Keep lessons, practice, review, and homework feedback clean.

Only show evidence/state/proposed updates when explicitly requested through requests such as:

- `SHOW_PROGRESS`.
- evidence summary.
- proposed state update.
- learner handoff.
- continuation prompt.
- progress report.
- debug/audit output.

## Handoff Template

Use `templates/learner-handoff/LEARNER_HANDOFF_TEMPLATE.md` for optional handoffs. Evidence and state sections in that template are optional and should be filled only for explicit progress/handoff use.

## Practical Rule

If the learner is simply continuing daily learning, keep state in the chat. If the learner asks to preserve progress, switch projects, or summarize an assessment, create a compact handoff or snapshot.
