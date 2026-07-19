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
