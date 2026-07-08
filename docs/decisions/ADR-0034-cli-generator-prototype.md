# ADR-0034: CLI Generator Prototype

## Status

Accepted for Stage 13.0.

## Context

Universal Learning OS now has multiple canonical domains and generated Project Packs across standard and compact profiles. File-count validation, pack inspection, and supported-domain discovery are still documented manually. As supported domains grow, maintainers need a small tool layer that can check repository artifacts quickly without replacing the Markdown-first framework.

## Decision

Add a minimal CLI prototype under `tools/ulos-cli/`.

The Stage 13 CLI supports:

- `ulos list-domains`: list supported domains and profiles.
- `ulos validate`: validate generated pack file counts for standard and compact profiles.
- `ulos inspect-pack --domain <domain> --profile <profile>`: inspect a generated pack, file list, required files, and Learner-Facing Mentor Mode marker.
- `ulos generate --domain <domain> --profile <profile>`: placeholder only; full generation is not implemented yet.

The CLI uses plain Node.js with no external dependencies. It sits on top of the current repository structure and validates existing generated Markdown files.

## Rationale

Starting with a small prototype avoids over-engineering. The repository remains usable without the CLI, while maintainers gain a faster and less error-prone way to check generated pack budgets and inspect pack health.

## Profile Support

- `standard`: generated packs must contain exactly 25 files.
- `compact`: generated packs must contain no more than 5 files.

The CLI validates SQL/PostgreSQL, English, JavaScript, and TypeScript across both profiles.

## Non-Goals

- The CLI does not fully synthesize Project Packs from canonical sources yet.
- The CLI does not parse or validate all Markdown semantics.
- The CLI does not replace manual acceptance tests.
- The CLI does not introduce schemas, external services, dashboards, or package publishing.

## Future Direction

Future stages MAY expand the CLI into a stronger generator, manifest validator, drift detector, release checker, or dashboard. The current prototype establishes the tool boundary without changing canonical framework contracts.
