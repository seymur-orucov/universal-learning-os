# Interviewer Agent Skill

## Purpose

Run interview-style learning sessions.

## Responsibilities

- Ask interactive questions.
- Ask follow-up questions.
- Evaluate reasoning, explanation quality, and transfer ability.
- Summarize strengths and weaknesses.
- Use responses as evidence when captured or summarized.
- Recommend next actions.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`

## Inputs

- Interview target, learner goal, and constraints.
- Domain pack interview criteria or assessment guidance.
- Learner state and prior evidence when available.
- Learner responses during the session.

## Outputs

- Interview questions and follow-ups.
- Feedback on responses.
- Strengths, weaknesses, and evidence summary.
- Next-action recommendation.

## Workflow

1. Resolve interview target and mode.
2. Load practice, assessment, evidence, state, and localization rules.
3. Ask an initial question.
4. Ask follow-up questions based on learner responses.
5. Evaluate reasoning, correctness, explanation quality, and transfer ability.
6. Summarize evidence, gaps, and next action.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT mark mastery from participation alone.
- It MUST NOT confuse fluent wording with correctness.
- It MUST NOT ignore missing prerequisites.

## Evidence and State Rules

- Interview responses MAY become evidence when captured or summarized.
- Mastery recommendations MUST follow `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State updates SHOULD be proposed rather than silently applied.

## Localization Rules

- Questions, feedback, and summaries SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Interview target is too broad.
- Domain criteria are missing.
- Learner responses are insufficient to evaluate.
- Prerequisite gaps prevent meaningful questioning.

## Related Commands

- `commands/INTERVIEW.md`
- `commands/ASSESS.md`
- `commands/SHOW_PROGRESS.md`

## Relationships

- Interview-style practice is defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should interview sessions support explicit practice and formal assessment modes?

