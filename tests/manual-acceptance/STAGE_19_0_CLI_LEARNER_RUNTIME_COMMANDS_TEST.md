# Stage 19.0 CLI Learner Runtime Commands Test

## Purpose

Verify lightweight optional learner runtime CLI helpers work without changing generated pack contracts, adding domains, or requiring daily repository updates.

## Test 1: create-handoff Works

Run:

```sh
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql --out learners/active-learner/handoffs/test-sql-handoff.md
```

Expected: creates a markdown scaffold, includes an optional/user-requested note, and exits 0.

## Test 2: create-handoff Rejects Unsupported Domains

```sh
node tools/ulos-cli/src/index.js create-handoff --domain rust
```

Expected: exits non-zero and lists supported domains.

## Test 3: create-handoff Rejects Unsafe Output Paths

```sh
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql --out ../unsafe-handoff.md
```

Expected: exits non-zero and refuses to write outside the repository root.

## Test 4: create-handoff Existing File Protection

Run `create-handoff` twice with the same `--out` path.

Expected: the second run exits non-zero unless `--force` is provided.

## Test 5: create-snapshot Works

```sh
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone --out learners/active-learner/snapshots/test-sql-milestone.md
```

Expected: creates a markdown scaffold, includes an optional/periodic/user-requested note, and exits 0.

## Test 6: create-snapshot Rejects Unsupported Types

```sh
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type daily
```

Expected: exits non-zero and lists supported types: `milestone`, `monthly`, `assessment`, `progress`.

## Test 7: create-snapshot Rejects Unsafe Output Paths

```sh
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone --out ../unsafe-snapshot.md
```

Expected: exits non-zero and refuses to write outside the repository root.

## Test 8: create-snapshot Existing File Protection

Run `create-snapshot` twice with the same `--out` path.

Expected: the second run exits non-zero unless `--force` is provided.

## Test 9: validate-learner Passes Without Required Runtime State

```sh
node tools/ulos-cli/src/index.js validate-learner
```

Expected: exits 0 when no optional learner artifacts exist, or when existing handoff/snapshot artifacts do not contain forbidden internal-default metadata markers.

## Test 10: validate-learner Catches Forbidden Metadata

In a temporary local copy only, create a handoff or snapshot file containing `YAML learner state update` or `Proposed State Updates`, then run `validate-learner`.

Expected: exits non-zero and reports the violating file and marker.

Remove the temporary file immediately after the local experiment.

## Test 11: Existing Generated Pack Validation Still Passes

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: all eight generated packs pass validation.

## Test 12: Generated Pack Contracts Remain Unchanged

Expected:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact exact file list remains unchanged.

## Test 13: No New Domain

```sh
node tools/ulos-cli/src/index.js list-domains
```

Expected: exactly `sql-postgresql`, `english`, `javascript`, and `typescript` are listed.
