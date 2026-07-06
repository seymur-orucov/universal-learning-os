# Learning Skill Graph

## Purpose

Define learning skills and relationships for a domain pack.

## Learning Skill Structure

Each learning skill SHOULD include:

- `learning_skill_id`: stable identifier scoped to the domain pack.
- `title`: human-readable name.
- `description`: concise competency description.
- `level`: domain-defined or framework-aligned level.
- `prerequisites`: required prior learning skills or concepts.
- `related_learning_skills`: adjacent, supporting, or dependent learning skills.
- `target_mastery_level`: target level from `core/mastery-model/MASTERY_LEVELS.md`.
- `evidence_requirements`: evidence needed before mastery claims.
- `assessment_criteria`: domain-specific criteria.
- `practice_types`: suitable practice types.
- `common_mistakes`: likely errors or misconceptions.
- `glossary_terms`: important terms from `domains/_template/GLOSSARY.md`.

## Normative Requirements

- Learning skills are learner competencies.
- Learning skills MUST NOT be confused with agent skills.
- This file MUST NOT contain learner-specific mastery records.
- Evidence requirements MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should learning skill identifiers be globally unique or scoped to a domain pack?

