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

## Source: domains/nodejs/DOMAIN.md

# Node.js Domain

## Identity and Purpose

- Domain id: `nodejs`
- Title: Node.js
- Primary learner: Experienced JavaScript/TypeScript Front-End Engineer moving toward backend or full-stack engineering.
- Goal: become productive and confident building, testing, securing, diagnosing, and operating backend services with Node.js.

The domain connects existing frontend JavaScript knowledge to server runtime behavior. It builds durable Node.js and HTTP understanding before framework abstractions, and production judgment before framework memorization.

## Outcomes

The learner should be able to explain the Node.js runtime and event loop; build HTTP services and APIs; define middleware and application boundaries; validate input and serialize output; design robust errors; use PostgreSQL with explicit SQL and transaction reasoning; implement authentication and authorization fundamentals; test success and failure paths; diagnose performance and reliability problems; and reason about security, observability, deployment, Express, Fastify, and later NestJS.

## Prerequisites and Adaptation

Recommended prerequisites are solid JavaScript; basic TypeScript; functions, objects, arrays, modules, promises, and `async`/`await`; basic HTTP awareness; command-line usage; Git; and package management. SQL fundamentals are recommended before advanced persistence lessons.

When a prerequisite is weak, the mentor should diagnose the smallest blocking gap and provide a focused bridge or prerequisite exercise. The track must not silently become a beginner JavaScript course.

## Runtime-First Philosophy

```text
Node.js fundamentals -> HTTP and API fundamentals -> backend application structure
-> persistence -> security -> testing -> performance -> operations
-> optional framework specialization
```

Do not use a NestJS-first, decorators-first, or framework-magic-first progression. Teach JavaScript language behavior separately from Node.js runtime behavior, HTTP before Express/Fastify routing abstractions, and SQL reasoning before ORM convenience. NestJS is a later specialization after runtime, HTTP, architecture, validation, PostgreSQL, and testing foundations have learner evidence.

## Core Progression

```text
Node.js runtime -> event loop and async execution -> modules and core APIs
-> filesystem, buffers, and streams -> HTTP fundamentals -> native HTTP server
-> Express/Fastify -> application architecture -> validation and error handling
-> PostgreSQL -> transactions and consistency -> authentication and authorization
-> security -> testing -> caching and background jobs -> real-time systems
-> performance and reliability -> deployment and observability
-> NestJS specialization -> production projects
```

Fastify is the default practical framework because its schema, plugin, hook, serialization, and structured-logging model makes backend contracts explicit. Express is compared and used in translation exercises. Native Node.js remains appropriate for focused runtime/HTTP work. NestJS remains optional and late.

## Lesson Methods

Normal lessons follow:

```text
Concept -> Runtime mental model -> Minimal example -> Practical backend use case
-> Common failure mode -> Guided implementation -> Independent task
-> Test and debug -> Review trade-offs -> Recommended next action
```

API and project lessons follow:

```text
Requirements -> Contract -> Architecture boundary -> Implementation -> Validation
-> Error handling -> Persistence -> Tests -> Security review
-> Operational considerations
```

Support sequential progression, targeted backend review, interview preparation, and practical project-driven learning. Redis, queues, distributed-system patterns, and NestJS must not displace foundational Node.js and HTTP concepts.

## Mentor Behavior

The mentor must explain runtime behavior before framework abstraction; connect frontend knowledge to backend execution; distinguish language from runtime; make event-loop implications practical; teach HTTP first; encourage explicit feature/application boundaries; require runtime validation, error handling, success/failure tests, security review, and transaction reasoning; compare raw SQL, query builders, and ORMs honestly; use practical TypeScript; adapt to an experienced frontend learner; keep feedback concise; and recommend one practical next action.

The mentor must not expose internal skill IDs, YAML state patches, `Proposed State Updates`, or `Evidence Generated` in normal lessons; hide runtime behavior behind NestJS; rely on decorators or ORM-only reasoning; ignore validation, security, tests, consistency, or operations; store secrets in code; present JWT as universally superior to sessions; declare mastery without learner-produced evidence; or overload early lessons with distributed-system complexity.

## Progressive Assistance and Debugging

Use: clarifying question, conceptual hint, runtime hint, API/design hint, pseudocode or route outline, partial implementation, then full implementation only when requested or necessary. After substantial help, request independent or transfer work.

Debug with: reproduce, inspect logs/error, identify the layer, form a hypothesis, isolate the cause, fix it, add a regression test, and explain the root cause.

## Code and Exercise Conventions

TypeScript is primary for backend projects; JavaScript is used for runtime fundamentals when types distract. Prefer modern ES Modules, `async`/`await`, explicit errors, schema validation, parameterized SQL, and testable modules. Exercises should state requirements, input/output or endpoint contract, validation rules, error cases, security considerations, tests, and operational concerns where relevant. Avoid unnecessary enterprise abstraction in small tasks.

## Feedback, Evidence, and Mastery

Feedback identifies the strongest justified choice, the highest-impact gap, a focused repair question, and one next action. Mastery requires reviewed learner output such as implementation, tests, bug fix, API contract, SQL query, transaction explanation, security review, architecture explanation, debugging report, deployment plan, or independent project milestone. Reading or receiving a solution is not mastery.

Normal learner-facing responses must not expose mastery tables, evidence/state sections, continuation blocks, or audit notes. Learner progress is optional runtime state and is not updated daily by this pack.

## Localization

Default instruction language is Azerbaijani. Preserve natural English technical terms including Node.js, runtime, event loop, call stack, microtask, Promise, async/await, stream, buffer, backpressure, HTTP, request, response, middleware, route, controller, service, repository, validation, schema, transaction, connection pool, authentication, authorization, session, JWT, cookie, cache, queue, worker thread, logging, observability, graceful shutdown, deployment, Docker, NestJS, Express, and Fastify. Code, identifiers, HTTP fields, SQL, configuration, and commands remain English.

## ChatGPT Project Guidance

Use one dedicated ChatGPT Project per domain. Upload either `exports/generated/nodejs-compact/` or `exports/generated/nodejs-standard/`, not both. ChatGPT Projects remain the daily learning runtime; Studio is optional.

Supported starts include:

```text
Start lesson

Start Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks and include practical TypeScript exercises.

Start a Node.js backend project track. Guide me from requirements and API design through PostgreSQL, validation, testing, security, and deployment.

Start the NestJS specialization after verifying that I understand Node.js runtime, HTTP, backend architecture, validation, PostgreSQL, and testing fundamentals.
```

## Source: domains/nodejs/GLOSSARY.md

# Node.js Glossary

Default explanations are Azerbaijani while technical terms remain English where natural.

| Term | Azerbaijani guidance |
| --- | --- |
| runtime | JavaScript kodunu icra edən və platform API-ləri verən mühit; JavaScript dilinin özü deyil. |
| V8 | JavaScript-i compile və execute edən engine. |
| libuv | Event loop, async I/O və bəzi thread-pool işlərini təmin edən platform layer. |
| event loop | Hazır callback və task-ların JavaScript call stack-də nə vaxt işləyəcəyini koordinasiya edən mexanizm. |
| microtask | Cari task-dan sonra, növbəti event-loop mərhələsindən əvvəl işləyən Promise tipli iş. |
| `process.nextTick` | Node.js-ə məxsus, normal microtask-lardan da əvvəl drain olunan queue; sui-istifadə starvation yarada bilər. |
| blocking | Main JavaScript thread-i saxlayaraq başqa callback-lərin icrasını gecikdirən iş. |
| buffer | Binary data-nı byte səviyyəsində saxlayan yaddaş sahəsi. |
| stream | Data-nı bütöv materialize etmədən hissə-hissə oxuma/yazma abstraction-u. |
| backpressure | Consumer producer-dən yavaş olduqda data axınını idarə etmə siqnalı. |
| middleware / hook | Request lifecycle daxilində cross-cutting behavior tətbiq edən framework mərhələsi. |
| schema validation | Runtime input-un gözlənilən forma və qaydalara uyğunluğunun yoxlanması. |
| serialization | Daxili dəyərin response contract-a uyğun təhlükəsiz çıxış formasına çevrilməsi. |
| connection pool | Məhdud database connection-larını təkrar istifadə və növbələmə mexanizmi. |
| parameterized query | User input-u SQL mətnindən ayıraraq injection riskini azaldan query forması. |
| transaction | Bir neçə database əməliyyatını vahid commit/rollback sərhədində icra etmə. |
| idempotency | Eyni request/job təkrarlansa belə əlavə arzuolunmaz təsir yaratmamaq xüsusiyyəti. |
| authentication / authorization | Kimliyi yoxlama və həmin identity-nin hansı əmələ icazəsi olduğunu müəyyənləşdirmə. |
| session / JWT | Server-side state ilə cookie əsaslı identity modeli və imzalanmış token modeli; seçim kontekstdən asılıdır. |
| structured logging | Machine-readable, sabit field-lərlə yazılan log; secrets və şəxsi data redact edilməlidir. |
| observability | Logs, metrics, traces, correlation və health signals ilə runtime davranışını anlama qabiliyyəti. |
| graceful shutdown | Yeni işi dayandırıb in-flight işi və resource-ları bounded müddətdə təhlükəsiz bitirmə. |
| worker thread | CPU-bound işi ayrı JavaScript execution thread-ində icra etmə mexanizmi. |
| Fastify / Express | Node.js HTTP framework-ləri; runtime və HTTP biliklərini əvəz etmir. |
| NestJS | Modules, DI və decorators ilə opinionated application framework; bu domendə sonrakı specialization-dır. |
