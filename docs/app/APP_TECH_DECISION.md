# Universal Learning OS Studio Tech Decision

## Options Compared

## Local CLI-first Node App

A local Node process can provide a small command-backed interface, serve static UI files later, and invoke `tools/ulos-cli` directly.

Strengths:

- Aligns with the existing Node CLI.
- Keeps validation and generation behavior in one place.
- Avoids early desktop packaging complexity.
- Works well for repository-local workflows.

Trade-offs:

- A pure CLI-first interface is less visual unless paired with a browser UI.
- Structured status screens may require either parsing CLI output or adding structured CLI output later.

## React/Vite Web UI Served Locally

A React/Vite UI can run locally and call a small Node backend that shells out to the CLI.

Strengths:

- Good fit for a visual control panel.
- Fast local development.
- Keeps the app local-first and repository-backed.
- Can show command output, pack file lists, and setup checklists clearly.

Trade-offs:

- Adds frontend dependencies when implementation begins.
- Needs a small local backend or command bridge for CLI execution.
- Requires care to avoid reimplementing CLI validation logic.

## Electron Desktop App

Electron can package the app as a desktop application with Node integration.

Strengths:

- Familiar desktop distribution model.
- Easy access to local files and Node processes.
- Could suit non-technical users later.

Trade-offs:

- Heavy dependency footprint for an early MVP.
- More packaging and update complexity.
- Premature while the control panel workflow is still being validated.

## Tauri Desktop App

Tauri can package a smaller desktop application with a Rust backend and web frontend.

Strengths:

- Smaller footprint than Electron.
- Good desktop integration.
- Strong security model.

Trade-offs:

- Adds Rust/toolchain complexity.
- Larger architectural jump from the current Node CLI.
- Premature before the local app workflow is proven.

## Next.js Local/Web App

Next.js can support local or hosted app behavior.

Strengths:

- Strong full-stack web framework.
- Good routing and server-side capabilities.
- Could support a future hosted experience.

Trade-offs:

- Encourages broader web-app architecture than the MVP needs.
- Risks premature cloud or SaaS assumptions.
- More framework surface than a local control panel requires.

## Recommendation

After Stage 21.0, start with a local React/Vite UI or simple Node-backed local web UI.

The recommended shape is:

- A local web UI for the control panel.
- A small local Node command bridge.
- Existing `tools/ulos-cli` commands as the source of truth.
- No database, authentication, cloud storage, or ChatGPT API integration in the MVP.

Stage 21.0 should not add React, Vite, Next.js, Electron, Tauri, or any app dependencies.

## Why Not Cloud/Web SaaS First

A cloud or SaaS app would introduce identity, storage, privacy, hosting, synchronization, and multi-user decisions before the local framework workflow is stable.

It would also create pressure to store learner data remotely, import transcripts, or move daily learning out of ChatGPT Projects. Those are explicitly outside the MVP boundary.

The first app should prove that a local control panel improves the current CLI/repo workflow before any hosted architecture is considered.
