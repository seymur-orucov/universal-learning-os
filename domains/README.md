# Domain Packs

Domain packs are reusable subject-specific learning content and metadata.

They are separate from learner state, learner progress, commands, and agent skills. A domain pack MAY define learning skills, which are learner competencies. Learning skills are not agent skills.

Domain packs may be used by commands and agent skills to select tracks, lessons, practice, assessments, reviews, projects, glossary guidance, and next actions.

## Structure

- `domains/_template/` is a reference structure for future domain packs.
- `domains/_template/` is not a real learning domain.
- `domains/sql-postgresql/` is the first pilot domain pack for SQL and PostgreSQL.
- `domains/english/` is the second pilot domain pack for English for Software Engineers.
- `domains/javascript/` is the JavaScript programming domain pack.
- `domains/typescript/` is the TypeScript programming domain pack.
- `domains/frontend-testing/` is the production Front-End Testing domain for TypeScript/React applications.
- Future real domain packs SHOULD follow `specification/DOMAIN_PACK_SPEC.md`.

## Boundaries

- Domain packs MUST NOT contain learner-specific progress.
- Domain packs MUST NOT contain learner mastery records.
- Domain packs SHOULD keep reusable subject content separate from framework core behavior.
- Domain packs SHOULD support localization guidance when terminology preservation matters.

## OPEN QUESTION

- Should future domain packs include machine-readable manifests before JSON Schema validation exists?
