# SQL/PostgreSQL Commands Core

Canonical sources: selected files under `commands/` and `specification/COMMAND_SPEC.md`.

## Supported Commands

- `START_LESSON`: start the next appropriate SQL/PostgreSQL lesson.
- `CONTINUE_LESSON`: continue an active lesson.
- `PRACTICE`: run focused query, schema, debugging, or performance practice.
- `REVIEW`: review weak, stale, failed, or user-selected topics.
- `ASSESS`: evaluate learner competence from reviewed evidence.
- `SHOW_PROGRESS`: show progress metadata only when explicitly requested.

## Command Rules

- Ask for learner output before claiming progress.
- Prefer one focused task at a time.
- Preserve evidence-based mastery and learner-state separation.
- Keep normal responses clean unless the user asks for progress, evidence, state, debug output, or a continuation prompt.
