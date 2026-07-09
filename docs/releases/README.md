# Release Readiness

This directory contains release readiness notes for Universal Learning OS. The next release target is `v0.2.0`.

Release files are documentation artifacts. They are not canonical framework specifications.

## Related Files

- `CHANGELOG.md`
- `docs/releases/v0.2.0.md`
- `docs/releases/v0.2.0-rc-status.md`
- `docs/releases/V0_2_0_RELEASE_CHECKLIST.md`
- `docs/releases/TAGGING_AND_RELEASE.md`
- `docs/decisions/`
- `exports/generated/`
- `tests/manual-acceptance/`

## v0.2.0 Status

- Supported domains: `sql-postgresql`, `english`, `javascript`, `typescript`.
- Standard packs: exactly 25 files per supported domain.
- Compact packs: exactly 5 files per supported domain.
- Standard and compact generation are implemented in `tools/ulos-cli`.
- `node tools/ulos-cli/src/index.js validate` is the official generated-pack quality gate.
- `docs/releases/TAGGING_AND_RELEASE.md` defines the final tag workflow.
- App/dashboard/runtime state strategy remains future work.

## Canonical Behavior

Canonical behavior remains in:

- `specification/`
- `core/`
- `commands/`
- `skills/`
- `domains/`
- `templates/`

## OPEN QUESTION

- Should future releases include machine-readable release manifests?
