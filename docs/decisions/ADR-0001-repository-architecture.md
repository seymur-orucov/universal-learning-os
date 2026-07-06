# ADR-0001: Repository Architecture

## Status

Accepted for Stage 0 and Stage 1.

## Context

The repository must support humans and agents collaborating on a domain-independent learning framework before executable tooling exists. It must also leave room for machine-readable learner state, validation, reusable domain packs, and future applications.

## Decision

- Markdown will be used for human-readable specifications because it is easy to review, diff, edit, and use in ChatGPT Projects, Codex, IDE agents, and documentation workflows.
- YAML is planned for mutable learner state because it is readable by humans while still structured enough for agents and future applications.
- JSON Schema is planned for validation because it can define machine-checkable contracts for YAML or JSON representations.
- Domain packs will be separated from the core framework so domain-independent behavior can evolve without embedding SQL, English, architecture, or other subject-specific content.
- Commands and skills will remain separate because user-invoked workflows and reusable agent capabilities have different lifecycle and composition needs.

## Consequences

- Specifications can be created before validators or applications.
- Future machine-readable files MUST trace back to canonical Markdown specifications.
- Domain packs can be versioned and migrated independently from learner state.
- Documentation discipline is required to avoid duplicating normative rules.

## Provisional Decisions

- YAML is planned but no concrete learner state schema exists yet.
- JSON Schema is planned but no schema files exist yet.
- Domain pack packaging and distribution are not yet defined.
- Migration mechanics are not yet defined.

## OPEN QUESTION

- Should schema files validate YAML directly through tooling conventions, or should YAML be transformed to JSON before validation?
- Should domain packs have independent semantic versions or follow framework compatibility ranges?

