# Next Actions

This file defines next action concepts only. It is not real learner data.

## Next Action Structure

- `next_action_id`: stable next action identifier.
- `action_category`: category from `core/learning-engine/NEXT_ACTION_MODEL.md`.
- `domain_id`: referenced domain pack id.
- `target_learning_skill_id_or_track_segment`: referenced learning skill or track segment.
- `reason`: why this action is recommended.
- `prerequisites`: required prior learning skills, evidence, or conditions.
- `priority`: relative urgency.
- `blocking_issues`: missing evidence, prerequisite gaps, unclear goals, or unavailable content.
- `expiration_or_review_guidance`: when to revisit, expire, or recalculate this action.

## Normative Requirements

- Next actions SHOULD align with `core/learning-engine/NEXT_ACTION_MODEL.md`.
- Next actions MUST NOT assume mastery without evidence.
- Advancement SHOULD require sufficient evidence or explicit user override.

## OPEN QUESTION

- Should next actions be generated fresh each session or persisted until resolved?

