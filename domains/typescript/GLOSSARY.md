# TypeScript Glossary

This glossary supports Azerbaijani learner-facing explanations while preserving TypeScript terms in English where natural.

| Term | Guidance |
| --- | --- |
| TypeScript | JavaScript üzərinə static type sistemi əlavə edən language/tooling. |
| static typing | Compile-time mərhələsində type yoxlanışı mental model-i. |
| type annotation | Dəyər, parameter və return üçün explicit type yazmaq. |
| type inference | TypeScript-in type-ı avtomatik çıxarması. |
| `type` | Type alias yaratmaq üçün keyword. |
| `interface` | Object shape təsvir etmək üçün construct. |
| union | Bir neçə mümkün type-dan biri. |
| intersection | Bir neçə type-ın birlikdə tələb olunması. |
| narrowing | Union/unknown type-ı runtime check-lə daha konkret type-a endirmək. |
| discriminated union | Ortaq literal field ilə variantları ayıran union. |
| `never` | Mümkün olmayan və ya unreachable dəyər type-ı. |
| `unknown` | Təhlükəsiz unknown value; istifadə üçün narrowing lazımdır. |
| `any` | Type checking-i bypass edən unsafe type. |
| generic | Type parameter-lə reusable type/function/component yazmaq. |
| `keyof` | Object type-ın key union-ını çıxarmaq. |
| indexed access type | Type-dan property type çıxarmaq, məsələn `User['id']`. |
| `as const` | Literal və readonly inference üçün assertion. |
| `satisfies` | Expression-ın type-a uyğunluğunu yoxlayıb precise inference saxlamaq. |
| utility type | Built-in helper type: `Partial`, `Pick`, `Omit`, və s. |
| mapped type | Key-lər üzərində type transformation. |
| conditional type | Type-level `extends ? :` branching. |
| distributive conditional type | Union üzərində avtomatik paylanan conditional type. |
| `infer` | Conditional type daxilində type çıxarmaq. |
| branded type | Primitive üzərinə domain-specific identity əlavə edən pattern. |
| `tsconfig` | TypeScript compiler configuration faylı. |
| `strict mode` | Daha sərt type checking flag-ləri qrupu. |
| runtime validation | Runtime-da real data-nı yoxlamaq; compile-time type-dan fərqlidir. |
| React props | React component input-larının type-lanması. |
