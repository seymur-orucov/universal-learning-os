# Lesson Output Template

This template defines reusable output shape for lesson sessions. It is not a real lesson.

## Lesson Title

`<lesson-title>`

## Learning Objective

`<learning-objective>`

## Connection to Previous Knowledge

`<prerequisite-connection>`

## Mental Model

`<mental-model>`

## Concept Explanation

`<concept-explanation>`

## Essential Terminology

- `<term>: <learner-ready meaning>`

## Minimal Example

`<minimal-example>`

## Realistic Example

`<realistic-example>`

## Common Mistakes

- `<common-mistake-or-misconception>`

## Guided Knowledge Check

`<one-guided-check-or-action-for-this-turn>`

## Continuation Cue

`<clear-note-that-the-lesson-continues-after-the-response>`

## Later-Turn Sections

- Feedback and misconception repair: `<feedback-after-learner-response>`
- Guided practice: `<one-guided-practice-prompt>`
- Independent practice: `<one-independent-practice-prompt-after-readiness>`
- Summary and next action: `<summary-and-one-next-action>`
- Homework: `<optional-follow-up-after-the-active-lesson-work>`
- Optional journal action at meaningful closure only: `SAVE_LESSON_TO_NOTION — Bu dərsin əsas məqamlarını Notion-a yadda saxla`

## Optional Internal Session Report

Use `templates/session/SESSION_REPORT_TEMPLATE.md` only when meaningful activity warrants a report. Do not expose it in normal learner-facing output.

## Normative Notes

- Lesson exposure MUST NOT imply mastery.
- Evidence requires learner activity.
- Output SHOULD follow localization preferences from `specification/LOCALIZATION_SPEC.md`.
- The initial response for a new concept MUST teach sufficiently before independent practice and SHOULD request one guided learner action.
- Later-turn sections MUST NOT all be assigned in the initial response.
- Tasks MUST use only the current concept and established prerequisites unless the learner explicitly requests an exception mode.
- Internal phase names, learning skill ids, evidence records, state updates, and framework metadata MUST remain hidden from normal learner-facing output.
- The journal action MAY appear once only with a summary or meaningful stopping point. It MUST NOT appear during intermediate teaching or unfinished practice and MUST NOT execute without explicit learner invocation.
- Saving or drafting a journal entry MUST NOT imply evidence, mastery, or a learner-state change.

## Relationships

- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Which sections should be optional for short lessons?
