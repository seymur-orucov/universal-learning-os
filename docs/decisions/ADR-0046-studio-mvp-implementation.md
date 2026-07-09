# ADR-0046: Studio MVP Implementation

## Status

Accepted

## Context

Stage 21.0 and Stage 21.1 define Universal Learning OS Studio as a future local-first, CLI-backed control panel. Stage 22.0 implements the first MVP.

The repository already has `tools/ulos-cli` commands for domain listing, generated pack validation, learner artifact validation, pack inspection, generation dry-runs, and optional learner handoff/snapshot scaffolds.

## Decision

Implement Universal Learning OS Studio under `apps/studio/` as a minimal React/Vite UI backed by a small local Node command bridge.

The app invokes only allowlisted CLI command templates and does not reimplement domain, pack, generation, validation, handoff, or snapshot behavior.

The app location is `apps/studio/` rather than the Stage 21.1 planning recommendation of `tools/ulos-studio/` because Stage 22.0 explicitly establishes an app workspace while keeping it isolated from canonical specifications, generated packs, learner state, commands, and skills.

## Consequences

- Studio has a clear application boundary under `apps/`.
- The CLI remains the source of truth for operational behavior.
- The app can be built and run locally without desktop packaging.
- A future stage may add app-specific tests or structured CLI output if raw command output becomes insufficient.

## Guardrails

- No new domain is added.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.
- ChatGPT Projects remain the daily learning runtime.
- Handoff and snapshot commands remain optional and user-requested.
- No authentication, cloud storage, database storage, or ChatGPT API integration is introduced.
- No heavy runtime learner-state system is introduced.
