# Front-End Testing Domain Core

Generated compact domain core for `frontend-testing`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/frontend-testing/DOMAIN.md`.

# Front-End Testing Domain

## Domain Identity

- Domain id: `frontend-testing`
- Domain title: `Production Front-End Testing`
- Domain version: `0.1.0-draft`
- Primary stack: TypeScript, React, Vitest, React Testing Library, `@testing-library/user-event`, MSW, Playwright və lazım olduqda Vite.

## Məqsəd

Learner-i disconnected test snippet-ləri yazmaqdan çıxarıb riskə uyğun test boundary seçən, observable behavior-i yoxlayan, nondeterministic failure-ları diaqnostika edən və production tətbiqi üçün balanslı test strategy quran mühəndis səviyyəsinə çatdırmaq.

## Hədəf auditoriya və prerequisites

- JavaScript/TypeScript və React fundamentals bilən Front-End Engineer-lər.
- Mövcud test suite-i yaxşılaşdıran Senior Engineer və Team Lead-lər.
- `async/await`, HTTP, browser DOM, forms və routing haqqında işlək mental model gözlənilir.
- Zəif prerequisite aşkar ediləndə mentor qısa remediation verir; lesson exposure mastery sayılmır.

## Learner Outcomes

Learner observable evidence ilə:

- risk, feedback speed və boundary-yə görə unit, component, integration və E2E səviyyəsini seçir;
- Vitest ilə deterministic unit test-lər, boundary-value və table-driven test-lər yazır;
- React component və hook behavior-ini semantic query və `userEvent` vasitəsilə test edir;
- network boundary-ni MSW ilə modelləşdirib form, router, state və TanStack Query integration-larını yoxlayır;
- Playwright-da resilient locator, web-first assertion, fixture, storage state və API-assisted setup istifadə edir;
- failed və flaky test-i timing, isolation, data, environment və selector səbəblərinə ayırır;
- testability üçün dependency boundary, pure domain logic və explicit state transition dizayn edir;
- coverage məlumatını risklə birlikdə şərh edir və test suite code review-u aparır;
- production tətbiqi üçün layer ownership, test data, CI, reporting və flaky-test policy daxil olan testing strategy müdafiə edir.

## Canonical Test-Level Model

| Level | Əsas sual | Real boundary | Default doubles |
| --- | --- | --- | --- |
| Unit | Kiçik domain rule verilən input üçün doğru output/state transition verirmi? | Function, reducer, validator, formatter və mənalı isolated hook | Minimum stub/spy; pure dependency injection |
| Component | İstifadəçi bir React component-i ilə düzgün əlaqə qura və nəticəni görə bilirmi? | Render olunmuş component və provider-lər | Network tələb olunmursa real collaborator; DOM behavior |
| Integration | Bir neçə frontend boundary birlikdə işləyirmi? | Component + hook + router/state/query + network boundary | MSW ilə HTTP; lazım olduqda fake clock və dar spy |
| E2E | Kritik journey real browser-də sistemin vacib hissələrindən keçirmi? | Browser + deployed/runnable app + backend contract | Deterministic data setup; yalnız məqsədli interception |

Test level code ölçüsünə görə deyil, riskin yerləşdiyi boundary-yə görə seçilir. Eyni davranışı hər layer-də təkrarlamaq coverage yaratsa da confidence-per-cost nisbətini zəiflədir.

## Localization Policy

- Learner-facing izah, feedback və lesson flow Azerbaijani dilindədir.
- `test`, `assertion`, `fixture`, `mock`, `fake`, `locator`, `role`, `accessible name`, `retry`, `trace`, `coverage` kimi technical terminology English saxlanılır.
- Code, API, library, command, file name, config və test name English qalır.
- Bu qaydalar `specification/LOCALIZATION_SPEC.md` ilə idarə olunur.

## Boundaries və Non-Goals

- Vitest primary runner-dır; Jest yalnız transferable concept müqayisəsi üçün qeyd oluna bilər.
- Cypress curriculum deyil və Playwright hər problem üçün default həll deyil.
- Shallow rendering, internal React state assertion və snapshot-first strategy öyrədilmir.
- Universal coverage faizi quality tərifi sayılmır.
- Domain learner state saxlamır, daily repository state update tələb etmir və lesson göstərməklə mastery yaratmır.
- Framework lifecycle və mastery qaydalarını kopyalamır; canonical specifications-a istinad edir.

## SYLLABUS.md

Canonical source: `domains/frontend-testing/SYLLABUS.md`.

# Front-End Testing Syllabus

`frontend-testing.main` foundations-dan test strategy və Team Lead review səviyyəsinə gedən 12-module path-dır. Hər module əvvəlki boundary mental model üzərində qurulur. Lesson completion mastery deyil; learner code, debugging, review və qərar izahı yoxlanmalıdır.

## START_LESSON Depth Contract

Normal lesson learner-ə dərhal task siyahısı vermir. Mentor bu ardıcıllığı saxlayır:

1. lesson title və clear objective;
2. mövzunun production riskinə görə niyə vacib olduğu;
3. conceptual explanation və mental model;
4. test-level və ya architectural boundary;
5. ən azı bir realistic code example;
6. example-in niyə işlədiyinin izahı;
7. common mistakes və anti-patterns;
8. guided practice;
9. independent practice;
10. concise homework və ya next action.

Beginner və unfamiliar topic full explanation alır. Experienced learner yalnız göstərdiyi evidence əsasında daha sürətli keçə bilər. Progressive hints `boundary → observation → API/locator → partial structure` sırası ilə verilir; complete solution learner istəmədən göstərilmir.

## Module 1 — Testing Economics və Boundary Selection

- Objective: automated testing-in məqsədini, cost-of-delay və confidence-per-cost modelini anlamaq.
- Concepts: testing pyramid, testing trophy, feedback speed, production risk, test boundary, observable behavior vs implementation detail, unit/component/integration/E2E trade-offs.
- Mental model: “Ən aşağı mümkün layer” deyil, “riski ən ucuz etibarlı boundary-də müşahidə et”.
- Case: login form üçün validator unit test, form integration test və critical login E2E arasında scenario ownership.
- Practice: 15 realistic scenario-nu layer-lərə bölmək, təkrarlanan test-ləri çıxarmaq və qərarı müdafiə etmək.
- Checkpoint: learner nəyi hansı layer-də və niyə test etdiyini, nəyi həmin layer-də test etməyəcəyini izah edir.

## Module 2 — Determinism, Isolation və Readable Test Design

- Objective: təkrarlana bilən və failure səbəbini aydın göstərən test qurmaq.
- Concepts: Arrange–Act–Assert, Given–When–Then, test naming, readable failure messages, isolation, shared mutable state, fake clock, random/time/network control, fixture, factory, builder və realistic test data.
- Case: timezone-a görə qırılan order expiry rule və order builder.
- Practice: order-dependent suite-i refactor etmək, boundary values və equivalence partitions çıxarmaq.
- Checkpoint: suite shuffled order və sabit clock ilə eyni nəticəni verir.

## Module 3 — Vitest ilə Domain Logic Unit Testing

- Objective: pure behavior və state transition üçün maintainable unit test yazmaq.
- Concepts: `describe`, `it`, `expect`, `test.each`, parameterized/table-driven tests, boundary values, reducers, validators, formatters, selected hooks, spies/stubs/mocks/fakes və excessive mocking-in zərəri.
- Realistic example:

```ts
type DiscountInput = { subtotal: number; role: "customer" | "partner" };

export function discountRate({ subtotal, role }: DiscountInput) {
  if (subtotal < 0) throw new Error("subtotal must be non-negative");
  if (role === "partner" && subtotal >= 500) return 0.15;
  if (subtotal >= 1000) return 0.1;
  return 0;
}

it.each([
  [{ subtotal: 499.99, role: "partner" }, 0],
  [{ subtotal: 500, role: "partner" }, 0.15],
  [{ subtotal: 1000, role: "customer" }, 0.1],
] as const)("returns the risk-owned rate for %o", (input, expected) => {
  expect(discountRate(input)).toBe(expected);
});
```

Example boundary-də `499.99/500` transition-nı və role partition-nı göstərir; implementation branch sayını və private helper call-larını assert etmir.
- Anti-pattern: hər helper-i mock edib yalnız “mock called” yoxlamaq.
- Practice: cart reducer, permission rule və session-expiry calculation üçün table-driven tests.
- Checkpoint: learner partitions, boundaries və observable assertion seçimini izah edir.

## Module 4 — React Component Testing Fundamentals

- Objective: component-i istifadəçi kimi, accessibility semantics vasitəsilə test etmək.
- Concepts: `render`, `screen`, `getByRole`, accessible name, label, `userEvent.setup()`, conditional rendering, forms, validation, loading/empty/error/success, async UI updates.
- Realistic example:

```tsx
render(<LoginForm onSubmit={submit} />);
const user = userEvent.setup();
await user.type(screen.getByLabelText(/email/i), "dev@example.com");
await user.type(screen.getByLabelText(/password/i), "correct horse battery staple");
await user.click(screen.getByRole("button", { name: /sign in/i }));
expect(await screen.findByText(/welcome/i)).toBeVisible();
```

Semantic queries user interaction və accessibility contract-ını birlikdə yoxlayır. `container.querySelector(".primary")`, internal state assertion, shallow rendering və lazımsız `data-testid` brittle-dir.
- Practice: reusable button, notification və form error states; broken query-ni accessible locator-a çevirmək.
- Checkpoint: learner query priority və async query seçimini izah edir.

## Module 5 — Providers, Hooks və Reusable Render Architecture

- Objective: context, router, state və query provider setup-ını duplicate etmədən, amma gizli global state yaratmadan idarə etmək.
- Concepts: custom `renderWithApp`, wrapper options, per-test QueryClient, hook isolation-in nə vaxt mənalı olması, fake implementation vs dependency mock.
- Case: role-based navigation, feature flag, protected route və reusable component library.
- Practice: over-configured “god render helper”i composable builder-ə refactor etmək.
- Checkpoint: hər test clean provider state alır və implementation detail-ə bağlanmır.

## Module 6 — MSW ilə Network-Bound Integration

- Objective: UI-dan HTTP boundary-yə qədər realistic integration test qurmaq.
- Concepts: MSW handler, request/response contract, success/error/delay, handler override, unhandled request policy, dependency mock vs network mock vs fake vs real service.
- Example:

```ts
server.use(
  http.get("/api/orders", ({ request }) => {
    const page = new URL(request.url).searchParams.get("page");
    return HttpResponse.json({ items: page === "2" ? secondPage : firstPage, total: 24 });
  }),
);

render(<OrdersPage />, { wrapper: createAppWrapper() });
await user.click(await screen.findByRole("button", { name: /next page/i }));
expect(await screen.findByRole("cell", { name: "ORD-024" })).toBeVisible();
```

MSW fetch client-i mock etmir; real request construction, query state və rendered result network boundary-də birlikdə işləyir.
- Case: form submission, API error/recovery, retry və session expiration.
- Checkpoint: learner hansı collaborator-un real qaldığını və niyə izah edir.

## Module 7 — Complex Frontend Integration

- Objective: router, TanStack Query, forms və state management arasında transitions test etmək.
- Concepts: protected routes, authentication/authorization, pagination/filter/sort, debounce with fake timers, optimistic update/rollback, error boundaries, recovery, websocket/real-time UI.
- Cases: paginated data table, search debounce, multi-step checkout, optimistic favorite toggle.
- Practice: partially written test-i tamamla; rollback testində server error ver; state-management spy-sını user-visible result ilə əvəz et.
- Checkpoint: learner loading, empty, error, success və recovery states-in vacib boundary-lərini əhatə edir.

## Module 8 — Playwright Fundamentals və Reliable Locators

- Objective: real browser journey-ni isolation və auto-waiting ilə test etmək.
- Concepts: config, projects, browser context/page isolation, `getByRole`, `getByLabel`, web-first assertions, navigation, file upload/download, tabs/popups, multiple browsers/viewports.
- Example:

```ts
await page.goto("/orders");
await page.getByRole("link", { name: "Create order" }).click();
await page.getByLabel("Customer email").fill("buyer@example.com");
await page.getByRole("button", { name: "Submit order" }).click();
await expect(page.getByRole("status")).toContainText("Order created");
```

Locator retry və assertion auto-wait DOM-un observable hazır vəziyyətini gözləyir. `waitForTimeout(2000)` environment sürətini təxmin edir və default synchronization strategy deyil.
- Practice: CSS selector və fixed sleep ilə yazılmış brittle test-i refactor et.
- Checkpoint: test isolation-da və müxtəlif viewport-larda stabil işləyir.

## Module 9 — E2E Architecture, Auth və Test Data

- Objective: maintainable Playwright fixture və deterministic data strategy qurmaq.
- Concepts: authentication setup, `storageState`, fixtures, worker/test scope, API-assisted setup, unique data, cleanup, targeted route interception, page objects only where useful.
- Cases: login, role-based navigation, protected route, session expiration, shopping cart/order journey, file upload və download.
- Practice: shared account səbəbli parallel failure-i isolated accounts/API setup ilə düzəltmək.
- Checkpoint: learner UI-dan nəyi setup etməməli olduğunu və auth state freshness riskini izah edir.

## Module 10 — Debugging, Flakiness və CI Execution

- Objective: failed test-i simptomla gizlətmədən root cause tapmaq.
- Concepts: trace viewer, screenshot/video, headed/debug mode, CI report, retry semantics, worker, parallelism, sharding, timeout ownership, resource contention.
- Flake taxonomy: race/synchronization, shared state, unstable selector, nondeterministic data/time, environment/resource, real service.
- Practice: flaky Playwright test diagnosis; excessive retry-ni silib observable readiness və isolated data əlavə etmək.
- Checkpoint: learner trace evidence ilə hypothesis yaradır, reproduction edir və fix-in failure mode-u aradan qaldırdığını göstərir.

## Module 11 — Accessibility, Visual Regression və Coverage

- Objective: functional tests-in görmədiyi riskləri əlavə siqnallarla idarə etmək.
- Concepts: accessibility smoke checks, keyboard/focus, automated axe awareness, screenshot baseline fundamentals, deterministic visual environment, statement/branch/function/line coverage, risk-based və critical-path coverage, mutation-testing awareness.
- Boundary: accessibility automation manual audit-i, visual diff functional assertion-u əvəz etmir; 100% coverage quality zəmanəti deyil.
- Practice: high coverage amma missing branch olan validator suite-i review etmək; visual noise risklərini tapmaq.
- Checkpoint: learner metric-i target yox, risk signal kimi istifadə edir.

## Module 12 — Legacy Safety Nets, Suite Review və Strategy

- Objective: mövcud codebase-i characterization tests ilə təhlükəsiz dəyişmək və production test strategy yazmaq.
- Concepts: characterization test, seam creation, refactoring with safety nets, testability design, suite performance, duplicate-layer detection, flaky-test policy, merge request review, strategy ownership.
- Case: legacy checkout refactor, poor-test MR review və production portfolio assessment.
- Practice: test inventory çıxar, missing boundaries müəyyən et, slow/brittle tests üçün migration plan qur, trade-offs müdafiə et.
- Integrated checkpoint: `PROJECTS.md` capstone və `ASSESSMENT_RULES.md` rubric üzrə code + written strategy + flaky-risk analysis.

## SKILL_GRAPH.md

Canonical source: `domains/frontend-testing/SKILL_GRAPH.md`.

# Front-End Testing Skill Graph

Bu ID-lər learner competencies-dir, agent skills deyil.

## Foundation

- `frontend-testing.economics-risk`: automation cost, feedback və risk trade-off-u izah edir.
- `frontend-testing.level-selection`: unit, component, integration və E2E boundary seçir.
- `frontend-testing.observable-behavior`: public/user-observable result-i implementation detail-dən ayırır.
- `frontend-testing.determinism-isolation`: time, data, network və shared state-i idarə edir.
- `frontend-testing.aaa-naming`: Arrange–Act–Assert/Given–When–Then və diagnostic test names istifadə edir.
- `frontend-testing.test-data`: fixture, factory və builder ilə realistic isolated data yaradır.
- `frontend-testing.test-doubles`: dummy, stub, spy, mock və fake arasında doğru seçim edir.

## Unit və Component

- `frontend-testing.vitest-unit`: Vitest ilə maintainable unit tests yazır.
- `frontend-testing.partitions-boundaries`: equivalence partitions, boundary values və `test.each` istifadə edir.
- `frontend-testing.react-semantics`: React Testing Library semantic queries və accessible names istifadə edir.
- `frontend-testing.user-event-async`: `userEvent`, async transitions və web-observable states-i yoxlayır.
- `frontend-testing.forms-components`: form validation/submission və loading/empty/error/success states-i test edir.
- `frontend-testing.providers-hooks`: context/router/state/query provider və selected hook testing boundary qurur.

## Integration

- `frontend-testing.msw-network`: MSW ilə HTTP boundary-ni success/error/recovery scenario-larında modelləşdirir.
- `frontend-testing.router-auth`: protected route, authentication və authorization flow-larını test edir.
- `frontend-testing.query-state`: TanStack Query + UI + API integration test edir.
- `frontend-testing.complex-transitions`: pagination, filter, sort, debounce və error boundary transition-larını test edir.
- `frontend-testing.optimistic-rollback`: optimistic mutation və rollback nəticəsini observable olaraq yoxlayır.
- `frontend-testing.realtime-feature-flags`: realtime update və feature flag boundary-lərini məqsədli test edir.

## Browser və Reliability

- `frontend-testing.playwright-basics`: config, context, page, resilient locator və web-first assertion istifadə edir.
- `frontend-testing.playwright-workflows`: upload/download, popup, multiple browser/viewport və critical journey qurur.
- `frontend-testing.e2e-auth-fixtures`: storage state, fixture və API-assisted setup dizayn edir.
- `frontend-testing.e2e-test-data`: deterministic parallel-safe test data lifecycle qurur.
- `frontend-testing.flake-diagnosis`: trace və reproduction evidence ilə flaky failure root cause tapır.
- `frontend-testing.ci-performance`: reporter, retry, timeout, workers, parallelism və sharding trade-off-larını idarə edir.

## Quality və Leadership

- `frontend-testing.accessibility-visual`: accessibility smoke və visual-regression fundamentals tətbiq edir.
- `frontend-testing.coverage-risk`: coverage dimensions və mutation awareness-i risk əsasında şərh edir.
- `frontend-testing.legacy-characterization`: legacy behavior üçün safety net qurur.
- `frontend-testing.testability-refactor`: pure logic, explicit dependency və seam ilə code-u testable edir.
- `frontend-testing.suite-review`: anti-pattern, duplication, missing boundary və slow/flaky risk review edir.
- `frontend-testing.strategy-design`: balanced production testing strategy yazır və müdafiə edir.

## Dependency Order

1. Economics, level selection və observable behavior bütün implementation practice-dən əvvəl gəlir.
2. Determinism, data və test doubles unit/component practice üçün prerequisite-dir.
3. Vitest və React semantics MSW integration-dan əvvəl gəlir.
4. Integration state transitions Playwright critical journey selection-ını məlumatlandırır.
5. Playwright basics auth fixture, CI və flake diagnosis-dan əvvəl gəlir.
6. Strategy design unit, integration, E2E, reliability və review evidence-i birləşdirir.

## Review Triggers

Internal React state assertion, every-dependency mocking, snapshot overuse, brittle CSS selector, excessive `data-testid`, fixed sleep, shared mutable state, order dependence, unrealistic data, mock-call-only assertion, E2E overuse, cross-layer duplication, ignored flakes və excessive retries həmin dependency node-larına targeted review yaradır.

## PRACTICE_RULES.md

Canonical source: `domains/frontend-testing/PRACTICE_RULES.md`.

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

## ASSESSMENT_RULES.md

Canonical source: `domains/frontend-testing/ASSESSMENT_RULES.md`.

# Front-End Testing Assessment Rules

## Mastery Principle

Mastery yalnız observable learner evidence ilə qiymətləndirilir və `core/mastery-model/EVIDENCE_REQUIREMENTS.md` contract-ını zəiflətmir. Lesson completion və test count mastery deyil.

## Evidence Portfolio

Assessment birlikdə bunları yoxlayır:

- conceptual questions: boundary, trade-off, determinism, doubles və coverage interpretation;
- implementation: Vitest unit, React Testing Library component və MSW integration tests;
- broken-test debugging və false-positive repair;
- flaky Playwright diagnosis;
- code review: brittle selectors, mock overuse, missing observable assertions və duplicated layers;
- written production testing strategy;
- integrated capstone.

## Checkpoints

### Boundary Checkpoint

Learner realistic scenarios üçün level seçir, alternative-in cost/risk-ni və hansı detail-lərin həmin layer-də yoxlanmamalı olduğunu izah edir.

### Unit/Component Checkpoint

Learner boundary values və parameterized Vitest tests yazır; React behavior-i role/label və `userEvent` ilə yoxlayır; async transition-ları deterministic gözləyir; internal state və shallow rendering istifadə etmir.

### Integration Checkpoint

Learner MSW handler-ləri ilə success, validation, API error, retry/recovery və optimistic rollback scenario-ları qurur. Request construction, query state və UI result real frontend integration olaraq işləyir.

### Browser Reliability Checkpoint

Learner Playwright-da isolated context, resilient locator, web-first assertion, auth fixture/storage state və deterministic data istifadə edir. Trace evidence ilə flake root cause-u tapır; fixed sleep və excessive retry istifadə etmir.

### Leadership Checkpoint

Learner test suite inventory/review edir, missing risk və duplicate coverage tapır, performance/CI planı qurur, accessibility/visual/coverage siqnallarını düzgün çərçivələyir və trade-off-ları müdafiə edir.

## Capstone Rubric

| Dimension | Yetərli evidence |
| --- | --- |
| Layer decisions | Scenario ownership unit/component/integration/E2E üzrə əsaslandırılıb, duplication məqsədlidir və azdır |
| Unit quality | Domain rules üçün partitions, boundary values, deterministic assertions və readable names var |
| Component behavior | Semantic queries, `userEvent`, async states və accessibility contract görünür |
| Integration | MSW network boundary-dədir; forms, router və data fetching realistic success/failure/recovery ilə yoxlanır |
| E2E | Yalnız critical journeys; auth/data fixtures, resilient locators və auto-waiting var |
| Reliability | Isolation, clock/data policy, flaky-risk analysis və trace/debug workflow var |
| CI | Ayrı commands/reporting, worker/retry/parallelism qərarları və failure artifacts var |
| Strategy | Risk, ownership, non-goals və maintenance policy test count/coverage faizindən daha əsaslıdır |

## Coverage Guidance

Learner statement, branch, function və line coverage fərqini izah etməlidir. 100% coverage quality zəmanəti deyil; aşağı coverage isə unexamined risk göstərə bilər. Assessment risk-based və critical-path coverage, assertion quality və mutation-testing awareness-i nəzərə alır. Universal percentage tələb edilmir və meaningless assertion-larla target doldurmaq mənfi evidence-dir.

## Failure və Reassessment

Failed assessment konkret gap-ləri, reproduction-u və next practice-i göstərir. Retry eyni sualı sadəcə təkrarlamır; nearby transfer scenario istifadə edir. Mentor learner düzəltmə və izah evidence-i vermədən mastery təklif etmir.

## PROJECTS.md

Canonical source: `domains/frontend-testing/PROJECTS.md`.

# Front-End Testing Case Studies və Capstone

Case studies eyni production-oriented tətbiq ekosistemində isolated logic-dən integrated browser workflow-a doğru inkişaf edir.

## Case Study Sequence

1. **Order domain logic:** discount, inventory reservation, total və session expiry üçün table-driven unit tests; invalid və boundary inputs.
2. **Form validation:** login və checkout validation; field-level və submit-level behavior; over-mocked validator anti-pattern.
3. **React component behavior:** notification, reusable dialog və role-based navigation; semantic queries, focus və async dismissal.
4. **Data fetching with MSW:** loading/empty/error/success/recovery; request params və unhandled-request discipline.
5. **TanStack Query integration:** cache isolation, retry control, stale data və invalidation.
6. **Router/protected routes:** anonymous redirect, authenticated access, forbidden role və return URL.
7. **Authentication workflow:** login, storage state, session expiration və refresh/re-auth choice.
8. **Paginated/filterable table:** server pagination, sorting, debounce search, empty page və failed request.
9. **Optimistic update/rollback:** optimistic cart/favorite update, server rejection, rollback və notification.
10. **Playwright critical journey:** user login → order create → upload attachment → confirmation/download.
11. **Flaky E2E diagnosis:** fixed sleep, shared account, CSS selector və background request race olan intentionally poor test-in trace-led repair-i.
12. **Production strategy review:** test inventory, risk map, MR review, CI lane və ownership proposal.

Hər case study correct test və ən azı bir anti-pattern comparison ehtiva edir. Learner sadəcə final code deyil, boundary və doubles qərarlarını da izah edir.

## Integrated Capstone — Operations Portal

TypeScript + React + Vite əsaslı operations portal-da authentication, protected routes, role-based navigation, paginated orders table, debounced search, multi-step order form, TanStack Query data flow, optimistic status update, file upload, notification və error recovery mövcuddur.

### Learner Deliverables

- order/permission/session domain logic üçün Vitest unit tests;
- login, form, table və notification-un important UI states-i üçün React Testing Library component tests;
- MSW ilə success, validation error, server error, retry/recovery və optimistic rollback integration tests;
- forms, router və TanStack Query provider setup;
- Playwright ilə yalnız kritik user journeys;
- auth setup/storage state və fixture strategy;
- API-assisted, unique və deterministic test-data handling;
- `test:unit`, `test:integration`, `test:e2e` və CI-oriented commands;
- layer ownership, mocks/fakes/network policy, coverage use və non-goals izah edən written test strategy;
- possible flaky-test risks, detection signal, artifacts və mitigation analysis;
- poor-test merge request üçün Senior/Lead review.

### Constraints

- `waitForTimeout` default synchronization deyil.
- CSS selector yalnız user-facing semantic locator mümkün olmadıqda və səbəbi sənədləşdikdə istifadə olunur.
- MSW network boundary-də işləyir; `fetch` client-i bütövlükdə mock etmək capstone default-u deyil.
- Eyni scenario bütün layer-lərdə təkrarlanmır.
- Capstone test count və coverage percentage ilə qiymətləndirilmir.

### Review Questions

- Bu test hansı production risk-i sahiblik edir?
- Daha aşağı və ya daha yüksək layer nəyi itirər və ya bahalaşdırar?
- Test real behavior-i yoxsa implementation detail-i assert edir?
- Parallel CI və retry zamanı data isolation necə qorunur?
- Failure gələndə hansı artifact root cause-a aparacaq?

## GLOSSARY.md

Canonical source: `domains/frontend-testing/GLOSSARY.md`.

# Front-End Testing Glossary

| English term | Azerbaijani guidance |
| --- | --- |
| observable behavior | Caller və ya user-in görə bildiyi output, DOM state, navigation və side effect; internal implementation deyil. |
| test boundary | Test-in daxilində real işləyən hissələrlə nəzarət edilən xarici hissələr arasındakı sərhəd. |
| unit test | Kiçik logic və state transition-u sürətli, isolated şəkildə yoxlayan test. |
| component test | Render olunmuş React component-in user-observable behavior-ini yoxlayan test. |
| integration test | Bir neçə frontend boundary-nin birlikdə işləməsini yoxlayan test; HTTP üçün adətən MSW. |
| E2E test | Real browser journey-ni application/system boundary-ləri boyunca yoxlayan test. |
| fixture | Test setup və dependency/data təqdim edən reusable quruluş. |
| factory | Parametrlərlə test data object-i yaradan helper. |
| builder | Oxunaqlı addımlarla scenario-specific test data quran object/API. |
| dummy | İstifadə olunmayan, yalnız signature dolduran test value. |
| stub | Sorğuya əvvəlcədən müəyyən cavab verən test double. |
| spy | Real və ya controlled call haqqında müşahidə toplayan double; observable result-i əvəz etmir. |
| mock | Gözlənilən interaction-u verification hissəsi edən double; overuse coupling yaradır. |
| fake | Sadələşdirilmiş, amma işlək implementation, məsələn in-memory repository. |
| semantic query | Role, label və accessible name kimi user/accessibility semantics-a əsaslanan query. |
| resilient locator | UI implementation detail-indən az asılı, role/label/text contract-ına söykənən locator. |
| auto-waiting | Playwright action/assertion-un actionable və gözlənilən state üçün avtomatik retry etməsi. |
| flaky test | Eyni relevant input və code ilə nondeterministic pass/fail edən test. |
| characterization test | Legacy behavior-i refactor-dan əvvəl safety net kimi qeyd edən test. |
| coverage | Executed statement, branch, function və line siqnalı; assertion quality və correctness zəmanəti deyil. |
| mutation testing | Code-da kiçik dəyişikliklər edib test suite-in onları tutub-tutmadığını ölçən quality signal. |
| storage state | Playwright browser context üçün serialized cookies/local storage auth state-i. |
| trace | Playwright action, DOM/network snapshot və timing evidence-i olan debugging artifact. |
| visual regression | Controlled screenshot baseline ilə gözlənilməz vizual fərqi aşkarlamaq. |
| accessibility smoke check | Əsas automated accessibility risklərini tez aşkarlayan, manual audit-i əvəz etməyən check. |

## QUALITY_REVIEW.md

Canonical source: `domains/frontend-testing/QUALITY_REVIEW.md`.

# Front-End Testing Domain Quality Review

## Stage 32.0 Checklist

- [x] Canonical id `frontend-testing` və nine-file domain convention qorunur.
- [x] Azerbaijani instruction və English technical terminology qaydası açıqdır.
- [x] TypeScript, React, Vitest, React Testing Library, `user-event`, MSW, Playwright və Vite primary stack-dır.
- [x] Unit, component, integration və E2E boundaries dəqiq ayrılır.
- [x] Lesson explanation exercises-dən əvvəl gəlir və realistic code examples mövcuddur.
- [x] MSW dependency internals deyil, network boundary üçün istifadə olunur.
- [x] Playwright resilient locators, auto-waiting və `waitForTimeout` anti-pattern-i əhatə edir.
- [x] Required conceptual foundations, coverage guidance, CI, performance, legacy tests və strategy design var.
- [x] Practice writing-from-scratch, completion, debugging, refactor, flake diagnosis, MR review və trade-off defense formalarını əhatə edir.
- [x] 12 coherent case study və integrated capstone learner decisions-i qiymətləndirir.
- [x] Mastery observable evidence tələb edir; lesson completion və coverage percentage kifayət deyil.
- [x] Learner-Facing Mentor Mode və learner-state boundary qorunur.

## Anti-Pattern Gate

Internal state assertions, excessive mocks/snapshots/`data-testid`, brittle CSS selectors, fixed sleeps, shared mutable state, order dependence, library-internal tests, unrealistic data, mock-call-only assertions, E2E overuse, cross-layer duplication, ignored flakes və excessive retries həm teaching, həm practice materialında repair targets kimi mövcuddur.

## Manual Review Notes

Compact generation canonical files-i tam birləşdirdiyi üçün depth saxlanılır, lakin navigate etmək standard profile-dan çətindir. Bu file-budget trade-off-dur; semantic content zəiflədilməyib.
