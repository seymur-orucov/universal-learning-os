# ADR-0012: SQL/PostgreSQL Practice and Assessment Rules

## Status

Accepted for Stage 8.3.

## Context

The SQL/PostgreSQL domain pack has a learning skill graph and syllabus. It now needs practice and assessment rules so future lessons, reviews, assessments, projects, and interviews can evaluate learner work consistently without creating full exercises or learner state.

## Decision

- Practice and assessment rules are expanded before full exercises.
- Practice difficulty guidance is separate from mastery records.
- SQL/PostgreSQL assessment uses correctness, independence, explanation quality, transfer ability, consistency, and speed only when domain-appropriate.
- Review triggers connect recurring failure patterns to specific SQL/PostgreSQL learning skills.
- Datasets are treated as guidance rather than mandatory dependencies.

## Rationale

Expanding rules before exercises gives future lesson authors and agent workflows a consistent evaluation contract. Difficulty labels help select practice shape but MUST NOT be interpreted as learner mastery. SQL/PostgreSQL work is observable through queries, explanations, schemas, debugging, query plans, projects, and interview responses, so assessment dimensions can be grounded in evidence.

Review trigger mapping makes failures actionable. For example, repeated `NULL` errors should route to `sql-postgresql.null-semantics`, while plan misinterpretation should route to `sql-postgresql.explain-analyze-basics`. Dataset guidance stays flexible because early lessons may need small synthetic tables, while later practice may use Northwind or project-specific schemas.

## Consequences

- Future exercises can be authored against stable practice and assessment rules.
- Reviews can target concrete learning skills instead of broad topics.
- Assessment output can propose evidence-backed learner state updates without silently applying them.
- Northwind remains available as a realistic dataset option without becoming a mandatory dependency.

## Provisional Decisions

- Practice difficulty labels D1-D5 are domain guidance only.
- Formal rubric thresholds are not defined yet.
- Northwind tasks are not implemented yet.
- Consistency measurement remains qualitative until learner state schemas exist.

## OPEN QUESTION

- Which SQL/PostgreSQL learning skills should receive formal rubrics first?
- Should Northwind become the default dataset for Stage 3 onward?
- Should M5 require project artifact evidence in this domain?
