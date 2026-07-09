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

## Source: domains/javascript/DOMAIN.md

# JavaScript Domain

## Domain Identity

- Domain id: `javascript`
- Domain title: `JavaScript Fundamentals to Professional Fluency`
- Domain version: `0.1.0-draft`

## Scope

This domain teaches JavaScript from beginner foundations through advanced/professional reasoning for frontend/backend engineering and interviews.

It covers language fundamentals, execution mental models, async JavaScript, modern JavaScript, browser/runtime behavior, professional engineering practices, security basics, testing, and interview readiness.

## Target Audience

- Beginners starting JavaScript from zero or weak fundamentals.
- Frontend learners who need stronger runtime reasoning and browser JavaScript skills.
- Backend or full-stack learners who need practical JavaScript fluency.
- Interview candidates who need to explain JavaScript behavior clearly.

## Learner Outcomes

- Write, debug, test, refactor, and explain practical JavaScript code.
- Explain execution context, call stack, scope chain, lexical environment, hoisting, closures, `this`, prototypes, classes, modules, and async behavior.
- Use modern JavaScript features such as destructuring, spread/rest, optional chaining, nullish coalescing, iterators, generators, `Map`, `Set`, `WeakMap`, `WeakSet`, and symbols.
- Reason about promises, `async/await`, microtasks, macrotasks, event loop, timers, `fetch`, cancellation, and async errors.
- Apply browser basics, DOM events, event delegation, rendering awareness, Web APIs, safe DOM handling, testing, performance, and memory reasoning.
- Handle explain-output, bug-fixing, refactoring, and frontend scenario interview tasks.

## Localization Policy

- Learner-facing explanations SHOULD be Azerbaijani by default.
- JavaScript technical terms SHOULD remain in English where natural.
- Code, API names, runtime terms, browser terms, and interview keywords SHOULD NOT be over-translated.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Non-Goals

- This domain is not a full React, TypeScript, Node.js, browser-platform, or framework-specific course.
- This domain does not include learner-specific progress or mastery records.
- This domain does not certify mastery from lesson exposure, generated examples, or Project setup.

## Canonical File Map

- `SYLLABUS.md`: ordered beginner-to-professional learning path.
- `SKILL_GRAPH.md`: JavaScript learning skills, dependencies, and review priorities.
- `PRACTICE_RULES.md`: evidence-producing practice rules.
- `ASSESSMENT_RULES.md`: checkpoint and assessment criteria.
- `PROJECTS.md`: project-based learning opportunities.
- `GLOSSARY.md`: terminology guidance.

Supporting files such as `DOMAIN_OVERVIEW.md`, `MENTOR_BEHAVIOR.md`, `PRACTICE_MODEL.md`, `ASSESSMENT_MODEL.md`, `MASTERY_EXPECTATIONS.md`, and `PROJECT_PACK_SELECTION.md` refine the standard canonical files without replacing them.

## Source: domains/javascript/GLOSSARY.md

# JavaScript Glossary

This glossary supports Azerbaijani learner-facing explanations while preserving JavaScript terms in English where natural.

| Term | Guidance |
| --- | --- |
| `var` | Function-scoped variable declaration; hoisting behavior should be explained carefully. |
| `let` | Block-scoped variable declaration for reassignment. |
| `const` | Block-scoped binding that cannot be reassigned; object contents may still mutate. |
| primitive | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` kimi sadə value növləri. |
| reference type | Object, array və function kimi reference ilə işləyən dəyərlər. |
| coercion | JavaScript-in value type-larını avtomatik çevirməsi. |
| execution context | Kodun icra olunduğu environment və runtime məlumatları. |
| call stack | Function çağırışlarının runtime stack-i. |
| scope chain | Variable lookup üçün scope-lar ardıcıllığı. |
| lexical environment | Lexical scope daxilində identifier binding-lərini saxlayan model. |
| hoisting | Declaration-ların execution əvvəlində qeydiyyata alınması davranışı. |
| closure | Function-un öz lexical environment məlumatını saxlaması. |
| `this` | Çağırılma formasından asılı context dəyəri. |
| arrow function | Öz `this` binding-i olmayan function sintaksisi. |
| prototype | Object-lər arasında property/method lookup üçün delegation mexanizmi. |
| prototypal inheritance | Object-lərin prototype chain vasitəsilə davranış paylaşması. |
| property descriptor | Property-nin `writable`, `enumerable`, `configurable`, getter/setter metadata-sı. |
| mutability | Dəyərin və ya obyektin dəyişdirilə bilməsi. |
| shallow copy | Yalnız birinci səviyyənin kopyalanması. |
| deep copy | Nested strukturun da ayrıca kopyalanması. |
| structured cloning | Browser/runtime structured clone algorithm ilə kopyalama. |
| callback | Sonra çağırılmaq üçün başqa function-a verilən function. |
| `Promise` | Async nəticəni təmsil edən obyekt. |
| `async/await` | Promise əsaslı async kodu daha oxunaqlı yazmaq sintaksisi. |
| microtask | Promise callback-ləri kimi yüksək prioritet async queue işi. |
| macrotask | Timer və event kimi task queue işi. |
| event loop | Call stack, microtask queue və task queue arasında koordinasiya mexanizmi. |
| `fetch` | HTTP request üçün Web API. |
| `AbortController` | Async request və operation cancellation üçün Web API. |
| ES module | `import` və `export` ilə ayrılmış JavaScript module sistemi. |
| iterator | Ardıcıllıq üzrə next value verən protocol. |
| generator | `function*` ilə iterator yaradan function. |
| `Map` | Key-value collection; object-dən fərqli key imkanları verir. |
| `Set` | Unique value collection. |
| `WeakMap` | Weak object key-lərlə memory-friendly association. |
| `WeakSet` | Weak object reference-lərdən ibarət collection. |
| symbol | Unique primitive identifier. |
| event delegation | Parent element üzərində event handling ilə child event-ləri idarə etmək pattern-i. |
| debounce | Ardıcıl çağırışları gecikdirib son çağırışı icra etmək pattern-i. |
| throttle | Müəyyən intervalda maksimum bir dəfə icra etmək pattern-i. |
| garbage collection | İstifadəsiz memory-nin runtime tərəfindən təmizlənməsi. |
| reflow/repaint | Browser rendering zamanı layout və paint yenilənmələri. |
| XSS | Unsafe input/DOM handling nəticəsində script injection riski. |
| CSRF | İstifadəçinin session-ından icazəsiz request göndərilməsi riski. |
