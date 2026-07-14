# Stage 29.0 Downloadable Obsidian Lesson Notes Manual Acceptance Test

## Purpose

Verify real runtime artifact creation/download, portable Obsidian behavior, localization, unfinished-lesson truthfulness, fallback, Notion routing/alias compatibility, regeneration, and unchanged learning-state semantics.

## Preconditions

- Use any regenerated standard or compact pack in a ChatGPT Project that can create downloadable files.
- Have a local Obsidian installation or another Markdown viewer for artifact checks.
- For Notion cases, connect a safe test workspace with intended permissions.
- Record learner state, evidence, and mastery before the test.

## Scenarios

### 1. Generic Closure Timing

Start a lesson and stop during explanation, an unanswered guided check, and unfinished practice.

- [ ] `SAVE_LESSON — Dərsi Obsidian Markdown faylı kimi yüklə və ya Notion-a yaz` is absent before meaningful closure.
- [ ] No file or connector action runs automatically.
- [ ] At summary or another meaningful stopping point, the generic action appears once.
- [ ] The old Notion-specific action is not shown as a second suggestion.

### 2. Default Downloadable Artifact

At meaningful closure, invoke `SAVE_LESSON` without a target.

- [ ] The runtime creates a real downloadable UTF-8 `.md` artifact.
- [ ] The assistant names or links the artifact only after successful creation.
- [ ] A known lesson number produces `Lesson NN - English Title.md`.
- [ ] The content opens as readable UTF-8 Markdown.

### 3. Open or Import in Obsidian

Download the artifact and place it in a test vault manually.

- [ ] Obsidian opens the note without repair.
- [ ] YAML frontmatter is valid and contains `type`, `title`, `mastery`, `status`, `plos`, and `lesson`.
- [ ] Tables, callouts, fenced code, restrained wikilinks, and recall sections render without a required plugin.
- [ ] The assistant did not claim to find, access, or write the vault.

### 4. Localization and Domain Adaptation

Export notes from English grammar and one technical domain.

- [ ] Explanatory content follows the configured instruction language.
- [ ] Important domain terminology follows the terminology language.
- [ ] English uses suitable comparison/usage structure; the technical note uses appropriate code, query, complexity, or design structure.
- [ ] Unsupported and empty sections are omitted.

### 5. Unfinished Lesson

Invoke `SAVE_LESSON` at a meaningful pause before practice is complete.

- [ ] Frontmatter remains `status: in-progress`.
- [ ] `mastery` remains `not-assessed` unless a prior assessment-derived value already exists.
- [ ] The note does not invent learner work, mistakes, evidence, assessment results, completion, or next steps.

### 6. Missing Lesson Number and Filename Fallbacks

Repeat with no grounded lesson number, then no reliable title, then neither title nor date.

- [ ] Unknown lesson number is omitted from the filename.
- [ ] Filename characters are safe and ASCII/English.
- [ ] With date only, the filename is `Lesson Notes - YYYY-MM-DD.md`.
- [ ] With neither title nor date, the filename is `Lesson Notes.md`.

### 7. Unavailable File Capability

Use a runtime that cannot create the artifact, or simulate a failed creation.

- [ ] The assistant explains the limitation without claiming a download exists.
- [ ] It states the intended filename.
- [ ] It returns the complete note in exactly one fenced block for manual saving.

### 8. Notion Routing and Alias

Invoke `SAVE_LESSON NOTION`, then separately invoke `SAVE_LESSON_TO_NOTION`.

- [ ] Both use the same normalized lesson content and existing Notion discovery/duplicate rules.
- [ ] A create/update claim appears only after connector confirmation.
- [ ] Connector failure returns complete Notion-compatible Markdown without claiming a write.
- [ ] The alias remains callable but never becomes a second normal closure suggestion.

### 9. Stable Regeneration

Regenerate the Obsidian note in the same lesson session.

- [ ] The new artifact uses the same stable filename.
- [ ] The assistant says it supersedes the earlier session artifact.
- [ ] It does not claim that a local or vault file was found, overwritten, deleted, or updated.

### 10. Learning-State Boundary

Compare recorded evidence, mastery, and learner state before and after all cases.

- [ ] Exporting or downloading created no evidence.
- [ ] No mastery or completion claim was created by the note workflow.
- [ ] Learner state is unchanged unless separately justified by observed activity or explicit learner instruction.

## Repository Checks

- [ ] All eight standard packs contain exactly 25 files.
- [ ] All eight compact packs contain exactly five files.
- [ ] `node --test tools/ulos-cli/test/*.test.js` passes.
- [ ] `node tools/ulos-cli/src/index.js validate` passes.
- [ ] `node tools/ulos-cli/src/index.js validate-learner` passes.
- [ ] Every pack inspects successfully.
- [ ] `git diff -- domains learners` is empty.
- [ ] Forbidden secret/id/path searches and `git diff --check` pass.

## Limitation

Repository automation cannot prove live ChatGPT attachment/download behavior, local Obsidian opening/import, or connected Notion permissions and writes.
