# ADR-0047: Studio MVP Hardening

## Status

Accepted

## Context

Stage 22.0 introduced Universal Learning OS Studio as a local React/Vite app backed by a small Node CLI bridge. Before v0.3.0 release preparation, the MVP needs practical hardening for local usage, smoke checks, bridge behavior clarity, documentation, and manual acceptance coverage.

The repository contracts require Studio to remain separate from canonical specifications, generated packs, learner state, commands, and skills. ChatGPT Projects remain the daily learning runtime, and `tools/ulos-cli` remains the source of truth for domain, validation, generation, handoff, and snapshot behavior.

## Decision

Harden the Studio MVP without expanding it into a learning runtime or a general command executor.

Stage 22.1 adds practical Studio README guidance, npm smoke scripts, a small smoke utility, consistent bridge rejection output, light UI copy clarification, documentation updates, and manual acceptance coverage.

## Hardening Scope

- Document install, two-process local running, build, smoke checks, troubleshooting, allowed CLI actions, and the security boundary.
- Add `smoke:bridge` and `smoke:health` scripts that do not leave temporary artifacts.
- Verify bridge/server health, `list-domains`, unsupported domain rejection, and unsafe output path rejection.
- Keep UI copy clear that validation and generation behavior comes from the CLI.
- Keep handoff and snapshot scaffolds optional and user-requested.

## Security Boundary

The bridge remains a fixed allowlist of CLI-backed actions. It passes arguments as arrays to `child_process.spawn` with `shell: false`, validates domain/profile/snapshot type values before execution where applicable, and rejects output paths outside the repository root.

Studio does not expose arbitrary shell execution, package installation, git mutation, generated pack editing, transcript import, automatic mastery inference, learner-state patch generation, or non-dry-run generated pack creation from the UI.

## Local-First Constraints

Studio remains local-first and CLI-backed. No authentication, cloud storage, database storage, ChatGPT API integration, Electron, Tauri, Next.js, or full LMS runtime is added.

## Non-Goals

- Add a new learning domain.
- Change standard or compact generated pack file-count contracts.
- Replace ChatGPT Projects as the daily learning runtime.
- Require repository updates after every lesson.
- Implement a heavy runtime learner-state system.
- Store sensitive personal data.

## Consequences

- Local users have clearer setup and smoke-check workflows.
- Bridge failures are easier to diagnose from UI and smoke output.
- Release readiness improves without expanding the app's authority.
- Future app testing can build on the smoke utility if deeper UI coverage is needed.
