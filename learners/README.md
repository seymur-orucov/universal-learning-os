# Learner State

Learner state is mutable learner-specific progress data.

It is separate from domain packs, framework specifications, commands, and agent skills. Learner state MAY reference domain learning skills, but MUST NOT duplicate domain pack content or redefine learning skills.

Learner state may contain evidence references, review items, session history, and next actions.

## Structure

- `learners/_template/` is a reference structure for future learner state files.
- `learners/_template/` is not real learner data.
- No real learner profile or progress data should be added without explicit instruction and evidence.

## Boundaries

- Learner state MUST be learner-specific.
- Learner state MUST NOT contain reusable domain pack content.
- Learner state MUST NOT mark mastery without evidence or explicit user instruction.
- Missing evidence MUST be reported honestly.

## OPEN QUESTION

- Should sample learner state live under tests after schemas exist, or remain documentation-only?

