# Learner State Template

This directory is a reference structure for future learner state files. It is not real learner data.

## Files

- `PROFILE.md`: learner profile concepts, goals, preferences, localization preferences, constraints, and privacy notes.
- `STATE.md`: conceptual learner state index and references to state subdocuments.
- `EVIDENCE_LOG.md`: evidence record structure for learner activity and reviewed outputs.
- `REVIEW_QUEUE.md`: review item structure aligned with review triggers.
- `SESSION_HISTORY.md`: session report and history structure.
- `NEXT_ACTIONS.md`: proposed next action structure.

## Relationships

- Learner state rules are defined in `specification/STATE_SPEC.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Review behavior is defined in `core/learning-engine/REVIEW_MODEL.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should learner state be stored as one file or split across multiple files once YAML schemas exist?

