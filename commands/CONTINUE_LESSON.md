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
