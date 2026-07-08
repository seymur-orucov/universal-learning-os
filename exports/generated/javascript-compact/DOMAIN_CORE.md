# JavaScript Domain Core

Generated compact domain core for `javascript`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/javascript/DOMAIN.md`.

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

## SYLLABUS.md

Canonical source: `domains/javascript/SYLLABUS.md`.

# JavaScript Syllabus

This syllabus defines `javascript.main`: a full path from beginner JavaScript foundations to advanced/professional JavaScript fluency for frontend/backend engineering and interviews. It contains concise learning path outlines, not full lessons or learner state.

Lesson completion does not imply mastery. Mastery requires reviewed learner code, predictions, explanations, bug fixes, refactors, or explicit user instruction.

## Stage 1: Beginner Foundations

- Goal: Build a safe starting point for learners from zero or weak fundamentals.
- Topics: `var`, `let`, `const`, primitive vs reference types, operators, expressions, conditionals, loops, functions, arrays, objects, basic DOM usage, console usage, browser DevTools basics, basic debugging.
- Practice: write small functions, trace simple loops, manipulate arrays/objects, select DOM elements, handle one click event, fix syntax/runtime errors.
- Checkpoint: learner can write and explain small JavaScript snippets without relying on copied answers.

## Stage 2: Values, Equality, and Data Behavior

- Goal: Understand how JavaScript values behave in real code.
- Topics: primitive values, reference values, assignment, identity, equality rules, `==` vs `===`, coercion, truthy/falsy values, shallow copy vs shared reference, basic immutability.
- Practice: explain-output tasks, mutation prediction, copy-and-update exercises.
- Checkpoint: learner predicts equality and mutation behavior in small object/array examples.

## Stage 3: Functions and Core Control Abstractions

- Goal: Use functions as reusable behavior and reasoning units.
- Topics: function declarations, function expressions, arrow functions, parameters, default parameters, rest parameters, return values, callbacks, pure functions, side effects, higher-order functions.
- Practice: write callbacks, refactor repeated logic into functions, explain side effects.
- Checkpoint: learner writes and explains small reusable functions and callback-based operations.

## Stage 4: Execution Context, Call Stack, Scope, and Hoisting

- Goal: Build the mental model behind function execution and variable lookup.
- Topics: execution context, call stack, scope chain, lexical environment, global/function/block scope, hoisting, temporal dead zone, lexical lookup, variable shadowing.
- Practice: call-stack tracing, hoisting explain-output tasks, scope-chain debugging.
- Checkpoint: learner can trace variable resolution and function execution order.

## Stage 5: Closures and Practical State

- Goal: Understand closures as a practical tool and a source of bugs.
- Topics: closures, lexical capture, private state, function factories, loop closure traps, closures and memory leaks, stale closure scenarios.
- Practice: write counter/factory functions, debug closure examples, explain retained variables.
- Checkpoint: learner predicts closure behavior and explains when closures retain memory.

## Stage 6: Objects, Arrays, Property Behavior, and Immutability

- Goal: Work confidently with common JavaScript data structures.
- Topics: object access, arrays, destructuring, spread/rest, optional chaining, nullish coalescing, template literals, modern array/object methods, property descriptors, enumerability, mutability and immutability patterns, deep copy vs shallow copy, structured cloning.
- Practice: transform API-like data, update nested data immutably, inspect property descriptors, compare cloning approaches.
- Checkpoint: learner transforms data correctly and explains mutation/copy tradeoffs.

## Stage 7: `this`, Prototypes, Classes, and Inheritance

- Goal: Reason about JavaScript object delegation and call-time behavior.
- Topics: `this` binding rules, method calls, detached methods, arrow function `this`, `call`, `apply`, `bind`, constructors, prototypes, prototype chain, prototypal inheritance, classes as syntax over prototypes, instance methods, static methods.
- Practice: predict `this`, fix broken method calls, explain prototype lookup, compare class syntax with prototypes.
- Checkpoint: learner explains method lookup and `this` behavior in interview-style snippets.

## Stage 8: Modern JavaScript Language Features

- Goal: Use modern JavaScript features deliberately, not mechanically.
- Topics: ES modules, imports/exports, module boundaries, iterators, generators, `Map`, `Set`, `WeakMap`, `WeakSet`, symbols, modern collection use cases, optional chaining, nullish coalescing, spread/rest, destructuring.
- Practice: design small modules, choose object vs `Map`, use `Set` for uniqueness, write basic iterator/generator examples.
- Checkpoint: learner can select suitable modern features and explain tradeoffs.

## Stage 9: Asynchronous JavaScript and Event Loop

- Goal: Reason accurately about async execution.
- Topics: callbacks, callback error patterns, promises, promise chaining, `async/await`, `try/catch` in async flows, microtasks vs macrotasks, event loop, timers, `fetch`, cancellation with `AbortController`, async race conditions.
- Practice: trace log order, rewrite callbacks to promises, use `async/await`, handle fetch errors, cancel requests.
- Checkpoint: learner predicts async ordering and handles success, failure, and cancellation paths.

## Stage 10: Browser Runtime, DOM, and Web APIs

- Goal: Connect JavaScript language knowledge to browser engineering.
- Topics: DOM selection and updates, events, event delegation, forms, browser rendering basics, reflow/repaint, Web APIs overview, storage APIs, timers, fetch, safe DOM handling.
- Practice: build small DOM interactions, use event delegation, reason about rendering cost, handle API-driven UI state.
- Checkpoint: learner writes browser-oriented code and explains runtime/browser effects.

## Stage 11: Professional JavaScript Engineering

- Goal: Practice patterns required for production frontend/backend JavaScript.
- Topics: module design, composition, functional programming patterns, immutability patterns, error boundaries at application level, application-level error handling, performance optimization, debouncing, throttling, memory management, garbage collection basics, testing JavaScript logic.
- Practice: refactor modules, compose functions, add tests for logic, optimize repeated work, identify memory leak risks, apply debounce/throttle.
- Checkpoint: learner can improve maintainability, testability, performance, and reliability of JavaScript code.

## Stage 12: Security and Robustness Basics

- Goal: Build practical awareness of safe JavaScript usage.
- Topics: XSS awareness, CSRF awareness, safe DOM handling, input validation basics, escaping/sanitization concepts, dependency and supply-chain awareness, error reporting boundaries.
- Practice: identify unsafe DOM updates, explain XSS risk, choose safer rendering patterns, reason about request-side CSRF awareness.
- Checkpoint: learner identifies common JavaScript security risks and proposes safer alternatives.

## Stage 13: Engineering and Interview Readiness

- Goal: Convert knowledge into professional reasoning and interview performance.
- Topics: common JavaScript interview questions, explain-output tasks, bug-fixing tasks, refactoring tasks, real frontend scenarios, practical code reading, mental model questions, performance reasoning, async behavior tracing.
- Practice: timed explain-output rounds, code review simulations, frontend scenario debugging, async trace exercises, refactoring interviews.
- Checkpoint: learner gives clear Azerbaijani explanations using correct JavaScript terms, supports claims with code behavior, and repairs mistakes after feedback.

## SKILL_GRAPH.md

Canonical source: `domains/javascript/SKILL_GRAPH.md`.

# JavaScript Skill Graph

This file defines JavaScript learning skills, dependencies, and review priorities. Learning skills are learner competencies, not agent skills.

## Skill Areas

### Foundation Skills

- `javascript.variables`: understands `var`, `let`, `const`, reassignment, scope basics, and temporal dead zone at an introductory level.
- `javascript.values-types`: distinguishes primitive and reference types.
- `javascript.operators-expressions`: uses operators, expressions, equality, coercion, and truthy/falsy behavior.
- `javascript.control-flow`: uses conditionals and loops.
- `javascript.functions-basics`: writes and calls functions with parameters and return values.
- `javascript.arrays-objects-basics`: uses arrays and objects for simple data.
- `javascript.dom-debugging-basics`: performs basic DOM selection/events and uses console/DevTools for debugging.

### Core Mental Model Skills

- `javascript.execution-context`: explains execution context and function invocation.
- `javascript.call-stack`: traces call stack behavior.
- `javascript.scope-chain`: traces scope chain and lexical environment lookup.
- `javascript.hoisting`: explains hoisting and temporal dead zone behavior.
- `javascript.closures`: explains and uses closures.
- `javascript.this-binding`: predicts `this` with common binding rules and arrow functions.
- `javascript.prototypes`: explains prototype chain and prototypal inheritance.
- `javascript.classes`: explains classes as syntax over prototypes.
- `javascript.property-descriptors`: understands property descriptors and enumerability.
- `javascript.mutability`: reasons about mutation, immutability, shallow copy, deep copy, and structured cloning.

### Async and Runtime Skills

- `javascript.callbacks`: uses callbacks and callback-style error reasoning.
- `javascript.promises`: uses promises and promise chains.
- `javascript.async-await`: uses `async/await` with error handling.
- `javascript.event-loop`: traces microtasks, macrotasks, timers, and event loop ordering.
- `javascript.fetch-cancellation`: uses `fetch`, `AbortController`, and cancellation-aware flows.
- `javascript.async-errors`: handles async success, failure, cancellation, and race conditions.

### Modern JavaScript Skills

- `javascript.modules`: designs ES module boundaries.
- `javascript.destructuring-spread-rest`: uses destructuring, spread, and rest intentionally.
- `javascript.optional-nullish`: uses optional chaining and nullish coalescing correctly.
- `javascript.iterators-generators`: explains iterators and generators.
- `javascript.collections`: uses `Map`, `Set`, `WeakMap`, and `WeakSet` appropriately.
- `javascript.symbols`: understands symbol identity and basic use cases.
- `javascript.modern-methods`: applies modern array/object methods.

### Professional Engineering Skills

- `javascript.memory-management`: explains garbage collection basics and memory leak risks.
- `javascript.event-delegation`: uses event delegation in browser code.
- `javascript.debounce-throttle`: applies debouncing and throttling.
- `javascript.functional-patterns`: uses composition and functional programming patterns where useful.
- `javascript.module-design`: designs maintainable modules.
- `javascript.error-boundaries`: reasons about application-level error boundaries and error handling.
- `javascript.performance`: reasons about performance, browser rendering, reflow/repaint, and avoidable work.
- `javascript.web-apis`: recognizes common Web APIs and their role.
- `javascript.security-basics`: identifies XSS, CSRF awareness, and unsafe DOM handling.
- `javascript.testing`: tests JavaScript logic.

### Interview Readiness Skills

- `javascript.explain-output`: explains snippet output.
- `javascript.bug-fixing`: fixes small JavaScript bugs.
- `javascript.refactoring`: improves code structure and readability.
- `javascript.frontend-scenarios`: reasons about real frontend scenarios.
- `javascript.code-reading`: reads unfamiliar JavaScript code.
- `javascript.performance-reasoning`: explains performance tradeoffs.
- `javascript.async-tracing`: traces async behavior in interviews.

## Dependency Rules

- Foundation skills precede core mental models.
- Functions precede closures, callbacks, and async patterns.
- Objects and arrays precede prototypes, property descriptors, and immutability patterns.
- Scope chain and lexical environment precede closures and many `this` explanations.
- Promises and `async/await` precede event loop and async cancellation reasoning.
- DOM basics precede event delegation, rendering, safe DOM handling, and frontend scenarios.
- Core mental models precede interview readiness.

## Review Priorities

Prioritize review for repeated mistakes in equality/coercion, mutation/copying, scope, hoisting, closures, `this`, prototype lookup, async ordering, async errors, memory leaks, unsafe DOM handling, and unclear explanations.

## PRACTICE_RULES.md

Canonical source: `domains/javascript/PRACTICE_RULES.md`.

# JavaScript Practice Rules

## Purpose

Define evidence-producing JavaScript practice. Practice should require learner attempts, not passive reading.

## Practice Types

- Output prediction: learner predicts snippet output and explains why.
- Bug repair: learner fixes broken JavaScript and explains the cause.
- Code writing: learner writes functions, data transforms, DOM interactions, async flows, or tests.
- Refactoring: learner improves readability, composition, immutability, or module boundaries.
- Async tracing: learner traces callbacks, promises, `async/await`, microtasks, macrotasks, timers, and cancellation.
- Security review: learner identifies unsafe DOM handling, XSS risks, or CSRF awareness gaps.
- Performance review: learner identifies avoidable work, event handling issues, rendering costs, or memory leak risks.
- Interview explanation: learner explains mental models such as `closure`, `this`, prototypes, event loop, equality, or mutation.

## Evidence-Producing Requirements

Practice produces evidence only when the learner provides reviewable output:

- Code.
- Output prediction.
- Explanation.
- Bug fix.
- Refactor.
- Test.
- Async trace.
- Security or performance reasoning.

Generated examples, copied solutions, passive reading, project setup, or lesson exposure do not count as mastery evidence.

## Prompt Rules

- Give one focused task at a time.
- Ask for reasoning, not only the final answer.
- Prefer small snippets that expose a specific mental model.
- Use frontend/backend scenarios when they clarify real engineering relevance.
- If the learner struggles, reduce complexity and retry with a nearby example.

## Feedback Rules

- Separate syntax, runtime behavior, mental model, and communication issues.
- Identify whether the learner showed correctness, reasoning, independence, transfer, and repair.
- Do not mark mastery from generated output.
- Keep normal learner-facing feedback clean unless progress metadata is explicitly requested.

## Review Triggers

- Confusing `var`, `let`, `const`, hoisting, or temporal dead zone.
- Incorrect primitive/reference, equality, coercion, or mutation reasoning.
- Incorrect closure, scope chain, lexical environment, or `this` explanation.
- Incorrect prototype, class, property descriptor, or inheritance reasoning.
- Confusing microtasks, macrotasks, timers, promises, and event loop ordering.
- Missing async error handling or cancellation behavior.
- Unsafe DOM handling or weak XSS awareness.
- Unclear performance, rendering, memory, or testing reasoning.

## ASSESSMENT_RULES.md

Canonical source: `domains/javascript/ASSESSMENT_RULES.md`.

# JavaScript Assessment Rules

## Purpose

Assess whether the learner can write, debug, test, refactor, and explain JavaScript behavior from beginner to professional level.

## Accepted Evidence

- Reviewed learner code.
- Reviewed output predictions with explanations.
- Reviewed bug fixes and refactors.
- Reviewed tests for JavaScript logic.
- Reviewed async traces and error handling.
- Reviewed browser/DOM scenario solutions.
- Reviewed security, performance, memory, or rendering reasoning.
- Reviewed interview-style explanations.

## Evidence Not Accepted

- Reading a lesson.
- Receiving a generated explanation.
- Copying a solution without explanation or modification.
- Saying a topic feels familiar.
- Uploading files or setting up a Project.

## Checkpoint Criteria

- Correctness: code, prediction, fix, or explanation is technically accurate.
- Reasoning: learner explains why behavior occurs.
- Independence: learner can attempt without answer leakage.
- Transfer: learner applies the concept to a nearby new example.
- Repair: learner corrects mistakes after feedback.
- Communication: learner can explain the concept clearly using appropriate JavaScript terms.

## Checkpoint Types

- Foundation diagnostic: variables, values, functions, arrays/objects, DOM basics, and debugging.
- Mental model checkpoint: execution context, call stack, scope chain, lexical environment, hoisting, closures, `this`, prototypes, and mutation.
- Async checkpoint: callbacks, promises, `async/await`, event loop, timers, `fetch`, `AbortController`, and async errors.
- Modern JavaScript checkpoint: modules, destructuring, spread/rest, optional chaining, nullish coalescing, iterators, generators, collections, symbols, and modern methods.
- Professional checkpoint: module design, composition, performance, memory, rendering, safe DOM handling, security basics, and testing.
- Interview checkpoint: explain-output, bug fixing, refactoring, code reading, frontend scenarios, performance reasoning, and async tracing.

## Mastery Guardrails

Assessment rules MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`. Lesson completion, generated examples, or passive exposure do not imply mastery.

## PROJECTS.md

Canonical source: `domains/javascript/PROJECTS.md`.

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

## GLOSSARY.md

Canonical source: `domains/javascript/GLOSSARY.md`.

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

## DOMAIN_OVERVIEW.md

Canonical source: `domains/javascript/DOMAIN_OVERVIEW.md`.

# JavaScript Domain Overview

## Domain Identity

- Domain id: `javascript`
- Domain title: `JavaScript Fundamentals for Frontend Engineers`
- Domain version: `0.1.0-draft`

## Purpose

Teach JavaScript from beginner foundations to advanced/professional runtime reasoning for frontend/backend engineering and interview-style problem solving.

## Target Learner

- Learners who know basic programming or beginner JavaScript syntax.
- Frontend learners who need stronger reasoning about functions, scope, objects, async code, and browser behavior.
- Interview candidates who need to explain JavaScript behavior clearly.

## Learner Outcomes

- Explain execution context, call stack, scope chain, lexical environment, hoisting, closure, `this`, prototypes, modules, and async behavior.
- Write and review JavaScript functions, objects, arrays, promises, DOM interactions, modules, and error handling.
- Reason about event loop behavior, browser rendering basics, Web APIs, performance, memory, security basics, and common frontend execution flows.
- Debug, refactor, test, and explain JavaScript code in Azerbaijani while preserving JavaScript technical terms in English where natural.

## Localization Policy

- Learner-facing explanations SHOULD be Azerbaijani by default.
- JavaScript terms such as `scope`, `closure`, `this`, `prototype`, `Promise`, `event loop`, `module`, `callback`, `DOM`, and `async/await` SHOULD remain in English where natural.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Non-Goals

- This domain is not a full React, TypeScript, framework-specific, or platform-deep browser/Node.js API course.
- This domain does not contain learner-specific progress.
- This domain does not certify mastery from reading lessons or watching explanations.

## Relationships

- Syllabus: `domains/javascript/SYLLABUS.md`.
- Mentor behavior: `domains/javascript/MENTOR_BEHAVIOR.md`.
- Practice model: `domains/javascript/PRACTICE_MODEL.md`.
- Assessment model: `domains/javascript/ASSESSMENT_MODEL.md`.
- Mastery expectations: `domains/javascript/MASTERY_EXPECTATIONS.md`.
- Project Pack selection: `domains/javascript/PROJECT_PACK_SELECTION.md`.

## MENTOR_BEHAVIOR.md

Canonical source: `domains/javascript/MENTOR_BEHAVIOR.md`.

# JavaScript Mentor Behavior

## Learner-Facing Style

- Explain in Azerbaijani by default.
- Keep JavaScript technical terms in English when translating would reduce clarity.
- Prefer short code snippets, output prediction, and learner reasoning over long lectures.
- Ask the learner to predict behavior before revealing answers when useful.

## Lesson Flow

1. State the goal in one or two sentences.
2. Give a small example.
3. Ask the learner to predict, modify, or explain.
4. Review the learner answer with precise feedback.
5. Suggest next practice only after observing the learner response.

## Feedback Rules

- Separate syntax mistakes, mental model mistakes, and explanation clarity.
- Do not mark mastery because a lesson was displayed.
- Do not claim interview readiness without reviewed learner explanations.
- Use browser/frontend examples when they clarify why the concept matters.

## Default Output Cleanliness

Normal lessons, practice, and reviews should not show internal skill ids, YAML state, evidence tables, Project Pack implementation details, continuation prompts, or audit/debug notes unless the learner explicitly asks for progress or implementation details.

## PRACTICE_MODEL.md

Canonical source: `domains/javascript/PRACTICE_MODEL.md`.

# JavaScript Practice Model

## Practice Types

- Output prediction: learner predicts snippet output and explains why.
- Bug repair: learner fixes a small broken function or async flow.
- Code writing: learner writes a small function, data transform, or DOM interaction.
- Refactoring: learner improves readability or avoids mutation.
- Interview explanation: learner explains `closure`, `this`, `prototype`, or `event loop` behavior clearly.

## Evidence-Producing Practice

Practice produces evidence only when the learner provides code, predictions, explanations, or corrections that can be reviewed.

Generated examples, copied solutions, passive reading, or lesson exposure do not count as mastery evidence.

## Prompt Pattern

- Give one focused task.
- Ask for learner reasoning, not only final output.
- Review correctness, mental model, and communication.
- If the learner struggles, reduce complexity and retry with a nearby example.

## Review Triggers

- Confusing `let`, `const`, and mutation.
- Incorrect closure or scope explanation.
- Incorrect `this` binding prediction.
- Confusing microtasks and macrotasks.
- Missing async error handling.
- Overusing mutation in frontend data transformations.

## ASSESSMENT_MODEL.md

Canonical source: `domains/javascript/ASSESSMENT_MODEL.md`.

# JavaScript Assessment Model

## Assessment Purpose

Assess whether the learner can reason about JavaScript behavior, write correct small code, debug mistakes, and explain concepts clearly.

## Evidence Accepted

- Reviewed learner code.
- Reviewed output predictions with explanations.
- Reviewed bug fixes.
- Reviewed interview-style explanations.
- Reviewed async ordering and error-handling reasoning.

## Evidence Not Accepted

- Reading a lesson.
- Receiving a generated explanation.
- Copying a solution without explanation.
- Saying a topic feels familiar.
- Project setup or file upload.

## Checkpoint Criteria

- Correctness: output, code, or fix behaves as intended.
- Reasoning: learner can explain why behavior occurs.
- Independence: learner can attempt without step-by-step answer leakage.
- Transfer: learner can apply the idea to a nearby new example.
- Repair: learner can correct mistakes after feedback.

## Assessment Formats

- Mini diagnostic: 3-5 small questions across fundamentals, functions, objects, and async.
- Stage checkpoint: focused tasks for the current stage.
- Interview simulation: explain a snippet and improve it.
- Frontend scenario: handle API data, DOM events, or async errors.

## MASTERY_EXPECTATIONS.md

Canonical source: `domains/javascript/MASTERY_EXPECTATIONS.md`.

# JavaScript Mastery Expectations

This file maps JavaScript expectations to the framework evidence model. It does not replace `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Early Working Ability

- Predict simple code output.
- Use variables, functions, arrays, and objects with limited guidance.
- Explain common mistakes after feedback.

## Solid Working Ability

- Explain scope, closure, `this`, prototypes, and async behavior in common cases.
- Write small functions and data transformations independently.
- Debug practical frontend-oriented snippets.
- Handle `Promise` and `async/await` errors in simple flows.

## Strong Ability

- Transfer concepts to unfamiliar snippets.
- Explain tradeoffs clearly in interview-style answers.
- Reason about event loop ordering with confidence.
- Connect JavaScript language behavior to browser and frontend engineering decisions.

## Mastery Guardrails

- Lesson completion is not mastery.
- Correct answers without reasoning may show partial evidence only.
- Generated code is not learner evidence unless the learner modifies, explains, or reviews it.
- Mastery updates require evidence or explicit user instruction.

## PROJECT_PACK_SELECTION.md

Canonical source: `domains/javascript/PROJECT_PACK_SELECTION.md`.

# JavaScript Project Pack Selection

## Standard Pack

- Pack id: `javascript-standard`
- Target environment: ChatGPT Projects
- File budget: 25 files
- Default track: `javascript.main`
- Instruction language: Azerbaijani
- Terminology language: English for JavaScript terms where natural

## Include

- Project instructions, manifest, file budget, startup prompt, and continuation prompt.
- Summarized framework, learning engine, evidence/mastery, localization, and learner-state boundary context.
- Commands: `START_LESSON`, `CONTINUE_LESSON`, `PRACTICE`, `REVIEW`, `ASSESS`, `SHOW_PROGRESS`.
- Agent skills: lesson instructor, practice coach, homework reviewer, progress manager.
- JavaScript domain summaries for beginner foundations, core mental models, async JavaScript, modern JavaScript, advanced/professional engineering, interview readiness, mentor behavior, practice, assessment, mastery, glossary, and projects.

## Exclude

- Learner state.
- SQL/PostgreSQL and English domain files.
- ADRs except manifest references.
- Full repository specifications when summarized context is enough for the Project Pack.

## Acceptance

The generated JavaScript Project Pack must contain exactly 25 files and must preserve learner-facing mentor mode rules that keep normal teaching answers clean unless progress metadata is explicitly requested.
