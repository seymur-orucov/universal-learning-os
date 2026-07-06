# ADR-0008: Session Output Templates

## Status

Accepted for Stage 7.

## Context

The framework needs reusable output shapes for lessons, practice, review, assessment, interviews, projects, progress summaries, session reports, and continuation prompts. These shapes must remain separate from commands, agent skills, learner state, and real domain content.

## Decision

- Session output templates are separated from commands and agent skills.
- Session reports are canonicalized before project export or executable tooling exists.
- Next chat prompts are included to support continuation across ChatGPT Project chats.
- Templates may reference learner state concepts but MUST NOT silently mutate learner state.
- Templates SHOULD support localization preferences from `specification/LOCALIZATION_SPEC.md`.

## Rationale

Commands define user-invoked workflows, while agent skills define reusable agent capabilities. Session output templates define presentation shape. Keeping these separate prevents output formatting from becoming hidden workflow logic or state mutation logic.

Canonical session reports create a consistent bridge between learning activity, evidence, proposed state updates, review items, next actions, and future exports. Next chat prompts preserve continuity when a learner continues in a new chat without requiring executable tooling.

Localization belongs in presentation behavior. Templates therefore support separate instruction language and terminology language while avoiding hardcoded global language defaults.

## Consequences

- Commands and agent skills can produce consistent user-facing output without duplicating template shape.
- Learner state updates remain proposed unless evidence or explicit user instruction supports them.
- Future project exports can reuse session reports and next chat prompts.
- Future schemas may validate report fields after the Markdown contract stabilizes.

## Provisional Decisions

- Session templates are Markdown-only.
- No project export format exists yet.
- No schema validates session reports yet.
- Next chat prompts are templates, not persisted learner state by default.

## OPEN QUESTION

- Should session output templates later include machine-readable metadata?
- Should next chat prompts be generated on demand or stored in learner state?
- Which session report fields are mandatory once schemas exist?
