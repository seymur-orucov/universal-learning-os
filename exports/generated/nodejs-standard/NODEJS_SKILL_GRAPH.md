# Node.js Skill Graph

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/nodejs/SKILL_GRAPH.md

# Node.js Skill Graph

## Runtime and Platform Skills

- `nodejs.runtime-model`: distinguishes language, V8, libuv, processes, concurrency, parallelism, and workload fit.
- `nodejs.event-loop`: predicts phases, microtasks, `process.nextTick`, `async`/`await`, starvation, and blocking effects.
- `nodejs.modules-packages`: uses CJS/ESM, resolution, package boundaries, exports, scripts, SemVer, lockfiles, and dependency-risk reasoning.
- `nodejs.core-apis`: uses process, paths/URLs, filesystem, crypto, events, timers, cancellation, environment, signals, and shutdown.
- `nodejs.streams`: handles buffers, readable/writable/transform streams, backpressure, piping, large data, and errors.

## HTTP and Application Skills

- `nodejs.http`: explains TCP/HTTP lifecycle, contracts, connections, bodies, streaming, timeouts, and proxies.
- `nodejs.native-server`: builds a separated native HTTP JSON service.
- `nodejs.frameworks`: uses Fastify and compares Express/native Node.js without hiding platform behavior.
- `nodejs.architecture`: designs feature, handler, service, repository, domain, configuration, and infrastructure boundaries.
- `nodejs.api-design`: models REST resources, evolution, pagination, idempotency, partial updates, and OpenAPI-aware contracts.
- `nodejs.validation-serialization`: validates runtime input and controls output contracts despite TypeScript erasure.
- `nodejs.error-handling`: classifies, maps, logs, propagates, tests, and recovers from errors.

## Data, Identity, and Security Skills

- `nodejs.postgresql`: uses pools, parameterized SQL, joins, migrations, repositories, and query diagnostics.
- `nodejs.data-abstractions`: compares raw SQL, query builders, Prisma, Drizzle, and TypeORM without surrendering migration or SQL ownership.
- `nodejs.transactions`: selects boundaries and reasons about ACID, races, isolation, locking, rollback, idempotency, and outbox use.
- `nodejs.authentication`: designs safe password, session/cookie, token, recovery, logout, and federation-aware flows.
- `nodejs.authorization`: enforces roles, permissions, ownership, policies, and tenant boundaries on the backend.
- `nodejs.security`: threat-models and mitigates injection, CSRF/CORS, SSRF, traversal, command execution, abuse, secrets, dependency, and data risks.

## Quality and Operations Skills

- `nodejs.testing`: selects unit-through-E2E tests, isolates data, tests failure paths, and chooses mocks versus real dependencies.
- `nodejs.observability`: creates structured/redacted logs, correlation, health signals, metrics/tracing awareness, and useful operational diagnostics.
- `nodejs.caching-jobs`: designs cache and background-job semantics, invalidation, retries, idempotency, visibility, and failure handling.
- `nodejs.realtime`: designs WebSocket/SSE/polling lifecycle, ordering, duplication, reconnection, scaling, and backpressure.
- `nodejs.performance`: measures event-loop, CPU, memory, query, pool, stream, compression, load, and profiling behavior.
- `nodejs.scaling`: applies workers/processes, stateless horizontal scaling, and shared-state trade-offs.
- `nodejs.reliability`: applies timeouts, retry/backoff, containment, graceful shutdown, outage behavior, and recovery.
- `nodejs.configuration-deployment`: validates config/secrets and designs build, Docker, CI/CD, migration, rollback, and monitoring workflows.
- `nodejs.nestjs-specialization`: maps NestJS modules/providers/controllers and cross-cutting mechanisms to established fundamentals and judges fit.
- `nodejs.production-project`: integrates requirements, contracts, architecture, persistence, identity, security, testing, operations, and a runbook.

## Dependencies

- Runtime model precedes event-loop diagnostics, core APIs, streams, and performance work.
- HTTP understanding and a native server precede framework routing and middleware/hook work.
- Architecture, validation, and error handling precede production API assessment.
- PostgreSQL fundamentals precede data-abstraction comparison and transaction assessment.
- Authentication precedes authorization; both precede an authenticated-service milestone.
- Testing and observability accompany every production-facing milestone rather than appearing only at the end.
- Caching, queues, real-time systems, workers, and resilience require earlier failure, consistency, and operational reasoning.
- NestJS specialization requires independent evidence for runtime, HTTP, architecture, validation, PostgreSQL, and testing.
- Production-project readiness requires integration and transfer evidence across the graph, not completion of displayed lessons.

Targeted routes may skip familiar lessons but not missing prerequisite evidence. Review priorities include event-loop misconceptions, framework-only explanations, trusted input, swallowed errors, pool/transaction bugs, frontend-only authorization, missing failure tests, secrets in code, and operations treated as an afterthought.
