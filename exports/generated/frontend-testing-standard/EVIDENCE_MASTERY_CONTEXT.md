# Evidence and Mastery Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: core/mastery-model/MASTERY_LEVELS.md

# Mastery Levels

## Purpose

Define a framework-level mastery scale.

## Scope

This scale describes learner competence across domains. Domain packs may map the scale to domain-specific rubrics.

## Mastery Scale

- M0 Unknown: no reliable evidence is available.
- M1 Recognize: the learner can identify or distinguish the concept when prompted.
- M2 Understand: the learner can explain the concept or reasoning in a basic way.
- M3 Guided Application: the learner can apply the learning skill with support, hints, or scaffolding.
- M4 Independent Application: the learner can apply the learning skill without material support in a familiar context.
- M5 Real-World Transfer: the learner can apply the learning skill in realistic, novel, or integrated contexts.
- M6 Explain and Defend: the learner can justify decisions, explain tradeoffs, and respond to challenge.

## Normative Requirements

- Mastery levels MUST be supported by evidence as defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Domain packs MAY map this scale to domain-specific rubrics.
- Domain-specific rubrics MUST NOT weaken the framework evidence requirement.
- Lesson exposure alone MUST NOT raise a learner's mastery level.
- Higher mastery levels SHOULD require stronger independence, transfer, consistency, or explanation evidence.

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Learner state records are governed by `specification/STATE_SPEC.md`.
- Evidence semantics are governed by `specification/LEARNING_LIFECYCLE.md`.

## OPEN QUESTION

- Should M6 require live challenge, written defense, or either form of evidence?

## Source: core/mastery-model/EVIDENCE_REQUIREMENTS.md

# Evidence Requirements

## Purpose

Define what evidence is needed before claiming mastery.

## Scope

This document defines acceptable evidence categories. It does not define concrete storage schemas, scoring rubrics, or domain-specific answers.

## Evidence Categories

Mastery claims SHOULD be based on one or more of:

- Learner output: work produced by the learner during a task, explanation, exercise, or project.
- Reviewed answer: learner output that has been checked by an agent, human, validator, or domain rubric.
- Assessment result: an evaluation against relevant assessment criteria.
- Project artifact: a realistic artifact produced or modified by the learner.
- Interview response: verbal or written response to interactive questioning.
- Explicit user instruction: a user-directed state change or declared prior competence.

## Normative Requirements

- Mastery claims MUST reference evidence or explicit user instruction.
- Evidence SHOULD identify what the learner did, when it occurred, and which learning skill or concept it supports.
- Reviewed answers SHOULD distinguish correct output from independent performance.
- Explicit user instruction MAY justify a state update, but SHOULD be marked distinctly from demonstrated evidence.
- Evidence records MUST NOT duplicate reusable domain content.
- Evidence requirements MUST NOT be weakened by domain-specific rubrics.

## Relationships

- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- State evidence storage is described by `specification/STATE_SPEC.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.

## OPEN QUESTION

- What minimum evidence fields are required once a concrete state schema exists?

## Source: specification/LEARNING_LIFECYCLE.md

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
10. Review Scheduling: create review items for weak, stale, failed, or prerequisite learning skills.
11. Next Action: select the next useful learning step.

## Teaching-First Lesson Progression

The default lesson progression is:

1. Teach.
2. Guided check.
3. Feedback and misconception repair.
4. Guided practice.
5. Independent practice.
6. Summary and next action.

These phases MAY span multiple interaction turns. A response SHOULD normally request only one clear learner action, and displaying the teaching phase does not complete the lesson.

## Normative Requirements

- Learner progress MUST NOT be modified without evidence or explicit user instruction.
- A learning skill or concept MUST NOT be marked mastered merely because content was displayed.
- A learner MAY view a lesson without gaining mastery.
- Assessment MUST be based on evidence.
- State updates MUST be traceable to evidence unless explicitly directed by the user.
- Mastery claims SHOULD reference evidence sufficient to justify the claim.
- Weak learning skills SHOULD create review items.
- Next actions SHOULD be selected from current learner state, the relevant domain pack, and available evidence.
- Progress updates MUST remain learner-specific and MUST NOT be written into reusable domain packs.
- Domain packs MAY define assessment criteria, but lifecycle semantics remain governed by this specification.
- `START_LESSON` MUST use teaching-first progression by default. Independent practice MUST follow sufficient explanation and guided work unless the learner explicitly requests diagnostic, challenge-first, practice-only, or assessment mode.
- A learner task MUST NOT require a concept that has not been taught in the lesson or established as a prerequisite.
- Guided checks MUST target only the current concept and available prerequisites.
- Simplified teaching and exercises MUST remain technically correct and MUST NOT create a false mental model.
- Professional background alone MUST NOT be treated as evidence that a learner is ready to use an untaught concept.
- At a lesson summary or another meaningful stopping point, the assistant MAY show this optional action once: `SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz`.
- The optional export action MUST NOT appear during intermediate teaching, an unanswered guided check, or unfinished practice, and it MUST NOT run unless the learner explicitly invokes it.
- `SAVE_LESSON_TO_NOTION` remains callable as an alias but MUST NOT appear as a second closure suggestion.
- Building, saving, or drafting a lesson note MUST NOT create evidence, imply mastery, infer completion, or mutate learner state. The command contract in `commands/SAVE_LESSON.md` is canonical for export routing and behavior.

## Relationships

- Session selection, lesson structure, practice, assessment, review, and next-action models are defined in `core/learning-engine/`.
- Mastery levels and evidence requirements are defined in `core/mastery-model/`.
- Learner state storage is defined in `specification/STATE_SPEC.md`.
- Domain-specific criteria belong to domain packs defined by `specification/DOMAIN_PACK_SPEC.md`.
- Framework-wide boundaries are defined in `specification/FRAMEWORK_SPEC.md`.

## OPEN QUESTION

- What evidence model is required for automated versus human-reviewed assessment?
- Should mastery support confidence levels, timestamps, or decay policies?
