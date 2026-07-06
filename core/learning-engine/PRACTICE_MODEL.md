# Practice Model

## Purpose

Define domain-independent practice types.

## Scope

This model defines practice categories. Domain packs define concrete prompts, tasks, constraints, and expected answers.

## Practice Types

- Recall practice: strengthens retrieval by asking the learner to produce facts, definitions, steps, distinctions, or short explanations without immediately seeing the answer.
- Guided practice: builds procedural confidence by supporting the learner through a task with hints, scaffolding, checkpoints, or partial structure.
- Independent practice: tests application by asking the learner to complete a task with minimal support.
- Mixed practice: improves discrimination and transfer by combining multiple learning skills or concepts.
- Error-based practice: repairs specific gaps by targeting observed mistakes, misconceptions, or failed assessment evidence.
- Project-based practice: develops realistic application by asking the learner to produce or improve a practical artifact.
- Interview-style practice: develops explanation, reasoning, and defense by simulating verbal, written, or interactive questioning.

## Normative Requirements

- Practice SHOULD produce evidence whenever progress or mastery may be updated.
- Practice difficulty SHOULD be selected from learner state, domain pack prerequisites, and recent evidence.
- Error-based practice SHOULD reference the mistake or evidence that triggered it.
- Project-based practice MAY span multiple sessions.
- Practice tasks MUST NOT duplicate learner state into reusable domain content.

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- Domain-specific practice rules belong in domain packs.

## OPEN QUESTION

- Should practice difficulty use a framework-level scale or domain-specific labels?
