# ADR-0054: Deep Teaching and Progressive Lesson Delivery

## Status

Accepted

## Context

The existing `START_LESSON` contract allowed a compact explanation to be followed immediately by independent work. This could make learners guess and could produce technically invalid simplifications, such as asking a beginning SQL learner to model a naturally many-to-many students/courses relationship before bridge tables were taught.

The framework needs a domain-independent teaching-depth and exercise-readiness contract while preserving interactive learning, learner-facing output, and one clear learner action per response.

## Decision

- `START_LESSON` is teaching-first by default and uses Deep Teaching Mode for new concepts.
- A lesson may span multiple turns: teach, guided check, feedback and misconception repair, guided practice, independent practice, then summary and next action.
- One response should normally request only one clear learner action.
- A guided knowledge check or guided action precedes independent practice.
- Diagnostic, challenge-first, practice-only, and assessment modes may place a task first only when explicitly requested by the learner.
- Exercises must not require concepts that have not been taught or established as prerequisites.
- Simplification must remain technically correct and must not create a false mental model.
- A lesson is not complete, and mastery is not established, merely because its initial explanation was displayed.
- Normal learner-facing output continues to hide internal phases, learning skill ids, evidence/state metadata, and framework implementation details.

## Consequences

- Lesson starts provide enough explanation, terminology, examples, and misconception coverage for the learner to reason about one guided check.
- Continuations review the learner response and advance to the next appropriate phase without repeating the full initial explanation.
- Domain authors and instructors must choose prerequisite-safe exercises or teach an advanced concept before requiring its use.
- SQL Lesson 1 remains within relational-model foundations; many-to-many bridge-table work remains in Lesson 14 and uses a technically correct three-table students/courses model when that scenario appears.
- Generated standard and compact project instructions carry the teaching-first guardrails for every supported domain.

## Unchanged Boundaries

- Supported domains remain seven and generated packs remain fourteen.
- Standard packs remain exactly 25 files.
- Compact packs remain exactly five fixed files.
- Learner-Facing Mentor Mode remains in effect.
- Learner progress remains evidence-based, separate from reusable packs, and does not require daily repository updates.
- Studio scope and release/tag status are unchanged.
