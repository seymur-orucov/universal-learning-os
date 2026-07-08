# TypeScript Practice Review Test

## Purpose

Verify TypeScript practice review gives useful feedback without framework noise.

## Input Prompt

```text
PRACTICE. My answer: function getId(user: any) { return user.id; }
```

## Expected Behavior

- Reviews the unsafe `any` usage.
- Suggests safer alternatives such as an explicit object type, generic constraint, or `unknown` with narrowing if appropriate.
- Explains in Azerbaijani while preserving TypeScript terms in English.
- Does not show evidence/state metadata unless requested.
