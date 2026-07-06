# Evidence Record Template

```text
evidence_id: <evidence-id>
date: <date-or-timestamp>
source_session: <session-id-or-command-context>
domain_id: <domain-id>
learning_skill_id: <learning-skill-id>
evidence_type: <learner-output|reviewed-answer|assessment-result|project-artifact|interview-response|explicit-user-instruction>
learner_output_summary: <summary>
review_summary: <summary>
assessment_dimensions:
  - <assessment-dimension>
confidence_or_limitations:
  - <confidence-or-limitation>
related_artifacts:
  - <artifact-ref>
state_impact: <proposed-or-applied-impact>
```

## Notes

- Evidence supports, but does not automatically equal, mastery.
- Evidence SHOULD identify what happened, when, and which learning skill it supports.

## OPEN QUESTION

- `<open-question>`

