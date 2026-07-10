# Standard Pack Source Mapping

This mapping defines the source-to-output plan used by standard pack generation.

## Domain Prefix

Current prefixes:

- `sql-postgresql` -> `SQL`
- `english` -> `ENGLISH`
- `javascript` -> `JAVASCRIPT`
- `typescript` -> `TYPESCRIPT`
- `dsa` -> `DSA`
- `frontend-system-design` -> `FRONTEND_SYSTEM_DESIGN`
- `nodejs` -> `NODEJS`

Future default: uppercase the domain id and replace non-alphanumeric separators with `_`, unless a domain config registers a shorter explicit prefix.

## 25 Output Files

### PROJECT_INSTRUCTIONS.md

Source:
- `exports/project-pack-spec/PROJECT_PACK_SPEC.md`
- `specification/FRAMEWORK_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `specification/LOCALIZATION_SPEC.md`
- `domains/<domain>/DOMAIN.md`

### PACK_MANIFEST.md

Source:
- `exports/project-pack-spec/PACK_MANIFEST.md`
- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`
- all selected source files for the generated pack

### FILE_BUDGET.md

Source:
- `exports/project-pack-spec/FILE_BUDGET.md`
- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`

### STARTUP_PROMPT.md

Source:
- `templates/project-pack/STARTUP_PROMPT_TEMPLATE.md`
- `domains/<domain>/DOMAIN.md`
- `specification/LOCALIZATION_SPEC.md`

### CONTINUATION_PROMPT.md

Source:
- `templates/project-pack/CONTINUATION_PROMPT_TEMPLATE.md`
- `specification/STATE_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`

### FRAMEWORK_CONTEXT.md

Source:
- `specification/FRAMEWORK_SPEC.md`
- `docs/ARCHITECTURE.md`
- `docs/VISION.md`

### LEARNING_ENGINE_CONTEXT.md

Source:
- `specification/LEARNING_LIFECYCLE.md`
- `core/learning-engine/`

### EVIDENCE_MASTERY_CONTEXT.md

Source:
- `core/mastery-model/MASTERY_LEVELS.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
- `specification/LEARNING_LIFECYCLE.md`

### LEARNER_STATE_BOUNDARIES.md

Source:
- `specification/STATE_SPEC.md`
- `learners/README.md` when present
- selected learner state templates when needed

### LOCALIZATION_CONTEXT.md

Source:
- `specification/LOCALIZATION_SPEC.md`
- `domains/<domain>/DOMAIN.md`
- `domains/<domain>/GLOSSARY.md`

### COMMAND_START_LESSON.md

Source:
- `commands/START_LESSON.md`

### COMMAND_CONTINUE_LESSON.md

Source:
- `commands/CONTINUE_LESSON.md`

### COMMAND_PRACTICE.md

Source:
- `commands/PRACTICE.md`

### COMMAND_REVIEW.md

Source:
- `commands/REVIEW.md`

### COMMAND_ASSESS.md

Source:
- `commands/ASSESS.md`

### COMMAND_SHOW_PROGRESS.md

Source:
- `commands/SHOW_PROGRESS.md`

### SKILL_LESSON_INSTRUCTOR.md

Source:
- `skills/lesson-instructor/SKILL.md`

### SKILL_PRACTICE_COACH.md

Source:
- `skills/practice-coach/SKILL.md`

### SKILL_HOMEWORK_REVIEWER.md

Source:
- `skills/homework-reviewer/SKILL.md`

### SKILL_PROGRESS_MANAGER.md

Source:
- `skills/progress-manager/SKILL.md`

### <DOMAIN>_DOMAIN_CONTEXT.md

Source:
- `domains/<domain>/DOMAIN.md`
- `domains/<domain>/README.md`
- optional selected domain overview files

### <DOMAIN>_SYLLABUS.md

Source:
- `domains/<domain>/SYLLABUS.md`

### <DOMAIN>_SKILL_GRAPH.md

Source:
- `domains/<domain>/SKILL_GRAPH.md`

### <DOMAIN>_GLOSSARY_PROJECTS.md

Source:
- `domains/<domain>/GLOSSARY.md`
- `domains/<domain>/PROJECTS.md`

### <DOMAIN>_PRACTICE_ASSESSMENT_RULES.md

Source:
- `domains/<domain>/PRACTICE_RULES.md`
- `domains/<domain>/ASSESSMENT_RULES.md`
