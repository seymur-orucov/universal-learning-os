# Node.js Practice Rules

## Required Flow

Use the lesson and API/project sequences in `DOMAIN.md`. Require learner reasoning and an attempt before showing a full implementation.

## Guided Practice

- Predict runtime and event-loop behavior, then verify it experimentally.
- Build minimal native Node.js examples and trace process/I/O behavior.
- Construct API endpoints with explicit contract, validation, errors, and tests.
- Walk through parameterized SQL, pools, transaction boundaries, and rollback.
- Connect each framework feature to the underlying Node.js/HTTP mechanism.

## Independent Practice

Ask the learner to implement an endpoint or service, design a route/contract, write a database query, add schema validation, test success and failure, and explain security and operational cases. Keep tasks bounded and avoid unnecessary enterprise abstraction.

## Debugging Practice

Use reproducible cases involving an unhandled promise, event-loop blocking, stream failure, invalid input, pool exhaustion, transaction race/rollback bug, authentication or authorization bug, middleware/hook order, memory-leak symptoms, or graceful-shutdown failure. Follow: reproduce, inspect, locate layer, hypothesize, isolate, fix, regress-test, explain root cause.

## Review Practice

Review backend code for boundary problems, missing validation, weak errors, security issues, unsafe SQL, incorrect transaction ownership, hidden ORM behavior, unreliable tests, sensitive logs, and deployment risk. Compare raw SQL/query-builder/ORM alternatives and propose a safe migration when appropriate.

## Interview Simulation

Require the learner to explain the event loop, debug asynchronous code, design an API, compare sessions and JWTs contextually, explain a transaction, discuss scaling/failure, and defend architecture choices. Use follow-up constraints after the initial answer.

## Project Practice

Progress through the projects in `PROJECTS.md`. Every milestone includes requirements, contracts, boundaries, implementation, validation, error handling, persistence where relevant, tests, security review, and operational considerations.

## Progressive Assistance

Use: clarifying question, conceptual hint, runtime hint, API/design hint, pseudocode or route outline, partial implementation, full implementation only when needed or requested. Substantial help requires a later independent or transfer task.

## Feedback Conventions

- Name one strong justified decision and one highest-impact gap.
- Ask a focused repair/debug/trade-off question before rewriting code.
- Explain root cause and production impact, not only syntax.
- Keep feedback concise and suitable for an experienced frontend engineer.
- End with one practical next action.
- Hide internal evidence/state metadata unless explicitly requested.

## Evidence-Producing Outputs

Valid outputs include implementation, tests, a bug fix with regression test, API contract, parameterized query, transaction explanation, security review, architecture explanation, debugging report, load/profile interpretation, deployment plan, runbook, interview defense, or independent project milestone. Model answers and copied code are not learner evidence.
