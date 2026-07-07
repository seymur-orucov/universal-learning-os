# Framework Context

## Purpose

Universal Learning OS is a domain-independent framework for structured learning. This Project Pack uses it to teach SQL/PostgreSQL while preserving framework boundaries.

## Runtime Boundaries

- Framework rules describe behavior.
- Domain pack content describes reusable SQL/PostgreSQL subject matter.
- Commands are user-invoked workflows.
- Agent skills are reusable assistant capabilities.
- Learning skills are learner competencies from the SQL/PostgreSQL skill graph.
- Learner state is mutable progress data and is not part of reusable Project Pack content.

## Canonical Sources

Derived from `README.md`, `docs/VISION.md`, `docs/ARCHITECTURE.md`, `specification/FRAMEWORK_SPEC.md`, `specification/COMMAND_SPEC.md`, and `specification/SKILL_SPEC.md`.

## Required Behavior

- Preserve canonical source boundaries.
- Cross-reference or follow canonical semantics; do not silently change them.
- Keep reusable content separate from learner-specific progress.
- Use commands for user-invoked workflows.
- Use agent skills as assistant capabilities only.
- Do not treat agent skills as learning skills.
- Do not treat learning skill definitions as learner mastery.

## Execution Surface

This pack is designed for ChatGPT Projects. It may guide a conversational assistant, but it is not executable tooling.

## OPEN QUESTION

- How should future generated packs declare compatibility with a stable framework version?
