# SQL/PostgreSQL Domain Core

Generated compact domain core for `sql-postgresql`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/sql-postgresql/DOMAIN.md`.

# SQL and PostgreSQL

## Domain Identity

- Domain id: `sql-postgresql`
- Domain title: `SQL and PostgreSQL`
- Domain version: `0.1.0-draft`

## Target Audience

- Learners who want to become productive with SQL and PostgreSQL.
- Software engineers who need practical database skills.
- Learners progressing from beginner to advanced database topics.

## Domain Goals

- Understand relational database fundamentals.
- Write correct SQL queries.
- Work confidently with PostgreSQL.
- Reason about schema design, constraints, joins, aggregation, subqueries, transactions, indexing, and performance.
- Practice with realistic datasets such as Northwind where appropriate.

## Expected Outcomes

- Learner can write and explain SQL queries.
- Learner can design basic relational schemas.
- Learner can use PostgreSQL-specific features at an appropriate level.
- Learner can reason about query behavior and performance.
- Learner can apply concepts in exercises, projects, and interview-style explanations.

## Supported Tracks

- `sql-postgresql.main`: beginner-to-advanced SQL/PostgreSQL track.
- `sql-postgresql.practice`: focused practice and review track.
- `sql-postgresql.interview`: interview and explanation track.

## Localization Policy

- Instruction language MAY be Azerbaijani for the initial project preference.
- Terminology language MAY be English.
- Important technical terms such as `SELECT`, `WHERE`, `JOIN`, `primary key`, `foreign key`, `index`, `transaction`, `EXPLAIN ANALYZE`, and `MVCC` SHOULD remain in English unless `domains/sql-postgresql/GLOSSARY.md` says otherwise.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Prerequisites

- Basic computer literacy.
- No prior SQL knowledge required for the main beginner track.
- Programming experience is useful but not required.

## Non-Goals

- This domain is not a full DBA certification program at draft stage.
- It does not replace official PostgreSQL documentation.
- It does not contain learner-specific progress.
- It does not teach backend application frameworks directly.

## Relationships

- Draft syllabus skeleton: `domains/sql-postgresql/SYLLABUS.md`.
- Initial learning skill graph skeleton: `domains/sql-postgresql/SKILL_GRAPH.md`.
- Practice guidance: `domains/sql-postgresql/PRACTICE_RULES.md`.
- Assessment mapping: `domains/sql-postgresql/ASSESSMENT_RULES.md`.
- Project placeholders: `domains/sql-postgresql/PROJECTS.md`.
- Glossary guidance: `domains/sql-postgresql/GLOSSARY.md`.
- Domain pack contract: `specification/DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Which PostgreSQL version should this draft domain pack target first?
- Should Northwind be the default practice dataset or one of several supported datasets?

## SYLLABUS.md

Canonical source: `domains/sql-postgresql/SYLLABUS.md`.

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

## SKILL_GRAPH.md

Canonical source: `domains/sql-postgresql/SKILL_GRAPH.md`.

# SQL/PostgreSQL Learning Skill Graph

This file defines reusable SQL/PostgreSQL learning skills for the `sql-postgresql` domain pack. It does not define learner state, lessons, exercises, or learner mastery records.

## Graph Overview

The graph is organized from relational foundations through query composition, joins, aggregation, data modeling, PostgreSQL-specific behavior, transactions, performance, advanced features, and cross-cutting professional skills.

Learning skill entries define target expectations. Actual learner mastery MUST be recorded only in learner state and MUST be supported by evidence or explicit user instruction.

## Skill Graph Conventions

- Every learning skill id MUST use the `sql-postgresql.` prefix.
- Learning skills are learner competencies, not lesson titles and not agent skills.
- Target mastery uses the framework scale in `core/mastery-model/MASTERY_LEVELS.md`.
- Evidence requirements MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Practice types SHOULD use categories from `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment focus SHOULD align with `core/learning-engine/ASSESSMENT_MODEL.md`.
- SQL/PostgreSQL technical terms SHOULD remain in English. Future lessons and glossary entries MAY provide Azerbaijani explanations according to `specification/LOCALIZATION_SPEC.md`.

## Stage 1: Relational Database and SQL Foundations

### `sql-postgresql.relational-model`

- Title: Relational model fundamentals
- Level: foundation
- Description: Explain relational data as structured tables connected by meaningful relationships.
- Prerequisites: none
- Target mastery: M2
- Evidence requirements: Learner explains tables, relationships, and relational thinking using a small schema.
- Practice types: recall practice, interview-style practice
- Assessment focus: Explanation quality and correctness of conceptual distinctions.
- Common mistakes: Treating a database as one spreadsheet; ignoring relationships.
- Glossary terms: SQL, table, row, column
- Related learning skills: `sql-postgresql.table-row-column-concepts`, `sql-postgresql.keys-concepts`

### `sql-postgresql.table-row-column-concepts`

- Title: Database, table, row, and column concepts
- Level: foundation
- Description: Distinguish databases, tables, rows, columns, and values.
- Prerequisites: none
- Target mastery: M2
- Evidence requirements: Learner labels parts of a simple table and explains what each part represents.
- Practice types: recall practice, guided practice
- Assessment focus: Correct vocabulary and transfer to unfamiliar table examples.
- Common mistakes: Confusing row with column; confusing table with database.
- Glossary terms: PostgreSQL, table, row, column
- Related learning skills: `sql-postgresql.relational-model`, `sql-postgresql.select-basics`

### `sql-postgresql.keys-concepts`

- Title: Primary key and foreign key concepts
- Level: foundation
- Description: Explain how `primary key` and `foreign key` values identify rows and connect tables.
- Prerequisites: `sql-postgresql.table-row-column-concepts`
- Target mastery: M2
- Evidence requirements: Learner identifies likely keys in a simple schema and explains their purpose.
- Practice types: recall practice, guided practice, interview-style practice
- Assessment focus: Correctness of key identification and relationship reasoning.
- Common mistakes: Assuming every visible id is a valid key; confusing `primary key` and `foreign key`.
- Glossary terms: primary key, foreign key
- Related learning skills: `sql-postgresql.relationship-reasoning`, `sql-postgresql.constraints-ddl`

### `sql-postgresql.sql-statement-anatomy`

- Title: SQL statement anatomy
- Level: foundation
- Description: Recognize common SQL statement parts and their logical role.
- Prerequisites: `sql-postgresql.table-row-column-concepts`
- Target mastery: M2
- Evidence requirements: Learner explains the purpose of clauses in a simple query.
- Practice types: recall practice, guided practice
- Assessment focus: Explanation quality and correct clause identification.
- Common mistakes: Reading SQL only top-to-bottom; confusing syntax order with logical processing.
- Glossary terms: SELECT, WHERE, GROUP BY
- Related learning skills: `sql-postgresql.select-basics`, `sql-postgresql.basic-query-composition`

### `sql-postgresql.postgresql-tooling-concepts`

- Title: PostgreSQL tooling concepts
- Level: foundation
- Description: Conceptually understand how PostgreSQL clients, databases, schemas, and query tools fit together.
- Prerequisites: `sql-postgresql.table-row-column-concepts`
- Target mastery: M2
- Evidence requirements: Learner explains the role of a database server, client, and query interface without installation steps.
- Practice types: recall practice, interview-style practice
- Assessment focus: Correct conceptual separation of server, database, and client tooling.
- Common mistakes: Confusing PostgreSQL with a GUI; confusing schema with database.
- Glossary terms: PostgreSQL
- Related learning skills: `sql-postgresql.ddl-basics`, `sql-postgresql.documentation-reading`

## Stage 2: Filtering, Sorting, and Basic Query Composition

### `sql-postgresql.select-basics`

- Title: Basic SELECT queries
- Level: foundation
- Description: Write simple `SELECT` queries over one table.
- Prerequisites: `sql-postgresql.table-row-column-concepts`, `sql-postgresql.sql-statement-anatomy`
- Target mastery: M4
- Evidence requirements: Learner writes correct simple queries and explains selected output.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness and independence.
- Common mistakes: Selecting unnecessary columns; omitting required table reference.
- Glossary terms: SELECT, table, column
- Related learning skills: `sql-postgresql.column-selection-aliases`, `sql-postgresql.where-comparison-boolean`

### `sql-postgresql.column-selection-aliases`

- Title: Column selection and aliases
- Level: foundation
- Description: Select specific columns and use aliases to improve result readability.
- Prerequisites: `sql-postgresql.select-basics`
- Target mastery: M4
- Evidence requirements: Learner selects appropriate columns and uses clear aliases in a query.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness and result clarity.
- Common mistakes: Alias ambiguity; selecting all columns when specific output is required.
- Glossary terms: SELECT, column
- Related learning skills: `sql-postgresql.basic-query-composition`

### `sql-postgresql.where-comparison-boolean`

- Title: WHERE filtering with comparison and boolean logic
- Level: foundation
- Description: Filter rows using comparison operators and `AND`, `OR`, and `NOT`.
- Prerequisites: `sql-postgresql.select-basics`
- Target mastery: M4
- Evidence requirements: Learner writes filters that match intended conditions and explains boolean logic.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: Correctness, edge cases, and explanation quality.
- Common mistakes: Missing parentheses; using `OR` when `AND` is required.
- Glossary terms: WHERE
- Related learning skills: `sql-postgresql.in-between-predicates`, `sql-postgresql.null-semantics`

### `sql-postgresql.in-between-predicates`

- Title: IN, NOT IN, and BETWEEN predicates
- Level: foundation
- Description: Use set and range predicates for concise filtering.
- Prerequisites: `sql-postgresql.where-comparison-boolean`
- Target mastery: M3
- Evidence requirements: Learner chooses appropriate predicates for list and range requirements.
- Practice types: guided practice, independent practice
- Assessment focus: Correct predicate choice and boundary reasoning.
- Common mistakes: Misunderstanding inclusive `BETWEEN`; mishandling `NOT IN`.
- Glossary terms: WHERE
- Related learning skills: `sql-postgresql.null-semantics`

### `sql-postgresql.like-ilike-patterns`

- Title: LIKE and ILIKE pattern matching
- Level: foundation
- Description: Filter text using SQL pattern matching and PostgreSQL case-insensitive matching.
- Prerequisites: `sql-postgresql.where-comparison-boolean`
- Target mastery: M3
- Evidence requirements: Learner writes pattern filters and explains wildcard behavior.
- Practice types: guided practice, error-based practice
- Assessment focus: Correctness of patterns and case-sensitivity reasoning.
- Common mistakes: Misplacing `%`; expecting `LIKE` to be case-insensitive in all contexts.
- Glossary terms: WHERE
- Related learning skills: `sql-postgresql.postgresql-data-types`

### `sql-postgresql.null-semantics`

- Title: NULL semantics
- Level: foundation
- Description: Explain and use `NULL`, `IS NULL`, and `IS NOT NULL` correctly.
- Prerequisites: `sql-postgresql.where-comparison-boolean`
- Target mastery: M4
- Evidence requirements: Learner writes null-aware filters and explains why `= NULL` is wrong.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: Correctness and explanation of three-valued logic basics.
- Common mistakes: Using `= NULL`; assuming `NULL` means empty string or zero.
- Glossary terms: WHERE
- Related learning skills: `sql-postgresql.aggregate-filtering`, `sql-postgresql.left-join`

### `sql-postgresql.order-by`

- Title: ORDER BY sorting
- Level: foundation
- Description: Sort query results using one or more expressions.
- Prerequisites: `sql-postgresql.select-basics`
- Target mastery: M3
- Evidence requirements: Learner orders results correctly and explains ascending and descending order.
- Practice types: guided practice, independent practice
- Assessment focus: Correct output ordering and stable interpretation of requirements.
- Common mistakes: Assuming database output order without `ORDER BY`.
- Glossary terms: SELECT
- Related learning skills: `sql-postgresql.limit-offset`

### `sql-postgresql.limit-offset`

- Title: LIMIT and OFFSET pagination
- Level: foundation
- Description: Restrict and page through result sets using `LIMIT` and `OFFSET`.
- Prerequisites: `sql-postgresql.order-by`
- Target mastery: M3
- Evidence requirements: Learner writes paginated queries and explains why ordering matters.
- Practice types: guided practice, independent practice
- Assessment focus: Correct pagination behavior and edge-case reasoning.
- Common mistakes: Paginating without deterministic ordering.
- Glossary terms: SELECT
- Related learning skills: `sql-postgresql.query-optimization-basics`

### `sql-postgresql.distinct-results`

- Title: DISTINCT result sets
- Level: foundation
- Description: Use `DISTINCT` to remove duplicate result rows intentionally.
- Prerequisites: `sql-postgresql.select-basics`
- Target mastery: M3
- Evidence requirements: Learner uses `DISTINCT` only when duplicate elimination is required.
- Practice types: guided practice, error-based practice
- Assessment focus: Correctness and understanding of row-level distinctness.
- Common mistakes: Using `DISTINCT` to hide join mistakes.
- Glossary terms: SELECT
- Related learning skills: `sql-postgresql.duplicate-row-avoidance`

### `sql-postgresql.basic-query-composition`

- Title: Basic query composition
- Level: foundation
- Description: Combine selection, aliases, filtering, sorting, pagination, and distinctness in one query.
- Prerequisites: `sql-postgresql.column-selection-aliases`, `sql-postgresql.where-comparison-boolean`, `sql-postgresql.order-by`
- Target mastery: M4
- Evidence requirements: Learner writes a complete single-table query from a requirement.
- Practice types: mixed practice, independent practice
- Assessment focus: Correctness, independence, and requirement interpretation.
- Common mistakes: Solving only part of the requirement; clause order confusion.
- Glossary terms: SELECT, WHERE
- Related learning skills: `sql-postgresql.inner-join`, `sql-postgresql.aggregate-functions`

## Stage 3: Joins and Relationships

### `sql-postgresql.relationship-reasoning`

- Title: Relationship reasoning
- Level: foundation
- Description: Reason about one-to-one, one-to-many, and many-to-many table relationships.
- Prerequisites: `sql-postgresql.keys-concepts`
- Target mastery: M3
- Evidence requirements: Learner explains relationships from keys and sample tables.
- Practice types: recall practice, guided practice, interview-style practice
- Assessment focus: Explanation quality and relationship correctness.
- Common mistakes: Reversing relationship direction; ignoring bridge tables.
- Glossary terms: primary key, foreign key, table
- Related learning skills: `sql-postgresql.inner-join`, `sql-postgresql.many-to-many-relationships`

### `sql-postgresql.inner-join`

- Title: INNER JOIN
- Level: foundation
- Description: Combine matching rows from related tables using `INNER JOIN`.
- Prerequisites: `sql-postgresql.relationship-reasoning`, `sql-postgresql.basic-query-composition`
- Target mastery: M4
- Evidence requirements: Learner writes correct inner joins and explains matched rows.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness, join condition quality, and independence.
- Common mistakes: Cartesian products; joining on the wrong columns.
- Glossary terms: JOIN, foreign key
- Related learning skills: `sql-postgresql.join-conditions-duplicates`, `sql-postgresql.left-join`

### `sql-postgresql.left-join`

- Title: LEFT JOIN
- Level: intermediate
- Description: Use `LEFT JOIN` to preserve unmatched rows from the left table.
- Prerequisites: `sql-postgresql.inner-join`, `sql-postgresql.null-semantics`
- Target mastery: M4
- Evidence requirements: Learner writes left joins and explains unmatched row behavior.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: Correctness and null-aware explanation.
- Common mistakes: Filtering the right table in `WHERE` and accidentally changing join meaning.
- Glossary terms: JOIN, WHERE
- Related learning skills: `sql-postgresql.outer-joins-concepts`, `sql-postgresql.aggregate-filtering`

### `sql-postgresql.outer-joins-concepts`

- Title: RIGHT and FULL JOIN concepts
- Level: intermediate
- Description: Explain `RIGHT JOIN` and `FULL JOIN` behavior conceptually.
- Prerequisites: `sql-postgresql.left-join`
- Target mastery: M2
- Evidence requirements: Learner explains when outer join variants preserve unmatched rows.
- Practice types: recall practice, interview-style practice
- Assessment focus: Conceptual correctness and transfer to diagrams.
- Common mistakes: Treating all joins as equivalent; overusing uncommon join types.
- Glossary terms: JOIN
- Related learning skills: `sql-postgresql.left-join`

### `sql-postgresql.join-conditions-duplicates`

- Title: Join conditions and duplicate row avoidance
- Level: intermediate
- Description: Write correct join conditions and recognize duplicate rows caused by relationship shape.
- Prerequisites: `sql-postgresql.inner-join`
- Target mastery: M4
- Evidence requirements: Learner diagnoses and fixes duplicate row problems in joined results.
- Practice types: error-based practice, mixed practice
- Assessment focus: Correctness, debugging, and relationship reasoning.
- Common mistakes: Missing part of a composite condition; using `DISTINCT` instead of fixing the join.
- Glossary terms: JOIN, DISTINCT
- Related learning skills: `sql-postgresql.many-to-many-relationships`, `sql-postgresql.distinct-results`

### `sql-postgresql.many-to-many-relationships`

- Title: Many-to-many relationships
- Level: intermediate
- Description: Query relationships represented through junction or bridge tables.
- Prerequisites: `sql-postgresql.relationship-reasoning`, `sql-postgresql.inner-join`
- Target mastery: M3
- Evidence requirements: Learner writes a query through a bridge table and explains relationship cardinality.
- Practice types: guided practice, independent practice
- Assessment focus: Correct join path and explanation quality.
- Common mistakes: Skipping the bridge table; duplicating results unintentionally.
- Glossary terms: JOIN, primary key, foreign key
- Related learning skills: `sql-postgresql.schema-design`, `sql-postgresql.join-conditions-duplicates`

## Stage 4: Aggregation and Grouping

### `sql-postgresql.aggregate-functions`

- Title: Aggregate functions
- Level: foundation
- Description: Use aggregate functions such as `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.
- Prerequisites: `sql-postgresql.basic-query-composition`
- Target mastery: M3
- Evidence requirements: Learner writes aggregate queries and explains what is being summarized.
- Practice types: guided practice, independent practice
- Assessment focus: Correct aggregate choice and result interpretation.
- Common mistakes: Counting nullable columns incorrectly; confusing row count with distinct count.
- Glossary terms: GROUP BY
- Related learning skills: `sql-postgresql.group-by`

### `sql-postgresql.group-by`

- Title: GROUP BY
- Level: foundation
- Description: Group rows by selected dimensions for aggregate summaries.
- Prerequisites: `sql-postgresql.aggregate-functions`
- Target mastery: M4
- Evidence requirements: Learner groups data correctly and explains grouping granularity.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness and explanation of grouping level.
- Common mistakes: Selecting non-grouped columns; grouping at the wrong granularity.
- Glossary terms: GROUP BY
- Related learning skills: `sql-postgresql.having`, `sql-postgresql.grouping-with-joins`

### `sql-postgresql.having`

- Title: HAVING
- Level: intermediate
- Description: Filter grouped results using `HAVING`.
- Prerequisites: `sql-postgresql.group-by`
- Target mastery: M3
- Evidence requirements: Learner filters aggregate groups and explains `WHERE` vs `HAVING`.
- Practice types: guided practice, error-based practice
- Assessment focus: Correct filtering stage and explanation quality.
- Common mistakes: Using `WHERE` for aggregate filters; filtering before grouping unintentionally.
- Glossary terms: GROUP BY, WHERE
- Related learning skills: `sql-postgresql.aggregate-filtering`

### `sql-postgresql.aggregate-filtering`

- Title: Aggregate filtering and conditional aggregation
- Level: intermediate
- Description: Apply filters before or within aggregate calculations.
- Prerequisites: `sql-postgresql.having`, `sql-postgresql.null-semantics`
- Target mastery: M3
- Evidence requirements: Learner writes aggregate queries that satisfy conditional reporting requirements.
- Practice types: mixed practice, independent practice
- Assessment focus: Correctness and edge-case handling.
- Common mistakes: Filtering rows too early; mishandling `NULL` in aggregates.
- Glossary terms: GROUP BY, WHERE
- Related learning skills: `sql-postgresql.reporting-queries-basic`

### `sql-postgresql.grouping-with-joins`

- Title: Grouping with joins
- Level: intermediate
- Description: Combine joins and aggregation to summarize related data.
- Prerequisites: `sql-postgresql.group-by`, `sql-postgresql.inner-join`
- Target mastery: M4
- Evidence requirements: Learner writes joined aggregate queries and explains duplication risks.
- Practice types: mixed practice, error-based practice
- Assessment focus: Correctness, duplicate avoidance, and transfer ability.
- Common mistakes: Inflated aggregates due to incorrect joins.
- Glossary terms: JOIN, GROUP BY
- Related learning skills: `sql-postgresql.join-conditions-duplicates`, `sql-postgresql.reporting-queries-basic`

### `sql-postgresql.reporting-queries-basic`

- Title: Basic reporting queries
- Level: intermediate
- Description: Compose practical summary queries for common reporting needs.
- Prerequisites: `sql-postgresql.grouping-with-joins`, `sql-postgresql.aggregate-filtering`
- Target mastery: M4
- Evidence requirements: Learner produces a correct report-style query from requirements.
- Practice types: mixed practice, project-based practice
- Assessment focus: Correctness, independence, and requirement interpretation.
- Common mistakes: Missing grouping dimensions; returning misleading totals.
- Glossary terms: GROUP BY, JOIN
- Related learning skills: `sql-postgresql.project-application`, `sql-postgresql.query-decomposition-readability`

## Stage 5: Subqueries, CTEs, and Set Operations

### `sql-postgresql.scalar-subqueries`

- Title: Scalar subqueries
- Level: intermediate
- Description: Use subqueries that return a single value in expressions or filters.
- Prerequisites: `sql-postgresql.basic-query-composition`, `sql-postgresql.aggregate-functions`
- Target mastery: M3
- Evidence requirements: Learner uses a scalar subquery to compare against a derived value.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness and result cardinality reasoning.
- Common mistakes: Returning multiple rows where one value is expected.
- Glossary terms: SELECT, WHERE
- Related learning skills: `sql-postgresql.in-exists-subqueries`

### `sql-postgresql.in-exists-subqueries`

- Title: IN and EXISTS subqueries
- Level: intermediate
- Description: Use `IN` and `EXISTS` subqueries for membership and existence checks.
- Prerequisites: `sql-postgresql.scalar-subqueries`, `sql-postgresql.in-between-predicates`
- Target mastery: M3
- Evidence requirements: Learner chooses `IN` or `EXISTS` appropriately for a requirement.
- Practice types: guided practice, error-based practice
- Assessment focus: Correctness and semantic explanation.
- Common mistakes: Ignoring null behavior; confusing membership with existence.
- Glossary terms: WHERE
- Related learning skills: `sql-postgresql.correlated-subqueries-concepts`

### `sql-postgresql.correlated-subqueries-concepts`

- Title: Correlated subqueries conceptually
- Level: intermediate
- Description: Explain how a subquery can depend on values from the outer query.
- Prerequisites: `sql-postgresql.in-exists-subqueries`
- Target mastery: M2
- Evidence requirements: Learner explains correlated subquery behavior using a simple example.
- Practice types: recall practice, guided practice, interview-style practice
- Assessment focus: Explanation quality and conceptual correctness.
- Common mistakes: Assuming the subquery runs once independently.
- Glossary terms: SELECT, WHERE
- Related learning skills: `sql-postgresql.ctes`

### `sql-postgresql.ctes`

- Title: Common table expressions
- Level: intermediate
- Description: Use CTEs to make multi-step queries easier to read and reason about.
- Prerequisites: `sql-postgresql.scalar-subqueries`, `sql-postgresql.reporting-queries-basic`
- Target mastery: M4
- Evidence requirements: Learner decomposes a query into meaningful CTE steps.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: Correctness, readability, and decomposition quality.
- Common mistakes: Using CTEs without clarifying logic; hiding inefficient query structure.
- Glossary terms: SELECT
- Related learning skills: `sql-postgresql.query-decomposition-readability`, `sql-postgresql.explain-analyze-basics`

### `sql-postgresql.set-operations`

- Title: UNION, INTERSECT, and EXCEPT
- Level: intermediate
- Description: Combine compatible result sets with SQL set operations.
- Prerequisites: `sql-postgresql.select-basics`, `sql-postgresql.distinct-results`
- Target mastery: M3
- Evidence requirements: Learner selects the correct set operation for a result-combination requirement.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness and compatibility of result columns.
- Common mistakes: Confusing `UNION` with `JOIN`; ignoring duplicate behavior.
- Glossary terms: SELECT
- Related learning skills: `sql-postgresql.query-decomposition-readability`

### `sql-postgresql.query-decomposition-readability`

- Title: Query readability and decomposition
- Level: intermediate
- Description: Break complex query requirements into readable, testable steps.
- Prerequisites: `sql-postgresql.ctes`, `sql-postgresql.basic-query-composition`
- Target mastery: M4
- Evidence requirements: Learner explains the steps of a complex query and justifies structure.
- Practice types: mixed practice, project-based practice, interview-style practice
- Assessment focus: Explanation quality, correctness, and maintainability.
- Common mistakes: Writing one unreadable query block; skipping intermediate validation.
- Glossary terms: SELECT
- Related learning skills: `sql-postgresql.documentation-reading`, `sql-postgresql.query-behavior-explanation`

## Stage 6: Data Modeling and Normalization

### `sql-postgresql.entity-modeling`

- Title: Entity modeling
- Level: intermediate
- Description: Identify entities, attributes, and relationships from requirements.
- Prerequisites: `sql-postgresql.relational-model`, `sql-postgresql.relationship-reasoning`
- Target mastery: M3
- Evidence requirements: Learner maps a small problem statement to entities and attributes.
- Practice types: guided practice, project-based practice
- Assessment focus: Transfer ability and correctness of entity boundaries.
- Common mistakes: Creating entities for every field; missing relationship entities.
- Glossary terms: table, row, column
- Related learning skills: `sql-postgresql.erd-reasoning`, `sql-postgresql.schema-design`

### `sql-postgresql.normalization-basics`

- Title: Normalization basics
- Level: intermediate
- Description: Explain why normalization reduces duplication and update anomalies.
- Prerequisites: `sql-postgresql.entity-modeling`
- Target mastery: M2
- Evidence requirements: Learner explains normalization goals using a small data example.
- Practice types: recall practice, guided practice, interview-style practice
- Assessment focus: Explanation quality and misconception detection.
- Common mistakes: Treating normalization as always maximizing table count.
- Glossary terms: table, primary key, foreign key
- Related learning skills: `sql-postgresql.normal-forms-1nf-2nf-3nf`

### `sql-postgresql.normal-forms-1nf-2nf-3nf`

- Title: 1NF, 2NF, and 3NF conceptually
- Level: intermediate
- Description: Recognize common normalization issues at a conceptual level.
- Prerequisites: `sql-postgresql.normalization-basics`
- Target mastery: M3
- Evidence requirements: Learner identifies basic normal form violations in a small schema.
- Practice types: guided practice, error-based practice
- Assessment focus: Correctness and transfer to unfamiliar schemas.
- Common mistakes: Memorizing definitions without identifying practical dependency issues.
- Glossary terms: primary key, foreign key
- Related learning skills: `sql-postgresql.denormalization-tradeoffs`, `sql-postgresql.schema-refactoring-basics`

### `sql-postgresql.denormalization-tradeoffs`

- Title: Denormalization tradeoffs
- Level: intermediate
- Description: Explain when deliberate redundancy may be useful and what risks it introduces.
- Prerequisites: `sql-postgresql.normal-forms-1nf-2nf-3nf`
- Target mastery: M3
- Evidence requirements: Learner compares normalized and denormalized designs for a simple reporting need.
- Practice types: interview-style practice, project-based practice
- Assessment focus: Explanation quality and tradeoff reasoning.
- Common mistakes: Treating denormalization as always wrong or always faster.
- Glossary terms: table
- Related learning skills: `sql-postgresql.reporting-queries-basic`, `sql-postgresql.performance-reasoning`

### `sql-postgresql.erd-reasoning`

- Title: ERD reasoning
- Level: intermediate
- Description: Interpret or sketch entity relationship diagrams for database design.
- Prerequisites: `sql-postgresql.entity-modeling`, `sql-postgresql.keys-concepts`
- Target mastery: M3
- Evidence requirements: Learner explains relationships and cardinalities from an ERD-like representation.
- Practice types: guided practice, interview-style practice
- Assessment focus: Relationship correctness and explanation quality.
- Common mistakes: Missing optional relationships; confusing cardinality with row count.
- Glossary terms: primary key, foreign key
- Related learning skills: `sql-postgresql.schema-design`, `sql-postgresql.many-to-many-relationships`

### `sql-postgresql.schema-refactoring-basics`

- Title: Schema refactoring basics
- Level: intermediate
- Description: Improve a small schema while preserving data meaning and relationships.
- Prerequisites: `sql-postgresql.normal-forms-1nf-2nf-3nf`, `sql-postgresql.erd-reasoning`
- Target mastery: M3
- Evidence requirements: Learner proposes a justified schema improvement and explains migration risks conceptually.
- Practice types: project-based practice, error-based practice
- Assessment focus: Correctness, transfer ability, and tradeoff reasoning.
- Common mistakes: Changing schema without considering existing data or constraints.
- Glossary terms: table, primary key, foreign key
- Related learning skills: `sql-postgresql.schema-migrations-concepts`, `sql-postgresql.constraints-ddl`

## Stage 7: PostgreSQL Data Types, Constraints, and DDL

### `sql-postgresql.ddl-basics`

- Title: DDL basics
- Level: foundation
- Description: Understand `CREATE`, `ALTER`, and `DROP` statements conceptually and safely.
- Prerequisites: `sql-postgresql.postgresql-tooling-concepts`, `sql-postgresql.schema-design`
- Target mastery: M3
- Evidence requirements: Learner explains basic DDL intent and identifies safe versus destructive changes.
- Practice types: recall practice, guided practice
- Assessment focus: Correct statement purpose and safety awareness.
- Common mistakes: Treating destructive DDL as reversible without backups or migrations.
- Glossary terms: PostgreSQL, table, column
- Related learning skills: `sql-postgresql.postgresql-data-types`, `sql-postgresql.schema-migrations-concepts`

### `sql-postgresql.postgresql-data-types`

- Title: PostgreSQL data types
- Level: foundation
- Description: Choose appropriate common PostgreSQL data types for columns.
- Prerequisites: `sql-postgresql.ddl-basics`
- Target mastery: M3
- Evidence requirements: Learner selects suitable types for a small schema and explains choices.
- Practice types: guided practice, project-based practice
- Assessment focus: Correctness and practical type reasoning.
- Common mistakes: Using text for every value; ignoring date, numeric, and boolean semantics.
- Glossary terms: PostgreSQL, column
- Related learning skills: `sql-postgresql.default-values-identity`, `sql-postgresql.json-jsonb-basics`

### `sql-postgresql.constraints-ddl`

- Title: Constraints in DDL
- Level: intermediate
- Description: Define and explain `primary key`, `foreign key`, `UNIQUE`, `NOT NULL`, and `CHECK` constraints.
- Prerequisites: `sql-postgresql.keys-concepts`, `sql-postgresql.ddl-basics`
- Target mastery: M4
- Evidence requirements: Learner designs constraints for a small schema and explains protected invariants.
- Practice types: guided practice, independent practice, project-based practice
- Assessment focus: Correctness, transfer ability, and explanation quality.
- Common mistakes: Enforcing rules only in application logic; missing foreign key constraints.
- Glossary terms: primary key, foreign key
- Related learning skills: `sql-postgresql.default-values-identity`, `sql-postgresql.schema-refactoring-basics`

### `sql-postgresql.default-values-identity`

- Title: Default values and generated identity columns
- Level: intermediate
- Description: Use default values and generated identity columns conceptually for practical table design.
- Prerequisites: `sql-postgresql.postgresql-data-types`, `sql-postgresql.constraints-ddl`
- Target mastery: M3
- Evidence requirements: Learner explains when defaults or generated identities improve schema behavior.
- Practice types: guided practice, interview-style practice
- Assessment focus: Correctness and schema design reasoning.
- Common mistakes: Manually managing generated identifiers; using defaults to hide missing required data.
- Glossary terms: primary key, column
- Related learning skills: `sql-postgresql.ddl-basics`

### `sql-postgresql.schema-migrations-concepts`

- Title: Schema migrations conceptually
- Level: intermediate
- Description: Explain how schema changes are planned, versioned, and applied safely.
- Prerequisites: `sql-postgresql.ddl-basics`, `sql-postgresql.schema-refactoring-basics`
- Target mastery: M2
- Evidence requirements: Learner explains migration intent, rollback risk, and data impact conceptually.
- Practice types: interview-style practice, project-based practice
- Assessment focus: Explanation quality and safety reasoning.
- Common mistakes: Applying schema changes without considering existing data or deployment order.
- Glossary terms: PostgreSQL, table
- Related learning skills: `sql-postgresql.project-application`

### `sql-postgresql.views-basics`

- Title: Views basics
- Level: intermediate
- Description: Explain and use views as stored query definitions.
- Prerequisites: `sql-postgresql.query-decomposition-readability`, `sql-postgresql.ddl-basics`
- Target mastery: M3
- Evidence requirements: Learner defines when a view is useful and explains its relationship to an underlying query.
- Practice types: guided practice, project-based practice
- Assessment focus: Correctness and abstraction reasoning.
- Common mistakes: Assuming ordinary views store data by default.
- Glossary terms: SELECT, PostgreSQL
- Related learning skills: `sql-postgresql.materialized-views-concepts`

## Stage 8: Transactions and Concurrency

### `sql-postgresql.transaction-concepts`

- Title: Transaction concepts
- Level: intermediate
- Description: Explain transactions as units of work that preserve consistency.
- Prerequisites: `sql-postgresql.constraints-ddl`
- Target mastery: M2
- Evidence requirements: Learner explains why related database changes should be grouped in a transaction.
- Practice types: recall practice, interview-style practice
- Assessment focus: Conceptual correctness and practical examples.
- Common mistakes: Treating each statement as always independent.
- Glossary terms: transaction
- Related learning skills: `sql-postgresql.commit-rollback`

### `sql-postgresql.commit-rollback`

- Title: COMMIT and ROLLBACK
- Level: intermediate
- Description: Explain how `COMMIT` persists and `ROLLBACK` cancels transaction changes.
- Prerequisites: `sql-postgresql.transaction-concepts`
- Target mastery: M3
- Evidence requirements: Learner predicts transaction outcome with commit or rollback.
- Practice types: guided practice, interview-style practice
- Assessment focus: Correctness and state-transition reasoning.
- Common mistakes: Expecting rollback after commit; forgetting transaction boundaries.
- Glossary terms: transaction
- Related learning skills: `sql-postgresql.isolation-levels-concepts`

### `sql-postgresql.isolation-levels-concepts`

- Title: Isolation levels conceptually
- Level: advanced
- Description: Explain why transaction isolation levels affect concurrent visibility and anomalies.
- Prerequisites: `sql-postgresql.commit-rollback`
- Target mastery: M2
- Evidence requirements: Learner explains isolation as a tradeoff without needing full implementation detail.
- Practice types: recall practice, interview-style practice
- Assessment focus: Explanation quality and conceptual distinctions.
- Common mistakes: Assuming all transactions see the same data at all times.
- Glossary terms: transaction, MVCC
- Related learning skills: `sql-postgresql.concurrency-anomalies`

### `sql-postgresql.locking-basics`

- Title: Locking basics
- Level: advanced
- Description: Explain why locks exist and how they can affect concurrent database work.
- Prerequisites: `sql-postgresql.transaction-concepts`
- Target mastery: M2
- Evidence requirements: Learner explains a simple blocking scenario conceptually.
- Practice types: interview-style practice, error-based practice
- Assessment focus: Explanation quality and troubleshooting reasoning.
- Common mistakes: Treating locks only as errors rather than coordination mechanisms.
- Glossary terms: transaction
- Related learning skills: `sql-postgresql.mvcc-basics`, `sql-postgresql.concurrency-anomalies`

### `sql-postgresql.mvcc-basics`

- Title: MVCC basics
- Level: advanced
- Description: Explain PostgreSQL MVCC as a versioning approach for concurrent reads and writes.
- Prerequisites: `sql-postgresql.isolation-levels-concepts`
- Target mastery: M2
- Evidence requirements: Learner explains why readers and writers can interact without always blocking.
- Practice types: recall practice, interview-style practice
- Assessment focus: Conceptual correctness and terminology.
- Common mistakes: Assuming MVCC eliminates all locking or anomalies.
- Glossary terms: MVCC, transaction
- Related learning skills: `sql-postgresql.locking-basics`

### `sql-postgresql.concurrency-anomalies`

- Title: Concurrency anomalies conceptually
- Level: advanced
- Description: Recognize conceptual anomalies such as dirty reads, non-repeatable reads, and phantom reads.
- Prerequisites: `sql-postgresql.isolation-levels-concepts`, `sql-postgresql.mvcc-basics`
- Target mastery: M2
- Evidence requirements: Learner identifies anomaly types from simplified scenarios.
- Practice types: recall practice, interview-style practice
- Assessment focus: Correct classification and explanation.
- Common mistakes: Memorizing anomaly names without scenario reasoning.
- Glossary terms: transaction, MVCC
- Related learning skills: `sql-postgresql.interview-explanation`

## Stage 9: Indexing and Query Performance

### `sql-postgresql.index-concepts-btree`

- Title: Index concepts and B-tree basics
- Level: intermediate
- Description: Explain indexes and common B-tree index usefulness in PostgreSQL.
- Prerequisites: `sql-postgresql.where-comparison-boolean`, `sql-postgresql.schema-design`
- Target mastery: M3
- Evidence requirements: Learner identifies candidate indexes and explains expected benefit and cost.
- Practice types: guided practice, interview-style practice
- Assessment focus: Explanation quality and tradeoff reasoning.
- Common mistakes: Assuming every column should be indexed.
- Glossary terms: index
- Related learning skills: `sql-postgresql.composite-indexes`, `sql-postgresql.explain-basics`

### `sql-postgresql.composite-indexes`

- Title: Composite indexes
- Level: intermediate
- Description: Explain multi-column indexes and why column order can matter.
- Prerequisites: `sql-postgresql.index-concepts-btree`, `sql-postgresql.basic-query-composition`
- Target mastery: M3
- Evidence requirements: Learner proposes a composite index for a filter or sort pattern and explains order.
- Practice types: guided practice, interview-style practice
- Assessment focus: Correctness and query-pattern reasoning.
- Common mistakes: Ignoring leading column behavior; creating redundant indexes.
- Glossary terms: index, WHERE
- Related learning skills: `sql-postgresql.index-selectivity`

### `sql-postgresql.index-selectivity`

- Title: Index selectivity
- Level: intermediate
- Description: Explain how value distribution affects whether an index is useful.
- Prerequisites: `sql-postgresql.index-concepts-btree`
- Target mastery: M3
- Evidence requirements: Learner reasons about high- and low-selectivity columns in example data.
- Practice types: guided practice, interview-style practice
- Assessment focus: Performance reasoning and explanation quality.
- Common mistakes: Assuming indexes always improve every query.
- Glossary terms: index
- Related learning skills: `sql-postgresql.scan-types-optimization-basics`

### `sql-postgresql.explain-basics`

- Title: EXPLAIN basics
- Level: intermediate
- Description: Use `EXPLAIN` conceptually to inspect a query plan without executing analysis.
- Prerequisites: `sql-postgresql.index-concepts-btree`
- Target mastery: M3
- Evidence requirements: Learner identifies basic plan nodes and connects them to query structure.
- Practice types: guided practice, interview-style practice
- Assessment focus: Interpretation accuracy and terminology.
- Common mistakes: Treating estimated plans as exact runtime truth.
- Glossary terms: EXPLAIN ANALYZE, index
- Related learning skills: `sql-postgresql.explain-analyze-basics`

### `sql-postgresql.explain-analyze-basics`

- Title: EXPLAIN ANALYZE basics
- Level: intermediate
- Description: Use `EXPLAIN ANALYZE` to compare estimated and actual query behavior.
- Prerequisites: `sql-postgresql.explain-basics`
- Target mastery: M3
- Evidence requirements: Learner interprets basic actual timing and row count information.
- Practice types: guided practice, error-based practice
- Assessment focus: Correct plan reading and cautious performance reasoning.
- Common mistakes: Overfocusing on one timing value; ignoring row estimates.
- Glossary terms: EXPLAIN ANALYZE
- Related learning skills: `sql-postgresql.scan-types-optimization-basics`

### `sql-postgresql.scan-types-optimization-basics`

- Title: Sequential scan, index scan, and optimization basics
- Level: intermediate
- Description: Explain basic scan choices and propose simple query or index improvements.
- Prerequisites: `sql-postgresql.explain-analyze-basics`, `sql-postgresql.index-selectivity`
- Target mastery: M3
- Evidence requirements: Learner explains a simple plan and proposes a justified optimization.
- Practice types: guided practice, project-based practice, interview-style practice
- Assessment focus: Performance reasoning, correctness, and transfer ability.
- Common mistakes: Assuming sequential scans are always bad; changing queries without preserving results.
- Glossary terms: index, EXPLAIN ANALYZE
- Related learning skills: `sql-postgresql.performance-reasoning`, `sql-postgresql.query-optimization-basics`

### `sql-postgresql.query-optimization-basics`

- Title: Query optimization basics
- Level: advanced
- Description: Improve simple SQL queries while preserving correctness and using plan evidence.
- Prerequisites: `sql-postgresql.scan-types-optimization-basics`, `sql-postgresql.query-decomposition-readability`
- Target mastery: M4
- Evidence requirements: Learner explains a query issue, proposes a justified change, and verifies result preservation.
- Practice types: error-based practice, project-based practice, interview-style practice
- Assessment focus: Correctness preservation, performance reasoning, and evidence use.
- Common mistakes: Optimizing without measurement; changing query semantics for speed.
- Glossary terms: index, EXPLAIN ANALYZE
- Related learning skills: `sql-postgresql.performance-reasoning`, `sql-postgresql.explain-analyze-basics`

## Stage 10: Advanced PostgreSQL Features

### `sql-postgresql.window-functions-basics`

- Title: Window functions basics
- Level: advanced
- Description: Use basic window functions for calculations across related rows without collapsing result sets.
- Prerequisites: `sql-postgresql.grouping-aggregation`, `sql-postgresql.query-decomposition-readability`
- Target mastery: M3
- Evidence requirements: Learner writes a simple window function query and explains partitioning or ordering.
- Practice types: guided practice, independent practice
- Assessment focus: Correctness and distinction from `GROUP BY`.
- Common mistakes: Confusing window functions with aggregate grouping.
- Glossary terms: GROUP BY, SELECT
- Related learning skills: `sql-postgresql.reporting-queries-basic`

### `sql-postgresql.json-jsonb-basics`

- Title: JSON and JSONB basics
- Level: advanced
- Description: Explain PostgreSQL `JSON` and `JSONB` use cases and basic querying concepts.
- Prerequisites: `sql-postgresql.postgresql-data-types`
- Target mastery: M2
- Evidence requirements: Learner explains when semi-structured data may fit or not fit relational design.
- Practice types: recall practice, guided practice, interview-style practice
- Assessment focus: Tradeoff reasoning and conceptual correctness.
- Common mistakes: Using JSONB to avoid modeling relationships.
- Glossary terms: PostgreSQL
- Related learning skills: `sql-postgresql.denormalization-tradeoffs`

### `sql-postgresql.full-text-search-concepts`

- Title: Full-text search conceptually
- Level: advanced
- Description: Explain PostgreSQL full-text search as indexed text search beyond simple pattern matching.
- Prerequisites: `sql-postgresql.like-ilike-patterns`, `sql-postgresql.index-concepts-btree`
- Target mastery: M2
- Evidence requirements: Learner describes when full-text search may be more appropriate than `LIKE`.
- Practice types: recall practice, interview-style practice
- Assessment focus: Conceptual distinction and use-case reasoning.
- Common mistakes: Treating full-text search as identical to substring matching.
- Glossary terms: index, PostgreSQL
- Related learning skills: `sql-postgresql.performance-reasoning`

### `sql-postgresql.functions-procedures-concepts`

- Title: Functions and stored procedures conceptually
- Level: advanced
- Description: Explain when database-side functions or procedures may be useful.
- Prerequisites: `sql-postgresql.ddl-basics`, `sql-postgresql.transaction-concepts`
- Target mastery: M2
- Evidence requirements: Learner explains tradeoffs of database-side logic versus application-side logic.
- Practice types: interview-style practice, project-based practice
- Assessment focus: Tradeoff reasoning and appropriate use.
- Common mistakes: Moving all business logic into the database without justification.
- Glossary terms: PostgreSQL, transaction
- Related learning skills: `sql-postgresql.triggers-concepts`

### `sql-postgresql.triggers-concepts`

- Title: Triggers conceptually
- Level: advanced
- Description: Explain how triggers react to database events and what risks they introduce.
- Prerequisites: `sql-postgresql.functions-procedures-concepts`
- Target mastery: M2
- Evidence requirements: Learner explains a trigger use case and a debugging or maintenance risk.
- Practice types: interview-style practice
- Assessment focus: Explanation quality and risk awareness.
- Common mistakes: Hiding critical behavior in triggers without documentation.
- Glossary terms: PostgreSQL
- Related learning skills: `sql-postgresql.schema-migrations-concepts`

### `sql-postgresql.materialized-views-concepts`

- Title: Materialized views conceptually
- Level: advanced
- Description: Explain materialized views as stored query results that need refresh strategy.
- Prerequisites: `sql-postgresql.views-basics`, `sql-postgresql.reporting-queries-basic`
- Target mastery: M2
- Evidence requirements: Learner explains when a materialized view may help reporting and what freshness tradeoff exists.
- Practice types: interview-style practice, project-based practice
- Assessment focus: Tradeoff reasoning and conceptual correctness.
- Common mistakes: Treating materialized views as always current.
- Glossary terms: PostgreSQL, SELECT
- Related learning skills: `sql-postgresql.performance-reasoning`

## Cross-Cutting Skills

### `sql-postgresql.documentation-reading`

- Title: Reading PostgreSQL documentation
- Level: foundation
- Description: Find and interpret relevant PostgreSQL documentation for syntax and behavior questions.
- Prerequisites: `sql-postgresql.postgresql-tooling-concepts`
- Target mastery: M3
- Evidence requirements: Learner locates a relevant documentation section and explains how it answers a question.
- Practice types: guided practice, independent practice
- Assessment focus: Transfer ability and source interpretation.
- Common mistakes: Relying on memory when behavior is version-specific.
- Glossary terms: PostgreSQL
- Related learning skills: `sql-postgresql.postgresql-data-types`, `sql-postgresql.query-behavior-explanation`

### `sql-postgresql.query-behavior-explanation`

- Title: Explaining query behavior
- Level: intermediate
- Description: Explain why a query returns a specific result.
- Prerequisites: `sql-postgresql.basic-query-composition`, `sql-postgresql.relationship-reasoning`
- Target mastery: M5
- Evidence requirements: Learner explains query output, intermediate logic, and edge cases for unfamiliar examples.
- Practice types: interview-style practice, mixed practice
- Assessment focus: Explanation quality, correctness, and transfer ability.
- Common mistakes: Describing syntax without explaining data behavior.
- Glossary terms: SELECT, WHERE, JOIN, GROUP BY
- Related learning skills: `sql-postgresql.interview-explanation`, `sql-postgresql.sql-error-debugging`

### `sql-postgresql.sql-error-debugging`

- Title: Debugging SQL errors
- Level: intermediate
- Description: Diagnose syntax, semantic, and result-quality problems in SQL queries.
- Prerequisites: `sql-postgresql.basic-query-composition`
- Target mastery: M4
- Evidence requirements: Learner fixes a broken query and explains the cause.
- Practice types: error-based practice, guided practice, independent practice
- Assessment focus: Correctness, independence, and diagnostic reasoning.
- Common mistakes: Randomly changing syntax without isolating the issue.
- Glossary terms: SELECT, WHERE, JOIN
- Related learning skills: `sql-postgresql.query-decomposition-readability`, `sql-postgresql.join-conditions-duplicates`

### `sql-postgresql.performance-reasoning`

- Title: Performance reasoning
- Level: advanced
- Description: Reason about query performance using requirements, indexes, and plan evidence.
- Prerequisites: `sql-postgresql.scan-types-optimization-basics`
- Target mastery: M5
- Evidence requirements: Learner explains a performance issue and proposes evidence-based next steps.
- Practice types: project-based practice, interview-style practice, error-based practice
- Assessment focus: Transfer ability, explanation quality, and evidence use.
- Common mistakes: Optimizing without measuring; changing behavior while chasing speed.
- Glossary terms: index, EXPLAIN ANALYZE
- Related learning skills: `sql-postgresql.query-optimization-basics`

### `sql-postgresql.interview-explanation`

- Title: Interview explanation
- Level: intermediate
- Description: Explain SQL/PostgreSQL choices clearly under interactive questioning.
- Prerequisites: `sql-postgresql.query-behavior-explanation`
- Target mastery: M6
- Evidence requirements: Learner answers follow-up questions and defends tradeoffs accurately.
- Practice types: interview-style practice
- Assessment focus: Explanation quality, correctness, independence, and transfer ability.
- Common mistakes: Giving fluent but incorrect answers; skipping assumptions.
- Glossary terms: SQL, PostgreSQL, JOIN, index, transaction
- Related learning skills: `sql-postgresql.documentation-reading`, `sql-postgresql.performance-reasoning`

### `sql-postgresql.project-application`

- Title: Project application
- Level: advanced
- Description: Apply SQL/PostgreSQL learning skills in realistic project or reporting work.
- Prerequisites: `sql-postgresql.reporting-queries-basic`, `sql-postgresql.schema-design`, `sql-postgresql.sql-error-debugging`
- Target mastery: M5
- Evidence requirements: Learner produces and explains a reviewed query, schema, report, or investigation artifact.
- Practice types: project-based practice, mixed practice
- Assessment focus: Transfer ability, correctness, consistency, and evidence quality.
- Common mistakes: Producing artifacts without explaining assumptions or validating results.
- Glossary terms: SQL, PostgreSQL, table, JOIN, index
- Related learning skills: `sql-postgresql.schema-migrations-concepts`, `sql-postgresql.performance-reasoning`

## Progression Notes

- Stages are a recommended progression, not a strict execution plan for every learner.
- Commands and agent skills MAY select review or practice out of order when learner state or evidence indicates a need.
- Learning skill entries define target expectations only.
- Actual learner mastery MUST be recorded in learner state, not in this domain pack.
- Evidence requirements MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Future lessons SHOULD preserve SQL/PostgreSQL technical terms in English and MAY provide Azerbaijani explanations according to `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which learning skills should become the first authored lessons in Stage 8.2?
- Should advanced PostgreSQL features remain conceptual in the main track or move to optional extensions?
- Should `sql-postgresql.query-optimization-basics` remain a separate learning skill or be represented by cross-cutting performance reasoning only?

## PRACTICE_RULES.md

Canonical source: `domains/sql-postgresql/PRACTICE_RULES.md`.

# SQL/PostgreSQL Practice Rules

## Practice Overview

These rules define how the `sql-postgresql` domain pack maps framework practice types to SQL/PostgreSQL learner work. They do not define a full exercise bank, Northwind tasks, lesson bodies, learner state, schemas, or executable tooling.

Practice output SHOULD follow `templates/session/PRACTICE_OUTPUT_TEMPLATE.md`.

## Practice Principles

- Practice SHOULD target learning skills from `domains/sql-postgresql/SKILL_GRAPH.md`.
- Practice SHOULD produce evidence when progress or mastery may be updated.
- Practice completion alone MUST NOT imply mastery.
- Learner progress belongs in learner state, not this domain pack.
- Practice or assessment output MAY propose state updates but MUST NOT silently apply them.
- Domain rules MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Practice Type Mapping

### Recall Practice

- Purpose: Reinforce syntax, definitions, and key distinctions.
- Suitable learning skills or stages: Stage 1 foundations, SQL clause vocabulary, keys, `NULL`, transactions, indexing concepts.
- Expected learner output: definitions, short explanations, clause identification, or concept comparisons.
- Evidence value: supports recognition and understanding evidence, usually M1-M2.
- Common failure patterns: vague definitions, confusing `primary key` and `foreign key`, confusing `WHERE` and `HAVING`.

### Guided Practice

- Purpose: Build application ability with scaffolding.
- Suitable learning skills or stages: early `SELECT`, filtering, joins, aggregation, DDL, and `EXPLAIN` reading.
- Expected learner output: partially scaffolded SQL query, schema sketch, query explanation, or plan interpretation.
- Evidence value: supports guided application evidence, usually M3.
- Common failure patterns: depending on hints for every step, copying syntax without explaining behavior.

### Independent Practice

- Purpose: Verify the learner can apply a learning skill without immediate hints.
- Suitable learning skills or stages: single-table queries, joins, aggregation, CTEs, constraints, basic performance tasks.
- Expected learner output: complete SQL query, explanation, schema decision, or debugging result.
- Evidence value: supports independent application evidence, usually M4.
- Common failure patterns: incomplete requirements, hidden join errors, incorrect filter logic, untested assumptions.

### Mixed Practice

- Purpose: Combine multiple learning skills and require discrimination between approaches.
- Suitable learning skills or stages: joins with grouping, subqueries with filters, reporting queries, debugging, performance reasoning.
- Expected learner output: integrated query or explanation using several SQL/PostgreSQL concepts.
- Evidence value: supports transfer evidence when the task is unfamiliar or integrated.
- Common failure patterns: solving only one part of the requirement, inflated aggregates, unreadable query structure.

### Error-Based Practice

- Purpose: Repair specific observed mistakes or misconceptions.
- Suitable learning skills or stages: `NULL`, joins, grouping, subqueries, constraints, transactions, indexing, `EXPLAIN ANALYZE`.
- Expected learner output: corrected query, corrected explanation, or diagnosis of why the original was wrong.
- Evidence value: supports evidence for misconception repair and review completion.
- Common failure patterns: patching syntax without understanding, replacing logic with `DISTINCT`, optimizing without preserving results.

### Project-Based Practice

- Purpose: Develop realistic application through artifacts.
- Suitable learning skills or stages: schema design, reporting, performance investigation, transaction behavior, project application.
- Expected learner output: query set, schema artifact, report, plan notes, or project explanation.
- Evidence value: supports transfer and real-world application evidence, usually M5 when reviewed.
- Common failure patterns: artifacts without assumptions, missing validation, unclear review criteria.

### Interview-Style Practice

- Purpose: Develop explanation, reasoning, and defense under follow-up questioning.
- Suitable learning skills or stages: query behavior, schema tradeoffs, performance reasoning, transactions, advanced PostgreSQL concepts.
- Expected learner output: verbal or written answer, follow-up response, tradeoff explanation, or defended decision.
- Evidence value: supports explanation and defense evidence, potentially M6 when strong and reviewed.
- Common failure patterns: fluent but incorrect answers, skipped assumptions, weak follow-up reasoning.

## Practice Difficulty Guidance

- D1: Recognition and recall; learner identifies terms, clauses, or concepts.
- D2: Guided application; learner solves with hints, scaffolding, or partial structure.
- D3: Independent application; learner solves familiar tasks without hints.
- D4: Transfer and integration; learner combines learning skills in unfamiliar or realistic contexts.
- D5: Project or interview defense; learner produces artifacts or defends decisions under follow-up.

Difficulty labels are practice guidance, not mastery records.

## Evidence-Producing Practice

Learner output can support evidence when it includes one or more of:

- Written SQL query.
- Explanation of query behavior.
- Schema design artifact.
- Corrected query.
- Query plan interpretation.
- Project artifact.
- Interview-style answer.

Evidence SHOULD identify what the learner did, which learning skill it supports, and what limitations remain.

## Error-Based Practice Rules

Common SQL/PostgreSQL error categories SHOULD map to targeted repair:

- Syntax error: isolate clause structure and statement anatomy.
- Wrong filter logic: review boolean logic and predicate choice.
- `NULL` handling error: review `sql-postgresql.null-semantics`.
- Join condition error: review `sql-postgresql.inner-join` or `sql-postgresql.join-conditions-duplicates`.
- Duplicate row issue: review `sql-postgresql.join-conditions-duplicates`.
- Aggregate grouping error: review `sql-postgresql.group-by` or `sql-postgresql.grouping-with-joins`.
- `WHERE` vs `HAVING` confusion: review `sql-postgresql.having`.
- Subquery cardinality error: review `sql-postgresql.scalar-subqueries`.
- Constraint misunderstanding: review `sql-postgresql.constraints-ddl`.
- Transaction misconception: review `sql-postgresql.transaction-concepts`.
- Index overuse or misuse: review `sql-postgresql.index-concepts-btree` and `sql-postgresql.index-selectivity`.
- `EXPLAIN` or plan misinterpretation: review `sql-postgresql.explain-basics` or `sql-postgresql.explain-analyze-basics`.

## Review Practice Rules

- Review practice SHOULD target weak learning skills, failed assessments, stale learning skills, upcoming prerequisites, repeated mistakes, or user-requested review.
- Review practice SHOULD follow `core/learning-engine/REVIEW_MODEL.md`.
- Review completion MUST NOT imply mastery without evidence.
- Review items SHOULD include a target learning skill, reason, priority, suggested review type, and evidence reference when available.

## Project-Based Practice Rules

- Project-based practice SHOULD use project categories from `domains/sql-postgresql/PROJECTS.md`.
- Project artifacts MAY support evidence when reviewed.
- Artifact existence alone MUST NOT imply mastery.
- Project practice SHOULD identify related learning skills before work begins.

## Interview-Style Practice Rules

- Interview-style practice SHOULD ask follow-up questions.
- Responses SHOULD be evaluated for correctness, independence, explanation quality, transfer ability, and consistency.
- Fluent wording MUST NOT be treated as correctness.
- Interview responses MAY support evidence when captured or summarized.

## Dataset Guidance

- Small synthetic tables SHOULD be used for early lessons and tightly scoped practice.
- Northwind MAY be used for realistic query and reporting practice.
- Project-specific schemas MAY be used for schema design and project application.
- No dataset SHOULD be treated as mandatory for every lesson.
- This file does not create full Northwind exercises.

## Localization Notes

- SQL/PostgreSQL technical terms SHOULD remain in English.
- Feedback and explanations MAY be delivered in Azerbaijani when learner or project preferences require it.
- Azerbaijani MUST NOT be hardcoded as the only framework language.
- Localization behavior SHOULD follow `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which practice difficulty labels should be used first in learner-facing output?
- Should Northwind practice be introduced before or after joins and aggregation?
- Which error categories need domain-specific remediation templates first?

## ASSESSMENT_RULES.md

Canonical source: `domains/sql-postgresql/ASSESSMENT_RULES.md`.

# SQL/PostgreSQL Assessment Rules

## Assessment Overview

These rules define how SQL/PostgreSQL learner work should be assessed. They do not create exercises, lesson bodies, learner state, schemas, or executable tooling.

Assessment output SHOULD follow `templates/session/ASSESSMENT_OUTPUT_TEMPLATE.md`.

## Assessment Principles

- Assessment MUST be based on evidence.
- Assessment SHOULD target learning skills from `domains/sql-postgresql/SKILL_GRAPH.md`.
- Domain rules MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner progress belongs in learner state, not this domain pack.
- Practice or assessment output MAY propose state updates but MUST NOT silently apply them.
- Speed MUST NOT be treated as primary mastery unless the assessment context makes fluency relevant.

## Core Dimension Mapping

### Correctness

- Meaning in SQL/PostgreSQL: output, schema, explanation, or plan interpretation satisfies the requirement and handles relevant edge cases.
- Evidence examples: correct SQL query, correct result explanation, valid schema design, accurate corrected query.
- Warning signs: wrong rows, missing filters, broken joins, invalid DDL, incorrect assumptions about `NULL`.

### Independence

- Meaning in SQL/PostgreSQL: learner writes or explains with an appropriate level of support for the target mastery level.
- Evidence examples: independent query writing, minimal hints, self-correction, justified choices.
- Warning signs: excessive hints, copying without explanation, inability to continue after small changes.

### Explanation Quality

- Meaning in SQL/PostgreSQL: learner explains query logic, table relationships, database behavior, and tradeoffs clearly.
- Evidence examples: clause-by-clause explanation, join path explanation, plan interpretation, schema rationale.
- Warning signs: syntax-only explanation, skipped assumptions, fluent but incorrect reasoning.

### Transfer Ability

- Meaning in SQL/PostgreSQL: learner applies concepts to new tables, schemas, requirements, project artifacts, or debugging contexts.
- Evidence examples: adapting joins to a new schema, rewriting a report query, designing a schema from requirements.
- Warning signs: works only on memorized examples, fails when table names or requirements change.

### Consistency

- Meaning in SQL/PostgreSQL: learner performs reliably across related tasks and avoids repeated mistakes.
- Evidence examples: multiple correct queries, stable explanations, repeated successful debugging across patterns.
- Warning signs: intermittent correctness, repeated `NULL` errors, recurring duplicate row or grouping mistakes.

### Speed

- Meaning in SQL/PostgreSQL: timing or fluency matters only for interview readiness, operational fluency, or explicitly timed contexts.
- Evidence examples: concise interview answer, quick identification of a common error, fluent query sketch under time pressure.
- Warning signs: using speed to override correctness, penalizing thoughtful reasoning in non-timed learning.

## Mastery-Level Expectations

- M0: No reliable evidence is available.
- M1: Learner recognizes SQL/PostgreSQL terms or query patterns.
- M2: Learner explains concepts, clauses, or database behavior accurately.
- M3: Learner applies a learning skill with guidance, hints, or scaffolding.
- M4: Learner writes or explains independently in familiar contexts.
- M5: Learner transfers SQL/PostgreSQL concepts to realistic schemas, projects, performance work, or debugging.
- M6: Learner explains and defends choices under follow-up questioning.

These are assessment expectations, not learner state records.

## Evidence Requirements by Work Type

- Query-writing evidence: submitted SQL query, expected result reasoning, and review of correctness.
- Query-explanation evidence: explanation of clauses, join paths, filtering, grouping, or result behavior.
- Debugging evidence: incorrect query, correction, and explanation of the root cause.
- Schema-design evidence: table design, keys, constraints, and rationale.
- Performance evidence: query plan interpretation, index reasoning, and preservation of query correctness.
- Transaction/concurrency evidence: scenario explanation, transaction outcome prediction, or anomaly reasoning.
- Project artifact evidence: reviewed query set, schema, report, performance note, or transaction investigation.
- Interview response evidence: captured or summarized answer with follow-up evaluation.

## Assessment Output Guidance

- Assessment output SHOULD identify the target learning skill, evidence reviewed, dimension-level findings, weak areas, mastery recommendation, and next action.
- Mastery recommendations MUST reference evidence or explicit user instruction.
- Missing evidence MUST be reported honestly.
- Assessment output SHOULD distinguish assumptions from demonstrated competence.

## Review Trigger Guidance

- Repeated `NULL` errors SHOULD suggest review of `sql-postgresql.null-semantics`.
- Duplicate rows after joins SHOULD suggest review of `sql-postgresql.join-conditions-duplicates`.
- Inflated aggregates SHOULD suggest review of `sql-postgresql.grouping-with-joins`.
- `WHERE` vs `HAVING` confusion SHOULD suggest review of `sql-postgresql.having`.
- Subquery cardinality errors SHOULD suggest review of `sql-postgresql.scalar-subqueries`.
- Constraint misunderstandings SHOULD suggest review of `sql-postgresql.constraints-ddl`.
- Transaction misconceptions SHOULD suggest review of `sql-postgresql.transaction-concepts`.
- Index overuse or misuse SHOULD suggest review of `sql-postgresql.index-concepts-btree` and `sql-postgresql.index-selectivity`.
- Plan misinterpretation SHOULD suggest review of `sql-postgresql.explain-analyze-basics`.
- Weak explanation under follow-up SHOULD suggest review of `sql-postgresql.query-behavior-explanation` or `sql-postgresql.interview-explanation`.

## Interview Assessment Guidance

- Interview assessment SHOULD include follow-up questions.
- Assessment SHOULD evaluate correctness, independence, explanation quality, transfer ability, and consistency.
- Speed MAY be considered only when the interview context requires fluency.
- Fluent wording MUST NOT be treated as correctness.

## Project Assessment Guidance

- Project assessment SHOULD identify artifacts, related learning skills, assumptions, review criteria, and evidence value.
- Artifact existence alone MUST NOT imply mastery.
- Reviewed artifacts MAY support transfer and real-world application evidence.
- Project assessment SHOULD identify next actions or review needs.

## Localization Notes

- SQL/PostgreSQL technical terms SHOULD remain in English.
- Feedback and explanations MAY be delivered in Azerbaijani when learner or project preferences require it.
- Azerbaijani MUST NOT be hardcoded as the only framework language.
- Localization behavior SHOULD follow `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which learning skills require formal rubric thresholds first?
- Should M5 require project artifact evidence for this domain?
- How should consistency be measured before learner state schemas exist?

## PROJECTS.md

Canonical source: `domains/sql-postgresql/PROJECTS.md`.

# SQL/PostgreSQL Project Guidance

## Projects Overview

This file defines reusable project guidance for the SQL/PostgreSQL domain pack. It provides project categories, evidence expectations, and review criteria for future project-based practice, not full project task files.

Project guidance SHOULD be used with `domains/sql-postgresql/SYLLABUS.md`, `domains/sql-postgresql/SKILL_GRAPH.md`, `domains/sql-postgresql/PRACTICE_RULES.md`, and `domains/sql-postgresql/ASSESSMENT_RULES.md`.

## Project Principles

- Projects MUST be reusable domain pack content, not learner state.
- Projects MUST NOT record learner progress, mastery, or personal artifacts.
- Project categories SHOULD reference learning skills from `domains/sql-postgresql/SKILL_GRAPH.md`.
- Project guidance SHOULD support realistic SQL/PostgreSQL work without creating a complete exercise bank.
- Project output SHOULD follow `templates/session/PROJECT_OUTPUT_TEMPLATE.md` when used in a session.
- Project review MUST preserve evidence requirements from `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Project Difficulty Guidance

- P1: Guided mini artifact; learner produces a small artifact with scaffolded requirements.
- P2: Independent focused artifact; learner completes a narrow artifact with minimal hints.
- P3: Integrated realistic artifact; learner combines multiple learning skills in a realistic context.
- P4: Reviewed portfolio artifact; learner produces an artifact suitable for structured review and revision.
- P5: Defended project artifact; learner explains and defends design, query, or performance choices under follow-up questioning.

Project difficulty is not learner mastery. Mastery MUST be recorded only in learner state when evidence or explicit user instruction supports it.

## Project Categories

### Northwind Query Practice Project

- Project id: `sql-postgresql.project.northwind-query-practice`
- Title: Northwind Query Practice Project
- Purpose: Practice realistic business-style querying, joins, filtering, aggregation, and result explanation.
- Suggested stage range: Stage 3 through Stage 5, with deeper use in Stage 11.
- Related learning skills:
  - `sql-postgresql.inner-join`
  - `sql-postgresql.left-join`
  - `sql-postgresql.join-conditions-duplicates`
  - `sql-postgresql.grouping-with-joins`
  - `sql-postgresql.reporting-queries-basic`
  - `sql-postgresql.query-behavior-explanation`
- Expected artifacts: query set, result notes, assumptions, and short explanations of query behavior.
- Review criteria: correctness of result logic, join path clarity, aggregate correctness, independence, and explanation quality.
- Evidence value: reviewed queries MAY support evidence for M4 or M5 when the learner applies concepts to realistic requirements.
- Non-goals: this category does not define a Northwind exercise bank, import process, or complete reporting curriculum.

### Schema Design Mini Project

- Project id: `sql-postgresql.project.schema-design-mini`
- Title: Schema Design Mini Project
- Purpose: Practice turning requirements into tables, relationships, keys, constraints, and normalization decisions.
- Suggested stage range: Stage 6 through Stage 7, with revision in Stage 11.
- Related learning skills:
  - `sql-postgresql.entity-modeling`
  - `sql-postgresql.normalization-basics`
  - `sql-postgresql.normal-forms-1nf-2nf-3nf`
  - `sql-postgresql.erd-reasoning`
  - `sql-postgresql.constraints-ddl`
  - `sql-postgresql.schema-refactoring-basics`
- Expected artifacts: ERD sketch, table list, key choices, constraint notes, and optional draft DDL.
- Review criteria: entity boundaries, relationship correctness, constraint fit, normalization reasoning, and tradeoff explanation.
- Evidence value: reviewed designs MAY support evidence for schema modeling and transfer when assumptions are explicit.
- Non-goals: this category does not create a production schema, migration plan, or backend application.

### Reporting and Aggregation Project

- Project id: `sql-postgresql.project.reporting-aggregation`
- Title: Reporting and Aggregation Project
- Purpose: Practice summary queries, grouped reports, aggregate filtering, and readable query decomposition.
- Suggested stage range: Stage 4 through Stage 5, with portfolio use in Stage 11.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`
  - `sql-postgresql.group-by`
  - `sql-postgresql.having`
  - `sql-postgresql.aggregate-filtering`
  - `sql-postgresql.grouping-with-joins`
  - `sql-postgresql.ctes`
  - `sql-postgresql.query-decomposition-readability`
- Expected artifacts: report queries, expected result descriptions, grouping assumptions, and explanation notes.
- Review criteria: aggregate correctness, grouping level, `WHERE` versus `HAVING` use, readability, and transfer to changed requirements.
- Evidence value: reviewed reports MAY support evidence for M4 or M5 when the learner handles realistic reporting changes.
- Non-goals: this category does not create dashboard tooling, BI integrations, or a full report catalog.

### Indexing and Performance Investigation

- Project id: `sql-postgresql.project.indexing-performance-investigation`
- Title: Indexing and Performance Investigation
- Purpose: Practice reading query plans, reasoning about scan choices, and explaining index tradeoffs.
- Suggested stage range: Stage 9 through Stage 11.
- Related learning skills:
  - `sql-postgresql.index-concepts-btree`
  - `sql-postgresql.composite-indexes`
  - `sql-postgresql.index-selectivity`
  - `sql-postgresql.explain-basics`
  - `sql-postgresql.explain-analyze-basics`
  - `sql-postgresql.scan-types-optimization-basics`
  - `sql-postgresql.performance-reasoning`
- Expected artifacts: query plan notes, index hypothesis, before/after observations when available, and correctness-preservation notes.
- Review criteria: plan interpretation, selectivity reasoning, index choice justification, avoidance of over-indexing, and preserved query semantics.
- Evidence value: reviewed investigations MAY support evidence for performance reasoning and M5 transfer.
- Non-goals: this category does not create production tuning advice, benchmarking infrastructure, or operational DBA procedures.

### Transaction Behavior Exploration

- Project id: `sql-postgresql.project.transaction-behavior-exploration`
- Title: Transaction Behavior Exploration
- Purpose: Practice reasoning about transaction boundaries, rollback behavior, isolation, locks, and MVCC concepts.
- Suggested stage range: Stage 8 through Stage 11.
- Related learning skills:
  - `sql-postgresql.transaction-concepts`
  - `sql-postgresql.commit-rollback`
  - `sql-postgresql.isolation-levels-concepts`
  - `sql-postgresql.locking-basics`
  - `sql-postgresql.mvcc-basics`
  - `sql-postgresql.concurrency-anomalies`
- Expected artifacts: scenario notes, predicted outcomes, observed behavior when available, and explanation of transaction effects.
- Review criteria: accuracy of transaction reasoning, distinction between conceptual and observed behavior, and explanation of concurrency tradeoffs.
- Evidence value: reviewed scenario explanations MAY support evidence for transaction and concurrency learning skills.
- Non-goals: this category does not create a concurrency lab harness, incident response guide, or full database internals course.

### Interview Explanation Portfolio

- Project id: `sql-postgresql.project.interview-explanation-portfolio`
- Title: Interview Explanation Portfolio
- Purpose: Build reviewed explanations for common SQL/PostgreSQL topics, tradeoffs, and follow-up questions.
- Suggested stage range: Stage 12, with selected entries after each major stage.
- Related learning skills:
  - `sql-postgresql.query-behavior-explanation`
  - `sql-postgresql.interview-explanation`
  - `sql-postgresql.performance-reasoning`
  - `sql-postgresql.project-application`
  - `sql-postgresql.documentation-reading`
- Expected artifacts: explanation notes, question-and-answer summaries, follow-up responses, and reviewed weak-area notes.
- Review criteria: correctness, independence, explanation quality, transfer ability, consistency, and defense under follow-up.
- Evidence value: reviewed explanations MAY support M6 recommendations when the learner defends choices accurately.
- Non-goals: this category does not create a complete interview question bank or certify job readiness.

## Project Evidence Rules

- Artifact existence alone MUST NOT imply mastery.
- Reviewed artifacts MAY support evidence when the review identifies related learning skills and limitations.
- Project work MAY support M5 or M6 only when transfer, explanation, and review quality are sufficient.
- Project progress belongs in learner state, not this domain pack.
- Project sessions MAY propose learner state updates but MUST NOT silently apply them.
- Missing review evidence MUST be reported honestly.

## Project Review Criteria

Project review SHOULD consider:

- Correctness: whether queries, schemas, or explanations satisfy the stated requirement.
- Independence: how much support the learner needed.
- Explanation quality: whether the learner can explain choices and behavior.
- Transfer ability: whether the learner can adapt the work to changed requirements.
- Consistency: whether recurring mistakes remain unresolved.
- Evidence quality: whether artifacts and review notes are specific enough to support learner state updates.

## Project-to-Syllabus Mapping

- Stage 3 joins: Northwind Query Practice Project SHOULD reinforce joins, relationship reasoning, and duplicate-row diagnosis.
- Stage 4 aggregation: Reporting and Aggregation Project SHOULD reinforce grouped reports and aggregate filtering.
- Stage 6 schema design: Schema Design Mini Project SHOULD reinforce entity modeling, normalization, and ERD reasoning.
- Stage 8 transactions: Transaction Behavior Exploration SHOULD reinforce transaction and concurrency concepts.
- Stage 9 performance: Indexing and Performance Investigation SHOULD reinforce `EXPLAIN`, `EXPLAIN ANALYZE`, scan types, and index reasoning.
- Stage 11 projects: all project categories MAY be used as integrated project milestones.
- Stage 12 interview readiness: Interview Explanation Portfolio SHOULD convert project and assessment evidence into defended explanations.

## Dataset Guidance

- Small synthetic schemas MAY be used for tightly scoped early project milestones.
- Northwind MAY be used for realistic query, join, and reporting practice.
- Project-specific schemas MAY be used for schema design, transaction, and performance investigation work.
- No dataset SHOULD be mandatory for every project category.
- This file does not create Northwind tasks, import scripts, or dataset-specific exercises.

## Localization Notes

- SQL/PostgreSQL technical terms SHOULD remain in English.
- Project guidance and feedback MAY be delivered in Azerbaijani when learner or project preferences require it.
- Azerbaijani instruction with English technical terms is a project preference, not a global framework default.
- Localization behavior SHOULD follow `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which project category should become the first fully specified pilot project?
- Should M5 in this domain usually require at least one reviewed project artifact?
- What minimal artifact metadata should future project task files require?

## GLOSSARY.md

Canonical source: `domains/sql-postgresql/GLOSSARY.md`.

# SQL/PostgreSQL Glossary

## Glossary Overview

This glossary supports the SQL/PostgreSQL domain pack by preserving important technical terms in English while providing concise Azerbaijani explanations for the initial project preference.

The glossary follows `specification/LOCALIZATION_SPEC.md`. It is domain terminology guidance, not lesson content, learner state, or a translation mandate.

## Glossary Conventions

- Technical terms SHOULD remain in English.
- Azerbaijani explanations SHOULD clarify meaning without replacing SQL syntax terms with unnatural translations.
- Azerbaijani instruction with English technical terms is a project preference, not a global framework default.
- Related learning skills reference `domains/sql-postgresql/SKILL_GRAPH.md`.

## Core Relational Terms

### `SQL`

- Terminology language: English
- Azerbaijani explanation: Relational verilənlər bazası ilə sorğu yazmaq və məlumatı idarə etmək üçün istifadə olunan dil.
- Usage note: `SQL` termini saxlanılır; onu süni şəkildə tərcümə etmək lazım deyil.
- Related learning skills:
  - `sql-postgresql.sql-statement-anatomy`

### `PostgreSQL`

- Terminology language: English
- Azerbaijani explanation: Güclü, açıq mənbəli relational database sistemi.
- Usage note: PostgreSQL həm SQL standartını, həm də özünə məxsus xüsusiyyətləri dəstəkləyir.
- Related learning skills:
  - `sql-postgresql.postgresql-tooling-concepts`

### `database`

- Terminology language: English
- Azerbaijani explanation: Strukturlaşdırılmış məlumatların saxlandığı və idarə edildiyi sistem və ya məntiqi konteyner.
- Usage note: İzahda "verilənlər bazası" deyilə bilər, amma texniki term kimi `database` saxlanıla bilər.
- Related learning skills:
  - `sql-postgresql.relational-model`

### `schema`

- Terminology language: English
- Azerbaijani explanation: Database daxilində obyektləri məntiqi qruplaşdıran ad sahəsi və ya struktur təsviri.
- Usage note: PostgreSQL-də `schema` obyektləri təşkil etmək üçün ayrıca məna daşıyır.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `table`

- Terminology language: English
- Azerbaijani explanation: Məlumatların rows və columns şəklində saxlandığı əsas relational struktur.
- Usage note: `table` termini dərslərdə English saxlanmalıdır.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `row`

- Terminology language: English
- Azerbaijani explanation: Table daxilində bir konkret qeydi ifadə edən məlumat sətri.
- Usage note: `row` çox vaxt bir entity instance kimi düşünülür.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `column`

- Terminology language: English
- Azerbaijani explanation: Table daxilində müəyyən atributu və ya məlumat sahəsini saxlayan struktur elementi.
- Usage note: `column` data type və constraint ilə birlikdə müəyyən edilir.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `value`

- Terminology language: English
- Azerbaijani explanation: Row və column kəsişməsində saxlanan konkret məlumat.
- Usage note: `NULL` dəyər deyil, xüsusi unknown və ya missing halıdır.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `primary key`

- Terminology language: English
- Azerbaijani explanation: Table daxilində hər row-u unikal tanıdan key.
- Usage note: `primary key` həm uniqueness, həm də `NOT NULL` semantikası verir.
- Related learning skills:
  - `sql-postgresql.keys-concepts`

### `foreign key`

- Terminology language: English
- Azerbaijani explanation: Bir table-dakı dəyəri başqa table-dakı referenced key ilə əlaqələndirən constraint.
- Usage note: `foreign key` relationship integrity üçün istifadə olunur.
- Related learning skills:
  - `sql-postgresql.keys-concepts`
  - `sql-postgresql.relationship-reasoning`

### `constraint`

- Terminology language: English
- Azerbaijani explanation: Database səviyyəsində məlumatın qəbul edilən qaydasını məhdudlaşdıran şərt.
- Usage note: `constraint` application logic-i tam əvəz etmir, amma data integrity üçün əsasdır.
- Related learning skills:
  - `sql-postgresql.constraints-ddl`

## Query Terms

### `SELECT`

- Terminology language: English
- Azerbaijani explanation: Database-dən məlumat oxumaq və nəticə sütunlarını seçmək üçün istifadə olunan SQL statement.
- Usage note: `SELECT` SQL syntax termini kimi tərcümə olunmamalıdır.
- Related learning skills:
  - `sql-postgresql.select-basics`

### `FROM`

- Terminology language: English
- Azerbaijani explanation: Query-nin məlumatı hansı table və ya source-dan oxuduğunu bildirən clause.
- Usage note: `FROM` çox vaxt join və subquery mənbələrini də ehtiva edir.
- Related learning skills:
  - `sql-postgresql.sql-statement-anatomy`

### `WHERE`

- Terminology language: English
- Azerbaijani explanation: Rows-u şərtə görə filter etmək üçün istifadə olunan clause.
- Usage note: `WHERE` aggregate nəticələrini deyil, grouping-dən əvvəlki rows-u filter edir.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`

### `AND`

- Terminology language: English
- Azerbaijani explanation: Bir neçə boolean şərtin hamısının doğru olmasını tələb edən operator.
- Usage note: Parentheses istifadə edilmədikdə operator precedence səhvləri yarana bilər.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`

### `OR`

- Terminology language: English
- Azerbaijani explanation: Şərtlərdən ən azı birinin doğru olmasını tələb edən boolean operator.
- Usage note: `OR` çox vaxt yanlış filter məntiqi yaradır; parentheses ilə niyyət aydınlaşdırılmalıdır.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`

### `NOT`

- Terminology language: English
- Azerbaijani explanation: Boolean şərtin nəticəsini əksinə çevirən operator.
- Usage note: `NULL` ilə birlikdə işlədikdə nəticə gözlənilməz görünə bilər.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`
  - `sql-postgresql.null-semantics`

### `IN`

- Terminology language: English
- Azerbaijani explanation: Dəyərin verilmiş siyahıda və ya subquery nəticəsində olub-olmadığını yoxlayan operator.
- Usage note: Kiçik sabit siyahılar və subquery-lər üçün istifadə oluna bilər.
- Related learning skills:
  - `sql-postgresql.in-between-predicates`
  - `sql-postgresql.in-exists-subqueries`

### `NOT IN`

- Terminology language: English
- Azerbaijani explanation: Dəyərin verilmiş siyahıda olmamasını yoxlayan operator.
- Usage note: `NULL` olan nəticələrlə `NOT IN` təhlükəli ola bilər.
- Related learning skills:
  - `sql-postgresql.in-between-predicates`
  - `sql-postgresql.null-semantics`

### `BETWEEN`

- Terminology language: English
- Azerbaijani explanation: Dəyərin iki sərhəd arasında olub-olmadığını yoxlayan operator.
- Usage note: SQL-də `BETWEEN` sərhədləri daxil edir.
- Related learning skills:
  - `sql-postgresql.in-between-predicates`

### `LIKE`

- Terminology language: English
- Azerbaijani explanation: Mətn pattern-i ilə uyğunluğu yoxlayan operator.
- Usage note: PostgreSQL-də `LIKE` case-sensitive ola bilər.
- Related learning skills:
  - `sql-postgresql.like-ilike-patterns`

### `ILIKE`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də case-insensitive mətn pattern uyğunluğu üçün istifadə olunan operator.
- Usage note: `ILIKE` PostgreSQL-specific rahatlıqdır.
- Related learning skills:
  - `sql-postgresql.like-ilike-patterns`

### `NULL`

- Terminology language: English
- Azerbaijani explanation: Dəyərin unknown, missing və ya tətbiq olunmayan olduğunu bildirən xüsusi SQL halı.
- Usage note: `NULL` adi value kimi `=` ilə yoxlanmır.
- Related learning skills:
  - `sql-postgresql.null-semantics`

### `IS NULL`

- Terminology language: English
- Azerbaijani explanation: Dəyərin `NULL` olub-olmadığını yoxlamaq üçün istifadə olunan predicate.
- Usage note: `column = NULL` yerinə `column IS NULL` istifadə olunur.
- Related learning skills:
  - `sql-postgresql.null-semantics`

### `ORDER BY`

- Terminology language: English
- Azerbaijani explanation: Query nəticələrini müəyyən column və ya expression üzrə sıralayan clause.
- Usage note: Stabil və gözlənilən nəticə üçün pagination ilə birlikdə vacibdir.
- Related learning skills:
  - `sql-postgresql.order-by`

### `LIMIT`

- Terminology language: English
- Azerbaijani explanation: Query nəticəsində qaytarılan row sayını məhdudlaşdıran clause.
- Usage note: `ORDER BY` olmadan `LIMIT` deterministik nəticə verməyə bilər.
- Related learning skills:
  - `sql-postgresql.limit-offset`

### `OFFSET`

- Terminology language: English
- Azerbaijani explanation: Query nəticəsində başlanğıcdan neçə row-un buraxılacağını bildirən clause.
- Usage note: Böyük `OFFSET` dəyərləri performans problemi yarada bilər.
- Related learning skills:
  - `sql-postgresql.limit-offset`

### `DISTINCT`

- Terminology language: English
- Azerbaijani explanation: Nəticədən duplicate rows-u çıxarmaq üçün istifadə olunan keyword.
- Usage note: `DISTINCT` join səhvini gizlətmək üçün avtomatik həll kimi istifadə edilməməlidir.
- Related learning skills:
  - `sql-postgresql.distinct-results`
  - `sql-postgresql.join-conditions-duplicates`

## Join and Relationship Terms

### `JOIN`

- Terminology language: English
- Azerbaijani explanation: Əlaqəli table-lardan rows-u birləşdirmək üçün istifadə olunan SQL əməliyyatı.
- Usage note: `JOIN` nəticəsi relationship və join condition-dan asılıdır.
- Related learning skills:
  - `sql-postgresql.relationship-reasoning`

### `INNER JOIN`

- Terminology language: English
- Azerbaijani explanation: Yalnız hər iki tərəfdə uyğun row olan nəticələri qaytaran join növü.
- Usage note: Uyğunluq tapılmayan rows nəticədən çıxır.
- Related learning skills:
  - `sql-postgresql.inner-join`

### `LEFT JOIN`

- Terminology language: English
- Azerbaijani explanation: Sol table-dakı bütün rows-u saxlayan və sağ tərəfdə uyğunluq yoxdursa `NULL` qaytaran join növü.
- Usage note: `WHERE` şərti səhv yazılarsa `LEFT JOIN` praktik olaraq `INNER JOIN` kimi davrana bilər.
- Related learning skills:
  - `sql-postgresql.left-join`

### `RIGHT JOIN`

- Terminology language: English
- Azerbaijani explanation: Sağ table-dakı bütün rows-u saxlayan outer join növü.
- Usage note: Çox hallarda query readability üçün `LEFT JOIN` ilə yenidən yazıla bilər.
- Related learning skills:
  - `sql-postgresql.outer-joins-concepts`

### `FULL JOIN`

- Terminology language: English
- Azerbaijani explanation: Hər iki tərəfdən uyğun gələn və gəlməyən rows-u saxlayan outer join növü.
- Usage note: Data reconciliation və comparison ssenarilərində faydalı ola bilər.
- Related learning skills:
  - `sql-postgresql.outer-joins-concepts`

### `many-to-many`

- Terminology language: English
- Azerbaijani explanation: Bir tərəfdəki çoxlu row-un digər tərəfdəki çoxlu row ilə əlaqəli ola bildiyi relationship.
- Usage note: Adətən junction table ilə modelləşdirilir.
- Related learning skills:
  - `sql-postgresql.many-to-many-relationships`

## Aggregation Terms

### `aggregate function`

- Terminology language: English
- Azerbaijani explanation: Bir neçə row üzərində hesablamalar aparıb summary nəticə qaytaran function.
- Usage note: `COUNT`, `SUM`, və `AVG` tipik aggregate function nümunələridir.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`

### `COUNT`

- Terminology language: English
- Azerbaijani explanation: Rows və ya non-NULL values sayını hesablamaq üçün istifadə olunan aggregate function.
- Usage note: `COUNT(*)` və `COUNT(column)` fərqli `NULL` davranışına malikdir.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`

### `SUM`

- Terminology language: English
- Azerbaijani explanation: Numeric values cəmini hesablamaq üçün istifadə olunan aggregate function.
- Usage note: Grouping səviyyəsi düzgün deyilsə nəticə şişə bilər.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`
  - `sql-postgresql.grouping-with-joins`

### `AVG`

- Terminology language: English
- Azerbaijani explanation: Numeric values orta dəyərini hesablamaq üçün istifadə olunan aggregate function.
- Usage note: `NULL` values hesablamada nəzərə alınmır.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`

### `GROUP BY`

- Terminology language: English
- Azerbaijani explanation: Rows-u müəyyən column və ya expression üzrə qruplaşdıran clause.
- Usage note: Aggregate olmayan selected columns adətən `GROUP BY` daxilində olmalıdır.
- Related learning skills:
  - `sql-postgresql.group-by`

### `HAVING`

- Terminology language: English
- Azerbaijani explanation: Grouped və aggregate nəticələri filter etmək üçün istifadə olunan clause.
- Usage note: Row-level filter üçün `WHERE`, group-level filter üçün `HAVING` seçilir.
- Related learning skills:
  - `sql-postgresql.having`

## Subquery and CTE Terms

### `subquery`

- Terminology language: English
- Azerbaijani explanation: Başqa query daxilində istifadə olunan query.
- Usage note: Subquery scalar, list, table-like və ya correlated formada ola bilər.
- Related learning skills:
  - `sql-postgresql.scalar-subqueries`
  - `sql-postgresql.in-exists-subqueries`

### `correlated subquery`

- Terminology language: English
- Azerbaijani explanation: Outer query-dən dəyər istifadə edən subquery.
- Usage note: Hər row üçün yenidən qiymətləndirmə semantikası ola bilər.
- Related learning skills:
  - `sql-postgresql.correlated-subqueries-concepts`

### `CTE`

- Terminology language: English
- Azerbaijani explanation: `WITH` clause ilə adlandırılan müvəqqəti query hissəsi.
- Usage note: CTE query decomposition və readability üçün faydalıdır.
- Related learning skills:
  - `sql-postgresql.ctes`

### `UNION`

- Terminology language: English
- Azerbaijani explanation: İki query nəticəsini birləşdirən set operation.
- Usage note: `UNION` duplicate rows-u silir; `UNION ALL` saxlayır.
- Related learning skills:
  - `sql-postgresql.set-operations`

### `INTERSECT`

- Terminology language: English
- Azerbaijani explanation: İki query nəticəsində ortaq olan rows-u qaytaran set operation.
- Usage note: Column sayı və uyğun data type-lar uyğun olmalıdır.
- Related learning skills:
  - `sql-postgresql.set-operations`

### `EXCEPT`

- Terminology language: English
- Azerbaijani explanation: Birinci query nəticəsində olub ikinci query nəticəsində olmayan rows-u qaytaran set operation.
- Usage note: Difference məntiqini ifadə etmək üçün istifadə olunur.
- Related learning skills:
  - `sql-postgresql.set-operations`

## Schema and Constraint Terms

### `DDL`

- Terminology language: English
- Azerbaijani explanation: Database obyektlərini yaratmaq, dəyişmək və silmək üçün istifadə olunan SQL hissəsi.
- Usage note: `CREATE TABLE`, `ALTER TABLE`, və `DROP TABLE` DDL nümunələridir.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `CREATE TABLE`

- Terminology language: English
- Azerbaijani explanation: Yeni table yaratmaq üçün istifadə olunan DDL statement.
- Usage note: Columns, data types, keys və constraints burada müəyyən edilə bilər.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `ALTER TABLE`

- Terminology language: English
- Azerbaijani explanation: Mövcud table strukturunu dəyişmək üçün istifadə olunan DDL statement.
- Usage note: Production mühitində migration strategiyası ilə birlikdə düşünülməlidir.
- Related learning skills:
  - `sql-postgresql.schema-migrations-concepts`

### `DROP TABLE`

- Terminology language: English
- Azerbaijani explanation: Table-i silmək üçün istifadə olunan DDL statement.
- Usage note: Data itkisi yarada biləcəyi üçün ehtiyatla istifadə olunur.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `data type`

- Terminology language: English
- Azerbaijani explanation: Column-da saxlanıla bilən value növünü müəyyən edən qayda.
- Usage note: PostgreSQL zəngin data type dəstəyi verir.
- Related learning skills:
  - `sql-postgresql.postgresql-data-types`

## Transaction and Concurrency Terms

### `transaction`

- Terminology language: English
- Azerbaijani explanation: Bir və ya bir neçə database əməliyyatını vahid iş vahidi kimi idarə edən mexanizm.
- Usage note: Transaction uğurla bitərsə `COMMIT`, ləğv edilərsə `ROLLBACK` istifadə olunur.
- Related learning skills:
  - `sql-postgresql.transaction-concepts`

### `COMMIT`

- Terminology language: English
- Azerbaijani explanation: Transaction daxilindəki dəyişiklikləri qalıcı edən statement.
- Usage note: `COMMIT` sonrası dəyişikliklər normal halda geri alınmır.
- Related learning skills:
  - `sql-postgresql.commit-rollback`

### `ROLLBACK`

- Terminology language: English
- Azerbaijani explanation: Transaction daxilindəki dəyişiklikləri ləğv edən statement.
- Usage note: Səhv və ya imtina halında data consistency qorumağa kömək edir.
- Related learning skills:
  - `sql-postgresql.commit-rollback`

### `isolation level`

- Terminology language: English
- Azerbaijani explanation: Concurrent transactions bir-birinin dəyişikliklərini necə görə bildiyini müəyyən edən qayda səviyyəsi.
- Usage note: Isolation səviyyəsi correctness və concurrency tradeoff-larına təsir edir.
- Related learning skills:
  - `sql-postgresql.isolation-levels-concepts`

### `lock`

- Terminology language: English
- Azerbaijani explanation: Concurrent access zamanı data və obyektlər üzərində koordinasiya üçün istifadə olunan mexanizm.
- Usage note: Lock-lar blocking və deadlock kimi davranışlara səbəb ola bilər.
- Related learning skills:
  - `sql-postgresql.locking-basics`

### `MVCC`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də concurrent oxuma və yazma əməliyyatlarını versioning ilə idarə edən yanaşma.
- Usage note: MVCC oxucular və yazıçılar arasındakı bloklanmanı azaltmağa kömək edir.
- Related learning skills:
  - `sql-postgresql.mvcc-basics`

## Indexing and Performance Terms

### `index`

- Terminology language: English
- Azerbaijani explanation: Query axtarışını sürətləndirə bilən əlavə database strukturu.
- Usage note: Index read performansına kömək edə bilər, amma write overhead yarada bilər.
- Related learning skills:
  - `sql-postgresql.index-concepts-btree`

### `B-tree index`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də ən yayğın index növü və bir çox comparison query üçün standart seçim.
- Usage note: Equality və range axtarışlarında tez-tez istifadə olunur.
- Related learning skills:
  - `sql-postgresql.index-concepts-btree`

### `composite index`

- Terminology language: English
- Azerbaijani explanation: Birdən çox column üzərində yaradılan index.
- Usage note: Column order query pattern-ləri üçün vacibdir.
- Related learning skills:
  - `sql-postgresql.composite-indexes`

### `selectivity`

- Terminology language: English
- Azerbaijani explanation: Predicate-in data içindən nə qədər az və ya çox row seçdiyini ifadə edən anlayış.
- Usage note: Yüksək selectivity index faydasını artıra bilər.
- Related learning skills:
  - `sql-postgresql.index-selectivity`

### `EXPLAIN`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-in query üçün planlaşdırdığı execution plan-ı göstərən command.
- Usage note: `EXPLAIN` query-ni icra etmədən planı göstərir.
- Related learning skills:
  - `sql-postgresql.explain-basics`

### `EXPLAIN ANALYZE`

- Terminology language: English
- Azerbaijani explanation: Query-ni icra edib real execution plan və timing məlumatlarını göstərən command.
- Usage note: Data dəyişdirən query-lərlə ehtiyatla istifadə olunmalıdır.
- Related learning skills:
  - `sql-postgresql.explain-analyze-basics`

### `sequential scan`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-in table rows-u ardıcıl oxuduğu scan növü.
- Usage note: Kiçik table-lar və ya çox row qaytaran query-lər üçün normal ola bilər.
- Related learning skills:
  - `sql-postgresql.scan-types-optimization-basics`

### `index scan`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-in index istifadə edərək uyğun rows-u tapdığı scan növü.
- Usage note: Index scan həmişə sequential scan-dan yaxşı deyil; context vacibdir.
- Related learning skills:
  - `sql-postgresql.scan-types-optimization-basics`

## Advanced PostgreSQL Terms

### `window function`

- Terminology language: English
- Azerbaijani explanation: Rows qrupunu collapse etmədən həmin qrup üzərində hesablamalar aparan function.
- Usage note: Ranking, running totals və partition-based calculations üçün faydalıdır.
- Related learning skills:
  - `sql-postgresql.window-functions-basics`

### `JSONB`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də binary formatda saxlanan JSON data type.
- Usage note: Flexible data üçün faydalıdır, amma relational model-i avtomatik əvəz etmir.
- Related learning skills:
  - `sql-postgresql.json-jsonb-basics`

### `materialized view`

- Terminology language: English
- Azerbaijani explanation: Query nəticəsini saxlayan və refresh edilə bilən view növü.
- Usage note: Reporting və expensive query-lər üçün faydalı ola bilər.
- Related learning skills:
  - `sql-postgresql.materialized-views-concepts`

## Usage Notes

- Glossary entries SHOULD support lesson explanations, practice feedback, project review, and interview explanations.
- Glossary entries MUST NOT replace evidence, mastery, or learner state semantics.
- Future lessons MAY include Azerbaijani explanations while preserving English SQL/PostgreSQL technical terms.
- Missing glossary examples SHOULD be handled as authoring gaps, not silently invented during assessment.

## OPEN QUESTION

- Which glossary terms need concrete examples before the first authored lesson?
- Should future glossary entries include pronunciation or common Azerbaijani paraphrases?
- Should syntax keywords and conceptual terms be separated into different glossary indexes?

## QUALITY_REVIEW.md

Canonical source: `domains/sql-postgresql/QUALITY_REVIEW.md`.

# SQL/PostgreSQL Domain Quality Review

## Review Date

`<review-date>`

## Reviewed Files

- `domains/sql-postgresql/README.md`
- `domains/sql-postgresql/DOMAIN.md`
- `domains/sql-postgresql/SYLLABUS.md`
- `domains/sql-postgresql/SKILL_GRAPH.md`
- `domains/sql-postgresql/PRACTICE_RULES.md`
- `domains/sql-postgresql/ASSESSMENT_RULES.md`
- `domains/sql-postgresql/PROJECTS.md`
- `domains/sql-postgresql/GLOSSARY.md`

## Audit Scope

This Stage 8.5 quality gate reviews the SQL/PostgreSQL domain pack for cross-reference integrity, syllabus alignment, practice and assessment consistency, project guidance boundaries, glossary alignment, evidence-based mastery, learner state separation, and localization consistency.

This review does not create lessons, exercises, Northwind tasks, learner state, schemas, executable tooling, or learner assessment results.

## Cross-Reference Integrity Summary

- Learning skill references in `domains/sql-postgresql/SYLLABUS.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/PRACTICE_RULES.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/ASSESSMENT_RULES.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/PROJECTS.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/GLOSSARY.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- No missing learning skill ids were found during this review.

## Syllabus Alignment Summary

- Syllabus stages align with the staged learning skill graph.
- Lesson outlines target existing `sql-postgresql.*` learning skill ids.
- Lesson outlines remain concise and do not become full lesson bodies.
- Stage 11 remains project milestone guidance, not full project task implementation.
- Stage 12 remains interview and explanation readiness guidance, not a full interview bank.

## Practice and Assessment Alignment Summary

- Practice types align with `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions align with `core/learning-engine/ASSESSMENT_MODEL.md`.
- Review triggers point to valid learning skill ids.
- Difficulty labels D1-D5 are practice guidance and MUST NOT be treated as mastery records.
- Mastery recommendations require evidence as defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Project Guidance Summary

- Project ids follow the `sql-postgresql.project.<name>` pattern.
- Project categories reference valid learning skill ids.
- Project evidence rules state that artifact existence alone MUST NOT imply mastery.
- Northwind remains optional dataset guidance and is not an implemented exercise bank.
- Project progress belongs in learner state, not this domain pack.

## Glossary Alignment Summary

- Glossary terms preserve English SQL/PostgreSQL terminology.
- Azerbaijani explanations clarify terms without replacing SQL syntax with unnatural translations.
- Related learning skill references point to existing learning skill ids.
- The glossary remains terminology guidance and does not become lesson content.
- The glossary does not override `specification/LOCALIZATION_SPEC.md`.

## Evidence and Learner State Boundary Summary

- SQL/PostgreSQL domain files contain reusable domain pack content, not learner-specific progress.
- SQL/PostgreSQL domain files MUST NOT contain learner mastery records.
- Lesson completion, project artifact existence, review participation, or glossary exposure MUST NOT imply mastery.
- Evidence-based mastery is preserved through references to `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner progress belongs in learner state governed by `specification/STATE_SPEC.md`.

## Localization Consistency Summary

- The domain pack does not hardcode Azerbaijani as the global framework language.
- The domain pack supports Azerbaijani instruction with English technical terms as a learner or project preference.
- SQL/PostgreSQL technical terms SHOULD remain in English where appropriate.
- Localization preferences MUST NOT change evidence, mastery, or learner state semantics.

## Issues Found

- No missing learning skill references were found.
- No full lessons, exercise bank files, Northwind task files, learner state files, schemas, executable tooling, or package files were found.
- README file descriptions were outdated after Stage 8.1 through Stage 8.4 expansion.

## Changes Made

- Updated `domains/sql-postgresql/README.md` to reference `domains/sql-postgresql/QUALITY_REVIEW.md` and current domain file responsibilities.
- Added this quality review record.
- Added `docs/decisions/ADR-0014-sql-postgresql-domain-quality-gate.md`.

## Remaining Open Questions

- Which SQL/PostgreSQL lesson path should be authored first?
- Should Stage 10 advanced PostgreSQL features later move into optional extension tracks?
- Which learning skills should receive formal assessment rubrics first?
- Should Northwind become the default realistic dataset for selected stages or remain one option among several?
- Should future project task files require a standard artifact metadata block?
- Which glossary terms require examples before lesson authoring begins?

## Readiness Status

Ready for future lesson authoring planning, subject to the remaining open questions. The domain pack is not a complete lesson set, exercise bank, project task set, learner state record, or executable implementation.
