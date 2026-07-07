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
