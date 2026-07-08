# ADR-0033: TypeScript Domain Pack

## Status

Accepted for Stage 12.0.

## Context

JavaScript established the programming-language pilot for the domain factory. TypeScript is the next advanced programming domain because many frontend, backend, and full-stack teams depend on TypeScript for safer large-codebase engineering, React projects, API contracts, and interview expectations.

TypeScript depends conceptually on JavaScript runtime behavior, but it deserves a separate domain because its core learning problem is different: static typing, type modeling, compiler feedback, configuration, type-level transformations, API boundaries, and maintainable type design.

## Decision

Add TypeScript as a first-class domain under `domains/typescript/` using the standard canonical domain pack format.

Generate both export profiles:

- `exports/generated/typescript-standard/`: standard Project Pack with exactly 25 files.
- `exports/generated/typescript-compact/`: compact/free Project Pack with no more than 5 files.

The TypeScript domain follows the domain pack factory and preserves learner-facing Azerbaijani mentoring with English TypeScript technical terms where natural. It teaches from foundations through advanced/professional TypeScript, including React, API typing, tooling, large-codebase strategy, and interviews.

## Consequences

- TypeScript becomes a supported generated domain alongside SQL/PostgreSQL, English, and JavaScript.
- The domain factory is validated against an advanced programming domain with both standard and compact exports.
- JavaScript remains conceptually foundational, but TypeScript is independently teachable for learners who already know enough JavaScript or need typed engineering practice.
- Existing generated packs remain unchanged and must keep their existing file budgets.

## Boundaries

- TypeScript canonical content belongs in `domains/typescript/`.
- Generated TypeScript Project Packs are derived artifacts under `exports/generated/`.
- Learner state remains outside canonical and generated packs.
- This ADR does not introduce executable generation tooling.
