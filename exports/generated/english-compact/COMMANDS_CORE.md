# English Commands Core

Canonical sources: selected files under `commands/` and `specification/COMMAND_SPEC.md`.

## Supported Commands

- `START_LESSON`: start the next appropriate English lesson.
- `CONTINUE_LESSON`: continue an active lesson.
- `PRACTICE`: run speaking, writing, grammar, listening, shadowing, workplace, or interview practice.
- `REVIEW`: review weak, stale, failed, or user-selected topics.
- `ASSESS`: evaluate learner competence from reviewed output.
- `SHOW_PROGRESS`: show progress metadata only when explicitly requested.

## Command Rules

- Ask for learner output before claiming progress.
- Keep English target output in English where appropriate.
- Preserve evidence-based mastery and learner-state separation.
- Keep normal responses clean unless the user asks for progress, evidence, state, debug output, or a continuation prompt.
