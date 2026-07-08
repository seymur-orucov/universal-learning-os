# JavaScript Standard Project Pack Manifest

## Pack Identity

- Pack id: `javascript-standard`
- Pack title: `JavaScript Mentor OS`
- Pack version: `0.1.0-stage-11.0`
- Source version: `repository-working-tree-stage-11.0`
- Target environment: ChatGPT Projects
- File budget: 25 files

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
21. `JAVASCRIPT_DOMAIN_CONTEXT.md`
22. `JAVASCRIPT_SKILL_GRAPH.md`
23. `JAVASCRIPT_SYLLABUS.md`
24. `JAVASCRIPT_PRACTICE_ASSESSMENT_RULES.md`
25. `JAVASCRIPT_GLOSSARY_PROJECTS.md`

## Canonical Sources Summarized

- Framework and command context: `specification/`, `commands/`, and selected `skills/`.
- Project Pack model: `exports/project-pack-spec/`.
- JavaScript domain files: `domains/javascript/`.
- Domain factory model: `docs/domain-pack-factory.md` and `docs/decisions/ADR-0031-new-domain-pack-factory.md`.

## Excluded Files

- SQL/PostgreSQL and English domain files are excluded because this pack is JavaScript-only.
- Learner state is excluded.
- ADR files are excluded from runtime context except summary references in this manifest.
- Full canonical specs are summarized to preserve the file budget.

## Boundary Statement

This Project Pack is derived from canonical repository files and MUST NOT silently change framework semantics.
