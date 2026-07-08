# Compact Startup Test

## Purpose

Verify compact packs start correctly in Free-plan ChatGPT Projects.

## Test Matrix

| Domain | Project instructions | Startup prompt |
| --- | --- | --- |
| SQL/PostgreSQL | `exports/generated/sql-postgresql-compact/PROJECT_INSTRUCTIONS.md` | `exports/generated/sql-postgresql-compact/STARTUP_PROMPT.md` |
| English | `exports/generated/english-compact/PROJECT_INSTRUCTIONS.md` | `exports/generated/english-compact/STARTUP_PROMPT.md` |
| JavaScript | `exports/generated/javascript-compact/PROJECT_INSTRUCTIONS.md` | `exports/generated/javascript-compact/STARTUP_PROMPT.md` |
| TypeScript | `exports/generated/typescript-compact/PROJECT_INSTRUCTIONS.md` | `exports/generated/typescript-compact/STARTUP_PROMPT.md` |

## Expected Behavior

- Recognizes the compact Mentor OS identity.
- Uses Azerbaijani learner-facing instruction.
- Checks whether learner state or previous session summary exists.
- Starts a beginner-safe diagnostic or first lesson if no state exists.
- Does not show evidence/state/YAML/internal metadata unless requested.
