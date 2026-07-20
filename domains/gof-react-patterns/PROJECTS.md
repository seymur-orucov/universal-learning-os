# GoF and React Design Patterns Case Studies and Capstones

## Incremental Milestone Contract

Hər case/capstone bu milestone-ları ardıcıllıqla keçir:

1. Requirements, users, risks, constraints və non-goals.
2. Existing/naive baseline və behavior safety-net tests.
3. Forces, change axes və no-pattern daxil ən azı üç candidate.
4. Small vertical slice TypeScript implementation.
5. Vitest tests; rendered behavior varsa React Testing Library.
6. Failure/edge paths, observability və cleanup.
7. Alternative implementation və trade-off comparison.
8. Refactor/migration; pattern removal probe.
9. Mermaid diagram, educational simplifications explicit.
10. Decision record, reversal trigger və independent transfer.

Mentor milestone-u learner əvəzinə tamamlamır və complete solution-u attempt-dən əvvəl göstərmir. Milestone completion mastery deyil.

## Twelve Detailed Case Studies

### 1. Notification Platform

Email, SMS, push və in-app channels; tenant preferences, retry və provider failover. Strategy vs lookup table, Bridge for message/channel axes, Decorator for telemetry/retry və Observer for scoped delivery events müqayisə olunur. Tests channel selection, wrapper order, duplicate prevention, failure və unsubscribe behavior-u yoxlayır. Two channels və sabit policy olduqda plain functions candidate-dir.

### 2. Checkout

Region-specific payment gateways, fraud rules, discounts və receipt flow. Factory Method/simple factory, Chain/rules pipeline, Strategy və Facade candidates-dir. Idempotency, decline, partial failure və money boundaries test edilir. Factory class hierarchy yalnız creation override real extension point olduqda qəbul edilir.

### 3. Layered API Client

REST və GraphQL vendors canonical domain contract arxasında Adapter-lə birləşir; auth, retry, cache və telemetry Decorator-ları; task-oriented Facade. Contract tests mapping/error semantics-i, sequence tests wrapper order-i yoxlayır. Hidden retry və god client anti-pattern-dir.

### 4. Permissions and Feature Flags

Role, subscription, tenant flag və rollout rules. Chain of Responsibility vs ordered predicate pipeline; Composite yalnız nested policy tree realdırsa; Proxy protected resource access üçün. Denial reason, rule order, stale flag və default-deny tests var. Global event bus və scattered JSX conditions rədd edilir.

### 5. Data Table

Pagination, filtering, sorting, selection və 50k-row metadata. Controlled/uncontrolled, reducer, derived state, state colocation və measured Flyweight/normalization. RTL user flows və pure reducer tests. Premature global store, duplicated derived rows və profiling-siz Flyweight qəbul edilmir.

### 6. Headless Dialog

Accessible behavior style-dan ayrılır: headless UI, compound components, state reducer, prop getter və slots. Focus return, Escape, accessible name və consumer override RTL ilə yoxlanır. GoF Composite/Strategy yalnız conceptual comparisons-dır. Simple product dialog üçün fixed component daha yaxşı ola bilər.

### 7. Multi-Step Form

Draft ownership, validation, navigation və submit recovery. Reducer/State comparison, controlled fields, state colocation/lifting, custom hooks və Mediator candidate. Illegal step, reload restore və error recovery tests. One-page form üçün workflow abstraction overengineering-dir.

### 8. Undo/Redo Editor

Text/block edits Command kimi, snapshots Memento kimi, plugin operations Strategy/Visitor candidate kimi araşdırılır. Execute/undo/redo invariants, memory cap, corrupted snapshot və schema migration test edilir. Tiny editor üçün immutable history array kifayət edə bilər.

### 9. Theme and Design-System Factory

Brand-consistent tokens/components family-si Abstract Factory və React Provider/slots/polymorphic API ilə araşdırılır. Cross-brand family consistency, semantic HTML və override behavior test edilir. Two CSS theme variables üçün abstract component family rədd edilir.

### 10. Upload Pipeline

Validation, chunking, retry və completion: State/discriminated reducer, Strategy for transports, Template Method vs function pipeline, Command for queued/cancellable work. Transition, cancellation, retry, progress və cleanup tests. Boolean flags və implicit effects anti-pattern-dir.

### 11. Pricing Engine

Customer segment, promotion, tax və time-bound rules. Strategy, Chain, Interpreter for bounded business rule AST və Visitor/exhaustive union for reporting. Money precision, ordering, invalid rule, conflict və audit tests. General-purpose DSL və class-per-rule only proven scale ilə.

### 12. Dashboard Widget Architecture

Independent widgets, data adapters, layout tree, error isolation və cross-widget filters. Prototype for configs, Adapter hooks, compound/slot APIs, external store selectors, Error Boundary, Facade və Composite candidate-ləri. Render isolation, config clone identity, error fallback və subscription cleanup tests. “Pattern zoo” review və removal milestone mandatory-dir.

## Capstone Options

### Capstone A — Commerce Operations Workbench

Checkout, pricing, permissions və order table-ni birləşdir. Required evidence: Factory/Strategy/rules decision, API Adapter/Facade, React state ownership, optimistic status rollback, Vitest + RTL tests, architecture diagram, migration və at least one rejected/removed pattern.

### Capstone B — Extensible Content Studio

Undo/redo editor, plugin operations, autosave/upload və accessible dialogs. Required evidence: Command/Memento boundaries, State transitions, plugin extension alternative, memory/failure strategy, rendered keyboard/focus tests və unfamiliar plugin transfer.

### Capstone C — Multi-Brand Analytics Platform

Design-system family, dashboard widgets, data adapters, filters və error isolation. Required evidence: Abstract Factory decision or rejection, slots/headless/polymorphic APIs, scoped external state, contract/render tests, performance evidence before sharing/Flyweight, cross-team ADR və removal triggers.

## Capstone Acceptance

- Pattern count score deyil; minimum sufficient design qiymətləndirilir.
- TypeScript implementation complete və coherent-dir; JavaScript comparison yalnız meaningful runtime fərqi göstərir.
- Vitest tests public behavior, failure və transitions-i əhatə edir; RTL yalnız rendered behavior üçündür.
- Learner at least two viable alternatives, no-pattern option, misuse və overengineering riskini müdafiə edir.
- Diagram valid Mermaid-dir və educational simplification label-i daşıyır.
- Transfer defense original code-u təkrarlamayan yeni constraint istifadə edir.

