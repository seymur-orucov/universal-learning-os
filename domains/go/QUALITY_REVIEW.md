# Go Domain Quality Review

## Review Identity

- Stage: `31.0`
- Domain id: `go`
- Profiles: `standard` and `compact`
- Status: ready when every automated and manual gate below passes

## Canonical Contract Review

- [ ] The directory contains exactly `README.md`, `DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, `PROJECTS.md`, `GLOSSARY.md`, and `QUALITY_REVIEW.md`.
- [ ] Content is reusable and learner-neutral; framework, state, command, and mastery contracts are cross-referenced rather than redefined.
- [ ] The target is an experienced JavaScript/TypeScript engineer, not a generic beginner, and Node.js is optional.
- [ ] Azerbaijani is the default instruction language with natural English Go/backend terminology.

## Curriculum and Technical Review

- [ ] All Phases A–R are ordered with prerequisite gates and learner-produced phase evidence.
- [ ] Language/toolchain, values/data, methods/interfaces, errors/resources, generics, I/O, testing, concurrency, HTTP, package design, PostgreSQL, security, reliability, observability, performance, deployment, and optional advanced topics are substantial.
- [ ] Examples and guidance avoid inheritance, interface-first design, pointer-everywhere style, ordinary panic, ignored/overwrapped/duplicate-logged errors, unowned goroutines, channel worship, context-as-bag, architecture templates, package fragmentation, ORM-first persistence, and framework-hidden foundations.
- [ ] Go terminology and broadly stable language/library features are used without unnecessary release-version claims.

## Teaching and Evidence Review

- [ ] `START_LESSON` teaches mental model, example, use, and failures before a guided first action and independent work.
- [ ] One mentor response normally requests one clear learner action.
- [ ] Progressive assistance delays full solutions and requires transfer after substantial help.
- [ ] Data practice requires output/mutation/aliasing/copy prediction.
- [ ] Error/resource, concurrency, HTTP, SQL, security, performance, and production practice includes failure and verification evidence.
- [ ] Mastery requires reviewed learner output; lesson exposure, model code, copied solutions, uploads, setup, hints, and topic completion do not qualify.
- [ ] Normal learner-facing output hides internal skill ids, state/evidence blocks, mastery tables, pack internals, continuation blocks, and audit notes.

## Concurrency and Production Review

- [ ] Every goroutine design asks who starts/owns/stops/waits, where errors go, how resources close, what bounds concurrency, and how shutdown works.
- [ ] Race detector, deadlock/leak investigation, backpressure, bounded concurrency, cancellation, and graceful shutdown are explicit.
- [ ] `net/http`, `testing`, `context`, `sync`, `database/sql`, explicit SQL, and standard structured logging foundations precede optional ecosystem abstractions.
- [ ] HTTP includes limits, validation, errors, tests, context, timeouts, middleware, and shutdown.
- [ ] PostgreSQL includes pools, scanning, transactions, migrations, integration tests, query timeouts/performance, and SQL-before-ORM trade-offs.
- [ ] Security, reliability, observability, profiling, performance, containers, CI, deployment, rollback, and runbooks are required production concerns.

## Project Review

- [ ] Seven projects progress from CLI and streaming data through concurrency, standard-library HTTP, PostgreSQL, jobs, and production capstone.
- [ ] Every project defines goals, prerequisites, functional/non-functional requirements, constraints, evidence, tests, failure cases, security, observability, completion, and extensions.
- [ ] No project requires a framework, ORM, microservice architecture, Kubernetes, or cloud provider.

## Generated and Integration Review

- [ ] Registry identity is `go` / `GO` / `Go` with exact purpose and terminology metadata.
- [ ] Go has a specialized standard and compact startup prompt preserving language-first, standard-library-first, teaching-first, concurrency safety, SQL-before-ORM, production scope, and metadata boundaries.
- [ ] `go-standard` contains exactly 25 files and the five `GO_*` domain outputs.
- [ ] `go-compact` contains exactly the five compact contract files and retains critical errors, concurrency, testing, and production guidance.
- [ ] Standard/compact launch kits exist and say one dedicated Project, one profile only, direct generated files, compact five-file limit, ChatGPT runtime, optional Studio, and `Start lesson`.
- [ ] CLI tests cover registry, generation, inspection, validation, learner helpers, path/invalid behavior, exports, and Go-specific markers.
- [ ] Studio fallback/smoke lists include Go without a Go-specific screen or runtime expansion.

## Required Quality Gates

Run the Stage 31.0 manual acceptance checklist plus CLI listing, both dry-runs, both real generations, both inspections, generated validation, learner validation, complete Node test suite, Studio install/build/bridge/health checks, exact pack counts, forbidden learner-state scan, temporary-artifact scan, and `git diff --check`. Record failures honestly; this review is not PASS until all required gates pass.

