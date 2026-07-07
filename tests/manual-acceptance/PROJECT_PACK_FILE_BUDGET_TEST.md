# Project Pack File Budget Test

## Purpose

Verify generated Project Pack directories remain exactly 25 files.

## Commands

```sh
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | wc -l
find exports/generated/english-standard -maxdepth 1 -type f | wc -l
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | sort
find exports/generated/english-standard -maxdepth 1 -type f | sort
```

## Expected Results

- SQL/PostgreSQL pack count: 25.
- English pack count: 25.
- No launch kit files inside individual pack directories.
- No learner state files inside individual pack directories.
- No unrelated domain files inside each pack.

## Pass/Fail Checklist

- [ ] SQL/PostgreSQL count is 25.
- [ ] English count is 25.
- [ ] SQL pack contains no English domain files.
- [ ] English pack contains no SQL/PostgreSQL domain files.
- [ ] Launch kits live under `exports/generated/project-launch-kits/`.
- [ ] Learner state lives under `learners/active-learner/`.
