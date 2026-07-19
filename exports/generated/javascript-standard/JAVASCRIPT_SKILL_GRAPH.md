# JavaScript Skill Graph

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/javascript/SKILL_GRAPH.md

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

## Source: domains/javascript/MASTERY_EXPECTATIONS.md

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
