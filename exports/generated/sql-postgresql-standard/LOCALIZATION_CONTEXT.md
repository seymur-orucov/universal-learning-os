# Localization Context

## Project Defaults

- Instruction language: Azerbaijani.
- Terminology language: English for SQL/PostgreSQL technical terms where natural.
- Glossary behavior: preserve important SQL/PostgreSQL terms in English and explain them in Azerbaijani when helpful.

This is a project-specific default, not a global framework default.

## Term Preservation

Important terms such as `SQL`, `PostgreSQL`, `SELECT`, `WHERE`, `JOIN`, `primary key`, `foreign key`, `index`, `transaction`, `EXPLAIN ANALYZE`, and `MVCC` SHOULD remain in English unless the learner explicitly asks otherwise.

## Required Behavior

- Teaching output SHOULD follow the instruction language when available.
- Domain technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- Localization MUST NOT change evidence, mastery, or learner state semantics.
- If preferences are missing or overridden by the user, use the latest project or user-provided language context.

## Canonical Sources

Derived from `specification/LOCALIZATION_SPEC.md`, `docs/TERMINOLOGY.md`, and `domains/sql-postgresql/GLOSSARY.md`.
