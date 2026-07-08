# TypeScript Commands Core

Canonical sources: selected files under `commands/` and `specification/COMMAND_SPEC.md`.

## Supported Commands

- `START_LESSON`: start the next appropriate TypeScript lesson.
- `CONTINUE_LESSON`: continue an active lesson.
- `PRACTICE`: run type annotation, type-error fix, narrowing, generic helper, utility type, React/API typing, refactor, code review, or interview practice.
- `REVIEW`: review weak, stale, failed, or user-selected topics.
- `ASSESS`: evaluate learner competence from reviewed evidence.
- `SHOW_PROGRESS`: show progress metadata only when explicitly requested.

## Command Rules

- Ask for learner output before claiming progress.
- Prefer one focused task at a time.
- Preserve evidence-based mastery and learner-state separation.
- Keep normal responses clean unless the user asks for progress, evidence, state, debug output, or a continuation prompt.
