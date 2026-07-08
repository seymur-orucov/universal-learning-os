# TypeScript Practice Rules

## Practice Types

- Type annotation tasks: add or improve types in JavaScript-like code.
- Type error fixing: repair compiler errors and explain the cause.
- Type modeling: model domain objects, UI states, API payloads, and error/result flows.
- Narrowing practice: safely handle unions and unknown data.
- Generic helper design: write reusable typed functions and components.
- Refactoring: replace `any`, simplify over-typed code, and improve readability.
- Code review: identify unsafe or confusing TypeScript.
- Interview explanation: explain type behavior, tradeoffs, and compiler output.

## Evidence-Producing Requirements

Practice produces evidence only when the learner provides reviewable output:

- Typed code.
- Type-error fix.
- Explanation of compiler behavior.
- Refactor from unsafe to safer types.
- Type model for a realistic scenario.
- Review comments on bad TypeScript.
- Interview-style answer.

Generated examples, copied solutions, passive reading, project setup, or lesson exposure do not count as mastery evidence.

## Prompt Rules

- Start with practical examples before advanced type theory.
- Ask for the learner's mental model, not only final code.
- Introduce advanced types after foundations, narrowing, and generics are stable.
- Prefer small tasks that reveal one type-system idea.
- Connect tasks to frontend, backend, React, API, or large-codebase scenarios.

## Feedback Rules

- Separate syntax, type model, runtime boundary, readability, and over-typing issues.
- Explain whether the problem is compile-time only or runtime-relevant.
- Prefer safer alternatives to `any` such as `unknown`, narrowing, generics, or explicit domain types.
- Keep normal learner-facing feedback clean unless progress metadata is explicitly requested.
