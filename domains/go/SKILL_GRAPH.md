# Go Skill Graph

## Graph Conventions

Each stable `go.*` id names a reusable learner competency, not an agent capability or learner record. `Prerequisites` control lesson and assessment order. `Evidence` must be learner-produced and reviewed under `ASSESSMENT_RULES.md`. Syllabus phases are canonical in `SYLLABUS.md`.

## Core Dependency Spine

```text
go.toolchain
-> go.packages-modules
-> go.core-language
-> go.data-value-semantics
-> go.methods-composition
-> go.interface-design
-> go.error-resource-management
-> go.testing-tooling
-> go.concurrency-ownership
-> go.http-services
-> go.persistence-postgresql
-> go.production-engineering
```

Generics branches from type-system and ordinary-function competence. HTTP also depends on JSON/I/O, testing, context, and errors. Persistence depends on context, errors, tests, and SQL fundamentals. Distributed-system specialization depends on reliable single-service production foundations.

## Orientation and Language

### `go.toolchain`

- Description: explains Go's compiled execution model and uses `go run`, `go build`, `go test`, `go fmt`, `go vet`, `go doc`, compiler output, and environment inspection deliberately.
- Prerequisites: professional programming fundamentals.
- Evidence: create, format, build, test, vet, document, and diagnose a small program while explaining each tool's role.
- Syllabus: Phase A.

### `go.packages-modules`

- Description: designs module paths, packages, imports, executable packages, visibility, documentation, and a cohesive repository layout.
- Prerequisites: `go.toolchain`.
- Evidence: produce a multi-package module without cycles or speculative fragmentation and defend exported boundaries.
- Syllabus: Phases A and K.

### `go.core-language`

- Description: predicts declarations, zero values, constants, conversions, control flow, functions, multiple results, scope, visibility, and `defer` behavior.
- Prerequisites: `go.toolchain`, basic package use.
- Evidence: trace and implement Go-specific language behavior, fix compiler feedback, and explain differences from JavaScript/TypeScript.
- Syllabus: Phase B.

### `go.data-value-semantics`

- Description: reasons about arrays, slices/backing arrays, maps, structs, copies, aliasing, pointers, addressability, mutation, strings/bytes/runes, UTF-8, nil, comparison, and allocation awareness.
- Prerequisites: `go.core-language`.
- Evidence: predict output and mutation before execution, repair aliasing/nil/Unicode bugs, and justify copy versus pointer decisions.
- Syllabus: Phase C.

## Abstraction and Failure

### `go.methods-composition`

- Description: selects value or pointer receivers, reasons about method sets, and uses composition/embedding without inheritance mental models.
- Prerequisites: `go.data-value-semantics`.
- Evidence: predict method availability, implement a cohesive concrete type, and defend receiver consistency and embedding choices.
- Syllabus: Phase D.

### `go.interface-design`

- Description: uses implicit satisfaction, small consumer-defined interfaces, interface values, assertions, type switches, and concrete dependencies appropriately.
- Prerequisites: `go.methods-composition`, substantial concrete-type experience.
- Evidence: remove premature or oversized interfaces, diagnose a typed-nil interface bug, and create a minimal consumer boundary only where substitution is real.
- Syllabus: Phase D.

### `go.generics`

- Description: uses type parameters, constraints, `comparable`, approximation, generic functions/structures, and chooses generics only when clearer than concrete code or interfaces.
- Prerequisites: `go.core-language`, `go.data-value-semantics`, ordinary functions; `go.interface-design` for comparison decisions.
- Evidence: generalize proven concrete code, test it across types, and reject or simplify an abstraction that reduces clarity.
- Syllabus: Phase F.

### `go.error-resource-management`

- Description: treats errors as values, adds useful context, preserves inspectability, assigns logging/return ownership, manages resources, and limits panic/recover to justified boundaries.
- Prerequisites: `go.core-language`, `go.data-value-semantics`.
- Evidence: implement and test success, failure, partial initialization, cleanup, wrapping, `errors.Is`/`errors.As`, and panic-boundary behavior.
- Syllabus: Phase E.

## I/O and Engineering Tools

### `go.io-encoding`

- Description: composes `io.Reader`/`io.Writer`, files, buffers, streaming, JSON, time, parsing, environment configuration, flags, and input/resource limits.
- Prerequisites: `go.core-language`, `go.error-resource-management`.
- Evidence: build a bounded streaming command, handle malformed/oversized data, and test ownership and cleanup.
- Syllabus: Phase G.

### `go.testing-tooling`

- Description: uses table tests, subtests, helpers, isolation, fixtures, justified golden tests, HTTP/integration tests, benchmarks, fuzzing, race detection, coverage, vet, and deterministic design.
- Prerequisites: `go.packages-modules`, `go.error-resource-management`; target competency under test.
- Evidence: produce meaningful success/failure tests and choose the right engineering tool for a stated risk.
- Syllabus: Phase H.

### `go.performance-measurement`

- Description: designs representative benchmarks, measures allocations, uses profiles, distinguishes micro/macro effects, and makes evidence-backed optimization decisions.
- Prerequisites: `go.testing-tooling`, `go.io-encoding`; the subsystem being measured.
- Evidence: establish a baseline, interpret benchmark/profile evidence, make one justified change, verify correctness, and report trade-offs.
- Syllabus: Phases H, O, and P.

## Concurrency

### `go.context-cancellation`

- Description: propagates request/work cancellation and deadlines, owns timers, uses context values only for request-scoped metadata, and avoids storing context or using it as configuration.
- Prerequisites: `go.core-language`, `go.error-resource-management`.
- Evidence: implement and test deadline/cancellation propagation through a fallible operation with cleanup.
- Syllabus: Phases I and J.

### `go.concurrency-ownership`

- Description: distinguishes concurrency/parallelism and specifies goroutine start ownership, stop conditions, errors, resource cleanup, bounds, waiting, and shutdown.
- Prerequisites: `go.core-language`, `go.data-value-semantics`, `go.error-resource-management`, `go.context-cancellation`.
- Evidence: annotate a concurrent design with ownership/lifecycle and implement a bounded cancelable task without leaks.
- Syllabus: Phase I.

### `go.channels-synchronization`

- Description: selects channels, mutexes, read/write mutexes, atomics, wait groups, and once by the invariant being protected; reasons about buffering, closing, and visibility.
- Prerequisites: `go.concurrency-ownership`.
- Evidence: defend channel versus lock choices, implement safe shared state or communication, and explain close ownership and capacity.
- Syllabus: Phase I.

### `go.concurrent-failure-debugging`

- Description: finds and fixes races, deadlocks, goroutine leaks, backpressure failures, unbounded work, lost errors, and shutdown bugs using tests and diagnostics.
- Prerequisites: `go.channels-synchronization`, `go.testing-tooling`.
- Evidence: reproduce and repair at least one race and one leak/deadlock, add regression tests, and explain detector limitations.
- Syllabus: Phases I and O.

### `go.concurrent-patterns`

- Description: implements bounded worker pools, fan-out/fan-in, pipelines, early termination, cancellation, backpressure, ordering policy, and error propagation without pattern worship.
- Prerequisites: `go.channels-synchronization`, `go.concurrent-failure-debugging`.
- Evidence: build and test a bounded pipeline under success, failure, cancellation, overload, and shutdown.
- Syllabus: Phase I.

## Services and Design

### `go.http-services`

- Description: builds `net/http` handlers and servers with routing, methods, headers, status codes, bounded JSON, validation, consistent errors, middleware, timeouts, context, explicit dependencies, tests, and graceful shutdown.
- Prerequisites: `go.error-resource-management`, `go.io-encoding`, `go.testing-tooling`, `go.context-cancellation`; concurrency lifecycle basics for server shutdown.
- Evidence: implement and test a standard-library service including malformed input, dependency failure, timeouts, limits, and shutdown.
- Syllabus: Phase J.

### `go.api-contracts`

- Description: designs resources, validation, pagination, filtering, idempotency, versioning/evolution, authentication/authorization boundaries, and stable error responses.
- Prerequisites: `go.http-services`.
- Evidence: write and implement a contract with compatibility, failure, and security tests and defend its trade-offs.
- Syllabus: Phases J and M.

### `go.package-application-design`

- Description: creates cohesive packages, explicit dependency direction/construction, focused `main`, internal/public APIs, and contextual feature/layer boundaries without mechanical Clean Architecture.
- Prerequisites: `go.packages-modules`, `go.interface-design`, `go.error-resource-management`, concrete service experience.
- Evidence: refactor a cyclic, fragmented, or global-state design and defend the resulting construction and lifecycle.
- Syllabus: Phase K.

## Persistence and Security

### `go.sql-fundamentals`

- Description: uses relational models, parameterized SQL, joins, constraints, indexes, transactions, isolation, and query plans sufficiently for explicit persistence reasoning.
- Prerequisites: basic relational-data awareness.
- Evidence: write and explain SQL and transaction behavior for the service's data invariants.
- Syllabus: Phase L; deeper SQL may use the SQL/PostgreSQL domain.

### `go.persistence-postgresql`

- Description: uses `database/sql` and PostgreSQL drivers with context-aware queries, rows/scanning, pools, transactions, migrations, integration tests, timeouts, error classification, nullable data, and N+1 avoidance.
- Prerequisites: `go.context-cancellation`, `go.error-resource-management`, `go.testing-tooling`, `go.sql-fundamentals`, `go.package-application-design`.
- Evidence: implement a transactional boundary with explicit SQL, migration, failure tests, pool reasoning, and operational diagnostics.
- Syllabus: Phase L.

### `go.persistence-tool-evaluation`

- Description: compares raw SQL, pgx, sqlc, query builders, and ORMs after understanding SQL, pools, transactions, and observability.
- Prerequisites: `go.persistence-postgresql`.
- Evidence: produce a contextual decision with a small translated example, hidden-cost analysis, escape hatches, migration ownership, and revisit criteria.
- Syllabus: Phase L.

### `go.service-security`

- Description: handles trust-boundary validation, injection, authentication/authorization, sessions/cookies/tokens, secrets, TLS awareness, CORS/CSRF, limits, file safety, least privilege, sensitive logs, dependency risk, and secure errors.
- Prerequisites: `go.api-contracts`, `go.persistence-postgresql` when the service persists data, failure-path testing.
- Evidence: threat-model, harden, and test a service including authorization, injection, limit, secret, and redaction concerns.
- Syllabus: Phase M.

## Production Engineering

### `go.reliability-lifecycle`

- Description: designs validated startup, signals, readiness/liveness, graceful shutdown, retries/backoff, idempotency, bounded queues, load shedding, background jobs, partial failure, and runbooks.
- Prerequisites: `go.http-services`, `go.persistence-postgresql` when applicable, `go.concurrent-patterns`, `go.service-security`, `go.testing-tooling`.
- Evidence: inject overload/dependency failure, demonstrate bounded behavior and ordered shutdown, and write a usable runbook.
- Syllabus: Phase N.

### `go.observability-debugging`

- Description: uses structured logs, correlation ids, metrics, traces, `pprof`, runtime statistics, and execution diagnostics to separate code, database, network, and infrastructure causes.
- Prerequisites: `go.testing-tooling`, `go.http-services`, `go.concurrency-ownership`; production subsystem context.
- Evidence: diagnose a latency, leak, contention, or partial-failure scenario with correlated evidence and a causal report.
- Syllabus: Phase O.

### `go.deployment-operations`

- Description: builds binaries, reasons about cross-compilation, creates secure multi-stage containers, validates configuration, defines CI gates, coordinates migrations, signals, health, rollout, rollback, and cloud-neutral operation.
- Prerequisites: `go.reliability-lifecycle`, `go.observability-debugging`, `go.service-security`, `go.performance-measurement`.
- Evidence: produce a release artifact/container, CI plan, deployment/migration/rollback plan, and operational validation evidence.
- Syllabus: Phase Q.

### `go.production-engineering`

- Description: integrates language, error, testing, concurrency, HTTP, persistence, security, reliability, observability, performance, and deployment judgment in a maintainable single service.
- Prerequisites: `go.http-services`, `go.persistence-postgresql`, `go.service-security`, `go.reliability-lifecycle`, `go.observability-debugging`, `go.deployment-operations`.
- Evidence: complete and defend an independent production capstone milestone under changed failure, security, or scale constraints.
- Syllabus: Phases J–Q and Project 7.

### `go.advanced-specialization`

- Description: evaluates reflection, unsafe, cgo, runtime/compiler internals, advanced networking, gRPC, WebSockets, brokers, distributed systems, code generation, Kubernetes, and framework specializations without displacing foundations.
- Prerequisites: `go.production-engineering`; additional topic-specific prerequisites.
- Evidence: a bounded experiment or design decision that includes safety, portability, operational cost, alternatives, and exit criteria.
- Syllabus: Phase R.

## Progression Gates

- Data gate: `go.core-language` before independent slice/map/pointer work.
- Interface gate: concrete-type and method experience before advanced interface design.
- Generics gate: ordinary functions and type-system foundations before type parameters.
- Concurrency gate: functions, errors, data ownership, and cancellation before goroutine patterns.
- HTTP gate: errors, JSON/I/O, testing, and context before independent services.
- Database gate: context, errors, tests, package boundaries, and SQL fundamentals before persistence mastery.
- Production gate: HTTP, persistence, security, testing, observability, reliability, and shutdown behavior before production-service claims.
- Distributed gate: reliable single-service evidence before distributed-system specialization.
- Assistance gate: substantial help requires a later independent or transfer task.
