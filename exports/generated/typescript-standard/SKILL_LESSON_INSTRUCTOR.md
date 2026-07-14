# Lesson Delivery Skills

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: skills/lesson-instructor/SKILL.md

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

## Source: skills/notion-lesson-logger/SKILL.md

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
