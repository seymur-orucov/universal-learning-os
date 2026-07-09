# SQL/PostgreSQL Syllabus

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/sql-postgresql/SYLLABUS.md

# SQL/PostgreSQL Syllabus

## Syllabus Overview

This syllabus defines the `sql-postgresql.main` learning path for the SQL/PostgreSQL domain pack. It maps stages, modules, and lesson outlines to learning skills from `domains/sql-postgresql/SKILL_GRAPH.md`.

This file defines the learning path only. It does not contain full lesson bodies, full exercises, Northwind tasks, learner state, or learner progress.

## Syllabus Conventions

- Lesson outlines MUST remain concise and MUST NOT be treated as full lessons.
- Target learning skills MUST reference ids from `domains/sql-postgresql/SKILL_GRAPH.md`.
- Lesson completion MUST NOT imply mastery.
- Mastery requires evidence as defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner progress belongs in learner state, not in this syllabus.
- Practice expectations SHOULD align with `domains/sql-postgresql/PRACTICE_RULES.md`.
- Assessment checkpoints SHOULD align with `domains/sql-postgresql/ASSESSMENT_RULES.md`.

## Track: `sql-postgresql.main`

- Purpose: beginner-to-advanced SQL/PostgreSQL progression.
- Audience: learners who need practical SQL and PostgreSQL competence.
- Output expectation: learner can write, explain, debug, and reason about SQL/PostgreSQL work using evidence-backed practice and assessment.

## Stage 1: Relational Database and SQL Foundations

- Stage goal: Build conceptual vocabulary for relational databases, SQL, PostgreSQL, and basic query structure.
- Included learning skills:
  - `sql-postgresql.relational-model`
  - `sql-postgresql.table-row-column-concepts`
  - `sql-postgresql.keys-concepts`
  - `sql-postgresql.sql-statement-anatomy`
  - `sql-postgresql.postgresql-tooling-concepts`

#### Lesson 1: Relational data model

- Target learning skills:
  - `sql-postgresql.relational-model`
- Objective: Explain why relational databases organize data into related tables.
- Practice expectation: Identify table relationships from small examples.
- Evidence expectation: Learner explains relational concepts using a simple schema.

#### Lesson 2: Database, table, row, and column vocabulary

- Target learning skills:
  - `sql-postgresql.table-row-column-concepts`
- Objective: Distinguish database, table, row, column, and value.
- Practice expectation: Label parts of small tabular examples.
- Evidence expectation: Learner correctly explains each term in context.

#### Lesson 3: Keys and relationships

- Target learning skills:
  - `sql-postgresql.keys-concepts`
- Objective: Explain how `primary key` and `foreign key` values identify and connect rows.
- Practice expectation: Identify likely keys in simple schemas.
- Evidence expectation: Learner explains key purpose and relationship direction.

#### Lesson 4: SQL statement anatomy and PostgreSQL context

- Target learning skills:
  - `sql-postgresql.sql-statement-anatomy`
  - `sql-postgresql.postgresql-tooling-concepts`
- Objective: Recognize SQL statement parts and PostgreSQL tooling roles conceptually.
- Practice expectation: Annotate simple statements and describe server/client/query tool roles.
- Evidence expectation: Learner explains query clauses and PostgreSQL context without installation steps.

- Practice expectations: recall practice and guided conceptual checks.
- Assessment checkpoint: learner explains relational vocabulary and basic SQL statement structure.
- Review point: revisit keys and table vocabulary before joins.

## Stage 2: Filtering, Sorting, and Basic Query Composition

- Stage goal: Build reliable single-table query competence.
- Included learning skills:
  - `sql-postgresql.select-basics`
  - `sql-postgresql.column-selection-aliases`
  - `sql-postgresql.where-comparison-boolean`
  - `sql-postgresql.in-between-predicates`
  - `sql-postgresql.like-ilike-patterns`
  - `sql-postgresql.null-semantics`
  - `sql-postgresql.order-by`
  - `sql-postgresql.limit-offset`
  - `sql-postgresql.distinct-results`
  - `sql-postgresql.basic-query-composition`

#### Lesson 5: Basic SELECT queries

- Target learning skills:
  - `sql-postgresql.select-basics`
- Objective: Write simple `SELECT` queries over one table.
- Practice expectation: Select rows and columns from a known table.
- Evidence expectation: Learner writes correct simple queries independently.

#### Lesson 6: Column selection and aliases

- Target learning skills:
  - `sql-postgresql.column-selection-aliases`
- Objective: Select specific columns and use aliases for readable output.
- Practice expectation: Format result columns for clear output.
- Evidence expectation: Learner produces targeted output with appropriate aliases.

#### Lesson 7: WHERE filtering and boolean logic

- Target learning skills:
  - `sql-postgresql.where-comparison-boolean`
- Objective: Filter rows using comparison operators and boolean logic.
- Practice expectation: Write filters with `AND`, `OR`, `NOT`, and parentheses.
- Evidence expectation: Learner writes filters that match intended conditions.

#### Lesson 8: Predicate patterns

- Target learning skills:
  - `sql-postgresql.in-between-predicates`
  - `sql-postgresql.like-ilike-patterns`
- Objective: Use list, range, and text matching predicates.
- Practice expectation: Choose `IN`, `BETWEEN`, `LIKE`, or `ILIKE` for requirements.
- Evidence expectation: Learner selects predicates correctly and explains boundaries or patterns.

#### Lesson 9: NULL-aware filtering

- Target learning skills:
  - `sql-postgresql.null-semantics`
- Objective: Handle `NULL` correctly in filters and explanations.
- Practice expectation: Repair queries that use incorrect null comparisons.
- Evidence expectation: Learner explains why `IS NULL` differs from `= NULL`.

#### Lesson 10: Sorting, pagination, distinctness, and composition

- Target learning skills:
  - `sql-postgresql.order-by`
  - `sql-postgresql.limit-offset`
  - `sql-postgresql.distinct-results`
  - `sql-postgresql.basic-query-composition`
- Objective: Compose complete single-table queries with output ordering and limits.
- Practice expectation: Combine filtering, sorting, pagination, aliases, and `DISTINCT`.
- Evidence expectation: Learner writes complete single-table queries from requirements.

- Practice expectations: guided and independent single-table query writing.
- Assessment checkpoint: learner writes a correct single-table query from a written requirement.
- Review point: revisit `NULL`, boolean logic, and `DISTINCT` if results are unexpected.

## Stage 3: Joins and Relationships

- Stage goal: Build reliable multi-table query reasoning.
- Included learning skills:
  - `sql-postgresql.relationship-reasoning`
  - `sql-postgresql.inner-join`
  - `sql-postgresql.left-join`
  - `sql-postgresql.outer-joins-concepts`
  - `sql-postgresql.join-conditions-duplicates`
  - `sql-postgresql.many-to-many-relationships`

#### Lesson 11: Relationship reasoning before joins

- Target learning skills:
  - `sql-postgresql.relationship-reasoning`
- Objective: Explain relationship direction and cardinality before writing joins.
- Practice expectation: Trace relationships from keys and table examples.
- Evidence expectation: Learner explains one-to-many and many-to-many relationships.

#### Lesson 12: INNER JOIN

- Target learning skills:
  - `sql-postgresql.inner-join`
- Objective: Combine matching rows from related tables.
- Practice expectation: Write `INNER JOIN` queries with correct join conditions.
- Evidence expectation: Learner writes joins and explains matched row behavior.

#### Lesson 13: LEFT JOIN and outer join concepts

- Target learning skills:
  - `sql-postgresql.left-join`
  - `sql-postgresql.outer-joins-concepts`
- Objective: Preserve unmatched rows and explain outer join behavior.
- Practice expectation: Compare `INNER JOIN` and `LEFT JOIN` results.
- Evidence expectation: Learner explains null-producing unmatched rows.

#### Lesson 14: Duplicate rows and many-to-many joins

- Target learning skills:
  - `sql-postgresql.join-conditions-duplicates`
  - `sql-postgresql.many-to-many-relationships`
- Objective: Diagnose duplicate rows and query many-to-many relationships.
- Practice expectation: Repair incorrect joins and traverse bridge tables.
- Evidence expectation: Learner explains duplicate causes and correct join paths.

- Practice expectations: mixed practice combining filters and joins.
- Assessment checkpoint: learner writes a multi-table query and explains relationship logic.
- Review point: revisit keys and relationship reasoning when duplicate rows appear.

## Stage 4: Aggregation and Grouping

- Stage goal: Build summary query and reporting foundations.
- Included learning skills:
  - `sql-postgresql.aggregate-functions`
  - `sql-postgresql.group-by`
  - `sql-postgresql.having`
  - `sql-postgresql.aggregate-filtering`
  - `sql-postgresql.grouping-with-joins`
  - `sql-postgresql.reporting-queries-basic`

#### Lesson 15: Aggregate functions

- Target learning skills:
  - `sql-postgresql.aggregate-functions`
- Objective: Use aggregate functions to summarize rows.
- Practice expectation: Write `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` queries.
- Evidence expectation: Learner selects correct aggregate functions for requirements.

#### Lesson 16: GROUP BY

- Target learning skills:
  - `sql-postgresql.group-by`
- Objective: Group rows at the correct granularity.
- Practice expectation: Build grouped summaries by one or more dimensions.
- Evidence expectation: Learner explains grouping level and selected output.

#### Lesson 17: HAVING and aggregate filtering

- Target learning skills:
  - `sql-postgresql.having`
  - `sql-postgresql.aggregate-filtering`
- Objective: Filter grouped results and reason about filtering stages.
- Practice expectation: Compare `WHERE` and `HAVING` requirements.
- Evidence expectation: Learner writes aggregate filters correctly.

#### Lesson 18: Reporting queries with joins

- Target learning skills:
  - `sql-postgresql.grouping-with-joins`
  - `sql-postgresql.reporting-queries-basic`
- Objective: Compose joined aggregate queries for reporting needs.
- Practice expectation: Build report-style queries from concise requirements.
- Evidence expectation: Learner produces a correct summary query and explains duplication risks.

- Practice expectations: mixed practice with joins, grouping, and reporting requirements.
- Assessment checkpoint: learner writes and explains a report-style aggregate query.
- Review point: revisit join duplication before grouped reporting if totals are inflated.

## Stage 5: Subqueries, CTEs, and Set Operations

- Stage goal: Improve query composition for multi-step requirements.
- Included learning skills:
  - `sql-postgresql.scalar-subqueries`
  - `sql-postgresql.in-exists-subqueries`
  - `sql-postgresql.correlated-subqueries-concepts`
  - `sql-postgresql.ctes`
  - `sql-postgresql.set-operations`
  - `sql-postgresql.query-decomposition-readability`

#### Lesson 19: Scalar subqueries

- Target learning skills:
  - `sql-postgresql.scalar-subqueries`
- Objective: Use single-value subqueries in comparisons.
- Practice expectation: Compare rows to derived aggregate values.
- Evidence expectation: Learner uses a scalar subquery with correct cardinality reasoning.

#### Lesson 20: IN, EXISTS, and correlated subquery concepts

- Target learning skills:
  - `sql-postgresql.in-exists-subqueries`
  - `sql-postgresql.correlated-subqueries-concepts`
- Objective: Use membership and existence checks and explain correlated behavior.
- Practice expectation: Choose `IN` or `EXISTS` for a requirement.
- Evidence expectation: Learner explains subquery dependency and result meaning.

#### Lesson 21: CTEs for readable query steps

- Target learning skills:
  - `sql-postgresql.ctes`
- Objective: Use CTEs to structure multi-step queries.
- Practice expectation: Rewrite a complex query as named steps.
- Evidence expectation: Learner explains each CTE and validates final output.

#### Lesson 22: Set operations and decomposition

- Target learning skills:
  - `sql-postgresql.set-operations`
  - `sql-postgresql.query-decomposition-readability`
- Objective: Combine compatible results and decompose query logic cleanly.
- Practice expectation: Use `UNION`, `INTERSECT`, or `EXCEPT` where appropriate.
- Evidence expectation: Learner chooses the correct set operation and explains query structure.

- Practice expectations: guided and mixed practice on multi-step requirements.
- Assessment checkpoint: learner solves a multi-step query with a readable structure.
- Review point: revisit scalar and correlated subquery behavior if cardinality errors appear.

## Stage 6: Data Modeling and Normalization

- Stage goal: Build practical schema reasoning and design foundations.
- Included learning skills:
  - `sql-postgresql.entity-modeling`
  - `sql-postgresql.normalization-basics`
  - `sql-postgresql.normal-forms-1nf-2nf-3nf`
  - `sql-postgresql.denormalization-tradeoffs`
  - `sql-postgresql.erd-reasoning`
  - `sql-postgresql.schema-refactoring-basics`

#### Lesson 23: Entity modeling

- Target learning skills:
  - `sql-postgresql.entity-modeling`
- Objective: Identify entities, attributes, and relationships from requirements.
- Practice expectation: Map a small problem statement to candidate tables.
- Evidence expectation: Learner justifies entity boundaries and attributes.

#### Lesson 24: Normalization basics

- Target learning skills:
  - `sql-postgresql.normalization-basics`
  - `sql-postgresql.normal-forms-1nf-2nf-3nf`
- Objective: Recognize common duplication and dependency problems.
- Practice expectation: Identify simple 1NF, 2NF, and 3NF issues conceptually.
- Evidence expectation: Learner explains why a schema change reduces anomalies.

#### Lesson 25: Denormalization and ERD reasoning

- Target learning skills:
  - `sql-postgresql.denormalization-tradeoffs`
  - `sql-postgresql.erd-reasoning`
- Objective: Explain schema tradeoffs using relationship diagrams and reporting needs.
- Practice expectation: Compare normalized and denormalized design choices.
- Evidence expectation: Learner defends a design tradeoff and relationship model.

#### Lesson 26: Schema refactoring basics

- Target learning skills:
  - `sql-postgresql.schema-refactoring-basics`
- Objective: Improve a small schema while preserving meaning.
- Practice expectation: Propose a schema refactor and identify migration risks conceptually.
- Evidence expectation: Learner explains the refactor, risks, and affected relationships.

- Practice expectations: project-based and interview-style design reasoning.
- Assessment checkpoint: learner proposes and explains a small relational schema.
- Review point: revisit keys and relationship reasoning if schema boundaries are unclear.

## Stage 7: PostgreSQL Data Types, Constraints, and DDL

- Stage goal: Connect schema design to PostgreSQL DDL and table definitions.
- Included learning skills:
  - `sql-postgresql.ddl-basics`
  - `sql-postgresql.postgresql-data-types`
  - `sql-postgresql.constraints-ddl`
  - `sql-postgresql.default-values-identity`
  - `sql-postgresql.schema-migrations-concepts`
  - `sql-postgresql.views-basics`

#### Lesson 27: DDL basics and data types

- Target learning skills:
  - `sql-postgresql.ddl-basics`
  - `sql-postgresql.postgresql-data-types`
- Objective: Explain basic DDL and choose suitable PostgreSQL data types.
- Practice expectation: Draft table definitions for a small schema.
- Evidence expectation: Learner justifies data type choices and DDL intent.

#### Lesson 28: Constraints in PostgreSQL tables

- Target learning skills:
  - `sql-postgresql.constraints-ddl`
- Objective: Use constraints to protect data integrity.
- Practice expectation: Add `primary key`, `foreign key`, `UNIQUE`, `NOT NULL`, and `CHECK` constraints.
- Evidence expectation: Learner explains what each constraint protects.

#### Lesson 29: Defaults, identity columns, and migrations

- Target learning skills:
  - `sql-postgresql.default-values-identity`
  - `sql-postgresql.schema-migrations-concepts`
- Objective: Reason about default values, generated ids, and safe schema changes.
- Practice expectation: Identify when defaults or identity columns are appropriate.
- Evidence expectation: Learner explains schema change risks and generated identity behavior.

#### Lesson 30: Views basics

- Target learning skills:
  - `sql-postgresql.views-basics`
- Objective: Explain views as reusable query definitions.
- Practice expectation: Identify a query that could be represented as a view.
- Evidence expectation: Learner explains view purpose and limitations.

- Practice expectations: guided DDL and schema design practice.
- Assessment checkpoint: learner defines a small schema and explains integrity rules.
- Review point: revisit data types and constraints before projects.

## Stage 8: Transactions and Concurrency

- Stage goal: Build conceptual safety around database changes and concurrent behavior.
- Included learning skills:
  - `sql-postgresql.transaction-concepts`
  - `sql-postgresql.commit-rollback`
  - `sql-postgresql.isolation-levels-concepts`
  - `sql-postgresql.locking-basics`
  - `sql-postgresql.mvcc-basics`
  - `sql-postgresql.concurrency-anomalies`

#### Lesson 31: Transaction concepts and COMMIT/ROLLBACK

- Target learning skills:
  - `sql-postgresql.transaction-concepts`
  - `sql-postgresql.commit-rollback`
- Objective: Explain transaction boundaries and commit or rollback outcomes.
- Practice expectation: Predict outcomes for simple transaction scenarios.
- Evidence expectation: Learner explains why grouped changes should be transactional.

#### Lesson 32: Isolation and concurrency anomalies

- Target learning skills:
  - `sql-postgresql.isolation-levels-concepts`
  - `sql-postgresql.concurrency-anomalies`
- Objective: Explain isolation levels and common anomaly categories conceptually.
- Practice expectation: Classify simplified concurrent transaction scenarios.
- Evidence expectation: Learner explains anomaly risk without overclaiming implementation detail.

#### Lesson 33: Locking and MVCC basics

- Target learning skills:
  - `sql-postgresql.locking-basics`
  - `sql-postgresql.mvcc-basics`
- Objective: Explain PostgreSQL concurrency behavior at a practical conceptual level.
- Practice expectation: Reason about blocking and version visibility scenarios.
- Evidence expectation: Learner explains how MVCC and locks relate without assuming they remove all conflicts.

- Practice expectations: interview-style and scenario-based reasoning.
- Assessment checkpoint: learner explains transaction outcomes and concurrency tradeoffs.
- Review point: revisit transaction concepts before performance and advanced PostgreSQL topics.

## Stage 9: Indexing and Query Performance

- Stage goal: Build basic performance reasoning using indexes and query plans.
- Included learning skills:
  - `sql-postgresql.index-concepts-btree`
  - `sql-postgresql.composite-indexes`
  - `sql-postgresql.index-selectivity`
  - `sql-postgresql.explain-basics`
  - `sql-postgresql.explain-analyze-basics`
  - `sql-postgresql.scan-types-optimization-basics`
  - `sql-postgresql.query-optimization-basics`
  - `sql-postgresql.performance-reasoning`

#### Lesson 34: Index concepts and B-tree basics

- Target learning skills:
  - `sql-postgresql.index-concepts-btree`
- Objective: Explain what indexes can and cannot do.
- Practice expectation: Identify candidate indexed columns for simple predicates.
- Evidence expectation: Learner explains index benefit and write/storage tradeoffs.

#### Lesson 35: Composite indexes and selectivity

- Target learning skills:
  - `sql-postgresql.composite-indexes`
  - `sql-postgresql.index-selectivity`
- Objective: Reason about multi-column indexes and value distribution.
- Practice expectation: Match index choices to filter and sort patterns.
- Evidence expectation: Learner explains selectivity and composite index order at a basic level.

#### Lesson 36: EXPLAIN and EXPLAIN ANALYZE

- Target learning skills:
  - `sql-postgresql.explain-basics`
  - `sql-postgresql.explain-analyze-basics`
- Objective: Interpret basic query plan output cautiously.
- Practice expectation: Read simple plans and compare estimates to actual execution information.
- Evidence expectation: Learner connects plan output to query behavior.

#### Lesson 37: Scan types and query optimization basics

- Target learning skills:
  - `sql-postgresql.scan-types-optimization-basics`
  - `sql-postgresql.query-optimization-basics`
  - `sql-postgresql.performance-reasoning`
- Objective: Propose simple optimizations while preserving correctness.
- Practice expectation: Diagnose a simple plan and propose a measured next step.
- Evidence expectation: Learner explains an optimization with plan evidence and result-preservation concern.

- Practice expectations: error-based and project-style performance reasoning.
- Assessment checkpoint: learner explains a simple query plan and justified optimization.
- Review point: revisit predicates, joins, and grouping when performance reasoning is weak.

## Stage 10: Advanced PostgreSQL Features

- Stage goal: Introduce advanced PostgreSQL capabilities conceptually and selectively.
- Included learning skills:
  - `sql-postgresql.window-functions-basics`
  - `sql-postgresql.json-jsonb-basics`
  - `sql-postgresql.full-text-search-concepts`
  - `sql-postgresql.functions-procedures-concepts`
  - `sql-postgresql.triggers-concepts`
  - `sql-postgresql.materialized-views-concepts`

#### Lesson 38: Window functions basics

- Target learning skills:
  - `sql-postgresql.window-functions-basics`
- Objective: Explain and use basic window functions without confusing them with grouping.
- Practice expectation: Write a simple window function query.
- Evidence expectation: Learner explains partitioning or ordering behavior.

#### Lesson 39: JSON/JSONB and full-text search concepts

- Target learning skills:
  - `sql-postgresql.json-jsonb-basics`
  - `sql-postgresql.full-text-search-concepts`
- Objective: Recognize when PostgreSQL semi-structured and text search features may be appropriate.
- Practice expectation: Compare feature use cases conceptually.
- Evidence expectation: Learner explains tradeoffs without replacing relational modeling by default.

#### Lesson 40: Functions, triggers, and materialized views conceptually

- Target learning skills:
  - `sql-postgresql.functions-procedures-concepts`
  - `sql-postgresql.triggers-concepts`
  - `sql-postgresql.materialized-views-concepts`
- Objective: Explain advanced database-side behavior and maintenance tradeoffs.
- Practice expectation: Identify appropriate and risky use cases.
- Evidence expectation: Learner explains benefits, risks, and operational implications.

- Practice expectations: interview-style and conceptual project planning.
- Assessment checkpoint: learner explains appropriate use cases and tradeoffs for advanced features.
- Review point: revisit schema, performance, and transaction concepts as prerequisites.

## Stage 11: Projects and Real-World Practice

- Stage goal: Apply SQL/PostgreSQL learning skills in realistic, artifact-producing work.
- Included learning skills:
  - `sql-postgresql.project-application`
  - `sql-postgresql.reporting-queries-basic`
  - `sql-postgresql.schema-refactoring-basics`
  - `sql-postgresql.performance-reasoning`

#### Lesson 41: Northwind query practice milestone

- Target learning skills:
  - `sql-postgresql.project-application`
  - `sql-postgresql.reporting-queries-basic`
- Objective: Plan a realistic query practice milestone using a business-style dataset category.
- Practice expectation: Define query goals and evidence expectations without creating full Northwind tasks yet.
- Evidence expectation: Future reviewed query artifacts may support project evidence.

#### Lesson 42: Schema design and reporting milestone

- Target learning skills:
  - `sql-postgresql.project-application`
  - `sql-postgresql.schema-refactoring-basics`
- Objective: Plan a mini project involving schema design and reporting outputs.
- Practice expectation: Define milestones, artifacts, and review criteria.
- Evidence expectation: Future reviewed schema and reporting artifacts may support mastery recommendations.

#### Lesson 43: Performance and transaction investigation milestone

- Target learning skills:
  - `sql-postgresql.project-application`
  - `sql-postgresql.performance-reasoning`
  - `sql-postgresql.transaction-concepts`
- Objective: Plan project work around query performance or transaction behavior.
- Practice expectation: Identify artifacts such as plan notes, query revisions, or scenario explanations.
- Evidence expectation: Future reviewed investigation artifacts may support evidence-backed assessment.

- Practice expectations: project-based practice using categories from `domains/sql-postgresql/PROJECTS.md`.
- Assessment checkpoint: learner explains project artifacts, assumptions, and evidence value.
- Review point: revisit weak prerequisite learning skills before project execution.

## Stage 12: Interview and Explanation Readiness

- Stage goal: Prepare the learner to explain SQL/PostgreSQL behavior clearly under questioning.
- Included learning skills:
  - `sql-postgresql.query-behavior-explanation`
  - `sql-postgresql.interview-explanation`
  - `sql-postgresql.performance-reasoning`
  - `sql-postgresql.project-application`
  - `sql-postgresql.documentation-reading`
  - `sql-postgresql.sql-error-debugging`

#### Lesson 44: Query behavior and debugging explanation

- Target learning skills:
  - `sql-postgresql.query-behavior-explanation`
  - `sql-postgresql.sql-error-debugging`
  - `sql-postgresql.documentation-reading`
- Objective: Explain query results, debug errors, and reference documentation effectively.
- Practice expectation: Answer follow-up questions about query behavior and fixes.
- Evidence expectation: Learner explains reasoning and repairs mistakes under questioning.

#### Lesson 45: Interview and project defense

- Target learning skills:
  - `sql-postgresql.interview-explanation`
  - `sql-postgresql.performance-reasoning`
  - `sql-postgresql.project-application`
- Objective: Defend SQL/PostgreSQL choices across querying, design, performance, and project work.
- Practice expectation: Simulate interview-style questioning with follow-ups.
- Evidence expectation: Learner answers accurately, explains tradeoffs, and defends assumptions.

- Practice expectations: interview-style practice and mixed review.
- Assessment checkpoint: learner demonstrates explanation quality, correctness, transfer ability, and independence.
- Review point: schedule targeted review for weak learning skills before formal assessment.

## Review and Assessment Strategy

- Reviews SHOULD use triggers from `core/learning-engine/REVIEW_MODEL.md`.
- Assessments SHOULD use dimensions from `core/learning-engine/ASSESSMENT_MODEL.md`.
- Review points SHOULD target weak learning skills, failed assessments, stale learning skills, upcoming prerequisites, repeated mistakes, or user-requested review.
- Mastery recommendations MUST be based on evidence.
- Project and interview work MAY provide evidence when learner output is captured or reviewed.

## Localization Notes

- Future lesson delivery MAY use Azerbaijani instruction with English SQL/PostgreSQL technical terms as a project preference.
- Azerbaijani MUST NOT be hardcoded as the only framework language.
- SQL/PostgreSQL technical terms such as `SELECT`, `WHERE`, `JOIN`, `GROUP BY`, `index`, `transaction`, `MVCC`, and `EXPLAIN ANALYZE` SHOULD remain in English unless glossary guidance changes.
- Localization behavior SHOULD follow `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Should the first authored lesson path begin with smaller synthetic tables before Northwind?
- Which lessons should become formal assessment checkpoints in Stage 8.3?
- Should advanced PostgreSQL features remain in the main track or become optional extension modules?
