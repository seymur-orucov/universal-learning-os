# JavaScript Practice Rules

## Purpose

Define evidence-producing JavaScript practice. Practice should require learner attempts, not passive reading.

## Practice Types

- Output prediction: learner predicts snippet output and explains why.
- Bug repair: learner fixes broken JavaScript and explains the cause.
- Code writing: learner writes functions, data transforms, DOM interactions, async flows, or tests.
- Refactoring: learner improves readability, composition, immutability, or module boundaries.
- Async tracing: learner traces callbacks, promises, `async/await`, microtasks, macrotasks, timers, and cancellation.
- Security review: learner identifies unsafe DOM handling, XSS risks, or CSRF awareness gaps.
- Performance review: learner identifies avoidable work, event handling issues, rendering costs, or memory leak risks.
- Interview explanation: learner explains mental models such as `closure`, `this`, prototypes, event loop, equality, or mutation.

## Evidence-Producing Requirements

Practice produces evidence only when the learner provides reviewable output:

- Code.
- Output prediction.
- Explanation.
- Bug fix.
- Refactor.
- Test.
- Async trace.
- Security or performance reasoning.

Generated examples, copied solutions, passive reading, project setup, or lesson exposure do not count as mastery evidence.

## Prompt Rules

- Give one focused task at a time.
- Ask for reasoning, not only the final answer.
- Prefer small snippets that expose a specific mental model.
- Use frontend/backend scenarios when they clarify real engineering relevance.
- If the learner struggles, reduce complexity and retry with a nearby example.

## Feedback Rules

- Separate syntax, runtime behavior, mental model, and communication issues.
- Identify whether the learner showed correctness, reasoning, independence, transfer, and repair.
- Do not mark mastery from generated output.
- Keep normal learner-facing feedback clean unless progress metadata is explicitly requested.

## Review Triggers

- Confusing `var`, `let`, `const`, hoisting, or temporal dead zone.
- Incorrect primitive/reference, equality, coercion, or mutation reasoning.
- Incorrect closure, scope chain, lexical environment, or `this` explanation.
- Incorrect prototype, class, property descriptor, or inheritance reasoning.
- Confusing microtasks, macrotasks, timers, promises, and event loop ordering.
- Missing async error handling or cancellation behavior.
- Unsafe DOM handling or weak XSS awareness.
- Unclear performance, rendering, memory, or testing reasoning.
