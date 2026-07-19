# Project Pack Export Specification

This directory defines the human-readable model for assembling selected repository content into ChatGPT Project-ready Project Packs.

## Documents

- `exports/project-pack-spec/PROJECT_PACK_SPEC.md`: core concepts and requirements.
- `exports/project-pack-spec/FILE_BUDGET.md`: standard 25-file and compact/free 5-file budget models and allocation guidance.
- `exports/project-pack-spec/PACK_MANIFEST.md`: manifest contract.
- `exports/project-pack-spec/SELECTION_RULES.md`: file selection priorities.
- `exports/project-pack-spec/EXPORT_WORKFLOW.md`: manual export workflow.
- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`: Stage 16.0 standard 25-file generation plan, output contract, safety rules, and validation plan.

## Scope

These documents define export architecture and generation contracts. Compact and standard generation are implemented in `tools/ulos-cli`.

Standard pack templates and source mapping live under `tools/ulos-cli/templates/standard-pack/`. Use `--dry-run` and repository-local `--out-dir` for safer standard generation testing before overwriting default generated packs.

## OPEN QUESTION

- Should Project Pack specs eventually become machine-readable manifests?
