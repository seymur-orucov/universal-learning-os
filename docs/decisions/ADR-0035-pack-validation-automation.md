# ADR-0035: Pack Validation Automation

## Status

Accepted for Stage 14.0.

## Context

Generated Project Packs now exist for multiple domains and profiles. Stage 13 introduced a minimal CLI that could list domains, count files, inspect packs, and provide a placeholder generate command. File counts alone are not enough for release or merge confidence because packs can also drift by losing required files, launch kits, metadata guardrails, manifest references, or Learner-Facing Mentor Mode instructions.

## Decision

Expand `tools/ulos-cli` so `ulos validate` becomes the preferred quick quality gate for generated pack checks.

The Stage 14 validator checks:

- generated pack directory existence;
- standard and compact file-count rules;
- required files by profile;
- Learner-Facing Mentor Mode marker;
- metadata visibility guardrail marker phrases;
- standard pack manifest basics;
- compact pack structure;
- launch kit presence;
- supported domain/profile consistency from one shared CLI configuration.

`inspect-pack` uses the same validation helpers so one pack can be diagnosed with the same rules used by repository-wide validation.

## Rationale

Generated packs are derived artifacts, but they are practical runtime assets. A lightweight automated gate catches common drift before release, review, or upload. Keeping validation dependency-free and Markdown-aware but not over-built preserves the repository's current model while adding useful confidence.

## Still Manual

- The validator does not fully parse manifests.
- The validator does not prove semantic equivalence with canonical domain files.
- The validator does not execute learner-facing teaching behavior.
- Manual acceptance tests still cover prompt quality, localization, and behavioral expectations.
- The `generate` command remains a placeholder.

## Consequences

- Maintainers can run `node tools/ulos-cli/src/index.js validate` before release or merge.
- Validation failures return a non-zero exit code.
- The CLI becomes a foundation for future full generation, manifest validation, drift detection, and release dashboards.
- Existing generated packs remain Markdown files and continue to be usable without the CLI.
