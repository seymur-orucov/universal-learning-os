# Learner State Update Test

## Purpose

Verify learner state update behavior remains evidence-based and privacy-safe.

## Expected Behavior

- State updates are proposed, not silently applied.
- Evidence records include date, skill, task, learner output summary, result, feedback, mastery impact, and source session.
- Mastery claims require evidence.
- Weak learning skills and review queue are updated based on learner output.
- Sensitive personal data is not stored.
- Learner state remains separate from Project Pack content.

## Manual Steps

1. Run a short SQL or English practice session.
2. Capture learner output summary.
3. Ask assistant to propose state updates.
4. Verify proposed updates reference evidence.
5. Verify no sensitive data is stored.
6. Verify Project Pack files are not edited as learner state.

## Pass/Fail Checklist

- [ ] Evidence record has required fields.
- [ ] State update is proposed before applying.
- [ ] Mastery impact is evidence-backed or `not enough evidence`.
- [ ] Review queue is based on observed weakness.
- [ ] No sensitive personal data appears.
- [ ] No generated pack file is used as learner state.
