# TypeScript Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/typescript/PRACTICE_RULES.md

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

## Source: domains/typescript/ASSESSMENT_RULES.md

# TypeScript Assessment Rules

## Purpose

Assess whether the learner can model, read, debug, refactor, and explain TypeScript code for real engineering work.

## Accepted Evidence

- Reviewed typed code.
- Reviewed type-error fixes.
- Reviewed explanations of inference, narrowing, generics, utility types, or advanced types.
- Reviewed refactors from `any` to safer types.
- Reviewed React, API, DTO, validation-boundary, or configuration tasks.
- Reviewed code review comments and interview answers.

## Evidence Not Accepted

- Reading a lesson.
- Receiving generated type examples.
- Copying a solution without explanation.
- Uploading files or setting up a Project.
- Saying a TypeScript concept feels familiar.

## Checkpoint Criteria

- Correctness: types compile and model the intended behavior.
- Safety: avoids unnecessary `any` and handles unknown/runtime boundaries.
- Reasoning: learner explains why the type works.
- Readability: type design is understandable and maintainable.
- Transfer: learner applies the concept to nearby new examples.
- Repair: learner corrects mistakes after feedback.

## Checkpoint Types

- Foundation checkpoint: annotations, inference, primitives, arrays, objects, functions, `unknown`, `never`, `any`.
- Core type checkpoint: aliases, interfaces, unions, intersections, narrowing, discriminated unions, exhaustiveness.
- Generic checkpoint: constraints, defaults, `keyof`, indexed access, utility helpers.
- Modern/utility checkpoint: `as const`, `satisfies`, utility types, modules, declaration basics.
- Advanced checkpoint: mapped types, conditional types, `infer`, recursive/branded types, typed events/API/results.
- Engineering checkpoint: `tsconfig`, React typing, API boundaries, validation, testing, large-codebase strategy, interview reasoning.

## Mastery Guardrails

Assessment rules MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`. Lesson completion, generated examples, or passive exposure do not imply mastery.
