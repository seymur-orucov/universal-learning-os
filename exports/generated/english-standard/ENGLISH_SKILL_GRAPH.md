# English Skill Graph

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/english/SKILL_GRAPH.md

# English Learning Skill Graph

## Graph Overview

This file defines English learning skills for the `english` domain pack. The graph supports B1-to-C1 progression for English for Software Engineers, including speaking-first communication, workplace interaction, grammar accuracy, vocabulary activation, listening, shadowing, pronunciation, professional writing, interview English, and technical explanation.

Learning skill graph entries define target expectations. Actual learner mastery MUST be recorded only in learner state and MUST be supported by evidence or explicit user instruction. Evidence requirements MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

Speaking exposure, shadowing repetition, generated dialogues, reading scripts, or lesson display MUST NOT imply mastery. Learner output MUST be captured, summarized, or reviewed before it can support evidence.

## Skill Graph Conventions

- Learning skill ids MUST use the `english.` prefix.
- Learning skills are learner competencies, not lesson titles and not agent skills.
- Target mastery describes the intended framework mastery level from `core/mastery-model/MASTERY_LEVELS.md`.
- Practice types SHOULD use categories from `core/learning-engine/PRACTICE_MODEL.md`.
- Assessment focus SHOULD align with `core/learning-engine/ASSESSMENT_MODEL.md`.
- English target language examples, phrases, learner outputs, collocations, and interview answers SHOULD remain in English where appropriate.
- Explanations MAY be in Azerbaijani when learner or project preferences require it.
- Azerbaijani MUST NOT be hardcoded as the only framework language.
- English target phrases SHOULD NOT be translated unnaturally.

## Stage 1: B1 Stabilization and Speaking Confidence

### `english.speaking-confidence`

- Title: Speaking Confidence
- Level: foundation
- Description: Produce short spoken responses with reduced avoidance in familiar professional contexts.
- Prerequisites: none
- Target mastery: M3
- Evidence requirements: Captured or summarized spoken output reviewed for clarity and hesitation.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: independence, consistency, and basic intelligibility.
- Common mistakes: switching to the instruction language too early, stopping after one mistake, overusing memorized phrases.
- Glossary terms: fluency, accuracy
- Related learning skills: `english.reducing-hesitation`, `english.self-introduction`

### `english.self-introduction`

- Title: Self-Introduction
- Level: foundation
- Description: Introduce role, background, goals, and current work clearly.
- Prerequisites: `english.speaking-confidence`
- Target mastery: M4
- Evidence requirements: Spoken or written self-introduction reviewed for structure, grammar, and relevance.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: correctness, explanation quality, and task fit.
- Common mistakes: too much personal detail, weak structure, direct translation.
- Glossary terms: phrase, professional tone
- Related learning skills: `english.interview-self-introduction`, `english.explaining-experience`

### `english.daily-routine-speaking`

- Title: Daily Routine Speaking
- Level: foundation
- Description: Describe regular work habits, current tasks, and common routines.
- Prerequisites: `english.speaking-confidence`
- Target mastery: M3
- Evidence requirements: Learner output about daily routines reviewed for present forms and vocabulary.
- Practice types: recall practice, guided practice, independent practice
- Assessment focus: grammar accuracy and understandable sequencing.
- Common mistakes: confusing habits with current actions, missing verbs, repeated simple vocabulary.
- Glossary terms: tense, sentence pattern
- Related learning skills: `english.present-simple-continuous`, `english.describing-current-work`

### `english.describing-current-work`

- Title: Describing Current Work
- Level: foundation
- Description: Explain what the learner is working on now and why it matters.
- Prerequisites: `english.daily-routine-speaking`
- Target mastery: M4
- Evidence requirements: Spoken or written current-work explanation reviewed for clarity and grammar.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: explanation quality and correct present continuous use.
- Common mistakes: vague verbs, unclear object of work, missing context.
- Glossary terms: status update, technical explanation
- Related learning skills: `english.work-status-updates`, `english.progress-next-steps`

### `english.simple-opinion-expression`

- Title: Simple Opinion Expression
- Level: foundation
- Description: Give simple opinions with reasons in familiar work contexts.
- Prerequisites: `english.speaking-confidence`
- Target mastery: M3
- Evidence requirements: Spoken opinion plus reason reviewed for clarity and sentence structure.
- Practice types: guided practice, independent practice
- Assessment focus: explanation quality and basic coherence.
- Common mistakes: opinion without reason, overusing "I think", unclear comparison.
- Glossary terms: phrase, natural phrasing
- Related learning skills: `english.argument-nuance-hedging`, `english.agreeing-disagreeing-professionally`

### `english.asking-for-clarification`

- Title: Asking for Clarification
- Level: foundation
- Description: Ask polite questions when instructions, requirements, or discussion points are unclear.
- Prerequisites: `english.question-formation`
- Target mastery: M4
- Evidence requirements: Learner-generated clarification questions reviewed for grammar and context fit.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: correctness, professional tone, and transfer to new contexts.
- Common mistakes: asking too vaguely, sounding too direct, not confirming the answer.
- Glossary terms: clarification, follow-up question
- Related learning skills: `english.meeting-questions-requirements`, `english.decision-summary-confirmation`

### `english.basic-self-correction`

- Title: Basic Self-Correction
- Level: foundation
- Description: Notice and repair common grammar, vocabulary, or phrasing mistakes during output.
- Prerequisites: `english.speaking-confidence`
- Target mastery: M3
- Evidence requirements: Output showing an original mistake and learner correction with review.
- Practice types: error-based practice, guided practice
- Assessment focus: correction accuracy and learner awareness.
- Common mistakes: correcting only pronunciation, replacing errors with unnatural translations, ignoring repeated patterns.
- Glossary terms: self-correction, accuracy
- Related learning skills: `english.sentence-structure-error-correction`, `english.self-correction-feedback-review`

### `english.reducing-hesitation`

- Title: Reducing Hesitation
- Level: foundation
- Description: Use simple strategies to keep speaking without long pauses or avoidance.
- Prerequisites: `english.speaking-confidence`
- Target mastery: M3
- Evidence requirements: Captured or summarized spoken attempt reviewed for pause control and recovery.
- Practice types: guided practice, independent practice
- Assessment focus: fluency and confidence under mild pressure.
- Common mistakes: overusing filler words, restarting every sentence, prioritizing speed over clarity.
- Glossary terms: filler words, fluency
- Related learning skills: `english.professional-tone-filler-linking`, `english.fluency-accuracy-pressure`

## Stage 2: Core Grammar for Accurate Communication

### `english.present-simple-continuous`

- Title: Present Simple and Present Continuous
- Level: foundation
- Description: Use present forms accurately for habits, facts, and current work.
- Prerequisites: none
- Target mastery: M3
- Evidence requirements: Spoken or written examples reviewed for form, meaning, and context.
- Practice types: recall practice, guided practice, error-based practice
- Assessment focus: correctness and meaning distinction.
- Common mistakes: using present simple for current temporary actions, missing auxiliary verbs.
- Glossary terms: tense, aspect
- Related learning skills: `english.daily-routine-speaking`, `english.describing-current-work`

### `english.past-simple-present-perfect`

- Title: Past Simple and Present Perfect
- Level: foundation
- Description: Distinguish completed past events from experience, result, or recent relevance.
- Prerequisites: `english.present-simple-continuous`
- Target mastery: M3
- Evidence requirements: Learner output about experience or completed work reviewed for tense choice.
- Practice types: guided practice, mixed practice, error-based practice
- Assessment focus: correctness and explanation of time reference.
- Common mistakes: overusing present perfect, missing time markers, translating tense directly.
- Glossary terms: tense, aspect
- Related learning skills: `english.explaining-experience`, `english.behavioral-interview-answers`

### `english.future-forms`

- Title: Future Forms
- Level: foundation
- Description: Express plans, predictions, intentions, schedules, and next steps.
- Prerequisites: `english.present-simple-continuous`
- Target mastery: M3
- Evidence requirements: Learner output about plans or next steps reviewed for future meaning.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: correctness and task fit.
- Common mistakes: using one future form for every meaning, unclear commitment level.
- Glossary terms: tense, sentence pattern
- Related learning skills: `english.progress-next-steps`, `english.work-status-updates`

### `english.question-formation`

- Title: Question Formation
- Level: foundation
- Description: Form clear direct and indirect questions for work, interviews, and clarification.
- Prerequisites: none
- Target mastery: M4
- Evidence requirements: Learner-generated questions reviewed for grammar and professional fit.
- Practice types: recall practice, guided practice, independent practice
- Assessment focus: correctness and transfer to realistic prompts.
- Common mistakes: missing auxiliary verbs, word-order errors, overly direct phrasing.
- Glossary terms: clarification, follow-up question
- Related learning skills: `english.asking-for-clarification`, `english.meeting-questions-requirements`

### `english.modal-verbs`

- Title: Modal Verbs
- Level: foundation
- Description: Use modals for ability, advice, obligation, possibility, permission, and polite requests.
- Prerequisites: `english.present-simple-continuous`
- Target mastery: M3
- Evidence requirements: Workplace sentences or responses using modals reviewed for meaning and tone.
- Practice types: recall practice, guided practice, error-based practice
- Assessment focus: correctness, tone, and meaning.
- Common mistakes: confusing must and should, overusing can, missing base verb form.
- Glossary terms: modal verb, professional tone
- Related learning skills: `english.asking-for-help`, `english.professional-writing`

### `english.conditionals-basics`

- Title: Conditionals Basics
- Level: intermediate
- Description: Use common conditional patterns for consequences, possibilities, and tradeoffs.
- Prerequisites: `english.future-forms`, `english.modal-verbs`
- Target mastery: M4
- Evidence requirements: Learner output explaining scenarios or decisions with conditionals.
- Practice types: guided practice, mixed practice, error-based practice
- Assessment focus: correctness and explanation quality.
- Common mistakes: mismatched tenses, unclear hypothetical meaning, overcomplicated sentences.
- Glossary terms: sentence pattern, tradeoff
- Related learning skills: `english.tradeoff-explanation`, `english.argument-nuance-hedging`

### `english.comparatives-superlatives`

- Title: Comparatives and Superlatives
- Level: foundation
- Description: Compare options, tools, approaches, and outcomes accurately.
- Prerequisites: `english.sentence-structure-error-correction`
- Target mastery: M3
- Evidence requirements: Learner comparisons reviewed for grammar and meaning.
- Practice types: guided practice, independent practice
- Assessment focus: correctness and clarity.
- Common mistakes: double comparatives, unclear comparison target, missing than.
- Glossary terms: sentence pattern, tradeoff
- Related learning skills: `english.tradeoff-explanation`, `english.prioritization-negotiation-abstract`

### `english.articles-determiners`

- Title: Articles and Determiners
- Level: foundation
- Description: Use articles and determiners accurately enough for clear professional communication.
- Prerequisites: `english.sentence-structure-error-correction`
- Target mastery: M3
- Evidence requirements: Reviewed spoken or written output showing article and determiner use.
- Practice types: recall practice, guided practice, error-based practice
- Assessment focus: correctness and repeated error reduction.
- Common mistakes: missing a or the, overusing the, direct translation from article-free languages.
- Glossary terms: accuracy, sentence pattern
- Related learning skills: `english.professional-writing`, `english.self-correction-feedback-review`

### `english.prepositions-work-communication`

- Title: Prepositions for Work Communication
- Level: foundation
- Description: Use common prepositions in work, time, responsibility, and collaboration phrases.
- Prerequisites: `english.sentence-structure-error-correction`
- Target mastery: M3
- Evidence requirements: Learner output reviewed for frequent preposition patterns.
- Practice types: recall practice, guided practice, error-based practice
- Assessment focus: correctness and natural phrasing.
- Common mistakes: direct translation, wrong time prepositions, incorrect verb-preposition pairs.
- Glossary terms: collocation, phrase
- Related learning skills: `english.collocations`, `english.natural-phrasing-paraphrasing`

### `english.sentence-structure-error-correction`

- Title: Sentence Structure and Error Self-Correction
- Level: foundation
- Description: Build clear English sentences and repair recurring structural errors.
- Prerequisites: `english.basic-self-correction`
- Target mastery: M4
- Evidence requirements: Before-and-after spoken or written output with reviewed corrections.
- Practice types: recall practice, guided practice, error-based practice
- Assessment focus: correctness, self-correction, and consistency.
- Common mistakes: missing subject, wrong word order, fragments, correcting randomly.
- Glossary terms: sentence pattern, self-correction
- Related learning skills: `english.grammar-speaking-integration`, `english.professional-writing`

## Stage 3: Daily Work and Status Updates

### `english.work-status-updates`

- Title: Work Status Updates
- Level: intermediate
- Description: Give concise updates about completed work, current work, blockers, and next steps.
- Prerequisites: `english.describing-current-work`, `english.future-forms`
- Target mastery: M4
- Evidence requirements: Spoken or written status update reviewed for structure, clarity, and accuracy.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: task fit, concision, and independence.
- Common mistakes: too much detail, missing blocker or next step, unclear time reference.
- Glossary terms: status update, blocker
- Related learning skills: `english.standup-async-updates`, `english.professional-writing`

### `english.blocker-explanation`

- Title: Blocker Explanation
- Level: intermediate
- Description: Explain a blocker, its impact, attempted solutions, and requested help.
- Prerequisites: `english.work-status-updates`
- Target mastery: M4
- Evidence requirements: Learner-produced blocker explanation reviewed for completeness and tone.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: explanation quality, professional tone, and clarity.
- Common mistakes: problem without impact, request without context, blaming language.
- Glossary terms: blocker, clarification
- Related learning skills: `english.asking-for-help`, `english.meeting-questions-requirements`

### `english.progress-next-steps`

- Title: Progress and Next Steps Explanation
- Level: intermediate
- Description: Explain what changed, what remains, planned actions, dependencies, and expected outcomes.
- Prerequisites: `english.work-status-updates`, `english.future-forms`
- Target mastery: M4
- Evidence requirements: Reviewed progress and next-steps explanation from a work scenario.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: sequence clarity, future forms, and concision.
- Common mistakes: unclear timeline, vague commitments, missing owner or dependency.
- Glossary terms: status update, phrase
- Related learning skills: `english.explaining-priority`, `english.standup-async-updates`

### `english.asking-for-help`

- Title: Asking for Help
- Level: intermediate
- Description: Ask for support with enough context, specificity, and professional tone.
- Prerequisites: `english.modal-verbs`, `english.blocker-explanation`
- Target mastery: M4
- Evidence requirements: Help request reviewed for clarity, tone, and completeness.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: task fit and professional tone.
- Common mistakes: vague request, too much apology, missing attempted solution.
- Glossary terms: clarification, professional tone
- Related learning skills: `english.meeting-questions-requirements`, `english.email-chat-writing`

### `english.explaining-priority`

- Title: Explaining Priority
- Level: intermediate
- Description: Explain urgency, importance, tradeoffs, and sequencing of work.
- Prerequisites: `english.progress-next-steps`, `english.comparatives-superlatives`
- Target mastery: M4
- Evidence requirements: Learner output prioritizing tasks or tradeoffs with review.
- Practice types: independent practice, mixed practice, interview-style practice
- Assessment focus: explanation quality and transfer ability.
- Common mistakes: unclear reason, overusing urgent, weak comparison.
- Glossary terms: tradeoff, professional tone
- Related learning skills: `english.prioritization-negotiation-abstract`, `english.tradeoff-explanation`

### `english.standup-async-updates`

- Title: Standup Communication and Concise Async Updates
- Level: intermediate
- Description: Adapt status updates for spoken standups and concise asynchronous messages.
- Prerequisites: `english.work-status-updates`
- Target mastery: M4
- Evidence requirements: Spoken and written update variants reviewed for audience and format.
- Practice types: mixed practice, independent practice
- Assessment focus: transfer ability across communication modes.
- Common mistakes: using spoken rambling in async text, missing action items, no context.
- Glossary terms: status update, professional tone
- Related learning skills: `english.email-chat-writing`, `english.meeting-participation`

## Stage 4: Vocabulary, Collocations, and Natural Phrasing

### `english.workplace-vocabulary`

- Title: Workplace Vocabulary
- Level: foundation
- Description: Use common workplace terms for collaboration, tasks, blockers, decisions, and feedback.
- Prerequisites: none
- Target mastery: M4
- Evidence requirements: Learner output using workplace vocabulary accurately in context.
- Practice types: recall practice, guided practice, mixed practice
- Assessment focus: correctness, context fit, and activation.
- Common mistakes: memorized terms without usage, direct translation, wrong register.
- Glossary terms: status update, blocker, professional tone
- Related learning skills: `english.work-status-updates`, `english.vocabulary-activation`

### `english.technical-vocabulary`

- Title: Technical Vocabulary
- Level: intermediate
- Description: Use software engineering vocabulary accurately in explanations and discussions.
- Prerequisites: `english.workplace-vocabulary`
- Target mastery: M4
- Evidence requirements: Technical explanation or interview answer reviewed for term use.
- Practice types: recall practice, guided practice, interview-style practice
- Assessment focus: correctness and meaning precision.
- Common mistakes: using broad words instead of precise terms, mispronouncing key terms, confusing related concepts.
- Glossary terms: technical explanation, phrase
- Related learning skills: `english.technical-concept-explanation`, `english.technical-interview-answers`

### `english.collocations`

- Title: Collocations
- Level: intermediate
- Description: Use natural word combinations common in workplace and technical English.
- Prerequisites: `english.workplace-vocabulary`
- Target mastery: M4
- Evidence requirements: Spoken or written output reviewed for natural word combinations.
- Practice types: recall practice, guided practice, error-based practice
- Assessment focus: natural phrasing and consistency.
- Common mistakes: unnatural verb-noun pairs, direct translation, overformal phrasing.
- Glossary terms: collocation, natural phrasing
- Related learning skills: `english.natural-phrasing-paraphrasing`, `english.professional-writing`

### `english.natural-phrasing-paraphrasing`

- Title: Natural Phrasing and Paraphrasing
- Level: intermediate
- Description: Express and restate ideas in natural English while preserving meaning.
- Prerequisites: `english.collocations`
- Target mastery: M4
- Evidence requirements: Revised or paraphrased learner output reviewed against intended meaning.
- Practice types: guided practice, error-based practice, independent practice
- Assessment focus: clarity, meaning preservation, and naturalness.
- Common mistakes: changing meaning, copying original structure, translating idioms directly.
- Glossary terms: natural phrasing, paraphrasing
- Related learning skills: `english.avoiding-direct-translation`, `english.longform-c1-defense-paraphrase`

### `english.avoiding-direct-translation`

- Title: Avoiding Direct Translation
- Level: intermediate
- Description: Reduce unnatural phrasing caused by translating from the instruction language.
- Prerequisites: `english.natural-phrasing-paraphrasing`
- Target mastery: M4
- Evidence requirements: Before-and-after output reviewed for natural English phrasing.
- Practice types: error-based practice, guided practice
- Assessment focus: natural phrasing and repeated error reduction.
- Common mistakes: word-for-word translation, local idioms in English words, incorrect prepositions.
- Glossary terms: natural phrasing, collocation
- Related learning skills: `english.prepositions-work-communication`, `english.self-correction-feedback-review`

### `english.professional-tone-filler-linking`

- Title: Professional Tone, Filler Control, and Linking Phrases
- Level: intermediate
- Description: Use respectful tone, limited fillers, and clear linking phrases for coherent communication.
- Prerequisites: `english.reducing-hesitation`, `english.workplace-vocabulary`
- Target mastery: M4
- Evidence requirements: Spoken or written output reviewed for tone, coherence, and filler control.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: fluency, coherence, and professional delivery.
- Common mistakes: overusing fillers, sounding too direct, using linking phrases without logic.
- Glossary terms: filler words, professional tone
- Related learning skills: `english.meeting-participation`, `english.fluency-accuracy-pressure`

## Stage 5: Listening, Shadowing, and Pronunciation

### `english.listening-main-idea`

- Title: Listening for Main Idea
- Level: foundation
- Description: Identify the overall meaning of workplace or technical audio.
- Prerequisites: none
- Target mastery: M3
- Evidence requirements: Learner summary of listened content reviewed for gist accuracy.
- Practice types: recall practice, guided practice
- Assessment focus: correctness of main idea and relevant context.
- Common mistakes: focusing on isolated words, missing purpose, guessing from one familiar term.
- Glossary terms: listening, summary
- Related learning skills: `english.listening-detail`, `english.workplace-discussion-listening`

### `english.listening-detail`

- Title: Listening for Detail
- Level: intermediate
- Description: Extract specific facts, decisions, constraints, or action items from audio.
- Prerequisites: `english.listening-main-idea`
- Target mastery: M4
- Evidence requirements: Learner notes or answers reviewed against source content.
- Practice types: guided practice, independent practice
- Assessment focus: correctness and consistency.
- Common mistakes: missing numbers or conditions, confusing speaker intent, filling gaps with assumptions.
- Glossary terms: clarification, status update
- Related learning skills: `english.meeting-participation`, `english.decision-summary-confirmation`

### `english.workplace-discussion-listening`

- Title: Listening to Workplace Discussions
- Level: intermediate
- Description: Understand roles, decisions, blockers, and action items in workplace discussions.
- Prerequisites: `english.listening-detail`, `english.workplace-vocabulary`
- Target mastery: M4
- Evidence requirements: Meeting or discussion summary reviewed for decisions and action items.
- Practice types: guided practice, mixed practice
- Assessment focus: transfer ability and relevant detail extraction.
- Common mistakes: missing disagreement, confusing decisions with suggestions, ignoring action owners.
- Glossary terms: status update, blocker
- Related learning skills: `english.decision-summary-confirmation`, `english.meeting-participation`

### `english.technical-explanation-listening`

- Title: Listening to Technical Explanations
- Level: intermediate
- Description: Understand core meaning, examples, and tradeoffs in technical explanations.
- Prerequisites: `english.listening-detail`, `english.technical-vocabulary`
- Target mastery: M4
- Evidence requirements: Learner summary or answer set reviewed against technical content.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: correctness, explanation quality, and technical vocabulary recognition.
- Common mistakes: memorizing terms without relationships, missing cause/effect, confusing examples with main point.
- Glossary terms: technical explanation, tradeoff
- Related learning skills: `english.technical-concept-explanation`, `english.tradeoff-explanation`

### `english.shadowing`

- Title: Shadowing
- Level: foundation
- Description: Repeat English audio to improve rhythm, pronunciation, and automatic phrasing.
- Prerequisites: `english.listening-main-idea`
- Target mastery: M3
- Evidence requirements: Captured or summarized shadowing attempt with pronunciation or rhythm feedback.
- Practice types: guided practice, independent practice
- Assessment focus: pronunciation clarity, rhythm, and repeated improvement.
- Common mistakes: repeating sounds without meaning, copying too fast, treating repetition as mastery.
- Glossary terms: shadowing, pronunciation
- Related learning skills: `english.pronunciation-clarity-stress`, `english.fluency-accuracy-pressure`

### `english.pronunciation-clarity-stress`

- Title: Pronunciation Clarity, Word Stress, and Sentence Stress
- Level: intermediate
- Description: Produce understandable speech with clearer sounds and stress patterns.
- Prerequisites: `english.shadowing`
- Target mastery: M4
- Evidence requirements: Captured or summarized spoken output reviewed for intelligibility and stress.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: intelligibility, stress placement, and listener comprehension.
- Common mistakes: prioritizing accent imitation over clarity, flat stress, misplaced stress in technical terms.
- Glossary terms: pronunciation, shadowing
- Related learning skills: `english.intonation-connected-speech`, `english.fluency-accuracy-pressure`

### `english.intonation-connected-speech`

- Title: Intonation and Connected Speech Recognition
- Level: intermediate
- Description: Recognize and produce common intonation and connected speech patterns.
- Prerequisites: `english.pronunciation-clarity-stress`, `english.listening-detail`
- Target mastery: M4
- Evidence requirements: Listening or spoken output reviewed for connected speech recognition or production.
- Practice types: guided practice, mixed practice, error-based practice
- Assessment focus: listening detail and pronunciation clarity.
- Common mistakes: expecting every word to sound isolated, monotone delivery, missing reduced forms.
- Glossary terms: pronunciation, fluency
- Related learning skills: `english.workplace-discussion-listening`, `english.speaking-confidence`

## Stage 6: Technical Explanation for Software Engineers

### `english.technical-concept-explanation`

- Title: Technical Concept Explanation
- Level: intermediate
- Description: Explain a software engineering concept clearly with context and examples.
- Prerequisites: `english.technical-vocabulary`, `english.sentence-structure-error-correction`
- Target mastery: M5
- Evidence requirements: Reviewed spoken or written technical explanation with follow-up.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: explanation quality, correctness, and transfer ability.
- Common mistakes: jargon without explanation, weak structure, no example.
- Glossary terms: technical explanation, phrase
- Related learning skills: `english.examples-simplification`, `english.technical-interview-answers`

### `english.architecture-explanation`

- Title: Architecture Explanation
- Level: advanced
- Description: Explain system structure, component responsibilities, and communication flow.
- Prerequisites: `english.technical-concept-explanation`
- Target mastery: M5
- Evidence requirements: Reviewed architecture explanation with diagram or summary reference.
- Practice types: independent practice, project-based practice, interview-style practice
- Assessment focus: structure, clarity, and transfer to new systems.
- Common mistakes: listing components without relationships, missing tradeoffs, unclear audience level.
- Glossary terms: technical explanation, tradeoff
- Related learning skills: `english.tradeoff-explanation`, `english.longform-c1-defense-paraphrase`

### `english.bug-root-cause-explanation`

- Title: Bug and Root Cause Explanation
- Level: intermediate
- Description: Explain a bug, observed behavior, root cause, fix, and prevention clearly.
- Prerequisites: `english.technical-concept-explanation`, `english.past-simple-present-perfect`
- Target mastery: M5
- Evidence requirements: Reviewed bug explanation or incident-style summary.
- Practice types: independent practice, mixed practice, project-based practice
- Assessment focus: sequence clarity, cause/effect, and technical vocabulary.
- Common mistakes: confusing symptom and cause, skipping fix rationale, weak timeline.
- Glossary terms: technical explanation, status update
- Related learning skills: `english.technical-summaries-documentation`, `english.implementation-decision-explanation`

### `english.tradeoff-explanation`

- Title: Tradeoff Explanation
- Level: advanced
- Description: Explain benefits, costs, risks, and decision criteria for technical choices.
- Prerequisites: `english.conditionals-basics`, `english.comparatives-superlatives`
- Target mastery: M5
- Evidence requirements: Reviewed tradeoff explanation with follow-up questions.
- Practice types: independent practice, interview-style practice, project-based practice
- Assessment focus: explanation quality, nuance, and defense.
- Common mistakes: one-sided argument, vague criteria, no context.
- Glossary terms: tradeoff, technical explanation
- Related learning skills: `english.argument-nuance-hedging`, `english.handling-followups-unknowns`

### `english.implementation-decision-explanation`

- Title: Implementation Decision Explanation
- Level: intermediate
- Description: Explain why a specific implementation approach was chosen.
- Prerequisites: `english.technical-concept-explanation`, `english.explaining-priority`
- Target mastery: M5
- Evidence requirements: Reviewed explanation of a design or code decision.
- Practice types: independent practice, project-based practice, interview-style practice
- Assessment focus: clarity, correctness, and decision rationale.
- Common mistakes: "because it is better" without criteria, missing alternatives, unclear constraints.
- Glossary terms: tradeoff, technical explanation
- Related learning skills: `english.pr-comments`, `english.handling-followups-unknowns`

### `english.frontend-database-api-explanation`

- Title: Frontend, Database, and API Explanation
- Level: intermediate
- Description: Explain frontend behavior, database behavior, API flow, and implementation choices conceptually.
- Prerequisites: `english.technical-vocabulary`, `english.technical-concept-explanation`
- Target mastery: M4
- Evidence requirements: Reviewed frontend, database, or API explanation with clarity feedback.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: correctness, simplification, and audience fit.
- Common mistakes: vague "it works" explanations, unclear data flow, undefined terms.
- Glossary terms: technical explanation, phrase
- Related learning skills: `english.examples-simplification`, `english.technical-interview-answers`

### `english.examples-simplification`

- Title: Giving Examples and Simplifying Complex Ideas
- Level: intermediate
- Description: Use examples, analogies, and simpler wording to make technical ideas understandable.
- Prerequisites: `english.natural-phrasing-paraphrasing`, `english.technical-concept-explanation`
- Target mastery: M5
- Evidence requirements: Reviewed explanation adapted for a less familiar audience.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: transfer ability and audience adaptation.
- Common mistakes: example does not match concept, oversimplification changes meaning, too much jargon.
- Glossary terms: paraphrasing, technical explanation
- Related learning skills: `english.longform-c1-defense-paraphrase`, `english.technical-interview-answers`

## Stage 7: Meetings, Discussions, and Feedback

### `english.meeting-participation`

- Title: Meeting Participation
- Level: intermediate
- Description: Contribute to meetings by answering, asking, clarifying, and responding professionally.
- Prerequisites: `english.work-status-updates`, `english.listening-detail`
- Target mastery: M4
- Evidence requirements: Role-play, transcript, or summarized meeting contribution reviewed for fit.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: independence, listening transfer, and professional tone.
- Common mistakes: staying silent, interrupting abruptly, answering without context.
- Glossary terms: professional tone, clarification
- Related learning skills: `english.meeting-questions-requirements`, `english.decision-summary-confirmation`

### `english.meeting-questions-requirements`

- Title: Meeting Questions and Requirements Clarification
- Level: intermediate
- Description: Ask relevant questions that clarify requirements, constraints, priorities, and decisions.
- Prerequisites: `english.question-formation`, `english.listening-detail`
- Target mastery: M4
- Evidence requirements: Learner-generated meeting or requirements questions reviewed for relevance and grammar.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: correctness, relevance, and professional tone.
- Common mistakes: vague question wording, multiple questions at once, assuming priority.
- Glossary terms: clarification, follow-up question
- Related learning skills: `english.asking-for-help`, `english.decision-summary-confirmation`

### `english.agreeing-disagreeing-professionally`

- Title: Agreeing and Disagreeing Professionally
- Level: intermediate
- Description: Express agreement, disagreement, and alternative views respectfully.
- Prerequisites: `english.simple-opinion-expression`, `english.professional-tone-filler-linking`
- Target mastery: M4
- Evidence requirements: Role-played or written disagreement reviewed for tone and clarity.
- Practice types: guided practice, independent practice, mixed practice
- Assessment focus: professional tone and nuanced meaning.
- Common mistakes: sounding too direct, avoiding disagreement entirely, unclear alternative.
- Glossary terms: professional tone, tradeoff
- Related learning skills: `english.argument-nuance-hedging`, `english.prioritization-negotiation-abstract`

### `english.feedback-exchange`

- Title: Giving and Receiving Feedback
- Level: intermediate
- Description: Give useful feedback and respond to feedback with clarification, acknowledgement, and next steps.
- Prerequisites: `english.professional-tone-filler-linking`, `english.asking-for-clarification`
- Target mastery: M4
- Evidence requirements: Feedback message or role-play reviewed for specificity, tone, and response quality.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: clarity, tone, and actionable detail.
- Common mistakes: vague praise, harsh criticism, defensive response, no suggested improvement.
- Glossary terms: professional tone, self-correction
- Related learning skills: `english.pr-comments`, `english.self-correction-feedback-review`

### `english.decision-summary-confirmation`

- Title: Summarizing Decisions and Confirming Understanding
- Level: intermediate
- Description: Summarize decisions, owners, next steps, and confirm understanding after discussion.
- Prerequisites: `english.workplace-discussion-listening`, `english.progress-next-steps`
- Target mastery: M4
- Evidence requirements: Decision summary or confirmation phrase reviewed for accuracy and concision.
- Practice types: independent practice, mixed practice
- Assessment focus: listening detail, concision, and correctness.
- Common mistakes: mixing options with decisions, missing owner, failing to summarize back.
- Glossary terms: status update, clarification
- Related learning skills: `english.technical-summaries-documentation`, `english.standup-async-updates`

### `english.polite-interruption`

- Title: Polite Interruption
- Level: intermediate
- Description: Interrupt politely without derailing discussion or damaging tone.
- Prerequisites: `english.asking-for-clarification`, `english.professional-tone-filler-linking`
- Target mastery: M4
- Evidence requirements: Role-played meeting exchange reviewed for timing, tone, and clarity.
- Practice types: guided practice, interview-style practice, mixed practice
- Assessment focus: professional tone and interaction control.
- Common mistakes: interrupting too strongly, over-apologizing, not stating the purpose.
- Glossary terms: clarification, professional tone
- Related learning skills: `english.meeting-participation`, `english.workplace-communication-transfer`

## Stage 8: Writing for Work

### `english.professional-writing`

- Title: Professional Writing
- Level: intermediate
- Description: Write clear, respectful, and task-focused professional messages.
- Prerequisites: `english.sentence-structure-error-correction`, `english.workplace-vocabulary`
- Target mastery: M4
- Evidence requirements: Learner-written artifact reviewed for clarity, tone, grammar, and task fit.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: correctness, tone, and concision.
- Common mistakes: too formal, too vague, direct translation, missing request or action.
- Glossary terms: professional tone, natural phrasing
- Related learning skills: `english.email-chat-writing`, `english.pr-comments`

### `english.email-chat-writing`

- Title: Email Writing and Chat Messages
- Level: intermediate
- Description: Write concise emails and asynchronous chat messages with clear context, purpose, and action.
- Prerequisites: `english.professional-writing`, `english.standup-async-updates`
- Target mastery: M4
- Evidence requirements: Email or chat draft reviewed for structure, concision, grammar, and tone.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: task fit and professional tone.
- Common mistakes: unclear subject, missing context, too abrupt, no action request.
- Glossary terms: professional tone, phrase
- Related learning skills: `english.concise-writing-tone-correction`, `english.asking-for-help`

### `english.pr-comments`

- Title: PR Comments
- Level: intermediate
- Description: Write constructive pull request comments and responses.
- Prerequisites: `english.professional-writing`, `english.feedback-exchange`
- Target mastery: M4
- Evidence requirements: PR comment or response reviewed for clarity, specificity, and tone.
- Practice types: guided practice, independent practice, error-based practice
- Assessment focus: professional tone, actionable detail, and technical clarity.
- Common mistakes: vague comment, harsh tone, no rationale, overexplaining simple points.
- Glossary terms: professional tone, technical explanation
- Related learning skills: `english.implementation-decision-explanation`, `english.feedback-exchange`

### `english.technical-summaries-documentation`

- Title: Technical Summaries and Documentation Notes
- Level: intermediate
- Description: Summarize technical work and write simple documentation notes for an intended audience.
- Prerequisites: `english.technical-concept-explanation`, `english.decision-summary-confirmation`
- Target mastery: M4
- Evidence requirements: Written summary or documentation note reviewed for accuracy, structure, and audience fit.
- Practice types: independent practice, mixed practice, project-based practice
- Assessment focus: correctness, explanation quality, and concision.
- Common mistakes: missing conclusion, too much internal detail, unclear steps.
- Glossary terms: technical explanation, professional tone
- Related learning skills: `english.examples-simplification`, `english.bug-root-cause-explanation`

### `english.concise-writing-tone-correction`

- Title: Concise Writing, Tone Adjustment, and Written Self-Correction
- Level: intermediate
- Description: Revise written work to improve concision, tone, grammar, and clarity.
- Prerequisites: `english.professional-writing`, `english.sentence-structure-error-correction`
- Target mastery: M4
- Evidence requirements: Before-and-after written artifact with review notes.
- Practice types: error-based practice, guided practice, independent practice
- Assessment focus: consistency, correction accuracy, and tone control.
- Common mistakes: cutting important context, making tone too cold, correcting grammar but not clarity.
- Glossary terms: self-correction, professional tone
- Related learning skills: `english.self-correction-feedback-review`, `english.email-chat-writing`

## Stage 9: Interview English

### `english.interview-self-introduction`

- Title: Professional Self-Introduction for Interviews
- Level: intermediate
- Description: Present background, strengths, experience, and goals for interview contexts.
- Prerequisites: `english.self-introduction`
- Target mastery: M4
- Evidence requirements: Captured or summarized interview introduction reviewed for clarity and relevance.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: structure, confidence, and task fit.
- Common mistakes: too long, too generic, no connection to role.
- Glossary terms: interview answer, professional tone
- Related learning skills: `english.behavioral-interview-answers`, `english.explaining-experience`

### `english.behavioral-interview-answers`

- Title: Behavioral Interview Answers
- Level: intermediate
- Description: Answer behavioral questions with structured examples and clear outcomes.
- Prerequisites: `english.interview-self-introduction`, `english.past-simple-present-perfect`
- Target mastery: M5
- Evidence requirements: Reviewed behavioral answer with follow-up evaluation.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: explanation quality, structure, and independence.
- Common mistakes: no concrete example, unclear result, memorized answer without adaptation.
- Glossary terms: interview answer, follow-up question
- Related learning skills: `english.interviewer-questions-storytelling-tradeoffs`, `english.handling-followups-unknowns`

### `english.technical-interview-answers`

- Title: Technical Interview Answers
- Level: advanced
- Description: Answer technical interview questions with clear reasoning and terminology.
- Prerequisites: `english.technical-concept-explanation`, `english.technical-vocabulary`
- Target mastery: M5
- Evidence requirements: Reviewed technical interview response with follow-up questioning.
- Practice types: independent practice, interview-style practice
- Assessment focus: correctness, explanation quality, and transfer ability.
- Common mistakes: jargon without structure, weak reasoning, avoiding unknown details.
- Glossary terms: technical explanation, interview answer
- Related learning skills: `english.handling-followups-unknowns`, `english.longform-c1-defense-paraphrase`

### `english.explaining-experience`

- Title: Explaining Experience
- Level: intermediate
- Description: Explain past projects, responsibilities, achievements, and lessons learned.
- Prerequisites: `english.past-simple-present-perfect`, `english.interview-self-introduction`
- Target mastery: M4
- Evidence requirements: Reviewed experience explanation with timeline and relevance feedback.
- Practice types: guided practice, independent practice, interview-style practice
- Assessment focus: clarity, tense accuracy, and relevance.
- Common mistakes: unclear timeline, too much detail, no impact.
- Glossary terms: interview answer, professional tone
- Related learning skills: `english.behavioral-interview-answers`, `english.technical-summaries-documentation`

### `english.handling-followups-unknowns`

- Title: Answering Follow-Up and Unknown Questions
- Level: advanced
- Description: Respond to follow-up or unknown questions with clarification, depth, honesty, and consistency.
- Prerequisites: `english.behavioral-interview-answers`, `english.technical-interview-answers`
- Target mastery: M5
- Evidence requirements: Captured or summarized follow-up exchange reviewed for accuracy and depth.
- Practice types: interview-style practice, independent practice
- Assessment focus: explanation quality, transfer ability, and consistency.
- Common mistakes: pretending to know, changing story, answering a different question, losing structure.
- Glossary terms: follow-up question, clarification
- Related learning skills: `english.fluency-accuracy-pressure`, `english.longform-c1-defense-paraphrase`

### `english.interviewer-questions-storytelling-tradeoffs`

- Title: Interviewer Questions, Storytelling, and Tradeoff Defense
- Level: advanced
- Description: Ask thoughtful interviewer questions and tell structured stories that defend decisions and tradeoffs.
- Prerequisites: `english.question-formation`, `english.tradeoff-explanation`
- Target mastery: M5
- Evidence requirements: Reviewed interviewer questions or story answer with follow-up evaluation.
- Practice types: guided practice, interview-style practice, mixed practice
- Assessment focus: professional tone, structure, and defense.
- Common mistakes: generic questions, no story arc, weak tradeoff rationale.
- Glossary terms: interview answer, tradeoff
- Related learning skills: `english.argument-nuance-hedging`, `english.interview-readiness-transfer`

## Stage 10: B2/C1 Fluency, Argumentation, and Nuance

### `english.argument-nuance-hedging`

- Title: Argument Structure, Nuanced Opinion, and Hedging
- Level: advanced
- Description: Present nuanced opinions with claims, reasons, evidence, limitations, alternatives, and appropriate uncertainty.
- Prerequisites: `english.simple-opinion-expression`, `english.conditionals-basics`
- Target mastery: M5
- Evidence requirements: Reviewed spoken or written argument with follow-up challenge.
- Practice types: independent practice, mixed practice, interview-style practice
- Assessment focus: explanation quality, nuance, and transfer ability.
- Common mistakes: one-sided argument, vague evidence, overconfident or too-weak claims.
- Glossary terms: tradeoff, paraphrasing
- Related learning skills: `english.prioritization-negotiation-abstract`, `english.longform-c1-defense-paraphrase`

### `english.prioritization-negotiation-abstract`

- Title: Prioritization, Negotiation, Compromise, and Abstract Discussion
- Level: advanced
- Description: Discuss priorities, constraints, compromise, negotiation, and abstract workplace topics professionally.
- Prerequisites: `english.explaining-priority`, `english.agreeing-disagreeing-professionally`
- Target mastery: M5
- Evidence requirements: Role-play or discussion reviewed for tone, reasoning, and abstraction.
- Practice types: independent practice, mixed practice, project-based practice
- Assessment focus: transfer ability, tone, and explanation quality.
- Common mistakes: too direct, unclear criteria, no compromise language, vague abstraction.
- Glossary terms: tradeoff, professional tone
- Related learning skills: `english.argument-nuance-hedging`, `english.workplace-communication-transfer`

### `english.longform-c1-defense-paraphrase`

- Title: Long-Form Speaking, Advanced Paraphrasing, and C1-Style Defense
- Level: advanced
- Description: Sustain coherent long-form speech and defend complex ideas with reframing, nuance, and audience awareness.
- Prerequisites: `english.natural-phrasing-paraphrasing`, `english.argument-nuance-hedging`, `english.handling-followups-unknowns`
- Target mastery: M6
- Evidence requirements: Reviewed complex explanation with challenge questions and response evaluation.
- Practice types: interview-style practice, project-based practice, independent practice
- Assessment focus: M6 explanation and defense, transfer, and consistency.
- Common mistakes: fluent but vague answer, weak evidence, losing structure, defensive tone.
- Glossary terms: fluency, technical explanation, paraphrasing
- Related learning skills: `english.speaking-portfolio-evidence`, `english.interview-readiness-transfer`

## Cross-Cutting Skills

### `english.grammar-speaking-integration`

- Title: Grammar in Speaking Integration
- Level: intermediate
- Description: Apply grammar accurately while speaking without pausing excessively to translate.
- Prerequisites: `english.sentence-structure-error-correction`, `english.reducing-hesitation`
- Target mastery: M4
- Evidence requirements: Captured or summarized spoken output reviewed for grammar and fluency balance.
- Practice types: mixed practice, error-based practice, independent practice
- Assessment focus: fluency and accuracy balance.
- Common mistakes: grammar focus stops communication, fluency ignores repeated errors, translating before speaking.
- Glossary terms: fluency, accuracy
- Related learning skills: `english.fluency-accuracy-pressure`, `english.longform-c1-defense-paraphrase`

### `english.vocabulary-activation`

- Title: Vocabulary Activation
- Level: intermediate
- Description: Move known vocabulary into active spoken and written use.
- Prerequisites: `english.workplace-vocabulary`, `english.technical-vocabulary`
- Target mastery: M4
- Evidence requirements: Learner output showing accurate use of target vocabulary in context.
- Practice types: recall practice, mixed practice, independent practice
- Assessment focus: correctness, context fit, and consistency.
- Common mistakes: recognizing words but not using them, wrong collocation, overusing generic words.
- Glossary terms: collocation, phrase
- Related learning skills: `english.collocations`, `english.technical-concept-explanation`

### `english.self-correction-feedback-review`

- Title: Self-Correction, Feedback Use, Review, and Maintenance
- Level: intermediate
- Description: Use feedback and review to identify, practice, maintain, and reduce recurring language errors.
- Prerequisites: `english.basic-self-correction`, `english.sentence-structure-error-correction`
- Target mastery: M4
- Evidence requirements: Error pattern, correction attempt, review output, and improvement summary.
- Practice types: error-based practice, guided practice, mixed practice
- Assessment focus: consistency, retention, and learning from feedback.
- Common mistakes: correcting once and forgetting, tracking too many errors, accepting feedback without action.
- Glossary terms: self-correction, accuracy
- Related learning skills: `english.concise-writing-tone-correction`, `english.speaking-portfolio-evidence`

### `english.fluency-accuracy-pressure`

- Title: Fluency, Accuracy Balance, and Confidence Under Pressure
- Level: advanced
- Description: Communicate clearly under pressure while balancing flow, correctness, and professional structure.
- Prerequisites: `english.grammar-speaking-integration`, `english.handling-followups-unknowns`
- Target mastery: M5
- Evidence requirements: Reviewed spoken response under time pressure, follow-up questioning, or realistic interaction.
- Practice types: mixed practice, independent practice, interview-style practice
- Assessment focus: independence, fluency, correctness, and consistency under pressure.
- Common mistakes: chasing speed, abandoning structure, pretending to understand, overcorrecting every sentence.
- Glossary terms: fluency, accuracy, interview answer
- Related learning skills: `english.longform-c1-defense-paraphrase`, `english.interview-readiness-transfer`

### `english.speaking-portfolio-evidence`

- Title: Speaking Portfolio Evidence
- Level: advanced
- Description: Use reviewed speaking artifacts to demonstrate growth across contexts.
- Prerequisites: `english.longform-c1-defense-paraphrase`, `english.self-correction-feedback-review`
- Target mastery: M5
- Evidence requirements: Reviewed portfolio items with summaries, feedback, and limitations.
- Practice types: project-based practice, interview-style practice, independent practice
- Assessment focus: transfer, consistency, and evidence quality.
- Common mistakes: collecting recordings without review, no reflection, no link to learning skills.
- Glossary terms: fluency, technical explanation
- Related learning skills: `english.workplace-communication-transfer`, `english.interview-readiness-transfer`

### `english.workplace-communication-transfer`

- Title: Workplace Communication Transfer
- Level: advanced
- Description: Apply English communication skills across meetings, writing, feedback, and technical discussion.
- Prerequisites: `english.meeting-participation`, `english.professional-writing`, `english.technical-concept-explanation`
- Target mastery: M5
- Evidence requirements: Reviewed outputs from multiple workplace contexts.
- Practice types: mixed practice, project-based practice, independent practice
- Assessment focus: transfer ability and consistency.
- Common mistakes: success in one format only, tone mismatch, weak adaptation to audience.
- Glossary terms: professional tone, technical explanation
- Related learning skills: `english.prioritization-negotiation-abstract`, `english.speaking-portfolio-evidence`

### `english.interview-readiness-transfer`

- Title: Interview Readiness Transfer
- Level: advanced
- Description: Transfer speaking, technical explanation, follow-up, and pressure skills into interview contexts.
- Prerequisites: `english.technical-interview-answers`, `english.fluency-accuracy-pressure`
- Target mastery: M5
- Evidence requirements: Reviewed interview simulation or portfolio response with follow-up evaluation.
- Practice types: interview-style practice, project-based practice, mixed practice
- Assessment focus: transfer ability, explanation quality, and consistency.
- Common mistakes: rehearsed answers only, weak follow-up, fluency without correctness.
- Glossary terms: interview answer, follow-up question
- Related learning skills: `english.handling-followups-unknowns`, `english.longform-c1-defense-paraphrase`

## Progression Notes

- Stage order describes a default progression; commands MAY select review or practice out of order when evidence or learner goals require it.
- Grammar learning skills SHOULD be practiced through speaking, writing, listening, and workplace tasks rather than isolated rules only.
- Higher mastery SHOULD require stronger evidence: independent output, transfer to new contexts, consistency over time, or follow-up defense.
- Speaking-first learning MUST still preserve evidence-based mastery.
- Learner state MAY reference these learning skill ids but MUST NOT duplicate this domain pack content.

## OPEN QUESTION

- Should CEFR descriptors be mapped to each learning skill or only to assessment rules?
- Which learning skills require human conversation evidence for M5 or M6?
- How should spoken evidence be captured or summarized without storing private audio by default?
- Should pronunciation learning skills declare accent or intelligibility assumptions?
- Which learning skills should be split or merged after the first English lessons are authored?
