# Lesson Continuation Commands

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: commands/CONTINUE_LESSON.md

# CONTINUE_LESSON Command

## Purpose

Continue an in-progress lesson.

## When to Use

Use this command when prior session history or learner state indicates an unfinished lesson, practice step, assessment, or next action.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/STATE_SPEC.md`
- `core/learning-engine/LESSON_STRUCTURE.md`
- `core/learning-engine/NEXT_ACTION_MODEL.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Current learner request.
- Learner state or session history, when available.
- Relevant domain pack.
- Prior lesson target, prior activity, and last next action.

## Workflow

1. Resolve context from current request, session history, and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Review the learner's most recent response against the current concept and available prerequisites.
6. Give feedback and repair misconceptions before advancing; avoid repeating the whole initial explanation when targeted repair is sufficient.
7. Resume from the next appropriate progressive lesson phase: guided practice, independent practice, or summary and next action.
8. Request only one clear next learner action, and do not advance to independent practice before sufficient teaching and guided work unless an explicit exception mode applies.
9. Produce an optional session report.
10. Propose state updates only when new evidence exists.
11. At summary or another meaningful stopping point, MAY show `SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz` once; never show it while practice or teaching is unfinished, never invoke it automatically, and do not show the Notion alias as a second suggestion.

## User-Facing Output

The result SHOULD briefly summarize where the learner left off, review the learner's answer, correct misconceptions, and provide one next concrete activity. It SHOULD continue rather than repeat the whole initial teaching response. Output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Prior displayed content MUST NOT be treated as evidence.
- New learner output MAY become evidence when reviewed or assessed.
- The command SHOULD distinguish continuation from repetition.
- Saving a lesson note is a separate, explicitly invoked command and MUST NOT create evidence, mastery, completion, or a learner-state update.

## Failure Modes

- No in-progress lesson can be identified.
- Session history is missing or ambiguous.
- Domain pack content needed to continue is unavailable.
- Learner asks to continue but prerequisite evidence indicates review or assessment is more appropriate.

## Relationships

- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.
- State records are governed by `specification/STATE_SPEC.md`.
- Optional lesson-note export is governed by `commands/SAVE_LESSON.md`; `commands/SAVE_LESSON_TO_NOTION.md` is a compatibility alias.

## OPEN QUESTION

- How long should a lesson remain resumable before it becomes a review or restart candidate?

## Source: commands/SAVE_LESSON.md

# SAVE_LESSON Command

## Purpose

Export a grounded lesson note only after the learner explicitly invokes `SAVE_LESSON` or clearly asks to save the current lesson.

The optional learner-facing action is:

`SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz`

## Routing

- `SAVE_LESSON`, with no target, routes to `OBSIDIAN`.
- `SAVE_LESSON OBSIDIAN` routes to a downloadable UTF-8 Obsidian Markdown (`.md`) artifact.
- `SAVE_LESSON NOTION` routes to the connected Notion workflow.
- `SAVE_LESSON_TO_NOTION` remains a backward-compatible alias for `SAVE_LESSON NOTION`.
- A target MUST NOT be guessed when the learner explicitly names an unsupported format or destination. Explain the supported targets instead.

The command is explicit-only. Displaying the optional action MUST NOT invoke either exporter.

## Required Context

- Available lesson conversation and session context.
- Relevant domain pack and localization preferences, when available.
- Existing evidence or assessment results, when they already exist.
- `skills/lesson-summary-builder/SKILL.md`.
- The exporter skill selected by the routing rules.

## Normalized Summary

First use `skills/lesson-summary-builder/SKILL.md` to produce one normalized summary shared by both exporters. Include only grounded lesson identity, objective, concepts, examples, learner work, observed mistakes and corrections, existing evidence or assessment results, status, and next steps. Omit unsupported values and empty sections.

Building or exporting the summary MUST NOT create evidence, infer completion, change mastery, or mutate learner state.

## Obsidian Workflow

For the default or `OBSIDIAN` target, use `skills/obsidian-lesson-exporter/SKILL.md`.

1. Build the normalized summary.
2. Determine the stable session filename from grounded context.
3. Create a normal UTF-8 `.md` artifact when the runtime supports file creation.
4. Name or link the artifact only after creation succeeds.
5. If file creation is unavailable or fails, explain that honestly and return the complete note in one fenced block together with its intended filename.
6. On regeneration in the same session, reuse the filename and describe the new artifact as superseding the earlier export. Never claim to access, locate, or overwrite a file in an Obsidian vault.

## Notion Workflow

For the `NOTION` target or the compatibility alias, use `skills/notion-lesson-logger/SKILL.md` after building the same normalized summary. Preserve runtime-supplied target preference, journal discovery, duplicate handling, confirmation before new top-level journal creation, connector-confirmed success wording, and the Notion-ready Markdown fallback.

## Effects and Boundaries

- An Obsidian export is an ordinary Markdown artifact. Universal Learning OS does not access or write into an Obsidian vault.
- A Notion export is an external learner note written through the connected runtime tool.
- Neither export is canonical framework content, learner state, evidence, or a mastery record.
- Existing evidence and assessment results MAY be summarized without being changed.
- Success MUST be claimed only for the destination action actually confirmed by the runtime.
- Credentials, connector internals, opaque ids, local filesystem paths, and vault paths MUST NOT appear in the note or learner-facing result.

## Failure Modes

- No meaningful lesson context is available.
- The requested target is unsupported.
- Runtime file creation is unavailable or fails.
- The Notion connector is unavailable, denied, read-only, ambiguous, or lacks the required operation.

## Relationships

- Command behavior is governed by `specification/COMMAND_SPEC.md`.
- Summary normalization is defined by `skills/lesson-summary-builder/SKILL.md`.
- Obsidian rendering is defined by `skills/obsidian-lesson-exporter/SKILL.md`.
- Notion behavior is defined by `skills/notion-lesson-logger/SKILL.md`.
- Evidence, mastery, and state boundaries are governed by `specification/LEARNING_LIFECYCLE.md` and `specification/STATE_SPEC.md`.

## Source: commands/SAVE_LESSON_TO_NOTION.md

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
