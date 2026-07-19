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
