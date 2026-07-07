# Templates

This directory contains reusable authoring templates.

Templates are not real domain packs, learner state, commands, agent skills, schemas, or executable tooling.

## Available Templates

- `templates/domain/`: Markdown templates for authoring future domain packs.
- `templates/learner/`: Markdown templates for authoring future learner state files.
- `templates/session/`: Markdown templates for reusable session outputs, progress summaries, session reports, and next chat prompts.
- `templates/project-pack/`: Markdown templates for Project Pack instructions, manifests, file budgets, startup prompts, continuation prompts, and compact learner profile briefs.

## Boundaries

- Templates SHOULD reference canonical specifications instead of duplicating large normative blocks.
- Templates MUST NOT include real domain lessons or fake syllabuses.
- Templates MUST NOT include real learner data.
- Session templates SHOULD respect localization preferences from `specification/LOCALIZATION_SPEC.md`.
- Session reports MAY propose state updates but SHOULD NOT silently apply them.
- Project Pack templates SHOULD preserve the 25-file budget model from `exports/project-pack-spec/FILE_BUDGET.md`.
- Project Pack templates MUST NOT create actual exported packs or learner state.

## OPEN QUESTION

- Should templates later be paired with JSON Schema files or generated from schemas?
