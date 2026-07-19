Canonical source: `specification/FRAMEWORK_SPEC.md`.

# Framework Specification

## Purpose

Define the domain-independent contracts for Universal Learning OS.

## Scope

This specification covers framework roles, canonical boundaries, versioning expectations, and separation between core behavior, domain packs, learner state, commands, and agent skills.

## Non-Goals

- It does not define domain-specific syllabuses or lessons.
- It does not define concrete YAML schemas.
- It does not define application UI behavior.
- It does not define agent prompts for a specific product surface.

## Core Concepts

- Framework core: domain-independent rules and lifecycle contracts.
- Domain pack: reusable domain-specific material described by `specification/DOMAIN_PACK_SPEC.md`.
- Learner state: mutable learner-specific data described by `specification/STATE_SPEC.md`.
- Command: user-invoked workflow described by `specification/COMMAND_SPEC.md`.
- Agent skill: reusable agent capability described by `specification/SKILL_SPEC.md`.
- Learning skill: domain-specific learner competency described by a future domain skill graph.
- Evidence: observed learner activity used to justify state changes.
- Localization preference: configurable instruction language and terminology language behavior described by `specification/LOCALIZATION_SPEC.md`.

## Normative Requirements

- The framework MUST keep domain-independent behavior separate from domain-specific behavior.
- The framework MUST keep specifications separate from learner data.
- A normative concept MUST have one canonical source of truth.
- Documents SHOULD cross-reference canonical specifications instead of duplicating rules.
- Framework contracts SHOULD be designed for explicit versioning and future migration.
- Canonical source boundaries MUST be preserved when adding documents, examples, schemas, or tooling.
- Execution surfaces MAY include ChatGPT Projects, OpenAI Codex, IDE-based agents, Markdown workflows, and future applications, but they MUST conform to the same framework contracts.
- Surface-specific behavior SHOULD be isolated from domain-independent framework rules.
- Reusable framework content and domain pack content MUST NOT contain learner-specific progress.
- Learner progress MUST require evidence or explicit user instruction, as defined by `specification/LEARNING_LIFECYCLE.md` and `specification/STATE_SPEC.md`.
- User-facing teaching behavior SHOULD respect localization preferences defined by `specification/LOCALIZATION_SPEC.md`.
- Versioned artifacts SHOULD declare the framework contract version they target once versioning exists.
- Unresolved architectural or behavioral issues MUST be marked as `OPEN QUESTION`.

## Relationships

- Domain-independent learning engine models are defined in `core/learning-engine/`.
- Framework-level mastery models are defined in `core/mastery-model/`.
- Learner progress rules are defined in `specification/LEARNING_LIFECYCLE.md`.
- Domain pack rules are defined in `specification/DOMAIN_PACK_SPEC.md`.
- Agent skill rules are defined in `specification/SKILL_SPEC.md`.
- Command rules are defined in `specification/COMMAND_SPEC.md`.
- Learner state rules are defined in `specification/STATE_SPEC.md`.
- Localization rules are defined in `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- What is the first stable framework version identifier?
- Which artifacts must declare framework compatibility?
