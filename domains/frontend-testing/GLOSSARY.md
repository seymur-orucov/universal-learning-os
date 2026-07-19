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
