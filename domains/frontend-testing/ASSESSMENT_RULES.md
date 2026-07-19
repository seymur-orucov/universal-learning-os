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
