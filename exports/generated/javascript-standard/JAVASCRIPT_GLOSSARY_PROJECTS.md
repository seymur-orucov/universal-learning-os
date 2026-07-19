# JavaScript Glossary and Projects

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

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

## Source: domains/javascript/PROJECTS.md

# JavaScript Projects

Project work is evidence only when learner code, explanation, tests, debugging, or refactoring is reviewed.

## Beginner Projects

- Calculator or unit converter using variables, functions, conditionals, and events.
- Todo list with arrays, objects, DOM selection, event handling, and basic debugging.
- Quiz app that uses functions, loops, conditionals, and simple state.

## Core Mental Model Projects

- Explain-output notebook for equality, coercion, mutation, hoisting, closure, `this`, and prototypes.
- Closure-based counter or private-state module.
- Object/prototype exploration project comparing constructor functions and class syntax.

## Async Projects

- Promise-based fake API flow with success and failure paths.
- `fetch` search interface with loading, error, empty, and success states.
- Abortable search request using `AbortController`.
- Event loop trace notebook with timers, promises, and `async/await`.

## Modern JavaScript Projects

- ES module utility library with tests.
- Data transformation module using destructuring, spread/rest, optional chaining, nullish coalescing, `Map`, and `Set`.
- Iterator/generator demo that explains lazy sequence behavior.

## Professional Projects

- Debounced input handler and throttled scroll handler with performance explanation.
- Safe DOM rendering exercise that avoids XSS-prone patterns.
- Refactor a messy module into composable, testable functions.
- Browser rendering/performance case study covering reflow/repaint and unnecessary DOM work.
- Memory leak investigation using closures or event listeners.

## Interview Readiness Projects

- Common JavaScript interview question bank with learner explanations.
- Bug-fixing and refactoring challenge set.
- Practical frontend scenario review: API data flow, cancellation, rendering, event delegation, and error handling.

## Project Assessment

Each project review should evaluate correctness, reasoning, maintainability, testing, performance/security awareness when relevant, and the learner's ability to explain tradeoffs.
