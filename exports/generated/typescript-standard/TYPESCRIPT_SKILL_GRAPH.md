# TypeScript Skill Graph

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/typescript/SKILL_GRAPH.md

# TypeScript Skill Graph

Learning skills are learner competencies, not agent skills.

## Foundation Skills

- `typescript.static-typing-mental-model`: explains TypeScript vs JavaScript and compiler feedback.
- `typescript.annotations-inference`: uses annotations and type inference.
- `typescript.primitives-arrays-tuples`: types primitives, arrays, and tuples.
- `typescript.objects-properties`: types objects, optional properties, and readonly properties.
- `typescript.functions-special-types`: types functions and explains `void`, `never`, `unknown`, and `any`.
- `typescript.literal-types`: uses literal types.

## Core Type System Skills

- `typescript.type-alias-interface`: uses `type`, `interface`, and explains tradeoffs.
- `typescript.unions-intersections`: uses union and intersection types.
- `typescript.narrowing`: uses `typeof`, `in`, equality, truthiness, and custom type guards.
- `typescript.discriminated-unions`: models variants safely.
- `typescript.exhaustiveness-never`: uses `never` for unreachable cases.

## Generic Skills

- `typescript.generic-functions`: writes generic functions.
- `typescript.generic-interfaces-aliases`: writes generic interfaces and aliases.
- `typescript.generic-constraints-defaults`: uses constraints and defaults.
- `typescript.keyof-indexed-access`: uses `keyof` and indexed access types.
- `typescript.generic-utilities`: designs reusable typed helpers.

## Modern and Utility Skills

- `typescript.as-const-satisfies`: uses `as const` and `satisfies`.
- `typescript.typeof-type-position`: uses `typeof` in type positions.
- `typescript.template-literal-types`: uses template literal types.
- `typescript.modules-declarations`: understands module typing and declaration files.
- `typescript.utility-types`: applies built-in utility types.

## Advanced Skills

- `typescript.mapped-types`: writes mapped types.
- `typescript.conditional-types`: writes conditional and distributive conditional types.
- `typescript.infer`: uses `infer` in practical cases.
- `typescript.recursive-branded-types`: uses recursive, branded, and opaque types.
- `typescript.typed-events-api-results`: models events, API responses, dictionaries, errors, and results.
- `typescript.type-readability`: limits over-typing and keeps types readable.

## Engineering Skills

- `typescript.tsconfig-strictness`: configures `tsconfig` and strictness flags.
- `typescript.react-types`: types React props, events, forms, refs, hooks, and generic components.
- `typescript.api-boundaries`: types DTOs, requests/responses, API clients, validation boundaries, and versioning.
- `typescript.refactor-any`: refactors unsafe `any` to safer types.
- `typescript.code-review-interview`: reviews bad TypeScript and answers interview scenarios.

## Dependencies

- JavaScript fundamentals precede most TypeScript practice.
- Foundations precede core type modeling.
- Core type modeling and narrowing precede generics.
- Generics and utility types precede advanced type-level transformations.
- Configuration, React, and API typing integrate all earlier skills.
- Interview readiness depends on repeated code reading, repair, and explanation practice.

## Review Priorities

Prioritize review for repeated misuse of `any`, weak narrowing, unclear union modeling, over-complicated generics, unsafe API boundary assumptions, confusing runtime validation with compile-time types, and unreadable advanced types.
