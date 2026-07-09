# Project Pack Export Workflow

## Purpose

Define the manual workflow for assembling a Project Pack.

## Scope

This workflow is a human-readable process. Compact and standard pack generation are executable through `tools/ulos-cli`.

## Workflow

1. Choose project goal.
2. Choose domain.
3. Choose pack profile.
4. Choose localization defaults.
5. Choose commands.
6. Choose agent skills.
7. Choose learner templates.
8. Choose session templates.
9. Create manifest.
10. Check the selected profile budget: 25 files for `standard`, 5 files for `compact/free`.
11. Document summarized files.
12. Document excluded files.
13. Prepare startup prompt.
14. Prepare continuation prompt.
15. Verify evidence/mastery boundaries.
16. Verify learner state separation.
17. Verify privacy constraints if the domain involves language, audio, transcripts, or workplace content.
18. Final review.

## Generation Status

- Compact packs can be regenerated with `node tools/ulos-cli/src/index.js generate --domain <domain> --profile compact`.
- Standard packs can be regenerated with `node tools/ulos-cli/src/index.js generate --domain <domain> --profile standard`.
- Use `--dry-run` and repository-local `--out-dir` for safer standard generation testing.
- The standard generation contract and templates are documented in `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md` and `tools/ulos-cli/templates/standard-pack/`.

## Manual Checks

- Confirm project instructions do not override canonical framework semantics.
- Confirm Project Pack content does not contain learner-specific progress.
- Confirm domain pack content is reusable and separated from learner state.
- Confirm localization defaults are project-specific, not global framework defaults.
- Confirm evidence requirements remain intact.
- Confirm summarized files are declared in the manifest.
- Confirm the pack does not exceed its selected profile budget.

## Normative Requirements

- Export workflow MUST NOT silently modify learner state.
- Export workflow MUST NOT create mastery claims.
- Export workflow MUST NOT generate project packs outside the selected safe output directory.
- Export workflow SHOULD document limitations and open questions before use.
- Privacy constraints SHOULD be reviewed before including learner-provided audio, transcripts, workplace examples, or sensitive profile details.

## Relationships

- Project Pack concepts are defined in `exports/project-pack-spec/PROJECT_PACK_SPEC.md`.
- File budget is defined in `exports/project-pack-spec/FILE_BUDGET.md`.
- Manifest requirements are defined in `exports/project-pack-spec/PACK_MANIFEST.md`.
- Startup and continuation prompt templates are in `templates/project-pack/`.

## OPEN QUESTION

- Which manual checks should become automated validation first?
