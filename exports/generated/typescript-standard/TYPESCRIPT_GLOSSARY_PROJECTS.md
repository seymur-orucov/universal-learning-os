# TypeScript Glossary and Projects

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/typescript/GLOSSARY.md

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

## Source: domains/typescript/PROJECTS.md

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
