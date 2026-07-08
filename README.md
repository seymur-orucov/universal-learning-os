# Universal Learning OS

`universal-learning-os` is a domain-independent framework for structured learning workflows across subjects such as databases, programming, software architecture, communication, and other complex knowledge domains.

The repository currently implements:

- Stage 0-1: repository foundation and framework specification skeleton.
- Stage 2-4: core learning engine, command system, and reusable agent skill specifications.
- Stage 5-7: domain pack standard, learner state model, and session templates.
- Stage 8-9: quality-reviewed SQL/PostgreSQL and English pilot domain packs.
- Stage 10: Project Pack export model, generated SQL/PostgreSQL and English packs, launch kits, active learner starter state, manual acceptance tests, and v0.1.0-rc1 release readiness docs.
- Stage 11: repeatable domain pack factory model and JavaScript pilot domain with generated Project Pack, launch kit, and manual acceptance tests.

It does not yet include generated lessons, learner applications, executable export tooling, schemas, or validation tooling.

## Current Status

v0.1.0-rc1 release readiness documentation is available in `docs/releases/`.

The repository is ready for manual review and practical ChatGPT Project setup using generated Project Packs, but it is not a stable release and does not include executable automation.

## Repository Map

- `docs/` contains vision, architecture, terminology, domain pack factory guidance, and architectural decision records.
- `specification/` contains canonical framework contracts.
- `schemas/` is reserved for future JSON Schema validation files.
- `commands/` contains user-invoked command definitions.
- `skills/` contains reusable agent skill definitions.
- `templates/` contains reusable authoring templates.
- `domains/` contains reusable domain packs and domain templates.
- `learners/` contains learner state templates and is reserved for learner-specific state files.
- `exports/` contains Project Pack export specifications for assembling project-ready bundles.
- `tests/` is reserved for validation tests and contract checks.
- `docs/releases/` contains release readiness documentation.

## Project Pack Exports

Project Pack exports are curated, ChatGPT Project-ready subsets of repository content. Exported packs are derived artifacts, not canonical framework sources or learner state.

The export model is defined in `exports/README.md` and assumes a practical 25-file source budget for generated Project Packs. Generated packs live under `exports/generated/`.

Supported generated Project Packs:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`

## Current Constraints

- Markdown is the current human-readable specification format.
- YAML is planned for mutable learner state.
- JSON Schema is planned for machine-readable validation.
- Domain-independent behavior and domain-specific content MUST remain separate.
- Unresolved design choices are marked as `OPEN QUESTION`.

## Start Here

Read `docs/VISION.md`, then `docs/ARCHITECTURE.md`, then the relevant file in `specification/` before making changes.
