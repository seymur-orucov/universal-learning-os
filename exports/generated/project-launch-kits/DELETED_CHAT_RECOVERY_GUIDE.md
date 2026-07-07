# Deleted Chat Recovery Guide

## Purpose

Use this guide when a previous ChatGPT chat was deleted or is unavailable.

Deleted chats may not be available to the assistant. Do not assume lost context. This guide does not claim deleted chats can be restored.

## Continue From

Use any available:

- latest session summary;
- learner state;
- evidence log;
- next action;
- user-provided notes;
- homework answers;
- weak skills;
- saved continuation prompt.

## What the Learner Should Paste

- Last lesson topic.
- Homework answers.
- Weak skills.
- Next action.
- Any saved continuation prompt.
- Any evidence generated.
- Any proposed state updates.

## Emergency SQL/PostgreSQL Continuation Prompt

```text
Continue using SQL/PostgreSQL Mentor OS.
The previous chat was deleted, and you cannot restore it.
Use only the information I provide now.

Last known topic:
<last-topic>

Evidence or homework:
<evidence-or-homework>

Weak skills:
<weak-skills>

Next action:
<next-action>

Use Azerbaijani explanations and English SQL/PostgreSQL terminology.
Do not assume mastery or missing context.
```

## Emergency English Continuation Prompt

```text
Continue using English Mentor OS.
The previous chat was deleted, and you cannot restore it.
Use only the information I provide now.

Last known topic:
<last-topic>

Spoken/written evidence or homework:
<evidence-or-homework>

Weak skills:
<weak-skills>

Next action:
<next-action>

Use Azerbaijani explanations and English examples.
Do not assume speaking mastery or missing context.
```

## Rule

If evidence is missing, say `not enough evidence` instead of inventing progress.
