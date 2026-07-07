# Command: SHOW_PROGRESS

## Purpose

Summarize learner state and SQL/PostgreSQL progress.

## When to Use

Use when the learner asks where they are, what is weak, what evidence exists, or what to do next.

## Required Behavior

- Read learner state when available.
- Summarize active track, learning skill records, evidence coverage, review queue, session history, and next actions.
- Report missing or incomplete state clearly.
- Do not modify learner state by default.

## Output Expectations

Provide concise progress summary, evidence-backed mastery, assumptions or missing evidence, weak learning skills, review items, and recommended next command.

## Evidence and State Handling

Progress summaries MUST distinguish evidence-backed mastery from planned lessons, viewed content, or assumptions.

## Localization Expectations

Progress summary SHOULD follow Azerbaijani instruction language while preserving SQL/PostgreSQL terminology.
