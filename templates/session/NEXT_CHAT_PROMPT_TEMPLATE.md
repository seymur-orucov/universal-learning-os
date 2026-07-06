# Next Chat Prompt Template

This template defines a reusable prompt for continuing in a new ChatGPT Project chat.

## Active Domain

`<active-domain-id-and-title>`

## Active Track

`<active-track-id-and-title>`

## Current Lesson or Target Learning Skill

`<current-lesson-or-target-learning-skill>`

## Completed Activity Summary

`<completed-activity-summary>`

## Evidence Summary

`<evidence-summary>`

## Weak Areas

- `<weak-area>`

## Pending Review

- `<pending-review-item>`

## Next Recommended Command

`<next-recommended-command>`

## Localization Preferences

- Instruction language: `<instruction-language>`
- Terminology language: `<terminology-language>`
- Glossary preference: `<glossary-preference>`

## Continuation Instruction

Continue from the current learner state, using the active domain pack, pending review items, available evidence, and next recommended command. Do not assume mastery without evidence.

## Normative Notes

- This prompt MUST NOT contain real learner data unless explicitly generated from an authorized learner state.
- Localization preferences SHOULD follow `specification/LOCALIZATION_SPEC.md`.
- A project preference MAY use Azerbaijani instruction with English technical terms, but this MUST NOT be hardcoded as the global framework language.

## OPEN QUESTION

- Should next chat prompts be stored in learner state or generated on demand?

