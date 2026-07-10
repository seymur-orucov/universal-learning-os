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
