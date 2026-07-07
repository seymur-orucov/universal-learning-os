# ADR-0028: Release Readiness Documents

## Status

Accepted for Stage 10.7.

## Context

The repository has completed the first Project Pack export cycle, generated SQL/PostgreSQL and English Project Packs, launch kits, active learner starter state, and manual acceptance tests. Before calling this work a release candidate, the repository needs release readiness documentation that summarizes status, checks, limitations, and next roadmap.

## Decision

- Release readiness documentation lives under `docs/releases/`.
- Release docs are human-readable release artifacts, not canonical framework specs.
- v0.1.0-rc1 is a manual release candidate, not a stable release.
- Release readiness requires manual checks for generated pack file counts, learner state separation, evidence/mastery guardrails, localization, launch kits, and acceptance tests.
- Future automation MAY replace parts of release readiness checking.

## Rationale

Release documentation gives maintainers and users a clear view of what is ready, what is not ready, and what must be checked before practical use. Keeping release docs under `docs/releases/` separates release status from canonical behavior, which remains in specifications, core models, commands, skills, domains, and templates.

The project is not stable because generated packs, learner state, and acceptance tests are still manually maintained. A release candidate label accurately communicates practical usability with known limitations.

## Consequences

- v0.1.0-rc1 has explicit readiness notes, release checklist, known limitations, and roadmap.
- Release checks remain manual until automation exists.
- Canonical semantics remain outside release documentation.
- Future release candidates can reuse the same structure.

## Provisional Decisions

- Release notes are Markdown.
- No machine-readable release manifest is introduced in Stage 10.7.
- File count checks remain documented shell commands.

## OPEN QUESTION

- Should future releases include generated checksums or source commit metadata?
- Should release readiness become an executable validation command?
- What criteria should distinguish a stable v0.1.0 release from v0.1.0-rc1?
