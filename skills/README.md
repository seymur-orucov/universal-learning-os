# Agent Skills

Agent skills are reusable agent capabilities stored under `skills/`.

They are not learning skills. Learning skills are learner competencies that belong later in domain skill graphs. Agent skills may be orchestrated by commands, but commands remain user-invoked workflows governed by `specification/COMMAND_SPEC.md`.

Agent skills are governed by `specification/SKILL_SPEC.md`, `docs/decisions/ADR-0002-agent-skills-vs-learning-skills.md`, and `specification/LOCALIZATION_SPEC.md`.

## Initial Agent Skills

- `skills/curriculum-architect/SKILL.md`: designs learning structure, syllabus sequences, prerequisites, and learning skill graphs.
- `skills/lesson-instructor/SKILL.md`: delivers lessons using the standard lesson structure.
- `skills/practice-coach/SKILL.md`: runs practice sessions and guides learner attempts.
- `skills/homework-reviewer/SKILL.md`: reviews submitted homework or exercises.
- `skills/assessment-engine/SKILL.md`: evaluates competence against evidence and assessment dimensions.
- `skills/progress-manager/SKILL.md`: summarizes progress and proposes next actions.
- `skills/project-mentor/SKILL.md`: guides realistic learning projects.
- `skills/interviewer/SKILL.md`: runs interview-style learning sessions.
- `skills/notion-lesson-logger/SKILL.md`: prepares and writes an explicitly requested lesson journal entry through a connected Notion tool, or returns a Markdown fallback.

## Command Orchestration

Commands MAY orchestrate one or more agent skills to satisfy a user-invoked workflow. Agent skills SHOULD provide reusable capability boundaries; commands SHOULD decide when and why to invoke them.

## Boundaries

- Agent skills MUST NOT be treated as learner competencies.
- Agent skills MUST NOT silently modify learner state.
- Agent skills SHOULD propose state updates rather than applying them.
- Agent skills MUST distinguish lesson exposure from demonstrated mastery.

## OPEN QUESTION

- Should future agent skill contracts include machine-readable manifests in addition to Markdown?
