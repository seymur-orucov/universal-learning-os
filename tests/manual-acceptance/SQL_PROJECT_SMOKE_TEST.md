# SQL/PostgreSQL Project Smoke Test

## Purpose

Verify that SQL/PostgreSQL Mentor OS starts correctly in a ChatGPT Project.

## Preconditions

- `exports/generated/sql-postgresql-standard/` has exactly 25 files.
- Launch kit prompt exists at `exports/generated/project-launch-kits/SQL_POSTGRESQL_STARTUP_PROMPT_READY.md`.
- Optional learner state exists at `learners/active-learner/sql-postgresql/STATE.md`.

## Files Needed

- SQL/PostgreSQL generated pack files.
- SQL/PostgreSQL startup prompt.
- Optional SQL learner state.

## Test Steps

1. Create or open SQL/PostgreSQL Mentor OS ChatGPT Project.
2. Ensure Project Instructions are based on `PROJECT_INSTRUCTIONS.md`.
3. Upload the generated pack files.
4. Paste the input prompt below.
5. Observe assistant behavior.

## Input Prompt to Paste

```text
Use SQL/PostgreSQL Mentor OS.
Instruction language: Azerbaijani.
Keep SQL/PostgreSQL terminology in English where natural.
Check whether learner state exists. If not enough evidence exists, say so.
Start with a review or assessment of early SQL basics before continuing.
```

## Expected Assistant Behavior

- Recognizes SQL/PostgreSQL Mentor OS.
- Uses Azerbaijani explanations.
- Keeps SQL/PostgreSQL terms in English where natural.
- Checks learner state.
- Does not assume mastery.
- Starts review, assessment, or next lesson based on available state.
- Ends with session summary, evidence generated, proposed state updates, next action, and next chat continuation prompt.

## Pass/Fail Checklist

- [ ] Uses correct project identity.
- [ ] Uses Azerbaijani explanations.
- [ ] Preserves English SQL/PostgreSQL terminology.
- [ ] Checks or asks for learner state.
- [ ] Does not claim mastery without evidence.
- [ ] Produces session summary and continuation prompt.

## Failure Examples

- Claims `SELECT` is mastered because a lesson was shown.
- Ignores missing learner state.
- Translates SQL keywords unnaturally.
- Omits evidence and next action.
