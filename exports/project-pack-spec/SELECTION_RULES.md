# Project Pack Selection Rules

## Purpose

Define how files are selected for a Project Pack under the 25-file limit.

## Priority Order

Project Pack selection SHOULD use this priority order:

1. Project instructions and manifest.
2. Core framework summary.
3. Evidence/mastery rules.
4. Localization rules.
5. Command behavior needed by the project.
6. Domain pack content required for the track.
7. Agent skills needed by project behavior.
8. Learner/session templates.
9. Optional glossary/project files if budget allows.

## Selection Rules

- Prefer canonical files unless too many files would exceed the budget.
- Prefer summaries for stable background.
- Prefer exact files for domain-specific learning skills, syllabus, practice rules, and assessment rules.
- Do not include quality review files in runtime packs unless needed for audit or development.
- Do not include ADRs in runtime packs unless the pack is for framework development.
- Do not include both broad and redundant summaries unless budget allows.
- Avoid mixing multiple full domain packs in one 25-file pack.
- For two domains, create separate Project Packs or a summarized multi-domain pack.
- Include only command files that support the selected workflow.
- Include only agent skill files needed by selected commands.
- Include learner/session templates only when they will be used at runtime.

## Domain Selection Guidance

For domain-focused learning, exact domain files SHOULD usually include:

- Domain identity.
- Learning skill graph.
- Syllabus.
- Practice rules.
- Assessment rules.

Glossary or project guidance MAY replace another file when the pack is terminology-heavy or project-focused.

## Exclusion Guidance

Files SHOULD be excluded when they are unrelated to the selected domain, workflow, or runtime behavior. Exclusion MUST be documented when a user might reasonably expect the file to be present.

## Normative Requirements

- Selection MUST preserve evidence-based mastery.
- Selection MUST preserve localization semantics.
- Selection MUST preserve learner state separation.
- Selection MUST NOT silently change domain pack meaning.
- Summaries MUST cite or list their canonical source files.

## OPEN QUESTION

- What should the default Standard Pack include for SQL/PostgreSQL?
- What should the default Standard Pack include for English?
