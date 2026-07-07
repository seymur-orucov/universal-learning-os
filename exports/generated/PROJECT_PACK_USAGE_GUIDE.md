# Project Pack Usage Guide

## Day-to-Day Commands

- `START_LESSON`: begin the next appropriate lesson.
- `CONTINUE_LESSON`: continue from a previous session or session report.
- `PRACTICE`: run targeted practice without a full lesson.
- `REVIEW`: revisit weak, stale, failed, or user-selected learning skills.
- `ASSESS`: evaluate competence from evidence.
- `SHOW_PROGRESS`: summarize learner state without modifying it by default.

## Continuing Between Chats

At the end of each session, keep a session summary with:

- command used;
- target learning skill;
- learner output summary;
- evidence generated;
- feedback;
- weak skills;
- proposed state updates;
- review items;
- next action.

Start the next chat with `CONTINUATION_PROMPT.md` and paste the previous session summary.

## Preserving Evidence

Preserve evidence such as:

- homework answers;
- SQL queries;
- spoken or written attempts;
- assessment results;
- reviewed project or portfolio artifacts;
- weak skills;
- next actions.

Evidence SHOULD be captured, summarized, or reviewed. Lesson exposure, generated files, passive listening, project setup, or file inclusion MUST NOT imply mastery.

## When No Learner State Exists

Use `STARTUP_PROMPT.md`. Ask the assistant to resolve current level, learner goal, active domain, and preferred command. Begin with safe baseline checks and do not create mastery records.

## When a Previous Chat Was Deleted

Use the latest saved session summary if available. If no summary exists, tell the assistant what you remember and ask it to mark missing evidence honestly. Do not reconstruct mastery from memory unless the user explicitly instructs a state update.

## SQL/PostgreSQL Startup Example

```text
Use the SQL/PostgreSQL Mentor OS pack. Start `sql-postgresql.main`.
Instruction language: Azerbaijani. Keep SQL/PostgreSQL terms in English.
No learner state exists yet. Start with beginner-safe baseline checks and recommend the first lesson or practice.
```

## English Startup Example

```text
Use the English Mentor OS pack. Start `english.main`.
Instruction language: Azerbaijani. Target language: English.
No learner state exists yet. Start with B1-safe baseline checks for speaking, grammar, vocabulary, listening, and workplace communication.
```

## Continuation Example

```text
Previous Session Summary:
<paste summary>

Evidence Generated:
<paste evidence>

Proposed State Updates:
<paste proposed updates>

Next Action:
<paste next action>

Learner Request:
Continue with the recommended next action.
```

## Azerbaijani-Friendly Usage Notes

- İzahları Azərbaycan dilində istəyə bilərsiniz.
- SQL/PostgreSQL pack-də technical terms adətən English qalsın.
- English pack-də examples, phrases və learner output English qalsın.
- “Mən bunu oxudum” mastery demək deyil; mastery üçün evidence lazımdır.
- Hər dərsdən sonra session summary saxlayın.

## OPEN QUESTION

- Should future usage guides include screenshots or product-specific upload steps?
