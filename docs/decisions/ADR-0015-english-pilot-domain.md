# ADR-0015: English Pilot Domain

## Status

Accepted for Stage 9.0.

## Context

The repository has one technical pilot domain pack for SQL/PostgreSQL. A second pilot domain is needed to test whether the framework can support a language-learning domain with speaking, listening, pronunciation, writing, workplace communication, interview preparation, and evidence-based assessment.

## Decision

- English is created as the second pilot domain pack.
- The domain focuses on English for Software Engineers rather than generic English only.
- The domain starts as a concise skeleton before full learning skill graph expansion, syllabus expansion, lessons, dialogue banks, transcripts, or exercise banks.
- Speaking-first learning is supported, but speaking exposure alone MUST NOT imply mastery.
- Localization supports Azerbaijani instruction with English target language examples as a learner or project preference.

## Rationale

English for Software Engineers is a strong second pilot because it tests framework behavior beyond structured technical querying. It requires spoken output, listening evidence, pronunciation feedback, professional writing, interviews, and workplace communication. These outputs can be assessed with evidence, but they also create privacy and capture questions that should be handled deliberately.

Focusing on software engineering contexts keeps the domain practical and aligned with likely learner needs: meetings, status updates, blockers, technical explanations, interviews, documentation, and remote communication. Starting as a skeleton prevents premature generation of fake lessons, dialogue banks, shadowing scripts, vocabulary lists, or CEFR claims.

A speaking-first approach fits the evidence model when learner output is captured or summarized and reviewed. Exposure to English, generated dialogues, reading scripts, or shadowing prompts MUST NOT create mastery claims without evidence.

Localization follows `specification/LOCALIZATION_SPEC.md`: instruction MAY be Azerbaijani for the initial project preference, while English examples, phrases, vocabulary, and learner output SHOULD remain in English where appropriate. Azerbaijani is not a global framework default.

## Consequences

- The repository can now test domain pack contracts against both technical and language-learning domains.
- Future stages can expand English learning skills, syllabus, practice, assessment, projects, and glossary incrementally.
- Speaking and listening evidence capture must be designed carefully before real learner state or assessment workflows are used.
- CEFR alignment remains possible but is not finalized in this skeleton.

## Provisional Decisions

- The domain version is `0.1.0-draft`.
- The initial tracks are main, speaking, interview, workplace, and writing.
- CEFR labels guide the audience and goals but are not yet formal assessment rubrics.
- No audio storage, dialogue bank, transcript bank, or exercise bank is created yet.

## OPEN QUESTION

- Should future English assessment explicitly map framework mastery levels to CEFR descriptors?
- How should spoken evidence be captured or summarized while protecting learner privacy?
- Which English track should receive the first expanded syllabus and learning skill graph?
