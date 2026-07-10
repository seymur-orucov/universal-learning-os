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
