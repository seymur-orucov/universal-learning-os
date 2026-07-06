# ADR-0007: Learner State Model

## Status

Accepted for Stage 6.

## Context

The framework needs a documented learner state model before concrete YAML files, JSON schemas, or application tooling exist. Learner state is mutable learner-specific progress data and must remain separate from reusable domain pack content, commands, agent skills, and framework specifications.

## Decision

- Learner state is separated from domain packs because domain packs contain reusable subject-specific content, while learner state contains learner-specific progress, evidence, review items, session history, and next actions.
- Learner state is modeled in Markdown before JSON schemas so the contract can be reviewed and refined before machine validation exists.
- Evidence log, review queue, session history, and next actions are separated to keep evidence, review scheduling, historical activity, and recommendations distinct.
- State templates are created without real learner data to avoid inventing progress or exposing personal information.
- Commands and agent skills may read learner state and propose updates, but SHOULD NOT silently apply updates without evidence or explicit user instruction.

## Rationale

Separating learner state from domain packs prevents reusable curriculum from being polluted by individual progress. Modeling state before schemas preserves design flexibility while the framework is still evolving. Separating evidence, review items, sessions, and next actions creates clearer auditability for mastery claims and state changes.

## Consequences

- Future learner files can reference domain learning skills without redefining them.
- Missing evidence must be visible rather than hidden in progress summaries.
- Commands and agent skills need clear rules for proposing versus applying state updates.
- Future schemas can validate a model that has already been reviewed in Markdown.

## Provisional Decisions

- No concrete YAML learner state exists yet.
- No JSON Schema validation exists yet.
- The split-file learner state layout is provisional.
- Privacy handling for real learner profiles is not finalized.

## OPEN QUESTION

- Should learner profile data live separately from progress state by default?
- Should evidence records store full learner output or summaries with artifact references?
- Which state updates require explicit user confirmation?
