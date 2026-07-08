# JavaScript Continuation Prompt Behavior Test

## Purpose

Verify that continuation prompt blocks appear only when requested.

## Test A: Normal Continuation

### Input Prompt to Paste

```text
CONTINUE_LESSON. Continue from promises and async/await. Keep it learner-facing.
```

### Expected Behavior

- Continues the lesson.
- Does not show a continuation prompt block.
- Does not show evidence/state metadata unless requested.

## Test B: Explicit Continuation Prompt Request

### Input Prompt to Paste

```text
Create a continuation prompt for my next JavaScript Mentor OS chat.
```

### Expected Behavior

- Provides a continuation prompt block.
- Includes previous summary, evidence, proposed updates, next action, and learner request placeholders if details are missing.
- Makes clear that the block is for the next chat.
