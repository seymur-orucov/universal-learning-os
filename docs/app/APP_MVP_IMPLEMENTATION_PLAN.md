# Universal Learning OS Studio MVP Implementation Plan

## Purpose

This document defines the concrete implementation blueprint for a future Universal Learning OS Studio MVP. Stage 21.1 is planning only; it does not add app runtime code or dependencies.

The future MVP remains:

`Universal Learning OS Studio = local CLI-backed control panel`

Daily learning remains inside ChatGPT Projects. The app helps users inspect, validate, and prepare repository artifacts.

## Recommended App Location in Repo

When implementation begins, place the app under:

```text
tools/ulos-studio/
```

Rationale:

- The app is tooling, not framework specification.
- It depends on `tools/ulos-cli` as the source of operational behavior.
- Keeping it under `tools/` avoids mixing UI implementation with canonical specs, domain packs, generated packs, or learner state.

Do not create this directory during Stage 21.1.

## Recommended Initial Stack

For Stage 22.0 implementation, use one of these local-only options:

- Preferred: local React/Vite UI with a small Node-backed command bridge.
- Acceptable fallback: simple Node-backed local web UI with minimal client JavaScript.

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

## Expected File/Folder Structure

The future implementation should start with a small structure similar to:

```text
tools/ulos-studio/
  README.md
  package.json
  src/
    client/
      App.*
      screens/
      components/
    server/
      commandBridge.*
      pathSafety.*
      cliCommands.*
    shared/
      commandTypes.*
  test/
```

This is an implementation target for Stage 22.0 or later. Stage 21.1 must not add these files.

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

Before Stage 22.0 implementation starts:

- [ ] Confirm `tools/ulos-studio/` as the implementation location.
- [ ] Confirm whether Stage 22.0 uses React/Vite or a simpler Node-served UI.
- [ ] Add only the minimal app dependencies needed for a local MVP.
- [ ] Implement a Node command bridge that calls `tools/ulos-cli`.
- [ ] Implement fixed command templates for allowed MVP commands.
- [ ] Implement UI screens from `docs/app/APP_UI_FLOW.md`.
- [ ] Display raw CLI output and exit codes.
- [ ] Add write-command confirmations for handoff and snapshot creation.
- [ ] Add app tests without weakening existing CLI tests.
- [ ] Run existing validation and CLI automated tests.
- [ ] Keep generated pack contracts unchanged.
