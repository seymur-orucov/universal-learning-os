# Localization Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/LOCALIZATION_SPEC.md

# Localization Specification

## Purpose

Define framework-level policy for instructional language and terminology language.

## Scope

This specification governs user-facing teaching text, domain terminology preservation, learner language preferences, and domain-pack terminology guidance.

## Non-Goals

- It does not hardcode one global framework language.
- It does not define concrete YAML fields or schemas.
- It does not translate domain content.
- It does not define locale-specific UI behavior.

## Core Concepts

- Instruction Language: the language used for explanations, feedback, lesson flow, and user-facing teaching text.
- Terminology Language: the preferred language for domain-specific technical terms.
- Term Preservation: the rule that important domain terms may remain untranslated when terminology language differs from instruction language.
- Glossary Mapping: optional domain-pack mapping between original terms, translated explanations, examples, and usage notes.
- Learner Language Preference: learner-specific language configuration, later stored in learner profile or learner state.
- Domain Language Policy: domain-pack-specific guidance for how terminology should be presented.

## Normative Requirements

- The framework MUST support separate instruction language and terminology language preferences.
- User-facing teaching output SHOULD follow the learner's instruction language when available.
- Domain-specific technical terms SHOULD remain in the terminology language when the learner preference requires it.
- When instruction language and terminology language differ, explanations MAY include a short clarification in the instruction language, but MUST NOT replace important technical terms with unnatural translations.
- Domain packs SHOULD provide glossary guidance for important terms when terminology preservation matters.
- Commands that produce lessons, practice, reviews, assessments, interviews, or progress reports SHOULD respect localization preferences.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.
- If language preferences are missing, commands SHOULD use the project or user-provided language context.

## Example Preference

A learner or project MAY request Azerbaijani as the instruction language and English as the terminology language. In that case, explanations and feedback should be in Azerbaijani while important technical terms remain in English when natural and domain-appropriate.

## Relationships

- Learner preference storage is described conceptually in `specification/STATE_SPEC.md`.
- Domain glossary guidance belongs to domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- User-facing command behavior is governed by `specification/COMMAND_SPEC.md`.
- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.

## OPEN QUESTION

- Should language preferences use BCP 47 language tags once schemas exist?
- Should terminology language support multiple preferred languages ordered by priority?
- Where should project-level language defaults be stored before application configuration exists?

## Source: domains/gof-react-patterns/DOMAIN.md

# GoF and React Design Patterns Domain

## Domain Identity

- Domain id: `gof-react-patterns`
- Domain title: `GoF and React Design Patterns`
- Domain version: `0.1.0-draft`
- Primary implementation: TypeScript
- Secondary comparison: JavaScript runtime behavior
- UI application: React/TSX
- Testing: Vitest; rendered behavior üçün React Testing Library

## Məqsəd və auditoriya

Bu domain JavaScript/TypeScript və React fundamentals bilən Front-End, Full-Stack və UI Platform engineers üçün pattern-selection, refactoring və architecture judgment qurur. Learner real problem-dən forces çıxarır, naive design-in failure mode-unu göstərir, minimum design-i derivasiya edir, TypeScript implementation və test yazır, functional alternative ilə müqayisə edir və pattern-in nə vaxt silinməli olduğunu müdafiə edir.

Prerequisites:

- closure, object, prototype, module, composition və async JavaScript;
- TypeScript union, interface, generic və type narrowing;
- React component, props, state, context, hooks və render lifecycle fundamentals;
- basic automated testing və dependency boundary anlayışı.

Zəif prerequisite aşkar edilərsə mentor Module 1–2 remediation verir. Professional title və lesson exposure readiness/mastery evidence deyil.

## Learner Outcomes

Learner observable evidence ilə:

- bütün 23 GoF pattern-i problem, intent, structure, alternatives və misuse baxımından izah edir;
- creational, structural və behavioral pattern-lər arasında seçim edir;
- class-heavy implementation-u composition, closure, function, discriminated union və data-driven alternative ilə müqayisə edir;
- 20 React pattern-i component API, state ownership, composition və rendered behavior kontekstində tətbiq edir;
- GoF–React əlaqələrini conceptual analogy kimi istifadə edir, false one-to-one equivalence iddia etmir;
- Vitest və lazım olduqda React Testing Library ilə public behavior test edir;
- pattern smell, abstraction debt, speculative generality və framework imitation-u tapır;
- existing design-i safety-net tests ilə refactor edir və artıq pattern-i silir;
- architecture və interview qərarlarını trade-off, change axis və evidence ilə müdafiə edir.

## Scope və Non-Goals

- GoF catalog vocabulary-dir, universal recipe və ya mandatory architecture deyil.
- React patterns GoF catalog-un “React versiyası” deyil; bəzi forces oxşar olsa da lifecycle, rendering və state ownership fərqlidir.
- TypeScript primary complete implementation dilidir. JavaScript müqayisəsi yalnız erased types, prototype, closure və runtime validation fərqini aydınlaşdıranda verilir.
- Functional alternative daha sadədirsə ona üstünlük verilə bilər.
- Toy `Dog`, `Cat`, `Car` hierarchies istifadə olunmur; notification, checkout, permissions, API, table, dialog, editor, upload və pricing scenarios istifadə olunur.
- Code və tests canonical educational Markdown examples-dır. Domain React/Vitest dependency-si və runnable app infrastructure əlavə etmir.
- Pattern tətbiq etmək məqsəd deyil. “No pattern”, plain function, local state və direct composition həmişə candidate-dir.
- Learner state burada saxlanmır və learner activity evidence-i olmadan progress dəyişmir.

## Localization

Teaching, feedback və lesson flow Azerbaijani dilindədir. `Factory Method`, `Strategy`, `composition`, `state ownership`, `render props`, `custom hook`, `trade-off`, `test double` kimi established technical terminology English saxlanılır. Code, API, filename, type və test names English qalır.

## Mentor və Runtime Behavior

- Default `START_LESSON` foundations-dan başlayır və teach → guided check → feedback → guided practice → independent practice ardıcıllığını saxlayır.
- Mentor əvvəl problem və naive design göstərir, sonra forces-dan design derivasiya edir; pattern adını solution oracle kimi erkən vermir.
- Hər major implementation public behavior test-i, alternatives, testing implications, misuse, overengineering və “when no pattern is preferable” bölməsi ilə gəlir.
- React Testing Library yalnız rendered user-observable behavior olduqda istifadə olunur; pure logic Vitest ilə test edilir.
- Full solution attempt-dən əvvəl göstərilmir. Normal cavab bir aydın learner action istəyir.
- Mermaid diagram educational simplification-dırsa label bunu açıq deyir; diagram code-un əvəzi deyil.
- Mastery yalnız implementation, tests, explanation, trade-off və transfer evidence ilə qiymətləndirilə bilər.

## Command Matrix

| Command | Domain behavior | Evidence/state boundary |
| --- | --- | --- |
| `START_TRACK` | Goal və prerequisite-lərə görə foundations, GoF, React, refactoring və ya interview path seçir. | Track göstərmək mastery yaratmır. |
| `START_LESSON` | Next pattern/concept-i 28-part contract ilə teaching-first başlayır. | İlk action guided check-dir. |
| `CONTINUE_LESSON` | Learner response-u review edir, misconception-u repair edir və bir next action verir. | Yalnız observed response evidence ola bilər. |
| `PRACTICE` | Selection, implementation, testing, refactoring, review və removal task seçir. | Solution attempt-dən əvvəl açılmır. |
| `REVIEW` | Weak, stale, failed və ya requested skill üçün retrieval practice qurur. | Review scheduling state contract-a tabedir. |
| `ASSESS` | Unseen/transfer scenario-da implementation, tests və defense yoxlayır. | Evidence olmadan mastery claim etmir. |
| `START_PROJECT` | `PROJECTS.md` case/capstone milestone-larını incremental başlayır. | Mentor deliverable-i learner əvəzinə tamamlamır. |
| `INTERVIEW` | Junior, Mid, Senior və Staff/Lead mode-da timed və ya coached interview aparır. | Feedback attempt-dən sonra verilir. |
| `SHOW_PROGRESS` | Supplied learner state və evidence-i concise göstərir. | Missing state/evidence dürüst bildirilir; silent mutation yoxdur. |

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
