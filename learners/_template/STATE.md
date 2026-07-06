# Learner State

This file defines conceptual learner state structure only. It is not real learner data.

## State Structure

- `state_version`: state contract version.
- `learner_profile_ref`: reference to `learners/_template/PROFILE.md` or future learner profile.
- `active_tracks`: active domain packs, tracks, goals, or learning paths.
- `learning_skill_records`: learner-specific records that reference domain learning skills.
- `evidence_log_ref`: reference to evidence records.
- `review_queue_ref`: reference to review items.
- `session_history_ref`: reference to session history.
- `next_actions_ref`: reference to proposed next actions.
- `state_integrity_notes`: known inconsistencies, missing evidence, or migration concerns.

## Normative Requirements

- `learning_skill_records` MUST reference domain learning skills and MUST NOT redefine those learning skills.
- Learner state MUST NOT duplicate reusable domain pack content.
- Mastery records MUST reference evidence or explicit user instruction.
- Missing evidence MUST be reported honestly.

## Relationships

- Domain learning skills are defined by domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should active tracks store human-readable names or only domain pack references?

