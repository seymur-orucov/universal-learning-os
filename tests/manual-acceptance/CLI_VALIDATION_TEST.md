# CLI Validation Test

## Purpose

Verify the `tools/ulos-cli` validation tool can list domains, validate generated pack quality-gate checks, inspect packs, and report invalid input clearly.

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

- Reports PASS for all eight generated packs.
- Standard packs have exactly 25 files.
- Compact packs have exactly the 5 required files.
- Checks required files for each profile.
- Checks Learner-Facing Mentor Mode marker.
- Checks metadata visibility guardrails.
- Checks standard manifest basics.
- Checks compact structure.
- Checks launch kit presence.
- Exits with code 0.

## Test 3: Inspect SQL Standard Pack

Command:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain sql-postgresql --profile standard
```

Expected:

- Prints pack path, profile, file count, expected rule, validation checks, and file list.
- Reports `PROJECT_INSTRUCTIONS.md` present.
- Reports `STARTUP_PROMPT.md` present.
- Reports Learner-Facing Mentor Mode status.
- Reports metadata guardrail status.
- Reports manifest status.
- Reports launch kit status.
- Exits with code 0 if file count and required files pass.

## Test 4: Inspect TypeScript Compact Pack

Command:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
```

Expected:

- Prints compact pack path and 5-file list.
- Reports expected rule: exactly 5 files.
- Reports `PROJECT_INSTRUCTIONS.md` present.
- Reports `STARTUP_PROMPT.md` present.
- Reports Learner-Facing Mentor Mode present.
- Reports metadata guardrail status.
- Reports compact structure status.
- Reports launch kit status.
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

## Test 7: Compact Generate

Command:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

Expected:

- Generates `exports/generated/typescript-compact/` from canonical domain, command, and skill files.
- Writes exactly 5 compact files.
- Recommends running validation.
- Exits with code 0.

## Test 7b: Standard Generate Rejection

Command:

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

Expected:

- Says standard generation is planned for a future stage.
- Does not modify standard pack files.
- Exits non-zero.

## Test 8: Missing Required File Behavior

Manual destructive simulation is not required in the shared worktree. In a temporary local copy only, remove or rename one required generated pack file such as `STARTUP_PROMPT.md`, then run:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected:

- Reports `[FAIL]` for the affected pack.
- Lists the failed required-files check.
- Exits non-zero.

Restore the file immediately after the local experiment.

## Test 9: Missing Learner-Facing Marker Behavior

In a temporary local copy only, remove the phrase `Learner-Facing Mentor Mode` from one generated `PROJECT_INSTRUCTIONS.md`, then run validation.

Expected:

- Reports `[FAIL]` for the affected pack.
- Lists the learner-facing mode check as failed.
- Exits non-zero.

Restore the file immediately after the local experiment.

## Test 10: Missing Launch Kit Behavior

In a temporary local copy only, rename one launch kit file such as `TYPESCRIPT_COMPACT_PROJECT_SETUP.md`, then run validation.

Expected:

- Reports `[FAIL]` for the affected pack/profile.
- Lists the launch kit check as failed.
- Exits non-zero.

Restore the file immediately after the local experiment.

## Test 11: Validation Failure Behavior

Manual destructive simulation is not required. To verify behavior safely, inspect `tools/ulos-cli/src/lib/validation.js` and `tools/ulos-cli/src/commands/validate.js` and confirm the command returns non-zero if any generated pack violates its validation checks.

Do not rename, delete, or temporarily move generated pack files in the shared worktree unless explicitly approved.
