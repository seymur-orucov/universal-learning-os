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
