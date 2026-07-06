# Command Specification

## Purpose

Define the contract for user-invoked workflows.

## Scope

This specification covers the distinction between commands, skills, domain packs, and learner state.

## Non-Goals

- It does not define a command runner.
- It does not define CLI syntax.
- It does not define complete commands.
- It does not define domain lesson content.

## Core Concepts

- Command: a user-invoked workflow entry point.
- Parameters: user-supplied inputs that shape execution.
- Preconditions: requirements that must be true before execution.
- Effects: files, state, or outputs a command may change.
- Validation: checks performed before or after execution.

## Command Lifecycle

A command SHOULD follow this conceptual lifecycle:

1. Resolve context.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Execute the workflow.
6. Produce a user-facing result.
7. Produce an optional session report.
8. Propose state updates only when evidence exists.

## Initial Categories

Future commands MAY be organized into these categories:

- Track commands.
- Lesson commands.
- Practice commands.
- Review commands.
- Assessment commands.
- Project commands.
- Interview commands.
- Progress commands.

## Normative Requirements

- Commands MUST describe user-visible intent separately from reusable skills.
- Commands MUST be user-invoked workflows, not reusable agent capabilities.
- Commands MUST NOT silently modify learner state outside `STATE_SPEC.md` rules.
- Commands SHOULD declare expected effects once a concrete command format exists.
- Commands SHOULD call or reference skills rather than duplicating reusable capability logic.
- Commands MUST NOT embed complete domain pack content.

## Relationships

- Reusable agent capabilities are defined in `SKILL_SPEC.md`.
- Learner state contracts are defined in `STATE_SPEC.md`.
- Domain content contracts are defined in `DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Should commands be represented as Markdown, YAML manifests, executable scripts, or a combination?
- How should command permissions and side effects be validated?
