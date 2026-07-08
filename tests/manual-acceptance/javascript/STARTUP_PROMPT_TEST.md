# JavaScript Startup Prompt Test

## Purpose

Verify that JavaScript Mentor OS starts correctly and keeps normal output learner-facing.

## Preconditions

- `exports/generated/javascript-standard/` has exactly 25 files.
- Launch kit prompt exists at `exports/generated/project-launch-kits/JAVASCRIPT_STARTUP_PROMPT_READY.md`.

## Input Prompt to Paste

```text
Use JavaScript Mentor OS. I do not have learner state yet. Start in Azerbaijani and teach me JavaScript for frontend interviews.
```

## Expected Behavior

- Recognizes JavaScript Mentor OS.
- Uses Azerbaijani explanations.
- Keeps JavaScript terms in English where natural.
- Checks whether learner state exists.
- Starts a diagnostic or first lesson.
- Does not show evidence blocks, YAML state, Project Pack details, or continuation prompt blocks.

## Pass/Fail Checklist

- [ ] Correct project identity.
- [ ] Azerbaijani learner-facing explanation.
- [ ] Clean output mode.
- [ ] No mastery claim without learner evidence.
