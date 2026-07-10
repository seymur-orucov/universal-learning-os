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
- Optional explicit mode: diagnostic, challenge-first, practice-only, or assessment.

## Workflow

1. Resolve context from user command, active track, learner goal, and constraints.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Use session selection to choose the lesson target, checking prerequisites and review queue.
6. Unless the learner explicitly selected an exception mode, begin in Deep Teaching Mode and teach sufficiently before requesting independent work.
7. For a new concept, provide the title and objective, prerequisite connection, mental model, deep explanation, essential terminology, minimal example, realistic example when appropriate, common misconceptions, and one guided knowledge check or guided action.
8. State that the lesson will continue after the learner responds, without exposing internal lesson phases or framework metadata.
9. Progress across turns from teaching to guided check, feedback and misconception repair, guided practice, independent practice, then summary and next action.
10. Produce an optional session report when meaningful activity occurs.
11. Propose state updates only when learner activity produces evidence.

## User-Facing Output

The initial response for a new concept SHOULD teach before testing and end with one guided knowledge check, not premature independent practice. It SHOULD request only one clear learner action and clearly indicate that the lesson will continue after the learner responds. Later turns introduce guided and independent practice when the learner is ready, as described in `core/learning-engine/LESSON_STRUCTURE.md`.

Lesson explanations, examples, feedback, quick checks, homework, and next actions SHOULD follow localization preferences. When instruction language and terminology language differ, important domain terminology SHOULD be preserved and SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context. A project preference MAY request Azerbaijani instruction with English technical terms.

## Evidence and State Rules

- Displaying lesson content MUST NOT create mastery.
- Evidence exists only if the learner performs an activity, answers a check, completes practice, or provides explicit state instruction.
- Prerequisite gaps SHOULD influence the lesson plan or next action.
- Tasks MUST NOT depend on concepts that have not been taught or established as prerequisites.
- Diagnostic, challenge-first, practice-only, or assessment behavior before teaching requires an explicit learner request.

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
