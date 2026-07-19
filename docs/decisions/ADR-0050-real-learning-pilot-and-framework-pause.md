# ADR-0050: Real Learning Pilot and Framework Pause

## Context

PLOS has reusable packs, CLI validation and generation, optional learner continuity helpers, and a local Studio MVP. The framework now needs evidence from real learning rather than additional speculative infrastructure.

## Decision

Pause framework and Studio feature development after Stage 24.0. Run SQL/PostgreSQL and English learning pilots using generated packs in ChatGPT Projects before deciding on further framework or app work.

## Why pause framework development

The current system is sufficient to test the real workflow: generated pack to ChatGPT Project to lesson to learning. More infrastructure without pilot evidence risks solving unverified problems and expanding maintenance burden.

## Why real learning pilot comes next

Three to five real lessons in each initial pilot can reveal whether lesson flow, practice, feedback, review, metadata boundaries, and optional handoff behavior work for learners.

## Why Studio remains optional

Studio is useful as a local CLI-backed control panel for validation, inspection, and helper scaffolds. It is not needed for learning and is not the learning runtime.

## Why ChatGPT Projects remain daily runtime

ChatGPT Projects are where lessons, practice, feedback, and review occur. They keep daily learner activity out of generated packs and avoid mandatory repository updates after every lesson.

## Why no new domains are added now

Existing SQL/PostgreSQL and English pilots should validate the framework before expanding its supported-domain surface.

## Consequences

- CLI and generated-pack contracts remain stable for current use.
- Studio feature development is paused.
- Handoff and snapshot workflows remain optional and user-requested.
- Future changes should be based on documented pilot observations.

## Non-goals

- Adding a domain or changing generated pack file counts.
- Building a full LMS, auth, cloud or database storage, or ChatGPT API integration.
- Importing full ChatGPT transcripts, inferring mastery automatically, or creating YAML learner-state patches.
