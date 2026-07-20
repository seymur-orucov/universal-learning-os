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

