# Node.js Glossary and Projects

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

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

## Source: domains/nodejs/PROJECTS.md

# Node.js Projects

## Shared Project Contract

Every project uses:

```text
Requirements -> Contract -> Architecture boundary -> Implementation -> Validation
-> Error handling -> Persistence -> Tests -> Security review
-> Operational considerations
```

The learner makes and defends decisions before full solutions are shown.

## Project 1 — Native HTTP Service

Build a native Node.js HTTP server with simple routes, JSON responses, structured error responses, request timeout awareness, signals, and graceful shutdown. Explain the request lifecycle and why no framework is required yet.

## Project 2 — Task API

Build a TypeScript Fastify CRUD API with schema validation, response serialization, structured errors, unit/API tests, and in-memory persistence. Compare how the routing/error/middleware model would differ in Express.

## Project 3 — PostgreSQL API

Replace in-memory state with PostgreSQL. Own migrations, use a bounded connection pool and parameterized queries, define a repository boundary, implement at least one transaction, diagnose an N+1 or query concern, and add isolated integration tests.

## Project 4 — Authenticated Service

Implement registration, login, secure password hashing, a justified session or token model, logout/revocation behavior, backend authorization and resource ownership, validation, error paths, abuse protection, security review, and tests.

## Project 5 — Production-Style Backend

Design and build a modular service with PostgreSQL, an appropriately justified cache, one idempotent background job, structured/redacted logging, correlation, tests, health/readiness behavior, timeouts, graceful shutdown, validated configuration, Docker, migration/rollback plan, deployment plan, and operational runbook. Exercise dependency outage and recovery scenarios.

## Optional NestJS Specialization

After prerequisite evidence, rebuild or migrate one existing service using NestJS. Use modules, controllers, providers, pipes, guards, interceptors, filters, validation, and testing where justified. Compare complexity, testability, dependency direction, framework coupling, and operational behavior with the earlier implementation. Document when NestJS helps and when it is excessive.

## Review and Interview Variants

For any project, inject invalid input, unhandled rejection, blocked event loop, pool exhaustion, race condition, expired identity, permission bypass, stale cache, duplicate job, broken stream, dependency outage, or termination signal. Require diagnosis, containment, user/API behavior, regression testing, observability, and a defended repair.
