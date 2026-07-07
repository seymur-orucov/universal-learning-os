# SQL/PostgreSQL Skill Graph

## Use

Learning skills are learner competencies, not agent skills. This file is derived from `domains/sql-postgresql/SKILL_GRAPH.md` and is used for lesson selection, review, practice targeting, assessment, and progress summaries.

Actual mastery belongs in learner state and MUST reference evidence.

## Progression

### Stage 1: Relational Database and SQL Foundations

- `sql-postgresql.relational-model`: explain relational database purpose and table relationships.
- `sql-postgresql.table-row-column-concepts`: distinguish database, schema, table, row, column, and value.
- `sql-postgresql.keys-concepts`: explain `primary key` and `foreign key` concepts.
- `sql-postgresql.sql-statement-anatomy`: recognize SQL statement structure.
- `sql-postgresql.postgresql-tooling-concepts`: understand PostgreSQL tooling conceptually.

### Stage 2: Filtering, Sorting, and Basic Query Composition

- `sql-postgresql.select-basics`: write simple `SELECT` queries.
- `sql-postgresql.column-selection-aliases`: select columns and use aliases.
- `sql-postgresql.where-comparison-boolean`: filter with `WHERE`, comparisons, and boolean logic.
- `sql-postgresql.in-between-predicates`: use `IN`, `NOT IN`, and `BETWEEN`.
- `sql-postgresql.like-ilike-patterns`: use `LIKE` and `ILIKE`.
- `sql-postgresql.null-semantics`: reason about `NULL` and `IS NULL`.
- `sql-postgresql.order-by`: sort query results.
- `sql-postgresql.limit-offset`: limit and paginate results.
- `sql-postgresql.distinct-results`: remove duplicates with `DISTINCT`.
- `sql-postgresql.basic-query-composition`: combine basic clauses correctly.

### Stage 3: Joins and Relationships

- `sql-postgresql.relationship-reasoning`: reason about relationships before joining.
- `sql-postgresql.inner-join`: use `INNER JOIN`.
- `sql-postgresql.left-join`: use `LEFT JOIN`.
- `sql-postgresql.outer-joins-concepts`: explain `RIGHT JOIN` and `FULL JOIN` conceptually.
- `sql-postgresql.join-conditions-duplicates`: avoid wrong join conditions and duplicate rows.
- `sql-postgresql.many-to-many-relationships`: reason about junction tables.

### Stage 4: Aggregation and Grouping

- `sql-postgresql.aggregate-functions`: use `COUNT`, `SUM`, `AVG`, and related aggregates.
- `sql-postgresql.group-by`: group rows correctly.
- `sql-postgresql.having`: filter grouped results with `HAVING`.
- `sql-postgresql.aggregate-filtering`: distinguish row filtering from aggregate filtering.
- `sql-postgresql.grouping-with-joins`: avoid inflated aggregates after joins.
- `sql-postgresql.reporting-queries-basic`: write basic reporting queries.

### Stage 5: Subqueries, CTEs, and Set Operations

- `sql-postgresql.scalar-subqueries`: use scalar subqueries.
- `sql-postgresql.in-exists-subqueries`: use `IN` and `EXISTS` subqueries.
- `sql-postgresql.correlated-subqueries-concepts`: explain correlated subqueries conceptually.
- `sql-postgresql.ctes`: use CTEs for readable query steps.
- `sql-postgresql.set-operations`: use `UNION`, `INTERSECT`, and `EXCEPT`.
- `sql-postgresql.query-decomposition-readability`: decompose complex queries.

### Stage 6: Data Modeling and Normalization

- `sql-postgresql.entity-modeling`: identify entities and attributes.
- `sql-postgresql.normalization-basics`: explain normalization goals.
- `sql-postgresql.normal-forms-1nf-2nf-3nf`: reason about 1NF, 2NF, and 3NF.
- `sql-postgresql.denormalization-tradeoffs`: explain denormalization tradeoffs.
- `sql-postgresql.erd-reasoning`: reason from ERD-style relationships.
- `sql-postgresql.schema-refactoring-basics`: propose simple schema improvements.

### Stage 7: PostgreSQL Data Types, Constraints, and DDL

- `sql-postgresql.ddl-basics`: write basic DDL.
- `sql-postgresql.postgresql-data-types`: choose common PostgreSQL data types.
- `sql-postgresql.constraints-ddl`: define and explain constraints.
- `sql-postgresql.default-values-identity`: use defaults and identity columns conceptually.
- `sql-postgresql.schema-migrations-concepts`: understand schema migration concepts.
- `sql-postgresql.views-basics`: use views conceptually and practically.

### Stage 8: Transactions and Concurrency

- `sql-postgresql.transaction-concepts`: explain transaction purpose.
- `sql-postgresql.commit-rollback`: use `COMMIT` and `ROLLBACK` conceptually.
- `sql-postgresql.isolation-levels-concepts`: explain isolation levels conceptually.
- `sql-postgresql.locking-basics`: understand locking basics.
- `sql-postgresql.mvcc-basics`: explain MVCC basics.
- `sql-postgresql.concurrency-anomalies`: recognize concurrency anomalies conceptually.

### Stage 9: Indexing and Query Performance

- `sql-postgresql.index-concepts-btree`: explain index and B-tree basics.
- `sql-postgresql.composite-indexes`: reason about composite indexes.
- `sql-postgresql.index-selectivity`: explain selectivity.
- `sql-postgresql.explain-basics`: read basic `EXPLAIN`.
- `sql-postgresql.explain-analyze-basics`: interpret `EXPLAIN ANALYZE`.
- `sql-postgresql.scan-types-optimization-basics`: distinguish sequential scan and index scan.
- `sql-postgresql.query-optimization-basics`: reason about basic query optimization.

### Stage 10: Advanced PostgreSQL Features

- `sql-postgresql.window-functions-basics`
- `sql-postgresql.json-jsonb-basics`
- `sql-postgresql.full-text-search-concepts`
- `sql-postgresql.functions-procedures-concepts`
- `sql-postgresql.triggers-concepts`
- `sql-postgresql.materialized-views-concepts`

### Cross-Cutting Learning Skills

- `sql-postgresql.documentation-reading`
- `sql-postgresql.query-behavior-explanation`
- `sql-postgresql.sql-error-debugging`
- `sql-postgresql.performance-reasoning`
- `sql-postgresql.interview-explanation`
- `sql-postgresql.project-application`

## Assessment Note

Target mastery levels in the canonical graph are expectations only. Runtime mastery MUST be stored in learner state and backed by evidence.
