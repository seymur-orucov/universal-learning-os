# TypeScript Learner-Facing Output Mode Test

## Purpose

Verify normal TypeScript answers hide framework metadata by default.

## Input Prompt

```text
Explain `type` vs `interface` with one small example. Do not show progress details.
```

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
- TypeScript terms remain in English where natural.
- One small practical example.
