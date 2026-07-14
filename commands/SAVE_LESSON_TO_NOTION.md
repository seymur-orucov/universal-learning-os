# SAVE_LESSON_TO_NOTION Command

## Purpose

Save a concise lesson journal entry to Notion through the connected runtime tool, only after the learner explicitly invokes `SAVE_LESSON_TO_NOTION` or clearly asks to save the lesson to Notion.

The learner-facing optional action is exactly:

`SAVE_LESSON_TO_NOTION — Bu dərsin əsas məqamlarını Notion-a yadda saxla`

## Invocation Boundary

- This command is explicit-only. Displaying the optional action MUST NOT invoke it.
- The optional action MAY be displayed once at a lesson summary or another meaningful stopping point.
- It MUST NOT be displayed during intermediate teaching, an unanswered guided check, or unfinished practice.
- A runtime MUST NOT save automatically at lesson start, after every response, or merely because a lesson appears complete.

## Requested Context

Use available runtime or learner-supplied context:

- lesson date;
- domain or track;
- lesson id and lesson title;
- learning objective;
- main concepts and essential terminology;
- useful mental model or examples;
- learner takeaways;
- misconceptions, mistakes, and corrections actually discussed;
- completed practice and observed learner evidence, if any;
- next action or follow-up;
- learner/runtime-supplied Notion journal target, if any.

Do not invent missing values. Omit unavailable optional fields. If date, domain, or lesson identity is missing, use only the available title components and state material missing context in the draft when it affects usefulness. Never infer evidence or mastery from displayed content.

## Entry Format

Create clean Notion-compatible Markdown with a deterministic title assembled in this order from available values:

`<date> — <domain> — <lesson-id-or-title>`

Normalize a reliably known full date to `YYYY-MM-DD`. Omit unavailable components rather than inserting false placeholders. If none of those components is available, use `Lesson Journal Entry`. Keep sections concise and include only sections supported by the context. Add this boundary when evidence or mastery could be misunderstood:

`Journal note only — saving this entry does not create evidence, mark mastery, or update learner state.`

## Connector Workflow

1. Resolve lesson context without changing learner state.
2. Prepare the title and Markdown entry before any write.
3. Use a learner- or runtime-supplied target when available.
4. Otherwise, search through the connected Notion tool for an exact or clear `PLOS Learning Journal` match.
5. If no journal exists, show the prepared entry and ask before creating a new top-level journal. After confirmation, prefer a database when the connector supports it; otherwise create a parent page with child lesson pages.
6. Before writing, search for the same available date, domain, and lesson identity when the connector supports search.
7. Update one unambiguous match. If multiple matches are plausible, ask the learner which entry to update. If updating is unsupported, ask before creating a duplicate.
8. Perform the create or update through ChatGPT's connected Notion tool.
9. Say `created` or `updated` only after the connector confirms success. Otherwise follow the fallback behavior.

## Duplicate Handling

- Repeated invocation MUST prefer updating one unambiguous same-lesson entry instead of silently creating duplicates.
- Ambiguous matches require learner choice.
- When duplicate search or update is unsupported, explain the limitation and ask before creating another entry.

## Failure and Fallback

If Notion is unavailable, disconnected, denied, read-only, or does not support the required action:

- explain the failure in learner-facing language;
- do not claim that anything was created, updated, or saved;
- return the prepared entry as clean Notion-compatible Markdown for manual copy/paste;
- keep missing fields omitted or clearly marked as missing outside the entry rather than fabricating content.

## Privacy and State Boundaries

- Universal Learning OS contains no Notion API client, credentials, tokens, or assigned target ids.
- Never expose tokens, connector internals, opaque page/database/workspace ids, or implementation metadata.
- Journal content is an external learner note, not canonical framework content, learner state, evidence, or a mastery record.
- A successful write MUST NOT mutate learner state or create evidence by itself.
- Any evidence mentioned in the entry MUST already come from observed learner activity and remain governed by `specification/LEARNING_LIFECYCLE.md`.

## Reusable Capability

Use `skills/notion-lesson-logger/SKILL.md` for the connector-backed preparation, discovery, duplicate handling, write confirmation, and fallback capability. This command remains the learner-invoked workflow.

## Failure Modes

- No meaningful lesson context is available.
- The connected Notion tool is unavailable or lacks permission.
- No journal target exists and the learner has not approved creating one.
- Matching entries are ambiguous.
- Search, update, database creation, or page creation is unsupported.

## Relationships

- Command behavior is governed by `specification/COMMAND_SPEC.md`.
- Agent-skill behavior is governed by `specification/SKILL_SPEC.md`.
- Lesson closure is governed by `specification/LEARNING_LIFECYCLE.md` and `core/learning-engine/LESSON_STRUCTURE.md`.
- Learner state is governed by `specification/STATE_SPEC.md`.
