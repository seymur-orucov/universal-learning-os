# Framework Context

Universal Learning OS separates framework contracts, domain content, learner state, commands, and agent skills.

Canonical sources: `specification/FRAMEWORK_SPEC.md`, `specification/DOMAIN_PACK_SPEC.md`, `specification/COMMAND_SPEC.md`, and `specification/SKILL_SPEC.md`.

## Rules

- TypeScript domain content is reusable and belongs to `domains/typescript/`.
- Learner progress is mutable learner state and is not part of this Project Pack.
- Commands are user-invoked workflows.
- Agent skills are assistant capabilities, not learner competencies.
- Do not expose framework internals during normal learner-facing mentoring unless requested.
