# ADR-0045: App MVP Implementation Plan

## Status

Accepted

## Context

ADR-0044 defines Universal Learning OS Studio as a local-first, CLI-backed control panel. Stage 21.1 turns that architecture into an implementation-ready plan while still avoiding app code, app dependencies, and runtime learner-state expansion.

The current repository already has `tools/ulos-cli` commands for domain listing, generated pack validation, pack inspection, generation dry-runs, optional handoff scaffolds, optional snapshot scaffolds, and learner artifact validation.

## Decision

The future Studio MVP should be implemented under `tools/ulos-studio/` as a local web UI backed by a small Node command bridge.

The preferred implementation stack for Stage 22.0 is a local React/Vite UI with a Node bridge. A simpler Node-served local web UI remains acceptable if Stage 22.0 needs a smaller dependency footprint.

No app implementation or app dependencies are added in Stage 21.1.

## Why Local-first

The current workflow is repository-local. Generated packs, CLI validation, launch setup, handoff scaffolds, and snapshot scaffolds all live in or near the repository.

Local-first keeps learner artifacts and generated packs on the user's machine, avoids premature hosting and identity decisions, and aligns with the existing ChatGPT Project setup workflow.

## Why CLI-backed

The CLI is already the source of truth for operational behavior. The app should call the CLI instead of reimplementing domain discovery, pack validation, pack inspection, generation, path safety, or learner artifact validation.

CLI-backed behavior also keeps terminal and app workflows consistent.

## Why React/Vite or Local Web UI Is Preferred for MVP

A local web UI can provide a clear control panel without desktop packaging. React/Vite is a practical default because it supports structured screens, status views, command output panels, and fast local development.

A simpler Node-served UI is acceptable if the first implementation needs fewer dependencies.

## Why Not Electron/Tauri Yet

Electron and Tauri introduce packaging, update, platform, and security decisions that are unnecessary before the local control-panel workflow is proven.

The MVP should validate the app's usefulness before committing to desktop distribution.

## Why Not Cloud/Web SaaS Yet

Cloud or SaaS delivery would require authentication, storage, privacy, synchronization, hosting, and multi-user decisions that are outside the MVP.

It would also increase pressure to store learner data or move daily learning out of ChatGPT Projects, which is not part of the current architecture.

## Why Not ChatGPT API Integration Yet

Daily learning remains inside ChatGPT Projects. API integration would introduce a separate learning runtime, prompt orchestration, transcript handling, and learner-data privacy decisions before the control panel is implemented.

The MVP should help users prepare and validate ChatGPT Project files, not replace ChatGPT Projects.

## Consequences

The future app will be easier to implement and test because it can call existing CLI commands. It may need structured CLI output later for cleaner UI rendering, but that should be added as a CLI contract in a separate stage.

The app will not support in-app lessons, cloud sync, authentication, or analytics in the MVP.

## Non-goals

- No app implementation in Stage 21.1.
- No React, Vite, Next.js, Electron, or Tauri dependency in Stage 21.1.
- No new learning domain.
- No generated pack contract change.
- No non-dry-run pack generation in the MVP.
- No generated pack editing inside the app.
- No authentication.
- No cloud storage.
- No ChatGPT API integration.
- No database.
- No automatic lesson generation.
- No automatic mastery inference.
- No chat transcript import.
- No YAML learner-state patch generation.
- No heavy runtime learner-state system.
