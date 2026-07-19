# v0.2.0 Release Checklist

## CLI Checks

- [ ] Run `node tools/ulos-cli/src/index.js validate` and confirm PASS.
- [ ] Run `node tools/ulos-cli/src/index.js list-domains` and confirm four supported domains.
- [ ] Inspect one standard pack: `node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard`.
- [ ] Inspect one compact pack: `node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact`.
- [ ] Dry-run compact generation: `node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run`.
- [ ] Dry-run standard generation: `node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run`.

## Pack Counts

- [ ] `sql-postgresql-standard` has exactly 25 files.
- [ ] `english-standard` has exactly 25 files.
- [ ] `javascript-standard` has exactly 25 files.
- [ ] `typescript-standard` has exactly 25 files.
- [ ] `sql-postgresql-compact` has exactly 5 files.
- [ ] `english-compact` has exactly 5 files.
- [ ] `javascript-compact` has exactly 5 files.
- [ ] `typescript-compact` has exactly 5 files.

## Launch Kits

- [ ] Standard launch kit files exist for all four domains.
- [ ] Compact launch kit files exist for all four domains.
- [ ] Upload file lists match the expected profile file counts.
- [ ] Startup prompt ready files exist.
- [ ] Continuation prompt ready files exist.

## Guardrails

- [ ] Generated packs include `Learner-Facing Mentor Mode`.
- [ ] Generated packs include metadata guardrails for `Evidence Generated`, `Proposed State Updates`, YAML learner state updates, and `explicitly requested` behavior.
- [ ] No personal learner state is accidentally included in generated packs.
- [ ] Docs mention Free/compact usage.
- [ ] Docs state generated packs are reusable and learner-neutral.

## Release Docs

- [ ] `docs/releases/v0.2.0.md` is current.
- [ ] `docs/releases/v0.2.0-rc-status.md` is current.
- [ ] `docs/releases/TAGGING_AND_RELEASE.md` is current.
- [ ] `CHANGELOG.md` includes `v0.2.0`.
- [ ] Root `README.md` is current.
- [ ] `tools/ulos-cli/README.md` is current.
- [ ] Project pack docs describe standard and compact generation.

## Execution Notes

Run these commands from the repository root before tagging:

```sh
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js generate --domain typescript --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain typescript --profile compact --dry-run
```

Expected outcomes:

- `validate` exits 0 and reports `Result: PASS`.
- `list-domains` lists exactly `sql-postgresql`, `english`, `javascript`, and `typescript`.
- Standard inspect reports exactly 25 files and passing checks.
- Compact inspect reports exactly 5 files and passing checks.
- Standard dry-run reports 25 planned files and source files without writing.
- Compact dry-run reports 5 planned files without writing.
