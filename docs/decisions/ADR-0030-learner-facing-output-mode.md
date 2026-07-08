# ADR-0030: Learner-Facing Output Mode

## Status

Accepted for Stage 10.9.

## Context

Generated Project Packs originally preserved framework metadata such as evidence summaries, proposed state updates, continuation prompts, and learner-state details. That metadata is useful for audits, handoff, and explicit progress review, but it can make normal lessons and practice sessions noisy for learners.

The project needed a default mode that makes the mentor feel like a direct teacher while still preserving the framework's evidence-based mastery and learner-state boundaries.

## Decision

Adopt Learner-Facing Mentor Mode, also called Learner-Facing Output Mode, for generated Project Packs.

In normal lesson, practice, review, and assessment responses, the assistant SHOULD provide clean learner-facing teaching output and MUST NOT show framework metadata unless explicitly requested by the learner or required by a requested session summary.

Default learner-facing responses should not show:

- `Evidence Generated`
- `Proposed State Updates`
- YAML learner state updates
- internal skill IDs
- mastery level tables
- Project Pack implementation details
- learner state architecture explanations
- continuation prompt blocks
- audit/debug notes

When the learner explicitly asks for progress, state, evidence, continuation prompts, implementation details, or debug/audit information, the assistant MAY show the relevant metadata clearly and concisely.

## Rationale

The framework needs evidence and state discipline, but learners usually need explanation, practice, feedback, and next steps. Hiding internal metadata by default improves teaching clarity without weakening mastery rules. Explicit requests still allow progress tracking, handoff, and audit workflows.

## Consequences

- Project instructions for generated packs SHOULD include Learner-Facing Mentor Mode rules.
- Normal lessons and practice reviews become cleaner and less framework-noisy.
- `SHOW_PROGRESS` and explicit session-summary requests remain valid paths for showing evidence and state metadata.
- Manual acceptance tests SHOULD verify that normal learner-facing answers do not expose internal framework details.
- Evidence-based mastery remains mandatory even when evidence metadata is hidden from default learner-facing output.

## Boundaries

- This mode changes output presentation, not mastery semantics.
- Learner state still remains outside reusable domain packs and generated Project Packs.
- Commands and skills may still reason internally about evidence, review, and next actions, but should not expose internal labels unless requested.

## OPEN QUESTION

- Should every generated Project Pack be retroactively updated to include identical learner-facing output wording?
- Should acceptance tests use a shared forbidden-output checklist for all domains?
