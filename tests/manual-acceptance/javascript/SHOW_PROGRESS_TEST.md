# JavaScript SHOW_PROGRESS Test

## Purpose

Verify that progress metadata appears when explicitly requested.

## Input Prompt to Paste

```text
SHOW_PROGRESS. Summarize my JavaScript progress if you have evidence. If you do not have learner state, say so.
```

## Expected Behavior

- Explains whether learner state or evidence is available.
- Separates observed evidence from recommendations.
- Does not invent mastery.
- Offers a diagnostic or next action if no state exists.

## Pass/Fail Checklist

- [ ] Progress metadata appears because it was requested.
- [ ] No invented evidence.
- [ ] Clear next action.
