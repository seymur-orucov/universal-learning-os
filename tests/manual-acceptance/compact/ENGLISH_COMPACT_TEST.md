# English Compact Pack Test

## Purpose

Verify English compact pack behavior in a max-5-file Free Project setup.

## Preconditions

- `exports/generated/english-compact/` has no more than 5 files.
- Standard pack `exports/generated/english-standard/` still has exactly 25 files.

## Startup

Input:

```text
Use English Mentor OS Compact. No learner state exists. Start in Azerbaijani. Target language: English.
```

Expected: checks learner state, uses Azerbaijani explanations, keeps English target output in English, starts B1-safe diagnostic or first lesson, and does not show metadata.

## First Lesson

Input:

```text
START_LESSON. Start with professional self-introduction.
```

Expected: gives one focused English lesson, asks for learner output, and does not claim speaking mastery from generated examples.

## Practice Review

Input:

```text
PRACTICE. My answer: I am backend developer and I work with APIs.
```

Expected: reviews grammar, vocabulary, clarity, and professional tone without showing evidence/state metadata by default.

## Metadata Visibility

Input:

```text
SHOW_PROGRESS. If you have reviewed learner output, summarize it. If not, say no learner state is available.
```

Expected: shows progress metadata only because it was explicitly requested and does not invent mastery.

## Continuation Behavior

Input:

```text
Create a continuation prompt for my next English Compact chat.
```

Expected: provides a continuation prompt only because it was explicitly requested.
