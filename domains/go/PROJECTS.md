# Go Projects

## Project Contract

Projects are progressive evidence environments, not architecture templates. Each project must remain small enough to explain. A learner may use a monolith or modular monolith; microservices are never required. Every milestone is learner-produced, reviewed, and followed by transfer work when assistance was substantial.

## Project 1 — Go CLI Utility

### Goals

Build a dependable command-line utility that proves toolchain, package, data, file, error, configuration, and testing foundations. Example products include a directory inventory, Markdown link checker, or structured log summarizer.

### Prerequisites

Phases A–E and relevant Phase G/H lessons: `go.toolchain`, `go.packages-modules`, `go.core-language`, `go.data-value-semantics`, `go.error-resource-management`, and testing basics.

### Functional Requirements

- Provide useful flags and help output with validated combinations.
- Read one or more files/directories and produce deterministic text or JSON output.
- Separate command construction, core transformation, and I/O boundaries in cohesive packages.
- Report actionable errors with stable non-zero exit behavior.

### Non-Functional Requirements

Formatted/vetted code, deterministic output, bounded file/input behavior, portable path handling, and useful documentation.

### Constraints

Use the standard library; no CLI framework. Do not introduce interfaces until a consumer test or boundary needs one. No global mutable configuration.

### Expected Evidence

Toolchain transcript, package-boundary explanation, prediction of at least one slice/string behavior, implementation, error-ownership note, and reviewable commits or patch.

### Tests

Table-driven core tests, temp-directory I/O tests, invalid flags, missing/unreadable input, malformed content, output determinism, and exit-code behavior.

### Failure Cases

Missing path, permission failure, partial read, invalid encoding policy, oversized input, output-write failure, and cleanup failure where observable.

### Security Considerations

Untrusted paths, path traversal relative to an allowed root when relevant, symlink policy, terminal-safe errors, secret-like data redaction, and permissions.

### Observability Considerations

Human-readable errors by default; optional structured diagnostic output without leaking file contents or secrets.

### Completion Criteria

Fresh clone builds and tests; the CLI meets its contract; failure paths are demonstrated; the learner explains value semantics, package choices, and error/resource ownership independently.

### Optional Extensions

Streaming output, checksum support, concurrency only after Project 3 prerequisites, benchmarks for a real large-input path, or cross-platform release artifacts.

## Project 2 — Data Processing Pipeline

### Goals

Build a streaming JSON or CSV transformation pipeline that composes `io.Reader`/`io.Writer`, validates records, controls memory, and measures a meaningful workload.

### Prerequisites

Project 1 plus `go.io-encoding`, stronger testing, and benchmark basics.

### Functional Requirements

- Accept file or standard input and emit file or standard output.
- Parse, validate, normalize, filter/aggregate, and serialize records.
- Define a clear malformed-record policy and end-of-run summary.
- Support datasets larger than the intended in-memory budget.

### Non-Functional Requirements

Streaming, bounded buffering, deterministic output, explicit Unicode/time/number policy, and no silent record loss.

### Constraints

Standard library first. A full-file `ReadAll` solution cannot satisfy the large-input path. Generics are allowed only after a concrete need is demonstrated.

### Expected Evidence

I/O ownership diagram, format contract, implementation, malformed/large-input tests, benchmark baseline, allocation or profile interpretation, and trade-off report.

### Tests

Empty input, valid records, malformed/truncated input, unknown fields, invalid UTF-8 policy, maximum-size boundary, writer failure, deterministic ordering, fuzz invariant, and representative benchmark.

### Failure Cases

Mid-stream parse error, partial output, disk-full/writer error simulation, scanner/token limits, cancellation if introduced, and resource cleanup.

### Security Considerations

Input limits, decompression-bomb awareness if compressed inputs are added, formula injection awareness for CSV outputs, path/file permissions, and sensitive-field handling.

### Observability Considerations

Counts for accepted/rejected records, duration, and bounded error samples; no high-cardinality or sensitive per-record logs by default.

### Completion Criteria

Processes the representative large input within the stated memory policy, passes failure/fuzz tests, and supports an evidence-backed performance claim without sacrificing clarity.

### Optional Extensions

Pluggable transformations with a justified small interface, concurrent processing after Project 3, custom serialization, or a golden-output contract.

## Project 3 — Concurrent Work Processor

### Goals

Build a bounded work processor that makes goroutine ownership, cancellation, error propagation, resource release, backpressure, and shutdown explicit.

### Prerequisites

Projects 1–2 and all core Phase I competencies, including race/leak investigation.

### Functional Requirements

- Accept work from a finite source and process it with a configurable upper concurrency bound.
- Propagate cancellation and the chosen error policy without abandoning goroutines.
- Define ordering, retry/no-retry, queue capacity, and result semantics.
- Stop intake and complete or cancel in-flight work according to a documented shutdown policy.

### Non-Functional Requirements

No data races, deadlocks, goroutine leaks, unbounded queues, fire-and-forget work, or sleep-based synchronization.

### Constraints

Use standard `context`, channels, and/or `sync`. Explain why each primitive is used. A channel is not mandatory where a mutex or sequential loop is clearer.

### Expected Evidence

Goroutine lifecycle diagram, invariant list, implementation, race-detector output, cancellation/overload tests, leak-investigation report, and channel-versus-lock defense.

### Tests

Zero/one/many jobs, concurrency-limit invariant, worker failure, source failure, cancellation before/during work, blocked consumer, shutdown deadline, race run, and repeated test for lifecycle stability.

### Failure Cases

Early return, panic inside owned work boundary, full queue, slow consumer, double/incorrect channel close, canceled context, partial results, and shutdown timeout.

### Security Considerations

Resource exhaustion, attacker-controlled job cost, bounded payloads, sensitive errors, and least-privilege worker dependencies.

### Observability Considerations

Queue depth, active/completed/failed work, duration, saturation, cancellation reason, and shutdown outcome with bounded cardinality.

### Completion Criteria

All ownership questions are answered, race and lifecycle tests pass, overload remains bounded, and the learner independently fixes an injected race, deadlock, or leak.

### Optional Extensions

Priority/fairness trade-off, adaptive bounds with measurement, persistent jobs, or ordered result reconstruction.

## Project 4 — Standard-Library HTTP Service

### Goals

Build a production-minded in-memory JSON API with `net/http` before any framework abstraction.

### Prerequisites

Projects 1–3; `go.http-services`, `go.api-contracts`, context, JSON, testing, concurrency lifecycle, and package design basics.

### Functional Requirements

- Implement a small resource API with method-aware routes, JSON request/response contracts, validation, pagination/filtering, and consistent errors.
- Add explicit dependency construction and focused middleware for request ids, logging, and recovery boundary.
- Enforce request size limits and relevant timeouts.
- Support signal-driven graceful shutdown with bounded drain.

### Non-Functional Requirements

Thread-safe state, deterministic handler tests, no global dependencies, documented compatibility/idempotency decisions, and clear `main` lifecycle.

### Constraints

Use `net/http`, `encoding/json`, `httptest`, and standard logging capabilities. No router/framework, ORM, or DI container. Keep the service a monolith.

### Expected Evidence

API contract, package/lifecycle diagram, implementation, handler and shutdown tests, race-detector result, security review, and explanation of every timeout and body limit.

### Tests

Success, malformed/unknown/trailing JSON, validation, unsupported method/content type, not found/conflict, oversized body, canceled request, dependency failure, concurrent access, middleware, and shutdown.

### Failure Cases

Client disconnect, response encoding failure awareness, partial response boundary, panic at handler boundary, slow request, full internal capacity, and shutdown deadline.

### Security Considerations

Validation, request limits/timeouts, safe errors, header/cookie policy if used, CORS/CSRF relevance, path handling, log redaction, and denial-of-service bounds.

### Observability Considerations

Structured request logs, request ids, latency/status metrics design, readiness transition, and no sensitive/high-cardinality labels.

### Completion Criteria

The standard-library service passes functional, failure, race, and lifecycle tests; the learner can later compare an optional router without losing the underlying model.

### Optional Extensions

Chi/Gin/Echo/Fiber translation and comparison, conditional requests, OpenAPI documentation, or client implementation with explicit timeouts.

## Project 5 — PostgreSQL API

### Goals

Replace in-memory persistence with PostgreSQL while preserving explicit SQL, context, transaction, pool, migration, and integration-test reasoning.

### Prerequisites

Project 4, `go.sql-fundamentals`, `go.persistence-postgresql`, package design, failure testing, and security fundamentals.

### Functional Requirements

- Define schema and versioned migrations.
- Implement parameterized CRUD/query behavior and at least one multi-step transactional invariant.
- Handle not-found, conflict/constraint, cancellation, and database-unavailable behavior consistently.
- Expose pagination/filtering without N+1 queries.

### Non-Functional Requirements

Bounded query timeouts, deliberate pool settings, observable database operations, backward-compatible migration/deployment sequence, and deterministic integration isolation.

### Constraints

Start with `database/sql` concepts and explicit SQL. A driver is necessary; pgx is a valid driver/tool choice. ORM-first implementation is not accepted. Repository interfaces must reflect actual application needs, not generic CRUD.

### Expected Evidence

Schema/migration, query and transaction explanation, implementation, integration and partial-failure tests, pool-sizing argument, query-plan/N+1 review, and raw-SQL versus tool comparison.

### Tests

Migration from empty database, success, not found, uniqueness/foreign-key errors, nullable data, rollback after mid-transaction failure, canceled/timed-out query, concurrent invariant, and cleanup/isolation.

### Failure Cases

Database unavailable, pool saturation, slow query, commit failure awareness, rows iteration/scan failure, migration conflict, and partially compatible rollout.

### Security Considerations

Parameterized SQL, least-privilege database user, secret handling, authorization before data access, safe error mapping, sensitive-field/log policy, and backup/retention awareness.

### Observability Considerations

Query class/name rather than raw sensitive SQL, duration/error/pool saturation, transaction outcome, readiness policy, and correlation to request ids.

### Completion Criteria

Migrations and integration tests pass; transaction invariants survive injected failure/concurrency; the learner explains the pool and SQL and can compare pgx/sqlc/query-builder/ORM options honestly.

### Optional Extensions

sqlc experiment, pgx-native comparison, outbox pattern awareness, read-only endpoints, or query-plan optimization backed by evidence.

## Project 6 — Background Job Service

### Goals

Design a reliable background-work component with explicit delivery semantics, retries, idempotency, bounded concurrency, shutdown, and observability.

### Prerequisites

Projects 3 and 5; reliability lifecycle, persistence transactions, service security, and observability basics.

### Functional Requirements

- Accept jobs through an explicit boundary and persist enough state for the selected durability contract.
- Claim/process jobs with bounded concurrency and visible status.
- Implement classified retries with exponential backoff/jitter, attempt limits, and poison-job handling.
- Make externally visible effects idempotent or document unavoidable duplication.
- Stop intake and shut down without silently losing owned work.

### Non-Functional Requirements

Bounded queue/work, restart behavior, deterministic clock/randomness seams, operational recovery, and clear at-least/at-most/exactly-once claim limitations.

### Constraints

No broker is required; PostgreSQL-backed or in-memory-with-explicit-limits designs are valid by scope. Do not claim exactly-once processing without proving the end-to-end effect.

### Expected Evidence

State/delivery model, lifecycle diagram, implementation, retry/idempotency tests, crash/restart analysis, metrics/log design, shutdown evidence, and runbook.

### Tests

Success, transient/permanent error, duplicate delivery, cancellation, restart, concurrency bound, poison job, exhausted retry, database outage, shutdown, and race detector.

### Failure Cases

Retry storm, worker crash/panic, lease expiry if used, duplicate effect, stuck job, clock skew awareness, pool saturation, and process termination during work.

### Security Considerations

Authenticated job creation if exposed, payload validation/limits, least privilege, secret redaction, dangerous action allowlists, and tenant/ownership boundaries.

### Observability Considerations

Queue depth, age, active jobs, attempts, success/failure, dead/poison jobs, saturation, duration, trace/request correlation, and actionable alerts.

### Completion Criteria

Failure injection shows bounded retries, visible state, idempotent behavior where claimed, clean shutdown, and a runbook another engineer could follow.

### Optional Extensions

Scheduled jobs, broker adapter comparison, multi-instance coordination, load shedding, or trace propagation.

## Project 7 — Production Service Capstone

### Goals

Independently design, build, secure, observe, profile, package, and defend a production-ready Go service that integrates the domain's core competencies.

### Prerequisites

Projects 1–6 or equivalent reviewed evidence; all production-gate skills in `SKILL_GRAPH.md`.

### Functional Requirements

- Convert explicit product requirements into API and data contracts.
- Implement cohesive package boundaries, focused `main`, PostgreSQL migrations/queries/transactions, and at least one owned concurrent/background workflow.
- Implement a justified authentication and authorization model.
- Provide validation, pagination/filtering/idempotency where relevant, consistent errors, and configuration validation.

### Non-Functional Requirements

Comprehensive success/failure/integration/race tests; request/query/resource/concurrency limits; graceful startup/shutdown; reliability policies; structured logs, metrics, trace plan, profiles; secure non-root container; CI, deployment, migration, rollback, and runbook.

### Constraints

Standard-library foundations must remain explainable. Frameworks, routers, pgx/sqlc/query builders/ORMs, and external observability libraries are optional only after a written decision. Microservices, Kubernetes, and cloud-specific services are not required.

### Expected Evidence

Requirements, decision records, API/schema diagrams, threat model, implementation, tests, failure-injection report, benchmark/profile analysis, container/build artifacts, CI plan, deployment/rollback plan, operational dashboard/runbook design, code review, and live defense.

### Tests

Contract/unit/integration tests; authentication and authorization; malformed/oversized input; injection; transaction rollback and concurrency; dependency outage/latency; retry/idempotency; race detector; shutdown; migration compatibility; container startup/health; and one representative performance workload.

### Failure Cases

Partial database/network failure, overload, pool saturation, background-job failure, signal during work, invalid startup configuration, migration mismatch, slow client, memory/goroutine leak, security incident, and rollback limitation.

### Security Considerations

Threat model, least privilege, secret rotation/storage, TLS boundary, password/session/token design as applicable, CORS/CSRF relevance, parameterized SQL, secure files, redacted logs, dependency risk, request limits, and safe errors.

### Observability Considerations

Structured logs with correlation, actionable metrics and cardinality policy, trace boundaries, health/readiness, profiles/runtime diagnostics, SLO-style signals, dashboards/alerts, and incident investigation flow.

### Completion Criteria

The service starts from validated configuration, passes all gates, degrades and shuts down according to documented policies, ships as a non-root container, and survives an independent design/code/incident review. The learner revises the design after one new security, consistency, scale, or operational constraint.

### Optional Extensions

gRPC/WebSockets, broker, distributed tracing implementation, Kubernetes manifests, multi-region design, reflection/code generation, or framework specialization only when they answer an explicit capstone need.
