# SQL/PostgreSQL Syllabus

## Track

`sql-postgresql.main`

Lesson completion MUST NOT imply mastery. Mastery requires evidence from learner output, reviewed work, assessment, project artifact, interview response, or explicit user instruction.

## Learning Sequence

### Stage 1: Relational Database and SQL Foundations

1. Relational data model — `sql-postgresql.relational-model`
2. Database, table, row, and column vocabulary — `sql-postgresql.table-row-column-concepts`
3. Keys and relationships — `sql-postgresql.keys-concepts`
4. SQL statement anatomy and PostgreSQL context — `sql-postgresql.sql-statement-anatomy`, `sql-postgresql.postgresql-tooling-concepts`

### Stage 2: Filtering, Sorting, and Basic Query Composition

5. Basic `SELECT` queries — `sql-postgresql.select-basics`
6. Column selection and aliases — `sql-postgresql.column-selection-aliases`
7. `WHERE` filtering and boolean logic — `sql-postgresql.where-comparison-boolean`
8. Predicate patterns — `sql-postgresql.in-between-predicates`, `sql-postgresql.like-ilike-patterns`
9. `NULL`-aware filtering — `sql-postgresql.null-semantics`
10. Sorting, pagination, distinctness, and composition — `sql-postgresql.order-by`, `sql-postgresql.limit-offset`, `sql-postgresql.distinct-results`, `sql-postgresql.basic-query-composition`

### Stage 3: Joins and Relationships

11. Relationship reasoning before joins — `sql-postgresql.relationship-reasoning`
12. `INNER JOIN` — `sql-postgresql.inner-join`
13. `LEFT JOIN` and outer join concepts — `sql-postgresql.left-join`, `sql-postgresql.outer-joins-concepts`
14. Duplicate rows and many-to-many joins — `sql-postgresql.join-conditions-duplicates`, `sql-postgresql.many-to-many-relationships`

### Stage 4: Aggregation and Grouping

15. Aggregate functions — `sql-postgresql.aggregate-functions`
16. `GROUP BY` — `sql-postgresql.group-by`
17. `HAVING` and aggregate filtering — `sql-postgresql.having`, `sql-postgresql.aggregate-filtering`
18. Reporting queries with joins — `sql-postgresql.grouping-with-joins`, `sql-postgresql.reporting-queries-basic`

### Stage 5: Subqueries, CTEs, and Set Operations

19. Scalar subqueries — `sql-postgresql.scalar-subqueries`
20. `IN`, `EXISTS`, and correlated subquery concepts — `sql-postgresql.in-exists-subqueries`, `sql-postgresql.correlated-subqueries-concepts`
21. CTEs for readable query steps — `sql-postgresql.ctes`
22. Set operations and decomposition — `sql-postgresql.set-operations`, `sql-postgresql.query-decomposition-readability`

### Stage 6: Data Modeling and Normalization

23. Entity modeling — `sql-postgresql.entity-modeling`
24. Normalization basics — `sql-postgresql.normalization-basics`, `sql-postgresql.normal-forms-1nf-2nf-3nf`
25. Denormalization and ERD reasoning — `sql-postgresql.denormalization-tradeoffs`, `sql-postgresql.erd-reasoning`
26. Schema refactoring basics — `sql-postgresql.schema-refactoring-basics`

### Stage 7: PostgreSQL Data Types, Constraints, and DDL

27. DDL basics and data types — `sql-postgresql.ddl-basics`, `sql-postgresql.postgresql-data-types`
28. Constraints in PostgreSQL tables — `sql-postgresql.constraints-ddl`
29. Defaults, identity columns, and migrations — `sql-postgresql.default-values-identity`, `sql-postgresql.schema-migrations-concepts`
30. Views basics — `sql-postgresql.views-basics`

### Stage 8: Transactions and Concurrency

31. Transaction concepts and `COMMIT`/`ROLLBACK` — `sql-postgresql.transaction-concepts`, `sql-postgresql.commit-rollback`
32. Isolation and concurrency anomalies — `sql-postgresql.isolation-levels-concepts`, `sql-postgresql.concurrency-anomalies`
33. Locking and MVCC basics — `sql-postgresql.locking-basics`, `sql-postgresql.mvcc-basics`

### Stage 9: Indexing and Query Performance

34. Index concepts and B-tree basics — `sql-postgresql.index-concepts-btree`
35. Composite indexes and selectivity — `sql-postgresql.composite-indexes`, `sql-postgresql.index-selectivity`
36. `EXPLAIN` and `EXPLAIN ANALYZE` — `sql-postgresql.explain-basics`, `sql-postgresql.explain-analyze-basics`
37. Scan types and query optimization basics — `sql-postgresql.scan-types-optimization-basics`, `sql-postgresql.query-optimization-basics`

### Stage 10: Advanced PostgreSQL Features

38. Window functions basics — `sql-postgresql.window-functions-basics`
39. `JSON`/`JSONB` and full-text search concepts — `sql-postgresql.json-jsonb-basics`, `sql-postgresql.full-text-search-concepts`
40. Functions, triggers, and materialized views conceptually — `sql-postgresql.functions-procedures-concepts`, `sql-postgresql.triggers-concepts`, `sql-postgresql.materialized-views-concepts`

### Stage 11: Projects and Real-World Practice

41. Northwind query practice milestone — `sql-postgresql.project-application`, joins, filtering, grouping
42. Schema design and reporting milestone — `sql-postgresql.schema-refactoring-basics`, `sql-postgresql.reporting-queries-basic`
43. Performance and transaction investigation milestone — `sql-postgresql.performance-reasoning`, `sql-postgresql.transaction-concepts`

### Stage 12: Interview and Explanation Readiness

44. Query behavior and debugging explanation — `sql-postgresql.query-behavior-explanation`, `sql-postgresql.sql-error-debugging`
45. Interview and project defense — `sql-postgresql.interview-explanation`, `sql-postgresql.project-application`

## Northwind Guidance

Northwind may be used for realistic filtering, joins, grouping, reporting, subqueries, and project practice. This pack does not include a full Northwind exercise bank.
