# Universal Learning OS

`universal-learning-os` is a domain-independent framework for structured learning workflows across subjects such as databases, programming, software architecture, communication, and other complex knowledge domains.

The repository currently implements:

- Stage 0-1: repository foundation and framework specification skeleton.
- Stage 2-4: core learning engine, command system, and reusable agent skill specifications.
- Stage 5-7: domain pack standard, learner state model, and session templates.
- Stage 8-9: quality-reviewed SQL/PostgreSQL and English pilot domain packs.
- Stage 10.0-10.1: Project Pack Export Model skeleton and first SQL/PostgreSQL generated Project Pack.

It does not yet include generated lessons, learner applications, executable export tooling, schemas, or validation tooling.

## Repository Map

- `docs/` contains vision, architecture, terminology, and architectural decision records.
- `specification/` contains canonical framework contracts.
- `schemas/` is reserved for future JSON Schema validation files.
- `commands/` contains user-invoked command definitions.
- `skills/` contains reusable agent skill definitions.
- `templates/` contains reusable authoring templates.
- `domains/` contains reusable domain packs and domain templates.
- `learners/` contains learner state templates and is reserved for learner-specific state files.
- `exports/` contains Project Pack export specifications for assembling project-ready bundles.
- `tests/` is reserved for validation tests and contract checks.

## Project Pack Exports

Project Pack exports are curated, ChatGPT Project-ready subsets of repository content. Exported packs are derived artifacts, not canonical framework sources or learner state.

The export model is defined in `exports/README.md` and assumes a practical 25-file source budget for generated Project Packs. Generated packs live under `exports/generated/`.

## Current Constraints

- Markdown is the current human-readable specification format.
- YAML is planned for mutable learner state.
- JSON Schema is planned for machine-readable validation.
- Domain-independent behavior and domain-specific content MUST remain separate.
- Unresolved design choices are marked as `OPEN QUESTION`.

## Start Here

Read `docs/VISION.md`, then `docs/ARCHITECTURE.md`, then the relevant file in `specification/` before making changes.
