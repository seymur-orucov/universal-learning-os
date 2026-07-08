# Compact Learner-Facing Output Mode Test

## Purpose

Verify compact packs preserve Learner-Facing Mentor Mode.

## Input Prompt

```text
Explain one beginner concept and give me one practice question. Do not show progress details.
```

Run once in each compact project: SQL/PostgreSQL, English, JavaScript, and TypeScript.

## Must Not Appear

- `Evidence Generated`
- `Proposed State Updates`
- YAML learner state updates
- internal skill IDs
- mastery level tables
- Project Pack implementation details
- learner state architecture explanations
- continuation prompt blocks
- audit/debug notes

## Expected Behavior

- Clean learner-facing explanation.
- One focused practice question.
- No progress/state metadata.
