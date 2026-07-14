# ADR-0055: Optional Notion Lesson Journal Integration

## Status

Accepted

## Context

Learners may want durable, searchable lesson notes in Notion without turning Universal Learning OS into a Notion client or confusing notes with progress evidence. The integration must fit both generated pack budgets and work across every registered domain.

## Decision

- Add global, explicit-only `SAVE_LESSON_TO_NOTION` and reusable `notion-lesson-logger` contracts.
- Let ChatGPT's connected Notion tool perform writes; store no client, credentials, target ids, or journal data in the repository.
- Show the exact optional action once only at meaningful lesson closure.
- Require deterministic available-context titles, target preference/discovery, duplicate search, unambiguous updates, learner choice on ambiguity, confirmation before top-level journal creation, connector-confirmed success wording, and Markdown fallback.
- Keep journal content separate from learner state, evidence, and mastery.
- Keep compact packs at five files by adding both canonical sources to merged cores.
- Keep standard packs at 25 files by merging the command into `COMMAND_CONTINUE_LESSON.md` and the skill into `SKILL_LESSON_INSTRUCTOR.md`, with separate source labels and manifest declarations.
- Use shared profile source selections so every domain in `DOMAIN_CONFIG` inherits the capability without a domain-specific branch.

## Consequences

- Live Notion behavior depends on connector availability, permissions, and supported operations.
- Repository tests validate contracts and generated content, while real create/update behavior remains a manual connected-runtime check.
- Saving notes cannot be used as evidence of learning or as a reason to change mastery or learner state.

## Related Documents

- `commands/SAVE_LESSON_TO_NOTION.md`
- `skills/notion-lesson-logger/SKILL.md`
- `docs/integrations/NOTION_LESSON_JOURNAL.md`
- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`
