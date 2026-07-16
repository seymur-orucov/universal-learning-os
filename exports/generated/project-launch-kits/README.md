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
- Front-End System Design Mentor
- Node.js Backend Mentor
- Git Mentor
- Go Mentor
- SQL/PostgreSQL Mentor OS Compact
- English Mentor OS Compact
- JavaScript Mentor OS Compact
- TypeScript Mentor OS Compact
- DSA Mentor Compact
- Front-End System Design Mentor Compact
- Node.js Backend Mentor Compact
- Git Mentor Compact
- Go Mentor Compact

## File Budget Boundary

Individual generated pack directories MUST remain exactly 25 files:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/typescript-standard/`
- `exports/generated/dsa-standard/`
- `exports/generated/frontend-system-design-standard/`
- `exports/generated/nodejs-standard/`
- `exports/generated/git-standard/`
- `exports/generated/go-standard/`

Compact generated pack directories MUST remain exactly 5 files:

- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`
- `exports/generated/dsa-compact/`
- `exports/generated/frontend-system-design-compact/`
- `exports/generated/nodejs-compact/`
- `exports/generated/git-compact/`
- `exports/generated/go-compact/`

Launch kit files live outside those pack directories so upload-ready file counts remain stable.

## Lesson Note Export

At meaningful lesson closure, explicitly invoke `SAVE_LESSON` to request a portable Obsidian Markdown artifact, or `SAVE_LESSON NOTION` for the connected Notion route. `SAVE_LESSON_TO_NOTION` remains a compatibility alias. The Markdown artifact is not written into an Obsidian vault automatically.

## Related Guides

- `exports/generated/PROJECT_PACK_UPLOAD_GUIDE.md`
- `exports/generated/PROJECT_PACK_USAGE_GUIDE.md`
- `exports/generated/PROJECT_PACK_VALIDATION_REPORT.md`

## OPEN QUESTION

- Should launch kits later be generated automatically from pack manifests?
