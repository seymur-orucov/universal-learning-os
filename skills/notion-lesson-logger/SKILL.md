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
