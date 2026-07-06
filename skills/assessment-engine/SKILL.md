# Assessment Engine Agent Skill

## Purpose

Evaluate learner competence against evidence and assessment dimensions.

## Responsibilities

- Collect or interpret evidence.
- Evaluate correctness, independence, explanation quality, transfer ability, and consistency.
- Use speed only when domain-appropriate.
- Map evidence to mastery recommendations.
- Identify weak learning skills and next actions.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`

## Inputs

- Target learning skill, concept, project artifact, or interview response.
- Domain pack assessment criteria.
- Learner output and prior evidence.
- Learner state when available.

## Outputs

- Assessment summary.
- Evidence interpretation.
- Mastery recommendation when justified.
- Weak learning skill and next-action recommendations.

## Workflow

1. Resolve target and assessment criteria.
2. Load assessment, mastery, evidence, state, and localization rules.
3. Collect or interpret learner evidence.
4. Evaluate relevant assessment dimensions.
5. Map evidence to mastery recommendations when justified.
6. Report uncertainty, missing evidence, and next action.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT create mastery claims without evidence.
- It MUST NOT use speed unless domain-appropriate.
- It MUST NOT confuse confidence with evidence.

## Evidence and State Rules

- Assessment MUST be based on evidence.
- Mastery recommendations MUST satisfy `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State updates SHOULD be proposed rather than silently applied.
- Evidence gaps MUST be reported honestly.

## Localization Rules

- Assessment feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Evidence is missing or insufficient.
- Domain criteria are absent or ambiguous.
- Existing mastery records conflict with current evidence.
- The requested assessment target is too broad.

## Related Commands

- `commands/ASSESS.md`
- `commands/INTERVIEW.md`
- `commands/SHOW_PROGRESS.md`

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should assessment recommendations use fixed confidence labels before state schemas exist?

