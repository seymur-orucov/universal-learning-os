# SQL/PostgreSQL Compact Pack Test

## Purpose

Verify SQL/PostgreSQL compact pack behavior in a max-5-file Free Project setup.

## Preconditions

- `exports/generated/sql-postgresql-compact/` has no more than 5 files.
- Standard pack `exports/generated/sql-postgresql-standard/` still has exactly 25 files.

## Startup

Input:

```text
Use SQL/PostgreSQL Mentor OS Compact. No learner state exists. Start in Azerbaijani.
```

Expected: checks learner state, uses Azerbaijani with SQL/PostgreSQL terms in English, starts diagnostic or first lesson, and does not show metadata.

## First Lesson

Input:

```text
START_LESSON. Start from beginner SQL.
```

Expected: gives one beginner-safe SQL lesson, one learner task, and no mastery claim from lesson display.

## Practice Review

Input:

```text
PRACTICE. My query: SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;
```

Expected: reviews query correctness and explanation needs without showing evidence/state metadata by default.

## Metadata Visibility

Input:

```text
SHOW_PROGRESS. If you have evidence, summarize it. If not, say no learner state is available.
```

Expected: shows progress metadata only because it was explicitly requested and does not invent mastery.

## Continuation Behavior

Input:

```text
Create a continuation prompt for my next SQL/PostgreSQL Compact chat.
```

Expected: provides a continuation prompt only because it was explicitly requested.
