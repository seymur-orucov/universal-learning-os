# Learning Lifecycle Specification

## Purpose

Define the domain-independent lifecycle of learner interaction, evidence collection, state updates, and mastery claims.

## Scope

This specification covers learning sessions, evidence, assessment, progress updates, and mastery status at a framework level.

## Non-Goals

- It does not define domain-specific exercises.
- It does not define scoring rubrics for individual subjects.
- It does not define the concrete YAML state format.
- It does not define UI interactions.

## Core Concepts

- Session: a bounded learner interaction.
- Activity: learner work performed during a session.
- Evidence: observable output or behavior from an activity.
- Assessment: interpretation of evidence against criteria.
- Progress update: a proposed mutation to learner state.
- Mastery claim: a state claim that competence has been demonstrated.

## Normative Requirements

- Learner progress MUST NOT be modified without evidence or explicit user instruction.
- A skill or concept MUST NOT be marked mastered merely because content was displayed.
- Mastery claims SHOULD reference evidence sufficient to justify the claim.
- Progress updates MUST remain learner-specific and MUST NOT be written into reusable domain packs.
- Domain packs MAY define assessment criteria, but lifecycle semantics remain governed by this specification.

## Relationships

- Learner state storage is defined in `STATE_SPEC.md`.
- Domain-specific criteria belong to domain packs defined by `DOMAIN_PACK_SPEC.md`.
- Framework-wide boundaries are defined in `FRAMEWORK_SPEC.md`.

## OPEN QUESTION

- What evidence model is required for automated versus human-reviewed assessment?
- Should mastery support confidence levels, timestamps, or decay policies?

