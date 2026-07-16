# ADR-0058: Go Domain

## Status

Accepted

## Context

Universal Learning OS supports eight canonical domains and sixteen generated packs, including JavaScript, TypeScript, Node.js, databases, system design, algorithms, and Git. It does not provide a language-first Go path for experienced JavaScript/TypeScript engineers moving into backend, platform, infrastructure, systems, or full-stack work.

Go learners are often moved too quickly from syntax into frameworks, architecture templates, ORMs, or unbounded goroutine examples. That can preserve incorrect class/inheritance, exception, shared-state, interface-first, and Node.js mental models while hiding Go value semantics, explicit errors, resource ownership, concurrency lifecycle, standard HTTP, SQL, testing, and production behavior.

The repository already has stable domain-pack, teaching-first, evidence, localization, standard/compact generation, learner-helper, lesson-export, CLI, and optional Studio contracts. The new domain should reuse them without creating another runtime or weakening existing domains.

## Decision

Add one canonical Go domain under `domains/go/` and generate its standard and compact packs through the existing data-driven generators.

### Canonical Identity

- Domain id: `go`
- Domain title: Go
- Launch prefix: `GO`
- Standard pack: `go-standard`
- Compact pack: `go-compact`
- Default instruction language: Azerbaijani
- Preserved terminology: English Go, backend, concurrency, systems, HTTP, SQL, testing, and production-engineering terms

Go becomes the ninth supported domain. Canonical content and generated packs remain learner-neutral.

### Target Learner

The primary learner is an experienced JavaScript/TypeScript Front-End Engineer with professional programming fundamentals who wants Go for backend, full-stack, platform, infrastructure, or systems-oriented work. Node.js knowledge may help comparisons but is not required. Generic fundamentals are compressed; Go-specific behavior and durable mental models receive emphasis.

### Language-First and Standard-Library-First Methodology

Progress from toolchain/execution, types/functions/packages, data/value semantics, methods/interfaces/composition, errors/resources, generics, I/O/testing, and concurrency into `net/http`, application design, PostgreSQL, security, reliability, observability, performance, deployment, and optional advanced specialization.

Teach `net/http` before framework abstractions, `database/sql` concepts and explicit SQL before ORM convenience, `testing` before optional test frameworks, and `context`, channels, `sync`, atomics, goroutine ownership, and runtime behavior directly. Third-party routers, frameworks, pgx/sqlc/query tools, and ORMs are later contextual choices, not conceptual foundations.

### Teaching and Mental-Model Safety

Normal `START_LESSON` behavior teaches concept, model, minimal example, practical use, and failures before one guided learner action. Independent work follows guided work. Go is not taught as TypeScript, Node.js, Java, or C# with different syntax. The domain rejects mechanical inheritance, interface-per-type, pointer-everywhere, context-as-parameter-bag, ignored/meaninglessly wrapped/duplicate-logged errors, ordinary panic, excessive package fragmentation, and architecture templates.

### Concurrency Safety

Concurrency begins only after functions, errors, values/ownership, and cancellation foundations. Every goroutine design must identify who starts/owns/stops/waits, where errors go, how resources are released, what bounds concurrency and queued work, what backpressure occurs, and how shutdown works. Race, deadlock, leak, cancellation, overload, and graceful-shutdown evidence are required. Channels are not universal substitutes for mutexes or sequential code.

### Backend and Production Scope

The domain includes explicit HTTP contracts, validation, limits, timeouts, handler tests, middleware, context, and shutdown; PostgreSQL pools, parameterized SQL, scanning, transactions, migrations, integration tests, and SQL-before-ORM comparison; security and identity trade-offs; reliability, jobs, idempotency, load shedding, observability, profiling, performance, containers, CI, deployment, rollback, and runbooks. A reliable monolith or modular monolith is a valid production outcome.

### Assessment Evidence

Mastery requires reviewed learner-produced predictions, explanations, implementations, tests, unhappy paths, debugging reports, race/leak fixes, contracts, package designs, SQL/transaction reasoning, security reviews, profile interpretations, deployment plans, code reviews, or independent project milestones. Lessons, model code, copied solutions, hints, file uploads, setup, and topic completion are not mastery evidence.

### Generated-Pack Impact

Add `go-standard` with exactly 25 files and `go-compact` with exactly five files. Standard domain outputs are `GO_DOMAIN_CONTEXT.md`, `GO_SYLLABUS.md`, `GO_SKILL_GRAPH.md`, `GO_GLOSSARY_PROJECTS.md`, and `GO_PRACTICE_ASSESSMENT_RULES.md`. Compact generation consolidates the same canonical sources and shared command/skill contracts without removing critical error, concurrency, testing, evidence, localization, or production guidance.

Generated packs increase from sixteen to eighteen. Existing pack formats and counts do not change.

### CLI Impact

Append Go to the shared domain registry and add the justified Go startup-prompt specialization. Existing listing, generation, dry-run, inspection, validation, handoff, snapshot, and learner-validation behavior accepts Go through generic configuration. Invalid-domain and path-safety behavior remains unchanged.

### Studio Impact

Studio remains optional, local-first, generic, and CLI-backed. Add Go only to fallback and smoke expectations. No Go-specific screen, code runner, compiler integration, dependency, storage, authentication, or hosted service is introduced.

## Non-Goals

- Replace or weaken the Node.js domain.
- Turn the course into C, compiler-internals, runtime-implementation, or beginner-programming curriculum.
- Make Gin, Fiber, Echo, Chi, GORM, pgx, sqlc, or any other library mandatory.
- Make microservices, Clean Architecture, dependency-injection containers, or one folder structure the default.
- Add a new application or learning runtime, or substantially expand Studio.
- Add authentication or hosted persistence to Studio.
- Change learner-state architecture or introduce learner-specific data into generated packs.
- Modify learner progress, infer mastery, or require daily repository updates.
- Prepare a release tag, create a release, or add a local Go installation requirement.

## Consequences

The repository supports nine domains and eighteen generated packs: nine 25-file standard packs and nine five-file compact packs. Go gains a durable path from its language and toolchain through concurrency-aware backend and production engineering. Canonical content is necessarily substantial because abbreviated syntax/framework recipes would undermine the required mental models. Optional ecosystem and advanced topics remain later specializations and may require current official documentation when a real project chooses them.

