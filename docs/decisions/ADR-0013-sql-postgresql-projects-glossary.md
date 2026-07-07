# ADR-0013: SQL/PostgreSQL Projects and Glossary Expansion

## Status

Accepted for Stage 8.4.

## Context

The SQL/PostgreSQL domain pack has a learning skill graph, syllabus, and practice and assessment rules. Future project-based practice, interviews, and localized lesson authoring need stronger project guidance and terminology support without creating full tasks, lessons, learner state, or a Northwind exercise bank.

## Decision

- SQL/PostgreSQL project guidance is expanded before full project tasks.
- Project difficulty labels are separate from mastery records.
- The glossary is expanded before full lesson authoring.
- Azerbaijani instruction with English SQL/PostgreSQL technical terms is supported as a learner or project preference.
- Northwind remains dataset guidance rather than an implemented exercise dependency.

## Rationale

Project categories give future sessions a stable structure for selecting realistic work while avoiding premature task generation. Difficulty labels help choose the project shape, but they MUST NOT be interpreted as learner mastery because mastery belongs in learner state and requires evidence.

The glossary is expanded before lessons so future lesson authors can preserve technical terms consistently. SQL syntax and PostgreSQL terms SHOULD remain in English, while Azerbaijani explanations MAY clarify meaning when localization preferences require it. This supports Azerbaijani instruction with English technical terms without hardcoding Azerbaijani as the framework-wide language.

Northwind is useful for realistic joins and reporting, but implementing a full exercise bank now would create domain content beyond this stage. Keeping Northwind as guidance preserves flexibility for small synthetic schemas, project-specific schemas, and future dataset decisions.

## Consequences

- Future project sessions can reference stable project categories and evidence rules.
- Future glossary-aware lessons can use consistent English technical terms with Azerbaijani explanations.
- Project artifacts can support evidence when reviewed, but artifact existence alone does not imply mastery.
- Northwind remains optional until explicit exercise design work begins.

## Provisional Decisions

- Project difficulty labels P1-P5 are domain guidance only.
- No full project task files are created yet.
- Glossary entries do not yet include examples for every term.
- Northwind is not the default dataset for every project or lesson.

## OPEN QUESTION

- Which project category should become the first fully specified pilot project?
- Should future project tasks require a standard artifact metadata block?
- Which glossary terms require examples before lesson authoring begins?
