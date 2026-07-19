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
