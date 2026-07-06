# Learner State Template

```text
state_version: <state-version>
learner_profile_ref: <learner-profile-ref>
active_tracks:
  - <domain-id>:<track-id>
learning_skill_records:
  - learning_skill_id: <domain-scoped-learning-skill-id>
    domain_id: <domain-id>
    current_mastery: <M0-M6-or-unknown>
    evidence_refs:
      - <evidence-id>
    notes: <state-note>
evidence_log_ref: <evidence-log-ref>
review_queue_ref: <review-queue-ref>
session_history_ref: <session-history-ref>
next_actions_ref: <next-actions-ref>
state_integrity_notes:
  - <integrity-note>
```

## Notes

- `learning_skill_records` reference domain learning skills and MUST NOT redefine them.
- Learner state MUST NOT duplicate reusable domain pack content.

## OPEN QUESTION

- `<open-question>`

