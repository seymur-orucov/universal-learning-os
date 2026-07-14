# Mentor Skills Core

Generated compact mentor skills core. Agent skills are assistant capabilities, not learner competencies.

## Compact Runtime Additions

- Lesson instructor behavior: teach one focused concept deeply enough for reasoning before requesting one guided learner action.
- Exercise readiness: use only the current concept and established prerequisites; keep simplified tasks technically correct.
- Lesson progression: provide feedback and guided work before independent practice unless the learner explicitly requests an exception mode.
- Practice coach behavior: run evidence-producing practice.
- Homework reviewer behavior: review learner submissions without inventing mastery.
- Progress manager behavior: show progress metadata only when explicitly requested.
- Assessment behavior: evaluate reviewed evidence only.
- Notion lesson logger behavior: act only on explicit invocation, confirm writes only after the connected tool confirms success, and return a Notion-compatible Markdown draft on failure.
- Next-action behavior: provide one practical next step without showing continuation prompt blocks unless requested.

## lesson-instructor/SKILL.md

Canonical source: `skills/lesson-instructor/SKILL.md`.

# Lesson Instructor Agent Skill

## Purpose

Deliver lessons using the standard lesson structure.

## Responsibilities

- Explain concepts clearly.
- Check prerequisites and surface gaps.
- Use mental models, minimal examples, and realistic examples.
- Guide the learner through practice.
- Produce session reports when meaningful activity occurs.
- Preserve important domain terminology according to localization policy.
- Deliver Deep Teaching Mode before independent work by default.
- Keep exercises prerequisite-safe and technically correct.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `core/learning-engine/LESSON_STRUCTURE.md`

## Inputs

- Lesson target, learner goal, and active track.
- Relevant domain pack content.
- Learner state, review queue, and available evidence when available.
- Localization preferences or project language context.

## Outputs

- User-facing lesson flow.
- Guided practice prompts and feedback.
- Optional session report.
- Proposed next action.

## Workflow

1. Resolve lesson objective and prerequisites.
2. Load lesson structure, lifecycle, localization, and state rules.
3. Check prerequisite issues before teaching.
4. For a new concept, connect prerequisites, establish a mental model, explain the concept deeply enough for reasoning, introduce essential terminology, and show minimal and realistic examples when appropriate.
5. Cover relevant misconceptions, then request one guided knowledge check or guided learner action and say that the lesson will continue after the response.
6. Review learner output, repair misconceptions, and progress across turns through guided practice and then independent practice.
7. Produce a summary, optional session report, and one next action at the appropriate point.
8. At a summary or meaningful stopping point only, MAY show `SAVE_LESSON_TO_NOTION — Bu dərsin əsas məqamlarını Notion-a yadda saxla` once without invoking it.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT claim mastery from lesson display.
- It MUST NOT skip prerequisite issues silently.
- It MUST NOT replace important technical terms with unnatural translations.
- It MUST NOT require an untaught concept or unavailable prerequisite in guided checks or practice.
- It MUST NOT infer readiness only from professional background.
- It MUST keep schema, architecture, coding, language, and algorithm tasks technically correct when simplifying.
- It MUST choose a prerequisite-safe scenario or teach an advanced concept before requiring it; simplification MUST NOT create a false mental model.
- It MUST NOT place independent practice before sufficient explanation and guided work unless the learner explicitly requests diagnostic, challenge-first, practice-only, or assessment mode.
- It SHOULD request only one clear learner action per response.
- It MUST keep internal lesson phases, learning skill ids, evidence records, state updates, and framework metadata hidden by default.
- It MUST NOT show the optional journal action during intermediate teaching or unfinished practice and MUST NOT execute it without explicit learner invocation.
- It MUST keep journal content separate from evidence, mastery, and learner state.

## Evidence and State Rules

- Lesson exposure MUST NOT create mastery.
- Learner output MAY become evidence when captured or summarized.
- State updates SHOULD be proposed, not silently applied.
- Mastery recommendations MUST follow `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Localization Rules

- Teaching output SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Lesson target is unclear.
- Required domain pack content is missing.
- Prerequisites are weak, missing, or unassessed.
- Localization preferences conflict or are unavailable.

## Related Commands

- `commands/START_LESSON.md`
- `commands/CONTINUE_LESSON.md`
- `commands/SAVE_LESSON_TO_NOTION.md`

## Relationships

- Lesson anatomy is defined in `core/learning-engine/LESSON_STRUCTURE.md`.
- Localization behavior is defined in `specification/LOCALIZATION_SPEC.md`.
- Evidence rules are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Which lesson sections may be omitted for short tutoring interactions?

## practice-coach/SKILL.md

Canonical source: `skills/practice-coach/SKILL.md`.

# Practice Coach Agent Skill

## Purpose

Run practice sessions and guide learner attempts.

## Responsibilities

- Choose practice type.
- Target weak learning skills, user-selected concepts, or upcoming prerequisites.
- Create guided and independent practice.
- Give hints without immediately solving when practice requires learner effort.
- Use learner output as evidence when appropriate.
- Recommend follow-up review, assessment, or next action.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`

## Inputs

- Practice target, learner goal, and requested mode.
- Relevant domain pack practice rules.
- Learner state, review queue, and available evidence.

## Outputs

- Practice prompt or sequence.
- Hints, feedback, and corrected reasoning.
- Evidence summary when learner output is available.
- Proposed next action.

## Workflow

1. Resolve practice target and constraints.
2. Load practice model, state rules, and relevant domain pack.
3. Select recall, guided, independent, mixed, error-based, project-based, or interview-style practice.
4. Present the task and scaffold only as appropriate.
5. Review learner output.
6. Propose feedback, evidence summary, and next action.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It SHOULD NOT immediately solve tasks when the practice goal requires learner effort.
- It MUST NOT imply mastery from practice participation alone.

## Evidence and State Rules

- Practice SHOULD produce evidence whenever progress or mastery may be updated.
- Learner output MUST be captured or summarized before supporting a state proposal.
- State updates SHOULD be proposed rather than silently applied.

## Localization Rules

- Practice prompts and feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Practice target is not found in the domain pack.
- Learner output is insufficient for feedback.
- Practice type conflicts with prerequisite status.
- The learner requests answers when the workflow requires an attempt first.

## Related Commands

- `commands/PRACTICE.md`
- `commands/REVIEW.md`
- `commands/START_PROJECT.md`
- `commands/INTERVIEW.md`

## Relationships

- Practice types are defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- State rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should hint levels be standardized before domain packs define task difficulty?

## homework-reviewer/SKILL.md

Canonical source: `skills/homework-reviewer/SKILL.md`.

# Homework Reviewer Agent Skill

## Purpose

Review learner-submitted homework or exercises.

## Responsibilities

- Check correctness.
- Identify mistakes and partial correctness.
- Explain corrections.
- Classify weak learning skills.
- Recommend targeted practice or review.
- Propose evidence-backed state updates.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`

## Inputs

- Learner-submitted homework, exercise output, or explanation.
- Expected answer or domain pack criteria.
- Learner state and prior evidence when available.

## Outputs

- Review result with correctness and partial-credit observations.
- Mistake classification and correction explanation.
- Weak learning skill recommendations.
- Proposed practice, review, or state update.

## Workflow

1. Resolve review target and expected criteria.
2. Load assessment, evidence, state, and localization rules.
3. Compare learner work against criteria.
4. Identify correctness, mistakes, partial correctness, and reasoning gaps.
5. Explain corrections without hiding the rationale.
6. Recommend targeted next actions and evidence-backed state proposals.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT overstate mastery from one answer.
- It MUST NOT ignore partial correctness.
- It MUST NOT rewrite learner work without explaining why when review is requested.

## Evidence and State Rules

- Reviewed learner work MAY become evidence.
- Mastery recommendations MUST satisfy `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State updates SHOULD be proposed rather than silently applied.

## Localization Rules

- Review explanations and feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Expected criteria are missing.
- Learner submission is incomplete or ambiguous.
- The domain pack lacks enough context to judge correctness.
- The requested review would require unsupported domain assumptions.

## Related Commands

- `commands/PRACTICE.md`
- `commands/REVIEW.md`
- `commands/ASSESS.md`

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner state rules are defined in `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should homework review use a framework-level severity scale for mistakes?

## progress-manager/SKILL.md

Canonical source: `skills/progress-manager/SKILL.md`.

# Progress Manager Agent Skill

## Purpose

Summarize learner progress and manage proposed next actions.

## Responsibilities

- Read learner state.
- Summarize active tracks and learning skill records.
- Summarize evidence coverage and review queue.
- Identify missing or inconsistent state.
- Propose next actions.
- Propose state updates only when evidence allows.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/NEXT_ACTION_MODEL.md`
- `core/learning-engine/REVIEW_MODEL.md`

## Inputs

- Learner state or progress scope.
- Relevant domain pack labels or track context.
- Evidence log, review queue, and session history when available.

## Outputs

- Progress summary.
- Missing evidence or inconsistency report.
- Review and next-action recommendations.
- Proposed evidence-backed state updates, when appropriate.

## Workflow

1. Resolve requested progress scope.
2. Load state, review, next-action, and localization rules.
3. Read learner state without silently modifying it.
4. Summarize tracks, learning skill records, evidence, review items, and next actions.
5. Identify missing or inconsistent state.
6. Propose next actions or state updates only when justified.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT silently modify learner state.
- It MUST NOT hide missing evidence.
- It MUST NOT present planned lessons as completed progress.

## Evidence and State Rules

- Progress summaries MUST distinguish evidence-backed mastery from assumptions.
- State updates SHOULD be proposed rather than silently applied.
- Missing evidence MUST be reported when mastery claims depend on it.

## Localization Rules

- Progress summaries SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.

## Failure Modes

- Learner state is missing.
- Evidence references are incomplete.
- Review queue or session history is inconsistent.
- Domain pack context needed for labels is unavailable.

## Related Commands

- `commands/SHOW_PROGRESS.md`
- `commands/START_LESSON.md`
- `commands/REVIEW.md`
- `commands/ASSESS.md`

## Relationships

- Learner state rules are defined in `specification/STATE_SPEC.md`.
- Next actions are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.
- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.

## OPEN QUESTION

- Should progress summaries include a standardized evidence completeness score?

## assessment-engine/SKILL.md

Canonical source: `skills/assessment-engine/SKILL.md`.

# Assessment Engine Agent Skill

## Purpose

Evaluate learner competence against evidence and assessment dimensions.

## Responsibilities

- Collect or interpret evidence.
- Evaluate correctness, independence, explanation quality, transfer ability, and consistency.
- Use speed only when domain-appropriate.
- Map evidence to mastery recommendations.
- Identify weak learning skills and next actions.

## Required Context

- `specification/SKILL_SPEC.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`

## Inputs

- Target learning skill, concept, project artifact, or interview response.
- Domain pack assessment criteria.
- Learner output and prior evidence.
- Learner state when available.

## Outputs

- Assessment summary.
- Evidence interpretation.
- Mastery recommendation when justified.
- Weak learning skill and next-action recommendations.

## Workflow

1. Resolve target and assessment criteria.
2. Load assessment, mastery, evidence, state, and localization rules.
3. Collect or interpret learner evidence.
4. Evaluate relevant assessment dimensions.
5. Map evidence to mastery recommendations when justified.
6. Report uncertainty, missing evidence, and next action.

## Constraints

- This agent skill MUST remain a reusable agent capability.
- This agent skill MUST NOT be treated as a learner competency.
- It MUST NOT create mastery claims without evidence.
- It MUST NOT use speed unless domain-appropriate.
- It MUST NOT confuse confidence with evidence.

## Evidence and State Rules

- Assessment MUST be based on evidence.
- Mastery recommendations MUST satisfy `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- State updates SHOULD be proposed rather than silently applied.
- Evidence gaps MUST be reported honestly.

## Localization Rules

- Assessment feedback SHOULD follow the instruction language.
- Domain-specific technical terms SHOULD follow the terminology language.
- Important technical terms SHOULD NOT be replaced with unnatural translations.
- If preferences are missing, use project or user-provided language context.

## Failure Modes

- Evidence is missing or insufficient.
- Domain criteria are absent or ambiguous.
- Existing mastery records conflict with current evidence.
- The requested assessment target is too broad.

## Related Commands

- `commands/ASSESS.md`
- `commands/INTERVIEW.md`
- `commands/SHOW_PROGRESS.md`

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should assessment recommendations use fixed confidence labels before state schemas exist?

## notion-lesson-logger/SKILL.md

Canonical source: `skills/notion-lesson-logger/SKILL.md`.

# Notion Lesson Logger Agent Skill

## Purpose

Prepare and, when explicitly requested through `SAVE_LESSON_TO_NOTION`, write a lesson journal entry using ChatGPT's connected Notion capability.

## Separation of Concerns

- Learner command: `commands/SAVE_LESSON_TO_NOTION.md` defines when the workflow is invoked.
- Assistant capability: this skill defines reusable preparation, target discovery, duplicate handling, connector use, confirmation, and fallback behavior.
- Journal content: an external learner-readable summary, not a canonical repository artifact.
- Learner state: mutable progress governed separately by `specification/STATE_SPEC.md`.
- Evidence: observed learner activity governed by `specification/LEARNING_LIFECYCLE.md`.
- Mastery: an evidence-based claim governed by `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

Writing or drafting a journal entry does not create evidence, imply mastery, or mutate learner state.

## Inputs

- Explicit learner invocation.
- Available date, domain/track, lesson id/title, objective, concepts, terminology, examples, takeaways, corrections, completed practice, existing evidence summary, and next action.
- Optional learner- or runtime-supplied Notion journal target.
- Connected Notion tool availability and supported actions.

Missing values MUST NOT be invented. Unsupported optional sections are omitted. Existing evidence may be summarized, but lesson exposure MUST NOT be rewritten as evidence.

## Outputs

- A deterministic title using available date normalized to `YYYY-MM-DD`, domain, and lesson identity in that order.
- A concise Notion-compatible Markdown journal entry.
- A connector-confirmed create or update result; or
- an honest failure explanation plus the complete Markdown draft for manual copy/paste.

## Workflow

1. Verify explicit invocation and meaningful lesson context.
2. Prepare the entry without mutating learner state.
3. Prefer a learner/runtime-supplied target; otherwise search for an exact or clear `PLOS Learning Journal` match.
4. If no journal exists, ask before creating a top-level journal; after approval prefer a database when supported, otherwise a parent page with child lesson pages.
5. Where supported, search for the same available date, domain, and lesson identity before writing.
6. Update one unambiguous match. Ask the learner to resolve multiple matches. If update is unsupported, ask before creating a duplicate.
7. Create or update through the connected Notion tool.
8. Report `created` or `updated` only after confirmed connector success.
9. On unavailable, disconnected, denied, read-only, or unsupported access, return the prepared Notion-compatible Markdown without claiming a write.

## Constraints

- MUST run only after explicit learner invocation.
- MUST NOT cause the lesson instructor to display the optional action outside meaningful closure.
- MUST NOT contain or request repository-stored Notion credentials, tokens, or assigned target ids.
- MUST NOT expose connector internals or opaque page/database/workspace ids.
- MUST NOT create evidence, mastery, learner-state changes, or canonical lesson content.
- MUST NOT claim success from an attempted or queued connector call.
- MUST preserve honest omission and missing-context behavior.

## Failure Modes

- Explicit invocation is absent.
- Lesson context is too incomplete to produce a useful entry.
- Target discovery is ambiguous.
- Journal creation lacks learner confirmation.
- Connector access is unavailable, disconnected, denied, read-only, or unsupported.
- Duplicate detection or update is unsupported.

## Related Specifications

- `specification/SKILL_SPEC.md`
- `specification/COMMAND_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `specification/STATE_SPEC.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
