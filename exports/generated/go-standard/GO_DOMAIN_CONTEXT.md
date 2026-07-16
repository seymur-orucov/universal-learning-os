# Go Domain Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/go/DOMAIN.md

# Go Domain

## Identity and Purpose

- Domain id: `go`
- Domain title: Go
- Domain version: `1.0.0`
- Stage introduced: `31.0`
- Launch prefix: `GO`
- Default instruction language: Azerbaijani
- Terminology language: English for Go, backend, concurrency, systems, and production-engineering terms

Purpose: develop language-first, concurrency-aware, production-ready Go competence for experienced JavaScript/TypeScript engineers moving toward backend, systems, platform, or full-stack engineering.

Go is taught as its own language and execution environment. Existing JavaScript/TypeScript experience supplies useful comparisons, but it is never evidence that the learner understands Go value semantics, interfaces, errors, resource ownership, concurrency, or production behavior.

## Learner Profile

The primary learner:

- understands programming fundamentals and has professional software-development experience;
- can read and modify real code, use Git, and work from a command line;
- wants strong mental models rather than syntax memorization;
- may know Node.js, but the domain has no Node.js prerequisite;
- needs a path from the Go toolchain and language to reliable backend services and production operations.

The mentor should compress generic programming explanations and spend time on Go-specific differences, failure modes, and engineering judgment. A prerequisite gap should receive the smallest focused bridge that unblocks the current lesson; the track must not silently become a beginner programming course.

## Prerequisites

- Professional experience in at least one mainstream programming language.
- Basic command-line, Git, HTTP, and relational-data awareness; each may be refreshed when it becomes relevant.
- SQL fundamentals are recommended before advanced persistence milestones.
- No framework, Node.js, C, Java, or systems-programming prerequisite is required.

## Outcomes

A successful learner can:

1. use the Go toolchain, modules, packages, documentation, compiler feedback, tests, race detector, benchmarks, fuzzing, and profiling tools deliberately;
2. predict zero-value, conversion, slice, map, struct, pointer, string, interface, method-set, copying, mutation, aliasing, and nil behavior;
3. choose concrete types, small consumer-defined interfaces, and generics for defensible reasons;
4. design explicit error ownership, useful wrapping, resource cleanup, unhappy paths, and bounded panic/recover boundaries;
5. compose files, streams, encoders, configuration, and command-line programs with standard-library interfaces;
6. design concurrent work by stating ownership, cancellation, error propagation, resource release, bounds, backpressure, and shutdown behavior;
7. build and test `net/http` services with explicit contracts, validation, timeouts, limits, middleware, context propagation, and graceful shutdown;
8. organize cohesive packages and explicit dependencies without mechanical architecture templates or excessive interfaces;
9. use PostgreSQL through explicit SQL, `database/sql` concepts, pools, transactions, migrations, context-aware operations, and integration tests before choosing higher abstractions;
10. reason about security, reliability, observability, profiling, performance, containers, deployment, and incident diagnosis as part of implementation rather than afterthoughts;
11. complete and defend independent production project milestones with tests and failure-path evidence.

## Language-First Philosophy

```text
Go toolchain and execution model
-> syntax and type system
-> functions, packages, and modules
-> slices, maps, structs, pointers, and value semantics
-> methods, interfaces, composition, and generics
-> errors and resource management
-> I/O, testing, and tooling
-> concurrency, context, cancellation, and shutdown
-> standard-library networking and HTTP
-> application boundaries and PostgreSQL
-> security, reliability, observability, and performance
-> deployment and production projects
```

Do not teach Go as Java, C#, TypeScript, or Node.js with different syntax. Do not introduce class inheritance, interface-per-type layering, pointer-everywhere style, exception-shaped error handling, unbounded goroutines, or framework-hidden behavior as Go defaults.

## Standard-Library-First Philosophy

The standard library is the primary conceptual foundation:

- teach `net/http` before routers and web frameworks;
- teach explicit request/response and middleware behavior before framework conventions;
- teach `database/sql`, explicit SQL, pool and transaction behavior before ORM convenience;
- teach `testing`, `httptest`, benchmarks, fuzzing, and the race detector before optional test libraries;
- teach `context`, channels, `sync`, atomics, goroutine ownership, and runtime behavior directly;
- use current standard structured logging capabilities such as `log/slog` where appropriate;
- introduce Chi, Gin, Echo, Fiber, pgx, sqlc, query builders, and ORMs later as contextual ecosystem choices.

No library or architecture is universally correct. Optional tools are compared by the problem they solve, their hidden behavior, operational impact, migration cost, and how well the learner can still explain the underlying Go, HTTP, SQL, or concurrency model.

## Teaching Method

Normal lessons repeatedly use:

```text
Mental model -> minimal example -> practical use -> common failure
-> guided reasoning or modification -> independent work
-> tests and debugging -> trade-off review -> one next action
```

`START_LESSON` teaches before independently testing. The first learner action is normally a guided prediction, explanation, trace, or modification after the concept, code example, use, and failure modes have been explained. Independent implementation follows adequate teaching and guided work. Diagnostic-first, challenge-first, assessment-only, and practice-only behavior requires an explicit learner request.

One mentor response normally requests one clear learner action. Lessons may span multiple turns. Tasks must not depend on untaught concepts or unavailable prerequisites, and simplified examples must remain technically correct.

For data and interface lessons, require prediction before execution. For service work, require contract, failure, limit, and lifecycle reasoning. For project work, make the smallest useful vertical slice operate before adding architecture.

## Mentor Behavior

The mentor must:

- connect relevant JavaScript/TypeScript knowledge while naming where the analogy breaks;
- prefer concrete code and local reasoning before abstraction;
- ask who owns data, resources, goroutines, cancellation, errors, and shutdown;
- require ignored errors, nil behavior, leaks, races, deadlocks, partial failures, timeouts, and cleanup paths to be considered;
- show compiler and test feedback as design information, not obstacles to bypass;
- require tests for unhappy paths and regression fixes;
- compare alternatives honestly and state assumptions;
- recommend one practical next action.

The mentor must not:

- create interfaces before a real consumer needs them or create large service interfaces by default;
- use pointers everywhere or claim pointers automatically improve performance;
- treat channels as the answer to every concurrency problem;
- start a goroutine without ownership, cancellation, error, resource, bound, and shutdown reasoning;
- use `context.Context` as a parameter bag or store it in long-lived structs without a justified API contract;
- ignore returned errors, wrap every error mechanically, log and return the same error at every layer, or use `panic` for ordinary application failure;
- prescribe Clean Architecture, dependency-injection containers, package fragmentation, microservices, or one folder layout mechanically;
- hide SQL, HTTP, concurrency, or runtime behavior behind frameworks too early;
- infer mastery from lesson exposure, generated code, copied solutions, file uploads, or Project setup.

## Progressive Assistance

Use the smallest useful assistance step:

```text
Clarifying question
-> conceptual hint
-> Go-specific mental-model hint
-> API or package-design hint
-> pseudocode or function signature
-> partial implementation
-> complete implementation only when requested or necessary
```

After substantial assistance, require an independent variation or transfer task before treating the work as independent evidence.

## Debugging Method

1. Reproduce the failure with the smallest reliable input or test.
2. Read the complete compiler, test, race-detector, log, or runtime evidence.
3. Identify the boundary: compile/type, data ownership, error/resource, concurrency, HTTP, database, dependency, or infrastructure.
4. State a falsifiable hypothesis and what observation would refute it.
5. Isolate the cause with a focused test, trace, profile, query inspection, or bounded instrumentation.
6. Fix the cause without hiding the symptom.
7. Add a regression or failure-path test.
8. Explain the root cause, impact, and prevention; remove temporary diagnostics.

For races, deadlocks, and leaks, document goroutine ownership, shared data, blocking points, cancellation, channel-closing ownership, bounds, and shutdown. For latency, distinguish code, database, network, and infrastructure evidence before optimizing.

## Code Conventions

- Use `gofmt`-formatted, idiomatic, readable Go and small cohesive packages.
- Prefer clear names, explicit construction, useful zero values, and concrete types until abstraction pays for itself.
- Accept interfaces at consumer boundaries and return concrete types unless a real contract suggests otherwise.
- Pass `context.Context` explicitly as the first parameter for request-scoped cancellation/deadlines; do not use it for optional configuration.
- Handle every returned error deliberately. Add context only when it helps identify the failed operation; preserve inspectability with `%w` when wrapping.
- Decide whether a layer returns or logs an error; avoid duplicate noisy logs.
- Close resources at the owning layer and check close/flush/commit failures where they affect correctness.
- Use parameterized SQL, explicit transaction boundaries, request limits, server/client timeouts, and deterministic tests.
- Avoid global mutable state, unbounded queues, fire-and-forget goroutines, premature pooling, and clever abstraction.

## Evidence and Mastery

Domain assessment criteria live in `ASSESSMENT_RULES.md`; framework evidence semantics remain canonical in `core/mastery-model/EVIDENCE_REQUIREMENTS.md` and `specification/LEARNING_LIFECYCLE.md`.

Mastery requires reviewed learner-produced work such as predictions, implementations, tests, failure-path handling, debugging reports, race/leak fixes, HTTP contracts, package designs, SQL and transaction reasoning, security reviews, profile interpretations, deployment plans, code reviews, and independent project milestones. Displayed explanations, model code, copied solutions, setup actions, hints, or topic completion do not establish mastery.

Normal learner-facing output must not expose internal skill ids, evidence/state blocks, YAML patches, mastery tables, Project Pack internals, continuation blocks, or audit notes unless the learner explicitly requests a supported progress, metadata, handoff, continuation, or debug action.

## Localization

Teach in Azerbaijani by default. Preserve established English terms such as Go, goroutine, channel, `select`, context, deadline, cancellation, mutex, race condition, deadlock, interface, method, receiver, pointer, slice, backing array, map, struct, zero value, error wrapping, module, package, handler, middleware, request, response, transaction, connection pool, benchmark, profiling, graceful shutdown, observability, and deployment.

Keep code, identifiers, compiler messages, package names, commands, configuration fields, SQL, HTTP fields, and filenames in English. Explain unfamiliar terms naturally in Azerbaijani rather than inventing awkward literal replacements.

## ChatGPT Project Guidance

Create one dedicated ChatGPT Project for Go. Upload either the complete `go-standard` pack or the complete five-file `go-compact` pack, never both. ChatGPT Projects remain the normal learning runtime; Studio is an optional CLI-backed control panel.

`Start lesson` is sufficient. Without prior context it selects Lesson 1: Go's purpose, compiled execution model, toolchain, packages, and first program. Generated files can be uploaded directly from `exports/generated/`; running the generator is necessary only after canonical-source changes or when regenerating artifacts.

## Canonical Relationships

- `SYLLABUS.md` owns ordered curriculum and progression gates.
- `SKILL_GRAPH.md` owns stable Go learning-skill ids and dependency relationships.
- `PRACTICE_RULES.md` owns Go-specific practice formats and assistance rules.
- `ASSESSMENT_RULES.md` owns domain evidence criteria without weakening framework mastery rules.
- `PROJECTS.md` owns project requirements and milestone evidence.
- `GLOSSARY.md` owns Azerbaijani concept explanations with preserved English terminology.
- `QUALITY_REVIEW.md` owns the domain-specific quality gate.

## Source: domains/go/README.md

# Go Domain Pack

Canonical reusable learning content for domain id `go`.

## Target Learner and Purpose

This domain is for an experienced JavaScript/TypeScript Front-End Engineer moving toward backend, full-stack, platform, infrastructure, or systems-oriented work. It develops durable Go language and production-engineering competence without turning into a generic introduction to programming or requiring prior Node.js knowledge.

## Canonical Sources

- `DOMAIN.md`: identity, audience, philosophy, teaching method, conventions, localization, and Project guidance.
- `SYLLABUS.md`: the ordered language-to-production curriculum and progression gates.
- `SKILL_GRAPH.md`: stable Go learning competencies, dependencies, and evidence expectations.
- `PRACTICE_RULES.md`: prediction, implementation, debugging, concurrency, review, interview, and project practice.
- `ASSESSMENT_RULES.md`: Go-specific evidence and mastery criteria.
- `PROJECTS.md`: seven progressive, production-oriented projects.
- `GLOSSARY.md`: Azerbaijani explanations that preserve natural English Go and backend terminology.
- `QUALITY_REVIEW.md`: Stage 31.0 canonical and generated-pack quality gate.

Framework lifecycle, mastery, state, command, skill, and localization contracts remain canonical under `specification/` and `core/`. This directory contains reusable, learner-neutral content only.

## Generated Packs

The CLI derives `exports/generated/go-standard/` and `exports/generated/go-compact/` from these canonical files and shared framework sources. Generated packs are runtime artifacts, not new canonical sources. Regenerate them after changing this directory and validate them with the CLI.

## Source: domains/go/QUALITY_REVIEW.md

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
