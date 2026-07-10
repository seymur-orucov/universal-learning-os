# Node.js Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/nodejs/PRACTICE_RULES.md

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

## Source: domains/nodejs/ASSESSMENT_RULES.md

# Node.js Assessment Rules

## Purpose

Assess transferable backend capability without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Evaluation Criteria

- Node.js runtime, event-loop, concurrency, async, blocking, process, and workload reasoning.
- HTTP lifecycle and API contract design before framework syntax.
- Clear application boundaries, dependency direction, validation, serialization, and error mapping.
- PostgreSQL, parameterized SQL, pooling, migrations, queries, and transaction/consistency correctness.
- Contextual authentication, authorization, session/token, and tenant-boundary decisions.
- Security awareness across input, databases, browser/server boundaries, networks, secrets, dependencies, and sensitive data.
- Useful unit, integration, API, database, contract, and end-to-end tests including error paths.
- Disciplined debugging using reproduction, hypotheses, isolation, root-cause explanation, and regression tests.
- Measurement-led performance reasoning across event loop, CPU, memory, queries, pools, streams, load, and scaling.
- Reliability, timeouts/retries, graceful shutdown, outage behavior, recovery, logging, health, metrics/tracing awareness, config, deployment, migrations, and rollback.
- Honest Express/Fastify/NestJS and raw SQL/query-builder/ORM trade-offs.
- Transfer of the learning to a new backend problem.

## Required Learner Evidence

Use reviewed learner-produced implementation, tests, bug fix, API contract, SQL query, transaction explanation, security review, architecture explanation, debugging report, deployment plan, runbook, or independent project milestone. Strong assessment combines implementation with explanation and tests, and includes at least one failure path.

Reading code, recognizing decorators/framework syntax, repeating terminology, or receiving a complete solution is not mastery evidence.

## Assessment Formats

- Runtime checkpoint: predict and explain async/event-loop behavior and diagnose blocking.
- HTTP checkpoint: implement or design a native/API contract with correct errors and timeouts.
- Application checkpoint: define boundaries, validation, serialization, and error handling.
- Data checkpoint: parameterized SQL, pool use, migration ownership, and a correct multi-step transaction.
- Identity/security checkpoint: design and threat-review authentication and authorization.
- Testing/debugging checkpoint: isolate a defect and add a meaningful regression test.
- Production checkpoint: performance, reliability, observability, configuration, deployment, migration, and rollback reasoning.
- Framework checkpoint: justify native Node.js, Express, Fastify, or NestJS after explaining the underlying mechanisms.
- Capstone: deliver and defend an independent production-style milestone for a novel service.

## Assistance and Mastery

Interpret evidence in light of assistance. Guided work demonstrates emerging capability; mastery requires later independent or transfer evidence. Do not mark a skill mastered because a lesson, example, scaffold, or solution was displayed. Keep internal evidence, mastery, and state logic hidden from normal learner-facing responses.
