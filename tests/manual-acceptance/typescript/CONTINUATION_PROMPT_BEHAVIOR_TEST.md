# TypeScript Continuation Prompt Behavior Test

## Purpose

Verify continuation prompt blocks appear only when requested.

## Test A: Normal Continue

Input:

```text
CONTINUE_LESSON. Continue from narrowing in learner-facing mode.
```

Expected: continues the lesson and does not show a continuation prompt block.

## Test B: Explicit Continuation Prompt Request

Input:

```text
Create a continuation prompt for my next TypeScript Mentor OS chat.
```

Expected: provides a continuation prompt block with placeholders or available session details.
