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

