# Compact Continuation Prompt Behavior Test

## Purpose

Verify compact packs show continuation prompt blocks only when explicitly requested.

## Test A: Normal Continue

Input:

```text
CONTINUE_LESSON. Continue in learner-facing mode.
```

Expected: continues the lesson and does not show a continuation prompt block.

## Test B: Explicit Continuation Prompt Request

Input:

```text
Create a continuation prompt for my next compact chat.
```

Expected: provides a continuation prompt block with placeholders or available session details.

## Pass/Fail Checklist

- [ ] SQL compact follows both behaviors.
- [ ] English compact follows both behaviors.
- [ ] JavaScript compact follows both behaviors.
