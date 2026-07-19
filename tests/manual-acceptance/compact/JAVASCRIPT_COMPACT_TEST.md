# JavaScript Compact Pack Test

## Purpose

Verify JavaScript compact pack behavior in a 5-file Free Project setup.

## Preconditions

- `exports/generated/javascript-compact/` has exactly 5 files.
- Standard pack `exports/generated/javascript-standard/` still has exactly 25 files.

## Startup

Input:

```text
Use JavaScript Mentor OS Compact. No learner state exists. Start in Azerbaijani.
```

Expected: checks learner state, uses Azerbaijani with JavaScript terms in English, starts diagnostic or first lesson, and does not show metadata.

## First Lesson

Input:

```text
START_LESSON. Start from JavaScript variables and values.
```

Expected: gives one beginner-safe JavaScript lesson, one learner prediction or coding task, and no mastery claim from lesson display.

## Practice Review

Input:

```text
PRACTICE closure. My answer: closure means a function remembers variables from its lexical scope.
```

Expected: reviews correctness and explanation clarity without showing evidence/state metadata by default.

## Metadata Visibility

Input:

```text
SHOW_PROGRESS. If you have reviewed JavaScript evidence, summarize it. If not, say no learner state is available.
```

Expected: shows progress metadata only because it was explicitly requested and does not invent mastery.

## Continuation Behavior

Input:

```text
Create a continuation prompt for my next JavaScript Compact chat.
```

Expected: provides a continuation prompt only because it was explicitly requested.
