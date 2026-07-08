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
