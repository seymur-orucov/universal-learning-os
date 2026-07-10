# Stage 27.1 Deep Teaching Manual Acceptance Test

## Preconditions

- Use regenerated SQL/PostgreSQL standard or compact Project Pack files.
- Start with no claimed mastery for the target lesson.
- Keep Learner-Facing Mentor Mode enabled.

## Scenario 1: SQL Lesson 1 Teaching First

Input:

```text
START_LESSON
```

Confirm:

- [ ] The response teaches substantially before requesting learner work.
- [ ] It provides the lesson title/objective and connects to available prior knowledge.
- [ ] It gives a relational-model mental model, essential terminology, a minimal example, and a realistic prerequisite-safe example.
- [ ] It covers a relevant misconception, such as treating one oversized table as the default design.
- [ ] It requests exactly one guided knowledge check or guided action.
- [ ] It says the lesson will continue after the learner responds.
- [ ] It does not require a many-to-many relationship, bridge table, normalization, or key implementation details.
- [ ] It does not show internal phase names, skill ids, evidence records, state updates, or framework metadata.

## Scenario 2: SQL Many-to-Many Lesson

At Lesson 14, use a students/courses example.

Confirm:

- [ ] The model uses `students`, `courses`, and `enrollments`.
- [ ] The bridge table and relationship cardinality are explained before independent use.
- [ ] The task is technically correct and does not force the scenario into two tables.
- [ ] Independent practice follows explanation and guided work.

## Scenario 3: Explicit Challenge-First Mode

Input:

```text
Start Lesson 1 in challenge-first mode.
```

Confirm:

- [ ] A diagnostic or challenge may precede explanation.
- [ ] The assistant treats this as an intentional explicit exception.
- [ ] Later feedback supplies missing teaching and repairs misconceptions.
- [ ] The response still requests only one clear learner action.

## Scenario 4: Multi-Turn Continuation

After answering the guided check, input:

```text
CONTINUE_LESSON
```

Confirm:

- [ ] The assistant reviews the learner's answer.
- [ ] It corrects misconceptions before advancing.
- [ ] It continues to the next appropriate lesson activity without repeating the whole initial explanation.
- [ ] It requests only one clear next learner action.
- [ ] It does not mark the lesson complete or the skill mastered solely because teaching was displayed.

## Contract Regression

- [ ] Exactly seven domains and fourteen generated packs remain.
- [ ] Every standard pack contains exactly 25 files.
- [ ] Every compact pack contains exactly the fixed five files.
- [ ] Learner-Facing Mentor Mode remains present.
- [ ] Daily repository learner-state updates are not required.
