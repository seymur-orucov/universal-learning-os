# GoF and React Design Patterns Glossary and Projects

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/gof-react-patterns/GLOSSARY.md

# GoF and React Design Patterns Glossary

Established English terms saxlanılır; Azerbaijani explanation istifadəyə və trade-off-a fokuslanır.

## Design Fundamentals

- **design pattern** — təkrarlanan design problem-i üçün context-sensitive vocabulary və solution shape; hazır code və universal rule deyil.
- **problem / forces** — müşahidə olunan ağrı və bir-biri ilə gərginlik yaradan constraints/change axes.
- **intent** — pattern-in həll etməyə çalışdığı əsas məqsəd.
- **participant / collaborator** — pattern daxilində responsibility daşıyan role/object/function.
- **coupling / cohesion** — hissələr arası asılılığın gücü və bir hissənin responsibility-lərinin əlaqəliliyi.
- **composition over inheritance** — behavior-u object/function collaboration ilə qurmağı deep subclassing-dən əvvəl yoxlama prinsipi.
- **indirection** — caller və operation arasına əlavə boundary qoymaq; flexibility verir, debugging/cognitive cost yaradır.
- **YAGNI / speculative generality** — sübut olunmamış future need üçün abstraction yaratmamaq.
- **overengineering** — problem və expected change ilə əsaslandırılmayan design cost.
- **no-pattern solution** — plain function, direct composition, local state və data structure ilə kifayət edən minimum design.
- **refactoring / safety net** — observable behavior-u saxlayan kiçik structural dəyişiklik və onu qoruyan tests.
- **pattern removal** — artıq fayda verməyən abstraction-u behavior saxlayaraq silmək.

## GoF Categories and Patterns

- **creational patterns** — object creation, family, configuration və lifetime variation-ını idarə edir.
- **Factory Method** — creation decision-ını overridable/deferred operation-a verir.
- **Abstract Factory** — uyğun object family-lərini concrete class-ları yaymadan yaradır.
- **Builder** — complex valid object/configuration-u mərhələlərlə qurur.
- **Prototype** — configured instance-dan copy/clone ilə creation edir; identity və deep-copy semantics vacibdir.
- **Singleton** — bir process/scope üçün tək accessible instance niyyəti; global state, SSR və test isolation risklidir.
- **structural patterns** — object/function-ların necə birləşdiyini idarə edir.
- **Adapter** — incompatible interface/data model-i owned contract-a çevirir.
- **Bridge** — iki müstəqil variation axis-i abstraction və implementation boundary-si ilə ayırır.
- **Composite** — leaf və group-u eyni interface-lə tree olaraq idarə edir.
- **Decorator** — eyni contract ətrafında behavior əlavə edir; order semantics vacibdir.
- **Facade** — complex subsystem üçün kiçik task-oriented surface verir.
- **Flyweight** — çoxsaylı instances arasında immutable/shared data bölüşür; profiling evidence-i tələb edir.
- **Proxy** — access-i control, lazy, remote və ya cache edən stand-in.
- **behavioral patterns** — control flow, algorithm, state və communication-u təşkil edir.
- **Chain of Responsibility** — request-i ordered handlers/rules boyunca ötürür.
- **Command** — action-u data/object kimi təmsil edir; queue, log, undo mümkün olur.
- **Iterator** — collection traversal-ı representation-dan ayırır.
- **Mediator** — participants arası coordination-u mərkəzləşdirir; god object riski var.
- **Memento** — encapsulation-u pozmadan restorable snapshot saxlayır.
- **Observer** — subject dəyişəndə subscribers-a notification verir; lifecycle/unsubscribe vacibdir.
- **State** — behavior-u explicit current state və transition-lara görə dəyişir.
- **Strategy** — interchangeable algorithm/policy contract-ı.
- **Template Method** — algorithm skeleton-u sabit saxlayıb steps-i variation edir.
- **Visitor** — stable structure üzərinə yeni operations əlavə edir; new node type baha ola bilər.
- **Interpreter** — bounded language grammar/AST üçün evaluation model-i.

## React Patterns and Runtime

- **compound components** — related child components shared context vasitəsilə coherent flexible API yaradır.
- **controlled / uncontrolled** — state source-of-truth parent prop-dadır və ya component/ref daxilindədir.
- **container/presentational** — orchestration/data access ilə rendering responsibility-ni ayıran heuristic.
- **custom hook** — React lifecycle/stateful behavior reuse edir; plain utility function-un əvəzi deyil.
- **render props / HOC** — behavior-u render callback və ya component wrapper ilə paylaşan patterns.
- **Provider pattern** — subtree scope-da dependency/state təqdim edir; global olmaq məcburiyyətində deyil.
- **reducer / state reducer** — transition logic-i event-based function-a verir; state reducer consumer override-a imkan yaradır.
- **prop getter** — correct behavior/accessibility props-larını consumer props ilə təhlükəsiz merge edən API.
- **headless UI** — behavior və accessibility-ni styling/markup control-dan ayırır.
- **slots** — component layout-da named extension regions.
- **polymorphic component** — `as` kimi API ilə rendered element/component-i dəyişir; semantic correctness yenə consumer responsibility-dir.
- **state colocation / lifting state** — state-i ən yaxın consumer yanında saxlamaq və coordination üçün nearest common owner-a qaldırmaq.
- **derived state** — source state-dən hesablanan, ayrıca synchronized copy kimi saxlanmamalı dəyər.
- **external store** — React tree-dən kənar subscription-based state source.
- **adapter hook** — vendor hook/API-ni application-owned React contract-a map edir.
- **optimistic UI** — server confirmation-dan əvvəl expected result göstərir və failure-da rollback/reconcile edir.
- **Error Boundary** — descendant render lifecycle failure-nı isolate edib fallback göstərən React boundary.

## Testing and Evidence

- **public contract / observable behavior** — caller və ya user-in görə bildiyi nəticə; private method call deyil.
- **contract test** — bir neçə implementation/adapter-in eyni owned behavior contract-ına uyğunluğunu yoxlayır.
- **test double** — real collaborator əvəzinə dummy, stub, spy, mock və ya fake.
- **Vitest** — pure TypeScript/JavaScript logic və component-support tests üçün primary runner.
- **React Testing Library** — rendered behavior-i semantic user queries və interactions ilə test etmək üçün library.
- **transfer evidence** — eyni solution-u kopyalamadan yeni context/constraint altında skill tətbiqi.
- **mastery** — explanation göstərilməsi deyil; implementation, tests, trade-off və transfer ilə dəstəklənən learner competence claim-i.

## Source: domains/gof-react-patterns/PROJECTS.md

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
