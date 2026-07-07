# ADR-0014: SQL/PostgreSQL Domain Quality Gate

## Status

Accepted for Stage 8.5.

## Context

The SQL/PostgreSQL pilot domain pack now includes domain identity, a learning skill graph, a syllabus, practice rules, assessment rules, project guidance, and glossary guidance. Before lesson authoring begins, the domain pack needs a quality gate to verify consistency without creating lessons, exercises, learner state, schemas, or executable tooling.

## Decision

- A SQL/PostgreSQL domain quality review is recorded in `domains/sql-postgresql/QUALITY_REVIEW.md`.
- Cross-reference integrity is checked before future lesson authoring.
- Domain pack quality review is kept separate from learner assessment.
- The quality gate explicitly checks evidence-based mastery and localization consistency.
- README documentation is updated to reference the quality review artifact.

## Rationale

Cross-reference integrity matters because syllabus lessons, practice rules, assessment triggers, project categories, and glossary entries all depend on stable learning skill ids from `domains/sql-postgresql/SKILL_GRAPH.md`. Broken references would make future commands, agent skills, learner state references, and lesson authoring unreliable.

Domain pack quality review is not learner assessment. It evaluates reusable domain content and repository contracts, while learner assessment evaluates learner evidence and belongs in learner state workflows.

This gate protects evidence-based mastery by verifying that domain files do not imply mastery from lesson exposure, project artifact existence, glossary exposure, or practice participation alone. It protects localization consistency by confirming that Azerbaijani instruction with English SQL/PostgreSQL technical terms remains a configurable preference rather than a global framework default.

## Consequences

- Future lesson authoring starts from a reviewed domain pack rather than loosely connected drafts.
- Domain pack defects can be recorded separately from learner progress or assessment outcomes.
- Cross-reference checks can later inform automated validation when schemas or tooling exist.
- The quality review remains a human-readable artifact until executable validation is introduced.

## Provisional Decisions

- The review date remains a placeholder until the project adopts a release or review metadata policy.
- Quality review is recorded as Markdown before any automated validation tooling exists.
- Cross-reference checking remains manual or script-assisted, not schema-enforced.
- No lesson authoring begins as part of this quality gate.

## OPEN QUESTION

- Should every domain pack require a `QUALITY_REVIEW.md` before full lesson authoring?
- What minimum checks should future automated validation enforce?
- Should quality review metadata eventually move into a machine-readable manifest?
