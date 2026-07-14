# ChatGPT Project Setup

Use one generated domain pack as the source material for one ChatGPT Project. Generated packs are learner-neutral; your progress can remain inside the learning chat.

## Set up a Project

1. Create a new ChatGPT Project.
2. Choose one domain pack from `exports/generated/`.
3. Prefer a compact profile when Project file limits matter; use a standard profile when you want the fuller 25-file pack.
4. Upload the source files from the chosen pack directory.
5. Use `PROJECT_INSTRUCTIONS.md` as the Project instructions or reference it when configuring the Project.
6. Use `STARTUP_PROMPT.md` as the initial prompt.
7. Send `Start lesson` to begin.

For example, use all five files in `exports/generated/sql-postgresql-compact/` for a focused SQL/PostgreSQL Project.

For DSA, create a dedicated Project named `DSA Mentor` and use either all five files from `exports/generated/dsa-compact/` or all 25 files from `exports/generated/dsa-standard/`. JavaScript is the default language; TypeScript is supported when requested or useful for clarity.

Suggested first prompt:

```text
Start Lesson 1 for DSA using JavaScript. Teach me step by step and let me reason before showing the solution.
```

For Front-End System Design, create a dedicated Project named `Front-End System Design Mentor` and use either all five files from `exports/generated/frontend-system-design-compact/` or all 25 files from `exports/generated/frontend-system-design-standard/`.

Suggested first prompt:

```text
Start Lesson 1 for Front-End System Design. Teach me at Senior Front-End Engineer level and make me reason about requirements, architecture boundaries, and trade-offs.
```

Suggested interview prompt:

```text
Start a Front-End System Design interview simulation. Give me an ambiguous design problem, let me drive the requirements and architecture, then review my decisions.
```

For Node.js, create a dedicated Project named `Node.js Backend Mentor` and use either all five files from `exports/generated/nodejs-compact/` or all 25 files from `exports/generated/nodejs-standard/`. Teach runtime and HTTP before Fastify/Express, keep PostgreSQL and SQL reasoning explicit, and use NestJS only as a later specialization.

Suggested first prompt:

```text
Start Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks.
```

Suggested project prompt:

```text
Start a practical Node.js API project using TypeScript and PostgreSQL. Guide me step by step, but let me make architecture and implementation decisions before showing full solutions.
```

## Learn in the Project

- Start a lesson: `Start lesson`
- Continue: `Continue the lesson from where we stopped.`
- Practice: `Give me practice tasks and feedback.`
- Review: `Review my homework and explain the mistakes clearly.`
- Download a grounded Obsidian Markdown lesson note: `SAVE_LESSON`
- Save the same grounded summary to connected Notion: `SAVE_LESSON NOTION` (legacy alias: `SAVE_LESSON_TO_NOTION`)

The generic export action is optional, appears only at a lesson summary or meaningful stopping point, and requires an explicit request. The default route creates a normal UTF-8 `.md` artifact without accessing an Obsidian vault; if file creation fails, ChatGPT returns the intended filename and complete note in one fenced block. Notion create/update wording must be connector-confirmed; otherwise ChatGPT returns a clean Markdown draft. Neither route creates evidence, mastery, completion, or a learner-state update. See `docs/integrations/OBSIDIAN_LESSON_NOTES.md` and `docs/integrations/NOTION_LESSON_JOURNAL.md`.

Ask for a handoff only when moving between chats. Ask for a snapshot only when exporting progress. These are optional, user-requested continuity aids; they are not required after every lesson.

## Keep Projects focused

- Prefer one learning domain per ChatGPT Project.
- Do not upload unrelated packs to the same Project unless you intentionally want a mixed mentor.
- Do not treat generated pack files as learner-progress records; they remain reusable and learner-neutral.
- Let normal lesson, practice, review, and homework activity stay in the learning chat.
- Do not place integration tokens, credentials, opaque ids, local paths, or Obsidian vault paths in Project files or repository content.

Studio is optional: it can help inspect or validate packs locally, but it is not needed to create or use a ChatGPT Project and is not the learning runtime.
