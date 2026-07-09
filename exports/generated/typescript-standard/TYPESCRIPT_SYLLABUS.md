# TypeScript Syllabus

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/typescript/SYLLABUS.md

# TypeScript Syllabus

This syllabus defines `typescript.main`: a full path from TypeScript foundations to advanced/professional TypeScript fluency. It contains concise learning path outlines, not full lessons or learner state.

Lesson completion does not imply mastery. Mastery requires reviewed learner code, type-error fixes, explanations, refactors, modeling decisions, or explicit user instruction.

## Stage 1: Foundations and Mental Model

- Goal: Understand what TypeScript is, why it exists, and how static typing helps JavaScript development.
- Topics: TypeScript vs JavaScript, static typing mental model, compiler feedback, type annotations, primitive types, arrays, tuples, objects, optional properties, readonly properties, type inference, literal types.
- Practice: add annotations to simple JavaScript, explain inferred types, fix beginner type errors.
- Checkpoint: learner explains how TypeScript catches errors before runtime and writes basic typed values/functions.

## Stage 2: Functions and Special Types

- Goal: Type functions clearly and safely.
- Topics: function parameter and return types, optional/default parameters, `void`, `never`, `unknown`, `any` and why to avoid it, function overload basics, callback typing.
- Practice: type utility functions, replace `any` with `unknown` plus checks, explain `void` vs return type and `never` for impossible paths.
- Checkpoint: learner types functions and explains unsafe `any` usage.

## Stage 3: Core Type Modeling

- Goal: Model objects and domain data with readable types.
- Topics: `type` aliases, `interface`, `type` vs `interface`, union types, intersection types, object composition, enum vs union literals, readonly modeling.
- Practice: model users, products, orders, permissions, API entities, and UI state.
- Checkpoint: learner chooses `type` or `interface` appropriately and models domain objects without over-complication.

## Stage 4: Narrowing and Safe Control Flow

- Goal: Use TypeScript's control-flow analysis to write safer code.
- Topics: narrowing, `typeof` guards, `in` checks, equality narrowing, truthiness narrowing, custom type guards, discriminated unions, exhaustiveness checking, `never` for unreachable cases.
- Practice: parse union data, handle states, write exhaustive switches, repair unsafe property access.
- Checkpoint: learner uses discriminated unions and exhaustive checks correctly.

## Stage 5: Generics

- Goal: Write reusable typed functions and structures.
- Topics: generic functions, generic interfaces, generic type aliases, generic constraints, default generic parameters, `keyof`, indexed access types, generic utility functions, common generic mistakes.
- Practice: write `getByKey`, `groupBy`, typed fetch helpers, typed form helpers, and reusable collections.
- Checkpoint: learner designs a generic helper without losing type safety to `any`.

## Stage 6: Modern Practical TypeScript

- Goal: Use modern TypeScript features in real code.
- Topics: `as const`, `satisfies`, `keyof`, `typeof` in type positions, indexed access types, template literal types, module typing, import/export typing, declaration files basics, ambient types basics, const enums warning.
- Practice: type config objects, route names, event names, API constants, and module exports.
- Checkpoint: learner uses `satisfies`, `as const`, and type-position `typeof` intentionally.

## Stage 7: Utility Types

- Goal: Apply built-in utility types to practical transformations.
- Topics: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, `Awaited`.
- Practice: derive DTOs, update payloads, readonly views, API response helpers, and async return helpers.
- Checkpoint: learner selects utility types that simplify code without hiding intent.

## Stage 8: Advanced TypeScript

- Goal: Understand powerful type-level tools and their practical limits.
- Topics: mapped types, conditional types, distributive conditional types, `infer`, recursive types, branded/opaque types, strongly typed dictionaries, strongly typed events, strongly typed API responses, typed error/result patterns, type-level transformations, over-typing limits, keeping advanced types readable.
- Practice: build `Result<T, E>`, branded ids, typed event maps, API response transformers, and readable mapped/conditional types.
- Checkpoint: learner can explain advanced types and when not to use them.

## Stage 9: Configuration and Tooling

- Goal: Configure TypeScript for real projects.
- Topics: `tsconfig.json`, `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, path aliases, module resolution basics, TypeScript with Vite/React/Node, type checking vs transpilation, ESLint TypeScript rules basics.
- Practice: review `tsconfig`, explain strictness flags, fix configuration-related errors, compare typecheck and build flows.
- Checkpoint: learner understands important config flags and their engineering tradeoffs.

## Stage 10: React and TypeScript

- Goal: Type practical React code without fighting the type system.
- Topics: typing component props, children, events, forms, refs, hooks, generic components, discriminated union props, controlled/uncontrolled input typing, API data, TanStack Query typing conceptually, state management patterns, common React TypeScript mistakes.
- Practice: type components, event handlers, form state, API-driven UI states, custom hooks, and generic list/select components.
- Checkpoint: learner types React props and UI state safely and readably.

## Stage 11: Backend and API TypeScript

- Goal: Model API boundaries and backend TypeScript safely.
- Topics: DTO typing, request/response typing, API client typing, typed error handling, validation boundary concept, runtime validation vs compile-time types, Zod-style schema-first mental model without making Zod mandatory, shared types warning between frontend/backend, versioning API types.
- Practice: type API clients, DTOs, result/error responses, validation boundaries, and versioned API changes.
- Checkpoint: learner distinguishes compile-time types from runtime validation and designs safer API boundaries.

## Stage 12: Engineering and Interview Readiness

- Goal: Convert TypeScript knowledge into professional code review, architecture, and interview performance.
- Topics: explain-output tasks, type error fixing, refactoring `any` to safer types, modeling domain objects, designing generic helpers, reviewing bad TypeScript, practical interview questions, frontend architecture scenarios, large codebase typing strategy, trade-offs between safety and complexity.
- Practice: timed type-error repair, `any` refactors, bad-type reviews, generic helper design, architecture tradeoff explanations.
- Checkpoint: learner can explain TypeScript decisions clearly, repair unsafe code, and balance readability with type safety.
