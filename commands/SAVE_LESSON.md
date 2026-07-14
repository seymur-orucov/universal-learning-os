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
