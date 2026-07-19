# TypeScript Domain Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/typescript/DOMAIN.md

# TypeScript Domain

## Domain Identity

- Domain id: `typescript`
- Domain title: `TypeScript Fundamentals to Professional Fluency`
- Domain version: `0.1.0-draft`

## Scope

Teach TypeScript from beginner foundations to advanced/professional engineering practice for frontend, backend, React, API typing, large codebases, and interviews.

## Target Audience

- JavaScript learners moving into TypeScript.
- Frontend engineers using React and typed UI state.
- Backend/full-stack engineers typing APIs, DTOs, and service boundaries.
- Interview candidates who need to explain and repair TypeScript code.

## Learner Outcomes

- Explain TypeScript's static typing mental model and how it differs from JavaScript runtime behavior.
- Use annotations, inference, primitives, objects, arrays, tuples, functions, `unknown`, `never`, `void`, literal types, `type`, and `interface`.
- Model real data using unions, intersections, narrowing, discriminated unions, generics, utility types, mapped types, conditional types, and `infer`.
- Configure practical TypeScript projects with `tsconfig`, `strict`, module resolution, Vite/React/Node, and ESLint basics.
- Type React props, events, forms, refs, hooks, generic components, API data, and state patterns.
- Type backend/API boundaries with DTOs, request/response types, validation boundaries, typed errors/results, and versioning awareness.
- Review bad TypeScript, refactor `any`, design generic helpers, and explain tradeoffs between safety and complexity.

## Localization Policy

- Learner-facing explanations SHOULD be Azerbaijani by default.
- TypeScript terms SHOULD remain in English where natural.
- Code, compiler messages, API names, and config keys SHOULD remain in English.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Prerequisites

- Basic JavaScript knowledge is strongly recommended.
- Learners may begin from TypeScript foundations if JavaScript syntax is familiar enough for simple examples.

## Non-Goals

- This domain is not a complete JavaScript runtime course.
- This domain is not a full React, Node.js, NestJS, or Zod course.
- This domain does not contain learner-specific progress.
- This domain does not certify mastery from lesson exposure or generated examples.

## Source: domains/typescript/README.md

# TypeScript Domain Pack

This domain pack teaches TypeScript from beginner foundations to advanced/professional fluency for frontend/backend engineering, React projects, API typing, large codebases, and interviews.

It is reusable domain content. It MUST NOT contain learner-specific progress or mastery records.

## Localization

Learner-facing explanations SHOULD be Azerbaijani by default. TypeScript technical terms such as `type`, `interface`, `generic`, `union`, `narrowing`, `mapped type`, `conditional type`, `infer`, `utility type`, `tsconfig`, `strict mode`, and `React props` SHOULD remain in English where natural.

## Files

- `DOMAIN.md`: domain identity, scope, audience, outcomes, and boundaries.
- `SYLLABUS.md`: beginner-to-professional TypeScript learning path.
- `SKILL_GRAPH.md`: TypeScript learning skills, dependencies, and review priorities.
- `PRACTICE_RULES.md`: evidence-producing practice rules.
- `ASSESSMENT_RULES.md`: checkpoint and assessment criteria.
- `PROJECTS.md`: project-based learning opportunities.
- `GLOSSARY.md`: terminology guidance.
- `QUALITY_REVIEW.md`: domain quality checks.

## Relationships

- Domain pack rules are defined in `specification/DOMAIN_PACK_SPEC.md`.
- Domain creation process is defined in `docs/domain-pack-factory.md`.
- Project Pack export rules are defined in `exports/project-pack-spec/`.

## Source: domains/typescript/QUALITY_REVIEW.md

# TypeScript Domain Quality Review

## Review Scope

This review checks that the TypeScript domain follows the repository domain pack standard and Stage 12.0 requirements.

## Checklist

- [x] Standard canonical files exist: `DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, `PROJECTS.md`, `GLOSSARY.md`.
- [x] Domain content is reusable and not learner-specific.
- [x] Learner-facing language defaults to Azerbaijani.
- [x] TypeScript technical terms may remain in English where natural.
- [x] Syllabus covers foundations through advanced/professional TypeScript.
- [x] Syllabus includes React, backend/API, tooling, utility types, advanced types, and interview readiness.
- [x] Practice and assessment require learner evidence.
- [x] Lesson exposure and generated examples do not imply mastery.
- [x] Domain boundaries reference canonical framework rules instead of duplicating learner-state contracts.

## Known Limitations

- This domain does not include full lesson bodies or exercise banks.
- This domain does not replace JavaScript runtime fundamentals.
- This domain does not mandate a specific validation library such as Zod.
