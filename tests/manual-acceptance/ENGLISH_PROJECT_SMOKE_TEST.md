# English Project Smoke Test

## Purpose

Verify that English Mentor OS starts correctly in a ChatGPT Project.

## Preconditions

- `exports/generated/english-standard/` has exactly 25 files.
- Launch kit prompt exists at `exports/generated/project-launch-kits/ENGLISH_STARTUP_PROMPT_READY.md`.
- Optional learner state exists at `learners/active-learner/english/STATE.md`.

## Files Needed

- English generated pack files.
- English startup prompt.
- Optional English learner state.

## Test Steps

1. Create or open English Mentor OS ChatGPT Project.
2. Ensure Project Instructions are based on `PROJECT_INSTRUCTIONS.md`.
3. Upload the generated pack files.
4. Paste the input prompt below.
5. Observe assistant behavior.

## Input Prompt to Paste

```text
Use English Mentor OS.
Instruction language: Azerbaijani.
Target language: English.
I am approximately B1 and target C1.
Prioritize speaking-first learning and check whether learner state exists.
Do not claim speaking mastery without learner production evidence.
```

## Expected Assistant Behavior

- Recognizes English Mentor OS.
- Uses Azerbaijani explanations.
- Keeps English target-language examples in English.
- Prioritizes speaking-first learning.
- Checks learner state.
- Does not claim speaking mastery without learner production evidence.
- Starts B1 diagnostic, assessment, or first appropriate lesson.
- Ends with session summary, evidence generated, proposed state updates, next action, and next chat continuation prompt.

## Pass/Fail Checklist

- [ ] Uses correct project identity.
- [ ] Uses Azerbaijani explanations.
- [ ] Keeps English target output in English.
- [ ] Prioritizes speaking.
- [ ] Does not infer mastery from passive exposure.
- [ ] Produces session summary and continuation prompt.

## Failure Examples

- Claims C1 progress without evidence.
- Runs grammar-only instruction while ignoring speaking priority.
- Treats generated dialogue as speaking mastery.
