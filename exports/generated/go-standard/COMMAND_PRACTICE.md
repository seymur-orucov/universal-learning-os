# Practice Command

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: commands/PRACTICE.md

# PRACTICE Command

## Purpose

Run practice without necessarily teaching a full lesson.

## When to Use

Use this command when the learner wants exercises, drilling, application, error repair, project work, or interview-style practice without a complete lesson flow.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Requested concept, learning skill, practice type, or goal.
- Current learner state, when available.
- Relevant domain pack practice rules.
- Review queue, prerequisites, and available evidence.

## Workflow

1. Resolve context from requested practice target, learner state, and user constraints.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Select a practice type from `core/learning-engine/PRACTICE_MODEL.md`.
6. Run practice targeting weak learning skills, user-selected concepts, or upcoming prerequisites.
7. Produce feedback and an optional session report.
8. Propose state updates only when learner output creates evidence.

## User-Facing Output

The output SHOULD include the practice target, practice type, task prompt, feedback, and next action. Task prompts and feedback SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Practice SHOULD produce evidence whenever progress or mastery may be updated.
- Learner output MUST be preserved or summarized before it supports a state update.
- Practice completion alone MUST NOT imply mastery.

## Failure Modes

- Requested practice target is not found in the domain pack.
- Practice type is inappropriate for the learner state or prerequisite status.
- Learner output is insufficient to assess progress.
- Domain-specific practice rules are missing.

## Relationships

- Practice types are defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should practice commands allow difficulty labels before domain packs define difficulty models?
