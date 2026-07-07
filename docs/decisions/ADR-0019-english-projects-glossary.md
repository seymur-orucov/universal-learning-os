# ADR-0019: English Projects and Glossary Expansion

## Status

Accepted for Stage 9.4.

## Context

The English domain pack has an expanded learning skill graph, syllabus, practice rules, and assessment rules. Future speaking practice, interview preparation, workplace communication, writing review, pronunciation practice, and localized lesson authoring need stronger portfolio/project guidance and terminology support without creating full tasks, speaking task banks, interview question banks, dialogue banks, listening transcripts, shadowing scripts, lesson bodies, learner state, or executable tooling.

## Decision

- English portfolio and project guidance is expanded before full project tasks.
- Portfolio difficulty labels are separate from mastery records.
- The English glossary is expanded before full lesson authoring.
- The glossary supports Azerbaijani instruction with English target language as a learner or project preference.
- Speaking recordings or transcripts are not required by default.
- Privacy and evidence boundaries are explicit in portfolio guidance.

## Rationale

Portfolio categories give future sessions stable structures for selecting evidence-producing work while avoiding premature task generation. Speaking, interview, listening, pronunciation, writing, and workplace communication artifacts can be valuable evidence only when reviewed and connected to learning skills.

Portfolio difficulty helps select artifact complexity, but it MUST NOT be interpreted as learner mastery. Mastery belongs in learner state and requires evidence under `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

The glossary is expanded before lessons so future lesson authors can preserve English target terms consistently. Azerbaijani explanations MAY clarify terms when localization preferences require it, while English phrases, examples, interview answers, collocations, and learner output SHOULD remain in English where appropriate.

Speaking recordings and transcripts are not required by default because they create privacy and storage concerns. Summaries, reviewed notes, anonymized artifacts, or reviewer observations MAY preserve evidence value without storing sensitive audio or transcript data.

## Consequences

- Future English portfolio work can reference stable project categories and evidence rules.
- Future lessons can use glossary terms consistently without inventing terminology ad hoc.
- Portfolio artifacts can support evidence when reviewed, but artifact existence alone does not imply mastery.
- Privacy questions remain explicit before audio or transcript storage is introduced.

## Provisional Decisions

- Portfolio difficulty labels P1-P5 are domain guidance only.
- No full project tasks, task banks, dialogue banks, transcript banks, or shadowing scripts are created.
- Audio storage is optional and not required by the domain pack.
- Glossary entries do not yet include examples, CEFR tags, or pronunciation notes.

## OPEN QUESTION

- Which English portfolio category should become the first fully specified project?
- What privacy policy is required before storing optional audio or transcripts?
- Should glossary entries include examples and CEFR guidance before lesson authoring?
