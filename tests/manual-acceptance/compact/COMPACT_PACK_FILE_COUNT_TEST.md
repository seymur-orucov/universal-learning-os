# Compact Pack File Count Test

## Purpose

Verify compact/free generated Project Packs contain no more than 5 files and standard packs remain exactly 25 files.

## Commands

```sh
find exports/generated/sql-postgresql-compact -maxdepth 1 -type f | wc -l
find exports/generated/english-compact -maxdepth 1 -type f | wc -l
find exports/generated/javascript-compact -maxdepth 1 -type f | wc -l
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | wc -l
find exports/generated/english-standard -maxdepth 1 -type f | wc -l
find exports/generated/javascript-standard -maxdepth 1 -type f | wc -l
```

## Expected Results

- SQL/PostgreSQL compact count: no more than 5.
- English compact count: no more than 5.
- JavaScript compact count: no more than 5.
- SQL/PostgreSQL standard count: exactly 25.
- English standard count: exactly 25.
- JavaScript standard count: exactly 25.

## Pass/Fail Checklist

- [ ] Each compact pack has max 5 files.
- [ ] Each compact pack contains `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.
- [ ] Each standard pack still has exactly 25 files.
- [ ] No launch kit files are inside compact pack directories.
- [ ] No learner state files are inside compact pack directories.
