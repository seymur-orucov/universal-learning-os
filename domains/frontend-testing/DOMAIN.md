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
