# Node.js Domain Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/nodejs/DOMAIN.md

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

## Source: domains/nodejs/README.md

# Node.js Domain Pack

Canonical reusable learning content for domain id `nodejs`.

This pack is for an experienced JavaScript/TypeScript Front-End Engineer moving toward backend or full-stack engineering. It develops runtime understanding, HTTP/API implementation, application boundaries, PostgreSQL data access, security, testing, performance, reliability, observability, and production operations before optional framework specialization.

## Canonical Sources

- `DOMAIN.md`: identity, audience, philosophy, lesson method, mentor behavior, conventions, localization, and Project guidance.
- `SYLLABUS.md`: ordered runtime-to-production curriculum and alternate routes.
- `SKILL_GRAPH.md`: backend learning competencies and prerequisites.
- `PRACTICE_RULES.md`: guided, independent, debugging, review, interview, and project practice.
- `ASSESSMENT_RULES.md`: evidence and mastery expectations.
- `PROJECTS.md`: progressive production-oriented projects.
- `GLOSSARY.md`: Azerbaijani guidance with English technical terminology.
- `QUALITY_REVIEW.md`: Stage 27.0 quality gate.

Framework lifecycle, mastery, state, command, and skill behavior remain canonical outside this domain under `specification/` and `core/`. This directory contains no learner-specific progress.

## Source: domains/nodejs/QUALITY_REVIEW.md

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
