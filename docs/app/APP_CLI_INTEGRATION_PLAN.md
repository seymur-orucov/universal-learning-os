# Universal Learning OS Studio CLI Integration Plan

## Purpose

The Studio MVP should integrate with `tools/ulos-cli` as the source of truth for repository operations. The app is a visual control panel and command runner, not a parallel implementation of framework rules.

## CLI Commands Used by the App

Allowed MVP commands:

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain <domain> --profile <profile>
node tools/ulos-cli/src/index.js generate --domain <domain> --profile <profile> --dry-run
node tools/ulos-cli/src/index.js create-handoff --domain <domain> [--out <path>] [--force]
node tools/ulos-cli/src/index.js create-snapshot --domain <domain> --type <type> [--out <path>] [--force]
```

## Expected stdout/stderr Handling

The command bridge should capture:

- stdout.
- stderr.
- exit code.
- command name.
- normalized argument list.
- working directory.
- started/finished timestamps if needed for UI display.

The UI should show raw stdout and stderr for transparency. Summaries may be displayed, but raw CLI output remains available.

## Exit Code Handling

Exit code `0` means the command succeeded.

Any non-zero exit code means the command failed. The app must not override a non-zero CLI result with an app-level pass state.

Timeouts, process launch failures, and missing CLI files should be shown as app execution failures distinct from CLI validation failures.

## Safe Path Handling

The command bridge should:

- Resolve the repository root before running commands.
- Run commands from the repository root unless a command explicitly requires another working directory.
- Pass paths as separate arguments, not shell fragments.
- Show output paths before write-capable commands run.
- Require explicit confirmation before using `--force`.
- Defer final path validation to the CLI.

The app may add a UI warning layer, but CLI path-safety checks remain authoritative.

## Read-only vs Write Commands

Read-only/status commands:

- `list-domains`
- `validate`
- `validate-learner`
- `inspect-pack`
- `generate --dry-run`

Write-capable commands:

- `create-handoff`
- `create-snapshot`

Write-capable commands require explicit user action and visible output path review.

## Commands Allowed in MVP

The MVP allows only the commands listed in this document.

The command bridge should use a fixed command registry instead of accepting arbitrary commands from the UI.

Stage 22.0 implements this boundary in `apps/studio/server/cliBridge.js`. The bridge validates domain, profile, snapshot type, and repo-local output paths before spawning `tools/ulos-cli` with argument arrays and `shell: false`.

Stage 22.1 keeps the fixed allowlist and adds a small smoke utility for the implemented bridge/server boundary:

```sh
cd apps/studio
npm run smoke:bridge
npm run smoke:health
```

The bridge smoke checks `list-domains`, unsupported domain rejection, and unsafe output path rejection. The health smoke starts an ephemeral local server, checks `/api/health`, and stops it. These checks do not create temporary artifacts.

## Commands Excluded from MVP

The MVP excludes:

- Non-dry-run pack generation.
- Domain creation or editing.
- Generated pack editing.
- Learner-state patch generation.
- Transcript import.
- ChatGPT API calls.
- Shell command passthrough.
- Package installation.
- Git mutation commands.

## Why CLI Remains Source of Truth

The CLI already owns domain listing, pack validation, pack inspection, generation/dry-run behavior, learner handoff scaffold creation, learner snapshot scaffold creation, learner artifact validation, path safety, and overwrite protection.

Keeping this behavior in the CLI prevents duplicated rules and keeps app behavior aligned with existing repository contracts.

Stage 22.0 preserves this source-of-truth boundary. Studio displays CLI output and exit codes; it does not become a generated-pack validator, learner-state engine, transcript importer, mastery inference system, or ChatGPT API runtime.

Stage 22.1 does not expand the command surface. It clarifies bridge errors, documents the two-process local setup, and preserves the local-first, CLI-backed model without adding authentication, cloud storage, database storage, ChatGPT API integration, generated pack editing, or a daily lesson runtime.

## How App Avoids Duplicating Validation Logic

The app should:

- Call `validate` for generated pack validation.
- Call `inspect-pack` for pack file lists and profile status.
- Call `list-domains` for supported domain display.
- Call `validate-learner` for learner artifact checks.
- Display CLI output rather than recomputing pass/fail rules.
- Request future structured CLI output only through a separate CLI contract change.

The app may format results for readability, but it must not become a second validation authority.
