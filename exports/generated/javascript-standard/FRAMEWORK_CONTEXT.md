# Framework Context

Universal Learning OS separates framework contracts, domain content, learner state, commands, and agent skills.

## Boundaries

- Framework behavior is canonical in `specification/`.
- JavaScript domain content is canonical in `domains/javascript/`.
- Learner progress is mutable learner state and is not part of this Project Pack.
- Commands describe user-invoked workflows.
- Agent skills describe assistant capabilities, not learner competencies.

## Runtime Rule

Do not silently change framework semantics. If a response needs progress, evidence, or state metadata, provide it only when explicitly requested or when ending a session summary requested by the learner.
