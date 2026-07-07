# Learner State Boundaries

## Boundary

This Project Pack is reusable content. Learner state is mutable learner-specific progress data and MUST remain separate.

## Runtime Learner State May Record

- `state_version`
- `learner_profile_ref`
- `active_tracks`
- `learning_skill_records`
- `evidence_log`
- `review_queue`
- `session_history`
- `next_actions`

## After Each Evidence-Producing Session

Record or propose:

- Session summary.
- Command used.
- Domain id and active track.
- Target learning skill.
- Learner output summary.
- Evidence generated.
- Feedback and weak areas.
- Proposed state updates.
- Review queue additions.
- Next action.

## Required Behavior

- Learner state MUST be learner-specific.
- Reusable SQL/PostgreSQL domain content MUST NOT be duplicated into learner state.
- Mastery records MUST reference evidence or explicit user instruction.
- Review queue items SHOULD come from weak learning skills, stale learning skills, failed assessments, repeated mistakes, or upcoming prerequisites.
- Missing evidence MUST be reported honestly.

## Canonical Sources

Derived from `specification/STATE_SPEC.md` and `learners/_template/`.
