# Project Maintenance Guide

## Source of Truth

Canonical source files should be edited first. Generated pack files are derived artifacts.

Canonical semantics remain in `core/`, `specification/`, `commands/`, `skills/`, and `domains/`.

## Generated Pack Maintenance

If canonical sources change, generated packs may need manual sync until automation exists.

Do not edit learner state into Project Pack files.

Do not add files into 25-file pack directories:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`

## Validate File Count

```sh
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | wc -l
find exports/generated/english-standard -maxdepth 1 -type f | wc -l
```

## List Files

```sh
find exports/generated/sql-postgresql-standard -maxdepth 1 -type f | sort
find exports/generated/english-standard -maxdepth 1 -type f | sort
```

## Check Before Uploading

- 25 files.
- Manifest exists.
- File budget exists.
- Project instructions exist.
- Startup prompt exists.
- Continuation prompt exists.
- No unrelated domain files.
- No learner-specific progress.
- Evidence-based mastery preserved.
- Localization semantics preserved.
- Learner state separated.

## OPEN QUESTION

- Which maintenance checks should become automated first?
