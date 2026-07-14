# Getting Started with PLOS

PLOS (Personal Learning Operating System) is a reusable learning framework that provides generated, learner-neutral domain packs for guided learning in ChatGPT Projects.

It is not a full LMS, a learner database, a replacement for ChatGPT, or a requirement to update this repository after every lesson. Your daily learning happens in ChatGPT; the repository supplies and maintains the reusable framework.

## The simplest workflow

1. Choose one domain.
2. Choose a compact or standard generated pack.
3. Upload that pack's files to a ChatGPT Project.
4. Start a lesson.
5. Continue learning in ChatGPT.
6. Optionally invoke `SAVE_LESSON` at meaningful lesson closure to download an Obsidian Markdown note, or `SAVE_LESSON NOTION` when you have connected Notion.

Use a compact pack when ChatGPT Project file limits matter or you want the smallest focused setup. Use a standard pack when you want the fuller supporting material and have room for its 25 files.

Generated packs are in `exports/generated/`. Start with one of these compact packs:

- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`
- `exports/generated/dsa-compact/`
- `exports/generated/frontend-system-design-compact/`
- `exports/generated/nodejs-compact/`

For the full profile, choose the corresponding `*-standard/` directory.

For DSA, use `exports/generated/dsa-compact/` or `exports/generated/dsa-standard/` in a dedicated ChatGPT Project named `DSA Mentor`. JavaScript is the default implementation language; request TypeScript when useful. Studio remains optional.

For Front-End System Design, use `exports/generated/frontend-system-design-compact/` or `exports/generated/frontend-system-design-standard/` in a dedicated Project named `Front-End System Design Mentor`. Prefer one domain per Project. Studio remains optional.

For Node.js, use `exports/generated/nodejs-compact/` or `exports/generated/nodejs-standard/` in a dedicated Project named `Node.js Backend Mentor`. The track is runtime-first, uses TypeScript for backend projects, preserves SQL reasoning with PostgreSQL, and treats NestJS as a later specialization. Prefer one domain per Project. Studio remains optional.

## What to type in the ChatGPT Project

After uploading a pack, send:

```text
Start lesson
```

Or be more specific:

```text
Start Lesson 1 for SQL/PostgreSQL. Teach me step by step, give examples, practice tasks, feedback, and homework.
```

DSA example:

```text
Start Lesson 1 for DSA using JavaScript. Teach me step by step, let me reason before showing solutions, include coding practice, edge cases, and time/space complexity.
```

Front-End System Design example:

```text
Start Lesson 1 for Front-End System Design. Teach me as a Senior Front-End Engineer, ask me to clarify requirements and reason about trade-offs before showing a complete design.
```

Node.js example:

```text
Start Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks and include practical TypeScript exercises.
```

## Which tool is for what?

- **ChatGPT Project:** your daily learning space for lessons, practice, feedback, and review.
- **CLI:** the source of truth for listing domains, validating packs, inspecting packs, generation, and optional handoff/snapshot helpers.
- **Codex/repository:** framework maintenance, domain-pack work, validation, and deliberate improvements—not a daily learning log.
- **Studio:** an optional local control panel for inspection, validation, and helper scaffolds. It is not the learning runtime and is not required to learn with PLOS.

Keep learner progress in the learning chat unless you deliberately request a handoff when moving chats or a snapshot when exporting progress. Do not update the repository after every lesson, and do not place sensitive personal data in repository artifacts.

Lesson-note export is external to learner state and never runs automatically. With no target, `SAVE_LESSON` produces a normal portable Markdown artifact that you may place in Obsidian yourself; PLOS does not access your vault. If runtime file creation is unavailable, ChatGPT should return the complete note in one fenced block. `SAVE_LESSON NOTION` uses the connected workflow, while `SAVE_LESSON_TO_NOTION` remains an alias. See [Downloadable Obsidian Lesson Notes](integrations/OBSIDIAN_LESSON_NOTES.md) and [Optional Notion Lesson Journal](integrations/NOTION_LESSON_JOURNAL.md).

For the detailed upload workflow, see [ChatGPT Project setup](CHATGPT_PROJECT_SETUP.md). For the first real-world validation plan, see [Real Learning Pilot](REAL_LEARNING_PILOT.md).
