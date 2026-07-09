# Learning Engine Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

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

## Relationships

- Session selection, lesson structure, practice, assessment, review, and next-action models are defined in `core/learning-engine/`.
- Mastery levels and evidence requirements are defined in `core/mastery-model/`.
- Learner state storage is defined in `specification/STATE_SPEC.md`.
- Domain-specific criteria belong to domain packs defined by `specification/DOMAIN_PACK_SPEC.md`.
- Framework-wide boundaries are defined in `specification/FRAMEWORK_SPEC.md`.

## OPEN QUESTION

- What evidence model is required for automated versus human-reviewed assessment?
- Should mastery support confidence levels, timestamps, or decay policies?

## Source: core/learning-engine/README.md

# Learning Engine Specifications

The learning engine defines domain-independent behavior for selecting, running, reviewing, and concluding learning sessions.

## Scope

These specifications describe human-readable contracts only. They do not implement commands, agent skills, schemas, or runtime services.

## Documents

- `core/learning-engine/SESSION_SELECTION.md`: how a session type is selected.
- `core/learning-engine/LESSON_STRUCTURE.md`: standard lesson anatomy.
- `core/learning-engine/PRACTICE_MODEL.md`: domain-independent practice types.
- `core/learning-engine/ASSESSMENT_MODEL.md`: assessment dimensions.
- `core/learning-engine/REVIEW_MODEL.md`: review triggers.
- `core/learning-engine/NEXT_ACTION_MODEL.md`: valid next action categories.

## Relationships

- The lifecycle is governed by `specification/LEARNING_LIFECYCLE.md`.
- Learner state is governed by `specification/STATE_SPEC.md`.
- Domain-specific content is governed by `specification/DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Should the learning engine eventually define a machine-readable session report format?

## Source: core/learning-engine/LESSON_STRUCTURE.md

# Lesson Structure Model

## Purpose

Define the standard anatomy of a lesson across domains.

## Scope

This model defines lesson sections. It does not define actual domain lessons, examples, exercises, or content.

## Standard Lesson Anatomy

A lesson SHOULD include:

- Objective: the learning skill or concept the session targets.
- Prerequisite check: the minimum prior knowledge or learning skill needed.
- Mental model: the compact conceptual frame for understanding the topic.
- Concept explanation: the main explanation of the target concept.
- Minimal example: the smallest useful example that isolates the concept.
- Realistic example: a more practical example closer to real use.
- Guided practice: supported learner work with feedback.
- Independent practice: learner work with reduced support.
- Common mistakes: likely misconceptions or errors.
- Quick check: short evidence-producing verification.
- Homework: optional follow-up practice outside the session.
- Session report: summary of activity, evidence, risks, and proposed updates.
- Next action: recommended continuation, review, assessment, or pause.

## Normative Requirements

- Lessons MUST NOT imply mastery from exposure alone.
- Lessons SHOULD include at least one evidence-producing activity before recommending state updates.
- Lesson examples MUST be supplied by a domain pack or user context, not by this core model.
- Lesson explanations SHOULD follow the instruction language while preserving domain terminology according to `specification/LOCALIZATION_SPEC.md`.
- Session reports SHOULD distinguish displayed content from learner-demonstrated evidence.

## Relationships

- Lesson output templates are provided in `templates/session/LESSON_OUTPUT_TEMPLATE.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.
- State update rules are defined in `specification/STATE_SPEC.md`.
- Localization behavior is defined in `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which lesson sections are mandatory for very short micro-lessons?

## Source: core/learning-engine/PRACTICE_MODEL.md

# Practice Model

## Purpose

Define domain-independent practice types.

## Scope

This model defines practice categories. Domain packs define concrete prompts, tasks, constraints, and expected answers.

## Practice Types

- Recall practice: strengthens retrieval by asking the learner to produce facts, definitions, steps, distinctions, or short explanations without immediately seeing the answer.
- Guided practice: builds procedural confidence by supporting the learner through a task with hints, scaffolding, checkpoints, or partial structure.
- Independent practice: tests application by asking the learner to complete a task with minimal support.
- Mixed practice: improves discrimination and transfer by combining multiple learning skills or concepts.
- Error-based practice: repairs specific gaps by targeting observed mistakes, misconceptions, or failed assessment evidence.
- Project-based practice: develops realistic application by asking the learner to produce or improve a practical artifact.
- Interview-style practice: develops explanation, reasoning, and defense by simulating verbal, written, or interactive questioning.

## Normative Requirements

- Practice SHOULD produce evidence whenever progress or mastery may be updated.
- Practice difficulty SHOULD be selected from learner state, domain pack prerequisites, and recent evidence.
- Error-based practice SHOULD reference the mistake or evidence that triggered it.
- Project-based practice MAY span multiple sessions.
- Practice tasks MUST NOT duplicate learner state into reusable domain content.

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- Domain-specific practice rules belong in domain packs.

## OPEN QUESTION

- Should practice difficulty use a framework-level scale or domain-specific labels?

## Source: core/learning-engine/REVIEW_MODEL.md

# Review Model

## Purpose

Define domain-independent triggers for review.

## Scope

This model defines why review should be scheduled. It does not define spaced-repetition algorithms or concrete review intervals.

## Review Triggers

- Weak learning skill: state or evidence shows low confidence, partial performance, or dependency risk.
- Failed assessment: the learner did not meet assessment criteria.
- Stale learning skill: a previously demonstrated learning skill has not been used or reviewed recently.
- Upcoming prerequisite: a learning skill is needed before planned progression.
- Repeated mistake: the same error pattern appears across attempts.
- User-requested review: the learner explicitly asks to revisit material.

## Review Item Fields

Review items SHOULD include:

- Target learning skill: the competency or concept requiring review.
- Reason: the trigger or rationale for review.
- Priority: relative urgency or ordering guidance.
- Suggested review type: the recommended practice or review approach.
- Evidence reference: the supporting evidence, when available.

## Normative Requirements

- Review items SHOULD reference the trigger that created them.
- Review items SHOULD reference relevant learning skills, evidence, or assessment results when available.
- Failed assessments and repeated mistakes SHOULD create targeted review rather than generic repetition.
- User-requested review MAY be scheduled even without failure evidence.
- Review scheduling MUST NOT imply mastery loss without evidence or an explicit stale-learning-skill policy.

## Relationships

- Learner state review storage is described by `specification/STATE_SPEC.md`.
- Practice types are described by `core/learning-engine/PRACTICE_MODEL.md`.
- Next action categories are described by `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- What stale-learning-skill policy should be used before domain-specific decay rules exist?

## Source: core/learning-engine/ASSESSMENT_MODEL.md

# Assessment Model

## Purpose

Define domain-independent assessment dimensions.

## Scope

This model defines assessment dimensions only. Domain packs define domain-specific rubrics, thresholds, and acceptable answers.

## Assessment Dimensions

- Correctness: whether the learner output satisfies the expected result or reasoning.
- Independence: how much support, hinting, or correction was needed.
- Explanation quality: how clearly the learner explains reasoning, tradeoffs, or steps.
- Transfer ability: whether the learner can apply the learning skill in a new or realistic context.
- Consistency: whether performance is stable across attempts or related tasks.
- Speed: timing or fluency, only when domain-appropriate.

## Normative Requirements

- Assessment MUST be based on evidence.
- Assessment SHOULD evaluate independence separately from correctness.
- Speed MUST NOT be used as an assessment dimension unless the domain pack or user goal makes speed relevant.
- Assessment results SHOULD identify weak learning skills, missing prerequisites, or review needs.
- Assessment MUST NOT create mastery claims unless evidence requirements are satisfied.

## Relationships

- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- State update rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should assessment output use fixed framework labels before schemas exist?

## Source: core/learning-engine/NEXT_ACTION_MODEL.md

# Next Action Model

## Purpose

Define valid categories for the next recommended learning action.

## Scope

This model defines action categories. It does not implement command routing, scheduling, or UI.

## Valid Next Action Categories

- Continue lesson: proceed within the current lesson or sequence.
- Repeat concept: revisit the same concept with a different explanation or example.
- Targeted practice: practice a specific weak learning skill or mistake.
- Mixed review: review multiple related concepts or learning skills.
- Assessment: collect evidence against criteria.
- Project work: continue or start a realistic artifact.
- Interview simulation: practice interactive explanation or problem solving.
- Advance to next learning skill: move forward when prerequisites and evidence support it.
- Pause with session report: stop and summarize progress, evidence, risks, and suggested follow-up.

## Normative Requirements

- Next actions SHOULD be selected from learner state, the relevant domain pack, available evidence, and user intent.
- Next actions MUST NOT assume mastery without evidence.
- Advancement SHOULD require sufficient prerequisite confidence or explicit user override.
- Pause actions SHOULD produce a session report when meaningful learner activity occurred.
- Next actions MAY include alternatives when evidence is insufficient or goals conflict.

## Relationships

- Session selection is defined in `core/learning-engine/SESSION_SELECTION.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- Learning lifecycle next-action behavior is defined in `specification/LEARNING_LIFECYCLE.md`.

## OPEN QUESTION

- Should next actions support priority values before a concrete state schema exists?

## Source: core/learning-engine/SESSION_SELECTION.md

# Session Selection Model

## Purpose

Define how a domain-independent learning session is selected.

## Scope

This model selects a session direction. It does not implement scheduling, commands, UI, learner state mutation, or domain-specific content.

## Selection Inputs

A session SHOULD be selected from:

- User command: explicit user intent that may override default selection.
- Learner goal: the learner's stated objective or target outcome.
- Active track: the current learning path or domain track from learner state.
- Current learner state: known progress, weak learning skills, mastery records, and session history.
- Relevant domain pack: available concepts, learning skills, prerequisites, lessons, practice, and assessment criteria.
- Review queue: pending review items and their urgency.
- Available evidence: recent learner output, assessment results, mistakes, and artifacts.
- User constraints: time limits, preferred mode, target outcome, allowed depth, or explicit boundaries.

## Priority Rules

- Explicit user instruction SHOULD be respected unless it conflicts with safety, framework integrity, or missing prerequisites.
- Overdue review or failed prerequisites SHOULD influence the session plan.
- Advancement SHOULD require sufficient evidence or explicit user override.
- When user intent conflicts with learner state or evidence, the session plan SHOULD surface the conflict instead of silently ignoring either input.

## Normative Requirements

- Session selection MUST remain domain-independent.
- Session selection MUST consider explicit user commands when provided.
- Session selection SHOULD prioritize required review when the review queue contains urgent weak, stale, or failed learning skill items.
- Session selection SHOULD avoid advancing to a dependent learning skill when prerequisites are weak or unassessed.
- Session selection MUST NOT update learner state by itself.
- Session selection MAY propose a next action when evidence or state is insufficient.

## Relationships

- Review urgency is described by `core/learning-engine/REVIEW_MODEL.md`.
- Next action categories are described by `core/learning-engine/NEXT_ACTION_MODEL.md`.
- Learner state inputs are described by `specification/STATE_SPEC.md`.

## OPEN QUESTION

- How should conflicts be resolved when a user command asks to advance but evidence indicates review is needed?
