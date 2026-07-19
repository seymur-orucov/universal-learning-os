# Front-End Testing Practice Rules

## Practice Model

Practice test yazmaqla məhdudlaşmır. Hər activity bir qərarı, implementation-u və ya diagnosis-u learner-dən tələb edir:

- test level seç və trade-off-u müdafiə et;
- nəyi mock edib-etməyəcəyini və boundary-ni izah et;
- partially written test-i tamamla;
- broken test-i root cause-a görə düzəlt;
- brittle test-i observable assertion və resilient locator-a refactor et;
- flaky Playwright test-i trace/timing/data evidence ilə diaqnostika et;
- missing equivalence partition və boundary case-ləri tap;
- weak test name və failure message-i yaxşılaşdır;
- factory/builder və parallel-safe data strategy dizayn et;
- scenario-ları unit, component, integration və E2E layer-lərinə böl;
- poor-test merge request-ə Senior Engineer səviyyəsində review comment yaz;
- coverage və suite runtime məlumatından risk-oriented action çıxar.

## Scenario Quality

Calculator və toy counter default example deyil. Login, protected route, role navigation, paginated table, debounced search, form submit, TanStack Query, optimistic rollback, cart/order, multi-step form, upload, notification, error recovery, session expiration, feature flag, component library və realtime UI istifadə olunur.

Hər scenario bu konteksti açıqlayır:

1. business/user risk;
2. owned boundary;
3. observable result;
4. controlled dependency və səbəbi;
5. intentionally untested details;
6. determinism və cleanup ehtiyacı.

## Progressive Hints

Mentor complete solution-u learner istəmədən vermir:

1. Risk hint: “Failure user üçün nəyi pozur?”
2. Boundary hint: “Bu risk hansı ən dar real boundary-də görünür?”
3. Observation hint: “User və ya caller hansı nəticəni müşahidə edir?”
4. Tool hint: uyğun query, MSW handler, fake clock və ya Playwright assertion istiqaməti.
5. Structure hint: arrange skeleton və ya bir incomplete assertion.
6. Full solution: yalnız explicit request-dən sonra, sonra learner-dən variantı izah/refactor etmək tələb olunur.

## Anti-Pattern Repair Set

Learner bunları tanıyıb düzəltməlidir:

- implementation detail və internal React state test etmək;
- every dependency-ni mock etmək və library internals yoxlamaq;
- snapshot-test overuse;
- duplicated setup və global mutable fixture;
- CSS selector və excessive `data-testid`;
- `waitForTimeout` və başqa fixed sleep-lər;
- order-dependent suite və testlərarası data leakage;
- unrealistic data;
- yalnız “mock was called” assert edib user-visible result-i yoxlamamaq;
- unit/integration-a aid behavior üçün E2E yazmaq;
- hər detail-i hər layer-də təkrar test etmək;
- flaky test-i ignore/quarantine edib owner və səbəb qoymamaq;
- root cause əvəzinə retry sayını artırmaq.

## Feedback

- Əvvəl correctness və risk coverage, sonra readability və performance.
- “Pass edir” kifayət deyil: false-positive/false-negative ehtimalı araşdırılır.
- Mock review boundary dilində aparılır: collaborator nə üçün real, fake və ya intercepted-dir?
- Failure diagnosis symptom, evidence, hypothesis, experiment və fix şəklində verilir.
- Normal learner-facing cavab internal evidence ID, YAML, skill ID və pack detail göstərmir.

## Evidence-Producing Output

Reviewed test code, test-level decision, boundary explanation, broken/flaky diagnosis, refactor diff, MR review və written strategy evidence ola bilər. Lesson görmək, example kopyalamaq, coverage faizini artırmaq və ya setup command işlətmək təkbaşına mastery evidence deyil.
