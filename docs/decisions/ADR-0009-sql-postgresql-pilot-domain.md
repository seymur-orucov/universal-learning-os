# ADR-0009: SQL/PostgreSQL Pilot Domain

## Status

Accepted for Stage 8.0.

## Context

The framework needs a first real pilot domain pack to validate the domain pack standard without generating a complete curriculum prematurely. SQL and PostgreSQL are structured, practical, assessment-friendly topics with clear progression from beginner querying to schema design, transactions, indexing, and performance.

## Decision

- SQL/PostgreSQL is the first pilot domain pack.
- The domain is created as a skeleton before full syllabus generation.
- Northwind is mentioned as a useful realistic practice dataset but is not implemented yet.
- Localization supports Azerbaijani instruction with English SQL/PostgreSQL technical terms as an initial project preference.
- The domain preserves evidence-based mastery and does not contain learner state.

## Rationale

SQL/PostgreSQL is a strong pilot because it has observable learner outputs: queries, schemas, explanations, query plans, and project artifacts. These outputs can support evidence-based assessment without requiring subjective interpretation alone.

Creating a skeleton first keeps the repository aligned with the domain pack standard while avoiding fake lessons, fake exhaustive learning skill graphs, or unsupported syllabus detail. Northwind is useful for realistic practice, but full exercises should be authored deliberately in a later stage.

## Consequences

- The repository now has one real pilot domain pack structure.
- Commands and agent skills can reference a concrete domain pack without relying only on templates.
- Future stages can incrementally author learning skills, lessons, practice, projects, and assessments.
- Localization guidance is validated against a real technical domain.

## Provisional Decisions

- The domain version is `0.1.0-draft`.
- The first supported tracks are main, practice, and interview tracks.
- Northwind is referenced but not included or exercised yet.
- PostgreSQL version targeting is not finalized.

## OPEN QUESTION

- Which SQL/PostgreSQL stage should be authored first in Stage 8.1?
- Should Northwind become the default dataset for the main track or only for practice/projects?
- Which PostgreSQL version should the domain pack target first?
