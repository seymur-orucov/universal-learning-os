# TypeScript Pack File Count Test

## Purpose

Verify TypeScript generated packs meet profile budgets and existing packs remain valid.

## Commands

```sh
find exports/generated/typescript-standard -maxdepth 1 -type f | wc -l
find exports/generated/typescript-compact -maxdepth 1 -type f | wc -l
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | wc -l
find exports/generated/english-standard -maxdepth 1 -type f | wc -l
find exports/generated/javascript-standard -maxdepth 1 -type f | wc -l
find exports/generated/sql-postgresql-compact -maxdepth 1 -type f | wc -l
find exports/generated/english-compact -maxdepth 1 -type f | wc -l
find exports/generated/javascript-compact -maxdepth 1 -type f | wc -l
```

## Expected Results

- TypeScript standard pack: exactly 25 files.
- TypeScript compact pack: exactly 5 files.
- Existing standard packs: exactly 25 files.
- Existing compact packs: exactly 5 files.

## Pass/Fail Checklist

- [ ] `typescript-standard` count is 25.
- [ ] `typescript-compact` count is exactly 5.
- [ ] Existing generated packs retain their required counts.
