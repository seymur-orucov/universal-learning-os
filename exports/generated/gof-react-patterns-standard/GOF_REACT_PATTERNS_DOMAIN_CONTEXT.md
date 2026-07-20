# GoF and React Design Patterns Domain Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

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

## Source: domains/gof-react-patterns/README.md

# GoF and React Design Patterns

`gof-react-patterns` Universal Learning OS üçün reusable, learner-neutral canonical domain pack-dır. Məqsəd pattern adlarını əzbərlətmək deyil; problemi, forces-ları və sadə alternativi analiz edib pattern-i seçmək, uyğunlaşdırmaq, test etmək, refactor etmək və lazım olmadıqda rədd etmək bacarığı yaratmaqdır.

## Domain Map

- `DOMAIN.md` — identity, audience, scope, localization, runtime və command matrix.
- `SYLLABUS.md` — 15-module curriculum, 23 GoF və 20 React pattern lesson contract-ı.
- `SKILL_GRAPH.md` — stable learner-skill IDs və prerequisite edges.
- `PRACTICE_RULES.md` — task schema, adaptive practice, labs və interview modes.
- `ASSESSMENT_RULES.md` — evidence checkpoints və mastery rubric.
- `PROJECTS.md` — 12 case study, üç capstone və milestone qaydaları.
- `GLOSSARY.md` — Azerbaijani explanations, English terminology.
- `QUALITY_REVIEW.md` — content və boundary quality gate.

## Canonical Boundaries

Domain content contract-ı `specification/DOMAIN_PACK_SPEC.md`, teaching lifecycle `specification/LEARNING_LIFECYCLE.md`, command semantics `specification/COMMAND_SPEC.md`, learner state `specification/STATE_SPEC.md`, localization isə `specification/LOCALIZATION_SPEC.md` tərəfindən idarə olunur. Bu fayllar learner progress, evidence log və mastery record saxlamır. Lesson göstərilməsi mastery deyil.

## Source: domains/gof-react-patterns/QUALITY_REVIEW.md

# GoF and React Design Patterns Quality Review

## Structure and Boundaries

- [x] Canonical id `gof-react-patterns` və exactly nine top-level Markdown files.
- [x] Reusable domain content learner state, progress və mastery records-dan ayrıdır.
- [x] Framework, lifecycle, command, state və localization rules canonical specifications-a cross-reference olunur.
- [x] No React/Vitest dependency və runnable application infrastructure əlavə edilmir.

## Curriculum Coverage

- [x] Exactly 15 modules progressive foundations → catalog → React → architecture → capstone/interview path-i verir.
- [x] All 23 GoF: 5 creational, 7 structural, 11 behavioral.
- [x] All 20 React patterns Module 8-də individual lesson kimi verilir.
- [x] Every individual pattern lesson 28-part contract-a tabedir.
- [x] Functional/data-driven və no-pattern alternatives mandatory-dir.
- [x] GoF–React connections conceptual comparison-dır; false one-to-one equivalence yoxdur.

## Teaching and Technical Quality

- [x] Problem → naive design → forces → derivation → implementation → tests → trade-offs → practice flow-u canonical-dır.
- [x] TypeScript complete primary, JavaScript runtime comparison secondary-dir.
- [x] Major implementations meaningful Vitest tests ilə pair olunur.
- [x] React Testing Library yalnız rendered behavior examples-da istifadə olunur.
- [x] Notification, checkout, API, permissions, table, dialog, form, editor, design system, upload, pricing və dashboard examples realdır; `Dog`/`Car` hierarchy yoxdur.
- [x] Mermaid class, sequence, state, flow və component/architecture diagrams purposeful-dır və educational simplifications label olunur.
- [x] Alternatives, testing implications, misuse, overengineering və no-pattern threshold hər lesson contract-ında məcburidir.

## Practice, Assessment and Projects

- [x] Complete practice task schema, adaptive selection, progressive hints və retrieval review var.
- [x] Selection, derivation, implementation, testing, comparison, refactoring, review, removal, architecture və interview modes var.
- [x] Exactly 12 refactoring laboratories, code-review və pattern-removal tasks var.
- [x] Junior, Mid, Senior və Staff/Lead interview levels; coached, simulation, rapid-fire və code-review modes var.
- [x] Foundations, every GoF category, TypeScript, React, anti-patterns, architecture, testing, refactoring, selection və capstone checkpoints var.
- [x] Mastery implementation + tests + explanation + trade-off + transfer evidence tələb edir.
- [x] Exactly 12 detailed case studies və three capstone options incremental milestone rules ilə verilir.

## Final Gate

- [x] Teaching-first behavior solution-u attempt-dən əvvəl göstərmir.
- [x] Lesson exposure, copied code və generated examples mastery sayılmır.
- [x] Pattern count quality metric deyil; rejection və removal competence-in hissəsidir.
