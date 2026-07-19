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

Canonical source: `domains/frontend-testing/QUALITY_REVIEW.md`.

# Front-End Testing Domain Quality Review

## Stage 16.0 Checklist

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
