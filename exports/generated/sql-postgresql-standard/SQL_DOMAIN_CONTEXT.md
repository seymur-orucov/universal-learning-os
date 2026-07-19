# SQL/PostgreSQL Domain Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/sql-postgresql/DOMAIN.md

# SQL and PostgreSQL

## Domain Identity

- Domain id: `sql-postgresql`
- Domain title: `SQL and PostgreSQL`
- Domain version: `0.1.0-draft`

## Target Audience

- Learners who want to become productive with SQL and PostgreSQL.
- Software engineers who need practical database skills.
- Learners progressing from beginner to advanced database topics.

## Domain Goals

- Understand relational database fundamentals.
- Write correct SQL queries.
- Work confidently with PostgreSQL.
- Reason about schema design, constraints, joins, aggregation, subqueries, transactions, indexing, and performance.
- Practice with realistic datasets such as Northwind where appropriate.

## Expected Outcomes

- Learner can write and explain SQL queries.
- Learner can design basic relational schemas.
- Learner can use PostgreSQL-specific features at an appropriate level.
- Learner can reason about query behavior and performance.
- Learner can apply concepts in exercises, projects, and interview-style explanations.

## Supported Tracks

- `sql-postgresql.main`: beginner-to-advanced SQL/PostgreSQL track.
- `sql-postgresql.practice`: focused practice and review track.
- `sql-postgresql.interview`: interview and explanation track.

## Localization Policy

- Instruction language MAY be Azerbaijani for the initial project preference.
- Terminology language MAY be English.
- Important technical terms such as `SELECT`, `WHERE`, `JOIN`, `primary key`, `foreign key`, `index`, `transaction`, `EXPLAIN ANALYZE`, and `MVCC` SHOULD remain in English unless `domains/sql-postgresql/GLOSSARY.md` says otherwise.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Prerequisites

- Basic computer literacy.
- No prior SQL knowledge required for the main beginner track.
- Programming experience is useful but not required.

## Non-Goals

- This domain is not a full DBA certification program at draft stage.
- It does not replace official PostgreSQL documentation.
- It does not contain learner-specific progress.
- It does not teach backend application frameworks directly.

## Relationships

- Draft syllabus skeleton: `domains/sql-postgresql/SYLLABUS.md`.
- Initial learning skill graph skeleton: `domains/sql-postgresql/SKILL_GRAPH.md`.
- Practice guidance: `domains/sql-postgresql/PRACTICE_RULES.md`.
- Assessment mapping: `domains/sql-postgresql/ASSESSMENT_RULES.md`.
- Project placeholders: `domains/sql-postgresql/PROJECTS.md`.
- Glossary guidance: `domains/sql-postgresql/GLOSSARY.md`.
- Domain pack contract: `specification/DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Which PostgreSQL version should this draft domain pack target first?
- Should Northwind be the default practice dataset or one of several supported datasets?

## Source: domains/sql-postgresql/README.md

# SQL/PostgreSQL Domain Pack

This is the SQL/PostgreSQL pilot domain pack.

It contains reusable subject-specific content and metadata for learning SQL and PostgreSQL. It is separate from learner state and MUST NOT contain learner-specific progress or mastery records.

This domain pack may define learning skills for SQL and PostgreSQL. Learning skills are learner competencies, not agent skills.

The domain uses the framework's evidence-based mastery model. Lesson completion, exposure, or generated explanations MUST NOT imply mastery.

## Localization

This domain SHOULD support Azerbaijani instruction with English technical terms as an initial project preference. This is not a global framework default.

Important SQL/PostgreSQL technical terms SHOULD remain in English unless domain glossary guidance says otherwise.

## Files

- `domains/sql-postgresql/DOMAIN.md`: domain identity and boundaries.
- `domains/sql-postgresql/SYLLABUS.md`: structured main-track syllabus outline.
- `domains/sql-postgresql/SKILL_GRAPH.md`: SQL/PostgreSQL learning skill graph.
- `domains/sql-postgresql/PRACTICE_RULES.md`: practice guidance and evidence-producing practice rules.
- `domains/sql-postgresql/ASSESSMENT_RULES.md`: assessment mapping and review trigger guidance.
- `domains/sql-postgresql/PROJECTS.md`: project category guidance and project evidence rules.
- `domains/sql-postgresql/GLOSSARY.md`: terminology guidance with Azerbaijani explanations for the initial project preference.
- `domains/sql-postgresql/QUALITY_REVIEW.md`: domain pack quality checks for cross-reference integrity, evidence boundaries, and localization consistency.

## Relationships

- Domain pack rules are defined in `specification/DOMAIN_PACK_SPEC.md`.
- Localization rules are defined in `specification/LOCALIZATION_SPEC.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Which SQL/PostgreSQL subset should become the first fully authored lesson path?

## Source: domains/sql-postgresql/QUALITY_REVIEW.md

# SQL/PostgreSQL Domain Quality Review

## Review Date

`<review-date>`

## Reviewed Files

- `domains/sql-postgresql/README.md`
- `domains/sql-postgresql/DOMAIN.md`
- `domains/sql-postgresql/SYLLABUS.md`
- `domains/sql-postgresql/SKILL_GRAPH.md`
- `domains/sql-postgresql/PRACTICE_RULES.md`
- `domains/sql-postgresql/ASSESSMENT_RULES.md`
- `domains/sql-postgresql/PROJECTS.md`
- `domains/sql-postgresql/GLOSSARY.md`

## Audit Scope

This Stage 8.5 quality gate reviews the SQL/PostgreSQL domain pack for cross-reference integrity, syllabus alignment, practice and assessment consistency, project guidance boundaries, glossary alignment, evidence-based mastery, learner state separation, and localization consistency.

This review does not create lessons, exercises, Northwind tasks, learner state, schemas, executable tooling, or learner assessment results.

## Cross-Reference Integrity Summary

- Learning skill references in `domains/sql-postgresql/SYLLABUS.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/PRACTICE_RULES.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/ASSESSMENT_RULES.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/PROJECTS.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- Learning skill references in `domains/sql-postgresql/GLOSSARY.md` were checked against `domains/sql-postgresql/SKILL_GRAPH.md`.
- No missing learning skill ids were found during this review.

## Syllabus Alignment Summary

- Syllabus stages align with the staged learning skill graph.
- Lesson outlines target existing `sql-postgresql.*` learning skill ids.
- Lesson outlines remain concise and do not become full lesson bodies.
- Stage 11 remains project milestone guidance, not full project task implementation.
- Stage 12 remains interview and explanation readiness guidance, not a full interview bank.
- Lesson 1 remains limited to the relational-model target: separating related information, comparing grouped and oversized representations, identifying candidate information groups, and previewing that keys connect tables.
- Lesson 1 does not require bridge tables, many-to-many design, normalization, or primary/foreign key implementation details.
- Many-to-many modeling remains in Lesson 14; students/courses uses the technically correct `students`, `courses`, and `enrollments` structure.

## Practice and Assessment Alignment Summary

- Practice types align with `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions align with `core/learning-engine/ASSESSMENT_MODEL.md`.
- Review triggers point to valid learning skill ids.
- Difficulty labels D1-D5 are practice guidance and MUST NOT be treated as mastery records.
- Mastery recommendations require evidence as defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Cardinality and schema exercises remain technically correct, prerequisite-safe, and aligned with the current syllabus position.

## Project Guidance Summary

- Project ids follow the `sql-postgresql.project.<name>` pattern.
- Project categories reference valid learning skill ids.
- Project evidence rules state that artifact existence alone MUST NOT imply mastery.
- Northwind remains optional dataset guidance and is not an implemented exercise bank.
- Project progress belongs in learner state, not this domain pack.

## Glossary Alignment Summary

- Glossary terms preserve English SQL/PostgreSQL terminology.
- Azerbaijani explanations clarify terms without replacing SQL syntax with unnatural translations.
- Related learning skill references point to existing learning skill ids.
- The glossary remains terminology guidance and does not become lesson content.
- The glossary does not override `specification/LOCALIZATION_SPEC.md`.

## Evidence and Learner State Boundary Summary

- SQL/PostgreSQL domain files contain reusable domain pack content, not learner-specific progress.
- SQL/PostgreSQL domain files MUST NOT contain learner mastery records.
- Lesson completion, project artifact existence, review participation, or glossary exposure MUST NOT imply mastery.
- Evidence-based mastery is preserved through references to `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner progress belongs in learner state governed by `specification/STATE_SPEC.md`.

## Localization Consistency Summary

- The domain pack does not hardcode Azerbaijani as the global framework language.
- The domain pack supports Azerbaijani instruction with English technical terms as a learner or project preference.
- SQL/PostgreSQL technical terms SHOULD remain in English where appropriate.
- Localization preferences MUST NOT change evidence, mastery, or learner state semantics.

## Issues Found

- No missing learning skill references were found.
- No full lessons, exercise bank files, Northwind task files, learner state files, schemas, executable tooling, or package files were found.
- README file descriptions were outdated after Stage 8.1 through Stage 8.4 expansion.

## Changes Made

- Updated `domains/sql-postgresql/README.md` to reference `domains/sql-postgresql/QUALITY_REVIEW.md` and current domain file responsibilities.
- Added this quality review record.
- Added `docs/decisions/ADR-0014-sql-postgresql-domain-quality-gate.md`.
- Stage 27.1 refined Lesson 1 and relationship practice boundaries so early exercises cannot require untaught many-to-many or bridge-table knowledge.
- Stage 27.1 added explicit technical-correctness and syllabus-readiness checks for cardinality and schema exercises.

## Remaining Open Questions

- Which SQL/PostgreSQL lesson path should be authored first?
- Should Stage 10 advanced PostgreSQL features later move into optional extension tracks?
- Which learning skills should receive formal assessment rubrics first?
- Should Northwind become the default realistic dataset for selected stages or remain one option among several?
- Should future project task files require a standard artifact metadata block?
- Which glossary terms require examples before lesson authoring begins?

## Readiness Status

Ready for future lesson authoring planning, subject to the remaining open questions. The domain pack is not a complete lesson set, exercise bank, project task set, learner state record, or executable implementation.
