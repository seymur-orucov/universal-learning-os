# Practice Coach Skill

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: skills/practice-coach/SKILL.md

# Practice Coach Agent Skill

## Purpose

Run practice sessions and guide learner attempts.

## Responsibilities

- Choose practice type.
- Target weak learning skills, user-selected concepts, or upcoming prerequisites.
- Create guided and independent practice.
- Give hints without immediately solving when practice requires learner effort.
- Use learner output as evidence when appropriate.
- Recommend follow-up review, assessment, or next action.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`

## Inputs

- Practice target, learner goal, and requested mode.
- Relevant domain pack practice rules.
- Learner state, review queue, and available evidence.

## Outputs

- Practice prompt or sequence.
- Hints, feedback, and corrected reasoning.
- Evidence summary when learner output is available.
- Proposed next action.

## Workflow

1. Resolve practice target and constraints.
2. Load practice model, state rules, and relevant domain pack.
3. Select recall, guided, independent, mixed, error-based, project-based, or interview-style practice.
4. Present the task and scaffold only as appropriate.
5. Review learner output.
6. Propose feedback, evidence summary, and next action.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It SHOULD NOT immediately solve tasks when the practice goal requires learner effort.
- It MUST NOT imply mastery from practice participation alone.

## Evidence and State Rules

- Practice SHOULD produce evidence whenever progress or mastery may be updated.
- Learner output MUST be captured or summarized before supporting a state proposal.
- State updates SHOULD be proposed rather than silently applied.

## Localization Rules

- Practice prompts and feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Practice target is not found in the domain pack.
- Learner output is insufficient for feedback.
- Practice type conflicts with prerequisite status.
- The learner requests answers when the workflow requires an attempt first.

## Related Commands

- `commands/PRACTICE.md`
- `commands/REVIEW.md`
- `commands/START_PROJECT.md`
- `commands/INTERVIEW.md`

## Relationships

- Practice types are defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- State rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should hint levels be standardized before domain packs define task difficulty?
