# Learner State Boundaries

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/STATE_SPEC.md

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
- Learner language preference: learner-specific instruction language, terminology language, or glossary behavior governed by `specification/LOCALIZATION_SPEC.md`.

## Conceptual Minimum State Model

Future learner state SHOULD include these conceptual sections:

- `state_version`: identifies the learner state contract version.
- `learner_profile_ref`: references learner identity or profile data without requiring profile details in every state file.
- `active_tracks`: records current domain packs, tracks, goals, or learning paths.
- `learning_skill_records`: stores learner-specific status for domain learning skills.
- `evidence_log`: records observed learner activity used to justify assessments or updates.
- `review_queue`: lists learning skills or concepts needing review.
- `session_history`: summarizes completed sessions and their outcomes.
- `next_actions`: records proposed follow-up actions derived from state, domain pack, and evidence.

Future learner profile or learner state MAY include language preference fields such as:

- `instruction_language`: preferred language for explanations, feedback, lesson flow, and user-facing teaching text.
- `terminology_language`: preferred language for domain-specific technical terms.
- `glossary_preference`: preferred glossary behavior for preserved terms, translations, or usage notes.

## Normative Requirements

- Learner state MUST be learner-specific.
- Learner state MUST be separated from framework specifications and domain packs.
- Reusable domain content MUST NOT be duplicated into learner state.
- Learner state MAY reference domain learning skills.
- Learner state MUST NOT be changed without evidence or explicit user instruction.
- Mastery records MUST NOT be created solely because instructional content was shown.
- Mastery records MUST reference evidence or explicit user instruction.
- Evidence records SHOULD identify what happened, when it happened, and which learning skill they support.
- State updates SHOULD be proposed before being applied in agent-mediated workflows.
- `review_queue` SHOULD be generated from weak learning skills, stale learning skills, failed assessments, or upcoming prerequisites.
- Mutable learner state SHOULD use YAML once a concrete schema is defined.
- Machine-readable learner state SHOULD be validated by JSON Schema once schemas exist.
- State files SHOULD include version information once a versioning scheme is defined.
- Language preferences MAY influence presentation, but MUST NOT change evidence, mastery, or state semantics.
- Localization preferences MAY live in learner profile or learner state.
- Missing evidence MUST be reported honestly.

## Relationships

- Evidence and mastery semantics are defined in `specification/LEARNING_LIFECYCLE.md`.
- Domain pack content is defined in `specification/DOMAIN_PACK_SPEC.md`.
- Domain learning skills are defined in domain skill graphs governed by `specification/DOMAIN_PACK_SPEC.md`.
- Localization behavior is defined in `specification/LOCALIZATION_SPEC.md`.
- Future validation files belong under `schemas/`.

## OPEN QUESTION

- What is the minimum learner state schema?
- How should private learner data be separated from shareable examples?
- What migration policy is required before state files are used?

## Source: learners/README.md

# Learner State

Learner state is mutable learner-specific progress data.

It is separate from domain packs, framework specifications, commands, and agent skills. Learner state MAY reference domain learning skills, but MUST NOT duplicate domain pack content or redefine learning skills.

Learner state may contain evidence references, review items, session history, and next actions.

## Structure

- `learners/_template/` is a reference structure for future learner state files.
- `learners/_template/` is not real learner data.
- `learners/active-learner/` may contain generic active learner runtime state when explicitly created.
- Generic active learner state SHOULD avoid personal-name directories and personal identifiers.
- No real learner profile or progress data should be added without explicit instruction and evidence.

## Boundaries

- Learner state MUST be learner-specific.
- Learner state MUST NOT contain reusable domain pack content.
- Learner state MUST NOT mark mastery without evidence or explicit user instruction.
- Missing evidence MUST be reported honestly.
- Active learner state SHOULD remain minimal, learning-relevant, and free of sensitive personal data.

## OPEN QUESTION

- Should sample learner state live under tests after schemas exist, or remain documentation-only?

## Source: learners/_template/README.md

# Learner State Template

This directory is a reference structure for future learner state files. It is not real learner data.

## Files

- `PROFILE.md`: learner profile concepts, goals, preferences, localization preferences, constraints, and privacy notes.
- `STATE.md`: conceptual learner state index and references to state subdocuments.
- `EVIDENCE_LOG.md`: evidence record structure for learner activity and reviewed outputs.
- `REVIEW_QUEUE.md`: review item structure aligned with review triggers.
- `SESSION_HISTORY.md`: session report and history structure.
- `NEXT_ACTIONS.md`: proposed next action structure.

## Relationships

- Learner state rules are defined in `specification/STATE_SPEC.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Review behavior is defined in `core/learning-engine/REVIEW_MODEL.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should learner state be stored as one file or split across multiple files once YAML schemas exist?

## Source: learners/_template/STATE.md

# Learner State

This file defines conceptual learner state structure only. It is not real learner data.

## State Structure

- `state_version`: state contract version.
- `learner_profile_ref`: reference to `learners/_template/PROFILE.md` or future learner profile.
- `active_tracks`: active domain packs, tracks, goals, or learning paths.
- `learning_skill_records`: learner-specific records that reference domain learning skills.
- `evidence_log_ref`: reference to evidence records.
- `review_queue_ref`: reference to review items.
- `session_history_ref`: reference to session history.
- `next_actions_ref`: reference to proposed next actions.
- `state_integrity_notes`: known inconsistencies, missing evidence, or migration concerns.

## Normative Requirements

- `learning_skill_records` MUST reference domain learning skills and MUST NOT redefine those learning skills.
- Learner state MUST NOT duplicate reusable domain pack content.
- Mastery records MUST reference evidence or explicit user instruction.
- Missing evidence MUST be reported honestly.

## Relationships

- Domain learning skills are defined by domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should active tracks store human-readable names or only domain pack references?
