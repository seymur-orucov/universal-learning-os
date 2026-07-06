# INTERVIEW Command

## Purpose

Run an interview-style session.

## When to Use

Use this command when the learner wants interactive questioning, explanation practice, readiness checks, or simulated interview pressure.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Target learning skill, concept, track segment, or role context.
- Relevant domain pack questions or criteria.
- Learner state and prior evidence, when available.
- User constraints such as difficulty, duration, or style.

## Workflow

1. Resolve context from requested interview target and constraints.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Ask interactive questions with follow-up questions based on learner responses.
6. Evaluate correctness, independence, explanation quality, and transfer ability.
7. Produce feedback and an optional session report.
8. Propose state updates only when responses satisfy evidence requirements.

## User-Facing Output

The output SHOULD include questions, follow-ups, response feedback, assessment summary, weak areas, and next action. Questions, feedback, and evaluation output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Interview responses MAY be evidence when captured or summarized.
- Follow-up performance SHOULD be considered when evaluating independence and transfer ability.
- The command MUST NOT mark mastery from participation alone.

## Failure Modes

- Domain pack lacks interview criteria or target context.
- Learner responses are too brief to evaluate.
- The session target is too broad for meaningful assessment.
- Existing evidence suggests prerequisite review is needed first.

## Relationships

- Interview-style practice is defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Interview responses are evidence under `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should interview sessions separate practice mode from formal assessment mode?
