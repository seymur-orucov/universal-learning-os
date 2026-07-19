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

## Source: domains/go/DOMAIN.md

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

## Source: domains/go/GLOSSARY.md

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
