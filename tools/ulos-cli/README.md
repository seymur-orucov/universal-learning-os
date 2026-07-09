# ULOS CLI Prototype

`tools/ulos-cli` is a dependency-free Node.js CLI prototype for Universal Learning OS generated Project Packs.

It validates and inspects existing repository files and can regenerate compact and standard packs.

Run it from the repository root with Node.js 18 or newer. `validate` is the official generated-pack quality gate for v0.2.0 release readiness.

## Run From Repository Root

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --out-dir tmp/typescript-standard-test
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
- `generate`: regenerates compact and standard packs from canonical domain files, selected command files, selected skill files, and framework context.

## Supported Domains and Profiles

Domains:

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`

Profiles:

- `standard`: exactly 25 files.
- `compact`: exactly 5 files.

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

## Standard Generation

Generate a standard pack:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

Standard packs contain exactly 25 files. Run validation after generation.

Use dry-run to preview files and sources without writing:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
```

Use a safe repository-local output override to test without overwriting default packs:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --out-dir tmp/typescript-standard-test
```

`--out-dir` is supported for standard generation and must stay inside the repository root.

Planning docs and templates exist at:

- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`
- `tools/ulos-cli/templates/standard-pack/`
- `tools/ulos-cli/templates/standard-pack/MAPPING.md`

## Validation Rules

- Standard packs must contain exactly 25 files.
- Compact packs must contain exactly 5 files.
- Every generated pack must include `PROJECT_INSTRUCTIONS.md` and `STARTUP_PROMPT.md`.
- Standard packs must include `PACK_MANIFEST.md`, `FILE_BUDGET.md`, and `CONTINUATION_PROMPT.md`.
- Compact packs must include exactly the compact core structure.
- Every generated pack must include the `Learner-Facing Mentor Mode` marker and metadata visibility guardrails.
- Launch kit files must exist for each supported domain/profile.

## Exit Codes

- `0`: command completed successfully.
- Non-zero: unsupported domain/profile, validation failure, missing source file, unsafe output path, or unexpected files in a standard output directory.

## Recommended Release Workflow

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js validate
```

Use `docs/releases/V0_2_0_RELEASE_CHECKLIST.md` before tagging or publishing release artifacts.

## Supported Domains

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
