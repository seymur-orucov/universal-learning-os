# ADR-0038: Standard Pack Generator

## Status

Accepted for Stage 16.1.

## Context

Stage 15.0 implemented compact pack generation. Stage 16.0 defined the standard generation plan, exact 25-file output contract, templates, source mapping, and safety requirements.

Standard generation is now low-risk enough to implement because the compact generator established the CLI generation path and Stage 16.0 documented how canonical framework, command, skill, and domain sources map to generated standard pack files.

## Decision

Implement standard pack generation in `tools/ulos-cli`.

`node tools/ulos-cli/src/index.js generate --domain <domain> --profile standard` now reads canonical repository files and writes exactly 25 files under `exports/generated/<domain>-standard/` by default.

The generator uses the Stage 16.0 plan in `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md` and the mapping in `tools/ulos-cli/templates/standard-pack/MAPPING.md` as the implementation guide.

## Generation Model

- Project-level files are generated from domain metadata, project-pack specifications, and standard runtime guardrails.
- Framework context files summarize selected canonical files from `specification/`, `core/`, `docs/`, and learner state templates.
- Command output files are generated from selected files under `commands/`.
- Skill output files are generated from selected files under `skills/`.
- Domain output files are generated from `domains/<domain>/` canonical files, including JavaScript alternate Stage 11 files when present.

Generated standard packs preserve Learner-Facing Mentor Mode and metadata visibility guardrails in `PROJECT_INSTRUCTIONS.md`.

## Safety

- The generator writes only to the default standard pack directory or to an explicit `--out-dir` inside the repository root.
- The generator refuses `--out-dir` paths outside the repository root.
- The generator writes exactly the documented 25 files.
- The generator fails if unexpected files or directories exist in the selected output directory.
- Dry-run mode prints target files and source files without writing.
- Compact generation remains separate and unchanged.

## Validation

`node tools/ulos-cli/src/index.js validate` remains the quality gate after generation. Validation checks generated pack directories, file counts, required files, Learner-Facing Mentor Mode, metadata guardrails, manifest basics, compact structure, and launch kit presence.

## Limitations

- Markdown source files are copied or summarized without deep semantic parsing.
- Source traceability is manifest-level, not checksum-based.
- The generator does not create or update launch kits.
- The generator does not prove semantic equivalence between canonical sources and generated summaries.
- Unexpected file handling is conservative and fails rather than cleaning automatically.
