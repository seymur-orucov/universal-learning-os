# Generated Pack Smoke Test

## Purpose

Manually smoke-test each generated Project Pack profile in ChatGPT Projects without creating learner-specific repository state.

## Matrix

Run this short flow for each domain/profile pair:

- `sql-postgresql` standard and compact.
- `english` standard and compact.
- `javascript` standard and compact.
- `typescript` standard and compact.

## Flow

1. Open the matching launch kit under `exports/generated/project-launch-kits/`.
2. Create or inspect the ChatGPT Project setup instructions.
3. Upload the source files listed in the launch kit upload file list.
4. Paste the matching startup prompt.
5. Ask for the first lesson.
6. Ask for one practice task and submit a short learner attempt.
7. Ask for review of the attempt.
8. Ask `SHOW_PROGRESS`.
9. Confirm normal lesson/practice/review output hides metadata by default.
10. Confirm progress metadata appears only when explicitly requested.

## Expected Result

- The pack starts cleanly.
- The mentor asks for learner output before claiming evidence.
- Evidence and proposed state updates are not shown during normal teaching.
- `SHOW_PROGRESS` separates observed evidence from recommendations.
- No repository learner state update is required after every lesson.
