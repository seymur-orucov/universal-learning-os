# Templates

This directory contains reusable authoring templates.

Templates are not real domain packs, learner state, commands, agent skills, schemas, or executable tooling.

## Available Templates

- `templates/domain/`: Markdown templates for authoring future domain packs.
- `templates/learner/`: Markdown templates for authoring future learner state files.
- `templates/session/`: Markdown templates for reusable session outputs, progress summaries, session reports, and next chat prompts.

## Boundaries

- Templates SHOULD reference canonical specifications instead of duplicating large normative blocks.
- Templates MUST NOT include real domain lessons or fake syllabuses.
- Templates MUST NOT include real learner data.
- Session templates SHOULD respect localization preferences from `specification/LOCALIZATION_SPEC.md`.
- Session reports MAY propose state updates but SHOULD NOT silently apply them.

## OPEN QUESTION

- Should templates later be paired with JSON Schema files or generated from schemas?
