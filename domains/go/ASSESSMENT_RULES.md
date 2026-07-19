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
