# JavaScript Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/javascript/PRACTICE_RULES.md

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

## Source: domains/javascript/ASSESSMENT_RULES.md

# JavaScript Assessment Rules

## Purpose

Assess whether the learner can write, debug, test, refactor, and explain JavaScript behavior from beginner to professional level.

## Accepted Evidence

- Reviewed learner code.
- Reviewed output predictions with explanations.
- Reviewed bug fixes and refactors.
- Reviewed tests for JavaScript logic.
- Reviewed async traces and error handling.
- Reviewed browser/DOM scenario solutions.
- Reviewed security, performance, memory, or rendering reasoning.
- Reviewed interview-style explanations.

## Evidence Not Accepted

- Reading a lesson.
- Receiving a generated explanation.
- Copying a solution without explanation or modification.
- Saying a topic feels familiar.
- Uploading files or setting up a Project.

## Checkpoint Criteria

- Correctness: code, prediction, fix, or explanation is technically accurate.
- Reasoning: learner explains why behavior occurs.
- Independence: learner can attempt without answer leakage.
- Transfer: learner applies the concept to a nearby new example.
- Repair: learner corrects mistakes after feedback.
- Communication: learner can explain the concept clearly using appropriate JavaScript terms.

## Checkpoint Types

- Foundation diagnostic: variables, values, functions, arrays/objects, DOM basics, and debugging.
- Mental model checkpoint: execution context, call stack, scope chain, lexical environment, hoisting, closures, `this`, prototypes, and mutation.
- Async checkpoint: callbacks, promises, `async/await`, event loop, timers, `fetch`, `AbortController`, and async errors.
- Modern JavaScript checkpoint: modules, destructuring, spread/rest, optional chaining, nullish coalescing, iterators, generators, collections, symbols, and modern methods.
- Professional checkpoint: module design, composition, performance, memory, rendering, safe DOM handling, security basics, and testing.
- Interview checkpoint: explain-output, bug fixing, refactoring, code reading, frontend scenarios, performance reasoning, and async tracing.

## Mastery Guardrails

Assessment rules MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`. Lesson completion, generated examples, or passive exposure do not imply mastery.

## Source: domains/javascript/PRACTICE_MODEL.md

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

## Source: domains/javascript/ASSESSMENT_MODEL.md

# JavaScript Assessment Model

## Assessment Purpose

Assess whether the learner can reason about JavaScript behavior, write correct small code, debug mistakes, and explain concepts clearly.

## Evidence Accepted

- Reviewed learner code.
- Reviewed output predictions with explanations.
- Reviewed bug fixes.
- Reviewed interview-style explanations.
- Reviewed async ordering and error-handling reasoning.

## Evidence Not Accepted

- Reading a lesson.
- Receiving a generated explanation.
- Copying a solution without explanation.
- Saying a topic feels familiar.
- Project setup or file upload.

## Checkpoint Criteria

- Correctness: output, code, or fix behaves as intended.
- Reasoning: learner can explain why behavior occurs.
- Independence: learner can attempt without step-by-step answer leakage.
- Transfer: learner can apply the idea to a nearby new example.
- Repair: learner can correct mistakes after feedback.

## Assessment Formats

- Mini diagnostic: 3-5 small questions across fundamentals, functions, objects, and async.
- Stage checkpoint: focused tasks for the current stage.
- Interview simulation: explain a snippet and improve it.
- Frontend scenario: handle API data, DOM events, or async errors.
