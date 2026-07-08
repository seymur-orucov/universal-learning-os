# TypeScript Syllabus

Canonical source: `domains/typescript/SYLLABUS.md`.

## Track: `typescript.main`

1. Foundations: TypeScript vs JavaScript, static typing, annotations, primitives, arrays, tuples, objects, optional/readonly properties, inference, literal types.
2. Functions and special types: parameter/return types, `void`, `never`, `unknown`, `any`, callbacks, overload basics.
3. Core type modeling: `type`, `interface`, `type` vs `interface`, unions, intersections, enum vs union literals.
4. Narrowing: `typeof`, `in`, equality, truthiness, custom type guards, discriminated unions, exhaustiveness, `never`.
5. Generics: generic functions/interfaces/aliases, constraints, defaults, `keyof`, indexed access types, utility helpers, common mistakes.
6. Modern practical TypeScript: `as const`, `satisfies`, type-position `typeof`, template literal types, module typing, declaration files, ambient types, const enum warnings.
7. Utility types: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, `Awaited`.
8. Advanced TypeScript: mapped types, conditional types, distributive conditional types, `infer`, recursive types, branded/opaque types, typed events/API/results, readability limits.
9. Configuration/tooling: `tsconfig`, `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, path aliases, module resolution, Vite/React/Node, type checking vs transpilation, ESLint basics.
10. React TypeScript: props, children, events, forms, refs, hooks, generic components, discriminated union props, controlled/uncontrolled inputs, API data, TanStack Query conceptually, state patterns, common mistakes.
11. Backend/API TypeScript: DTOs, request/response typing, API clients, typed errors, validation boundaries, runtime validation vs compile-time types, Zod-style schema-first mental model, shared types warnings, API versioning.
12. Engineering/interview readiness: explain-output, type-error fixing, refactoring `any`, domain modeling, generic helpers, code review, frontend architecture, large-codebase strategy, safety/complexity tradeoffs.
