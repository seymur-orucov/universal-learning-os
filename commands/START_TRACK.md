# START_TRACK Command

## Purpose

Initialize or switch to a learning track.

## When to Use

Use this command when the learner starts a new domain, changes active track, or clarifies a learning goal that needs a domain pack and track context.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/DOMAIN_PACK_SPEC.md`
- `specification/STATE_SPEC.md`
- `core/learning-engine/SESSION_SELECTION.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Learner goal or requested track.
- Candidate domain pack, when known.
- Existing learner state, when available.
- User constraints such as timeline, depth, or preferred mode.

## Workflow

1. Resolve context from the user request, learner goal, and existing active track.
2. Load relevant specifications.
3. Load the relevant domain pack or identify that domain pack selection is required.
4. Load learner state when available.
5. Check baseline assumptions, prerequisites, and track fit.
6. Produce a user-facing track recommendation or activation summary.
7. Produce an optional session report describing selected track, assumptions, and missing context.
8. Propose initial state only when needed and only without mastery records unless evidence exists.

## User-Facing Output

The result SHOULD identify the selected or proposed domain pack, active track, baseline assumptions, immediate next action, and any missing information. Output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- The command MUST NOT create mastery records without evidence.
- Track activation MAY update active track state when explicitly requested by the user.
- Baseline assumptions MUST be reported as assumptions, not demonstrated learner competence.

## Failure Modes

- No suitable domain pack is available.
- Learner goal is ambiguous.
- Existing learner state conflicts with the requested track.
- Required prerequisites are unknown or unsupported by evidence.

## Relationships

- Domain pack boundaries are defined in `specification/DOMAIN_PACK_SPEC.md`.
- Learner state rules are defined in `specification/STATE_SPEC.md`.
- Next actions are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should starting a track require explicit confirmation before active learner state is changed?
