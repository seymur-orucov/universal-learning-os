# ADR-0002: Agent Skills vs Learning Skills

## Status

Accepted for Stage 1.1.

## Context

The word "skill" can refer to either an agent capability or a learner competency. Conflating these meanings would make repository structure, learner state, assessment, and agent behavior ambiguous.

## Decision

- Agent skills are reusable agent capabilities that live under `skills/`.
- Learning skills are domain-specific learner competencies that belong in future domain skill graphs.
- Commands are user-invoked workflows and remain separate from both agent skills and learning skills.
- Learner state may track progress against learning skills but MUST NOT redefine reusable agent skills or duplicate domain skill graphs.

## Rationale

Agent skills describe what an AI agent can do, such as assess evidence, plan a session, or summarize progress. Learning skills describe what a learner can demonstrate, such as applying a concept, solving a problem, or communicating effectively within a domain.

Keeping agent skills under `skills/` makes reusable agent capabilities discoverable and independent from any single domain. Keeping learning skills in domain skill graphs keeps competencies tied to their subject context, prerequisites, and assessment criteria.

## Consequences

- Specifications can discuss agent behavior without implying learner mastery.
- Domain packs can define competencies without creating executable agent capabilities.
- Learner state can reference learning skills without copying agent skill definitions.
- Commands can orchestrate workflows by using agent skills and domain packs without becoming either one.
- Documentation MUST use "agent skill" and "learning skill" when ambiguity is possible.

## Provisional Decisions

- The exact file format for agent skills is not defined.
- The exact file format for domain skill graphs is not defined.
- The relationship between agent skills and execution-surface permissions is not defined.

## OPEN QUESTION

- Should future schemas enforce separate identifiers for agent skills and learning skills?
- Should learning skill identifiers be globally unique or scoped to a domain pack?
