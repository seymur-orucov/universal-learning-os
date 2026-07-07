# ADR-0011: SQL/PostgreSQL Syllabus Expansion

## Status

Accepted for Stage 8.2.

## Context

The SQL/PostgreSQL domain pack now has a structured learning skill graph. The next step is to define a professional main-track syllabus that maps lessons to those learning skills without creating full lesson bodies, exercises, learner state, schemas, or executable tooling.

## Decision

- The syllabus is expanded after the learning skill graph so lesson outlines can reference stable learning skill ids.
- Lesson outlines map directly to `sql-postgresql.*` learning skill ids.
- Lesson outlines are created before full lesson content to define sequence and scope without over-generating.
- The main track is limited to 45 lessons to keep the path reviewable and professional.
- Review, assessment, project, and interview stages are included to align the domain pack with the framework learning lifecycle.

## Rationale

Mapping lessons to learning skill ids keeps the syllabus connected to reusable domain competencies instead of becoming an isolated lesson list. Creating outlines before bodies allows sequencing, prerequisites, practice expectations, and evidence expectations to be reviewed before instructional content is authored.

The 35-50 lesson range is large enough to cover beginner-to-advanced SQL/PostgreSQL progression, but small enough to avoid fake detail. Review and assessment checkpoints preserve the evidence-based mastery model. Project and interview stages support real-world transfer and explanation quality without creating full project specs or interview scripts yet.

## Consequences

- Future lesson authoring can proceed against a stable syllabus map.
- Practice, review, assessment, project, and interview workflows can target lesson groups and learning skills.
- Learner state can reference learning skill ids without duplicating syllabus content.
- Northwind and project work remain placeholders until later stages create concrete tasks.

## Provisional Decisions

- The main track currently contains 45 lesson outlines.
- The syllabus includes advanced PostgreSQL features in the main path, but they may later move to optional extensions.
- Project milestones are placeholders and not full project specifications.
- Formal assessment checkpoint selection remains unresolved.

## OPEN QUESTION

- Which lesson outlines should be authored first as full lessons?
- Should Stage 10 advanced PostgreSQL features become optional modules?
- Which stages should receive formal assessment rubrics first?
