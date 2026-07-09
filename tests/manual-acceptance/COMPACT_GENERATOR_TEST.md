# Compact Generator Test

## Purpose

Verify Stage 15 compact generation works for all supported domains and preserves validation requirements.

## Preconditions

- Node.js 18 or newer is available.
- Commands are run from the repository root.
- Canonical domain files exist under `domains/`.
- Command files exist under `commands/`.
- Selected skill files exist under `skills/`.

## Test 1: Generate TypeScript Compact

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact
```

Expected: writes exactly 5 files under `exports/generated/typescript-compact/` and exits 0.

## Test 2: Generate JavaScript Compact

```sh
node tools/ulos-cli/src/index.js generate --domain javascript --profile compact
```

Expected: writes exactly 5 files under `exports/generated/javascript-compact/` and exits 0.

## Test 3: Generate English Compact

```sh
node tools/ulos-cli/src/index.js generate --domain english --profile compact
```

Expected: writes exactly 5 files under `exports/generated/english-compact/` and exits 0.

## Test 4: Generate SQL/PostgreSQL Compact

```sh
node tools/ulos-cli/src/index.js generate --domain sql-postgresql --profile compact
```

Expected: writes exactly 5 files under `exports/generated/sql-postgresql-compact/` and exits 0.

## Test 5: Validate After Generation

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: all standard and compact packs pass validation.

## Test 6: Unsupported Domain Failure

```sh
node tools/ulos-cli/src/index.js generate --domain rust --profile compact
```

Expected: prints unsupported domain error and exits non-zero.

## Test 7: Standard Profile Is Separate Generator

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard
```

Expected: generates exactly 25 files under `exports/generated/typescript-standard/`, recommends validation, and exits 0.

## Test 8: Dry Run

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
```

Expected: prints files that would be written without modifying files.

## Test 9: Missing Canonical File Failure

Manual destructive simulation is not required in the shared worktree. In a temporary local copy only, rename a required canonical file such as `domains/typescript/SYLLABUS.md`, then run compact generation.

Expected: generator reports a missing required domain source file and exits non-zero.

Restore the file immediately after the local experiment.
