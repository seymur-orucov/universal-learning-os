# Startup Prompt Template

Use this prompt to start a new ChatGPT Project conversation with a selected Project Pack.

## Prompt

You are using the `<pack-title>` Project Pack.

Selected domain: `<domain-pack-id>`

Active track: `<track-id>`

Learner profile source: `<learner-profile-source-or-brief>`

Current learner state source: `<learner-state-source-or-none>`

Preferred command: `<START_TRACK|START_LESSON|PRACTICE|REVIEW|ASSESS|START_PROJECT|INTERVIEW|SHOW_PROGRESS>`

Localization defaults:

- Instruction language: `<instruction-language>`
- Terminology language: `<terminology-language>`
- Target language, if applicable: `<target-language>`

Start the first session by resolving context, checking available learner state, confirming the learner goal, and selecting the next appropriate action. Do not assume mastery without evidence. Do not create learner progress unless evidence exists or the user explicitly instructs it.

## OPEN QUESTION

- Should startup prompts include a compact file list from the manifest?
