# START_PROJECT Command

## Purpose

Start or continue a realistic learning project.

## When to Use

Use this command when the learner wants project-based practice, real-world transfer, or artifact-producing work tied to a domain pack.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/DOMAIN_PACK_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Learner goal and requested project, when provided.
- Relevant domain pack project guidance.
- Current learner state and prerequisites.
- Existing project artifact, when continuing.

## Workflow

1. Resolve context from learner goal, project request, and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Select or continue a project and check prerequisites.
6. Guide artifact production or improvement.
7. Produce a user-facing project plan or continuation report.
8. Propose state updates only when reviewed project artifacts provide evidence.

## User-Facing Output

The output SHOULD include project objective, prerequisite status, artifact expectations, immediate task, review criteria, and next action. Output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Project artifacts MAY serve as evidence when reviewed.
- Starting a project MUST NOT imply mastery.
- Incomplete or unreviewed artifacts SHOULD be recorded as activity only if state updates are explicitly supported.

## Failure Modes

- No suitable project exists in the domain pack.
- Prerequisites are missing, weak, or unassessed.
- Project scope is too broad for the current session.
- Artifact review criteria are unavailable.

## Relationships

- Project-based practice is defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Evidence categories are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Domain project content belongs to domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Should projects have framework-level phases before domain packs define project structures?
