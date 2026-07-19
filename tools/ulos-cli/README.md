# ULOS CLI Prototype

`tools/ulos-cli` is a dependency-free Node.js CLI for Universal Learning OS generated Project Packs.

It validates and inspects existing repository files and generates both standard and compact packs.

`validate` is the preferred quick quality gate for generated pack checks.

## Run From Repository Root

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile standard --dry-run
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
- `generate`: creates standard 25-file or compact 5-file packs from canonical framework, domain, command, and skill files.

Run `npm test` in this directory for executable registry, count, dry-run, validation, content, unexpected-file, and path-safety assertions.

## Pack Generation

Generate either profile:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-testing --profile standard
```

Supported domains: `sql-postgresql`, `english`, `javascript`, `typescript`, `frontend-testing`.

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

## Validation Rules

- Standard packs must contain exactly 25 files.
- Compact packs must contain exactly the 5 required files.
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
- `frontend-testing`
