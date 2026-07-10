# Node.js Syllabus

## Ordered Core Track

1. **Node.js foundations.** Node.js as a runtime, runtime versus language, V8, libuv, process model, single-threaded JavaScript execution, concurrency versus parallelism, event-driven architecture, blocking/non-blocking work, and appropriate/inappropriate workloads.
2. **Event loop and asynchronous execution.** Call stack; timers, I/O callbacks, poll, check, and close-callback phases; microtasks; Promise queue; `process.nextTick`; `async`/`await`; starvation; main-thread blocking; and practical ordering/debugging exercises.
3. **Modules and packages.** CommonJS, ES Modules, resolution, package boundaries, `package.json`, `exports`, npm scripts, SemVer, lockfiles, dependency categories/risk, and publishing awareness.
4. **Core APIs and process lifecycle.** `process`, `path`, `url`, `fs`, `os`, `crypto`, `events`, `EventEmitter`, buffers, streams, timers, `AbortController`, environment variables, signals, and graceful shutdown.
5. **Filesystem, buffers, and streams.** Async versus sync filesystem work; readable, writable, and transform streams; backpressure, piping, errors, large files, uploads, and downloads.
6. **Networking and HTTP.** TCP awareness; request/response lifecycle; methods, status codes, headers, cookies, content types, connection reuse, keep-alive, HTTP/1.1 and HTTP/2 awareness, body parsing, streaming, timeouts, proxies, and reverse proxies.
7. **Native HTTP service.** Node `http`, routing, parsing, response construction, JSON/error contracts, separation of concerns, and why frameworks exist.
8. **Fastify with Express comparison.** Fastify routing, hooks, plugins, schema validation, serialization, and errors; Express routing and middleware mental model; framework trade-offs; and when native Node.js, Express, or Fastify fits.
9. **Backend application architecture.** Entry point, validated configuration, routes, handlers/controllers, services, repositories, domain logic, infrastructure boundaries, dependency direction, utilities, feature-based organization, modular monoliths, and avoiding god modules or premature abstraction.
10. **API design.** REST resources and routes; request DTOs and response contracts; pagination, filtering, sorting, search, versioning, idempotency, partial updates, error/validation contracts, evolution, and OpenAPI awareness.
11. **Validation, serialization, and errors.** Runtime/schema validation, TypeScript type erasure, coercion, safe parsing, response serialization, operational/programmer/domain/validation errors, HTTP mapping, error boundaries, logging, swallowed promises, unhandled rejections, and graceful failure.
12. **Logging and observability.** Structured logs, levels, request/correlation IDs, redaction, metrics, tracing awareness, health/readiness/liveness, error tracking, SLI awareness, and privacy-aware logging.
13. **PostgreSQL integration.** Database client versus ORM, pools, parameterized SQL, injection prevention, CRUD, joins, repositories, migrations, schema evolution, errors, N+1, and query performance.
14. **ORM and query-builder trade-offs.** Raw SQL, query builders, Prisma, Drizzle, and TypeORM awareness; generated types; migration ownership; transaction boundaries; when abstraction helps or hides important reasoning. No ORM is required.
15. **Transactions and consistency.** ACID, boundaries, multi-step writes, rollback, idempotency, race conditions, lost updates, isolation, optimistic concurrency, pessimistic locking, and outbox awareness.
16. **Authentication.** Authentication versus authorization, password hashing, sessions/cookies, JWT access/refresh tokens, rotation, logout/revocation, OAuth/OIDC awareness, secure flags, CSRF, password reset, and email verification awareness.
17. **Authorization and tenancy.** Roles, permissions, ownership, policy checks, backend enforcement, frontend-only authorization failures, and multi-tenant access boundaries.
18. **Security.** Validation, SQL injection, XSS awareness, CSRF, CORS, SSRF, path traversal, command injection, prototype pollution, rate limiting, brute-force defense, secrets, secure headers, dependencies/supply chain, sensitive data, and threat-model basics.
19. **Caching.** In-memory and HTTP/reverse-proxy caching, Redis awareness, cache-aside, TTL, invalidation, stale data, stampede, distributed trade-offs, and session storage.
20. **Background jobs.** Queues, retries/backoff, dead-letter queues, idempotent/scheduled/long-running work, email/notifications, visibility, and observability.
21. **Real-time systems.** WebSocket, Server-Sent Events, polling, lifecycle, reconnection, heartbeats, ordering, duplicates, horizontal scaling, pub/sub, and backpressure.
22. **Testing.** Unit, integration, API, database, contract, and end-to-end tests; isolation and data; mocks versus real dependencies; `node:test`, Vitest/Jest, Supertest/equivalents; coverage limitations; and error paths.
23. **Performance.** Measure first; event-loop lag, blocking/CPU-bound work, memory/leaks, heap snapshot awareness, pools, N+1, streams, compression, caching, load testing, profiling, and budgets.
24. **Workers and process scaling.** Worker threads, child processes, cluster/process-manager awareness, CPU offload, horizontal scaling, stateless services, sticky sessions, and shared-state problems.
25. **Reliability and resilience.** Timeouts, retries/backoff, circuit-breaker and bulkhead awareness, graceful shutdown, partial/dependency failure, database/queue/cache outages, health endpoints, and recovery strategy.
26. **Configuration.** Validated environment variables, development/test/production separation, secret separation, twelve-factor awareness, and centralized configuration boundaries.
27. **Deployment and operations.** TypeScript build/start, Docker fundamentals, reverse proxies, signals, CI/CD, deployment migrations, rollback, zero-downtime awareness, logging/monitoring, and provider-neutral cloud awareness.
28. **NestJS specialization.** What NestJS solves; modules, controllers, providers, dependency injection, pipes, guards, interceptors, filters, validation, and testing; architectural trade-offs and when it is useful or excessive. Reconnect every decorator to prior runtime/HTTP/application concepts.
29. **Production project design.** Requirements, data model, API contract, boundaries, auth, validation, errors, persistence, tests, logging, security, deployment, and operational runbook.

## Progression Rules

- Runtime and asynchronous reasoning precede HTTP frameworks.
- HTTP and native server work precede Fastify/Express abstractions.
- Application boundaries, validation, and error handling precede advanced persistence and auth.
- SQL, pooling, and transaction reasoning precede ORM-heavy work.
- Caching, queues, real-time, workers, and distributed patterns follow the single-service foundations they complicate.
- NestJS follows demonstrated runtime, HTTP, architecture, validation, PostgreSQL, and testing foundations.

## Alternative Routes

- **Targeted backend review:** diagnose gaps, then select prerequisite-safe runtime, HTTP, data, security, testing, or operations clusters.
- **Interview preparation:** event-loop explanation, async debugging, API design, session/JWT trade-offs, scaling, transaction reasoning, and architecture defense.
- **Project route:** progress through the five projects while inserting prerequisite lessons before each milestone.
- **Sequential route:** complete the ordered core track from runtime to production.

Every lesson ends with learner output, test/debug activity where relevant, trade-off review, and one recommended next action.
