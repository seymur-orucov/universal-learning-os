# TypeScript Domain Core

Generated compact domain core for `typescript`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/typescript/DOMAIN.md`.

# TypeScript Domain

## Domain Identity

- Domain id: `typescript`
- Domain title: `TypeScript Fundamentals to Professional Fluency`
- Domain version: `0.1.0-draft`

## Scope

Teach TypeScript from beginner foundations to advanced/professional engineering practice for frontend, backend, React, API typing, large codebases, and interviews.

## Target Audience

- JavaScript learners moving into TypeScript.
- Frontend engineers using React and typed UI state.
- Backend/full-stack engineers typing APIs, DTOs, and service boundaries.
- Interview candidates who need to explain and repair TypeScript code.

## Learner Outcomes

- Explain TypeScript's static typing mental model and how it differs from JavaScript runtime behavior.
- Use annotations, inference, primitives, objects, arrays, tuples, functions, `unknown`, `never`, `void`, literal types, `type`, and `interface`.
- Model real data using unions, intersections, narrowing, discriminated unions, generics, utility types, mapped types, conditional types, and `infer`.
- Configure practical TypeScript projects with `tsconfig`, `strict`, module resolution, Vite/React/Node, and ESLint basics.
- Type React props, events, forms, refs, hooks, generic components, API data, and state patterns.
- Type backend/API boundaries with DTOs, request/response types, validation boundaries, typed errors/results, and versioning awareness.
- Review bad TypeScript, refactor `any`, design generic helpers, and explain tradeoffs between safety and complexity.

## Localization Policy

- Learner-facing explanations SHOULD be Azerbaijani by default.
- TypeScript terms SHOULD remain in English where natural.
- Code, compiler messages, API names, and config keys SHOULD remain in English.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Prerequisites

- Basic JavaScript knowledge is strongly recommended.
- Learners may begin from TypeScript foundations if JavaScript syntax is familiar enough for simple examples.

## Non-Goals

- This domain is not a complete JavaScript runtime course.
- This domain is not a full React, Node.js, NestJS, or Zod course.
- This domain does not contain learner-specific progress.
- This domain does not certify mastery from lesson exposure or generated examples.

## SYLLABUS.md

Canonical source: `domains/typescript/SYLLABUS.md`.

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

## SKILL_GRAPH.md

Canonical source: `domains/typescript/SKILL_GRAPH.md`.

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

## PRACTICE_RULES.md

Canonical source: `domains/typescript/PRACTICE_RULES.md`.

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

## ASSESSMENT_RULES.md

Canonical source: `domains/typescript/ASSESSMENT_RULES.md`.

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

## PROJECTS.md

Canonical source: `domains/typescript/PROJECTS.md`.

# TypeScript Projects

Project work is evidence only when learner code, explanations, refactors, type-error fixes, or reviews are examined.

## Foundation Projects

- Convert a small JavaScript utility file to TypeScript.
- Type a collection of objects, arrays, tuples, and functions.
- Refactor unsafe `any` examples to safer types.

## Core Type System Projects

- Model an order, user, permission, and product domain with `type` and `interface`.
- Build discriminated union UI states: loading, success, empty, error.
- Write exhaustive switch handling with `never`.

## Generic and Utility Projects

- Build generic helpers such as `getByKey`, `groupBy`, and typed API wrappers.
- Derive DTOs with `Pick`, `Omit`, `Partial`, `Required`, `Readonly`, and `Record`.
- Use `ReturnType`, `Parameters`, and `Awaited` to derive helper types.

## Advanced TypeScript Projects

- Build typed event maps.
- Model `Result<T, E>` and typed errors.
- Create branded ids for domain entities.
- Implement readable mapped and conditional type transformations.

## React TypeScript Projects

- Type component props, children, events, forms, refs, and hooks.
- Build a generic list/select component.
- Model API-driven React UI state with discriminated unions.
- Type TanStack Query usage conceptually without requiring a real dependency.

## Backend/API Projects

- Type request/response DTOs and API clients.
- Add validation boundary notes to unknown incoming data.
- Model versioned API response changes.
- Compare shared type convenience with frontend/backend coupling risk.

## Interview Readiness Projects

- Type-error repair drills.
- Bad TypeScript code review exercises.
- Refactor `any` to safer models.
- Design generic helpers under constraints.
- Explain tradeoffs between safety, readability, and complexity.

## GLOSSARY.md

Canonical source: `domains/typescript/GLOSSARY.md`.

# TypeScript Glossary

This glossary supports Azerbaijani learner-facing explanations while preserving TypeScript terms in English where natural.

| Term | Guidance |
| --- | --- |
| TypeScript | JavaScript üzərinə static type sistemi əlavə edən language/tooling. |
| static typing | Compile-time mərhələsində type yoxlanışı mental model-i. |
| type annotation | Dəyər, parameter və return üçün explicit type yazmaq. |
| type inference | TypeScript-in type-ı avtomatik çıxarması. |
| `type` | Type alias yaratmaq üçün keyword. |
| `interface` | Object shape təsvir etmək üçün construct. |
| union | Bir neçə mümkün type-dan biri. |
| intersection | Bir neçə type-ın birlikdə tələb olunması. |
| narrowing | Union/unknown type-ı runtime check-lə daha konkret type-a endirmək. |
| discriminated union | Ortaq literal field ilə variantları ayıran union. |
| `never` | Mümkün olmayan və ya unreachable dəyər type-ı. |
| `unknown` | Təhlükəsiz unknown value; istifadə üçün narrowing lazımdır. |
| `any` | Type checking-i bypass edən unsafe type. |
| generic | Type parameter-lə reusable type/function/component yazmaq. |
| `keyof` | Object type-ın key union-ını çıxarmaq. |
| indexed access type | Type-dan property type çıxarmaq, məsələn `User['id']`. |
| `as const` | Literal və readonly inference üçün assertion. |
| `satisfies` | Expression-ın type-a uyğunluğunu yoxlayıb precise inference saxlamaq. |
| utility type | Built-in helper type: `Partial`, `Pick`, `Omit`, və s. |
| mapped type | Key-lər üzərində type transformation. |
| conditional type | Type-level `extends ? :` branching. |
| distributive conditional type | Union üzərində avtomatik paylanan conditional type. |
| `infer` | Conditional type daxilində type çıxarmaq. |
| branded type | Primitive üzərinə domain-specific identity əlavə edən pattern. |
| `tsconfig` | TypeScript compiler configuration faylı. |
| `strict mode` | Daha sərt type checking flag-ləri qrupu. |
| runtime validation | Runtime-da real data-nı yoxlamaq; compile-time type-dan fərqlidir. |
| React props | React component input-larının type-lanması. |

## QUALITY_REVIEW.md

Canonical source: `domains/typescript/QUALITY_REVIEW.md`.

# TypeScript Domain Quality Review

## Review Scope

This review checks that the TypeScript domain follows the repository domain pack standard and Stage 12.0 requirements.

## Checklist

- [x] Standard canonical files exist: `DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, `PROJECTS.md`, `GLOSSARY.md`.
- [x] Domain content is reusable and not learner-specific.
- [x] Learner-facing language defaults to Azerbaijani.
- [x] TypeScript technical terms may remain in English where natural.
- [x] Syllabus covers foundations through advanced/professional TypeScript.
- [x] Syllabus includes React, backend/API, tooling, utility types, advanced types, and interview readiness.
- [x] Practice and assessment require learner evidence.
- [x] Lesson exposure and generated examples do not imply mastery.
- [x] Domain boundaries reference canonical framework rules instead of duplicating learner-state contracts.

## Known Limitations

- This domain does not include full lesson bodies or exercise banks.
- This domain does not replace JavaScript runtime fundamentals.
- This domain does not mandate a specific validation library such as Zod.
