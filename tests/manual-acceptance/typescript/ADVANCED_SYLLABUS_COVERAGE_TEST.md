# TypeScript Advanced Syllabus Coverage Test

## Purpose

Verify the canonical and generated TypeScript syllabus covers beginner to advanced/professional TypeScript.

## Files to Inspect

- `domains/typescript/SYLLABUS.md`
- `exports/generated/typescript-standard/TYPESCRIPT_SYLLABUS.md`
- `exports/generated/typescript-compact/DOMAIN_CORE.md`

## Required Coverage

- Foundations: annotations, primitives, arrays, tuples, objects, functions, `void`, `never`, `unknown`, `any`, literal types, inference.
- Core type system: `type`, `interface`, unions, intersections, narrowing, custom guards, discriminated unions, exhaustiveness.
- Generics: functions, interfaces, aliases, constraints, defaults, `keyof`, indexed access.
- Modern/practical TypeScript: `as const`, `satisfies`, template literal types, modules, declaration files.
- Utility types: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, `Awaited`.
- Advanced TypeScript: mapped types, conditional types, distributive conditional types, `infer`, recursive types, branded/opaque types.
- Tooling: `tsconfig`, `strict`, strictness flags, Vite/React/Node, ESLint basics.
- React and API TypeScript: props, events, forms, refs, hooks, DTOs, request/response typing, validation boundary.
- Engineering and interview readiness: `any` refactors, bad TypeScript review, architecture scenarios, large-codebase strategy.

## Pass/Fail Checklist

- [ ] Canonical syllabus includes all required coverage.
- [ ] Standard generated syllabus summarizes all required coverage.
- [ ] Compact domain core summarizes all required coverage.
