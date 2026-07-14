# SAVE_LESSON_TO_NOTION Command (Compatibility Alias)

## Purpose

Preserve backward compatibility for learners who explicitly invoke `SAVE_LESSON_TO_NOTION`. This alias routes to `SAVE_LESSON NOTION` and does not define a second export workflow.

The normal lesson-closure suggestion is defined in `commands/SAVE_LESSON.md`. This alias remains callable but MUST NOT be shown as a second suggestion.

## Routing

1. Treat explicit `SAVE_LESSON_TO_NOTION` invocation as `SAVE_LESSON NOTION`.
2. Build the shared normalized summary through `skills/lesson-summary-builder/SKILL.md`.
3. Use `skills/notion-lesson-logger/SKILL.md` for target discovery, duplicate handling, connector writes, confirmation, and fallback.

## Invocation Boundary

- This alias is explicit-only.
- A runtime MUST NOT save automatically at lesson start, after every response, or merely because a lesson appears complete.
- Displaying the generic `SAVE_LESSON` action MUST NOT invoke this alias or any connector.

## Entry Format

Create clean Notion-compatible Markdown with a deterministic title assembled in this order from available normalized values:

`<date> — <domain> — <lesson-id-or-title>`

Normalize a reliably known full date to `YYYY-MM-DD`. Omit unavailable components rather than inserting false placeholders. If none is available, use `Lesson Journal Entry`. Include only sections supported by the shared normalized summary. Add this boundary when evidence or mastery could be misunderstood:

`Journal note only — saving this entry does not create evidence, mark mastery, or update learner state.`

## Connector Workflow

1. Prepare the title and entry from the shared normalized summary before any write.
2. Use a learner- or runtime-supplied target when available.
3. Otherwise, search through the connected Notion tool for an exact or clear `PLOS Learning Journal` match.
4. If no journal exists, show the prepared entry and ask before creating a new top-level journal. After confirmation, prefer a database when supported; otherwise create a parent page with child lesson pages.
5. Before writing, search for the same available date, domain, and lesson identity when search is supported.
6. Update one unambiguous match. If multiple matches are plausible, ask the learner which entry to update. If updating is unsupported, ask before creating a duplicate.
7. Perform the create or update through ChatGPT's connected Notion tool.
8. Say `created` or `updated` only after the connector confirms success.

## Failure and Fallback

If Notion is unavailable, disconnected, denied, read-only, or does not support the required action:

- explain the failure in learner-facing language;
- do not claim that anything was created, updated, or saved;
- return the complete prepared entry as clean Notion-compatible Markdown for manual copy/paste;
- omit missing fields rather than fabricating content.

## Privacy and State Boundaries

- Universal Learning OS contains no Notion API client, credentials, tokens, or assigned target ids.
- Never expose tokens, connector internals, opaque page/database/workspace ids, local paths, or implementation metadata.
- A journal entry is an external learner note, not canonical content, learner state, evidence, or a mastery record.
- A successful write MUST NOT mutate learner state or create evidence by itself.
- Existing evidence or assessment results MAY be summarized only when already grounded.

## Relationships

- Generic export routing is governed by `commands/SAVE_LESSON.md`.
- Summary normalization is governed by `skills/lesson-summary-builder/SKILL.md`.
- Notion connector behavior is governed by `skills/notion-lesson-logger/SKILL.md`.
- Command behavior is governed by `specification/COMMAND_SPEC.md`.
- Learner state is governed by `specification/STATE_SPEC.md`.
