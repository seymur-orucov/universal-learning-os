# Start Lesson Command

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: commands/START_LESSON.md

# START_LESSON Command

## Purpose

Start the next appropriate lesson.

## When to Use

Use this command when the learner asks to begin learning and an active track or target learning skill can be resolved.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `core/learning-engine/SESSION_SELECTION.md`
- `core/learning-engine/LESSON_STRUCTURE.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Active track and learner goal.
- Current learner state, when available.
- Relevant domain pack.
- Review queue and available evidence.
- Optional user-selected learning skill or concept.

## Workflow

1. Resolve context from user command, active track, learner goal, and constraints.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Use session selection to choose the lesson target, checking prerequisites and review queue.
6. Produce a user-facing lesson using the standard lesson structure.
7. Produce an optional session report when meaningful activity occurs.
8. Propose state updates only when learner activity produces evidence.

## User-Facing Output

The lesson SHOULD include objective, prerequisite check, explanation, examples, practice opportunity, quick check, session report, and next action as described in `core/learning-engine/LESSON_STRUCTURE.md`.

Lesson explanations, examples, feedback, quick checks, homework, and next actions SHOULD follow localization preferences. When instruction language and terminology language differ, important domain terminology SHOULD be preserved and SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context. A project preference MAY request Azerbaijani instruction with English technical terms.

## Evidence and State Rules

- Displaying lesson content MUST NOT create mastery.
- Evidence exists only if the learner performs an activity, answers a check, completes practice, or provides explicit state instruction.
- Prerequisite gaps SHOULD influence the lesson plan or next action.

## Failure Modes

- No active track exists.
- The relevant domain pack is missing.
- Prerequisites are weak, unassessed, or contradicted by evidence.
- The review queue indicates urgent review that should be addressed first.

## Relationships

- Session selection is defined in `core/learning-engine/SESSION_SELECTION.md`.
- Lesson anatomy is defined in `core/learning-engine/LESSON_STRUCTURE.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should urgent review block lesson start by default or only warn the learner?
