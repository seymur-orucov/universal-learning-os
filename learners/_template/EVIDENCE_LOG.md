# Evidence Log

This file defines evidence record concepts only. It is not real learner data.

## Evidence Record Structure

- `evidence_id`: stable evidence identifier.
- `date`: date or timestamp of the learner activity.
- `source_session`: related session id or command context.
- `domain_id`: referenced domain pack id.
- `learning_skill_id`: referenced domain learning skill id.
- `evidence_type`: learner output, reviewed answer, assessment result, project artifact, interview response, or explicit user instruction.
- `learner_output_summary`: concise summary of what the learner produced.
- `review_summary`: summary of review, feedback, or evaluation.
- `assessment_dimensions`: relevant assessment dimensions.
- `confidence_or_limitations`: confidence, uncertainty, or limits of the evidence.
- `related_artifacts`: links or references to artifacts.
- `state_impact`: proposed or applied state effect.

## Normative Requirements

- Evidence supports, but does not automatically equal, mastery.
- Evidence records SHOULD identify what happened, when it happened, and which learning skill they support.
- Evidence records MUST NOT duplicate reusable domain pack content.

## Relationships

- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- State rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should evidence records store full learner output, summaries, or external artifact references?

