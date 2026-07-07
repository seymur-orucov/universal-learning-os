# SQL/PostgreSQL Practice and Assessment Rules

## Practice Types

- Recall practice: syntax, definitions, key distinctions, and terminology.
- Guided practice: scaffolded query writing and clause-by-clause construction.
- Independent practice: write queries or explanations without hints.
- Mixed practice: combine filtering, joins, grouping, subqueries, and schema reasoning.
- Error-based practice: repair wrong queries or misconceptions.
- Project-based practice: schema, query, reporting, performance, or transaction artifacts.
- Interview-style practice: explain query behavior, tradeoffs, and debugging decisions.

## Difficulty Guidance

- D1: recognition and recall.
- D2: guided application.
- D3: independent application.
- D4: transfer and integration.
- D5: project or interview defense.

Difficulty labels are practice guidance, not mastery records.

## Evidence-Producing Work

Evidence may come from written SQL query, explanation of query behavior, schema design artifact, corrected query, query plan interpretation, project artifact, or interview-style answer.

Practice completion alone MUST NOT imply mastery.

## Common Error Categories

- Syntax error.
- Wrong filter logic.
- `NULL` handling error.
- Join condition error.
- Duplicate row issue.
- Aggregate grouping error.
- `WHERE` vs `HAVING` confusion.
- Subquery cardinality error.
- Constraint misunderstanding.
- Transaction misconception.
- Index overuse or misuse.
- `EXPLAIN` or plan misinterpretation.

## Assessment Dimensions

- Correctness: query returns intended result and handles edge cases.
- Independence: learner writes or explains without excessive hints.
- Explanation quality: learner explains query logic and database behavior clearly.
- Transfer ability: learner applies concepts to new tables or requirements.
- Consistency: learner performs reliably across related tasks.
- Speed: relevant only for interview or fluency contexts, not primary mastery.

## Mastery Expectations

- M0: no reliable evidence.
- M1: recognizes terms or query patterns.
- M2: explains concepts.
- M3: applies with guidance.
- M4: writes or explains independently in familiar contexts.
- M5: transfers to realistic schemas, projects, or performance/debugging work.
- M6: explains and defends choices under follow-up questioning.

These are assessment expectations, not learner state records.

## Review Trigger Guidance

- Repeated `NULL` errors -> review `sql-postgresql.null-semantics`.
- Duplicate rows after joins -> review `sql-postgresql.join-conditions-duplicates`.
- Inflated aggregates -> review `sql-postgresql.grouping-with-joins`.
- Plan misinterpretation -> review `sql-postgresql.explain-analyze-basics`.
- Index misuse -> review `sql-postgresql.index-selectivity` or `sql-postgresql.composite-indexes`.
- Transaction confusion -> review `sql-postgresql.transaction-concepts` and `sql-postgresql.mvcc-basics`.

## Dataset Guidance

Use small synthetic tables for early lessons, Northwind for realistic query and reporting practice, and project-specific schemas for schema design and project application. No dataset is mandatory for every lesson.

## Required Boundary

Domain rules MUST NOT weaken framework evidence requirements. Practice or assessment output may propose state updates but MUST NOT silently apply them.
