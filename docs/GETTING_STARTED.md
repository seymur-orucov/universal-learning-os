# Getting Started with PLOS

PLOS (Personal Learning Operating System) is a reusable learning framework that provides generated, learner-neutral domain packs for guided learning in ChatGPT Projects.

It is not a full LMS, a learner database, a replacement for ChatGPT, or a requirement to update this repository after every lesson. Your daily learning happens in ChatGPT; the repository supplies and maintains the reusable framework.

## The simplest workflow

1. Choose one domain.
2. Choose a compact or standard generated pack.
3. Upload that pack's files to a ChatGPT Project.
4. Start a lesson.
5. Continue learning in ChatGPT.

Use a compact pack when ChatGPT Project file limits matter or you want the smallest focused setup. Use a standard pack when you want the fuller supporting material and have room for its 25 files.

Generated packs are in `exports/generated/`. Start with one of these compact packs:

- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`
- `exports/generated/typescript-compact/`

For the full profile, choose the corresponding `*-standard/` directory.

## What to type in the ChatGPT Project

After uploading a pack, send:

```text
Start lesson
```

Or be more specific:

```text
Start Lesson 1 for SQL/PostgreSQL. Teach me step by step, give examples, practice tasks, feedback, and homework.
```

## Which tool is for what?

- **ChatGPT Project:** your daily learning space for lessons, practice, feedback, and review.
- **CLI:** the source of truth for listing domains, validating packs, inspecting packs, generation, and optional handoff/snapshot helpers.
- **Codex/repository:** framework maintenance, domain-pack work, validation, and deliberate improvements—not a daily learning log.
- **Studio:** an optional local control panel for inspection, validation, and helper scaffolds. It is not the learning runtime and is not required to learn with PLOS.

Keep learner progress in the learning chat unless you deliberately request a handoff when moving chats or a snapshot when exporting progress. Do not update the repository after every lesson, and do not place sensitive personal data in repository artifacts.

For the detailed upload workflow, see [ChatGPT Project setup](CHATGPT_PROJECT_SETUP.md). For the first real-world validation plan, see [Real Learning Pilot](REAL_LEARNING_PILOT.md).
