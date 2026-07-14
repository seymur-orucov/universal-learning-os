# Project Pack File Budget

## Purpose

Define standard and compact Project Pack file budget models.

## Hard Practical Budget

For standard Project Pack design, assume a hard practical source-file budget of 25 files per generated Project Pack unless a future target environment explicitly allows more.

For compact/free Project Pack design, assume a hard source-file budget of 5 files for ChatGPT Projects on the Free plan.

## Why Budget Matters

ChatGPT Projects may accept a limited number of source files. A Project Pack MUST therefore prioritize files that directly affect runtime teaching behavior, evidence-based mastery, localization, selected commands, selected agent skills, and the chosen domain pack.

Exceeding the budget risks incomplete uploads, duplicated context, inconsistent behavior, and hidden omissions.

## File Counting Rules

- Each uploaded source file SHOULD count as one file.
- Project instructions SHOULD count as one file when represented as an uploaded document.
- Manifest, startup prompt, and continuation prompt SHOULD each count as one file if uploaded separately.
- A summarized file counts as one file, even when it represents multiple canonical sources.
- Future bundled context files SHOULD declare which canonical files they summarize or merge.

## Recommended Baseline Allocation

### Standard Profile

```text
1  PROJECT_INSTRUCTIONS.md
1  PACK_MANIFEST.md
1  STARTUP_PROMPT.md
1  CONTINUATION_PROMPT.md
2  framework summary files
3  core learning/mastery model files
3  command summary or selected command files
3  selected agent skill files
5  selected domain pack files
3  learner/session templates
2  spare/reserved files
Total: 25
```

### Compact/Free Profile

```text
1  PROJECT_INSTRUCTIONS.md
1  STARTUP_PROMPT.md
1  DOMAIN_CORE.md
1  COMMANDS_CORE.md
1  MENTOR_SKILLS_CORE.md
Total: 5
```

## Required/Core Files

A Standard Pack SHOULD reserve files for project instructions, manifest, startup prompt, continuation prompt, evidence/mastery rules, localization rules, and learner state boundaries.

A Compact/Free Pack SHOULD merge manifest-level traceability, evidence/mastery rules, localization rules, learner state boundaries, domain essentials, command behavior, and mentor skills into the 5 allowed files.

## Domain Files

Domain selection SHOULD prefer exact domain files for learning skill graph, syllabus, practice rules, assessment rules, and glossary or project guidance when they are central to the pack goal.

When a domain pack has many files, export SHOULD either:

- include a curated subset;
- create a domain summary file;
- or produce a bundled domain context file in a future stage.

This stage MUST NOT create bundled domain files.

## Command Files

Command selection SHOULD include only commands needed by the Project Pack goal. A lesson-focused pack MAY include `commands/START_LESSON.md`, `commands/CONTINUE_LESSON.md`, and `commands/PRACTICE.md`; an interview-focused pack MAY prioritize `commands/INTERVIEW.md` and `commands/ASSESS.md`.

The current standard profile preserves 25 filenames by merging `commands/SAVE_LESSON_TO_NOTION.md` into `COMMAND_CONTINUE_LESSON.md`. The compact profile includes it in `COMMANDS_CORE.md`.

## Agent Skill Files

Agent skill selection SHOULD include reusable agent skills required by the selected command behavior. Agent skills MUST NOT be treated as learner competencies.

The current standard profile preserves 25 filenames by merging `skills/notion-lesson-logger/SKILL.md` into `SKILL_LESSON_INSTRUCTOR.md`. The compact profile includes it in `MENTOR_SKILLS_CORE.md`.

## Templates

Project Packs SHOULD include only templates that support runtime use, such as session reports, next chat prompts, learner profile briefs, or project-specific output templates.

## Learner State Templates

Learner state templates MAY be included to guide state authoring, but reusable domain content MUST NOT be duplicated into learner state.

## Manifest and Prompts

Manifest, startup prompt, and continuation prompt SHOULD be included in most Project Packs because they make scope, limitations, and session continuity explicit.

## When to Summarize

Files SHOULD be summarized when:

- a canonical file is stable background rather than active runtime content;
- multiple files repeat boundaries already captured by a summary;
- including exact files would exceed the 25-file budget;
- the pack needs broad framework guidance but not every command or agent skill contract.

Summaries MUST declare which canonical files they represent and MUST NOT silently change semantics.

## When to Exclude

Files SHOULD be excluded when:

- they are ADRs and the pack is not for framework development;
- they are quality reviews not needed at runtime;
- they belong to unrelated domain packs;
- they define unused commands or agent skills;
- they duplicate information already covered by a selected summary.

## Pack Profiles

- `standard`: exactly 25 files for one domain and a normal learning workflow in the current generated-pack contract.
- `compact/free`: exactly 5 files for Free-plan ChatGPT Projects in the current generated-pack contract. It uses merged core files and must preserve learner-facing behavior and evidence guardrails.
- Minimal Pack: 12-15 files for one focused workflow or lesson track when the target environment allows more than 5 files but less than the standard profile.
- Standard Pack: legacy name for the `standard` profile.
- Full Pack: not recommended unless the target environment allows more than 25 files.
- Domain-Focused Pack: prioritizes domain skill graph, syllabus, practice, assessment, glossary, and project guidance.
- Interview-Focused Pack: prioritizes interview command, interviewer agent skill, assessment model, domain interview content, and session reports.
- Practice-Focused Pack: prioritizes practice command, practice coach agent skill, practice rules, review rules, evidence requirements, and review templates.

## Risks of Exceeding Budget

- Important evidence or learner state rules may be omitted accidentally.
- Domain content may be incomplete or inconsistent.
- Runtime instructions may conflict with canonical specifications.
- Multiple full domain packs may crowd out commands, templates, and mastery rules.

## Normative Requirements

- Standard Project Packs MUST assume a maximum of 25 source files unless a future target environment says otherwise.
- Compact/free Project Packs MUST assume a maximum of 5 source files.
- Project Packs MUST explain how files are counted.
- Summaries and curated subsets MAY be used under budget pressure.
- Summarized, merged, or excluded canonical files MUST be declared in the manifest for standard packs, or in merged core files for compact/free packs that omit a manifest to stay within the 5-file budget.
- File budget decisions MUST NOT weaken evidence, mastery, localization, learner state, or domain pack boundaries.

## OPEN QUESTION

- Should future automation enforce budget limits before export?
- Should token budget be tracked separately from file count?
