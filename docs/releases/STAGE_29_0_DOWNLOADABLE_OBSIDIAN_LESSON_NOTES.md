# Stage 29.0 — Downloadable Obsidian Lesson Notes

## Summary

Stage 29.0 adds `SAVE_LESSON` as the generic explicit lesson-note export command. Its default and `OBSIDIAN` target produce a portable UTF-8 `.md` artifact; `NOTION` preserves the Stage 28 connected workflow. `SAVE_LESSON_TO_NOTION` remains backward compatible.

The stage introduces a shared grounded summary builder and an Obsidian exporter contract with stable English filenames, valid YAML frontmatter, localized domain-adaptive content, confirmed artifact wording, an honest complete-note fallback, and no plugin or vault dependency.

## Compatibility and Boundaries

- Seven canonical domains and fourteen generated packs remain supported.
- Standard packs remain exactly 25 files; compact packs remain exactly five files.
- `domains/**` and `learners/**` are not changed.
- Note creation does not create evidence, change mastery, infer completion, or mutate learner state.
- Universal Learning OS does not access or write into an Obsidian vault.
- Live ChatGPT artifact creation/download, opening in Obsidian, and connected Notion permissions remain manual checks.

## Validation

- Registry-driven tests cover routing, shared normalization, filenames, YAML, adaptive note fixtures, fallbacks, regeneration, closure timing, Notion compatibility, forbidden content, and file budgets.
- CLI validation checks all fourteen generated packs.
- Manual acceptance is documented in `tests/manual-acceptance/STAGE_29_0_OBSIDIAN_LESSON_NOTES_TEST.md`.
