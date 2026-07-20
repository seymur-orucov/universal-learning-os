# ADR-0060: GoF and React Design Patterns Canonical Domain

## Status

Accepted for Stage 33.0.

## Context

Stage 32.0 completed the tenth canonical domain and twentieth generated pack. The next domain should teach design vocabulary without encouraging catalog-driven architecture. GoF patterns remain useful for object collaboration and change-axis reasoning, while React engineers also need component API, state ownership and behavior-reuse patterns. Treating either catalog as recipes—or claiming React patterns are one-to-one GoF translations—would create false mental models and overengineering.

The existing repository contract requires reusable learner-neutral content, Azerbaijani instruction with preserved English terminology, evidence-based mastery, exactly nine canonical domain files, 25-file standard packs, five-file compact packs, registry-driven CLI discovery and generic Studio behavior.

## Decision

Add canonical domain id `gof-react-patterns` with combined GoF and React scope:

- cover all 23 GoF patterns and 20 explicitly named React patterns in a 15-module curriculum;
- teach problem, naive design and forces before pattern name and implementation;
- use TypeScript as the complete primary implementation language;
- use JavaScript only for purposeful runtime comparisons;
- compare object-oriented designs with closure, function, discriminated-union, pipeline, lookup-table and no-pattern alternatives;
- describe GoF–React relationships only as conceptual comparisons, including decisive differences;
- pair major implementations with Vitest tests and use React Testing Library only for rendered behavior;
- require alternatives, testing implications, misuse, overengineering, removal triggers and transfer practice;
- define 12 case studies, three capstones, 12 refactoring laboratories and four interview levels.

Register the domain once in the shared CLI registry. Generate `gof-react-patterns-standard` with exactly 25 files and `gof-react-patterns-compact` with exactly five contract files. Add standard/compact launch kits. Studio continues to consume the CLI registry; no domain-specific screen or bridge action is added.

## Anti-Overengineering Controls

- “No pattern”, plain function, local state and direct composition are mandatory candidates.
- Pattern count is never an assessment metric.
- A pattern requires a demonstrated change axis or collaboration problem.
- Pattern removal is taught and assessed under behavior safety-net tests.
- Singleton/global state, god abstractions, speculative factories and false React mappings receive explicit misuse coverage.
- Diagrams labeled as educational simplifications do not claim exact runtime architecture.

## Mastery and Evidence

Mastery requires learner-produced implementation, meaningful tests, mechanism explanation, trade-off analysis and transfer to an unfamiliar scenario. Lesson exposure, pattern-name recall, copied code and generated tests do not establish mastery. Learner progress remains outside canonical and generated domain content.

## Consequences

- Supported canonical domains increase from ten to eleven.
- Generated domain-profile packs increase from twenty to twenty-two.
- Existing domain content and exact 25/5 profile contracts remain unchanged.
- The domain adds educational Markdown examples only; no React/Vitest dependency or runnable application infrastructure is introduced.
- CLI tests cover registry metadata, canonical content, catalog counts, generated contracts, launch kits, runtime compatibility and cleanup.
- No Studio source change, learner-state mutation, release tag or hosted runtime is introduced.

