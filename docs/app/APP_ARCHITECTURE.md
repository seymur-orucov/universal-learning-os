# Universal Learning OS Studio Architecture

## Purpose

Universal Learning OS Studio is a future repository-local control panel for generated packs, CLI validation, ChatGPT Project setup, and optional learner handoff/snapshot helpers.

The first app should make the existing framework workflow easier to inspect and run. It should not replace the current rule:

- ChatGPT Project = learning.
- Codex/repo = framework maintenance.

The app should be CLI-backed at first. The CLI remains the operational source of truth for validation, generation, pack inspection, and optional learner artifact scaffolding.

## Non-purpose

The app is not a full learning management system, daily learning runtime, or learner-state engine.

The first app must not:

- Add a learning domain.
- Change generated pack contracts.
- Edit generated packs as a primary workflow.
- Generate lessons automatically.
- Infer mastery from chat history.
- Import or parse full ChatGPT chat transcripts.
- Require repository updates after every lesson.
- Store sensitive personal data.
- Add cloud storage, authentication, or multi-user behavior.

Learner progress and mastery rules remain governed by `specification/LEARNING_LIFECYCLE.md` and `specification/STATE_SPEC.md`.

## MVP Scope

The MVP should provide a lightweight visual shell over existing repository and CLI capabilities:

- Show supported domains.
- Show standard and compact pack profiles.
- Show generated pack validation status.
- Show the exact ChatGPT Project upload file list for compact packs.
- Show the standard pack file list.
- Run or display equivalent commands for `list-domains`, `validate`, `inspect-pack`, `create-handoff`, `create-snapshot`, and `validate-learner`.
- Create learner handoff scaffolds through the CLI.
- Create learner snapshot scaffolds through the CLI.
- Show safe output paths before writing optional artifacts.
- Show validation and test status.

The MVP is a control panel for existing contracts, not a new contract authority.

## Future Scope

Future app stages may consider:

- Optional local progress summaries from explicit handoffs or snapshots.
- Optional import-from-handoff flows after a separate architecture decision.
- Better source drift checks between canonical domain content and generated packs.
- Local pack comparison and validation history.
- Guided ChatGPT Project setup checklists.
- Optional local settings for paths and preferred commands.
- Desktop packaging if local web delivery proves insufficient.

Any future learner-state feature must preserve the evidence and explicit-instruction requirements in `specification/STATE_SPEC.md`.

## Core User Flows

### Inspect Framework Readiness

The user opens the app and sees supported domains, profile availability, validation status, and test status. The app obtains this information by calling the CLI or reading CLI-generated output.

### Prepare a ChatGPT Project

The user selects a domain and profile. The app displays the exact files to upload, including the fixed compact five-file list for compact packs. The user still creates and uses the ChatGPT Project for daily learning.

### Validate Generated Packs

The user runs or copies the repository validation command. The app shows pass/fail output from the CLI and links to generated pack paths.

### Inspect a Pack

The user selects a domain and profile. The app invokes or mirrors `inspect-pack` and displays the file list and profile contract.

### Create Optional Learner Artifacts

The user explicitly requests a handoff or snapshot scaffold. The app shows the output path and invokes the CLI command. The app does not create mandatory daily learner-state updates.

## Relationship to CLI

The app should be a client of `tools/ulos-cli`, not a replacement.

The CLI remains responsible for:

- Domain listing.
- Generated pack validation.
- Pack inspection.
- Pack generation.
- Optional learner handoff scaffold creation.
- Optional learner snapshot scaffold creation.
- Learner artifact validation.
- Path safety and overwrite protection.

The app may display equivalent commands so users can reproduce the same workflow in a terminal.

## Relationship to Generated Packs

Generated packs remain derived artifacts under `exports/generated/`. Their contracts remain governed by the existing generated pack rules and validation tooling.

The app must preserve these constraints:

- Standard packs remain exactly 25 files.
- Compact packs remain exactly 5 files.
- Compact packs retain the exact file list: `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.
- Generated packs remain learner-neutral.
- Learner-Facing Mentor Mode remains unchanged.

The app may display pack contents and paths, but generated pack editing is outside the MVP.

## Relationship to Learner Handoffs/Snapshots

Learner handoffs and snapshots remain optional, explicit, and scaffold-oriented.

The app may help create handoff and snapshot scaffolds by invoking the CLI, but it must not:

- Require a handoff or snapshot after each lesson.
- Treat a handoff or snapshot as proof of mastery.
- Generate YAML learner-state patches.
- Store full chat transcripts.
- Store sensitive personal data by default.

## Relationship to ChatGPT Projects

ChatGPT Projects remain the daily learning runtime for the initial app architecture.

The app helps users prepare, validate, and inspect the files used to set up a ChatGPT Project. It does not conduct lessons, grade learners, or become the canonical learner interaction surface in the MVP.

## Data/Privacy Guardrails

The app should be repository-local first and avoid external services by default.

Guardrails:

- Do not store sensitive personal data.
- Do not import full chat transcripts.
- Do not send learner artifacts to cloud services.
- Do not infer mastery automatically from chat history.
- Do not create learner progress without evidence or explicit user instruction.
- Prefer explicit local file paths and visible command output.
- Keep reusable framework and generated pack content separate from learner-specific artifacts.

## Recommended Initial Tech Options

Recommended starting point after Stage 21.0:

- A local React/Vite UI or simple Node-backed local web UI.
- The UI runs locally and shells out to the existing CLI or calls a thin local wrapper around the CLI.
- No app dependencies are added during Stage 21.0.

The implementation should start only after this planning stage is accepted.

## App Boundary Decisions

- The CLI is the source of truth for operational behavior.
- The repository remains the source of truth for framework specifications and generated artifacts.
- The app is a local visual control panel.
- ChatGPT Projects remain the daily learning runtime.
- Optional learner handoff/snapshot workflows remain user-requested.
- The app does not introduce a database in the MVP.
- The app does not add authentication or cloud synchronization in the MVP.
- The app does not change standard or compact pack contracts.

## Risks and Trade-offs

- A UI can hide important command details, so the app should show equivalent CLI commands and raw validation output.
- Shelling out to a CLI is simpler and safer initially, but it may need a structured output mode later.
- A local web UI is easier to build than a packaged desktop app, but it may need clearer startup instructions.
- Avoiding a database keeps the MVP simple, but limits history and analytics.
- Keeping ChatGPT Projects as the learning runtime avoids premature platform scope, but the app will not provide in-app lessons at first.
