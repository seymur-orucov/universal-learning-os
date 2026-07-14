# Framework Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/FRAMEWORK_SPEC.md

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
- External lesson journal: an optional runtime destination for a learner-requested lesson summary; it is not learner state, evidence, mastery, or a canonical repository source.

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
- Optional external journal writes MUST be explicitly requested, MUST remain separate from learner state and evidence, and MUST be reported as successful only after the connected runtime tool confirms the write.
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

## Source: docs/ARCHITECTURE.md

# Architecture

The repository is organized around stable contracts first and implementation later. Markdown specifications define the intended behavior; future YAML and JSON Schema files will make selected contracts machine-readable.

## Layers

- Core framework: domain-independent behavior in `specification/`.
- Domain packs: reusable subject content in `domains/`.
- Learner state: learner-specific progress data in `learners/`.
- Commands: user-invoked workflows in `commands/`.
- Skills: reusable agent capabilities in `skills/`.
- Validation: future schemas and tests in `schemas/` and `tests/`.
- External integrations: optional runtime-tool contracts in `commands/`, `skills/`, and `docs/integrations/`; external data and credentials remain outside the repository.

## Source-of-Truth Boundaries

- Framework behavior is canonical in `specification/FRAMEWORK_SPEC.md`.
- Learner lifecycle behavior is canonical in `specification/LEARNING_LIFECYCLE.md`.
- Domain pack structure is canonical in `specification/DOMAIN_PACK_SPEC.md`.
- Skill structure is canonical in `specification/SKILL_SPEC.md`.
- Command structure is canonical in `specification/COMMAND_SPEC.md`.
- Learner state structure is canonical in `specification/STATE_SPEC.md`.
- Optional Notion lesson-journal behavior is canonical in `commands/SAVE_LESSON_TO_NOTION.md` and reusable capability behavior in `skills/notion-lesson-logger/SKILL.md`.

## Optional Integration Boundary

ChatGPT's connected Notion tool performs lesson-journal discovery and writes. Universal Learning OS contains no Notion client, credentials, assigned target ids, or learner journal data. Journal entries are external notes and remain separate from learner state, evidence, mastery, commands, skills, and reusable domain content.

## Versioning Direction

Specifications SHOULD be versioned before machine-readable files depend on them. Future migrations SHOULD identify source version, target version, and affected artifacts.

## OPEN QUESTION

- What versioning scheme should be used for specifications and domain packs?
- Where should migration scripts live once mutable state exists?

## Source: docs/VISION.md

# Vision

Universal Learning OS defines reusable learning contracts that can be applied across structured knowledge domains without hard-coding one subject, platform, or interface.

## Goals

- Provide a domain-independent core for learning workflows.
- Support reusable domain packs without mixing them into learner state.
- Support human-readable authoring with future machine validation.
- Enable ChatGPT Projects, OpenAI Codex, IDE agents, Markdown workflows, and future web applications to share common contracts.

## Non-Goals

- This repository does not currently provide full lesson content.
- This repository does not currently define a production web application.
- This repository does not currently implement validators or migrations.
- This repository does not currently prescribe one AI runtime or product surface.

## Principles

- A concept SHOULD have one canonical source of truth.
- Specifications SHOULD be concise, explicit, and versionable.
- Framework behavior MUST be separated from domain-specific behavior.
- Learner state MUST NOT be treated as reusable curriculum content.

## OPEN QUESTION

- Which runtime will first consume these specifications: ChatGPT Projects, Codex, an IDE agent, or a web application?
