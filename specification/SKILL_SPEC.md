# Skill Specification

## Purpose

Define the contract for reusable agent skills that support learning workflows.

## Scope

This specification covers the role, boundaries, and future metadata expectations for agent skills stored under `skills/`.

## Non-Goals

- It does not define concrete agent prompts.
- It does not define domain lessons.
- It does not define user command syntax.
- It does not define learner state storage.

## Core Concepts

- Agent skill: a reusable agent capability stored under `skills/`.
- Learning skill: a learner competency defined later by a domain skill graph, not by this specification.
- Invocation context: information supplied when a skill is used.
- Input contract: expected data or files required by a skill.
- Output contract: expected result produced by a skill.
- Safety boundary: constraints on what the skill may modify.

## Expected Properties

Future agent skill definitions SHOULD describe:

- Purpose: why the agent skill exists.
- Inputs: required user requests, files, state, or domain context.
- Outputs: expected artifacts, recommendations, or reports.
- Required context: specifications, domain pack sections, or learner state needed before use.
- Constraints: files, state, or decisions the agent skill MUST NOT modify.
- Failure modes: conditions the agent skill cannot safely handle.
- Related specifications: canonical documents governing its behavior.

## Normative Requirements

- Files under `skills/` MUST describe reusable agent skills, not learner learning skills.
- Agent skills MUST be reusable capabilities, not user-specific progress records.
- Agent skills MUST remain separate from commands defined by `COMMAND_SPEC.md`.
- Agent skills SHOULD declare their purpose and expected inputs once a concrete skill format exists.
- Agent skills MUST NOT mark learner progress directly unless authorized by lifecycle and state rules.
- Agent skills SHOULD reference canonical specifications when they rely on framework behavior.

## Relationships

- Commands are defined in `COMMAND_SPEC.md`.
- Learner state rules are defined in `STATE_SPEC.md`.
- Learning lifecycle rules are defined in `LEARNING_LIFECYCLE.md`.

## OPEN QUESTION

- Should skills be stored as Markdown instructions, machine-readable manifests, or both?
- What metadata is required for safe tool access and modification boundaries?
