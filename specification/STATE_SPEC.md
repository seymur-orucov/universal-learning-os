# State Specification

## Purpose

Define the contract for learner-specific mutable state.

## Scope

This specification covers future learner state responsibilities, evidence requirements, versioning expectations, and boundaries from reusable content.

## Non-Goals

- It does not define a concrete YAML schema.
- It does not create learner profiles.
- It does not define domain-specific rubrics.
- It does not define storage for reusable domain packs.

## Core Concepts

- Learner state: mutable data for one learner or learning context.
- Evidence reference: a link or description tying progress to observed activity.
- Progress record: a state entry describing current status.
- Mastery record: a state entry claiming demonstrated competence.
- State version: the version of the state contract used by a learner file.
- Migration: a future process that moves learner state between versions.

## Conceptual Minimum State Model

Future learner state SHOULD include these conceptual sections:

- `state_version`: identifies the learner state contract version.
- `learner_profile_ref`: references learner identity or profile data without requiring profile details in every state file.
- `active_tracks`: records current domain packs, tracks, goals, or learning paths.
- `skill_records`: stores learner-specific status for domain learning skills.
- `evidence_log`: records observed learner activity used to justify assessments or updates.
- `review_queue`: lists skills or concepts needing review.
- `session_history`: summarizes completed sessions and their outcomes.
- `next_actions`: records proposed follow-up actions derived from state, domain pack, and evidence.

## Normative Requirements

- Learner state MUST be learner-specific.
- Learner state MUST be separated from framework specifications and domain packs.
- Reusable domain content MUST NOT be duplicated into learner state.
- Learner state MUST NOT be changed without evidence or explicit user instruction.
- Mastery records MUST NOT be created solely because instructional content was shown.
- Mastery records MUST reference evidence.
- `review_queue` SHOULD be generated from weak skills, stale skills, failed assessments, or upcoming prerequisites.
- Mutable learner state SHOULD use YAML once a concrete schema is defined.
- Machine-readable learner state SHOULD be validated by JSON Schema once schemas exist.
- State files SHOULD include version information once a versioning scheme is defined.

## Relationships

- Evidence and mastery semantics are defined in `LEARNING_LIFECYCLE.md`.
- Domain pack content is defined in `DOMAIN_PACK_SPEC.md`.
- Future validation files belong under `schemas/`.

## OPEN QUESTION

- What is the minimum learner state schema?
- How should private learner data be separated from shareable examples?
- What migration policy is required before state files are used?
