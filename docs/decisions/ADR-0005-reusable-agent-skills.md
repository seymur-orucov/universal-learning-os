# ADR-0005: Reusable Agent Skills

## Status

Accepted for Stage 4.

## Context

The framework needs reusable agent capabilities before executable tooling, domain packs, or application integrations exist. These capabilities must remain distinct from learning skills, which are learner competencies defined later in domain skill graphs.

## Decision

- Reusable agent skills are represented as Markdown contracts before executable tooling.
- Initial agent skills are separated into curriculum architect, lesson instructor, practice coach, homework reviewer, assessment engine, progress manager, project mentor, and interviewer.
- Commands orchestrate one or more agent skills to fulfill user-invoked workflows.
- Agent skills MUST NOT directly imply learner mastery.

## Rationale

Markdown contracts keep agent capabilities reviewable and usable by ChatGPT Projects, OpenAI Codex, IDE agents, and future applications before runtime formats are chosen.

The initial separation reflects distinct responsibilities: curriculum design, instruction, practice, review, assessment, progress summarization, project mentoring, and interview simulation. Keeping these boundaries explicit reduces hidden coupling and prevents a command or agent skill from becoming an all-purpose implementation.

Agent skills operate on evidence, state rules, domain packs, and command context. They may propose state updates, but mastery claims require evidence and MUST NOT be inferred from lesson exposure, participation, or generated content.

## Consequences

- Commands can compose agent skills without duplicating reusable capability rules.
- Agent skills can evolve independently from domain packs and learner state.
- Future executable tools or manifests must preserve the Markdown contract boundaries.
- Documentation must consistently distinguish agent skills from learning skills.

## Provisional Decisions

- No executable agent skill runtime exists yet.
- No machine-readable agent skill manifest exists yet.
- No permission model for agent skill tool access exists yet.
- No packaging format for sharing agent skills exists yet.

## OPEN QUESTION

- Should future agent skill manifests be generated from these Markdown contracts or authored separately?
- How should commands declare which agent skills they orchestrate once machine-readable metadata exists?
- What validation should ensure agent skills do not silently modify learner state?
