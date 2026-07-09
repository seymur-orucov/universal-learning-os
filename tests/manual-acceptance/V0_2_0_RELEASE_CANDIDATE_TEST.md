# v0.2.0 Release Candidate Test

## Purpose

Verify the repository is ready to tag as `v0.2.0` without adding domains, changing pack contracts, or introducing post-v0.2.0 work.

## Preconditions

- Commands are run from the repository root.
- Node.js 18 or newer is available.
- Intended release changes are committed before tagging.

## Test 1: Release Docs Exist

Expected files:

- `docs/releases/v0.2.0.md`
- `docs/releases/v0.2.0-rc-status.md`
- `docs/releases/V0_2_0_RELEASE_CHECKLIST.md`
- `docs/releases/TAGGING_AND_RELEASE.md`

## Test 2: Changelog Has v0.2.0

Expected: `CHANGELOG.md` contains a release-ready `v0.2.0` section.

## Test 3: Validation Passes

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: exits 0 and reports `Result: PASS`.

## Test 4: Domains Are Unchanged

```sh
node tools/ulos-cli/src/index.js list-domains
```

Expected: exactly these domains are listed: `sql-postgresql`, `english`, `javascript`, `typescript`.

## Test 5: Standard Pack Counts

Expected:

- `sql-postgresql-standard`: exactly 25 files.
- `english-standard`: exactly 25 files.
- `javascript-standard`: exactly 25 files.
- `typescript-standard`: exactly 25 files.

## Test 6: Compact Pack Counts

Expected:

- `sql-postgresql-compact`: exactly 5 files.
- `english-compact`: exactly 5 files.
- `javascript-compact`: exactly 5 files.
- `typescript-compact`: exactly 5 files.

## Test 7: Standard Dry Run

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
```

Expected: exits 0, prints 25 planned files, prints source files, and performs no writes.

## Test 8: Compact Dry Run

```sh
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
```

Expected: exits 0, prints 5 planned files, and performs no writes.

## Test 9: Inspect Standard and Compact Packs

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
```

Expected: both commands exit 0 and report passing checks.

## Test 10: No New Domain

Expected: no domain beyond `sql-postgresql`, `english`, `javascript`, and `typescript` is added in Stage 17.1.
