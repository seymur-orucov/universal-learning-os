# Skill Specification

## Purpose

Define the contract for reusable agent skills that support learning workflows.

## Scope

This specification covers the role, boundaries, and future metadata expectations for skills stored under `skills/`.

## Non-Goals

- It does not define concrete agent prompts.
- It does not define domain lessons.
- It does not define user command syntax.
- It does not define learner state storage.

## Core Concepts

- Skill: a reusable agent capability.
- Invocation context: information supplied when a skill is used.
- Input contract: expected data or files required by a skill.
- Output contract: expected result produced by a skill.
- Safety boundary: constraints on what the skill may modify.

## Normative Requirements

- Skills MUST be reusable capabilities, not user-specific progress records.
- Skills MUST remain separate from commands defined by `COMMAND_SPEC.md`.
- Skills SHOULD declare their purpose and expected inputs once a concrete skill format exists.
- Skills MUST NOT mark learner progress directly unless authorized by lifecycle and state rules.
- Skills SHOULD reference canonical specifications when they rely on framework behavior.

## Relationships

- Commands are defined in `COMMAND_SPEC.md`.
- Learner state rules are defined in `STATE_SPEC.md`.
- Learning lifecycle rules are defined in `LEARNING_LIFECYCLE.md`.

## OPEN QUESTION

- Should skills be stored as Markdown instructions, machine-readable manifests, or both?
- What metadata is required for safe tool access and modification boundaries?

