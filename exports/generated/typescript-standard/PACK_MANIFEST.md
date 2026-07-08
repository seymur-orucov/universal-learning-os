# TypeScript Standard Project Pack Manifest

## Pack Identity

- Pack id: `typescript-standard`
- Pack title: `TypeScript Mentor OS`
- Pack version: `0.1.0-stage-12.0`
- Source version: `repository-working-tree-stage-12.0`
- Target environment: ChatGPT Projects Plus/Go or higher
- Profile: `standard`
- File budget: exactly 25 files

## Included Files

1. `PROJECT_INSTRUCTIONS.md`
2. `PACK_MANIFEST.md`
3. `FILE_BUDGET.md`
4. `STARTUP_PROMPT.md`
5. `CONTINUATION_PROMPT.md`
6. `FRAMEWORK_CONTEXT.md`
7. `LEARNING_ENGINE_CONTEXT.md`
8. `EVIDENCE_MASTERY_CONTEXT.md`
9. `LOCALIZATION_CONTEXT.md`
10. `LEARNER_STATE_BOUNDARIES.md`
11. `COMMAND_START_LESSON.md`
12. `COMMAND_CONTINUE_LESSON.md`
13. `COMMAND_PRACTICE.md`
14. `COMMAND_REVIEW.md`
15. `COMMAND_ASSESS.md`
16. `COMMAND_SHOW_PROGRESS.md`
17. `SKILL_LESSON_INSTRUCTOR.md`
18. `SKILL_PRACTICE_COACH.md`
19. `SKILL_HOMEWORK_REVIEWER.md`
20. `SKILL_PROGRESS_MANAGER.md`
21. `TYPESCRIPT_DOMAIN_CONTEXT.md`
22. `TYPESCRIPT_SKILL_GRAPH.md`
23. `TYPESCRIPT_SYLLABUS.md`
24. `TYPESCRIPT_PRACTICE_ASSESSMENT_RULES.md`
25. `TYPESCRIPT_GLOSSARY_PROJECTS.md`

## Canonical Sources Summarized

- Framework and command context: `specification/`, `commands/`, and selected `skills/`.
- Project Pack model: `exports/project-pack-spec/`.
- TypeScript domain files: `domains/typescript/DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, `PROJECTS.md`, `GLOSSARY.md`, and `QUALITY_REVIEW.md`.
- Domain factory model: `docs/domain-pack-factory.md` and `docs/decisions/ADR-0033-typescript-domain-pack.md`.

## Generated Domain File Traceability

- `TYPESCRIPT_DOMAIN_CONTEXT.md` derives from `domains/typescript/DOMAIN.md`.
- `TYPESCRIPT_SKILL_GRAPH.md` derives from `domains/typescript/SKILL_GRAPH.md`.
- `TYPESCRIPT_SYLLABUS.md` derives from `domains/typescript/SYLLABUS.md`.
- `TYPESCRIPT_PRACTICE_ASSESSMENT_RULES.md` derives from `domains/typescript/PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, and `QUALITY_REVIEW.md`.
- `TYPESCRIPT_GLOSSARY_PROJECTS.md` derives from `domains/typescript/GLOSSARY.md` and `PROJECTS.md`.

## Excluded Files

- SQL/PostgreSQL, English, and JavaScript domain files are excluded because this pack is TypeScript-only.
- Learner state is excluded.
- Full canonical specs are summarized to preserve the 25-file budget.

## Boundary Statement

This Project Pack is derived from canonical repository files and MUST NOT silently change framework semantics.
