# GoF and React Design Patterns Assessment Rules

## Mastery Contract

Mastery evidence-based-dir və `core/mastery-model/EVIDENCE_REQUIREMENTS.md` contract-ını zəiflətmir. Hər checkpoint beş evidence dimension tələb edir:

1. working implementation;
2. meaningful public-behavior tests;
3. learner explanation;
4. alternatives və trade-off analysis;
5. unfamiliar/nearby transfer.

Pattern adını tanımaq, lesson completion, copied solution və test-in sadəcə pass etməsi kifayət deyil.

## Checkpoints

| Checkpoint | Required evidence |
| --- | --- |
| Foundations | JS runtime və TS type boundary; problem/forces; simplest viable design |
| Creational GoF | Factory Method, Abstract Factory, Builder, Prototype, Singleton arasında selection; lifecycle/global-state risks |
| Structural GoF | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy roles; identity/order/caching implications |
| Behavioral GoF | Eleven patterns üzrə control flow, state transition, subscription, undo və algorithm variation trade-offs |
| TypeScript | Interfaces/generics/unions purposeful; runtime validation-un types tərəfindən verilmədiyini izah edir |
| React | 20 pattern-dən representative composition/state/API solutions və rendered behavior tests |
| Anti-patterns | Pattern mania, god abstraction, speculative generality, singleton/global state, inheritance abuse və false GoF–React mapping-i repair edir |
| Architecture | Change axes, dependency direction, pattern composition və ADR/reversal trigger |
| Testing | Vitest public contracts; React Testing Library yalnız rendered behavior; failure paths və deterministic setup |
| Refactoring | Safety net altında incremental migration; behavior-preserving pattern removal |
| Selection | At least three candidates, no-pattern option, decision matrix və reject reasons |
| Final capstone | Integrated implementation, tests, diagram, migration, trade-offs, transfer defense |

## Category Gates

- Creational: object creation həqiqətən change axis olmalıdır; factory vocabulary-yə görə xal verilmir.
- Structural: wrapper/delegation correctness, error semantics və collaborator identity test edilməlidir.
- Behavioral: event/order/state transitions və failure/cancellation path görünməlidir.
- React: state ownership, accessibility, render behavior və API ergonomics birlikdə qiymətləndirilir.
- Singleton yalnız rare process-wide invariant üçün müdafiə edilə bilər; test isolation və lifecycle cost-u göstərilməlidir.

## Rubric

| Dimension | Insufficient | Sufficient | Strong |
| --- | --- | --- | --- |
| Problem framing | Pattern-first | Problem və forces aydındır | Change forecast və non-goals da var |
| Design | Catalog imitation | Minimum coherent roles | Simpler alternative və removal trigger var |
| Implementation | Incomplete/leaky | Typed, working public contract | Failure paths və migration compatibility var |
| Tests | Implementation details | Behavior + meaningful failure | Contract, interaction və transfer risks balanslıdır |
| Explanation | Name/definition | Mechanism və trade-off | Rejected candidates və context sensitivity |
| Transfer | Same exercise | Nearby unseen context | Different domain və constraints altında adaptation |

## Reassessment

Failure konkret gap və next practice yaradır. Reassessment eyni prompt-un təkrarı deyil; transfer variant istifadə edir. Mentor evidence çatışmırsa bunu dürüst bildirir, learner state-i silently dəyişmir və remediation-dan sonra yeni attempt tələb edir.
