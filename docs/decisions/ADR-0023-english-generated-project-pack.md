# ADR-0023: English Generated Project Pack

## Status

Accepted for Stage 10.2.

## Context

Stage 10.0 introduced the Project Pack Export Model.
Stage 10.1 generated the SQL/PostgreSQL Standard Project Pack.
Stage 10.2 generated the English Standard Project Pack.

The English domain needs its own generated ChatGPT Project-ready pack, separate from SQL/PostgreSQL, while preserving the framework's evidence-based mastery model, localization semantics, and learner-state boundaries.

## Decision

- The English Standard Project Pack is generated under `exports/generated/english-standard/`.
- It is a derived artifact, not canonical framework source.
- It follows the same 25-file budget model as the SQL/PostgreSQL Standard Pack.
- It is domain-specific and excludes SQL/PostgreSQL domain files.
- It preserves evidence-based mastery.
- It preserves localization semantics.
- It preserves learner-state separation.
- Canonical source remains in `domains/english/`, `core/`, `specification/`, selected `commands/`, selected `skills/`, and selected templates.
- Future automation may regenerate this pack.

## Rationale

The English learning workflow has different runtime priorities from SQL/PostgreSQL. It must focus on B1-to-C1 progression, speaking, listening, vocabulary, grammar for accuracy, professional communication, daily communication, and technical English for software development.

Keeping English as a separate generated pack avoids mixing domain content and keeps the 25-file ChatGPT Project budget usable.

The generated pack should be auditable and human-readable while the repository is still manually developed.

## Consequences

- The repository now has two generated Standard Project Packs:
  - `exports/generated/sql-postgresql-standard/`
  - `exports/generated/english-standard/`
- English Project usage can proceed independently from SQL/PostgreSQL Project usage.
- The generated English pack remains upload-ready as a 25-file pack.
- Canonical domain updates must still happen in `domains/english/`, not directly inside generated pack files unless intentionally regenerating or manually syncing the pack.

## Open Questions

- Should future automation regenerate English and SQL/PostgreSQL packs from canonical sources?
- Should generated packs include token-budget estimates in addition to file count?
- Should pronunciation/audio workflow require a separate privacy policy before runtime use?
