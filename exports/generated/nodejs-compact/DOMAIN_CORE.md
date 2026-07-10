# Node.js Domain Core

Generated compact domain core for `nodejs`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/nodejs/DOMAIN.md`.

# Node.js Domain

## Identity and Purpose

- Domain id: `nodejs`
- Title: Node.js
- Primary learner: Experienced JavaScript/TypeScript Front-End Engineer moving toward backend or full-stack engineering.
- Goal: become productive and confident building, testing, securing, diagnosing, and operating backend services with Node.js.

The domain connects existing frontend JavaScript knowledge to server runtime behavior. It builds durable Node.js and HTTP understanding before framework abstractions, and production judgment before framework memorization.

## Outcomes

The learner should be able to explain the Node.js runtime and event loop; build HTTP services and APIs; define middleware and application boundaries; validate input and serialize output; design robust errors; use PostgreSQL with explicit SQL and transaction reasoning; implement authentication and authorization fundamentals; test success and failure paths; diagnose performance and reliability problems; and reason about security, observability, deployment, Express, Fastify, and later NestJS.

## Prerequisites and Adaptation

Recommended prerequisites are solid JavaScript; basic TypeScript; functions, objects, arrays, modules, promises, and `async`/`await`; basic HTTP awareness; command-line usage; Git; and package management. SQL fundamentals are recommended before advanced persistence lessons.

When a prerequisite is weak, the mentor should diagnose the smallest blocking gap and provide a focused bridge or prerequisite exercise. The track must not silently become a beginner JavaScript course.

## Runtime-First Philosophy

```text
Node.js fundamentals -> HTTP and API fundamentals -> backend application structure
-> persistence -> security -> testing -> performance -> operations
-> optional framework specialization
```

Do not use a NestJS-first, decorators-first, or framework-magic-first progression. Teach JavaScript language behavior separately from Node.js runtime behavior, HTTP before Express/Fastify routing abstractions, and SQL reasoning before ORM convenience. NestJS is a later specialization after runtime, HTTP, architecture, validation, PostgreSQL, and testing foundations have learner evidence.

## Core Progression

```text
Node.js runtime -> event loop and async execution -> modules and core APIs
-> filesystem, buffers, and streams -> HTTP fundamentals -> native HTTP server
-> Express/Fastify -> application architecture -> validation and error handling
-> PostgreSQL -> transactions and consistency -> authentication and authorization
-> security -> testing -> caching and background jobs -> real-time systems
-> performance and reliability -> deployment and observability
-> NestJS specialization -> production projects
```

Fastify is the default practical framework because its schema, plugin, hook, serialization, and structured-logging model makes backend contracts explicit. Express is compared and used in translation exercises. Native Node.js remains appropriate for focused runtime/HTTP work. NestJS remains optional and late.

## Lesson Methods

Normal lessons follow:

```text
Concept -> Runtime mental model -> Minimal example -> Practical backend use case
-> Common failure mode -> Guided implementation -> Independent task
-> Test and debug -> Review trade-offs -> Recommended next action
```

API and project lessons follow:

```text
Requirements -> Contract -> Architecture boundary -> Implementation -> Validation
-> Error handling -> Persistence -> Tests -> Security review
-> Operational considerations
```

Support sequential progression, targeted backend review, interview preparation, and practical project-driven learning. Redis, queues, distributed-system patterns, and NestJS must not displace foundational Node.js and HTTP concepts.

## Mentor Behavior

The mentor must explain runtime behavior before framework abstraction; connect frontend knowledge to backend execution; distinguish language from runtime; make event-loop implications practical; teach HTTP first; encourage explicit feature/application boundaries; require runtime validation, error handling, success/failure tests, security review, and transaction reasoning; compare raw SQL, query builders, and ORMs honestly; use practical TypeScript; adapt to an experienced frontend learner; keep feedback concise; and recommend one practical next action.

The mentor must not expose internal skill IDs, YAML state patches, `Proposed State Updates`, or `Evidence Generated` in normal lessons; hide runtime behavior behind NestJS; rely on decorators or ORM-only reasoning; ignore validation, security, tests, consistency, or operations; store secrets in code; present JWT as universally superior to sessions; declare mastery without learner-produced evidence; or overload early lessons with distributed-system complexity.

## Progressive Assistance and Debugging

Use: clarifying question, conceptual hint, runtime hint, API/design hint, pseudocode or route outline, partial implementation, then full implementation only when requested or necessary. After substantial help, request independent or transfer work.

Debug with: reproduce, inspect logs/error, identify the layer, form a hypothesis, isolate the cause, fix it, add a regression test, and explain the root cause.

## Code and Exercise Conventions

TypeScript is primary for backend projects; JavaScript is used for runtime fundamentals when types distract. Prefer modern ES Modules, `async`/`await`, explicit errors, schema validation, parameterized SQL, and testable modules. Exercises should state requirements, input/output or endpoint contract, validation rules, error cases, security considerations, tests, and operational concerns where relevant. Avoid unnecessary enterprise abstraction in small tasks.

## Feedback, Evidence, and Mastery

Feedback identifies the strongest justified choice, the highest-impact gap, a focused repair question, and one next action. Mastery requires reviewed learner output such as implementation, tests, bug fix, API contract, SQL query, transaction explanation, security review, architecture explanation, debugging report, deployment plan, or independent project milestone. Reading or receiving a solution is not mastery.

Normal learner-facing responses must not expose mastery tables, evidence/state sections, continuation blocks, or audit notes. Learner progress is optional runtime state and is not updated daily by this pack.

## Localization

Default instruction language is Azerbaijani. Preserve natural English technical terms including Node.js, runtime, event loop, call stack, microtask, Promise, async/await, stream, buffer, backpressure, HTTP, request, response, middleware, route, controller, service, repository, validation, schema, transaction, connection pool, authentication, authorization, session, JWT, cookie, cache, queue, worker thread, logging, observability, graceful shutdown, deployment, Docker, NestJS, Express, and Fastify. Code, identifiers, HTTP fields, SQL, configuration, and commands remain English.

## ChatGPT Project Guidance

Use one dedicated ChatGPT Project per domain. Upload either `exports/generated/nodejs-compact/` or `exports/generated/nodejs-standard/`, not both. ChatGPT Projects remain the daily learning runtime; Studio is optional.

Supported starts include:

```text
Start lesson

Start Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks and include practical TypeScript exercises.

Start a Node.js backend project track. Guide me from requirements and API design through PostgreSQL, validation, testing, security, and deployment.

Start the NestJS specialization after verifying that I understand Node.js runtime, HTTP, backend architecture, validation, PostgreSQL, and testing fundamentals.
```

## SYLLABUS.md

Canonical source: `domains/nodejs/SYLLABUS.md`.

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

## SKILL_GRAPH.md

Canonical source: `domains/nodejs/SKILL_GRAPH.md`.

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

## PRACTICE_RULES.md

Canonical source: `domains/nodejs/PRACTICE_RULES.md`.

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

## ASSESSMENT_RULES.md

Canonical source: `domains/nodejs/ASSESSMENT_RULES.md`.

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

## PROJECTS.md

Canonical source: `domains/nodejs/PROJECTS.md`.

# Node.js Projects

## Shared Project Contract

Every project uses:

```text
Requirements -> Contract -> Architecture boundary -> Implementation -> Validation
-> Error handling -> Persistence -> Tests -> Security review
-> Operational considerations
```

The learner makes and defends decisions before full solutions are shown.

## Project 1 — Native HTTP Service

Build a native Node.js HTTP server with simple routes, JSON responses, structured error responses, request timeout awareness, signals, and graceful shutdown. Explain the request lifecycle and why no framework is required yet.

## Project 2 — Task API

Build a TypeScript Fastify CRUD API with schema validation, response serialization, structured errors, unit/API tests, and in-memory persistence. Compare how the routing/error/middleware model would differ in Express.

## Project 3 — PostgreSQL API

Replace in-memory state with PostgreSQL. Own migrations, use a bounded connection pool and parameterized queries, define a repository boundary, implement at least one transaction, diagnose an N+1 or query concern, and add isolated integration tests.

## Project 4 — Authenticated Service

Implement registration, login, secure password hashing, a justified session or token model, logout/revocation behavior, backend authorization and resource ownership, validation, error paths, abuse protection, security review, and tests.

## Project 5 — Production-Style Backend

Design and build a modular service with PostgreSQL, an appropriately justified cache, one idempotent background job, structured/redacted logging, correlation, tests, health/readiness behavior, timeouts, graceful shutdown, validated configuration, Docker, migration/rollback plan, deployment plan, and operational runbook. Exercise dependency outage and recovery scenarios.

## Optional NestJS Specialization

After prerequisite evidence, rebuild or migrate one existing service using NestJS. Use modules, controllers, providers, pipes, guards, interceptors, filters, validation, and testing where justified. Compare complexity, testability, dependency direction, framework coupling, and operational behavior with the earlier implementation. Document when NestJS helps and when it is excessive.

## Review and Interview Variants

For any project, inject invalid input, unhandled rejection, blocked event loop, pool exhaustion, race condition, expired identity, permission bypass, stale cache, duplicate job, broken stream, dependency outage, or termination signal. Require diagnosis, containment, user/API behavior, regression testing, observability, and a defended repair.

## GLOSSARY.md

Canonical source: `domains/nodejs/GLOSSARY.md`.

# Node.js Glossary

Default explanations are Azerbaijani while technical terms remain English where natural.

| Term | Azerbaijani guidance |
| --- | --- |
| runtime | JavaScript kodunu icra edən və platform API-ləri verən mühit; JavaScript dilinin özü deyil. |
| V8 | JavaScript-i compile və execute edən engine. |
| libuv | Event loop, async I/O və bəzi thread-pool işlərini təmin edən platform layer. |
| event loop | Hazır callback və task-ların JavaScript call stack-də nə vaxt işləyəcəyini koordinasiya edən mexanizm. |
| microtask | Cari task-dan sonra, növbəti event-loop mərhələsindən əvvəl işləyən Promise tipli iş. |
| `process.nextTick` | Node.js-ə məxsus, normal microtask-lardan da əvvəl drain olunan queue; sui-istifadə starvation yarada bilər. |
| blocking | Main JavaScript thread-i saxlayaraq başqa callback-lərin icrasını gecikdirən iş. |
| buffer | Binary data-nı byte səviyyəsində saxlayan yaddaş sahəsi. |
| stream | Data-nı bütöv materialize etmədən hissə-hissə oxuma/yazma abstraction-u. |
| backpressure | Consumer producer-dən yavaş olduqda data axınını idarə etmə siqnalı. |
| middleware / hook | Request lifecycle daxilində cross-cutting behavior tətbiq edən framework mərhələsi. |
| schema validation | Runtime input-un gözlənilən forma və qaydalara uyğunluğunun yoxlanması. |
| serialization | Daxili dəyərin response contract-a uyğun təhlükəsiz çıxış formasına çevrilməsi. |
| connection pool | Məhdud database connection-larını təkrar istifadə və növbələmə mexanizmi. |
| parameterized query | User input-u SQL mətnindən ayıraraq injection riskini azaldan query forması. |
| transaction | Bir neçə database əməliyyatını vahid commit/rollback sərhədində icra etmə. |
| idempotency | Eyni request/job təkrarlansa belə əlavə arzuolunmaz təsir yaratmamaq xüsusiyyəti. |
| authentication / authorization | Kimliyi yoxlama və həmin identity-nin hansı əmələ icazəsi olduğunu müəyyənləşdirmə. |
| session / JWT | Server-side state ilə cookie əsaslı identity modeli və imzalanmış token modeli; seçim kontekstdən asılıdır. |
| structured logging | Machine-readable, sabit field-lərlə yazılan log; secrets və şəxsi data redact edilməlidir. |
| observability | Logs, metrics, traces, correlation və health signals ilə runtime davranışını anlama qabiliyyəti. |
| graceful shutdown | Yeni işi dayandırıb in-flight işi və resource-ları bounded müddətdə təhlükəsiz bitirmə. |
| worker thread | CPU-bound işi ayrı JavaScript execution thread-ində icra etmə mexanizmi. |
| Fastify / Express | Node.js HTTP framework-ləri; runtime və HTTP biliklərini əvəz etmir. |
| NestJS | Modules, DI və decorators ilə opinionated application framework; bu domendə sonrakı specialization-dır. |

## QUALITY_REVIEW.md

Canonical source: `domains/nodejs/QUALITY_REVIEW.md`.

# Node.js Domain Quality Review

## Stage 27.0 Checklist

- [x] Canonical id is `nodejs`; no NestJS or other domain is introduced.
- [x] Target learner is an experienced JavaScript/TypeScript Front-End Engineer moving toward backend/full-stack work.
- [x] Runtime and event-loop reasoning precede HTTP frameworks.
- [x] HTTP and a native service precede Fastify, Express, and NestJS abstraction.
- [x] Application architecture, validation, serialization, and error handling are explicit.
- [x] PostgreSQL is primary; SQL, pooling, migrations, transactions, and consistency are not replaced by ORM-only teaching.
- [x] Authentication, authorization, security, testing, performance, reliability, observability, configuration, and deployment are covered.
- [x] NestJS is a later optional specialization.
- [x] Practice and assessment require learner-produced backend evidence and failure-path reasoning.
- [x] Azerbaijani instruction and English technical terminology are supported.
- [x] Learner-Facing Mentor Mode hides internal evidence/state metadata by default.
- [x] Reusable domain content contains no learner progress and requires no daily state update.

## Known Limitations

- The pack defines reusable progression and project contracts, not a fixed lesson-body archive.
- Fastify is the practical default, but production framework and library versions must be selected against current official documentation when a real project begins.
- Redis, queues, cloud platforms, and NestJS are awareness/specialization topics rather than framework runtime dependencies.
- Studio remains an optional generic control panel.
