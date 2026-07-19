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
