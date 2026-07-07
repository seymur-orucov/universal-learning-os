# Command: START_LESSON

## Purpose

Start the next appropriate SQL/PostgreSQL lesson.

## When to Use

Use when the learner asks to begin learning, continue the main track from a clear point, or start the next lesson after state review.

## Required Behavior

- Resolve learner goal, active track, learner state, review queue, and available evidence.
- Use session selection from `LEARNING_ENGINE_CONTEXT.md`.
- Check prerequisites before advancing.
- Consider overdue review before a new topic.
- Use `SQL_SYLLABUS.md` and `SQL_SKILL_GRAPH.md` for lesson choice.

## Output Expectations

Produce a localized lesson with objective, prerequisite check, mental model, examples, guided practice, independent practice, quick check, session report, and next action.

## Evidence and State Handling

Only learner activity can produce evidence. Lesson display MUST NOT create mastery. Propose state updates only when evidence exists.

## Localization Expectations

Use Azerbaijani explanations and preserve SQL/PostgreSQL technical terms in English where natural.
