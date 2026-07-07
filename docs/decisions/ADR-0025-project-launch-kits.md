# ADR-0025: Project Launch Kits

## Status

Accepted for Stage 10.4.

## Context

The repository has generated SQL/PostgreSQL and English Project Packs under `exports/generated/`, each constrained to exactly 25 files. Practical ChatGPT Project use also needs setup guides, upload checklists, ready-to-paste startup and continuation prompts, deleted-chat recovery guidance, and learner state handoff templates.

Adding those helper files inside individual generated pack directories would break the 25-file upload-ready rule.

## Decision

- Practical ChatGPT Project launch kits live under `exports/generated/project-launch-kits/`.
- Launch kits are derived helper artifacts.
- Launch kits live outside the individual 25-file generated pack directories.
- Individual generated pack directories MUST remain exactly 25 files.
- Launch kits MAY contain ready-to-paste prompts, upload checklists, deleted-chat recovery guidance, and learner state handoff templates.
- Canonical semantics remain in `core/`, `specification/`, `commands/`, `skills/`, `domains/`, and generated pack source files.
- Future automation MAY regenerate launch kits.

## Rationale

Launch kits are operational helpers for using generated packs in ChatGPT Projects. They should be easy to find and use, but they should not alter runtime pack contents or canonical framework behavior.

Keeping launch kits outside individual pack directories protects the exact 25-file budget. It also allows shared recovery and maintenance guidance to serve multiple Project Packs without duplicating files.

The launch kit files are derived and human-readable, making them practical during manual development while preserving canonical source boundaries.

## Consequences

- Users can launch SQL/PostgreSQL and English projects with ready setup guides and prompts.
- Generated pack directories remain upload-ready and exactly 25 files.
- Launch kits may drift from generated packs until automation exists.
- Future maintenance should validate both pack file counts and launch kit references.

## Provisional Decisions

- Launch kits are Markdown files.
- Launch kits are shared helper artifacts, not canonical source.
- No automation, schemas, or executable tooling are introduced in Stage 10.4.

## OPEN QUESTION

- Should launch kits be regenerated from pack manifests once automation exists?
- Should launch kits include product-specific screenshots or remain product-neutral Markdown?
- Should there be separate launch kits for 24-file upload environments?
