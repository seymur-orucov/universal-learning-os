# Release Readiness

This directory contains release readiness notes for Universal Learning OS. The next release target is `v0.3.0`.

Release files are documentation artifacts. They are not canonical framework specifications.

## Related Files

- `CHANGELOG.md`
- `docs/releases/v0.3.0.md`
- `docs/releases/v0.3.0-rc-status.md`
- `docs/releases/V0_3_0_RELEASE_CHECKLIST.md`
- `docs/releases/v0.2.0.md`
- `docs/releases/v0.2.0-rc-status.md`
- `docs/releases/V0_2_0_RELEASE_CHECKLIST.md`
- `docs/releases/TAGGING_AND_RELEASE.md`
- `docs/decisions/`
- `exports/generated/`
- `tests/manual-acceptance/`

## v0.3.0 Status

- Release notes: `docs/releases/v0.3.0.md`.
- Release checklist: `docs/releases/V0_3_0_RELEASE_CHECKLIST.md`.
- Release-candidate status: `docs/releases/v0.3.0-rc-status.md`.
- Tagging guidance: `docs/releases/TAGGING_AND_RELEASE.md` and `docs/releases/V0_3_0_RELEASE_CHECKLIST.md`.
- ChatGPT Projects remain the daily learning runtime.
- Codex and the repository remain the framework maintenance environment.
- Studio is a local CLI-backed control panel, not a full LMS.
- No new domain is added in `v0.3.0`.
- Generated pack contracts remain unchanged.

## Current Pack Status

- Supported domains: `sql-postgresql`, `english`, `javascript`, `typescript`.
- Standard packs: exactly 25 files per supported domain.
- Compact packs: exactly 5 files per supported domain.
- Generated packs checked: 8.
- `node tools/ulos-cli/src/index.js validate` remains the official generated-pack quality gate.
- `node tools/ulos-cli/src/index.js validate-learner` validates optional learner runtime artifacts.
- Automated CLI tests run with `npm test` from `tools/ulos-cli/`.
- Studio build and smoke checks run from `apps/studio/`.

## Tagging Notes

Do not tag `v0.3.0` until final approval. The final tag commands are documented in `docs/releases/V0_3_0_RELEASE_CHECKLIST.md`.

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
