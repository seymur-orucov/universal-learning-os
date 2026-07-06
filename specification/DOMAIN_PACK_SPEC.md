# Domain Pack Specification

## Purpose

Define the contract for reusable domain-specific learning material and metadata.

## Scope

This specification covers expected responsibilities and boundaries for future domain packs such as databases, programming languages, architecture, system design, professional communication, and other structured domains.

## Non-Goals

- It does not create any complete domain pack.
- It does not define a universal syllabus.
- It does not define learner-specific progress.
- It does not define exact file formats for future domain pack manifests.
- It does not create real domain content.

## Core Concepts

- Domain pack: reusable subject-specific content and metadata.
- Domain concept: a subject-specific knowledge unit.
- Learning skill: a subject-specific learner competency.
- Prerequisite: a dependency between domain concepts or learning skills.
- Assessment criteria: domain-specific expectations used to evaluate evidence.
- Domain language policy: domain-specific guidance for terminology presentation, glossary mapping, and term preservation.

## Future Components

Future domain packs MAY contain these conceptual components:

- `DOMAIN.md`: domain identity, scope, assumptions, and audience.
- `SYLLABUS.md`: ordered learning paths or tracks.
- `SKILL_GRAPH.md`: domain concepts, learning skills, dependencies, and progression.
- `PRACTICE_RULES.md`: practice types, constraints, and expected learner actions.
- `ASSESSMENT_RULES.md`: domain-specific criteria for evaluating evidence.
- `PROJECTS.md`: project-based learning opportunities.
- `GLOSSARY.md`: domain-specific terminology.

Domain packs MAY include glossary and terminology guidance for important domain terms, especially when instruction language and terminology language differ.

## Normative Requirements

- Domain packs MUST NOT contain learner-specific progress.
- Domain packs MUST NOT contain mastery records for a learner.
- Domain packs MUST separate reusable content from framework core behavior.
- Domain packs MUST contain reusable subject-specific learning content, not execution-surface-specific instructions.
- Domain packs MAY define learning skills.
- Domain packs SHOULD define prerequisites and learning skill relationships.
- Domain packs SHOULD declare their compatibility with the framework version once versioning exists.
- Domain packs SHOULD define assessment criteria separately from learner evidence.
- Domain packs SHOULD provide glossary guidance when important technical terms should be preserved in a terminology language.
- Domain packs MAY map core mastery levels to domain-specific rubrics but MUST NOT weaken evidence requirements from `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Domain packs SHOULD support the localization policy in `specification/LOCALIZATION_SPEC.md`.
- Domain packs MUST NOT duplicate lifecycle rules from `specification/LEARNING_LIFECYCLE.md`.

## Relationships

- Core framework boundaries are defined in `specification/FRAMEWORK_SPEC.md`.
- Learning lifecycle semantics are defined in `specification/LEARNING_LIFECYCLE.md`.
- Learner progress storage is defined in `specification/STATE_SPEC.md`.
- Localization behavior is defined in `specification/LOCALIZATION_SPEC.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- What minimum manifest fields should every domain pack declare?
- Should domain packs support dependency ranges on other domain packs?
