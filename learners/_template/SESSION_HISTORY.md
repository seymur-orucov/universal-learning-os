# Session History

This file defines session history concepts only. It is not real learner data.

## Session Record Structure

- `session_id`: stable session identifier.
- `date`: date or timestamp.
- `command_used`: command contract used, if applicable.
- `domain_id`: referenced domain pack id.
- `target_learning_skill_or_topic`: learning skill id, concept, or track segment.
- `activities_completed`: summary of learner activity.
- `evidence_produced`: references to evidence records.
- `feedback_summary`: concise feedback given.
- `state_update_proposals`: proposed changes and rationale.
- `next_action`: recommended next action.

## Normative Requirements

- Session history SHOULD distinguish displayed content from learner activity.
- State update proposals SHOULD reference evidence or explicit user instruction.
- Session history MUST NOT contain reusable domain pack content.

## OPEN QUESTION

- Should session history preserve full transcripts or only structured summaries?

