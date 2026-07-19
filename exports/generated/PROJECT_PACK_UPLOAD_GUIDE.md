# Project Pack Upload Guide

## Purpose

This guide explains how to use a generated Project Pack in ChatGPT Projects.

Generated Project Packs are reusable context. They are not learner state, not canonical framework source, and not executable tooling.

## General Upload Steps

1. Create a new ChatGPT Project.
2. Paste or adapt `PROJECT_INSTRUCTIONS.md` into Project Instructions.
3. Upload the remaining pack files as project knowledge/source files.
4. Start a new chat with `STARTUP_PROMPT.md`.
5. Continue future chats with `CONTINUATION_PROMPT.md` and the previous session summary.

Use the `standard` profile for Plus/Go or higher Project usage when 25 files are available. Use the `compact` profile for Free Project usage or other low-file-budget usage when only 5 files are available.

Standard packs must remain exactly 25 files. Compact packs must remain exactly 5 files.

## Learner State Boundary

The pack is reusable content. Session summaries, learner evidence, review queues, next actions, and learner state SHOULD be maintained separately from the Project Pack.

Learner progress MUST NOT be inferred from upload, project setup, lesson exposure, generated content, or file inclusion.

## SQL/PostgreSQL Mentor OS

Use `exports/generated/sql-postgresql-standard/`.

- Paste `PROJECT_INSTRUCTIONS.md` into Project Instructions.
- Upload the other 24 files, or upload all 25 if the environment treats Project Instructions as a source file.
- Start with `STARTUP_PROMPT.md`.
- Use Azerbaijani instruction with SQL/PostgreSQL technical terms in English where natural.
- Keep learner SQL attempts, assessment results, weak learning skills, and next actions in learner state or session summaries.

Compact/free option: use `exports/generated/sql-postgresql-compact/` and upload only `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

## English Mentor OS

Use `exports/generated/english-standard/`.

- Paste `PROJECT_INSTRUCTIONS.md` into Project Instructions.
- Upload the other 24 files, or upload all 25 if the environment treats Project Instructions as a source file.
- Start with `STARTUP_PROMPT.md`.
- Use Azerbaijani instruction with English as the target language.
- Keep spoken or written attempts, reviewed summaries, weak learning skills, privacy notes, and next actions in learner state or session summaries.

Compact/free option: use `exports/generated/english-compact/` and upload only `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

## JavaScript Mentor OS

Use `exports/generated/javascript-standard/`.

- Paste `PROJECT_INSTRUCTIONS.md` into Project Instructions.
- Upload the other 24 files, or upload all 25 if the environment treats Project Instructions as a source file.
- Start with `STARTUP_PROMPT.md`.
- Use Azerbaijani instruction with JavaScript technical terms in English where natural.
- Keep code attempts, reviewed explanations, weak learning skills, and next actions in learner state or session summaries.

Compact/free option: use `exports/generated/javascript-compact/` and upload only `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

## TypeScript Mentor OS

Use `exports/generated/typescript-standard/`.

- Paste `PROJECT_INSTRUCTIONS.md` into Project Instructions.
- Upload the other 24 files, or upload all 25 if the environment treats Project Instructions as a source file.
- Start with `STARTUP_PROMPT.md`.
- Use Azerbaijani instruction with TypeScript technical terms in English where natural.
- Keep typed code attempts, type-error fixes, reviewed explanations, weak learning skills, and next actions in learner state or session summaries.

Compact/free option: use `exports/generated/typescript-compact/` and upload only `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

## OPEN QUESTION

- Should future generated packs provide a reduced 24-file upload profile for environments where Project Instructions are counted separately?
