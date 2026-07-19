# Progress Manager Skill

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: skills/progress-manager/SKILL.md

# Progress Manager Agent Skill

## Purpose

Summarize learner progress and manage proposed next actions.

## Responsibilities

- Read learner state.
- Summarize active tracks and learning skill records.
- Summarize evidence coverage and review queue.
- Identify missing or inconsistent state.
- Propose next actions.
- Propose state updates only when evidence allows.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/NEXT_ACTION_MODEL.md`
- `core/learning-engine/REVIEW_MODEL.md`

## Inputs

- Learner state or progress scope.
- Relevant domain pack labels or track context.
- Evidence log, review queue, and session history when available.

## Outputs

- Progress summary.
- Missing evidence or inconsistency report.
- Review and next-action recommendations.
- Proposed evidence-backed state updates, when appropriate.

## Workflow

1. Resolve requested progress scope.
2. Load state, review, next-action, and localization rules.
3. Read learner state without silently modifying it.
4. Summarize tracks, learning skill records, evidence, review items, and next actions.
5. Identify missing or inconsistent state.
6. Propose next actions or state updates only when justified.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT silently modify learner state.
- It MUST NOT hide missing evidence.
- It MUST NOT present planned lessons as completed progress.

## Evidence and State Rules

- Progress summaries MUST distinguish evidence-backed mastery from assumptions.
- State updates SHOULD be proposed rather than silently applied.
- Missing evidence MUST be reported when mastery claims depend on it.

## Localization Rules

- Progress summaries SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.

## Failure Modes

- Learner state is missing.
- Evidence references are incomplete.
- Review queue or session history is inconsistent.
- Domain pack context needed for labels is unavailable.

## Related Commands

- `commands/SHOW_PROGRESS.md`
- `commands/START_LESSON.md`
- `commands/REVIEW.md`
- `commands/ASSESS.md`

## Relationships

- Learner state rules are defined in `specification/STATE_SPEC.md`.
- Next actions are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.

## OPEN QUESTION

- Should progress summaries include a standardized evidence completeness score?
