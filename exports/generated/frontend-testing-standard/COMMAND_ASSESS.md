Canonical source: `commands/ASSESS.md`.

# ASSESS Command

## Purpose

Evaluate learner competence.

## When to Use

Use this command when the learner requests evaluation, a learning skill requires evidence, or the system needs to determine readiness to advance.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Target learning skill, concept, project artifact, or track segment.
- Relevant domain pack assessment criteria.
- Learner state and prior evidence, when available.
- Learner output collected during the assessment.

## Workflow

1. Resolve context from requested assessment target and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Collect evidence through tasks, questions, artifact review, or responses.
6. Evaluate using dimensions from `core/learning-engine/ASSESSMENT_MODEL.md`.
7. Produce an assessment result, feedback, and next action.
8. Recommend mastery or state changes only when evidence requirements are satisfied.

## User-Facing Output

The output SHOULD include assessment target, evidence collected, evaluation by relevant dimensions, result, weak areas, and next action. Feedback and evaluation output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Assessment MUST be based on evidence.
- Mastery changes MUST NOT be recommended unless `core/mastery-model/EVIDENCE_REQUIREMENTS.md` is satisfied.
- Assessment may identify review needs without changing mastery.

## Failure Modes

- Target learning skill or criteria are missing from the domain pack.
- Learner output is absent or insufficient.
- Assessment criteria are ambiguous.
- Evidence conflicts with existing mastery records.

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should assessment results use fixed labels before machine-readable schemas exist?
