# Project Pack File Budget Test

## Purpose

Verify standard generated Project Pack directories remain exactly 25 files and compact/free generated Project Pack directories remain no more than 5 files.

## Commands

```sh
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | wc -l
find exports/generated/english-standard -maxdepth 1 -type f | wc -l
find exports/generated/javascript-standard -maxdepth 1 -type f | wc -l
find exports/generated/typescript-standard -maxdepth 1 -type f | wc -l
find exports/generated/sql-postgresql-compact -maxdepth 1 -type f | wc -l
find exports/generated/english-compact -maxdepth 1 -type f | wc -l
find exports/generated/javascript-compact -maxdepth 1 -type f | wc -l
find exports/generated/typescript-compact -maxdepth 1 -type f | wc -l
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | sort
find exports/generated/english-standard -maxdepth 1 -type f | sort
find exports/generated/javascript-standard -maxdepth 1 -type f | sort
find exports/generated/typescript-standard -maxdepth 1 -type f | sort
find exports/generated/sql-postgresql-compact -maxdepth 1 -type f | sort
find exports/generated/english-compact -maxdepth 1 -type f | sort
find exports/generated/javascript-compact -maxdepth 1 -type f | sort
find exports/generated/typescript-compact -maxdepth 1 -type f | sort
```

## Expected Results

- SQL/PostgreSQL pack count: 25.
- English pack count: 25.
- JavaScript pack count: 25.
- TypeScript pack count: 25.
- SQL/PostgreSQL compact pack count: no more than 5.
- English compact pack count: no more than 5.
- JavaScript compact pack count: no more than 5.
- TypeScript compact pack count: no more than 5.
- No launch kit files inside individual pack directories.
- No learner state files inside individual pack directories.
- No unrelated domain files inside each pack.

## Pass/Fail Checklist

- [ ] SQL/PostgreSQL count is 25.
- [ ] English count is 25.
- [ ] JavaScript count is 25.
- [ ] TypeScript count is 25.
- [ ] SQL/PostgreSQL compact count is no more than 5.
- [ ] English compact count is no more than 5.
- [ ] JavaScript compact count is no more than 5.
- [ ] TypeScript compact count is no more than 5.
- [ ] SQL pack contains no English domain files.
- [ ] English pack contains no SQL/PostgreSQL domain files.
- [ ] JavaScript pack contains no SQL/PostgreSQL or English domain files.
- [ ] Launch kits live under `exports/generated/project-launch-kits/`.
- [ ] Learner state lives under `learners/active-learner/`.
