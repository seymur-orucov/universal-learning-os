# Front-End Testing Manual Acceptance Checklist

## Pack və CLI

- [ ] `list-domains` `frontend-testing` id-ni exactly once göstərir.
- [ ] Standard inspection və dry-run 25 fayl göstərir.
- [ ] Compact inspection və dry-run exactly 5 fayl göstərir.
- [ ] Full validation bütün 10 domain-profile pack üçün PASS verir.

## Teaching Behavior

- [ ] `START_LESSON` title, objective, why, concept, mental model, boundary və realistic code example-i practice-dən əvvəl verir.
- [ ] Guided practice independent practice-dən əvvəldir; hints full solution-u dərhal göstərmir.
- [ ] Azerbaijani izah readable-dir; code/library/API/test terminology English qalır.
- [ ] Normal lesson internal evidence ID, YAML, mastery table və pack/debug detail göstərmir.

## Technical Accuracy

- [ ] Unit, component, integration və E2E scenario ownership dəqiqdir.
- [ ] React tests semantic role/label, accessible name və `userEvent` istifadə edir.
- [ ] MSW HTTP/network boundary-dədir və fetch client implementation-ını əvəz etmir.
- [ ] Playwright locator-ları resilient, assertions web-first/auto-waiting-dir.
- [ ] `waitForTimeout` default synchronization kimi tövsiyə edilmir.
- [ ] Coverage risk signal-dır, universal mastery faizi deyil.
- [ ] Anti-pattern repair və flaky-test diagnosis tələb olunur.

## Mastery

- [ ] Conceptual choice, implementation, broken/flaky diagnosis, code review, strategy və capstone evidence tələb olunur.
- [ ] Lesson completion və test count mastery yaratmır.
