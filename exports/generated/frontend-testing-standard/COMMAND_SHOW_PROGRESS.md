Canonical source: `commands/SHOW_PROGRESS.md`.

# SHOW_PROGRESS Command

## Purpose

Summarize learner state and progress.

## When to Use

Use this command when the learner asks what has been completed, what is weak, what evidence exists, or what should happen next.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/STATE_SPEC.md`
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/learning-engine/NEXT_ACTION_MODEL.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Learner state, when available.
- Optional requested track, learning skill, date range, or summary depth.
- Relevant domain pack for labels or track context, when available.

## Workflow

1. Resolve context from the requested progress scope.
2. Load relevant specifications.
3. Load the relevant domain pack when needed for labels or track structure.
4. Load learner state when available.
5. Summarize active tracks, learning skill records, evidence, review queue, session history, and next actions.
6. Produce a user-facing progress summary.
7. Produce an optional session report only if the command itself performs meaningful analysis.
8. Do not propose state updates unless evidence gaps or explicit user corrections require a proposal.

## User-Facing Output

The output SHOULD clearly report known progress, weak areas, evidence coverage, pending reviews, recent sessions, next actions, and missing or incomplete state. Progress summaries SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- The command MUST NOT modify learner state by default.
- Missing learner state MUST be reported honestly.
- Progress summaries MUST distinguish evidence-backed mastery from assumptions, planned work, or displayed lessons.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.

## Failure Modes

- Learner state is missing.
- Learner state is incomplete, inconsistent, or unsupported by domain pack context.
- Requested progress scope cannot be resolved.
- Evidence references are missing for claimed mastery.

## Relationships

- Learner state structure is defined in `specification/STATE_SPEC.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should progress summaries include confidence levels before the state schema defines them?
