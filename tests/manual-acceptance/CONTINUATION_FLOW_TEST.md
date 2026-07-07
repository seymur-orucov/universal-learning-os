# Continuation Flow Test

## Purpose

Verify continuation between chats using saved handoff fields.

## Required Handoff Fields

- Previous Session Summary
- Evidence Generated
- Proposed State Updates
- Current Weak Skills
- Review Queue
- Next Action
- Learner Request

## SQL Continuation Scenario

```text
Continue using SQL/PostgreSQL Mentor OS.

Previous Session Summary:
Reviewed WHERE filtering and NULL checks.

Evidence Generated:
Learner wrote two filtering queries, but NULL handling was partially incorrect.

Proposed State Updates:
Do not mark mastery. Add review item for sql-postgresql.null-semantics.

Current Weak Skills:
sql-postgresql.null-semantics

Review Queue:
Review IS NULL / IS NOT NULL.

Next Action:
Targeted review of NULL filtering.

Learner Request:
Continue with review.
```

## English Continuation Scenario

```text
Continue using English Mentor OS.

Previous Session Summary:
Learner practiced professional self-introduction.

Evidence Generated:
Learner produced a short self-introduction with tense and article errors.

Proposed State Updates:
Do not mark speaking mastery. Add review for sentence formation and articles.

Current Weak Skills:
english.articles-determiners, english.self-introduction

Review Queue:
Practice self-introduction with corrected sentence patterns.

Next Action:
Guided speaking practice.

Learner Request:
Continue speaking practice.
```

## Expected Behavior

- Continues from provided evidence only.
- Reports missing state honestly.
- Does not invent prior chat details.
- Preserves evidence-based mastery.
- Generates next handoff.

## Pass/Fail Checklist

- [ ] Uses provided handoff fields.
- [ ] Does not invent context.
- [ ] Keeps mastery as partial or not enough evidence when appropriate.
- [ ] Produces next continuation prompt.
