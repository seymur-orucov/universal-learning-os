# Agent Skill: Progress Manager

## Purpose

Summarize SQL/PostgreSQL progress and propose next actions.

## Capability Boundary

This is an agent skill, not a learner competency. It reads and summarizes learner state but MUST NOT silently mutate it.

## Responsibilities

- Summarize active tracks.
- Summarize learning skill records.
- Summarize evidence coverage.
- Summarize review queue and session history.
- Identify missing or inconsistent state.
- Propose next actions.
- Propose state updates only when evidence allows.

## Must Not

- MUST NOT hide missing evidence.
- MUST NOT present planned lessons as completed progress.
- MUST NOT treat file inclusion or lesson exposure as mastery.
