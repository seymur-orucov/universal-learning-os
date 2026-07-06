# Evidence Requirements

## Purpose

Define what evidence is needed before claiming mastery.

## Scope

This document defines acceptable evidence categories. It does not define concrete storage schemas, scoring rubrics, or domain-specific answers.

## Evidence Categories

Mastery claims SHOULD be based on one or more of:

- Learner output: work produced by the learner during a task, explanation, exercise, or project.
- Reviewed answer: learner output that has been checked by an agent, human, validator, or domain rubric.
- Assessment result: an evaluation against relevant assessment criteria.
- Project artifact: a realistic artifact produced or modified by the learner.
- Interview response: verbal or written response to interactive questioning.
- Explicit user instruction: a user-directed state change or declared prior competence.

## Normative Requirements

- Mastery claims MUST reference evidence or explicit user instruction.
- Evidence SHOULD identify what the learner did, when it occurred, and which learning skill or concept it supports.
- Reviewed answers SHOULD distinguish correct output from independent performance.
- Explicit user instruction MAY justify a state update, but SHOULD be marked distinctly from demonstrated evidence.
- Evidence records MUST NOT duplicate reusable domain content.
- Evidence requirements MUST NOT be weakened by domain-specific rubrics.

## Relationships

- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- State evidence storage is described by `specification/STATE_SPEC.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.

## OPEN QUESTION

- What minimum evidence fields are required once a concrete state schema exists?
