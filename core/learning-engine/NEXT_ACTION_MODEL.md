# Next Action Model

## Purpose

Define valid categories for the next recommended learning action.

## Scope

This model defines action categories. It does not implement command routing, scheduling, or UI.

## Valid Next Action Categories

- Continue lesson: proceed within the current lesson or sequence.
- Repeat concept: revisit the same concept with a different explanation or example.
- Targeted practice: practice a specific weak learning skill or mistake.
- Mixed review: review multiple related concepts or learning skills.
- Assessment: collect evidence against criteria.
- Project work: continue or start a realistic artifact.
- Interview simulation: practice interactive explanation or problem solving.
- Advance to next learning skill: move forward when prerequisites and evidence support it.
- Pause with session report: stop and summarize progress, evidence, risks, and suggested follow-up.

## Normative Requirements

- Next actions SHOULD be selected from learner state, the relevant domain pack, available evidence, and user intent.
- Next actions MUST NOT assume mastery without evidence.
- Advancement SHOULD require sufficient prerequisite confidence or explicit user override.
- Pause actions SHOULD produce a session report when meaningful learner activity occurred.
- Next actions MAY include alternatives when evidence is insufficient or goals conflict.

## Relationships

- Session selection is defined in `core/learning-engine/SESSION_SELECTION.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- Learning lifecycle next-action behavior is defined in `specification/LEARNING_LIFECYCLE.md`.

## OPEN QUESTION

- Should next actions support priority values before a concrete state schema exists?
