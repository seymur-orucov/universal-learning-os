# Universal Learning OS Studio

Universal Learning OS Studio is a local CLI-backed control panel for this repository. It gives a browser UI for supported `tools/ulos-cli` workflows: domain listing, generated-pack validation, learner artifact validation, pack inspection, generation dry-runs, and optional learner handoff/snapshot scaffold creation.

Studio is not the daily learning runtime. Daily lessons, practice, review, and learner-facing mentoring still happen in ChatGPT Projects. Studio does not add domains, edit generated packs, infer mastery, import ChatGPT chat transcripts, generate YAML learner-state patches, store sensitive personal data, add authentication, use cloud/database storage, or call ChatGPT/OpenAI APIs.

The CLI remains the source of truth for domain, pack, validation, generation, handoff, snapshot, overwrite, and path-safety behavior. Studio displays CLI commands, stdout, stderr, and exit codes instead of replacing CLI rules.

## Studio is optional

You do not need Studio to learn with PLOS. The primary workflow is generated packs plus ChatGPT Projects: upload a selected pack, start a lesson, and continue learning in ChatGPT.

Studio is useful for local validation, pack inspection, and optional helper scaffolds. It is not the learning runtime; it does not replace ChatGPT Projects or require repository updates after every lesson.

## Prerequisites

- Node.js with npm.
- Run commands from this repository checkout.
- Install Studio dependencies before running the UI.

## Install

From `apps/studio/`:

```sh
npm install
```

## Run Locally

During development, Studio uses two local processes:

1. The Node bridge/server exposes allowlisted CLI actions on `http://127.0.0.1:5174`.
2. The Vite dev server serves the React UI, usually on `http://127.0.0.1:5173`.

Open two terminals from `apps/studio/`.

Terminal 1:

```sh
npm run server
```

Terminal 2:

```sh
npm run dev
```

Open the Vite URL printed by `npm run dev`, usually:

```text
http://127.0.0.1:5173
```

The UI calls the bridge at `http://127.0.0.1:5174` by default. To use a different bridge URL, set `VITE_ULOS_STUDIO_API` before starting Vite.

## Build

From `apps/studio/`:

```sh
npm run build
```

To serve the built UI through the local Node server:

```sh
npm run server
```

Then open:

```text
http://127.0.0.1:5174
```

For Vite's static preview server:

```sh
npm run preview
```

## Smoke Checks

Bridge smoke verifies that `list-domains` works, unsupported domains are rejected, and unsafe output paths are rejected. It calls bridge functions directly and does not start a long-running process.

```sh
npm run smoke:bridge
```

Health smoke starts an ephemeral local server on a random port, checks `/api/health`, and stops the server.

```sh
npm run smoke:health
```

## Allowed CLI Actions

The bridge allows only these action shapes:

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain <domain> --profile <profile>
node tools/ulos-cli/src/index.js generate --domain <domain> --profile <profile> --dry-run
node tools/ulos-cli/src/index.js create-handoff --domain <domain> [--out <path>] [--force]
node tools/ulos-cli/src/index.js create-snapshot --domain <domain> --type <type> [--out <path>] [--force]
```

## Security Boundary

The bridge does not expose arbitrary shell execution. It maps UI actions to a fixed allowlist, validates domain/profile/snapshot type inputs, requires output paths to stay inside the repository, and calls the CLI with `child_process.spawn` argument arrays using `shell: false`.

Write-capable actions are limited to optional, user-requested handoff and snapshot scaffold creation. Studio does not implement generated pack editing, non-dry-run pack generation from the UI, transcript import, automatic mastery inference, or a heavy learner-state runtime.

## Troubleshooting

- If the UI says the bridge is unreachable, confirm `npm run server` is running from `apps/studio/`.
- If `http://127.0.0.1:5174` shows `Build the UI first with: npm run build`, either run `npm run build` before using the Node server as the UI host or use `npm run dev` for the Vite UI.
- If a command fails, read the displayed command, exit code, stdout, and stderr. CLI output is authoritative.
- If an output path is rejected, keep it inside the repository root.
- If port `5174` is busy, start the server with another port, for example `PORT=5184 npm run server`, and set `VITE_ULOS_STUDIO_API=http://127.0.0.1:5184` before `npm run dev`.
