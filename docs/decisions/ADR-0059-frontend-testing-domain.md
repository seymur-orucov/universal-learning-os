# ADR-0059: Front-End Testing Domain

## Status

Accepted for Stage 32.0.

## Context

After synchronizing with the canonical remote, Stage 31.0 Go is complete. The repository has nine supported canonical domains and eighteen generated domain-profile packs. Stage 27.0 Node.js and later stages are present, so the next actual sequential domain stage is 32.0.

Frontend engineers need a domain that teaches test-level decisions and reliability rather than disconnected snippets. The content must preserve Azerbaijani instruction, English technical terminology, evidence-based mastery, Learner-Facing Mentor Mode, and the standard/compact file contracts.

## Decision

Add canonical domain id `frontend-testing` under `domains/frontend-testing/`.

Use TypeScript, React, Vitest, React Testing Library, `user-event`, MSW, Playwright and Vite as the default stack. Teach unit, component, integration and E2E boundaries; require explanation-first lessons, realistic case studies, flaky-test diagnosis, suite review, strategy design and an integrated capstone.

Promote the domain through the CLI registry and generate:

- `frontend-testing-standard`: exactly 25 files;
- `frontend-testing-compact`: exactly 5 files.

The existing registry-driven standard and compact generators produce both profiles. Existing pack contracts, learner runtime helpers, lesson-note exports, and Studio command boundaries remain unchanged.

## Consequences

- Supported canonical domains increase from nine to ten.
- Generated domain-profile packs increase from eighteen to twenty.
- Executable Node tests cover registry uniqueness, counts, content markers, dry-runs, validation, and path safety.
- Studio remains generic and CLI-backed; no testing-specific screen or bridge command is added.

## Boundaries

- Node.js and all other existing domains remain canonical and unchanged.
- Learner state remains outside domain and generated packs.
- Playwright is not used for unit/integration-owned behavior.
- Coverage percentage is not a mastery definition.
- No release tag is created.
