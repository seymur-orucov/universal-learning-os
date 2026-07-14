# Commands

Commands are user-invoked workflow contracts stored under `commands/`.

They describe how ChatGPT Projects, OpenAI Codex, IDE agents, or future applications SHOULD interpret learning workflows. Command files are human-readable contracts, not executable implementations, scripts, or agent skills.

Commands are governed by `specification/COMMAND_SPEC.md`.

## Localization

Commands that produce user-facing teaching output SHOULD respect localization preferences.

Instruction language and terminology language are defined in `specification/LOCALIZATION_SPEC.md`. Project-level defaults MAY specify preferences such as:

- `instruction_language`: Azerbaijani
- `terminology_language`: English

These are configurable project or learner preferences, not global framework defaults.

## Initial Commands

- `commands/START_TRACK.md`: initialize or switch to a learning track.
- `commands/START_LESSON.md`: start the next appropriate lesson.
- `commands/CONTINUE_LESSON.md`: continue an in-progress lesson.
- `commands/PRACTICE.md`: run practice without necessarily teaching a full lesson.
- `commands/REVIEW.md`: review weak, stale, failed, or user-selected learning skills.
- `commands/ASSESS.md`: evaluate learner competence.
- `commands/START_PROJECT.md`: start or continue a realistic learning project.
- `commands/INTERVIEW.md`: run an interview-style learning session.
- `commands/SHOW_PROGRESS.md`: summarize learner state and progress.
- `commands/SAVE_LESSON.md`: explicitly export a grounded lesson note as a downloadable Obsidian Markdown file by default or route it to connected Notion.
- `commands/SAVE_LESSON_TO_NOTION.md`: backward-compatible alias for `SAVE_LESSON NOTION`; it is callable but not shown as a second closure suggestion.

## Boundaries

- Commands MUST be user-invoked workflows, not reusable agent skills.
- Commands MUST NOT be treated as executable scripts.
- Commands MUST NOT silently modify learner state.
- Commands SHOULD cross-reference canonical specifications instead of duplicating them.

## OPEN QUESTION

- Should future command contracts include machine-readable metadata in addition to Markdown?
