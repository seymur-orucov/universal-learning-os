# CLI Validation Test

## Purpose

Verify the Stage 13 `tools/ulos-cli` prototype can list domains, validate generated pack file counts, inspect packs, and report invalid input clearly.

## Preconditions

- Node.js 18 or newer is available.
- Commands are run from the repository root.
- Existing generated packs are present under `exports/generated/`.

## Test 1: List Domains

Command:

```sh
node tools/ulos-cli/src/index.js list-domains
```

Expected:

- Lists `sql-postgresql`, `english`, `javascript`, and `typescript`.
- Shows profiles `standard` and `compact` for each domain.
- Exits with code 0.

## Test 2: Validate Packs

Command:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected:

- Reports PASS for each standard and compact pack.
- Standard packs have exactly 25 files.
- Compact packs have no more than 5 files.
- Exits with code 0.

## Test 3: Inspect SQL Standard Pack

Command:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain sql-postgresql --profile standard
```

Expected:

- Prints pack path, profile, file count, expected rule, and file list.
- Reports `PROJECT_INSTRUCTIONS.md` present.
- Reports `STARTUP_PROMPT.md` present.
- Reports Learner-Facing Mentor Mode presence or absence honestly.
- Exits with code 0 if file count and required files pass.

## Test 4: Inspect TypeScript Compact Pack

Command:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
```

Expected:

- Prints compact pack path and 5-file list.
- Reports expected rule: maximum 5 files.
- Reports `PROJECT_INSTRUCTIONS.md` present.
- Reports `STARTUP_PROMPT.md` present.
- Reports Learner-Facing Mentor Mode present.
- Exits with code 0.

## Test 5: Invalid Domain Handling

Command:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain rust --profile standard
```

Expected:

- Prints a helpful unsupported domain error.
- Lists supported domains.
- Exits non-zero.

## Test 6: Invalid Profile Handling

Command:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile full
```

Expected:

- Prints a helpful unsupported profile error.
- Lists supported profiles.
- Exits non-zero.

## Test 7: Generate Placeholder

Command:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

Expected:

- Says generation is planned for a future stage.
- Does not create or modify pack files.
- Exits with code 0.

## Test 8: Validation Failure Behavior

Manual destructive simulation is not required. To verify behavior safely, inspect `tools/ulos-cli/src/commands/validate.js` and confirm the command returns non-zero if any generated pack violates its count rule.

Do not rename, delete, or temporarily move generated pack files in the shared worktree unless explicitly approved.
