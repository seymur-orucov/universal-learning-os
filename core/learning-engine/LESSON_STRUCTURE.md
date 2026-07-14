# Lesson Structure Model

## Purpose

Define the standard anatomy of a lesson across domains.

## Scope

This model defines lesson sections. It does not define actual domain lessons, examples, exercises, or content.

## Deep Teaching Mode

`START_LESSON` uses Deep Teaching Mode by default. Deep means that the learner receives enough explanation, terminology, examples, and misconception coverage to reason about the requested action without guessing or relying on an untaught concept. It does not require unnecessary verbosity.

For a new concept, the first learner-facing response SHOULD normally contain:

1. Lesson title and objective.
2. A connection to prerequisites or previous knowledge.
3. A clear mental model.
4. A sufficiently deep concept explanation.
5. Essential terminology for the lesson.
6. At least one minimal example.
7. At least one realistic example when appropriate.
8. Relevant common mistakes or misconceptions.
9. One guided knowledge check or guided learner action.
10. A clear indication that the lesson will continue after the learner responds.

Internal phase names, learning skill ids, evidence records, state updates, and framework metadata MUST remain hidden from normal learner-facing output.

## Progressive Lesson Flow

The conceptual lesson flow is:

1. Teach.
2. Guided check.
3. Feedback and misconception repair.
4. Guided practice.
5. Independent practice.
6. Summary and next action.

The phases MAY span multiple chat turns. One response SHOULD normally request only one clear learner action. Guided practice, independent practice, assessment, and homework SHOULD NOT be assigned simultaneously.

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
- Optional lesson-note action: at meaningful closure only, show `SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz` once when the runtime supports or may support an export target.

Not every section is displayed in one response. The first response for a new concept emphasizes teaching and one guided check; later turns provide feedback, guided practice, independent practice, and closure at the appropriate time.

## Exercise Readiness

- A learner task MUST NOT require a concept that has not been taught or established as a prerequisite.
- Guided checks MUST target only the current concept and already available prerequisites.
- Independent practice MUST follow sufficient explanation and guided work unless the learner explicitly requests diagnostic, challenge-first, practice-only, or assessment mode.
- Schema, architecture, coding, language, and algorithm tasks MUST remain technically correct even when simplified.
- Simplification MUST NOT create a false mental model.
- If a realistic scenario requires an advanced concept, the instructor MUST choose a simpler scenario or explain the advanced concept before requiring its use.
- Readiness MUST NOT be inferred only from the learner's professional background.

## Explicit Teaching-First Exceptions

Diagnostic, challenge-first, practice-only, and assessment modes MAY place a task before teaching only when the learner explicitly requests that behavior. The instructor MUST recognize the selected mode as intentional and provide missing teaching or feedback after the learner acts. `START_LESSON` remains teaching-first when no exception is explicit.

## Normative Requirements

- Lessons MUST NOT imply mastery from exposure alone.
- Lessons SHOULD include at least one evidence-producing activity before recommending state updates.
- Lesson examples MUST be supplied by a domain pack or user context, not by this core model.
- Lesson explanations SHOULD follow the instruction language while preserving domain terminology according to `specification/LOCALIZATION_SPEC.md`.
- Session reports SHOULD distinguish displayed content from learner-demonstrated evidence.
- A lesson MUST NOT be treated as complete merely because its initial explanation was displayed.
- The optional lesson-note action MUST NOT appear during intermediate teaching or unfinished learner work, MUST NOT trigger automatically, and MUST NOT be treated as evidence, mastery, completion, or a learner-state update. The Notion compatibility alias MUST NOT be shown as another suggestion.

## Relationships

- Lesson output templates are provided in `templates/session/LESSON_OUTPUT_TEMPLATE.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.
- State update rules are defined in `specification/STATE_SPEC.md`.
- Localization behavior is defined in `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which lesson sections are mandatory for very short micro-lessons?
