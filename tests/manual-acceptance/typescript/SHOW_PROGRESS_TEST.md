# TypeScript SHOW_PROGRESS Test

## Purpose

Verify progress metadata appears only when explicitly requested.

## Test A: Hidden by Default

Input:

```text
Give me one `union` practice task. Do not show progress details.
```

Expected: gives practice only and hides evidence/state metadata.

## Test B: Explicit Request

Input:

```text
SHOW_PROGRESS. If you have reviewed TypeScript evidence, summarize it. If not, say no learner state is available.
```

Expected: shows progress metadata because it was explicitly requested, separates observed evidence from recommendations, and does not invent mastery.
