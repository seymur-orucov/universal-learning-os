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
