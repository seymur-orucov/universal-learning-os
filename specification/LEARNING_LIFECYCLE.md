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

## Learning Loop

The domain-independent learning loop is:

1. Diagnose: identify current learner state, goals, gaps, and constraints.
2. Plan: select an appropriate track, learning skill, lesson, practice item, or assessment.
3. Teach: present explanation, examples, or guidance without assuming mastery.
4. Demonstrate: show the expected performance or reasoning pattern.
5. Guided Practice: support the learner while they attempt the target activity.
6. Independent Practice: ask the learner to perform with reduced support.
7. Feedback: compare learner output against criteria and explain gaps.
8. Assess: evaluate evidence against domain or framework criteria.
9. State Update: propose or apply learner-state changes when justified.
10. Review Scheduling: create review items for weak, stale, failed, or prerequisite skills.
11. Next Action: select the next useful learning step.

## Normative Requirements

- Learner progress MUST NOT be modified without evidence or explicit user instruction.
- A skill or concept MUST NOT be marked mastered merely because content was displayed.
- A learner MAY view a lesson without gaining mastery.
- Assessment MUST be based on evidence.
- State updates MUST be traceable to evidence unless explicitly directed by the user.
- Mastery claims SHOULD reference evidence sufficient to justify the claim.
- Weak learning skills SHOULD create review items.
- Next actions SHOULD be selected from current learner state, the relevant domain pack, and available evidence.
- Progress updates MUST remain learner-specific and MUST NOT be written into reusable domain packs.
- Domain packs MAY define assessment criteria, but lifecycle semantics remain governed by this specification.

## Relationships

- Learner state storage is defined in `STATE_SPEC.md`.
- Domain-specific criteria belong to domain packs defined by `DOMAIN_PACK_SPEC.md`.
- Framework-wide boundaries are defined in `FRAMEWORK_SPEC.md`.

## OPEN QUESTION

- What evidence model is required for automated versus human-reviewed assessment?
- Should mastery support confidence levels, timestamps, or decay policies?
