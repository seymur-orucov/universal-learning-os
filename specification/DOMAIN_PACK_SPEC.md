# Domain Pack Specification

## Purpose

Define the contract for reusable domain-specific learning material.

## Scope

This specification covers expected responsibilities and boundaries for future domain packs such as SQL, programming languages, architecture, system design, English, and communication.

## Non-Goals

- It does not create any complete domain pack.
- It does not define a universal syllabus.
- It does not define learner-specific progress.
- It does not define exact file formats for future domain pack manifests.

## Core Concepts

- Domain pack: reusable subject-specific content and metadata.
- Domain concept: a subject-specific knowledge unit.
- Learning skill: a subject-specific learner competency.
- Prerequisite: a dependency between domain concepts or skills.
- Assessment criteria: domain-specific expectations used to evaluate evidence.

## Future Components

Future domain packs MAY contain these conceptual components:

- `DOMAIN.md`: domain identity, scope, assumptions, and audience.
- `SYLLABUS.md`: ordered learning paths or tracks.
- `SKILL_GRAPH.md`: domain concepts, learning skills, dependencies, and progression.
- `PRACTICE_RULES.md`: practice types, constraints, and expected learner actions.
- `ASSESSMENT_RULES.md`: domain-specific criteria for evaluating evidence.
- `PROJECTS.md`: project-based learning opportunities.
- `GLOSSARY.md`: domain-specific terminology.

## Normative Requirements

- Domain packs MUST NOT contain learner-specific progress.
- Domain packs MUST separate reusable content from framework core behavior.
- Domain packs MUST contain reusable subject-specific learning content, not execution-surface-specific instructions.
- Domain packs SHOULD declare their compatibility with the framework version once versioning exists.
- Domain packs SHOULD define assessment criteria separately from learner evidence.
- Domain packs MUST NOT duplicate lifecycle rules from `LEARNING_LIFECYCLE.md`.

## Relationships

- Core framework boundaries are defined in `FRAMEWORK_SPEC.md`.
- Learning lifecycle semantics are defined in `LEARNING_LIFECYCLE.md`.
- Learner progress storage is defined in `STATE_SPEC.md`.

## OPEN QUESTION

- What minimum manifest fields should every domain pack declare?
- Should domain packs support dependency ranges on other domain packs?
