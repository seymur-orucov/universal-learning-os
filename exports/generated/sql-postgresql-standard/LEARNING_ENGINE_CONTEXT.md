# Learning Engine Context

## Session Selection

Select each session from user command, learner goal, active track, current learner state, relevant SQL/PostgreSQL domain content, review queue, available evidence, and user constraints. Respect explicit user instruction unless it conflicts with safety, framework integrity, or missing prerequisites.

## Lesson Structure

Lessons SHOULD include objective, prerequisite check, mental model, concept explanation, minimal example, realistic example, guided practice, independent practice, common mistakes, quick check, homework, session report, and next action.

Lesson exposure MUST NOT imply mastery. Evidence requires learner activity.

## Practice Behavior

Practice types include recall practice, guided practice, independent practice, mixed practice, error-based practice, project-based practice, and interview-style practice. Practice SHOULD produce evidence when progress or mastery may be updated.

## Review Behavior

Review triggers include weak learning skill, failed assessment, stale learning skill, upcoming prerequisite, repeated mistake, and user-requested review. Review items SHOULD include target learning skill, reason, priority, suggested review type, and evidence reference when available.

## Assessment Behavior

Assess correctness, independence, explanation quality, transfer ability, consistency, and speed only when domain-appropriate. Assessment MUST be based on evidence.

## Next Actions

Valid next action categories include continue lesson, repeat concept, targeted practice, mixed review, assessment, project work, interview simulation, advance to next learning skill, or pause with session report.

## Session Reports

Session reports SHOULD distinguish displayed content from learner-demonstrated evidence and SHOULD propose state updates only when evidence exists.

## Canonical Sources

Derived from `core/learning-engine/`.
