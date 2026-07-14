# Universal Learning OS

`universal-learning-os` is a domain-independent framework for structured learning workflows. It packages reusable learning content, commands, mentor skills, and framework guardrails into ChatGPT Project-ready packs.

The repository currently implements:

- Stage 0-1: repository foundation and framework specification skeleton.
- Stage 2-4: core learning engine, command system, and reusable agent skill specifications.
- Stage 5-7: domain pack standard, learner state model, and session templates.
- Stage 8-9: quality-reviewed SQL/PostgreSQL and English pilot domain packs.
- Stage 10: Project Pack export model, generated SQL/PostgreSQL and English packs, launch kits, active learner starter state, manual acceptance tests, and v0.1.0-rc1 release readiness docs.
- Stage 11: repeatable domain pack factory model and JavaScript pilot domain with generated Project Pack, launch kit, and manual acceptance tests.
- Stage 12: TypeScript domain pack with standard and compact generated Project Packs.
- Stage 13: minimal CLI/generator prototype for listing domains, validating generated pack file counts, and inspecting generated packs.
- Stage 14: generated pack validation automation for required files, metadata guardrails, manifests, compact structure, and launch kits.
- Stage 15: compact Project Pack generation for all supported domains.
- Stage 16.0: standard Project Pack generation plan, 25-file contract, templates, and source mapping.
- Stage 16.1: standard Project Pack generation for all supported domains.
- Stage 17.0: v0.2.0 release hardening and readiness documentation.
- Stage 30.0: production Git domain with mental-model-first learning, recovery and safety, provider-neutral collaboration, leadership workflow design, generated standard/compact packs, and full CLI/Studio validation coverage.

It does not yet include generated lessons, learner applications, machine-readable schemas, or an app/dashboard runtime. CLI validation and pack generation live under `tools/ulos-cli/`.

## Current Status

`v0.2.0` is the next release target. Release notes and checklists are available in `docs/releases/`.

The repository is ready for manual review and practical ChatGPT Project setup using generated Project Packs. `node tools/ulos-cli/src/index.js validate` is the official generated-pack quality gate.

## Supported Domains

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
- `dsa`
- `frontend-system-design`
- `nodejs`
- `git`

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
- `tools/ulos-cli/` contains the early CLI prototype for generated pack inspection and validation.
- `tests/` is reserved for validation tests and contract checks.
- `docs/releases/` contains release readiness documentation.

## Project Pack Exports

Project Pack exports are curated, ChatGPT Project-ready subsets of repository content. Exported packs are derived artifacts, not canonical framework sources or learner state.

The export model is defined in `exports/README.md` and assumes a practical 25-file source budget for standard generated Project Packs. Generated packs live under `exports/generated/`.

Compact and standard generation are implemented. The standard 25-file output contract is documented in `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`, with templates and source mapping in `tools/ulos-cli/templates/standard-pack/`.

Pack profiles:

- `standard`: exactly 25 files per domain for normal ChatGPT Project usage.
- `compact`: exactly 5 files per domain for Free Project or low-file-budget usage.

Supported generated Project Packs:

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/typescript-standard/`
- `exports/generated/dsa-standard/`
- `exports/generated/frontend-system-design-standard/`
- `exports/generated/nodejs-standard/`
- `exports/generated/git-standard/`
- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`
- `exports/generated/dsa-compact/`
- `exports/generated/frontend-system-design-compact/`
- `exports/generated/nodejs-compact/`
- `exports/generated/git-compact/`

## CLI Prototype

The CLI lives in `tools/ulos-cli/`. It is a small Node.js tool with no external dependencies.

`validate` is the preferred quick quality gate for generated pack checks.

Run from the repository root:

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --out-dir tmp/typescript-standard-test
```

The `generate` command supports `compact` and `standard` profiles. Use `--dry-run` and repository-local `--out-dir` for safer standard generation testing. Run `node tools/ulos-cli/src/index.js validate` after generation.

## ChatGPT Project Usage

1. Choose a domain and profile.
2. Open the matching launch kit under `exports/generated/project-launch-kits/`.
3. Upload the files listed in the launch kit upload list.
4. Paste the ready startup prompt.
5. Use commands such as `START_LESSON`, `PRACTICE`, `REVIEW`, `ASSESS`, `SHOW_PROGRESS`, and explicit `SAVE_LESSON` note export.

Generated packs are reusable and learner-neutral. Runtime learner state lives separately under `learners/active-learner/` when used, and ChatGPT Project learning can happen without updating repository state after every lesson. Do not store sensitive personal data in generated packs or learner state.

## Release Notes

- Current target: `docs/releases/v0.2.0.md`
- Release checklist: `docs/releases/V0_2_0_RELEASE_CHECKLIST.md`
- Changelog: `CHANGELOG.md`

## Current Constraints

- Markdown is the current human-readable specification format.
- YAML is planned for mutable learner state.
- JSON Schema is planned for machine-readable validation.
- Domain-independent behavior and domain-specific content MUST remain separate.
- Unresolved design choices are marked as `OPEN QUESTION`.

## Start Here

Read `docs/VISION.md`, then `docs/ARCHITECTURE.md`, then the relevant file in `specification/` before making changes.
