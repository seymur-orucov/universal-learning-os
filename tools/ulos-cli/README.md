# ULOS CLI Prototype

`tools/ulos-cli` is a dependency-free Node.js CLI prototype for Universal Learning OS generated Project Packs.

It validates and inspects existing repository files and can regenerate compact and standard packs.

Run it from the repository root with Node.js 18 or newer. `validate` is the official generated-pack quality gate for v0.2.0 release readiness.

Stage 20.0 adds automated CLI regression tests for pack contracts, generation dry-runs, learner runtime helpers, path safety, overwrite protection, and forbidden marker validation. It does not change generated pack contracts, generated pack file counts, supported domains, or Learner-Facing Mentor Mode.

## Run From Repository Root

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --out-dir tmp/typescript-standard-test
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone
node tools/ulos-cli/src/index.js inspect-pack --domain dsa --profile compact
node tools/ulos-cli/src/index.js generate --domain dsa --profile standard --dry-run
node tools/ulos-cli/src/index.js inspect-pack --domain frontend-system-design --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-system-design --profile standard --dry-run
node tools/ulos-cli/src/index.js inspect-pack --domain nodejs --profile standard
node tools/ulos-cli/src/index.js generate --domain nodejs --profile compact --dry-run
node tools/ulos-cli/src/index.js inspect-pack --domain git --profile standard
node tools/ulos-cli/src/index.js generate --domain git --profile compact --dry-run
node tools/ulos-cli/src/index.js inspect-pack --domain go --profile standard
node tools/ulos-cli/src/index.js generate --domain go --profile compact --dry-run
```

## Optional Local Bin Usage

From `tools/ulos-cli/`, npm can expose the `ulos` bin in environments that support package bins:

```sh
npm install
npx ulos list-domains
```

## Automated Tests

Run the CLI regression tests from the repository root:

```sh
node --test tools/ulos-cli/test/*.test.js
```

Or run the package script from `tools/ulos-cli/`:

```sh
npm test
```

The tests use Node's built-in test runner and temporary repo-local paths under `tmp/ulos-cli-tests/`. Learner runtime tests create temporary files under `learners/active-learner/handoffs/stage-20-cli-tests/` and `learners/active-learner/snapshots/stage-20-cli-tests/`, then remove them after the run.

## Commands

- `list-domains`: prints supported domains and profiles.
- `validate`: checks all generated packs for directory presence, file counts, required files, Learner-Facing Mentor Mode, metadata guardrails, lesson-note routing, Obsidian rendering/artifact/fallback rules, Notion compatibility, safety boundaries, manifest basics, compact structure, and launch kit presence.
- `validate-learner`: checks optional learner handoff/snapshot markdown files for obvious forbidden internal-default metadata markers and reports artifact presence, checked counts, ignored non-markdown files, violation counts, and pass/fail status.
- `inspect-pack`: prints path, profile, count rule, validation checks, and file list for one pack.
- `generate`: regenerates compact and standard packs from canonical domain files, selected command files, selected skill files, and framework context.
- `create-handoff`: creates an optional learner handoff scaffold from `templates/learner-handoff/LEARNER_HANDOFF_TEMPLATE.md`.
- `create-snapshot`: creates an optional learner snapshot scaffold from `templates/learner-snapshot/LEARNER_SNAPSHOT_TEMPLATE.md`.

## Supported Domains and Profiles

Domains:

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
- `dsa`
- `frontend-system-design`
- `nodejs`
- `git`
- `go`

Profiles:

- `standard`: exactly 25 files.
- `compact`: exactly 5 files.

## Compact Generation

Generate a compact pack:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

Supported domains: `sql-postgresql`, `english`, `javascript`, `typescript`, `dsa`, `frontend-system-design`, `nodejs`, `git`, `go`.

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

Global command and skill selections are exposed by `tools/ulos-cli/src/lib/profile-sources.js`. Compact packs include `SAVE_LESSON`, its Notion alias, the summary builder, and both exporters in their merged core files. Standard packs preserve 25 filenames through the separately labeled three-source command merge in `COMMAND_CONTINUE_LESSON.md` and four-source skill merge in `SKILL_LESSON_INSTRUCTOR.md`.

## Optional Learner Runtime Helpers

These commands are lightweight scaffold helpers. They do not parse full ChatGPT transcripts, infer mastery, generate YAML learner-state patches, or require repository updates after every lesson.

Create a handoff scaffold:

```sh
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql
```

Default output:

```text
learners/active-learner/handoffs/<domain>-handoff-YYYY-MM-DD.md
```

Create a snapshot scaffold:

```sh
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone
```

Supported snapshot types: `milestone`, `monthly`, `assessment`, `progress`.

Default output:

```text
learners/active-learner/snapshots/<domain>-<type>-YYYY-MM-DD.md
```

Both commands support a repository-local output override and existing-file overwrite protection:

```sh
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql --out learners/active-learner/handoffs/example.md
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone --out learners/active-learner/snapshots/example.md
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone --out learners/active-learner/snapshots/example.md --force
```

Validate optional learner runtime artifacts:

```sh
node tools/ulos-cli/src/index.js validate-learner
```

`validate-learner` checks markdown files under `learners/active-learner/handoffs/` and `learners/active-learner/snapshots/`. It passes when those directories do not exist.

Non-markdown files under those directories are ignored and reported as warnings. Validation reports handoff and snapshot markdown counts separately and exits non-zero when forbidden internal-default markers are found.

The generated handoff and snapshot scaffolds include domain, date, optional/user-requested notes, privacy guidance, and learner-facing placeholders. They do not include full transcript fields or YAML learner-state patch fields by default.

## Validation Rules

- Standard packs must contain exactly 25 files.
- Compact packs must contain exactly 5 files.
- Every generated pack must include `PROJECT_INSTRUCTIONS.md` and `STARTUP_PROMPT.md`.
- Standard packs must include `PACK_MANIFEST.md`, `FILE_BUDGET.md`, and `CONTINUATION_PROMPT.md`.
- Compact packs must include exactly the compact core structure.
- Every generated pack must include the `Learner-Facing Mentor Mode` marker and metadata visibility guardrails.
- Launch kit files must exist for each supported domain/profile.
- Every generated pack must preserve explicit-only Notion invocation, meaningful-closure placement, connector-confirmed success, Markdown fallback, evidence/mastery/state separation, and absence of assigned credentials, opaque target ids, or active learner-state content.

## Exit Codes

- `0`: command completed successfully.
- Non-zero: unsupported domain/profile/type, validation failure, missing source file/template, unsafe output path, existing output file without `--force`, learner artifact violation, or unexpected files in a standard output directory.

## Recommended Release Workflow

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node --test tools/ulos-cli/test/*.test.js
```

Use `docs/releases/V0_2_0_RELEASE_CHECKLIST.md` before tagging or publishing release artifacts.

## Supported Domains

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`
- `dsa`
- `frontend-system-design`
- `nodejs`
- `git`
- `go`
