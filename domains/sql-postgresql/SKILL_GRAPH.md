# SQL/PostgreSQL Learning Skill Graph Skeleton

This is a concise initial skeleton, not a complete exhaustive learning skill graph.

Learning skills are learner competencies. They MUST NOT be confused with agent skills.

## Initial Learning Skill Nodes

### `sql-postgresql.relational-model`

- Title: Relational model fundamentals
- Description: Explain tables, rows, columns, relationships, keys, and relational thinking.
- Prerequisites: none
- Target mastery: M2 Understand
- Evidence requirements: learner explains core relational concepts using a small schema.
- Related learning skills: `sql-postgresql.schema-design`, `sql-postgresql.constraints`

### `sql-postgresql.select-basics`

- Title: Basic SELECT queries
- Description: Write simple `SELECT` queries over one table.
- Prerequisites: `sql-postgresql.relational-model`
- Target mastery: M4 Independent Application
- Evidence requirements: learner writes correct basic queries and explains selected columns.
- Related learning skills: `sql-postgresql.where-filtering`, `sql-postgresql.sorting-pagination`

### `sql-postgresql.where-filtering`

- Title: WHERE filtering
- Description: Filter rows using comparison, boolean logic, and null-aware conditions.
- Prerequisites: `sql-postgresql.select-basics`
- Target mastery: M4 Independent Application
- Evidence requirements: learner writes filters that return intended rows and explains edge cases.
- Related learning skills: `sql-postgresql.sorting-pagination`, `sql-postgresql.joins-basics`

### `sql-postgresql.sorting-pagination`

- Title: Sorting and pagination
- Description: Use `ORDER BY`, `LIMIT`, and `OFFSET` appropriately.
- Prerequisites: `sql-postgresql.select-basics`
- Target mastery: M3 Guided Application
- Evidence requirements: learner orders and limits result sets correctly.
- Related learning skills: `sql-postgresql.where-filtering`

### `sql-postgresql.joins-basics`

- Title: Basic joins
- Description: Combine related tables using common join patterns.
- Prerequisites: `sql-postgresql.relational-model`, `sql-postgresql.where-filtering`
- Target mastery: M4 Independent Application
- Evidence requirements: learner writes joins and explains relationship logic.
- Related learning skills: `sql-postgresql.constraints`, `sql-postgresql.grouping-aggregation`

### `sql-postgresql.grouping-aggregation`

- Title: Grouping and aggregation
- Description: Use aggregate functions and `GROUP BY` to summarize data.
- Prerequisites: `sql-postgresql.select-basics`, `sql-postgresql.where-filtering`
- Target mastery: M4 Independent Application
- Evidence requirements: learner writes grouped queries and explains aggregate behavior.
- Related learning skills: `sql-postgresql.joins-basics`, `sql-postgresql.subqueries`

### `sql-postgresql.subqueries`

- Title: Subqueries
- Description: Use subqueries in practical query composition.
- Prerequisites: `sql-postgresql.where-filtering`, `sql-postgresql.grouping-aggregation`
- Target mastery: M3 Guided Application
- Evidence requirements: learner uses a subquery to solve a clear requirement.
- Related learning skills: `sql-postgresql.ctes`

### `sql-postgresql.ctes`

- Title: Common table expressions
- Description: Use CTEs to structure readable multi-step queries.
- Prerequisites: `sql-postgresql.subqueries`
- Target mastery: M3 Guided Application
- Evidence requirements: learner rewrites or structures a query using a CTE.
- Related learning skills: `sql-postgresql.query-optimization-basics`

### `sql-postgresql.schema-design`

- Title: Basic schema design
- Description: Design tables and relationships for a small relational model.
- Prerequisites: `sql-postgresql.relational-model`
- Target mastery: M3 Guided Application
- Evidence requirements: learner proposes a small schema and explains table boundaries.
- Related learning skills: `sql-postgresql.constraints`

### `sql-postgresql.constraints`

- Title: Constraints and keys
- Description: Use `primary key`, `foreign key`, `UNIQUE`, `NOT NULL`, and checks appropriately.
- Prerequisites: `sql-postgresql.schema-design`
- Target mastery: M3 Guided Application
- Evidence requirements: learner defines constraints and explains what they protect.
- Related learning skills: `sql-postgresql.joins-basics`

### `sql-postgresql.transactions`

- Title: Transactions
- Description: Explain and use transactions for atomic changes.
- Prerequisites: `sql-postgresql.constraints`
- Target mastery: M3 Guided Application
- Evidence requirements: learner explains transaction boundaries and basic commit/rollback behavior.
- Related learning skills: `sql-postgresql.query-optimization-basics`

### `sql-postgresql.indexes-basics`

- Title: Index basics
- Description: Explain what indexes are and when they may help.
- Prerequisites: `sql-postgresql.where-filtering`, `sql-postgresql.schema-design`
- Target mastery: M3 Guided Application
- Evidence requirements: learner identifies candidate indexed columns and explains tradeoffs.
- Related learning skills: `sql-postgresql.explain-analyze`

### `sql-postgresql.explain-analyze`

- Title: EXPLAIN ANALYZE basics
- Description: Use `EXPLAIN ANALYZE` to inspect query execution.
- Prerequisites: `sql-postgresql.indexes-basics`
- Target mastery: M3 Guided Application
- Evidence requirements: learner interprets basic plan output and connects it to query behavior.
- Related learning skills: `sql-postgresql.query-optimization-basics`

### `sql-postgresql.query-optimization-basics`

- Title: Query optimization basics
- Description: Improve simple queries using indexes, predicates, and plan inspection.
- Prerequisites: `sql-postgresql.explain-analyze`, `sql-postgresql.joins-basics`
- Target mastery: M3 Guided Application
- Evidence requirements: learner explains a simple performance issue and proposes a justified improvement.
- Related learning skills: `sql-postgresql.indexes-basics`, `sql-postgresql.ctes`

## Normative Notes

- This file MUST NOT contain learner-specific mastery records.
- Evidence requirements MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Which learning skill nodes should be split before authoring the first lessons?

