# SQL/PostgreSQL Standard Project Pack Manifest

## Pack Identity

- Pack id: `sql-postgresql-standard`
- Pack title: `SQL/PostgreSQL Mentor OS`
- Pack version: `0.1.0-stage-10.1`
- Source version: `repository-working-tree-stage-10.1`
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
21. `SQL_DOMAIN_CONTEXT.md`
22. `SQL_SKILL_GRAPH.md`
23. `SQL_SYLLABUS.md`
24. `SQL_PRACTICE_ASSESSMENT_RULES.md`
25. `SQL_GLOSSARY_PROJECTS.md`

## Canonical Sources Summarized

- `PROJECT_INSTRUCTIONS.md`: `templates/project-pack/PROJECT_INSTRUCTIONS_TEMPLATE.md`, `specification/FRAMEWORK_SPEC.md`, `specification/LOCALIZATION_SPEC.md`, `domains/sql-postgresql/DOMAIN.md`.
- `PACK_MANIFEST.md`: `exports/project-pack-spec/PACK_MANIFEST.md`, `templates/project-pack/PACK_MANIFEST_TEMPLATE.md`.
- `FILE_BUDGET.md`: `exports/project-pack-spec/FILE_BUDGET.md`, `templates/project-pack/FILE_BUDGET_TEMPLATE.md`.
- `STARTUP_PROMPT.md`: `templates/project-pack/STARTUP_PROMPT_TEMPLATE.md`.
- `CONTINUATION_PROMPT.md`: `templates/project-pack/CONTINUATION_PROMPT_TEMPLATE.md`, `templates/session/NEXT_CHAT_PROMPT_TEMPLATE.md`.
- `FRAMEWORK_CONTEXT.md`: `README.md`, `docs/VISION.md`, `docs/ARCHITECTURE.md`, `specification/FRAMEWORK_SPEC.md`, `specification/COMMAND_SPEC.md`, `specification/SKILL_SPEC.md`.
- `LEARNING_ENGINE_CONTEXT.md`: `core/learning-engine/README.md`, `core/learning-engine/SESSION_SELECTION.md`, `core/learning-engine/LESSON_STRUCTURE.md`, `core/learning-engine/PRACTICE_MODEL.md`, `core/learning-engine/ASSESSMENT_MODEL.md`, `core/learning-engine/REVIEW_MODEL.md`, `core/learning-engine/NEXT_ACTION_MODEL.md`.
- `EVIDENCE_MASTERY_CONTEXT.md`: `core/mastery-model/README.md`, `core/mastery-model/MASTERY_LEVELS.md`, `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- `LOCALIZATION_CONTEXT.md`: `specification/LOCALIZATION_SPEC.md`, `docs/TERMINOLOGY.md`, `domains/sql-postgresql/GLOSSARY.md`.
- `LEARNER_STATE_BOUNDARIES.md`: `specification/STATE_SPEC.md`, `learners/_template/README.md`, `learners/_template/STATE.md`, `learners/_template/EVIDENCE_LOG.md`, `learners/_template/REVIEW_QUEUE.md`, `learners/_template/SESSION_HISTORY.md`, `learners/_template/NEXT_ACTIONS.md`.
- `COMMAND_*`: corresponding files under `commands/`.
- `SKILL_*`: corresponding files under `skills/*/SKILL.md`.
- `SQL_DOMAIN_CONTEXT.md`: `domains/sql-postgresql/README.md`, `domains/sql-postgresql/DOMAIN.md`.
- `SQL_SKILL_GRAPH.md`: `domains/sql-postgresql/SKILL_GRAPH.md`.
- `SQL_SYLLABUS.md`: `domains/sql-postgresql/SYLLABUS.md`.
- `SQL_PRACTICE_ASSESSMENT_RULES.md`: `domains/sql-postgresql/PRACTICE_RULES.md`, `domains/sql-postgresql/ASSESSMENT_RULES.md`.
- `SQL_GLOSSARY_PROJECTS.md`: `domains/sql-postgresql/GLOSSARY.md`, `domains/sql-postgresql/PROJECTS.md`.

## Excluded Files

- English domain files: excluded because this pack is SQL/PostgreSQL-only.
- ADR files: excluded from runtime context; decisions are represented by this manifest and summaries.
- Quality review files: excluded from runtime context except source awareness in this manifest.
- Unselected commands: excluded to preserve file budget.
- Unselected agent skills: excluded to preserve file budget.
- Schemas, scripts, package files, and learner state: not included because this pack is Markdown runtime context only.

## Known Limitations

- This pack is manually generated and may need regeneration after canonical source changes.
- It summarizes several canonical files to fit 25 files.
- It does not include executable validation, schemas, SQL exercise files, or a real learner state file.
- It includes Northwind as practice guidance only, not a complete task bank.

## Boundary Statement

This Project Pack is derived from canonical repository files and MUST NOT silently change framework semantics. Evidence-based mastery, localization semantics, and learner state separation are preserved.
