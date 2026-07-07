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

