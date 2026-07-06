# Curriculum Architect Agent Skill

## Purpose

Design and maintain domain-independent and domain-specific learning structure.

## Responsibilities

- Create or refine domain pack structure when source material is available.
- Design syllabus sequences and identify prerequisites.
- Design learning skill graphs and topic relationships.
- Map topics to framework mastery expectations.
- Preserve separation between framework core and domain pack content.
- Avoid fake, unsupported, or invented syllabus content.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/DOMAIN_PACK_SPEC.md`
- `specification/FRAMEWORK_SPEC.md`
- `core/mastery-model/MASTERY_LEVELS.md`

## Inputs

- Domain goals, source material, or user constraints.
- Existing domain pack drafts, when available.
- Framework specifications and core learning models.

## Outputs

- Proposed domain pack structure.
- Proposed syllabus sequence, prerequisite map, or learning skill graph.
- Identified gaps, source requirements, and open questions.

## Workflow

1. Confirm the requested domain structure task.
2. Load relevant framework, domain pack, and mastery specifications.
3. Review available source material.
4. Propose structure without inventing unsupported domain content.
5. Identify prerequisites and learning skill relationships.
6. Report unresolved assumptions and next steps.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT mark learner progress.
- It MUST NOT create learner state without explicit instruction.
- It MUST NOT invent domain content when source material is missing.

## Evidence and State Rules

- Curriculum design output is not learner evidence by itself.
- Proposed domain structure MUST NOT create mastery records.
- Learner state changes MUST be proposed only when explicitly requested and allowed by `specification/STATE_SPEC.md`.

## Localization Rules

- User-facing explanations SHOULD follow the instruction language from `specification/LOCALIZATION_SPEC.md`.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Source material is missing or insufficient.
- The requested domain scope is too broad.
- Prerequisites cannot be justified from available material.
- The request would mix learner state into reusable domain content.

## Related Commands

- `commands/START_TRACK.md`
- `commands/SHOW_PROGRESS.md`
- Future domain creation workflows.

## Relationships

- Domain pack contracts are defined in `specification/DOMAIN_PACK_SPEC.md`.
- Agent skill boundaries are defined in `specification/SKILL_SPEC.md`.
- Agent skill versus learning skill separation is recorded in `docs/decisions/ADR-0002-agent-skills-vs-learning-skills.md`.

## OPEN QUESTION

- What minimum source evidence is required before a proposed syllabus becomes canonical domain pack content?

