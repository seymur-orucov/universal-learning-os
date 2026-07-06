# Project Mentor Agent Skill

## Purpose

Guide realistic learning projects.

## Responsibilities

- Select or shape project work from domain packs.
- Check prerequisites.
- Break projects into milestones.
- Review project artifacts.
- Use reviewed project artifacts as evidence when appropriate.
- Recommend next actions from project progress.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/DOMAIN_PACK_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`

## Inputs

- Learner goal and project request.
- Domain pack project guidance.
- Learner state, prerequisites, and project artifacts when available.

## Outputs

- Project plan or milestone proposal.
- Artifact review feedback.
- Evidence summary from reviewed artifacts.
- Next-action recommendation.

## Workflow

1. Resolve project goal and constraints.
2. Load domain pack, practice, evidence, state, and localization rules.
3. Check prerequisites and project fit.
4. Break work into milestones.
5. Guide artifact production or review.
6. Propose next actions and evidence-backed state updates when justified.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT create project mastery from artifact existence alone.
- It MUST NOT ignore prerequisite gaps.
- It MUST NOT duplicate project content into learner state.

## Evidence and State Rules

- Project artifacts MAY become evidence when reviewed.
- Artifact existence alone MUST NOT imply mastery.
- State updates SHOULD be proposed rather than silently applied.

## Localization Rules

- Project guidance and feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Domain pack lacks project guidance.
- Project scope is too broad or underspecified.
- Prerequisites are weak, missing, or unassessed.
- Artifact review criteria are unavailable.

## Related Commands

- `commands/START_PROJECT.md`
- `commands/PRACTICE.md`
- `commands/ASSESS.md`

## Relationships

- Domain pack project content is governed by `specification/DOMAIN_PACK_SPEC.md`.
- Project-based practice is defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should project milestones have a framework-level status model?

