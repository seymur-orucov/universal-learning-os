# Core Specifications

`core/` contains domain-independent learning engine specifications.

These documents define reusable learning behavior that can be applied across domain packs without embedding subject-specific lessons, rubrics, learner state, schemas, or executable tooling.

## Contents

- `learning-engine/`: session selection, lesson structure, practice, assessment, review, and next-action models.
- `mastery-model/`: framework-level mastery scale and evidence requirements.

## Normative Boundaries

- Core specifications MUST remain domain-independent.
- Core specifications MUST NOT contain SQL, English, or other subject-specific lesson content.
- Domain packs MAY map core models to domain-specific content, but MUST preserve evidence and learner-state rules from `specification/LEARNING_LIFECYCLE.md` and `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should core specifications later declare independent version numbers or inherit the framework version?

