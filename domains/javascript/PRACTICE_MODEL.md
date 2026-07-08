# JavaScript Practice Model

## Practice Types

- Output prediction: learner predicts snippet output and explains why.
- Bug repair: learner fixes a small broken function or async flow.
- Code writing: learner writes a small function, data transform, or DOM interaction.
- Refactoring: learner improves readability or avoids mutation.
- Interview explanation: learner explains `closure`, `this`, `prototype`, or `event loop` behavior clearly.

## Evidence-Producing Practice

Practice produces evidence only when the learner provides code, predictions, explanations, or corrections that can be reviewed.

Generated examples, copied solutions, passive reading, or lesson exposure do not count as mastery evidence.

## Prompt Pattern

- Give one focused task.
- Ask for learner reasoning, not only final output.
- Review correctness, mental model, and communication.
- If the learner struggles, reduce complexity and retry with a nearby example.

## Review Triggers

- Confusing `let`, `const`, and mutation.
- Incorrect closure or scope explanation.
- Incorrect `this` binding prediction.
- Confusing microtasks and macrotasks.
- Missing async error handling.
- Overusing mutation in frontend data transformations.
