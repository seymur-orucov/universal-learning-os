# ADR-0017: English Syllabus Expansion

## Status

Accepted for Stage 9.2.

## Context

The English pilot domain pack now has an expanded learning skill graph. The next step is to define a professional `english.main` syllabus that maps stages and lesson outlines to stable learning skill ids without creating full lesson content, dialogues, listening transcripts, shadowing scripts, exercise banks, learner state, or project task files.

## Decision

- The English syllabus is expanded after the learning skill graph.
- Lesson outlines map directly to `english.*` learning skill ids from `domains/english/SKILL_GRAPH.md`.
- Lesson outlines are created before full lesson content, dialogues, transcripts, shadowing scripts, or exercise banks.
- The main track is speaking-first but not speaking-only.
- The main track is limited to 48 concise lesson outlines.
- Review, assessment, portfolio, and interview stages are included as part of the framework-aligned learning path.

## Rationale

Expanding the syllabus after the learning skill graph keeps lesson sequencing tied to reusable learner competencies instead of broad topic labels. Mapping lessons to learning skill ids makes future practice, assessment, review, portfolio work, and learner state references more precise.

Creating lesson outlines before full content allows sequencing, scope, evidence expectations, and review checkpoints to be reviewed before expensive authoring begins. It also prevents premature generation of fake dialogues, transcripts, shadowing scripts, and exercise banks.

The main track is speaking-first because the domain goal emphasizes professional spoken communication, interviews, meetings, and technical explanation. It is not speaking-only because durable professional English also requires grammar accuracy, vocabulary activation, listening, pronunciation, writing, review, and maintenance.

The 40-55 lesson target keeps the main track broad enough for B1-to-C1 progression while limiting overgeneration. Review, assessment, portfolio, and interview stages preserve evidence-based mastery and support realistic transfer without creating learner state.

## Consequences

- Future lesson authoring can proceed against a stable 48-lesson sequence.
- Practice and assessment can select learning skills directly from lesson outlines.
- Portfolio milestones can reference project categories without creating full project tasks.
- Learner progress remains outside the domain pack and belongs in learner state.

## Provisional Decisions

- The `english.main` track currently contains 48 lesson outlines.
- CEFR alignment remains directional and is not yet formalized in rubrics.
- Portfolio categories remain placeholders until future project specification stages.
- Human conversation evidence requirements remain unresolved.

## OPEN QUESTION

- Should `english.main` later split into focused speaking, workplace, interview, and writing tracks?
- Which lessons require human conversation evidence for M5 or M6?
- Should CEFR descriptors be mapped to lessons, stages, learning skills, or assessment rules?
