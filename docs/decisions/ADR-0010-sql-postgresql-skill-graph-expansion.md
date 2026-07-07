# ADR-0010: SQL/PostgreSQL Skill Graph Expansion

## Status

Accepted for Stage 8.1.

## Context

The SQL/PostgreSQL pilot domain pack needs a professional learning skill graph before full syllabus detail, lessons, exercises, learner state, or schemas are created. The graph must define learner competencies and relationships without implying learner progress.

## Decision

- The SQL/PostgreSQL learning skill graph is expanded before full syllabus and lesson authoring.
- Learning skills are organized by progression stages that align with the draft syllabus skeleton.
- Learning skill identifiers are scoped with the `sql-postgresql.*` prefix.
- Mastery targets are domain expectations, not learner progress.
- Actual learner mastery remains in learner state and requires evidence or explicit user instruction.

## Rationale

Expanding the learning skill graph first gives future lessons, practice, assessment, review, projects, and progress tracking a stable competency map. Organizing the graph by progression stage keeps beginner-to-advanced development understandable while still allowing commands and agent skills to select review or practice out of order when evidence requires it.

Scoped identifiers avoid collisions with future domain packs and make learner state references explicit. Mastery targets describe intended expectations for a learning skill; they MUST NOT be interpreted as a learner's achieved mastery.

## Consequences

- Future Stage 8 work can author lessons and exercises against named learning skills.
- Learner state can reference SQL/PostgreSQL learning skill ids without duplicating domain content.
- Assessment and review can target specific competencies rather than broad lesson titles.
- The domain pack remains reusable content and does not contain learner progress.

## Provisional Decisions

- The graph uses 70 learning skills.
- Advanced PostgreSQL features remain mostly conceptual at this stage.
- PostgreSQL version targeting is still unresolved.
- Northwind remains a referenced practice dataset, not an implemented exercise set.

## OPEN QUESTION

- Which learning skills should be split or merged after the first lessons are authored?
- Should advanced PostgreSQL features move into optional extension tracks?
- Should query optimization be modeled as one staged path or as cross-cutting performance reasoning?
