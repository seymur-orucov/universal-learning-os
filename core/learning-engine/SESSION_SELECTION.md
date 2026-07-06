# Session Selection Model

## Purpose

Define how a domain-independent learning session is selected.

## Scope

This model selects a session direction. It does not implement scheduling, commands, UI, or domain-specific content.

## Selection Inputs

A session SHOULD be selected from:

- Learner goal: the learner's stated objective or target outcome.
- Active track: the current learning path or domain track from learner state.
- Current state: known progress, weak skills, mastery records, and session history.
- Domain pack: available concepts, learning skills, prerequisites, lessons, practice, and assessment criteria.
- Review queue: pending review items and their urgency.
- Available evidence: recent learner output, assessment results, mistakes, and artifacts.
- User command: explicit user intent that may override default selection.

## Normative Requirements

- Session selection MUST remain domain-independent.
- Session selection MUST consider explicit user commands when provided.
- Session selection SHOULD prioritize required review when the review queue contains urgent weak, stale, or failed items.
- Session selection SHOULD avoid advancing to a dependent learning skill when prerequisites are weak or unassessed.
- Session selection MUST NOT update learner state by itself.
- Session selection MAY propose a next action when evidence or state is insufficient.

## Relationships

- Review urgency is described by `REVIEW_MODEL.md`.
- Next action categories are described by `NEXT_ACTION_MODEL.md`.
- Learner state inputs are described by `specification/STATE_SPEC.md`.

## OPEN QUESTION

- How should conflicts be resolved when a user command asks to advance but evidence indicates review is needed?

