# Project Launch Kits

This folder contains practical launch kits for using generated Project Packs in ChatGPT Projects.

Launch kits are derived helper artifacts. They are not canonical framework source, not learner state, and not executable tooling.

Canonical source remains in `core/`, `specification/`, `commands/`, `skills/`, `domains/`, and the generated pack files under `exports/generated/`.

## Available Launch Kits

- SQL/PostgreSQL Mentor OS
- English Mentor OS
- JavaScript Mentor OS
- TypeScript Mentor OS
- DSA Mentor
- SQL/PostgreSQL Mentor OS Compact
- English Mentor OS Compact
- JavaScript Mentor OS Compact
- TypeScript Mentor OS Compact
- DSA Mentor Compact

## File Budget Boundary

Individual generated pack directories MUST remain exactly 25 files:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/typescript-standard/`
- `exports/generated/dsa-standard/`

Compact generated pack directories MUST remain exactly 5 files:

- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`
- `exports/generated/dsa-compact/`

Launch kit files live outside those pack directories so upload-ready file counts remain stable.

## Related Guides

- `exports/generated/PROJECT_PACK_UPLOAD_GUIDE.md`
- `exports/generated/PROJECT_PACK_USAGE_GUIDE.md`
- `exports/generated/PROJECT_PACK_VALIDATION_REPORT.md`

## OPEN QUESTION

- Should launch kits later be generated automatically from pack manifests?
