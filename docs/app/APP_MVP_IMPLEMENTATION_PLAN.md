# Universal Learning OS Studio MVP Implementation Plan

## Purpose

This document defines the concrete implementation blueprint for Universal Learning OS Studio. Stage 21.1 was planning only; Stage 22.0 implements the first local MVP.

The future MVP remains:

`Universal Learning OS Studio = local CLI-backed control panel`

Daily learning remains inside ChatGPT Projects. The app helps users inspect, validate, and prepare repository artifacts.

## App Location in Repo

Stage 22.0 places the app under:

```text
apps/studio/
```

Rationale:

- The app is isolated from canonical specs, domain packs, generated packs, learner state, commands, and skills.
- It depends on `tools/ulos-cli` as the source of operational behavior.
- Keeping it under `apps/` makes the application boundary explicit.

The earlier Stage 21.1 recommendation of `tools/ulos-studio/` was superseded by the explicit Stage 22.0 implementation request.

## Recommended Initial Stack

Stage 22.0 uses:

- Local React/Vite UI.
- Small Node-backed command bridge.

Stage 22.1 keeps the same stack and hardens the MVP with clearer local setup documentation, npm smoke scripts, bridge/server smoke coverage, consistent bridge rejection output, and UI copy that reinforces the CLI-backed boundary.

The app should call existing CLI commands instead of reimplementing domain, pack, generation, validation, or learner artifact logic.

## Why This Stack

React/Vite with a small Node command bridge is a practical first app shape because it:

- Supports a clear visual control panel.
- Stays local-first.
- Matches the existing Node-based CLI environment.
- Avoids desktop packaging overhead.
- Avoids cloud, authentication, database, and multi-user decisions.
- Allows the app to show raw command output alongside structured UI summaries.

## MVP Screens

The MVP should include:

- Home / Dashboard.
- Domains.
- Pack Profiles.
- Pack Inspector.
- Validation.
- Learner Handoff.
- Learner Snapshot.
- CLI/Test Status.

Screen behavior is detailed in `docs/app/APP_UI_FLOW.md`.

## MVP Commands Called by App

The app may call:

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain <domain> --profile <profile>
node tools/ulos-cli/src/index.js generate --domain <domain> --profile <profile> --dry-run
node tools/ulos-cli/src/index.js create-handoff --domain <domain> [--out <path>] [--force]
node tools/ulos-cli/src/index.js create-snapshot --domain <domain> --type <type> [--out <path>] [--force]
```

The app should also display the equivalent command before or after execution.

## Implemented File/Folder Structure

The MVP starts with:

```text
apps/studio/
  README.md
  package.json
  index.html
  src/
    main.jsx
    App.jsx
    api/
    components/
    styles.css
  server/
    index.js
    cliBridge.js
    smoke.js
```

This structure is intentionally small and local to the app.

## App Startup Flow

The future app startup should:

1. Start a local server from the repository root or resolve the repository root explicitly.
2. Verify that `tools/ulos-cli/src/index.js` exists.
3. Run `list-domains` to populate domain choices.
4. Optionally run `validate` and `validate-learner` only when the user requests status refresh or when the dashboard has an explicit refresh control.
5. Display command availability and safe output roots.
6. Open or print the local URL.

Startup should not write learner artifacts or generated packs.

## CLI Execution Boundary

The Node command bridge should be the only part of the app that executes CLI commands.

Boundary rules:

- Use fixed command templates and argument arrays.
- Do not build shell strings from user input.
- Validate domain and profile values against CLI-reported or known allowed values.
- Treat CLI exit code as authoritative.
- Show stdout and stderr in the UI.
- Do not duplicate validation rules in the app.
- Do not parse full generated packs to recreate CLI logic.

If structured output becomes necessary, add it to the CLI in a future stage as a public CLI contract.

Stage 22.1 preserves this boundary and adds smoke coverage for bridge health, `list-domains`, unsupported domain rejection, and unsafe output path rejection. No arbitrary shell execution, generated pack editing, non-dry-run pack generation UI, auth, cloud storage, database storage, ChatGPT API integration, transcript import, automatic mastery inference, or heavy learner-state runtime is added.

## Error Handling Model

The app should report:

- Command attempted.
- Exit code.
- stdout.
- stderr.
- Working directory.
- Whether the command was read-only or write-capable.
- Suggested next action, limited to rerun, inspect output path, or run validation.

The app should not hide CLI failures behind generic UI messages.

## Security/Path-Safety Model

The app should preserve CLI path-safety behavior and add a UI-level confirmation layer for write-capable commands.

Path-safety rules:

- Default writes stay under documented repository learner artifact folders.
- User-selected output paths must be shown before execution.
- `--force` must require an explicit user action.
- The app must not accept arbitrary shell fragments.
- The command bridge must pass arguments as arrays.
- The app must not write outside expected output paths unless the underlying CLI explicitly supports and validates the path.

## Testing Approach

Future Stage 22.0 tests should include:

- Command mapping tests for every allowed CLI command.
- Read-only vs write-capable command classification tests.
- Path-safety and `--force` confirmation tests.
- UI tests for each MVP screen.
- CLI failure rendering tests.
- Contract tests confirming generated pack file counts remain unchanged.
- Tests proving the app does not add domains, infer mastery, import transcripts, or generate YAML learner-state patches.

Existing CLI tests remain required and should continue to pass.

## Non-goals

The MVP must not include:

- App implementation during Stage 21.1.
- React, Vite, Next.js, Electron, or Tauri dependencies during Stage 21.1.
- Authentication.
- Cloud storage.
- ChatGPT API integration.
- Database storage.
- Multi-user support.
- Automatic lesson generation.
- Automatic mastery inference.
- Chat transcript import.
- Generated pack editing inside the app.
- Mandatory daily learner-state workflows.
- Heavy runtime learner-state behavior.

## Stage 22.0 Implementation Checklist

- [x] Implement under `apps/studio/`.
- [x] Use React/Vite with a local Node bridge.
- [x] Add only minimal app dependencies needed for a local MVP.
- [x] Implement a Node command bridge that calls `tools/ulos-cli`.
- [x] Implement fixed command templates for allowed MVP commands.
- [x] Implement MVP UI panels for dashboard, domains, validation, pack inspection, handoff, and snapshot.
- [x] Display raw CLI output and exit codes.
- [x] Keep handoff and snapshot creation explicit and user-requested.
- [x] Keep generated pack contracts unchanged.
- [ ] Add automated app tests in a future hardening stage.

## Stage 22.1 Studio MVP Hardening Checklist

- [x] Document practical local install, run, build, smoke, troubleshooting, and security-boundary usage.
- [x] Add working Studio npm scripts for server, build, preview, bridge smoke, and health smoke.
- [x] Add a small local smoke utility without long-running processes or temporary artifacts.
- [x] Keep bridge actions allowlisted and CLI arguments array-based with `shell: false`.
- [x] Surface bridge rejection output consistently.
- [x] Clarify in UI copy that Studio is local, CLI-backed, and not the daily learning runtime.
- [x] Keep generated pack contracts unchanged: standard remains exactly 25 files and compact remains exactly 5 files.
