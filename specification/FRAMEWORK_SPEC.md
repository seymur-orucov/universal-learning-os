# Framework Specification

## Purpose

Define the domain-independent contracts for Universal Learning OS.

## Scope

This specification covers framework roles, canonical boundaries, versioning expectations, and separation between core behavior, domain packs, learner state, commands, and skills.

## Non-Goals

- It does not define domain-specific syllabuses or lessons.
- It does not define concrete YAML schemas.
- It does not define application UI behavior.
- It does not define agent prompts for a specific product surface.

## Core Concepts

- Framework core: domain-independent rules and lifecycle contracts.
- Domain pack: reusable domain-specific material described by `DOMAIN_PACK_SPEC.md`.
- Learner state: mutable learner-specific data described by `STATE_SPEC.md`.
- Command: user-invoked workflow described by `COMMAND_SPEC.md`.
- Skill: reusable agent capability described by `SKILL_SPEC.md`.
- Evidence: observed learner activity used to justify state changes.

## Normative Requirements

- The framework MUST keep domain-independent behavior separate from domain-specific behavior.
- The framework MUST keep specifications separate from learner data.
- A normative concept MUST have one canonical source of truth.
- Documents SHOULD cross-reference canonical specifications instead of duplicating rules.
- Framework contracts SHOULD be designed for explicit versioning and future migration.
- Unresolved architectural or behavioral issues MUST be marked as `OPEN QUESTION`.

## Relationships

- Learner progress rules are defined in `LEARNING_LIFECYCLE.md`.
- Domain pack rules are defined in `DOMAIN_PACK_SPEC.md`.
- Skill rules are defined in `SKILL_SPEC.md`.
- Command rules are defined in `COMMAND_SPEC.md`.
- Learner state rules are defined in `STATE_SPEC.md`.

## OPEN QUESTION

- What is the first stable framework version identifier?
- Which artifacts must declare framework compatibility?

