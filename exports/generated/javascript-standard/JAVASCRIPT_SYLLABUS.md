# JavaScript Syllabus

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/javascript/SYLLABUS.md

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
