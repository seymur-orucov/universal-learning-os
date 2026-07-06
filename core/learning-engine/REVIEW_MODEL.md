# Review Model

## Purpose

Define domain-independent triggers for review.

## Scope

This model defines why review should be scheduled. It does not define spaced-repetition algorithms or concrete review intervals.

## Review Triggers

- Weak learning skill: state or evidence shows low confidence, partial performance, or dependency risk.
- Failed assessment: the learner did not meet assessment criteria.
- Stale learning skill: a previously demonstrated learning skill has not been used or reviewed recently.
- Upcoming prerequisite: a learning skill is needed before planned progression.
- Repeated mistake: the same error pattern appears across attempts.
- User-requested review: the learner explicitly asks to revisit material.

## Review Item Fields

Review items SHOULD include:

- Target learning skill: the competency or concept requiring review.
- Reason: the trigger or rationale for review.
- Priority: relative urgency or ordering guidance.
- Suggested review type: the recommended practice or review approach.
- Evidence reference: the supporting evidence, when available.

## Normative Requirements

- Review items SHOULD reference the trigger that created them.
- Review items SHOULD reference relevant learning skills, evidence, or assessment results when available.
- Failed assessments and repeated mistakes SHOULD create targeted review rather than generic repetition.
- User-requested review MAY be scheduled even without failure evidence.
- Review scheduling MUST NOT imply mastery loss without evidence or an explicit stale-learning-skill policy.

## Relationships

- Learner state review storage is described by `specification/STATE_SPEC.md`.
- Practice types are described by `core/learning-engine/PRACTICE_MODEL.md`.
- Next action categories are described by `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- What stale-learning-skill policy should be used before domain-specific decay rules exist?
