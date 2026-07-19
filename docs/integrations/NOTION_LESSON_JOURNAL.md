# Optional Notion Lesson Journal

## Purpose

Universal Learning OS offers one generic optional lesson-note action at meaningful lesson closure:

`SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz`

The learner must invoke `SAVE_LESSON NOTION` explicitly to use Notion. `SAVE_LESSON_TO_NOTION` remains a callable compatibility alias but is not shown as another suggestion. Both routes use the shared grounded summary model. The repository provides behavior contracts only; ChatGPT's connected Notion tool performs any read or write.

## Setup

1. Use a generated standard or compact pack in a ChatGPT Project.
2. Connect Notion in the ChatGPT runtime and grant only the access you intend to use.
3. Optionally provide a journal target at runtime. Do not add credentials or opaque target ids to this repository or a Project Pack.
4. If no target is supplied, the assistant searches for an exact or clear `PLOS Learning Journal` match when supported.

No Notion API client, token, credential, target id, or learner journal data is stored in Universal Learning OS.

## Runtime Behavior

- The generic action appears at most once with a lesson summary or meaningful stopping point, not during intermediate teaching or unfinished practice.
- Displaying the action never starts a write.
- On explicit invocation, the assistant prepares a deterministic title from available date, domain, and lesson identity, omitting missing values honestly.
- The assistant searches for a same-lesson entry where supported and updates one unambiguous match.
- Ambiguous matches require learner choice. If updating is unsupported, the assistant asks before creating a duplicate.
- A supplied target wins. Otherwise the assistant searches for `PLOS Learning Journal`.
- If no journal exists, the assistant prepares the entry and asks before creating a new top-level journal. It prefers a database when supported, otherwise a parent page with child pages.
- The assistant says `created` or `updated` only after the connector confirms success.

## Failure Fallback

When the connector is unavailable, disconnected, denied, read-only, or unsupported, the assistant explains the failure and returns clean Notion-compatible Markdown for manual copy/paste. It does not claim a write.

## Learning Boundaries

A journal entry is a learner note. Saving or drafting it does not create evidence, mark a skill mastered, or update learner state. Existing observed evidence may be summarized, but the journal is not its canonical store.

Generic routing is defined in `commands/SAVE_LESSON.md`, normalization in `skills/lesson-summary-builder/SKILL.md`, alias compatibility in `commands/SAVE_LESSON_TO_NOTION.md`, and connector behavior in `skills/notion-lesson-logger/SKILL.md`.

## Manual Verification

Repository tests can verify pack inclusion and contract language, but cannot prove live connector authentication, permissions, target discovery, create/update success, or duplicate resolution. Use `tests/manual-acceptance/STAGE_28_0_NOTION_LESSON_JOURNAL_TEST.md` in a connected ChatGPT runtime.
