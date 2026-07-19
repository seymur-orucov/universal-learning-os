# Downloadable Obsidian Lesson Notes

## Purpose

At meaningful lesson closure, Universal Learning OS may show one optional action:

`SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz`

Invoking `SAVE_LESSON` with no target, or with `OBSIDIAN`, asks the runtime to create a portable UTF-8 Markdown (`.md`) lesson note. The file is normal Markdown that can be opened, moved, or imported into Obsidian.

Universal Learning OS does not access, inspect, select, or write into an Obsidian vault. The learner decides where to place a successfully downloaded artifact.

## Runtime Behavior

1. The assistant builds one grounded normalized summary from the available lesson context.
2. It omits unsupported values and empty sections; displayed instruction is not learner evidence.
3. It derives a stable ASCII/English `.md` filename for the current lesson session.
4. It renders valid YAML frontmatter and localized, domain-adaptive Markdown without plugin dependencies.
5. It prefers a real runtime-created downloadable artifact and names or links it only after creation succeeds.
6. If file creation is unavailable or fails, it states that honestly and returns the intended filename plus the complete note in one fenced block for manual saving.
7. Regeneration reuses the stable filename and supersedes the earlier session artifact without claiming that a local or vault file was overwritten.

## Filename and Frontmatter

The preferred filename is `Lesson NN - English Title.md`. Unknown lesson numbers are omitted. Unsafe and non-English filename characters are sanitized. When no reliable title exists, the fallback is `Lesson Notes - YYYY-MM-DD.md` or, without a reliable date, `Lesson Notes.md`.

Frontmatter always contains `type`, `title`, `mastery`, `status`, and `plos`/`lesson` tags. Date, domain, track, module, lesson, a domain tag, and aliases appear only when grounded. `mastery` defaults to `not-assessed`; an existing assessment-derived value may be preserved but never created or changed. `status` remains `in-progress` unless meaningful completion is known.

## Note Quality

The note follows the learner's instruction language while preserving configured domain terminology. It uses callouts, tables, fenced code, restrained wikilinks, and recall questions only when useful for the grounded lesson. Recall answers appear later. No Dataview, Templater, Tasks, or other Obsidian plugin is required.

## Notion Routing

`SAVE_LESSON NOTION` uses the same grounded summary and routes to the existing connected Notion workflow. `SAVE_LESSON_TO_NOTION` remains a callable compatibility alias but is not displayed as another closure suggestion. See [Optional Notion Lesson Journal](NOTION_LESSON_JOURNAL.md).

## Learning Boundaries

Creating, downloading, regenerating, or manually saving a note does not create evidence, mark mastery, infer completion, or update learner state. Existing learner work, mistakes, evidence, or assessment results may be summarized only when already grounded.

## Manual Verification

Repository tests validate contracts and generated pack content. They cannot prove ChatGPT file-attachment behavior, successful download, or opening/import in a local Obsidian installation. Use `tests/manual-acceptance/STAGE_29_0_OBSIDIAN_LESSON_NOTES_TEST.md` for those checks.
