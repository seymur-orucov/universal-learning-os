# ADR-0036: Compact Pack Generator

## Status

Accepted for Stage 15.0.

## Context

The repository now has supported domains, standard 25-file packs, compact 5-file packs, and a CLI validator. Compact packs are the safest first generation target because their structure is fixed and small: project instructions, startup prompt, domain core, commands core, and mentor skills core.

Standard packs remain larger and include manifests, individual command files, individual skill files, framework summaries, and domain summaries. Generating them correctly requires stronger manifest and source-traceability behavior than this stage should introduce.

## Decision

Implement compact-only generation in `tools/ulos-cli`.

`node tools/ulos-cli/src/index.js generate --domain <domain> --profile compact` reads canonical domain files, selected command files, and selected mentor skill files, then writes the five compact generated files under `exports/generated/<domain>-compact/`.

Standard generation is explicitly rejected with a clear future-work message.

## Consolidation Model

- `PROJECT_INSTRUCTIONS.md` is generated from domain identity, localization defaults, Learner-Facing Mentor Mode rules, metadata guardrails, boundaries, and command summary.
- `STARTUP_PROMPT.md` is generated as a paste-ready first prompt.
- `DOMAIN_CORE.md` consolidates canonical domain files from `domains/<domain>/`.
- `COMMANDS_CORE.md` consolidates selected files from `commands/`.
- `MENTOR_SKILLS_CORE.md` consolidates selected files from `skills/`.

## Relationship to Validation

Stage 14 validation remains the quality gate after generation. Generated compact packs must pass file count, required file, Learner-Facing Mentor Mode, metadata guardrail, compact structure, and launch kit checks.

## Limitations

- The generator does not synthesize standard 25-file packs.
- The generator does not parse Markdown semantics deeply.
- The generator does not create launch kits.
- The generator does not validate full canonical-to-generated semantic equivalence.

## Future Direction

Future stages may add standard pack generation, manifest generation, source drift detection, source checksums, and richer template control.
