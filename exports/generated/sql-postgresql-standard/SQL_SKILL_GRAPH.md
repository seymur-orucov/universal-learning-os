# SQL/PostgreSQL Skill Graph

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/sql-postgresql/SKILL_GRAPH.md

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
