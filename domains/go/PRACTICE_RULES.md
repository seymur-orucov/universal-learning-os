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
