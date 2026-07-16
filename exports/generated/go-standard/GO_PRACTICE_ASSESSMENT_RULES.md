# Go Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/go/PRACTICE_RULES.md

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

## Source: domains/go/ASSESSMENT_RULES.md

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
