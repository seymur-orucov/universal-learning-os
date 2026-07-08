# ULOS CLI Prototype

`tools/ulos-cli` is a minimal Node.js CLI prototype for Universal Learning OS generated Project Packs.

It validates and inspects existing repository files. It does not fully generate packs yet.

## Run From Repository Root

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

## Optional Local Bin Usage

From `tools/ulos-cli/`, npm can expose the `ulos` bin in environments that support package bins:

```sh
npm install
npx ulos list-domains
```

## Commands

- `list-domains`: prints supported domains and profiles.
- `validate`: checks generated pack file counts.
- `inspect-pack`: prints path, profile, count rule, file list, required file presence, and Learner-Facing Mentor Mode presence.
- `generate`: placeholder for a future stage.

## Validation Rules

- Standard packs must contain exactly 25 files.
- Compact packs must contain no more than 5 files.

## Supported Domains

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
