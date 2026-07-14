# Architecture

The repository is organized around stable contracts first and implementation later. Markdown specifications define the intended behavior; future YAML and JSON Schema files will make selected contracts machine-readable.

## Layers

- Core framework: domain-independent behavior in `specification/`.
- Domain packs: reusable subject content in `domains/`.
- Learner state: learner-specific progress data in `learners/`.
- Commands: user-invoked workflows in `commands/`.
- Skills: reusable agent capabilities in `skills/`.
- Validation: future schemas and tests in `schemas/` and `tests/`.
- External integrations: optional runtime-tool contracts in `commands/`, `skills/`, and `docs/integrations/`; external data and credentials remain outside the repository.

## Source-of-Truth Boundaries

- Framework behavior is canonical in `specification/FRAMEWORK_SPEC.md`.
- Learner lifecycle behavior is canonical in `specification/LEARNING_LIFECYCLE.md`.
- Domain pack structure is canonical in `specification/DOMAIN_PACK_SPEC.md`.
- Skill structure is canonical in `specification/SKILL_SPEC.md`.
- Command structure is canonical in `specification/COMMAND_SPEC.md`.
- Learner state structure is canonical in `specification/STATE_SPEC.md`.
- Optional Notion lesson-journal behavior is canonical in `commands/SAVE_LESSON_TO_NOTION.md` and reusable capability behavior in `skills/notion-lesson-logger/SKILL.md`.

## Optional Integration Boundary

ChatGPT's connected Notion tool performs lesson-journal discovery and writes. Universal Learning OS contains no Notion client, credentials, assigned target ids, or learner journal data. Journal entries are external notes and remain separate from learner state, evidence, mastery, commands, skills, and reusable domain content.

## Versioning Direction

Specifications SHOULD be versioned before machine-readable files depend on them. Future migrations SHOULD identify source version, target version, and affected artifacts.

## OPEN QUESTION

- What versioning scheme should be used for specifications and domain packs?
- Where should migration scripts live once mutable state exists?
