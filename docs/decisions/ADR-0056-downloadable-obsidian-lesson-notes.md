# ADR-0056: Downloadable Obsidian Lesson Notes

## Status

Accepted

## Context

Stage 28 added optional Notion lesson journaling, but learners also need a connector-independent, portable note they control. The new workflow must not duplicate extraction truth rules, claim access to local Obsidian vaults, weaken evidence/mastery boundaries, or change the established 25/5 generated pack budgets.

## Decision

- Add generic explicit-only `SAVE_LESSON` routing: no target or `OBSIDIAN` creates a UTF-8 `.md` artifact; `NOTION` uses the connected workflow.
- Retain `SAVE_LESSON_TO_NOTION` as a callable compatibility alias without displaying a second closure action.
- Introduce `lesson-summary-builder` as the destination-neutral grounded model shared by both exporters.
- Introduce `obsidian-lesson-exporter` for stable English filenames, valid YAML, adaptive portable Markdown, confirmed artifact semantics, honest one-block fallback, and stable session regeneration.
- State explicitly that Universal Learning OS produces a normal Markdown artifact and does not access or write an Obsidian vault.
- Keep standard packs at 25 files through a three-source command merge and four-source lesson skill merge.
- Keep compact packs at five files by including all canonical sources in the existing command and mentor skill cores.
- Extend validation and registry-driven tests rather than adding a CLI/runtime lesson exporter.

## Consequences

- Learners can download or manually save portable notes without connecting Notion.
- Actual ChatGPT file creation/download and local Obsidian opening remain manual runtime checks.
- Both exporters share omission, evidence, assessment, mastery, completion, localization, and next-step truthfulness rules.
- Regeneration can supersede a prior runtime artifact but cannot claim to overwrite a learner's local or vault file.
- All seven domains inherit the capability without domain-specific branches or canonical domain edits.

## Related Documents

- `commands/SAVE_LESSON.md`
- `skills/lesson-summary-builder/SKILL.md`
- `skills/obsidian-lesson-exporter/SKILL.md`
- `skills/notion-lesson-logger/SKILL.md`
- `docs/integrations/OBSIDIAN_LESSON_NOTES.md`
- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`
