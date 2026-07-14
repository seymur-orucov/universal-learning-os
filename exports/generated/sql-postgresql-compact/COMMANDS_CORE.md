# Commands Core

Generated compact command core. Commands are user-invoked workflows, not agent skills.

## START_LESSON.md

Canonical source: `commands/START_LESSON.md`.

# START_LESSON Command

## Purpose

Start the next appropriate lesson.

## When to Use

Use this command when the learner asks to begin learning and an active track or target learning skill can be resolved.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `core/learning-engine/SESSION_SELECTION.md`
- `core/learning-engine/LESSON_STRUCTURE.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Active track and learner goal.
- Current learner state, when available.
- Relevant domain pack.
- Review queue and available evidence.
- Optional user-selected learning skill or concept.
- Optional explicit mode: diagnostic, challenge-first, practice-only, or assessment.

## Workflow

1. Resolve context from user command, active track, learner goal, and constraints.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Use session selection to choose the lesson target, checking prerequisites and review queue.
6. Unless the learner explicitly selected an exception mode, begin in Deep Teaching Mode and teach sufficiently before requesting independent work.
7. For a new concept, provide the title and objective, prerequisite connection, mental model, deep explanation, essential terminology, minimal example, realistic example when appropriate, common misconceptions, and one guided knowledge check or guided action.
8. State that the lesson will continue after the learner responds, without exposing internal lesson phases or framework metadata.
9. Progress across turns from teaching to guided check, feedback and misconception repair, guided practice, independent practice, then summary and next action.
10. Produce an optional session report when meaningful activity occurs.
11. Propose state updates only when learner activity produces evidence.

## User-Facing Output

The initial response for a new concept SHOULD teach before testing and end with one guided knowledge check, not premature independent practice. It SHOULD request only one clear learner action and clearly indicate that the lesson will continue after the learner responds. Later turns introduce guided and independent practice when the learner is ready, as described in `core/learning-engine/LESSON_STRUCTURE.md`.

Lesson explanations, examples, feedback, quick checks, homework, and next actions SHOULD follow localization preferences. When instruction language and terminology language differ, important domain terminology SHOULD be preserved and SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context. A project preference MAY request Azerbaijani instruction with English technical terms.

## Evidence and State Rules

- Displaying lesson content MUST NOT create mastery.
- Evidence exists only if the learner performs an activity, answers a check, completes practice, or provides explicit state instruction.
- Prerequisite gaps SHOULD influence the lesson plan or next action.
- Tasks MUST NOT depend on concepts that have not been taught or established as prerequisites.
- Diagnostic, challenge-first, practice-only, or assessment behavior before teaching requires an explicit learner request.

## Failure Modes

- No active track exists.
- The relevant domain pack is missing.
- Prerequisites are weak, unassessed, or contradicted by evidence.
- The review queue indicates urgent review that should be addressed first.

## Relationships

- Session selection is defined in `core/learning-engine/SESSION_SELECTION.md`.
- Lesson anatomy is defined in `core/learning-engine/LESSON_STRUCTURE.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should urgent review block lesson start by default or only warn the learner?

## CONTINUE_LESSON.md

Canonical source: `commands/CONTINUE_LESSON.md`.

# CONTINUE_LESSON Command

## Purpose

Continue an in-progress lesson.

## When to Use

Use this command when prior session history or learner state indicates an unfinished lesson, practice step, assessment, or next action.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/STATE_SPEC.md`
- `core/learning-engine/LESSON_STRUCTURE.md`
- `core/learning-engine/NEXT_ACTION_MODEL.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Current learner request.
- Learner state or session history, when available.
- Relevant domain pack.
- Prior lesson target, prior activity, and last next action.

## Workflow

1. Resolve context from current request, session history, and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Review the learner's most recent response against the current concept and available prerequisites.
6. Give feedback and repair misconceptions before advancing; avoid repeating the whole initial explanation when targeted repair is sufficient.
7. Resume from the next appropriate progressive lesson phase: guided practice, independent practice, or summary and next action.
8. Request only one clear next learner action, and do not advance to independent practice before sufficient teaching and guided work unless an explicit exception mode applies.
9. Produce an optional session report.
10. Propose state updates only when new evidence exists.
11. At summary or another meaningful stopping point, MAY show `SAVE_LESSON_TO_NOTION — Bu dərsin əsas məqamlarını Notion-a yadda saxla` once; never show it while practice or teaching is unfinished and never invoke it automatically.

## User-Facing Output

The result SHOULD briefly summarize where the learner left off, review the learner's answer, correct misconceptions, and provide one next concrete activity. It SHOULD continue rather than repeat the whole initial teaching response. Output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Prior displayed content MUST NOT be treated as evidence.
- New learner output MAY become evidence when reviewed or assessed.
- The command SHOULD distinguish continuation from repetition.
- Saving a lesson journal is a separate, explicitly invoked command and MUST NOT create evidence, mastery, or a learner-state update.

## Failure Modes

- No in-progress lesson can be identified.
- Session history is missing or ambiguous.
- Domain pack content needed to continue is unavailable.
- Learner asks to continue but prerequisite evidence indicates review or assessment is more appropriate.

## Relationships

- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.
- State records are governed by `specification/STATE_SPEC.md`.
- Optional journal saving is governed by `commands/SAVE_LESSON_TO_NOTION.md`.

## OPEN QUESTION

- How long should a lesson remain resumable before it becomes a review or restart candidate?

## PRACTICE.md

Canonical source: `commands/PRACTICE.md`.

# PRACTICE Command

## Purpose

Run practice without necessarily teaching a full lesson.

## When to Use

Use this command when the learner wants exercises, drilling, application, error repair, project work, or interview-style practice without a complete lesson flow.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Requested concept, learning skill, practice type, or goal.
- Current learner state, when available.
- Relevant domain pack practice rules.
- Review queue, prerequisites, and available evidence.

## Workflow

1. Resolve context from requested practice target, learner state, and user constraints.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Select a practice type from `core/learning-engine/PRACTICE_MODEL.md`.
6. Run practice targeting weak learning skills, user-selected concepts, or upcoming prerequisites.
7. Produce feedback and an optional session report.
8. Propose state updates only when learner output creates evidence.

## User-Facing Output

The output SHOULD include the practice target, practice type, task prompt, feedback, and next action. Task prompts and feedback SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Practice SHOULD produce evidence whenever progress or mastery may be updated.
- Learner output MUST be preserved or summarized before it supports a state update.
- Practice completion alone MUST NOT imply mastery.

## Failure Modes

- Requested practice target is not found in the domain pack.
- Practice type is inappropriate for the learner state or prerequisite status.
- Learner output is insufficient to assess progress.
- Domain-specific practice rules are missing.

## Relationships

- Practice types are defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Evidence requirements are defined in `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## OPEN QUESTION

- Should practice commands allow difficulty labels before domain packs define difficulty models?

## REVIEW.md

Canonical source: `commands/REVIEW.md`.

# REVIEW Command

## Purpose

Review weak, stale, failed, or user-selected learning skills.

## When to Use

Use this command when the review queue contains items, the learner asks to review, or evidence indicates weak prerequisites or repeated mistakes.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/REVIEW_MODEL.md`
- `core/learning-engine/PRACTICE_MODEL.md`
- `specification/STATE_SPEC.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Review queue, when available.
- User-requested review target, when provided.
- Current learner state and evidence.
- Relevant domain pack.

## Workflow

1. Resolve context from user request, review queue, and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Select review targets using triggers from `core/learning-engine/REVIEW_MODEL.md`.
6. Run targeted review through explanation, practice, or assessment as appropriate.
7. Produce feedback and an optional session report.
8. Propose state updates only when review produces evidence.

## User-Facing Output

The output SHOULD state the review target, reason for review, suggested review type, learner task, feedback, and next action. Review explanation, tasks, and feedback SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Review completion MUST NOT be treated as mastery without evidence.
- User-requested review MAY run even without failure evidence.
- Review items SHOULD retain evidence references when available.

## Failure Modes

- Review queue is missing or empty and no target is provided.
- Review target is not found in the domain pack.
- Evidence does not identify the weakness clearly enough for targeted review.
- Learner asks for advancement while failed prerequisites remain unresolved.

## Relationships

- Review triggers are defined in `core/learning-engine/REVIEW_MODEL.md`.
- Practice types are defined in `core/learning-engine/PRACTICE_MODEL.md`.
- Learner state review storage is governed by `specification/STATE_SPEC.md`.

## OPEN QUESTION

- Should review priority be recalculated during the command or only proposed for future state?

## ASSESS.md

Canonical source: `commands/ASSESS.md`.

# ASSESS Command

## Purpose

Evaluate learner competence.

## When to Use

Use this command when the learner requests evaluation, a learning skill requires evidence, or the system needs to determine readiness to advance.

## Required Context

- `specification/COMMAND_SPEC.md`
- `core/learning-engine/ASSESSMENT_MODEL.md`
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Target learning skill, concept, project artifact, or track segment.
- Relevant domain pack assessment criteria.
- Learner state and prior evidence, when available.
- Learner output collected during the assessment.

## Workflow

1. Resolve context from requested assessment target and learner state.
2. Load relevant specifications.
3. Load the relevant domain pack.
4. Load learner state when available.
5. Collect evidence through tasks, questions, artifact review, or responses.
6. Evaluate using dimensions from `core/learning-engine/ASSESSMENT_MODEL.md`.
7. Produce an assessment result, feedback, and next action.
8. Recommend mastery or state changes only when evidence requirements are satisfied.

## User-Facing Output

The output SHOULD include assessment target, evidence collected, evaluation by relevant dimensions, result, weak areas, and next action. Feedback and evaluation output SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- Assessment MUST be based on evidence.
- Mastery changes MUST NOT be recommended unless `core/mastery-model/EVIDENCE_REQUIREMENTS.md` is satisfied.
- Assessment may identify review needs without changing mastery.

## Failure Modes

- Target learning skill or criteria are missing from the domain pack.
- Learner output is absent or insufficient.
- Assessment criteria are ambiguous.
- Evidence conflicts with existing mastery records.

## Relationships

- Assessment dimensions are defined in `core/learning-engine/ASSESSMENT_MODEL.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should assessment results use fixed labels before machine-readable schemas exist?

## SHOW_PROGRESS.md

Canonical source: `commands/SHOW_PROGRESS.md`.

# SHOW_PROGRESS Command

## Purpose

Summarize learner state and progress.

## When to Use

Use this command when the learner asks what has been completed, what is weak, what evidence exists, or what should happen next.

## Required Context

- `specification/COMMAND_SPEC.md`
- `specification/STATE_SPEC.md`
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/learning-engine/NEXT_ACTION_MODEL.md`
- `specification/LOCALIZATION_SPEC.md`

## Inputs

- Learner state, when available.
- Optional requested track, learning skill, date range, or summary depth.
- Relevant domain pack for labels or track context, when available.

## Workflow

1. Resolve context from the requested progress scope.
2. Load relevant specifications.
3. Load the relevant domain pack when needed for labels or track structure.
4. Load learner state when available.
5. Summarize active tracks, learning skill records, evidence, review queue, session history, and next actions.
6. Produce a user-facing progress summary.
7. Produce an optional session report only if the command itself performs meaningful analysis.
8. Do not propose state updates unless evidence gaps or explicit user corrections require a proposal.

## User-Facing Output

The output SHOULD clearly report known progress, weak areas, evidence coverage, pending reviews, recent sessions, next actions, and missing or incomplete state. Progress summaries SHOULD follow the learner's instruction language when available, while domain-specific technical terms SHOULD follow the terminology language. Important technical terms SHOULD NOT be replaced with unnatural translations. If preferences are missing, use project or user-provided language context.

## Evidence and State Rules

- The command MUST NOT modify learner state by default.
- Missing learner state MUST be reported honestly.
- Progress summaries MUST distinguish evidence-backed mastery from assumptions, planned work, or displayed lessons.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.

## Failure Modes

- Learner state is missing.
- Learner state is incomplete, inconsistent, or unsupported by domain pack context.
- Requested progress scope cannot be resolved.
- Evidence references are missing for claimed mastery.

## Relationships

- Learner state structure is defined in `specification/STATE_SPEC.md`.
- Mastery levels are defined in `core/mastery-model/MASTERY_LEVELS.md`.
- Next action categories are defined in `core/learning-engine/NEXT_ACTION_MODEL.md`.

## OPEN QUESTION

- Should progress summaries include confidence levels before the state schema defines them?

## SAVE_LESSON_TO_NOTION.md

Canonical source: `commands/SAVE_LESSON_TO_NOTION.md`.

# SAVE_LESSON_TO_NOTION Command

## Purpose

Save a concise lesson journal entry to Notion through the connected runtime tool, only after the learner explicitly invokes `SAVE_LESSON_TO_NOTION` or clearly asks to save the lesson to Notion.

The learner-facing optional action is exactly:

`SAVE_LESSON_TO_NOTION — Bu dərsin əsas məqamlarını Notion-a yadda saxla`

## Invocation Boundary

- This command is explicit-only. Displaying the optional action MUST NOT invoke it.
- The optional action MAY be displayed once at a lesson summary or another meaningful stopping point.
- It MUST NOT be displayed during intermediate teaching, an unanswered guided check, or unfinished practice.
- A runtime MUST NOT save automatically at lesson start, after every response, or merely because a lesson appears complete.

## Requested Context

Use available runtime or learner-supplied context:

- lesson date;
- domain or track;
- lesson id and lesson title;
- learning objective;
- main concepts and essential terminology;
- useful mental model or examples;
- learner takeaways;
- misconceptions, mistakes, and corrections actually discussed;
- completed practice and observed learner evidence, if any;
- next action or follow-up;
- learner/runtime-supplied Notion journal target, if any.

Do not invent missing values. Omit unavailable optional fields. If date, domain, or lesson identity is missing, use only the available title components and state material missing context in the draft when it affects usefulness. Never infer evidence or mastery from displayed content.

## Entry Format

Create clean Notion-compatible Markdown with a deterministic title assembled in this order from available values:

`<date> — <domain> — <lesson-id-or-title>`

Normalize a reliably known full date to `YYYY-MM-DD`. Omit unavailable components rather than inserting false placeholders. If none of those components is available, use `Lesson Journal Entry`. Keep sections concise and include only sections supported by the context. Add this boundary when evidence or mastery could be misunderstood:

`Journal note only — saving this entry does not create evidence, mark mastery, or update learner state.`

## Connector Workflow

1. Resolve lesson context without changing learner state.
2. Prepare the title and Markdown entry before any write.
3. Use a learner- or runtime-supplied target when available.
4. Otherwise, search through the connected Notion tool for an exact or clear `PLOS Learning Journal` match.
5. If no journal exists, show the prepared entry and ask before creating a new top-level journal. After confirmation, prefer a database when the connector supports it; otherwise create a parent page with child lesson pages.
6. Before writing, search for the same available date, domain, and lesson identity when the connector supports search.
7. Update one unambiguous match. If multiple matches are plausible, ask the learner which entry to update. If updating is unsupported, ask before creating a duplicate.
8. Perform the create or update through ChatGPT's connected Notion tool.
9. Say `created` or `updated` only after the connector confirms success. Otherwise follow the fallback behavior.

## Duplicate Handling

- Repeated invocation MUST prefer updating one unambiguous same-lesson entry instead of silently creating duplicates.
- Ambiguous matches require learner choice.
- When duplicate search or update is unsupported, explain the limitation and ask before creating another entry.

## Failure and Fallback

If Notion is unavailable, disconnected, denied, read-only, or does not support the required action:

- explain the failure in learner-facing language;
- do not claim that anything was created, updated, or saved;
- return the prepared entry as clean Notion-compatible Markdown for manual copy/paste;
- keep missing fields omitted or clearly marked as missing outside the entry rather than fabricating content.

## Privacy and State Boundaries

- Universal Learning OS contains no Notion API client, credentials, tokens, or assigned target ids.
- Never expose tokens, connector internals, opaque page/database/workspace ids, or implementation metadata.
- Journal content is an external learner note, not canonical framework content, learner state, evidence, or a mastery record.
- A successful write MUST NOT mutate learner state or create evidence by itself.
- Any evidence mentioned in the entry MUST already come from observed learner activity and remain governed by `specification/LEARNING_LIFECYCLE.md`.

## Reusable Capability

Use `skills/notion-lesson-logger/SKILL.md` for the connector-backed preparation, discovery, duplicate handling, write confirmation, and fallback capability. This command remains the learner-invoked workflow.

## Failure Modes

- No meaningful lesson context is available.
- The connected Notion tool is unavailable or lacks permission.
- No journal target exists and the learner has not approved creating one.
- Matching entries are ambiguous.
- Search, update, database creation, or page creation is unsupported.

## Relationships

- Command behavior is governed by `specification/COMMAND_SPEC.md`.
- Agent-skill behavior is governed by `specification/SKILL_SPEC.md`.
- Lesson closure is governed by `specification/LEARNING_LIFECYCLE.md` and `core/learning-engine/LESSON_STRUCTURE.md`.
- Learner state is governed by `specification/STATE_SPEC.md`.
