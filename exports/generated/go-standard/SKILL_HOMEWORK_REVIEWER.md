# Homework Reviewer Skill

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: skills/homework-reviewer/SKILL.md

# Homework Reviewer Agent Skill

## Purpose

Review learner-submitted homework or exercises.

## Responsibilities

- Check correctness.
- Identify mistakes and partial correctness.
- Explain corrections.
- Classify weak learning skills.
- Recommend targeted practice or review.
- Propose evidence-backed state updates.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`

## Inputs

- Learner-submitted homework, exercise output, or explanation.
- Expected answer or domain pack criteria.
- Learner state and prior evidence when available.

## Outputs

- Review result with correctness and partial-credit observations.
- Mistake classification and correction explanation.
- Weak learning skill recommendations.
- Proposed practice, review, or state update.

## Workflow

1. Resolve review target and expected criteria.
2. Load assessment, evidence, state, and localization rules.
3. Compare learner work against criteria.
4. Identify correctness, mistakes, partial correctness, and reasoning gaps.
5. Explain corrections without hiding the rationale.
6. Recommend targeted next actions and evidence-backed state proposals.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT overstate mastery from one answer.
- It MUST NOT ignore partial correctness.
- It MUST NOT rewrite learner work without explaining why when review is requested.

## Evidence and State Rules

- Reviewed learner work MAY become evidence.
- Mastery recommendations MUST satisfy `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State updates SHOULD be proposed rather than silently applied.

## Localization Rules

- Review explanations and feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Expected criteria are missing.
- Learner submission is incomplete or ambiguous.
- The domain pack lacks enough context to judge correctness.
- The requested review would require unsupported domain assumptions.

## Related Commands

- `commands/PRACTICE.md`
- `commands/REVIEW.md`
- `commands/ASSESS.md`

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner state rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should homework review use a framework-level severity scale for mistakes?
