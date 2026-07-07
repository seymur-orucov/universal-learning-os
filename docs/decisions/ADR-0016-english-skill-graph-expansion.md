# ADR-0016: English Skill Graph Expansion

## Status

Accepted for Stage 9.1.

## Context

The English pilot domain pack needs a professional learning skill graph before full syllabus expansion, lesson authoring, exercises, dialogue banks, listening transcripts, shadowing scripts, learner state, or project task files are created. The graph must support English for Software Engineers with B1-to-C1 progression, speaking-first learning, workplace communication, interview English, grammar accuracy, vocabulary activation, listening, pronunciation, and technical explanation.

## Decision

- The English learning skill graph is expanded before full syllabus and lesson authoring.
- Learning skills are organized by communication stages rather than only grammar topics.
- Learning skill identifiers are scoped with the `english.*` prefix.
- Speaking-first learning requires evidence before any mastery claim.
- Generated dialogues, shadowing prompts, reading scripts, lesson exposure, or speaking participation do not imply mastery.
- Localization supports Azerbaijani instruction with English target language as a learner or project preference.

## Rationale

Expanding the learning skill graph first gives future syllabus, practice, assessment, review, project, and interview workflows a stable competency map. English learning for software engineers is not only grammar sequencing; it requires integrated communication competencies such as status updates, meeting participation, technical explanation, interview responses, writing, listening, and pronunciation.

Scoped `english.*` identifiers prevent collisions with other domain packs and allow learner state to reference English learning skills without duplicating domain content. Speaking-first learning fits the framework only when learner output is captured, summarized, or reviewed. Passive exposure to generated content or repeated shadowing without review cannot justify mastery because mastery requires evidence defined by `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

Localization follows `specification/LOCALIZATION_SPEC.md`: explanations MAY be in Azerbaijani for the initial project preference, while English examples, phrases, collocations, target language output, and interview answers SHOULD remain in English where appropriate. Azerbaijani is not a global framework default.

## Consequences

- Future English syllabus expansion can map lessons to stable learning skill ids.
- Practice and assessment can target observable competencies instead of broad topic labels.
- Learner state can later reference English learning skills without duplicating the domain pack.
- Speaking, listening, and pronunciation evidence capture remains a design concern for later stages.

## Provisional Decisions

- The graph uses staged communication progression rather than a grammar-only order.
- CEFR labels remain directional and are not yet formal rubrics.
- Audio storage, dialogue banks, listening transcripts, and shadowing scripts are not introduced.
- Some advanced B2/C1 competencies are grouped to keep the graph concise.

## OPEN QUESTION

- Should CEFR descriptors be mapped at the learning skill level or assessment-rule level?
- Which English learning skills require human conversation evidence for M5 or M6?
- How should spoken evidence be captured or summarized while protecting learner privacy?
