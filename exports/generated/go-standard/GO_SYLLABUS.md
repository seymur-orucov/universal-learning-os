# Go Syllabus

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/go/SYLLABUS.md

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
