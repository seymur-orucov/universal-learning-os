# ADR-0018: English Practice and Assessment Rules

## Status

Accepted for Stage 9.3.

## Context

The English domain pack has an expanded learning skill graph and syllabus. It now needs structured practice and assessment rules so future lessons, speaking practice, listening practice, shadowing, writing review, interview simulations, portfolio work, review sessions, and assessments can evaluate learner work consistently without creating exercises, dialogues, transcripts, scripts, lesson bodies, learner state, or executable tooling.

## Decision

- English practice and assessment rules are expanded before full exercises, dialogues, listening transcripts, and shadowing scripts.
- Practice difficulty guidance is separate from mastery records.
- English assessment uses correctness, independence, explanation quality, transfer ability, consistency, and speed only when domain-appropriate.
- Speaking-first learning requires captured, summarized, or reviewed learner output before mastery claims.
- Review triggers connect English failure patterns to specific English learning skills.
- Localization supports Azerbaijani instruction with English target language as a learner or project preference.

## Rationale

Practice and assessment rules provide a consistent evaluation contract before content authoring begins. This prevents future lessons or practice sessions from treating participation, passive listening, generated scripts, shadowing repetition, or lesson completion as mastery.

Difficulty labels help select practice shape, but they MUST NOT be interpreted as learner mastery. Mastery belongs in learner state and requires evidence under `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

English for Software Engineers must assess real communication performance: grammar accuracy, fluency, pronunciation clarity, vocabulary activation, natural phrasing, listening comprehension, interaction ability, professional tone, technical explanation, interview readiness, and writing clarity. Correctness, independence, explanation quality, transfer ability, consistency, and speed only when appropriate keep assessment aligned with the core model.

Review trigger mapping makes failure patterns actionable. For example, repeated article errors route to `english.articles-determiners`, direct translation routes to `english.avoiding-direct-translation`, and weak follow-up answers route to `english.handling-followups-unknowns`.

Localization follows `specification/LOCALIZATION_SPEC.md`: feedback and explanations MAY be Azerbaijani for the initial project preference, while English examples, phrases, collocations, interview answers, and learner outputs SHOULD remain in English where appropriate. Azerbaijani is not a global framework default.

## Consequences

- Future English exercises, lessons, reviews, interviews, and portfolio work can use stable practice and assessment rules.
- State update proposals can be tied to evidence-producing learner output.
- Speaking, listening, pronunciation, writing, and interview evidence can be evaluated consistently.
- Audio capture, CEFR mapping, and human conversation evidence remain unresolved design questions.

## Provisional Decisions

- Difficulty labels D1-D5 are practice guidance only.
- CEFR descriptors are not yet formal assessment rubrics.
- Pronunciation assessment prioritizes intelligibility and clarity over accent imitation.
- No exercise bank, dialogue bank, transcript bank, shadowing script bank, or learner state is created.

## OPEN QUESTION

- Should CEFR descriptors be mapped to framework mastery levels in English assessment rules?
- Which English learning skills require human conversation evidence for M5 or M6?
- What privacy policy is required before storing audio or transcripts?
