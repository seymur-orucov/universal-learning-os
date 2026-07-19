# Standard Generator Test

## Purpose

Verify Stage 16.1 standard generation works for all supported domains, supports dry-run and safe output override, preserves validation requirements, and does not regress compact packs.

## Preconditions

- Node.js 18 or newer is available.
- Commands are run from the repository root.
- Existing generated packs and launch kits are present under `exports/generated/`.

## Test 1: TypeScript Standard Dry Run

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
```

Expected: prints target directory, all 25 files that would be written, source files that would be used, recommends validation, performs no writes, and exits 0.

## Test 2: TypeScript Standard Temporary Out Dir

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --out-dir tmp/typescript-standard-test
```

Expected: creates the repository-local output directory if missing, writes exactly 25 standard files, does not write outside the repository root, and exits 0.

Remove the temporary directory after the test.

## Test 3: TypeScript Standard Default Output

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

Expected: regenerates `exports/generated/typescript-standard/`, writes exactly 25 files, preserves Learner-Facing Mentor Mode and metadata guardrails, recommends validation, and exits 0.

## Test 4: Generate All Standard Packs

```sh
node tools/ulos-cli/src/index.js generate --domain sql-postgresql --profile standard
node tools/ulos-cli/src/index.js generate --domain english --profile standard
node tools/ulos-cli/src/index.js generate --domain javascript --profile standard
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

Expected: all four commands exit 0 and each generated standard pack contains exactly 25 files.

## Test 5: Validate After Standard Generation

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: all generated standard and compact packs pass validation.

## Test 6: Standard File Counts

Inspect these directories:

```text
exports/generated/sql-postgresql-standard/
exports/generated/english-standard/
exports/generated/javascript-standard/
exports/generated/typescript-standard/
```

Expected: each directory contains exactly 25 files.

## Test 7: Compact File Counts Remain 5

Inspect these directories:

```text
exports/generated/sql-postgresql-compact/
exports/generated/english-compact/
exports/generated/javascript-compact/
exports/generated/typescript-compact/
```

Expected: each directory contains exactly 5 files.

## Test 8: Unsupported Domain Failure

```sh
node tools/ulos-cli/src/index.js generate --domain rust --profile standard
```

Expected: prints unsupported domain error, lists supported domains, and exits non-zero.

## Test 9: Unsupported Profile Failure

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile full
```

Expected: prints unsupported profile error, lists supported profiles, and exits non-zero.

## Test 10: Unexpected Extra File Behavior

In a temporary local copy only, add an extra file to a standard pack directory, then run standard generation for that same output directory.

Expected: generation fails with a clear unexpected file message and does not delete files outside the selected output directory.

Restore the directory immediately after the local experiment.

## Test 11: Inspect After Generation

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
```

Expected: reports exactly 25 files, required files present, Learner-Facing Mentor Mode present, metadata guardrail present, manifest OK, launch kit OK, and exits 0.

## Test 12: Compact Generator Still Works

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

Expected: dry-run performs no writes, normal generation writes the five compact files, and both commands exit 0.
