# Agent Instructions

This repository defines a domain-independent learning framework. Future agents MUST preserve the distinction between framework contracts, reusable domain content, learner state, commands, and skills.

## Required Practices

- Agents MUST read the relevant specification in `specification/` before editing related files.
- Agents MUST preserve canonical-source boundaries and cross-reference canonical documents instead of copying rules.
- Agents SHOULD avoid unnecessary files, generated boilerplate, and broad restructures.
- Agents MUST avoid generic filler, fake syllabuses, and placeholder lesson content.
- Agents MUST make minimal coherent changes that advance the requested task.
- Agents MUST update documentation when public contracts, repository structure, or normative behavior changes.
- Agents SHOULD record major architectural decisions as ADRs in `docs/decisions/`.
- Agents MUST NOT modify learner progress without evidence from learner activity or explicit user instruction.
- Agents MUST NOT mark a skill mastered merely because a lesson, explanation, or prompt was displayed.
- Agents MUST summarize changed files after each task.
- Agents MUST report validation failures, missing tests, and incomplete checks honestly.
- Agents MUST NOT delete user-authored content without explicit permission.

## Editing Guidance

- Framework-wide behavior belongs in `specification/FRAMEWORK_SPEC.md`.
- Learner lifecycle behavior belongs in `specification/LEARNING_LIFECYCLE.md`.
- Domain pack contracts belong in `specification/DOMAIN_PACK_SPEC.md`.
- Skill contracts belong in `specification/SKILL_SPEC.md`.
- Command contracts belong in `specification/COMMAND_SPEC.md`.
- Learner state contracts belong in `specification/STATE_SPEC.md`.
- New major design choices SHOULD be captured as ADRs before implementation expands.

