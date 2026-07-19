# Stage 28.0 Optional Notion Lesson Journal Manual Acceptance Test

## Purpose

Verify learner-facing timing, explicit invocation, connected Notion behavior, fallback, duplicate handling, and unchanged evidence/mastery/state semantics.

## Preconditions

- Use any regenerated standard or compact pack in a ChatGPT Project.
- For live-write cases, connect a test Notion workspace with safe permissions.
- Record learner state and mastery before the test.

## Scenarios

### 1. Lesson Start and Explanation

Start a lesson and continue through explanation.

- [ ] The generic `SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz` line is absent.
- [ ] No Notion tool call occurs.

### 2. Guided and Unfinished Practice

Answer a guided check and begin practice without finishing it.

- [ ] The optional line remains absent while learner work is unfinished.
- [ ] No automatic save occurs.

### 3. Meaningful Closure

Reach a lesson summary or meaningful stopping point.

- [ ] The generic optional line appears once.
- [ ] The `SAVE_LESSON_TO_NOTION` alias is not shown as a second suggestion.
- [ ] Merely displaying it does not call Notion.

### 4. Explicit Save and Confirmed Success

Invoke `SAVE_LESSON NOTION` with an accessible journal; repeat once with the `SAVE_LESSON_TO_NOTION` compatibility alias.

- [ ] The title uses available date, domain, and lesson identity deterministically.
- [ ] Missing values are omitted rather than invented.
- [ ] A supplied target is preferred; otherwise an exact or clear `PLOS Learning Journal` is searched.
- [ ] `created` or `updated` is reported only after connector confirmation.
- [ ] Tokens, connector internals, and opaque target ids are not shown.
- [ ] Both command forms use the same shared grounded summary and Notion workflow.

### 5. Missing Journal

Use a workspace without a matching journal.

- [ ] The entry is prepared first.
- [ ] The assistant asks before creating a top-level journal.
- [ ] After approval, a database is preferred when supported; otherwise a parent page with child lesson pages is used.

### 6. Unavailable Connector Fallback

Disconnect or deny Notion access, then invoke the command.

- [ ] The assistant explains the failure without claiming a write.
- [ ] Complete, clean Notion-compatible Markdown is returned for copy/paste.

### 7. Repeated Invocation

Invoke the command again for the same date/domain/lesson.

- [ ] One unambiguous match is updated.
- [ ] Multiple plausible matches cause a learner-choice question.
- [ ] If update is unsupported, the assistant asks before creating a duplicate.

### 8. Learning-State Boundary

Compare evidence, mastery, and learner state before and after all scenarios.

- [ ] The journal write itself created no evidence.
- [ ] No learning skill was marked mastered because the entry was saved.
- [ ] Learner state is unchanged unless separately justified by observed activity or explicit learner instruction.

## Repository Checks

- [ ] Every registry domain has one standard pack with 25 files and one compact pack with 5 files.
- [ ] Canonical `domains/**` files are unchanged by Stage 28.0.
- [ ] `node --test tools/ulos-cli/test/*.test.js`, `node tools/ulos-cli/src/index.js validate`, `node tools/ulos-cli/src/index.js validate-learner`, and `git diff --check` pass.

## Limitation

Live connector success, permissions, target discovery, and duplicate updates cannot be automated by repository tests.
