# GoF and React Design Patterns Practice Rules

## Canonical Task Schema

Hər task bu sahələri daşıyır:

| Field | Contract |
| --- | --- |
| `task_id` | Stable domain-local id |
| `target_skills` | `SKILL_GRAPH.md` IDs |
| `mode` | selection, derivation, implementation, testing, refactoring, review, removal, comparison, interview |
| `context` | Real application, users və current design |
| `problem` | Observable pain; pattern adı verilmir |
| `forces` | Change axes, constraints, risks və non-goals |
| `prerequisites` | Established skills only |
| `deliverable` | Learner-produced code/diagram/tests/decision |
| `acceptance` | Correctness, tests və reasoning criteria |
| `alternatives` | Ən azı plain/no-pattern və bir viable candidate |
| `misuse_probe` | Overengineering və wrong-pattern question |
| `transfer_variant` | Nearby unfamiliar scenario |
| `hint_ladder` | Progressive hints; solution deyil |
| `solution_gate` | Attempt və ya explicit request tələb edir |

## Adaptive Selection və Retrieval Review

- Missing foundation → qısa concept repair + guided task.
- Correct code, weak explanation → comparison/decision-record task.
- Correct name, weak implementation → derivation və implementation task.
- Class-heavy default → functional/no-pattern comparison.
- React API misuse → state ownership və rendered behavior task.
- Brittle test → public contract/refactor task.
- Strong familiar performance → delayed retrieval və transfer variant.
- Failed/stale/weak skill review queue candidate-dir; due items interleaving ilə category-lər arasında qarışdırılır.
- Difficulty bir anda yalnız bir dimension üzrə artır: ambiguity, code size, pattern composition, test independence və ya time pressure.

## Progressive Hints

1. Problem: “Hansı dəyişiklik indiki design-i ağrıdır?”
2. Forces: “Nə sabit, nə dəyişkəndir; kimdən kim asılıdır?”
3. Simplest candidate: “Plain function/data/composition kifayətdirmi?”
4. Structure: roles və collaboration, pattern adı olmadan.
5. Type/API: interface, union və ya hook signature istiqaməti.
6. Test: public outcome və failure path.
7. Partial skeleton.
8. Complete solution yalnız learner attempt-dən və ya explicit request-dən sonra; sonra explanation və variant refactor tələb olunur.

## Practice Modes

- **Recognize/reject:** catalog adı seçməkdən əvvəl “no pattern” daxil candidates qur.
- **Derive:** naive design → forces → roles → minimum implementation.
- **Implement:** TypeScript complete primary; məqsədli JavaScript runtime comparison.
- **Test:** Vitest public behavior; render varsa React Testing Library.
- **Compare:** OO vs functional vs data-driven, GoF vs conceptual React connection.
- **Refactor:** characterization test → small step → test → cleanup.
- **Code review:** coupling, hidden state, leaky abstraction, testability və naming üzrə actionable comment.
- **Pattern removal:** abstraction cost-u faydasını keçdikdə simplify et.
- **Architecture selection:** decision matrix və reversal trigger yaz.
- **Interview:** clarification, design, code, tests və defense.

## Twelve Refactoring Laboratories

1. `switch`-heavy notification dispatcher → Strategy və ya lookup table; premature classes-i rədd et.
2. Checkout provider construction → Factory Method; iki provider varsa plain factory-ni müqayisə et.
3. Incompatible API clients → Adapter; domain contract-ı transport types-dan qoru.
4. Logging/retry/cache wrappers → Decorator; wrapper order və errors test et.
5. Nested permission conditionals → Chain of Responsibility və rules pipeline.
6. Undo/redo editor → Command + Memento; memory boundary-ni ölç.
7. Boolean-heavy upload workflow → State və discriminated-union reducer.
8. Global event bus → scoped Observer; unsubscribe/leak behavior test et.
9. Giant React form component → state colocation + custom hooks; abstraction-u yalnız repetition sübut edəndə çıxar.
10. Prop-drilled dialog API → compound/headless composition; accessibility behavior saxla.
11. “God context” dashboard → split providers/external store selectors; unnecessary global state-i sil.
12. Pattern zoo architecture → safety-net tests altında Facade/Manager layers-in bir qismini remove et və direct composition-a qayıt.

Hər lab baseline tests, one-change-at-a-time diff, alternatives, testing implication, misuse və removal checkpoint ehtiva edir.

## Code Review və Pattern Removal

Review task learner-dən severity, evidence, consequence və minimal correction istəyir. “Bu pattern yanlışdır” kifayət deyil. Removal task public API/behavior baseline qurur, unused indirection tapır, abstraction-u silir, tests-i yaşıl saxlayır və future reintroduction trigger-i sənədləşdirir.

## Interview Levels və Modes

| Level | Scope | Expected evidence |
| --- | --- | --- |
| Junior | One problem, candidates və simple TypeScript implementation | Intent, basic test, no-pattern comparison |
| Mid | Pattern + functional alternative + failure path | Trade-offs, test doubles, refactor |
| Senior | Multiple change axes, React/API boundary, ambiguous requirements | Selection defense, misuse, operational/test impact |
| Staff/Lead | Cross-team architecture, migration və reversal | ADR, incremental rollout, governance, removal criteria |

Modes: `coached` (hints allowed), `simulation` (feedback sonda), `rapid-fire` (comparison/rejection), `code-review` (existing design). Heç bir mode attempt-dən əvvəl solution göstərmir.

## Evidence Boundary

Reviewed learner code, tests, diagram explanation, trade-off defense, refactor diff və transfer solution evidence ola bilər. Lesson görmək, pattern adını demək, generated code-u kopyalamaq və test output-u izahsız göstərmək mastery deyil.

