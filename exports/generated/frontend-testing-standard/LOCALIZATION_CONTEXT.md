# Localization Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/LOCALIZATION_SPEC.md

# Localization Specification

## Purpose

Define framework-level policy for instructional language and terminology language.

## Scope

This specification governs user-facing teaching text, domain terminology preservation, learner language preferences, and domain-pack terminology guidance.

## Non-Goals

- It does not hardcode one global framework language.
- It does not define concrete YAML fields or schemas.
- It does not translate domain content.
- It does not define locale-specific UI behavior.

## Core Concepts

- Instruction Language: the language used for explanations, feedback, lesson flow, and user-facing teaching text.
- Terminology Language: the preferred language for domain-specific technical terms.
- Term Preservation: the rule that important domain terms may remain untranslated when terminology language differs from instruction language.
- Glossary Mapping: optional domain-pack mapping between original terms, translated explanations, examples, and usage notes.
- Learner Language Preference: learner-specific language configuration, later stored in learner profile or learner state.
- Domain Language Policy: domain-pack-specific guidance for how terminology should be presented.

## Normative Requirements

- The framework MUST support separate instruction language and terminology language preferences.
- User-facing teaching output SHOULD follow the learner's instruction language when available.
- Domain-specific technical terms SHOULD remain in the terminology language when the learner preference requires it.
- When instruction language and terminology language differ, explanations MAY include a short clarification in the instruction language, but MUST NOT replace important technical terms with unnatural translations.
- Domain packs SHOULD provide glossary guidance for important terms when terminology preservation matters.
- Commands that produce lessons, practice, reviews, assessments, interviews, or progress reports SHOULD respect localization preferences.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.
- If language preferences are missing, commands SHOULD use the project or user-provided language context.

## Example Preference

A learner or project MAY request Azerbaijani as the instruction language and English as the terminology language. In that case, explanations and feedback should be in Azerbaijani while important technical terms remain in English when natural and domain-appropriate.

## Relationships

- Learner preference storage is described conceptually in `specification/STATE_SPEC.md`.
- Domain glossary guidance belongs to domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- User-facing command behavior is governed by `specification/COMMAND_SPEC.md`.
- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.

## OPEN QUESTION

- Should language preferences use BCP 47 language tags once schemas exist?
- Should terminology language support multiple preferred languages ordered by priority?
- Where should project-level language defaults be stored before application configuration exists?

## Source: domains/frontend-testing/DOMAIN.md

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

## Source: domains/frontend-testing/GLOSSARY.md

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
