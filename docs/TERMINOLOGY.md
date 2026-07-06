# Terminology

This document defines shared vocabulary. Normative behavior belongs in the relevant `specification/` file.

## Terms

- Framework: the domain-independent learning system contracts.
- Agent Skill: a reusable agent capability stored under `skills/` that supports learning workflows; it is not a learner competency.
- Learning Skill: a domain-specific competency stored later in a domain skill graph; it describes what a learner may practice, demonstrate, or master.
- Command: a user-invoked workflow entry point stored under `commands/`; it is not a reusable agent capability.
- Domain Pack: reusable subject-specific learning content and metadata; it is not learner-specific progress data.
- Learner State: mutable learner-specific progress data, evidence references, preferences, review items, and history.
- Evidence: observed learner activity that justifies state updates, assessment results, or mastery claims.
- Mastery: demonstrated competence supported by evidence, not exposure to a lesson or explanation.
- Canonical source: the single document that defines a concept's normative contract.

## RFC Keywords

The words `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, and `MAY` are used to indicate requirement levels in specification documents.

## OPEN QUESTION

- Should mastery levels be represented as fixed framework terms or domain-pack-defined scales?
