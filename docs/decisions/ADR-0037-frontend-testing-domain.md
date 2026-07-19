# ADR-0037: Front-End Testing Domain

## Status

Accepted for Stage 16.0.

## Context

Stage 15.0 completed compact pack generation. The repository has four supported canonical domains and eight generated domain-profile packs. No Stage 27.0 Node.js domain exists, so the next actual major stage is 16.0.

Frontend engineers need a domain that teaches test-level decisions and reliability rather than disconnected snippets. The content must preserve Azerbaijani instruction, English technical terminology, evidence-based mastery, Learner-Facing Mentor Mode, and the standard/compact file contracts.

## Decision

Add canonical domain id `frontend-testing` under `domains/frontend-testing/`.

Use TypeScript, React, Vitest, React Testing Library, `user-event`, MSW, Playwright and Vite as the default stack. Teach unit, component, integration and E2E boundaries; require explanation-first lessons, realistic case studies, flaky-test diagnosis, suite review, strategy design and an integrated capstone.

Promote the domain through the CLI registry and generate:

- `frontend-testing-standard`: exactly 25 files;
- `frontend-testing-compact`: exactly 5 files.

Stage 16.0 also adds standard-profile generation because first-class dry-run and regeneration are required for the new domain. Existing pack contracts and paths remain unchanged.

## Consequences

- Supported canonical domains increase from four to five.
- Generated domain-profile packs increase from eight to ten.
- Standard and compact generation share path-safety rules.
- Executable Node tests cover registry uniqueness, counts, content markers, dry-runs, unexpected-file cleanup, validation and path safety.
- Studio is unaffected because this repository has no Studio application or bridge.

## Boundaries

- Node.js is not added or modified.
- Learner state remains outside domain and generated packs.
- Playwright is not used for unit/integration-owned behavior.
- Coverage percentage is not a mastery definition.
- No release tag is created.
