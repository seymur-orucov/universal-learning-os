# Stage 19.1 CLI Learner Runtime Hardening Test

## Purpose

Verify Stage 19.1 hardens existing optional learner CLI helpers without adding domains, changing generated pack contracts, changing Learner-Facing Mentor Mode, or requiring repository updates after every lesson.

## Test 1: create-handoff Success Output

Run:

```sh
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql --out learners/active-learner/handoffs/stage-19-1-test-handoff.md
```

Expected: exits 0 and success output includes `create-handoff`, `sql-postgresql`, the output path, and a note that the handoff is optional and user-requested.

## Test 2: create-snapshot Success Output

Run:

```sh
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone --out learners/active-learner/snapshots/stage-19-1-test-snapshot.md
```

Expected: exits 0 and success output includes `create-snapshot`, `sql-postgresql`, `milestone`, the output path, and a note that the snapshot is optional, periodic, and user-requested.

## Test 3: Unsupported Domain Error

Run:

```sh
node tools/ulos-cli/src/index.js create-handoff --domain rust
```

Expected: exits non-zero and lists supported domains: `sql-postgresql`, `english`, `javascript`, `typescript`.

## Test 4: Unsupported Snapshot Type Error

Run:

```sh
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type daily
```

Expected: exits non-zero and lists allowed snapshot types: `milestone`, `monthly`, `assessment`, `progress`.

## Test 5: Existing File Error

Run `create-handoff` or `create-snapshot` twice with the same `--out` path.

Expected: the second run exits non-zero and mentions `--force`.

## Test 6: Unsafe Output Path

Run:

```sh
node tools/ulos-cli/src/index.js create-handoff --domain sql-postgresql --out ../unsafe-handoff.md
node tools/ulos-cli/src/index.js create-snapshot --domain sql-postgresql --type milestone --out ../unsafe-snapshot.md
```

Expected: each exits non-zero and explains that output must stay inside the repository root.

## Test 7: validate-learner Clean Optional Runtime

Run:

```sh
node tools/ulos-cli/src/index.js validate-learner
```

Expected: exits 0 when optional learner artifacts do not exist or contain no forbidden markers.

## Test 8: validate-learner Counts

Run:

```sh
node tools/ulos-cli/src/index.js validate-learner
```

Expected: output reports whether learner runtime artifacts were found, handoff files checked, snapshot files checked, violations found, and final pass/fail status.

## Test 9: Forbidden Marker Detection

In a temporary local file under `learners/active-learner/handoffs/` or `learners/active-learner/snapshots/`, add one forbidden marker such as `YAML learner state update`, then run:

```sh
node tools/ulos-cli/src/index.js validate-learner
```

Expected: exits non-zero and reports the filename and marker. Remove the temporary file immediately after the test.

## Test 10: Non-Markdown Files

Create a temporary non-markdown file under `learners/active-learner/handoffs/` or `learners/active-learner/snapshots/`, then run:

```sh
node tools/ulos-cli/src/index.js validate-learner
```

Expected: validation ignores the non-markdown file and reports it as a warning. Remove the temporary file immediately after the test.

## Test 11: Scaffold Safety

Inspect generated handoff and snapshot scaffolds.

Expected: each includes domain, date, and optional/user-requested notes; neither includes full transcript fields nor YAML learner-state patch fields.

## Test 12: Existing Generated Pack Validation Still Passes

Run:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected: exits 0.

## Test 13: Generated Pack Contracts Remain Unchanged

Run:

```sh
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
```

Expected: standard packs remain exactly 25 files, compact packs remain exactly 5 files, and the compact exact file list remains unchanged.

## Test 14: No New Domain

Run:

```sh
node tools/ulos-cli/src/index.js list-domains
```

Expected: exactly these domains are listed: `sql-postgresql`, `english`, `javascript`, `typescript`.

## Cleanup

Remove temporary Stage 19.1 smoke-test files unless they are intentionally committed as fixtures.
