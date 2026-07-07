# English Standard Project Pack Manifest

## Pack Identity

- Pack id: `english-standard`
- Pack title: `English Mentor OS`
- Pack version: `0.1.0-stage-10.2`
- Source version: `repository-working-tree-stage-10.3-validation`
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
21. `ENGLISH_DOMAIN_CONTEXT.md`
22. `ENGLISH_SKILL_GRAPH.md`
23. `ENGLISH_SYLLABUS.md`
24. `ENGLISH_PRACTICE_ASSESSMENT_RULES.md`
25. `ENGLISH_GLOSSARY_PROJECTS.md`

## Canonical Sources Summarized

- Framework and command context: `specification/FRAMEWORK_SPEC.md`, `specification/COMMAND_SPEC.md`, `specification/SKILL_SPEC.md`.
- Learning engine context: `core/learning-engine/`.
- Evidence/mastery context: `core/mastery-model/`.
- Localization context: `specification/LOCALIZATION_SPEC.md`, `docs/TERMINOLOGY.md`, `domains/english/GLOSSARY.md`.
- Learner state boundaries: `specification/STATE_SPEC.md`, `learners/_template/`.
- Command files: selected files under `commands/`.
- Agent skill files: selected files under `skills/`.
- English domain files: `domains/english/README.md`, `DOMAIN.md`, `SKILL_GRAPH.md`, `SYLLABUS.md`, `PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, `PROJECTS.md`, `GLOSSARY.md`.

## Excluded Files

- SQL/PostgreSQL domain files: excluded because this pack is English-only.
- ADR files: excluded from runtime context.
- Quality review files: excluded from runtime context except source awareness in this manifest.
- Unselected commands and agent skills: excluded to preserve file budget.
- Schemas, scripts, package files, and learner state: not included.

## Known Limitations

- This pack is manually generated as a Stage 10.2 recovery during Stage 10.3 validation.
- It summarizes canonical files to fit 25 files.
- It does not include dialogue banks, listening transcripts, shadowing scripts, interview question banks, real learner state, or audio files.

## Boundary Statement

This Project Pack is derived from canonical repository files and MUST NOT silently change framework semantics.
