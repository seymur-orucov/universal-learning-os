# Review Queue

This file defines review item concepts only. It is not real learner data.

## Review Item Structure

- `review_item_id`: stable review item identifier.
- `domain_id`: referenced domain pack id.
- `target_learning_skill_id`: referenced domain learning skill id.
- `reason`: weak learning skill, failed assessment, stale learning skill, upcoming prerequisite, repeated mistake, or user-requested review.
- `priority`: relative urgency.
- `suggested_review_type`: recall, guided, independent, mixed, error-based, project-based, or interview-style review.
- `evidence_reference`: supporting evidence when available.
- `due_guidance`: timing or sequencing guidance.
- `status`: proposed, active, completed, deferred, or blocked.

## Normative Requirements

- Review items SHOULD align with `core/learning-engine/REVIEW_MODEL.md`.
- Review completion MUST NOT imply mastery without evidence.
- Review items SHOULD reference evidence when available.

## OPEN QUESTION

- Should review priority use fixed framework values or learner-specific ordering?

