# English Domain Quality Review

## Review Date

`<review-date>`

## Reviewed Files

- `domains/english/README.md`
- `domains/english/DOMAIN.md`
- `domains/english/SYLLABUS.md`
- `domains/english/SKILL_GRAPH.md`
- `domains/english/PRACTICE_RULES.md`
- `domains/english/ASSESSMENT_RULES.md`
- `domains/english/PROJECTS.md`
- `domains/english/GLOSSARY.md`

## Audit Scope

This Stage 9.5 quality gate reviews the English domain pack for cross-reference integrity, staged syllabus alignment, practice and assessment consistency, portfolio guidance, glossary boundaries, evidence-based mastery, privacy boundaries, and localization consistency.

This review MUST NOT create lessons, exercises, dialogue banks, listening transcripts, shadowing scripts, interview question banks, learner state, or assessment results.

## Cross-Reference Integrity Summary

- Learning skill ids referenced in `domains/english/SYLLABUS.md`, `domains/english/PRACTICE_RULES.md`, `domains/english/ASSESSMENT_RULES.md`, `domains/english/PROJECTS.md`, and `domains/english/GLOSSARY.md` were checked against `domains/english/SKILL_GRAPH.md`.
- No missing referenced learning skill ids were found during this review.
- Project ids in `domains/english/PROJECTS.md` follow the `english.project.<name>` pattern and are not learner competencies.

## Syllabus Alignment Summary

- `domains/english/SYLLABUS.md` aligns with the staged learning skill graph in `domains/english/SKILL_GRAPH.md`.
- Every lesson outline targets one or more existing `english.*` learning skill ids.
- Lesson outlines remain concise and do not include full lesson bodies, dialogue scripts, listening transcripts, shadowing scripts, or exercises.
- Stage 11 remains portfolio milestone guidance.
- Stage 12 remains review, assessment, and maintenance guidance and does not record learner progress.

## Practice and Assessment Alignment Summary

- Practice types align with `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment dimensions align with `core/learning-engine/ASSESSMENT_MODEL.md`.
- Review trigger examples point to valid English learning skills.
- Difficulty labels D1-D5 are practice guidance only and MUST NOT be treated as mastery records.
- Mastery recommendations require evidence under `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Speaking participation, passive listening, shadowing repetition, generated scripts, generated dialogues, and lesson completion MUST NOT imply mastery.

## Project and Portfolio Guidance Summary

- Portfolio categories in `domains/english/PROJECTS.md` reference valid English learning skills.
- Project ids follow `english.project.<name>`.
- Portfolio evidence rules do not overclaim mastery from artifact existence.
- Portfolio progress belongs in learner state, not this domain pack.
- Audio storage and transcript storage are not required by default.

## Glossary Alignment Summary

- Glossary terms preserve English target terms.
- Azerbaijani explanations clarify terms without replacing English target language unnaturally.
- Related learning skill references exist in `domains/english/SKILL_GRAPH.md`.
- The glossary does not become lesson content, a vocabulary drill, a script, a transcript, or an assessment record.
- The glossary does not override `specification/LOCALIZATION_SPEC.md`.

## Evidence and Learner State Boundary Summary

- English domain files contain reusable domain pack content and MUST NOT contain learner-specific progress.
- English domain files MUST NOT contain learner mastery records.
- Lesson completion, generated dialogues, generated scripts, passive listening, and shadowing repetition MUST NOT imply mastery.
- Learner progress belongs in learner state governed by `specification/STATE_SPEC.md`.
- Evidence-based mastery is preserved through references to `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Privacy Boundary Summary

- The domain pack does not require audio storage by default.
- The domain pack does not require transcript storage by default.
- Summarized, reviewed, or anonymized output MAY support evidence when it is sufficient for assessment.
- Private workplace content SHOULD NOT be stored in reusable domain content.
- Privacy policy decisions remain required before any future audio or transcript storage is introduced.

## Localization Consistency Summary

- Azerbaijani is not hardcoded as the global framework language.
- The domain pack MAY support Azerbaijani instruction with English target language as a learner or project preference.
- English target examples, phrases, collocations, interview answers, and learner outputs SHOULD remain in English where appropriate.
- Localization preferences MUST NOT change evidence, mastery, or learner state semantics.

## Issues Found

- No missing learning skill references were found.
- No forbidden lesson, exercise, dialogue, transcript, shadowing, interview question, or learner state artifacts were found.
- `domains/english/README.md` had stale file descriptions from earlier skeleton stages.

## Changes Made

- Added this quality review file.
- Updated `domains/english/README.md` to reference this quality review and reflect the expanded domain files.
- Added `docs/decisions/ADR-0020-english-domain-quality-gate.md`.

## Remaining Open Questions

- Should CEFR descriptors be mapped to lessons, learning skills, assessment rules, or a separate rubric file?
- Which English learning skills require human conversation evidence for M5 or M6?
- What privacy policy is required before optional audio or transcript storage exists?
- Which English portfolio category should become the first fully specified project?
- Should every real domain pack require a `QUALITY_REVIEW.md` before lesson authoring?

## Readiness Status

The English domain pack is ready for future lesson-authoring planning, subject to the remaining open questions. It is not a complete lesson set, exercise bank, dialogue bank, transcript bank, shadowing script bank, interview question bank, learner state record, or certification artifact.
