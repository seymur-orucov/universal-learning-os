# ADR-0022: Generated Project Pack Location

## Status

Accepted for Stage 10.1.

## Context

Stage 10.0 defined the Project Pack Export Model but did not generate actual Project Packs. Stage 10.1 creates the first generated SQL/PostgreSQL Standard Project Pack for ChatGPT Projects under a 25-file budget.

Generated Project Packs need a clear repository location and boundary because they are derived from canonical framework, command, agent skill, learner state, and domain pack sources. They must be auditable without becoming canonical sources themselves.

## Decision

- Generated Project Packs live under `exports/generated/`.
- The SQL/PostgreSQL Standard Project Pack lives under `exports/generated/sql-postgresql-standard/`.
- Generated Project Packs are derived artifacts.
- Generated Project Packs may be committed while the framework is manually developed because they are human-readable and auditable.
- Future automation may regenerate generated Project Packs.
- Canonical source remains outside `exports/generated/`.

## Rationale

Keeping generated packs under `exports/generated/` separates export outputs from canonical specifications, domain packs, commands, agent skills, learner templates, and core models. This makes it clear that generated packs are upload-ready runtime context, not the source of truth.

Committing generated packs during manual development is acceptable because the files are Markdown, reviewable, and useful for validating whether the export model works under the 25-file limit. The manifest and file budget make derived-source decisions explicit.

Future automation can regenerate packs from canonical sources, but until that exists, human-readable generated packs provide an auditable bridge to ChatGPT Projects.

## Consequences

- ChatGPT Project-ready packs have a stable repository location.
- Generated packs can be reviewed alongside their canonical sources.
- Pack drift is possible until automation exists, so manifests MUST declare source files and limitations.
- Canonical changes SHOULD trigger review or regeneration of affected generated packs.

## Provisional Decisions

- Generated packs are committed for now.
- The first generated pack is SQL/PostgreSQL only.
- The generated pack hard limit is 25 files.
- No automation, schemas, or executable tooling are introduced in Stage 10.1.

## OPEN QUESTION

- Should future generated packs be committed after automation exists?
- Should generated packs include checksums or source commit metadata?
- What validation should detect pack drift from canonical sources?
