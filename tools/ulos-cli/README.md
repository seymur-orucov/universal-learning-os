# ULOS CLI Prototype

`tools/ulos-cli` is a minimal Node.js CLI prototype for Universal Learning OS generated Project Packs.

It validates and inspects existing repository files and can regenerate compact packs. It does not generate standard 25-file packs yet; Stage 16.0 adds the standard generation plan, templates, and source mapping only.

`validate` is the preferred quick quality gate for generated pack checks.

## Run From Repository Root

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

## Optional Local Bin Usage

From `tools/ulos-cli/`, npm can expose the `ulos` bin in environments that support package bins:

```sh
npm install
npx ulos list-domains
```

## Commands

- `list-domains`: prints supported domains and profiles.
- `validate`: checks all generated packs for directory presence, file counts, required files, Learner-Facing Mentor Mode, metadata guardrails, manifest basics, compact structure, and launch kit presence.
- `inspect-pack`: prints path, profile, count rule, validation checks, and file list for one pack.
- `generate`: regenerates compact packs from canonical domain files, selected command files, and selected skill files. Standard pack generation is planned for Stage 16.1; the standard profile prints planning guidance in Stage 16.0.

## Compact Generation

Generate a compact pack:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

Supported domains: `sql-postgresql`, `english`, `javascript`, `typescript`.

Generated compact packs contain exactly:

- `PROJECT_INSTRUCTIONS.md`
- `STARTUP_PROMPT.md`
- `DOMAIN_CORE.md`
- `COMMANDS_CORE.md`
- `MENTOR_SKILLS_CORE.md`

Run validation after generation:

```sh
node tools/ulos-cli/src/index.js validate
```

## Standard Generation Plan

Standard generation is intentionally rejected until Stage 16.1, preserving the existing non-zero unsupported-standard behavior.

Planning docs and templates exist at:

- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`
- `tools/ulos-cli/templates/standard-pack/`
- `tools/ulos-cli/templates/standard-pack/MAPPING.md`

This command prints planning guidance and does not write standard pack files:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

## Validation Rules

- Standard packs must contain exactly 25 files.
- Compact packs must contain no more than 5 files.
- Every generated pack must include `PROJECT_INSTRUCTIONS.md` and `STARTUP_PROMPT.md`.
- Standard packs must include `PACK_MANIFEST.md`, `FILE_BUDGET.md`, and `CONTINUATION_PROMPT.md`.
- Compact packs must include exactly the compact core structure.
- Every generated pack must include the `Learner-Facing Mentor Mode` marker and metadata visibility guardrails.
- Launch kit files must exist for each supported domain/profile.

## Supported Domains

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
