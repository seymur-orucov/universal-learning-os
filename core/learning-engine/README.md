# Learning Engine Specifications

The learning engine defines domain-independent behavior for selecting, running, reviewing, and concluding learning sessions.

## Scope

These specifications describe human-readable contracts only. They do not implement commands, agent skills, schemas, or runtime services.

## Documents

- `SESSION_SELECTION.md`: how a session type is selected.
- `LESSON_STRUCTURE.md`: standard lesson anatomy.
- `PRACTICE_MODEL.md`: domain-independent practice types.
- `ASSESSMENT_MODEL.md`: assessment dimensions.
- `REVIEW_MODEL.md`: review triggers.
- `NEXT_ACTION_MODEL.md`: valid next action categories.

## Relationships

- The lifecycle is governed by `specification/LEARNING_LIFECYCLE.md`.
- Learner state is governed by `specification/STATE_SPEC.md`.
- Domain-specific content is governed by `specification/DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Should the learning engine eventually define a machine-readable session report format?

