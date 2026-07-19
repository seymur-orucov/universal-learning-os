# ADR-0044: App Architecture Plan

## Status

Accepted

## Context

Universal Learning OS currently uses repository specifications, generated ChatGPT Project packs, and `tools/ulos-cli` validation/generation commands. Daily learning is intended to happen inside ChatGPT Projects, while Codex and the repository are used for framework maintenance.

Stage 21.0 defines the first app architecture plan without implementing the app.

## Decision

Universal Learning OS Studio will be planned as a local-first, CLI-backed control panel.

The initial app role is:

`Universal Learning OS Studio = visual control panel for generated packs, CLI validation, ChatGPT Project setup, handoff/snapshot helpers`

The app will not become a full learning platform in its first MVP.

## Why App Should Be CLI-backed First

The CLI already owns the operational behavior for supported domains, generated pack validation, pack inspection, generation dry-runs, optional learner handoff scaffolds, optional learner snapshot scaffolds, and learner artifact validation.

Keeping the app CLI-backed avoids duplicating rules and preserves the CLI as the source of truth. It also keeps Stage 21.0 aligned with existing repository-local workflows.

## Why App Should Not Replace ChatGPT Projects Yet

ChatGPT Projects are the current daily learning runtime. Replacing them would require lesson delivery, assessment, state handling, privacy controls, and learner interaction design that are outside the current framework maturity.

The app should help users set up and validate ChatGPT Project files, not move daily learning into a new runtime.

## MVP Boundaries

The MVP may:

- Show supported domains.
- Show standard and compact profiles.
- Show generated pack validation status.
- Show exact compact upload files.
- Show standard pack file lists.
- Run or display equivalent CLI commands.
- Create optional learner handoff scaffolds through the CLI.
- Create optional learner snapshot scaffolds through the CLI.
- Show safe output paths, validation status, and test status.

The MVP must preserve:

- Standard packs exactly 25 files.
- Compact packs exactly 5 files.
- Learner-neutral generated packs.
- Learner-Facing Mentor Mode.
- Optional, user-requested handoff/snapshot behavior.

## Non-goals

- No app implementation in Stage 21.0.
- No React, Vite, Next.js, Electron, or Tauri dependency in Stage 21.0.
- No new learning domain.
- No generated pack contract changes.
- No authentication.
- No cloud storage.
- No ChatGPT API integration.
- No database.
- No automatic lesson generation.
- No automatic mastery inference.
- No chat transcript import.
- No heavy runtime learner-state system.

## Consequences

The app plan remains practical and low-risk, but the first implementation will depend on CLI output and local repository paths.

Future implementation may need structured CLI output for cleaner UI integration. That should be introduced as a CLI contract change in a later stage, not as hidden app-only parsing.

## Future Options

Future stages may evaluate:

- Local React/Vite UI with a Node command bridge.
- Simple Node-served local web UI.
- Electron or Tauri packaging after the local workflow is proven.
- Optional structured CLI output.
- Optional import-from-handoff workflows.
- Optional local-only progress summaries.
