# Go Domain Core

Generated compact domain core for `go`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/go/DOMAIN.md`.

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

## SYLLABUS.md

Canonical source: `domains/go/SYLLABUS.md`.

# Go Syllabus

## Progression Contract

This is an ordered language-to-production curriculum for experienced engineers. Generic programming concepts are compressed; Go-specific execution, type, data, ownership, error, concurrency, and production behavior receive deliberate practice. Every phase uses the cycle `mental model -> minimal example -> practical use -> common failure -> guided work -> independent work -> tests/debugging -> trade-off review`.

Later entry requires evidence for prerequisites. Advanced topics never displace the language, testing, HTTP, SQL, concurrency, security, and single-service reliability foundations.

## Phase A — Orientation and Toolchain

1. **Go's purpose and compiled execution model.** Design goals, explicitness, fast builds, binaries, garbage collection, concurrency, where Go fits, where it does not, and differences from browser/Node.js execution.
2. **Toolchain workflow.** Installation and environment concepts; `go version`, `go env`, `go run`, `go build`, `go test`, `go fmt`, `go vet`, and reading command output.
3. **First program and executable package.** `package main`, imports, `func main`, compilation, execution, exit behavior, and compiler errors as precise feedback.
4. **Packages, modules, and documentation.** `go mod init`, `go.mod`, module paths, package directories, imports, exported identifiers, `go doc`, and official package documentation.
5. **Repository and module layout.** One module versus multiple modules, command packages, internal code, tests beside code, package cohesion, and avoiding speculative folder trees.

Phase evidence: create a small module, explain each tool's job, fix compiler/vet feedback, document the package, and justify the initial layout.

## Phase B — Core Language Foundations

6. **Declarations, types, and zero values.** `var`, short declarations, constants, built-in types, inference, named types, zero values, explicit conversion, and no implicit numeric/string conversion.
7. **Control flow.** Go-specific `if` initializers, expression `switch`, type-switch preview, `for` as the loop construct, `range`, `break`, `continue`, and control-flow clarity.
8. **Functions.** Parameters, results, multiple returns, named results with restraint, first-class functions, closures, variadic functions, and function values.
9. **Scope and visibility.** Lexical scope, shadowing, package scope, exported/unexported identifiers, initialization basics, and API naming.
10. **`defer` mental model.** Registration time, LIFO execution, argument evaluation, cleanup uses, loop pitfalls, and named-result interactions.

Phase evidence: trace declarations, shadowing, control flow, multiple returns, and `defer` order; implement a small package without importing class/exception mental models.

## Phase C — Data and Memory Mental Models

11. **Arrays and values.** Fixed length in the type, array copying, comparison, and why slices are more common.
12. **Slice model.** Slice header, backing array at an appropriate conceptual level, length, capacity, slicing, `append`, reallocation, copying, aliasing, nil versus empty, and safe API boundaries.
13. **Maps.** Construction, zero/nil behavior, lookup and comma-ok, insertion/deletion, non-addressable elements, iteration order, comparison limits, and concurrency unsafety.
14. **Structs and literals.** Named and anonymous structs, field visibility, keyed literals, equality when comparable, copying, and modeling data without inheritance.
15. **Value semantics and pointers.** Copies, addresses, dereferencing, mutation, addressability, pointer receiver motivation, nil pointers, and why pointers are not automatic performance tools.
16. **Strings, bytes, runes, and UTF-8.** Immutable byte sequences, indexing, iteration, rune decoding, invalid UTF-8 behavior, conversion costs, and Unicode-safe processing.
17. **Nil and comparison matrix.** Nil-capable types, valid/invalid comparisons, nil method behavior, zero-value design, and distinguishing absent, empty, and invalid states.
18. **Escape-analysis awareness.** Stack/heap decisions as compiler implementation choices, lifetime and allocation awareness, using compiler/profile evidence, and avoiding premature internals.

Phase evidence: predict output, mutation, aliasing, copying, capacity changes, nil behavior, and Unicode results before execution; repair an aliasing bug and justify value or pointer choices.

## Phase D — Methods, Interfaces, and Composition

19. **Methods and receivers.** Method declarations, value versus pointer receivers, receiver consistency, mutation, copying cost, and call-site conveniences.
20. **Method sets.** Which methods belong to `T` and `*T`, addressability, interface satisfaction consequences, and compiler-guided reasoning.
21. **Composition and embedding.** Delegation, promoted fields/methods, explicitness, ambiguity, API exposure, and why embedding is not inheritance.
22. **Implicit interfaces.** Structural satisfaction, small consumer-defined interfaces, accepting behavior at the point of use, and preferring concrete types until substitution is real.
23. **Interface values and nil traps.** Dynamic type/value pair, typed nil inside a non-nil interface, equality/panic risks, assertions, type switches, and defensive API design.
24. **Dependency boundaries.** Concrete dependencies, minimal test seams, adapters at boundaries, interface segregation by actual consumers, and avoiding large service interfaces.
25. **Interfaces versus concrete types versus generics.** Runtime behavior contracts, compile-time type families, ordinary duplication, readability, performance evidence, and choosing the simplest suitable mechanism.

Phase evidence: predict method-set and nil-interface behavior, refactor a producer-defined interface into a consumer-defined boundary, and defend concrete/interface choices.

## Phase E — Errors and Resource Management

26. **Errors as values.** The `error` interface, creation with `errors.New` and `fmt.Errorf`, explicit returns, success/failure branching, and ordinary failure versus programmer bugs.
27. **Contextual wrapping and inspection.** `%w`, operation context, `errors.Is`, `errors.As`, chains, sentinel errors, typed errors, and stable API contracts.
28. **Error ownership.** Classifying, translating, returning, logging, avoiding duplicate logs, preserving actionable details without leaking internals, and not wrapping mechanically.
29. **Resource lifecycle.** File, network, response-body, iterator/rows, statement, and database resource ownership; `defer` cleanup; close/flush errors; partial initialization.
30. **Panic and recover boundaries.** Invariants and unrecoverable initialization, library expectations, HTTP/process boundaries, cleanup, reporting, and why ordinary application errors must return.
31. **Failure-path design.** Partial writes, rollback/compensation, cleanup failures, multi-error awareness, retry classification, and explicit unhappy-path tests.

Phase evidence: implement and test a fallible resource-owning function, preserve error identity, add useful context, avoid duplicate logging, and explain every cleanup path.

## Phase F — Generics and Reusable Code

32. **Type parameters and inference.** Generic functions, type parameter lists, inference, zero values of type parameters, and readable APIs.
33. **Constraints.** `any`, `comparable`, unions/type sets, `~` approximation where justified, operations permitted by constraints, and constraint ownership.
34. **Generic structures and algorithms.** A small collection or data structure, methods with receiver parameters, test matrices, and API ergonomics.
35. **Abstraction choice.** Generics versus interfaces versus ordinary functions/code, clarity costs, error messages, specialization pressure, and avoiding abstraction for its own sake.

Phase evidence: generalize proven concrete code, reject an unjustified generic abstraction, and explain compile-time versus runtime polymorphism.

## Phase G — Files, Encoding, and I/O

36. **`io.Reader` and `io.Writer`.** Streaming contracts, short reads/writes, composition, copying, limits, and test doubles using standard interfaces.
37. **Files and buffers.** Open/create flags, permissions awareness, buffered I/O, scanning, seeking, temporary files, atomic-replacement concepts, and cleanup.
38. **JSON and serialization.** Struct tags, encoding/decoding, unknown fields, numbers, custom marshal/unmarshal when justified, streaming decoders, validation after decoding, and stable contracts.
39. **Time and parsing.** `time.Time`, durations, layouts, locations, monotonic component awareness, timers/tickers, parsing errors, and deterministic clocks at boundaries.
40. **Configuration and CLI input.** Environment variables, command-line arguments, `flag`, validation, precedence, secrets, startup failure, and help text.
41. **Large-input safety.** Streaming instead of full buffering, maximum sizes, bounded readers, scanner limits, decompression risk awareness, partial failure, and resource budgets.

Phase evidence: build a bounded streaming transform, validate JSON/configuration, test malformed and oversized input, and explain resource ownership.

## Phase H — Testing and Engineering Tools

42. **Testing foundations.** `testing`, test naming, arrange/act/assert clarity without framework dependency, deterministic inputs, failure messages, and package choice.
43. **Table-driven tests and subtests.** Case design, loop variable safety, `t.Run`, helpers with `t.Helper`, parallel-test ownership, and failure-path coverage.
44. **Isolation, fixtures, and golden tests.** Temp directories, cleanup, environment restoration, immutable fixtures, update discipline, and golden tests only when reviewable output warrants them.
45. **HTTP and integration tests.** `httptest`, handler-level tests, real dependency boundaries, database test isolation, transactions/cleanup, and deterministic contracts.
46. **Benchmarks and allocations.** `BenchmarkX`, setup/reset, realistic workloads, `b.ReportAllocs`, noise, comparison, and avoiding misleading microbenchmarks.
47. **Fuzzing and race detection.** Seed corpus, invariants, minimizing failures, persistence, `go test -race`, race reports, and race-free ownership rather than timing patches.
48. **Coverage and testable design.** Coverage as a signal, meaningful branch/failure coverage, seams without interface inflation, `go vet`, formatting, and CI-friendly commands.

Phase evidence: produce deterministic table, HTTP, integration/failure, benchmark, fuzz, and race-detector artifacts appropriate to the code under test.

## Phase I — Concurrency

49. **Concurrency versus parallelism.** Scheduling model, goroutine costs and limits, when sequential code is better, and ownership as the starting question.
50. **Goroutine lifecycle.** Start ownership, stop condition, result/error path, resource release, panic boundary, waiting, and leak detection.
51. **Channels.** Unbuffered/buffered synchronization, send/receive blocking, direction types, closing ownership, range, zero/nil channel behavior, and why receivers generally do not close producer-owned channels.
52. **`select`, timeouts, and cancellation.** Ready-case selection, default-case risks, timer ownership, `context.Context`, deadlines, cancellation propagation, and `context` not being a parameter bag.
53. **Synchronization.** `sync.Mutex`, `RWMutex` trade-offs, `WaitGroup`, `Once`, atomics for narrow invariants, memory visibility at an appropriate level, and copying lock-containing values.
54. **Race conditions and deadlocks.** Shared mutable state, compound operations, lock ordering, channel cycles, diagnostics, race detector limitations, and reproducible investigation.
55. **Worker pools and bounded concurrency.** Work ownership, capacity, backpressure, queue behavior, cancellation, error collection, fairness, and overload.
56. **Pipelines, fan-out, and fan-in.** Stage ownership, closing, early termination, drain versus cancellation, error propagation, ordering, and avoiding goroutine leaks.
57. **Graceful concurrent shutdown.** Stop intake, propagate cancellation, drain bounded work when policy allows, release resources, wait with deadlines, surface errors, and terminate deterministically.

Required explanation for every concurrent design: who starts each goroutine, who owns it, how it stops, where errors go, how resources are released, what limits concurrency, and what happens during shutdown.

Phase evidence: fix a race, deadlock, and leak; implement a bounded cancelable worker pipeline; test failure, timeout, and shutdown paths; defend channel versus mutex choices.

## Phase J — HTTP and API Development

58. **HTTP model and `net/http`.** Requests, responses, methods, URLs, headers, body ownership, status codes, handlers, mux routing, server lifecycle, and client/server timeouts.
59. **Routing and method contracts.** Standard-library routing capabilities, path parameters where supported by the chosen baseline, method rejection, content negotiation, and framework-independent contracts.
60. **JSON request/response boundaries.** Bounded bodies, decoding, unknown/trailing data policy, validation, encoding, content types, stable error envelopes, and no partial response after headers.
61. **Middleware and dependencies.** Explicit construction, handler composition, logging/request ids, authentication boundary, recovery boundary, response observation limits, and avoiding global state.
62. **Context propagation and cancellation.** Request context, downstream database/network calls, client disconnects, deadlines, values only for request-scoped metadata, and cleanup.
63. **API evolution.** Pagination, filtering, sorting, idempotency, conditional behavior, versioning trade-offs, compatibility, documentation, and status-code semantics.
64. **Handler testing and graceful shutdown.** `httptest`, malformed/oversized requests, dependency failures, timeout behavior, signal-driven shutdown, readiness transition, and bounded drain.
65. **Ecosystem comparison.** Compare standard mux, Chi, Gin, Echo, Fiber, or another current option by API, standard-library compatibility, middleware, validation, observability, performance evidence, and migration cost; no mandatory winner.

Phase evidence: build and test a standard-library JSON service with validation, error consistency, limits, timeouts, context propagation, middleware, and graceful shutdown before adopting a framework.

## Phase K — Application and Package Design

66. **Package cohesion and APIs.** Responsibility boundaries, names, exported surface, invariants, documentation, internal packages, package cycles, and avoiding `utils` dumping grounds.
67. **Application boundaries.** Domain, transport, application, and infrastructure distinctions when useful; dependency direction; concrete core logic; adapters at real boundaries.
68. **Construction and lifecycle.** Keep `main` focused on validated configuration, dependency construction, startup, signals, shutdown ordering, and exit status.
69. **Feature versus layer organization.** Small service, feature-oriented, layer-oriented, and modular-monolith trade-offs; evolve structure from pressure rather than templates.
70. **Public API and compatibility.** Stable contracts, zero values, options/configuration, interfaces, errors, concurrency guarantees, versioning, and documentation.

Phase evidence: refactor an over-fragmented or cyclic design into cohesive packages, justify boundaries and dependency construction, and keep behavior testable.

## Phase L — PostgreSQL and Persistence

71. **`database/sql` mental model.** Driver registration, `*sql.DB` as a concurrent pool handle rather than one connection, open versus ping, lifetime, and ownership.
72. **Queries and scanning.** Parameterized SQL, `ExecContext`, `QueryContext`, `QueryRowContext`, row iteration, `Scan`, `Rows.Err`, nullable data, close behavior, and error classification.
73. **Transactions and consistency.** `BeginTx`, commit/rollback ownership, isolation, short transactions, context cancellation, retries only when safe, and testing partial failure.
74. **Migrations and schema evolution.** Versioned migrations, startup versus deployment ownership, backward-compatible rollout, constraints, indexes, rollback limits, and CI checks.
75. **Repositories and integration testing.** Boundaries around business needs, avoiding generic CRUD interfaces, real PostgreSQL tests, deterministic data, cleanup, and query contract evidence.
76. **Pools and query performance.** Open/idle/lifetime settings, saturation, timeouts, N+1, query plans, metrics, workload measurement, and database as a shared bounded resource.
77. **Persistence tool trade-offs.** Raw SQL, pgx, sqlc, query builders, and ORMs compared after foundations; generated code, migrations, transaction escape hatches, observability, and hidden SQL costs.

Phase evidence: implement a context-aware transactional PostgreSQL boundary with explicit SQL, migration, integration tests, failure classification, timeout, and pool reasoning before choosing an ORM.

## Phase M — Security

78. **Trust boundaries and validation.** Validate shape, semantics, size, and authorization at appropriate boundaries; parameterized SQL; safe errors; path/file handling.
79. **Identity and access.** Authentication versus authorization, sessions/cookies/tokens, password hashing concepts, revocation, ownership checks, least privilege, and no universal auth strategy.
80. **Web security.** TLS awareness, cookie flags, CORS, CSRF when relevant, request limits, timeouts, injection, path traversal, unsafe files, and denial-of-service considerations.
81. **Secrets and dependencies.** Environment/secret systems, rotation, redaction, secure configuration, dependency provenance/advisories, minimal privileges, and supply-chain awareness.
82. **Security review.** Assets, actors, entry points, abuse cases, sensitive logs, failure responses, dependency risk, mitigations, tests, and residual risk.

Phase evidence: threat-model and harden a service, test authorization and limits, prevent injection, redact sensitive data, and defend the chosen identity strategy.

## Phase N — Reliability and Production Behavior

83. **Startup and shutdown ordering.** Configuration validation, dependency readiness, signal handling, stop intake, drain policy, cancellation, close ordering, time budgets, and exit codes.
84. **Health and operational signals.** Liveness versus readiness, dependency policy, startup/readiness transitions, degraded behavior, and avoiding expensive health endpoints.
85. **Retries and idempotency.** Failure classification, exponential backoff and jitter, retry budgets, storms, idempotency keys, duplicate effects, and deadline propagation.
86. **Failure isolation.** Bounded queues, load shedding, concurrency limits, circuit-breaking/bulkhead concepts, partial failure, dependency budgets, and fallback truthfulness.
87. **Background jobs and scheduling.** Durable versus in-memory work, ownership, retries, idempotency, visibility, poison jobs, shutdown, and delivery semantics.
88. **Runbooks and incident debugging.** Symptoms, hypotheses, dashboards/logs/traces/profiles, safe mitigations, rollback/roll-forward, communication, and prevention follow-up.

Phase evidence: inject dependency failure and overload, demonstrate bounded behavior and shutdown, and produce a practical runbook.

## Phase O — Observability and Debugging

89. **Structured logging.** `log/slog` or equivalent standard capability, levels, attributes, request/correlation ids, redaction, sampling awareness, and error ownership.
90. **Metrics and traces.** Counters/gauges/histograms, latency/error/saturation signals, cardinality, trace context and spans, and vendor-neutral concepts.
91. **Profiling.** `pprof` CPU, heap, allocation, goroutine, block, and mutex profiles; safe exposure; representative workload; before/after evidence.
92. **Execution diagnostics.** Runtime statistics, execution traces where appropriate, stack dumps, contention, leaks, scheduler symptoms, and evidence limits.
93. **Cross-layer diagnosis.** Separate code, database, network, dependency, and infrastructure failure using correlated evidence rather than guessing.

Phase evidence: diagnose a latency, leak, or contention scenario using logs, metrics, traces, profiles, and a written causal argument.

## Phase P — Performance

94. **Benchmark discipline.** Representative workload, setup exclusion, stable comparisons, statistical noise awareness, compiler effects, and macro versus micro evidence.
95. **Allocation and data efficiency.** Strings/bytes conversion, slice growth, preallocation with evidence, buffering, streaming, object lifetime, and readability.
96. **Contention and bounds.** Lock/channel costs, false throughput from unbounded work, database-pool saturation, queueing, backpressure, and end-to-end latency.
97. **Optimization decisions.** Profile first, identify the dominant constraint, make one measurable change, validate correctness, document trade-offs, and revert unjustified complexity.

Phase evidence: improve a measured bottleneck with benchmark/profile evidence while preserving tests and explaining maintenance cost.

## Phase Q — Deployment and Operations

98. **Build and release artifacts.** Reproducible `go build` inputs, version metadata strategy, cross-compilation concepts and limits, artifact checks, and startup validation.
99. **Containers.** Multi-stage Docker builds, minimal-image trade-offs, CA/timezone/runtime files, non-root users, read-only concerns, signals, and health checks.
100. **CI quality gates.** Formatting, vet, tests, race tests where practical, integration tests, vulnerability/dependency checks as policy choices, builds, and artifact publication.
101. **Database and rollout operations.** Migration ordering, backward-compatible deploys, readiness, rolling behavior, rollback limits, configuration/secrets, and release runbooks.
102. **Cloud-neutral operation.** Process lifecycle, ports, storage assumptions, horizontal scaling, statelessness, resource limits, observability, deployment and rollback plans.

Phase evidence: build a non-root containerized service, define CI and migration gates, and defend a cloud-neutral deployment/rollback plan.

## Phase R — Advanced and Optional Specialization

Only after reliable single-service foundations:

103. **Reflection and code generation.** Runtime type inspection, tags, maintainability, generated-code ownership, and alternatives.
104. **Unsafe, cgo, and internals.** Explicit risk boundaries, portability, memory safety, scheduler/GC/compiler internals, and evidence-driven need.
105. **Advanced protocols and networking.** gRPC, WebSockets, advanced HTTP/networking, streaming, and compatibility/operational trade-offs.
106. **Messaging and distributed systems.** Brokers, delivery semantics, ordering, idempotency, service discovery, distributed tracing, partial failure, and consistency.
107. **Platform specialization.** Kubernetes operation, plugin architectures, advanced observability, framework specialization, and organization-specific tooling.

These topics are specialization, not baseline mastery. A learner must first demonstrate language, errors, testing, concurrency, HTTP, SQL, security, observability, and shutdown competence.

## Route Guidance

- **Sequential production route:** Phases A–Q, then selected Phase R topics.
- **Backend acceleration:** diagnose A–H, complete I–Q in order, repairing any missing prerequisite.
- **Systems/platform route:** emphasize C–I, N–Q, then justified runtime/networking specialization.
- **Project route:** use `PROJECTS.md`; insert each prerequisite phase before its milestone.
- **Interview/review route:** use bounded diagnostics and design/debugging exercises, never treating professional history as evidence of Go mastery.

## SKILL_GRAPH.md

Canonical source: `domains/go/SKILL_GRAPH.md`.

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

## PRACTICE_RULES.md

Canonical source: `domains/go/PRACTICE_RULES.md`.

# Go Practice Rules

## Purpose and Boundary

These rules specialize `core/learning-engine/PRACTICE_MODEL.md` for Go. Evidence, mastery, lifecycle, and learner-state semantics remain canonical outside this domain. Every practice activity requires learner-produced output; mentor demonstrations and copied code are not sufficient.

## Practice Contract

Every task states:

1. target Go concept and established prerequisites;
2. starting code, inputs, environment, and relevant resource/concurrency limits;
3. required behavior and observable contract, including failure cases;
4. learner deliverable: prediction, explanation, code, tests, trace, report, review, or design;
5. verification: compiler, tests, race detector, benchmark, profile, HTTP/SQL observation, or review criteria;
6. assistance level and the independent transfer work required afterward.

Normal lessons teach before practice and request one clear learner action at a time. Full worksheets, challenge-first tasks, diagnostic-only work, or assessment mode require an explicit learner request.

## Progressive Assistance

```text
Clarifying question
-> conceptual hint
-> Go-specific mental-model hint
-> API or package-design hint
-> pseudocode or function signature
-> partial implementation
-> complete implementation only when requested or necessary
```

Do not reveal a full solution merely because the first attempt is incomplete. Repair the highest-impact misconception and return control to the learner. After a partial/full solution or extensive guidance, require a fresh variation with reduced help.

## Practice Modes

### Concept Prediction

Predict zero values, conversions, `defer` order, method sets, nil/interface behavior, slice capacity/aliasing, map lookup, pointer mutation, string/rune output, error matching, channel blocking, or context cancellation before execution. The learner must state the rule, not only the result.

### Compiler-Error Interpretation

Read the complete compiler or vet message, identify the violated type/package/visibility/method-set rule, propose the smallest correct change, and explain why suppressing the symptom would be wrong.

### Code Tracing

Trace control flow, copies, aliases, resource acquisition/cleanup, error paths, goroutine starts/stops, sends/receives, locks, and output. Use a state table or small diagram when multiple owners or timelines are involved.

### Guided Implementation

After teaching and a minimal example, implement one bounded function/handler/stage with mentor review between steps. The learner writes the code and explains the next decision before receiving another hint.

### Independent Implementation

Implement a structurally familiar but fresh contract without solution-shaped scaffolding. Include formatting, tests, unhappy paths, resource ownership, and a short trade-off note.

### Debugging

Reproduce, collect evidence, classify the boundary, state a falsifiable hypothesis, isolate, fix, add a regression test, and explain root cause. Guess-and-edit loops do not complete the task.

### Refactoring

Improve package cohesion, error ownership, interface size, receiver choice, context flow, testability, or construction while preserving behavior. Require characterization tests and reject abstraction whose benefit cannot be named.

### Concurrency Failure Analysis

Annotate every goroutine: starter/owner, stop condition, errors, resources, concurrency bound, wait path, and shutdown behavior. Analyze early returns, blocked sends, closed channels, timer leaks, abandoned results, and partial cancellation.

### Race and Deadlock Investigation

Use a reproducible test and `go test -race` where applicable. Identify the shared invariant or wait cycle; repair ownership/synchronization rather than inserting sleeps. Add a regression test and explain what the detector can and cannot prove.

### API Contract Implementation

Define method/path, request/response schemas, validation, statuses, consistent errors, limits, timeout/context policy, idempotency where relevant, authorization boundary, and handler tests. Begin with `net/http`; framework translation is later practice.

### Database and Transaction Exercise

Write parameterized SQL, scan all results correctly, handle `Rows.Err`/not-found/constraint cases, propagate context, own commit/rollback, test partial failure, and explain pool/timeout behavior. ORM-only answers do not satisfy SQL reasoning tasks.

### Test-Writing Exercise

Design table cases or subtests from invariants and failure modes. Use helpers, temp resources, deterministic dependencies, and integration tests where mocks would hide the relevant contract. Coverage percentage alone is not the goal.

### Benchmark and Profiling Exercise

Define a representative workload and correctness guard, establish a baseline, control setup/noise, interpret allocations/profile evidence, change one cause, and report the before/after result and maintenance trade-off.

### Code Review

Produce prioritized findings with evidence, impact, and repair direction across correctness, errors, resources, concurrency, API/SQL contracts, security, tests, operability, and unnecessary abstraction. Do not rewrite the submission before the learner responds.

### Interview Exercise

Ask one bounded Go language, concurrency, service, debugging, or design question. Let the learner clarify and reason, add one follow-up constraint, then review technical accuracy, trade-offs, failure handling, and communication.

### Project Milestone

Deliver a runnable vertical slice, tests, failure cases, concise design notes, and operational evidence required by `PROJECTS.md`. Completion requires working behavior and an explanation, not a generated repository skeleton.

## Data and Memory Practice Standard

Slice/map/struct/pointer/interface exercises must ask the learner to predict:

- which values are copied;
- which values share a backing resource or referenced object;
- whether mutation is visible elsewhere;
- whether `append` may allocate and detach;
- which nil/empty distinction is observable;
- whether comparison is permitted;
- why the final output follows.

Execution verifies the prediction; it does not replace reasoning.

## Error and Resource Practice Standard

Require at least one unhappy path. The learner identifies who creates, contextualizes, classifies, logs, returns, retries, and exposes each error; who closes each resource; what happens if cleanup/commit/flush fails; and whether `errors.Is`/`errors.As` still works. Reject ignored errors, routine `panic`, meaningless wrapping, and duplicate logging.

## Concurrency Practice Standard

Every concurrent solution answers:

1. Who starts and owns each goroutine?
2. How does it stop on success, error, cancellation, timeout, and shutdown?
3. Where do results and errors go?
4. Who closes channels and releases resources?
5. What limits concurrency and queued work?
6. What backpressure or overload behavior occurs?
7. Who waits, and what prevents leaks/deadlocks?

Channels, mutexes, atomics, sequential code, or another design must be selected by the invariant and ownership model, not by novelty.

## HTTP, SQL, and Production Practice Standard

- Use standard-library HTTP before framework exercises.
- Set explicit body/resource bounds and relevant server/client/query timeouts.
- Test malformed, unauthorized, not-found, conflict, dependency-failure, cancellation, and shutdown cases as applicable.
- Use explicit parameterized SQL and transaction reasoning before query generators/builders/ORM comparisons.
- Include structured logging/redaction, health/readiness, metrics/profile hooks, configuration validation, signal handling, and deployment implications as projects mature.
- Do not require microservices; a modular monolith or small service is usually the first production shape.

## Feedback Rules

- Lead with observable behavior and the strongest justified choice.
- Identify the highest-impact misconception or risk.
- Separate compiler correctness, behavioral correctness, concurrency safety, production safety, and design quality.
- Ask for one focused repair before showing a complete answer.
- Explain why a fix works and what test proves it.
- Schedule transfer work after substantial help.
- Keep internal skill ids, state proposals, evidence blocks, mastery tables, and Project Pack details hidden unless explicitly requested.

## Practice Rejections

Reject an activity that:

- starts with independent work on an untaught concept;
- asks only for syntax recall or copying;
- omits failure paths or verification;
- uses interfaces, pointers, goroutines, channels, contexts, layers, frameworks, ORMs, or microservices mechanically;
- launches unbounded work or lacks cancellation/shutdown ownership;
- treats sleeps as concurrency synchronization;
- hides HTTP, SQL, or runtime behavior behind a library before foundations;
- treats a passing happy path or coverage percentage as mastery;
- optimizes without representative measurements.

## ASSESSMENT_RULES.md

Canonical source: `domains/go/ASSESSMENT_RULES.md`.

# Go Assessment Rules

## Purpose

Assess transferable Go engineering competence without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md` or changing learner-state rules. The learner must produce and explain evidence; a correct-looking artifact without a sound model, failure behavior, and verification is insufficient.

## Valid Learner-Produced Evidence

- explanation of Go-specific execution, type, method-set, interface, nil, or runtime behavior;
- correct output, mutation, aliasing, copying, allocation, blocking, or cancellation prediction;
- idiomatic implementation with deliberate types, errors, resources, packages, and dependencies;
- deterministic success and unhappy-path tests;
- compiler-error, race, deadlock, goroutine-leak, resource-leak, or performance debugging report with regression evidence;
- HTTP/API contract and tested `net/http` implementation;
- package/application design with explicit dependency and lifecycle construction;
- parameterized SQL, transaction/isolation reasoning, migration, and integration tests;
- security review and concrete mitigation tests;
- benchmark/profile interpretation and evidence-backed optimization decision;
- graceful shutdown, reliability, observability, container, deployment, rollback, or runbook artifact;
- code review with prioritized findings and justified trade-offs;
- independent project milestone and defense under a changed constraint.

## Invalid Mastery Signals

These do not establish mastery: reading a lesson, seeing model code, copying a generated solution, uploading files, running Project setup, receiving hints, completing a topic label, obtaining a passing result by accident, or relying on mentor-written tests without explaining them.

## Evaluation Dimensions

### Language and Type Accuracy

The learner predicts Go-specific zero values, conversion, scope, `defer`, collection, value/pointer, method-set, interface, nil, string/rune, and generic behavior accurately and can use compiler feedback to correct a model.

### Idiomatic Clarity

Code is formatted, cohesive, explicit, readable, and uses concrete types, interfaces, generics, pointers, and packages only when their value is defensible. Familiar patterns from other languages are adapted rather than transplanted mechanically.

### Error and Resource Correctness

Errors are handled, contextualized, inspected, translated, logged, or returned by clear ownership. Resource acquisition and cleanup cover partial failure; ordinary failure does not use `panic`; unhappy paths are tested.

### Test and Tool Quality

Tests target behavior and failure paths, remain deterministic and isolated, and use the right level of realism. The learner can choose and interpret vet, race, fuzz, benchmark, coverage, and profiling evidence without overstating it.

### Concurrency Safety

The learner explains start/stop ownership, cancellation, errors, resources, limits, backpressure, waiting, and shutdown for every goroutine. Channel/lock/atomic choices match the protected invariant. Races, deadlocks, leaks, and overload are tested or investigated credibly.

### HTTP and API Quality

Contracts use correct methods/statuses/headers, bounded decoding, validation, consistent safe errors, middleware and context appropriately, explicit construction, timeouts, cancellation, handler tests, and graceful shutdown.

### Package and Dependency Design

Packages are cohesive and acyclic; `main` constructs and owns lifecycle; dependencies point deliberately; interfaces sit at actual consumer seams; architecture supports the current system without unnecessary layers.

### Persistence Correctness

SQL is parameterized and understood; rows/resources/errors are handled; transaction boundaries preserve invariants; migrations and integration tests exist; context/timeouts and pool sizing reflect bounded shared resources; ORM convenience never substitutes for SQL reasoning.

### Security and Reliability

The learner identifies trust boundaries, authorization, injection, secret/logging, limits, timeout, dependency, retry/idempotency, overload, health, shutdown, and partial-failure risks and implements testable mitigations.

### Observability and Performance

Logs, metrics, traces, runtime diagnostics, profiles, and benchmarks answer explicit questions. The learner distinguishes code, database, network, and infrastructure causes and optimizes only from representative evidence.

### Operations and Communication

Build, configuration, container, CI, migration, deployment, rollback, and runbook choices are coherent. Assumptions, uncertainty, risks, alternatives, and revisit conditions are communicated precisely.

## Assessment Formats

1. **Language checkpoint:** toolchain workflow plus Go-specific trace/prediction and a small package.
2. **Data checkpoint:** slice/map/struct/pointer/string/nil aliasing and mutation investigation.
3. **Abstraction checkpoint:** methods, method sets, typed-nil interface diagnosis, and concrete/interface/generic design choice.
4. **Failure checkpoint:** fallible resource-owning implementation with wrapping/inspection and unhappy-path tests.
5. **Tooling checkpoint:** table/subtests, HTTP or integration test, race/fuzz/benchmark task selected for a stated risk.
6. **Concurrency checkpoint:** bounded cancelable processor plus independent race, leak, or deadlock diagnosis and shutdown explanation.
7. **HTTP checkpoint:** standard-library JSON service contract with limits, validation, error behavior, tests, context, timeouts, and shutdown.
8. **Persistence checkpoint:** PostgreSQL migration/query/transaction boundary with integration and partial-failure evidence.
9. **Production checkpoint:** security, reliability, observability, profiling, container, deployment, and runbook review.
10. **Capstone defense:** independent service milestone revised after a new security, failure, consistency, or scale constraint.

## Independence and Assistance

- Guided work may show emerging capability but cannot alone establish independent mastery.
- A supplied implementation, solution-shaped pseudocode, mentor-written fix, or extensive hint sequence requires a later fresh task.
- Correct output with an incorrect mental model is not mastery.
- Explanation without implementation/tests is insufficient for operational competencies.
- Implementation without explanation is insufficient when accidental success or hidden lifecycle risk is plausible.
- Team or pair output must identify the learner's own contribution.

## Failure and Safety Gates

- No service milestone passes with ignored errors, ordinary `panic`, unbounded request bodies/work, missing timeouts, leaked resources, or unowned goroutines.
- No concurrency milestone passes without cancellation/error/shutdown and race/leak reasoning.
- No database milestone passes with interpolated untrusted SQL, unclear transaction ownership, or absent failure tests.
- No security claim passes from obscurity, frontend-only checks, or a single authentication strategy treated as universal.
- No performance claim passes without representative baseline and correctness evidence.
- Advanced distributed-system assessment requires reliable single-service foundations.

## Mastery Guidance

- **Introduced:** recognizes the model with substantial support.
- **Working:** completes guided work and explains most behavior.
- **Independent:** completes a fresh scenario with correct verification and bounded help.
- **Transferable/production:** adapts to unfamiliar constraints, anticipates failures, compares alternatives, and defends operational trade-offs.

These are rubric interpretations, not stored learner status.

## Learner-Facing Metadata Boundary

Normal lessons, practice, review, and assessment feedback must not expose internal skill ids, YAML learner-state patches, `Evidence Generated`, `Proposed State Updates`, mastery tables, Project Pack internals, audit notes, or continuation blocks. Such metadata appears only after an explicit supported metadata, progress, handoff, continuation, or debug request. Assessment never mutates learner state silently.

## PROJECTS.md

Canonical source: `domains/go/PROJECTS.md`.

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

## GLOSSARY.md

Canonical source: `domains/go/GLOSSARY.md`.

# Go Glossary

## Language Policy

İzahlar Azərbaycan dilində verilir; established Go və backend terminləri English saxlanılır. Code, identifiers, commands, compiler messages, package names, HTTP fields və SQL dəyişdirilmir. Terminlər əzbərlənmək üçün deyil, davranışı dəqiq izah etmək üçün istifadə olunur.

## Language and Data

- **Go** — sadə syntax, explicit error handling, fast compilation, garbage collection və built-in concurrency imkanları olan compiled programming language. Go başqa dilin sadəcə fərqli syntax-lı versiyası deyil.
- **toolchain** — `go run`, `go build`, `go test`, `go fmt`, `go vet`, `go doc` kimi development alətlərinin bütöv workflow-u.
- **module** — versioned dependency və import path sərhədi; adətən `go.mod` ilə müəyyən edilir.
- **package** — eyni directory-də birgə məsuliyyət daşıyan Go source files qrupu və code reuse/API sərhədi.
- **zero value** — explicit initialization olmadıqda type üçün avtomatik dəyər; məsələn `0`, `false`, `""`, yaxud uyğun type-lar üçün `nil`. Faydalı zero value API-ni sadələşdirə bilər.
- **named type** — mövcud underlying type əsasında yaradılan ayrıca type; method və compile-time ayrım verə bilər.
- **explicit conversion** — bir type-dan digərinə açıq keçid. Go çox implicit conversion etmir.
- **defer** — surrounding function qayıdarkən icra olunacaq call-u qeyd edir; resource cleanup üçün faydalıdır, amma loop və argument-evaluation davranışı anlaşılmalıdır.
- **array** — length-i type-ın hissəsi olan fixed-size value. Assignment array-i copy edir.
- **slice** — element sequence üçün descriptor; backing array-a istinad, length və capacity daşıyır. Slice assignment elementləri copy etmir.
- **backing array** — slice elementlərinin saxlandığı array. İki slice eyni backing array-i paylaşdıqda mutation aliasing yarada bilər.
- **length / capacity** — `len` görünən element sayıdır; `cap` backing storage daxilində slice-ın genişlənə biləcəyi həddir.
- **append** — slice-a element əlavə edir; capacity kifayət edərsə backing array paylaşımı qala bilər, etməzsə yeni array ayrıla bilər.
- **aliasing** — iki dəyərin eyni mutable storage-a çıxışı; bir tərəfdə mutation digər tərəfdə görünə bilər.
- **map** — key/value hash data structure. Lookup üçün comma-ok mövcudluğu zero value-dan ayırır; ordinary map concurrent mutation üçün safe deyil.
- **struct** — named fields-dan ibarət composite value type; class inheritance deyil.
- **value semantics** — assignment və parameter passing zamanı value copy olunması. Copy daxilində pointer/slice/map kimi descriptor/reference-like hissələr yenə shared data göstərə bilər.
- **pointer** — başqa value-nun address-ini saxlayır. Mutation/identity/lifetime ehtiyacına görə seçilir; avtomatik performance optimizasiyası deyil.
- **addressability** — expression-dan address götürməyin mümkün olub-olmaması; method calls və map element mutation qaydalarına təsir edir.
- **escape analysis** — compiler-in value-nun lifetime/placement ehtiyacını təhlil etməsi. Stack və heap qərarını source syntax haqqında sadə qaydaya çevirmək olmaz.
- **string** — immutable byte sequence; həmişə “character array” deyil.
- **byte** — `uint8` alias-ı; raw bytes və UTF-8 encoding üzərində işləmək üçün istifadə olunur.
- **rune** — `int32` alias-ı; Unicode code point ifadə edir, user-perceived grapheme ilə həmişə eyni deyil.
- **UTF-8** — Go source və string processing-də əsas text encoding modeli; bir rune birdən çox byte ola bilər.
- **nil** — pointer, slice, map, channel, function və interface kimi bəzi type-lar üçün absence-like zero value; hər type üçün yoxdur və nil davranışı type-a görə dəyişir.

## Methods, Interfaces, and Generics

- **method** — receiver parameter-i olan function.
- **receiver** — method-un bağlı olduğu value və ya pointer value; `this` ilə tam eyni model deyil.
- **value receiver** — receiver value copy-si ilə method; mutation original-a avtomatik getmir.
- **pointer receiver** — pointer vasitəsilə original value-ya çıxış verən method; mutation, identity və ya böyük-copy səbəbləri ilə seçilə bilər.
- **method set** — `T` və `*T` üçün hansı methods-un interface satisfaction-a daxil olduğunu müəyyən edən qaydalar.
- **embedding** — field/type daxil etməklə promotion və composition yaratmaq; class inheritance deyil və API exposure riskləri var.
- **interface** — tələb olunan method set-i ifadə edən behavior contract. Go-da satisfaction implicit-dir.
- **consumer-defined interface** — interface-i implementer deyil, davranışa ehtiyacı olan consumer package müəyyən edir; adətən daha kiçik və məqsədli olur.
- **interface value** — dynamic type və dynamic value cütü. İçində typed nil pointer olduqda interface özü non-nil ola bilər.
- **type assertion** — interface value-dan konkret/daha dar type tələb etmək; comma-ok form panic-dən qaçmağa kömək edir.
- **type switch** — interface-in dynamic type-na görə branch etmək.
- **type parameter** — generic declaration-da compile-time type dəyişəni.
- **constraint** — type parameter üçün icazə verilən type set və operations contract-ı.
- **comparable** — `==` və `!=` üçün uyğun type-ları ifadə edən predeclared constraint.
- **type approximation (`~`)** — constraint daxilində müəyyən underlying type-a malik named type-ları da qəbul etmə qaydası.

## Errors and Resources

- **error** — ordinary failure-i explicit return value kimi daşıyan interface. Exception və panic modeli deyil.
- **error wrapping** — error-a faydalı operation context əlavə edib `%w` ilə underlying identity-ni qorumaq.
- **`errors.Is`** — error chain daxilində müəyyən sentinel/identity uyğunluğunu yoxlayır.
- **`errors.As`** — error chain daxilində müəyyən typed error-u tapır.
- **sentinel error** — caller-in identity ilə tanıya bildiyi package-level error value; public contract kimi ehtiyatla istifadə olunur.
- **typed error** — structured məlumat və davranış daşıyan custom error type.
- **error ownership** — hansı layer-in context əlavə etməsi, classify/translate/log/return etməsi barədə aydın məsuliyyət.
- **resource lifecycle** — file, socket, response body, rows, transaction və goroutine-nin acquire, use, close/cancel/wait ardıcıllığı.
- **panic / recover** — ordinary error handling əvəzi olmayan exceptional control mechanism; recover yalnız uyğun goroutine boundary-də işləyir.

## Testing and Tooling

- **table-driven test** — eyni behavior-u named input/expected cases cədvəli ilə yoxlayan test pattern.
- **subtest** — `t.Run` ilə ayrıca named test scope; isolation və failure diagnosis üçün faydalıdır.
- **test helper** — reusable assertion/setup function; `t.Helper()` failure location-u daha faydalı edir.
- **golden test** — reviewable expected output file ilə müqayisə; update prosesi nəzarətli olmalıdır.
- **fuzz testing** — seed inputs-dan başlayıb invariant-ları geniş generated input sahəsində yoxlama.
- **race detector** — runtime instrumentation ilə data race əlamətlərini tapır; yalnız icra olunan yolları müşahidə edir və absence of report proof deyil.
- **benchmark** — müəyyən workload üçün ölçmə; setup, compiler effects, noise və representativeness nəzərə alınmalıdır.
- **allocation** — runtime memory yerləşdirməsi; sayın azalması yalnız real bottleneck və maintainability ilə birlikdə dəyərləndirilir.
- **profiling / `pprof`** — CPU, heap, allocation, goroutine, block və mutex evidence toplamaq və bottleneck tapmaq üsulu.

## Concurrency

- **concurrency** — birdən çox işin progress-inin overlap etməsi; parallelism eyni anda müxtəlif compute resources-da işləmədir.
- **goroutine** — Go runtime tərəfindən schedule olunan lightweight concurrent function execution. “Fire and forget” ownership modeli deyil.
- **channel** — typed values üçün communication və synchronization mechanism; hər shared-state problemi üçün məcburi seçim deyil.
- **buffered channel** — müəyyən capacity qədər send-in immediate receive olmadan tamamlanmasına imkan verir; bound və backpressure mənası olmalıdır.
- **channel closing ownership** — artıq send olmayacağını bilən sender-side owner channel-ı bağlayır; close data cleanup mexanizmi deyil.
- **select** — bir neçə channel operation/cancellation case arasında ready operation seçir.
- **context** — request/work cancellation, deadline və request-scoped metadata propagation contract-ı; general parameter bag deyil.
- **deadline** — operation-un bitməli olduğu absolute time sərhədi.
- **cancellation** — işin artıq lazım olmadığını iştirakçılara bildirmək; cleanup və wait yenə owner məsuliyyətidir.
- **mutex** — shared invariant üçün exclusive access verir.
- **read/write mutex** — readers/writer ayrımı verir; workload evidence olmadan adi mutex-dən avtomatik yaxşı deyil.
- **atomic** — çox dar single-value synchronization operations; complex invariant-ları avtomatik həll etmir.
- **wait group** — owner-in goroutine completion-u gözləməsinə kömək edir; error propagation və cancellation özü həll etmir.
- **race condition** — nəticənin concurrent ordering-dən yanlış asılı olması; data race onun xüsusi unsynchronized-memory formasıdır.
- **deadlock** — participants bir-birini gözlədiyi üçün progress-in dayanması.
- **goroutine leak** — artıq faydalı olmayan, amma blocking/cancellation çatışmazlığına görə bitməyən goroutine.
- **backpressure** — downstream capacity az olduqda upstream work qəbulunu/yaranmasını məhdudlaşdırmaq.
- **bounded concurrency** — eyni anda işləyən iş sayına explicit limit qoymaq.
- **graceful shutdown** — yeni işi dayandırmaq, cancellation yaymaq, policy-yə görə in-flight işi drain/cancel etmək, resources bağlamaq və deadline daxilində gözləmək.

## HTTP, Persistence, and Architecture

- **handler** — HTTP request qəbul edib response yaradan `http.Handler` contract-ı.
- **middleware** — handler-i cross-cutting behavior ilə wrap edən composition; order və response semantics önəmlidir.
- **request / response** — HTTP message modelinin inbound/outbound tərəfləri; body lifecycle və headers/status explicit-dir.
- **request size limit** — untrusted body-nin memory/CPU/resource istifadəsini məhdudlaşdıran sərhəd.
- **idempotency** — eyni logical operation təkrarlandıqda əlavə unintended effect yaratmamaq xüsusiyyəti.
- **dependency injection** — dependencies-i explicit construction ilə vermək; container və interface-per-service tələb etmir.
- **package cohesion** — bir package daxilində concepts-un bir aydın məsuliyyət ətrafında birləşməsi.
- **modular monolith** — bir deployable application daxilində aydın module boundaries; microservices-dən əvvəl çox vaxt uyğun başlanğıcdır.
- **`database/sql`** — relational database operations üçün standard abstraction. `*sql.DB` tək connection deyil, concurrent pool handle-dır.
- **driver** — `database/sql` ilə konkret database protocol/implementation arasında adapter.
- **connection pool** — reusable database connections üçün bounded shared resource.
- **parameterized SQL** — values-u SQL text concatenation etmədən parameters kimi ötürmək; injection riskini azaldır.
- **transaction** — operations qrupunun consistency/isolation boundary-si; commit və rollback ownership tələb edir.
- **isolation** — concurrent transactions-un bir-birinin changes-lərini necə müşahidə etdiyini idarə edən semantics.
- **migration** — database schema-nın versioned dəyişiklik prosesi.
- **N+1 pattern** — bir əsas query-dən sonra hər item üçün əlavə query yaradaraq latency/load artırmaq.
- **ORM** — object model ilə relational persistence arasında abstraction; SQL, transaction, pool və query behavior-u öyrənməyi əvəz etmir.

## Production Engineering

- **structured logging** — machine-queryable key/value attributes ilə log yazmaq; `log/slog` standard-library option-dır.
- **observability** — system-in internal behavior-u logs, metrics, traces və profiles vasitəsilə anlama qabiliyyəti.
- **metric cardinality** — label combinations sayı; unbounded IDs operational cost və usability problemi yarada bilər.
- **trace** — request/work-un services və operations boyunca causal path-i; context propagation tələb edir.
- **readiness / liveness** — traffic qəbul etməyə hazır olma ilə process-in restart tələb edib-etməməsini ayıran health signals.
- **retry** — uyğun transient failure üçün operation-u yenidən sınamaq; deadline, backoff, jitter, budget və idempotency tələb edir.
- **exponential backoff** — retries arasında intervalı artırmaq; jitter synchronized retry storm-u azaltmağa kömək edir.
- **load shedding** — overload zamanı bounded system-i qorumaq üçün yeni işi kontrollu reject etmək.
- **circuit breaker** — uğursuz dependency-yə calls-u müvəqqəti məhdudlaşdıran reliability concept; universal library requirement deyil.
- **deployment** — build artifact, configuration, migration, startup, health, rollout və rollback daxil olan production change prosesi.
- **multi-stage Docker build** — build toolchain ilə runtime image-i ayırmaq; minimal image-in debugging/CA/timezone trade-offs-u qalır.
- **runbook** — operational simptom, diagnosis, mitigation, verification, escalation və recovery addımlarını sənədləşdirən practical guide.

## Common Confusions

- `nil slice` və empty slice çox operation-da oxşardır, amma serialization/API semantics-də fərqlənə bilər.
- interface-in dynamic value-si typed nil olduqda interface `nil` deyil.
- slice copy descriptor-u copy edir; element storage həmişə ayrılmır.
- `*sql.DB` bir connection deyil.
- `context` dependency/configuration container deyil.
- channel shared mutable state üçün yeganə və ya avtomatik ən yaxşı həll deyil.
- goroutine başlatmaq lifecycle ownership yaratmadan təhlükəsiz concurrency demək deyil.
- framework, ORM və architecture template underlying HTTP, SQL, error və shutdown məsuliyyətini ləğv etmir.

## QUALITY_REVIEW.md

Canonical source: `domains/go/QUALITY_REVIEW.md`.

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
