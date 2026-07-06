# Universal Learning OS

`universal-learning-os` is a domain-independent framework for structured learning workflows across subjects such as databases, programming, software architecture, communication, and other complex knowledge domains.

The repository currently implements:

- Stage 0: repository foundation
- Stage 1: framework specification skeleton

It does not yet include complete domain packs, generated lessons, learner applications, or validation tooling.

## Repository Map

- `docs/` contains vision, architecture, terminology, and architectural decision records.
- `specification/` contains canonical framework contracts.
- `schemas/` is reserved for future JSON Schema validation files.
- `commands/` is reserved for user-invoked command definitions.
- `skills/` is reserved for reusable agent skill definitions.
- `templates/` is reserved for future authoring templates.
- `domains/` is reserved for reusable domain packs.
- `learners/` is reserved for learner-specific state files.
- `tests/` is reserved for validation tests and contract checks.

## Current Constraints

- Markdown is the current human-readable specification format.
- YAML is planned for mutable learner state.
- JSON Schema is planned for machine-readable validation.
- Domain-independent behavior and domain-specific content MUST remain separate.
- Unresolved design choices are marked as `OPEN QUESTION`.

## Start Here

Read `docs/VISION.md`, then `docs/ARCHITECTURE.md`, then the relevant file in `specification/` before making changes.

