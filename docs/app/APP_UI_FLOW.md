# Universal Learning OS Studio UI Flow

## Purpose

This document defines the initial UI screens and flows for Studio. Stage 22.0 implemented the first local MVP, and Stage 22.1 hardens the MVP without adding major app features.

## Home / Dashboard

### Purpose

Show repository readiness at a glance: supported domains, pack profiles, latest validation status, learner artifact validation status, and CLI/test status.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js list-domains`
- `node tools/ulos-cli/src/index.js validate`
- `node tools/ulos-cli/src/index.js validate-learner`
- Future test status may call `npm test` from `tools/ulos-cli` or display the equivalent command.

### User Actions

- Refresh domain list.
- Run generated pack validation.
- Run learner artifact validation.
- Open Domains, Pack Inspector, Validation, Handoff, Snapshot, or CLI/Test Status screens.

### Success State

The dashboard shows supported domains, profile availability, validation pass/fail status, and the exact commands used.

### Error State

The dashboard shows command, exit code, stdout, stderr, and a clear failure state.

### Must Not Do

- Must not conduct lessons.
- Must not infer learner progress.
- Must not write learner artifacts on load.
- Must not run app-only validation rules that conflict with the CLI.
- Must continue to remind users that ChatGPT Projects remain the daily learning runtime.

## Domains

### Purpose

Show supported domains and available profiles.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js list-domains`

### User Actions

- Select a domain.
- Navigate to profile or pack inspection for the selected domain.

### Success State

The screen lists exactly the domains reported by the CLI.

### Error State

The screen reports CLI failure details and does not show stale domains as authoritative.

### Must Not Do

- Must not add, edit, or delete domains.
- Must not treat hard-coded UI domain lists as canonical.

## Pack Profiles

### Purpose

Explain standard and compact profile contracts and show profile availability by domain.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js list-domains`
- `node tools/ulos-cli/src/index.js inspect-pack --domain <domain> --profile <profile>`

### User Actions

- Select standard or compact profile.
- Open the Pack Inspector for a selected domain/profile.
- Copy or view the compact ChatGPT Project upload file list.

### Success State

The screen shows standard as exactly 25 files and compact as exactly 5 files. Compact upload files are shown as `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

### Error State

The screen shows the failed command, exit code, stdout, and stderr.

### Must Not Do

- Must not change pack file-count contracts.
- Must not edit generated pack files.
- Must not hide compact file-list drift if validation fails.

## Pack Inspector

### Purpose

Display the generated pack path, profile rule, validation checks, and file list for one domain/profile.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js inspect-pack --domain <domain> --profile <profile>`
- Optional dry-run preview: `node tools/ulos-cli/src/index.js generate --domain <domain> --profile <profile> --dry-run`

### User Actions

- Choose domain.
- Choose profile.
- Inspect current file list.
- Run dry-run generation preview.
- Copy equivalent CLI command.

### Success State

The screen shows file count, expected rule, rule status, checks, and files from CLI output.

### Error State

The screen shows invalid domain/profile or validation failure details from the CLI.

### Must Not Do

- Must not generate packs without explicit user action.
- Must not perform non-dry-run generation in the MVP.
- Must not edit generated packs.

## Validation

### Purpose

Run and display generated pack validation.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js validate`

### User Actions

- Run validation.
- Copy validation command.
- Open failing pack inspection, if the CLI output identifies one.

### Success State

The screen reports pass status, domains checked, packs checked, and raw CLI output.

### Error State

The screen reports fail status, exit code, stdout, and stderr.

### Must Not Do

- Must not replace CLI validation.
- Must not allow app-only validation to override CLI failure.
- Must communicate that validation behavior comes from the CLI.

## Learner Handoff

### Purpose

Create optional learner handoff scaffolds by explicit user request.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js create-handoff --domain <domain> [--out <path>] [--force]`

### User Actions

- Select domain.
- Review default or custom output path.
- Confirm creation.
- Explicitly enable `--force` only when overwriting is intended.

### Success State

The screen shows command name, domain, output path, optional/user-requested status, and raw CLI output.

### Error State

The screen shows unsupported domain, unsafe path, existing-file protection, or other CLI failure details.

### Must Not Do

- Must not require handoffs after lessons.
- Must not import full chat transcripts.
- Must not infer mastery.
- Must not generate YAML learner-state patches.
- Must not store sensitive personal data.
- Must remain optional and user-requested.

## Learner Snapshot

### Purpose

Create optional periodic learner snapshot scaffolds by explicit user request.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js create-snapshot --domain <domain> --type <type> [--out <path>] [--force]`

### User Actions

- Select domain.
- Select snapshot type.
- Review default or custom output path.
- Confirm creation.
- Explicitly enable `--force` only when overwriting is intended.

### Success State

The screen shows command name, domain, snapshot type, output path, optional/periodic status, and raw CLI output.

### Error State

The screen shows unsupported domain, unsupported type, unsafe path, existing-file protection, or other CLI failure details.

### Must Not Do

- Must not require snapshots after lessons.
- Must not treat snapshots as learner-state truth.
- Must not infer mastery.
- Must not parse chat transcripts.
- Must not create heavy runtime learner state.
- Must remain optional and user-requested.

## CLI/Test Status

### Purpose

Show command availability and automated CLI test status.

### Data Source / CLI Command

- `node tools/ulos-cli/src/index.js list-domains`
- `node tools/ulos-cli/src/index.js validate`
- `node tools/ulos-cli/src/index.js validate-learner`
- `npm test` from `tools/ulos-cli`

### User Actions

- Run allowed status checks.
- Copy commands.
- View raw outputs.

### Success State

The screen shows pass/fail status for validation and automated tests, with the exact commands used.

### Error State

The screen shows command failure details and does not mark the repository ready.

### Must Not Do

- Must not mutate generated packs.
- Must not mutate learner artifacts.
- Must not add app-specific readiness rules that contradict CLI results.

## Stage 22.1 Hardening Notes

Stage 22.1 keeps the UI as a local control panel. The implemented copy reinforces that validation and generation behavior comes from the CLI, handoff/snapshot scaffolds are optional and user-requested, and ChatGPT Projects remain the learner-facing daily runtime. No authentication, cloud sync, database storage, ChatGPT API integration, lesson runtime, generated pack editing, new domain, or generated pack contract change is added.
