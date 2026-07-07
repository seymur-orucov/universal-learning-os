# ADR-0024: Project Pack Validation and Upload Guides

## Status

Accepted for Stage 10.3.

## Context

Generated Project Packs are intended for practical use in ChatGPT Projects. Each individual generated pack directory must remain upload-ready with exactly 25 files. Users also need guidance for uploading packs, starting chats, continuing sessions, and preserving learner evidence without mixing reusable pack content with learner state.

Stage 10.3 validates the SQL/PostgreSQL and English generated packs and adds human-readable guides outside the individual pack directories.

## Decision

- Generated Project Packs require human-readable validation reports before practical use.
- Upload and usage guides live outside individual 25-file pack directories under `exports/generated/`.
- Individual generated pack directories MUST remain exactly 25 files.
- Validation reports are derived audit artifacts, not canonical framework source.
- Future automation MAY replace manual validation.
- Canonical semantics remain in `specification/`, `core/`, `commands/`, `skills/`, `domains/`, and learner state templates.

## Rationale

Validation reports make pack readiness auditable without adding files to the runtime pack directories. Keeping guides outside individual packs preserves the 25-file budget while still documenting practical use.

Manual validation is appropriate before automation exists because the packs are Markdown, human-readable, and derived from canonical files. The report can document file counts, source boundaries, exclusions, localization behavior, evidence/mastery preservation, and learner state separation.

Upload and usage guides reduce operational ambiguity for ChatGPT Projects. They explain how to use Project Instructions, uploaded source files, startup prompts, continuation prompts, and session summaries without treating the pack itself as learner state.

## Consequences

- Generated pack directories stay upload-ready at exactly 25 files.
- Users get practical guidance without bloating runtime packs.
- Manual validation creates an auditable checkpoint before use.
- Generated packs can still drift from canonical sources until automation exists.

## Provisional Decisions

- Validation reports are Markdown.
- Guides are shared across generated packs rather than duplicated inside each pack.
- Stage 10.3 does not introduce scripts, schemas, or executable validation.
- Stage 10.3 fixes missing generated pack artifacts when required for validation.

## OPEN QUESTION

- Which validation checks should become automated first?
- Should generated pack validation include checksums or source commit metadata?
- Should there be 24-file upload variants for environments that count Project Instructions separately?
