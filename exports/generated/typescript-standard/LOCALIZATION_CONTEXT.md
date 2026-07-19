# Localization Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/LOCALIZATION_SPEC.md

# Localization Specification

## Purpose

Define framework-level policy for instructional language and terminology language.

## Scope

This specification governs user-facing teaching text, domain terminology preservation, learner language preferences, and domain-pack terminology guidance.

## Non-Goals

- It does not hardcode one global framework language.
- It does not define concrete YAML fields or schemas.
- It does not translate domain content.
- It does not define locale-specific UI behavior.

## Core Concepts

- Instruction Language: the language used for explanations, feedback, lesson flow, and user-facing teaching text.
- Terminology Language: the preferred language for domain-specific technical terms.
- Term Preservation: the rule that important domain terms may remain untranslated when terminology language differs from instruction language.
- Glossary Mapping: optional domain-pack mapping between original terms, translated explanations, examples, and usage notes.
- Learner Language Preference: learner-specific language configuration, later stored in learner profile or learner state.
- Domain Language Policy: domain-pack-specific guidance for how terminology should be presented.

## Normative Requirements

- The framework MUST support separate instruction language and terminology language preferences.
- User-facing teaching output SHOULD follow the learner's instruction language when available.
- Domain-specific technical terms SHOULD remain in the terminology language when the learner preference requires it.
- When instruction language and terminology language differ, explanations MAY include a short clarification in the instruction language, but MUST NOT replace important technical terms with unnatural translations.
- Domain packs SHOULD provide glossary guidance for important terms when terminology preservation matters.
- Commands that produce lessons, practice, reviews, assessments, interviews, or progress reports SHOULD respect localization preferences.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.
- If language preferences are missing, commands SHOULD use the project or user-provided language context.

## Example Preference

A learner or project MAY request Azerbaijani as the instruction language and English as the terminology language. In that case, explanations and feedback should be in Azerbaijani while important technical terms remain in English when natural and domain-appropriate.

## Relationships

- Learner preference storage is described conceptually in `specification/STATE_SPEC.md`.
- Domain glossary guidance belongs to domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- User-facing command behavior is governed by `specification/COMMAND_SPEC.md`.
- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.

## OPEN QUESTION

- Should language preferences use BCP 47 language tags once schemas exist?
- Should terminology language support multiple preferred languages ordered by priority?
- Where should project-level language defaults be stored before application configuration exists?

## Source: domains/typescript/DOMAIN.md

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
