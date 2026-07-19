Canonical source: `commands/REVIEW.md`.

# REVIEW Command

## Purpose

Review weak, stale, failed, or user-selected learning skills.

## When to Use

Use this command when the review queue contains items, the learner asks to review, or evidence indicates weak prerequisites or repeated mistakes.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/REVIEW_MODEL.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Review queue, when available.
- User-requested review target, when provided.
- Current learner state and evidence.
- Relevant domain pack.

## Workflow

1. Resolve context from user request, review queue, and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Select review targets using triggers from `core/learning-engine/REVIEW_MODEL.md`.
6. Run targeted review through explanation, practice, or assessment as appropriate.
7. Produce feedback and an optional session report.
8. Propose state updates only when review produces evidence.

## User-Facing Output

The output SHOULD state the review target, reason for review, suggested review type, learner task, feedback, and next action. Review explanation, tasks, and feedback SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Review completion MUST NOT be treated as mastery without evidence.
- User-requested review MAY run even without failure evidence.
- Review items SHOULD retain evidence references when available.

## Failure Modes

- Review queue is missing or empty and no target is provided.
- Review target is not found in the domain pack.
- Evidence does not identify the weakness clearly enough for targeted review.
- Learner asks for advancement while failed prerequisites remain unresolved.

## Relationships

- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- Practice types are defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Learner state review storage is governed by `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should review priority be recalculated during the command or only proposed for future state?
