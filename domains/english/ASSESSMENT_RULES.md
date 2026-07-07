# English Assessment Rules

## Assessment Overview

These rules define how English learner work should be assessed in the `english` domain pack. They support future speaking practice, listening practice, shadowing, writing review, interview simulations, portfolio work, review sessions, and assessments.

This file does not create tests, exercises, interview banks, dialogue banks, learner state, schemas, or executable tooling.

Assessment output SHOULD follow `templates/session/ASSESSMENT_OUTPUT_TEMPLATE.md`.

## Assessment Principles

- Assessment MUST be based on evidence.
- Assessment SHOULD target learning skills from `domains/english/SKILL_GRAPH.md`.
- Domain rules MUST NOT weaken `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- Learner progress belongs in learner state, not this domain pack.
- Practice or assessment output MAY propose learner state updates but MUST NOT silently apply them.
- Speaking participation, passive listening, shadowing repetition, generated scripts, or lesson completion MUST NOT imply mastery.
- Speed MAY matter for fluency and interview contexts, but MUST NOT replace correctness, clarity, or task fit.

## Core Dimension Mapping

### Correctness

- Meaning in English for Software Engineers: grammar, vocabulary, pronunciation, meaning, and task fit are accurate enough for the communication context.
- Evidence examples: reviewed spoken answer, written message, corrected sentence, listening summary, technical explanation, or interview response.
- Warning signs: meaning changes, repeated grammar errors, unclear pronunciation, wrong vocabulary, or answer does not address the prompt.

### Independence

- Meaning in English for Software Engineers: learner can speak, write, listen, or respond without excessive prompting, translation, or scripted dependence.
- Evidence examples: free speaking response, independent written artifact, answer after minimal prompt, or self-managed clarification.
- Warning signs: cannot continue without heavy hints, only repeats generated text, or depends on the instruction language for every step.

### Explanation Quality

- Meaning in English for Software Engineers: communication is clear, structured, relevant, detailed enough, and adapted to audience.
- Evidence examples: technical explanation, interview answer, blocker explanation, decision summary, or meeting contribution.
- Warning signs: unclear structure, missing context, too little detail, memorized phrasing without meaning, or no example.

### Transfer Ability

- Meaning in English for Software Engineers: learner uses English in new workplace, technical, interview, listening, writing, or portfolio contexts.
- Evidence examples: adapting an answer to a new question, explaining a new concept, revising tone for audience, or transferring feedback to a new artifact.
- Warning signs: performance works only for rehearsed scripts, familiar examples, or one communication mode.

### Consistency

- Meaning in English for Software Engineers: learner performs reliably across repeated attempts and reduces recurring mistakes.
- Evidence examples: multiple reviewed outputs showing stable grammar, clarity, pronunciation, vocabulary use, or interaction ability.
- Warning signs: repeated same tense error, recurring direct translation, inconsistent pronunciation clarity, or unstable follow-up responses.

### Speed

- Meaning in English for Software Engineers: response time and fluency matter only when the context requires conversation, interviews, or time-sensitive communication.
- Evidence examples: timely answer with acceptable accuracy, smooth follow-up response, reduced hesitation, or clear status update under pressure.
- Warning signs: fast but inaccurate speech, fluent memorized answers, or speed used to ignore clarity and correctness.

## English-Specific Assessment Areas

- Fluency: flow, hesitation control, and ability to continue communication.
- Accuracy: grammar, vocabulary, pronunciation, and meaning correctness.
- Pronunciation clarity: intelligibility, stress, rhythm, and listener comprehension where relevant.
- Vocabulary activation: ability to use known words, phrases, and collocations in context.
- Natural phrasing: reduced direct translation and more idiomatic professional English.
- Listening comprehension: main idea, details, speaker intent, decisions, and action items.
- Interaction ability: asking, clarifying, responding, interrupting politely, and handling follow-ups.
- Professional tone: channel-appropriate, respectful, clear, and balanced communication.
- Technical explanation quality: structure, correctness, examples, tradeoffs, and audience fit.
- Interview readiness: structured answers, follow-up handling, uncertainty management, and pressure control.
- Writing clarity: concision, task fit, grammar, tone, and revision quality.

## Mastery-Level Expectations

- M0: No reliable evidence is available.
- M1: Learner recognizes words, phrases, grammar patterns, pronunciation features, or communication structures.
- M2: Learner explains language use or identifies correct patterns.
- M3: Learner produces controlled output with guidance, prompts, or scaffolding.
- M4: Learner produces independent spoken, written, listening-summary, or interaction output in familiar contexts.
- M5: Learner transfers English to workplace, technical, interview, portfolio, or realistic communication contexts.
- M6: Learner explains and defends ideas under follow-up questioning with clarity, accuracy, and consistency.

These are assessment expectations, not learner state records.

## Evidence Requirements by Work Type

- Speaking evidence: captured or summarized spoken response with review of fluency, accuracy, clarity, and task fit.
- Grammar evidence: original output, correction or revised output, and review of the target grammar pattern.
- Vocabulary/collocation evidence: learner output using terms or collocations accurately in context.
- Listening evidence: learner summary, detail extraction, action-item notes, or answers compared to source content.
- Shadowing/pronunciation evidence: captured or summarized attempt with feedback on intelligibility, stress, rhythm, or clarity.
- Writing evidence: written artifact, revision, and review of clarity, tone, grammar, and task fit.
- Technical explanation evidence: reviewed explanation with context, structure, terminology, example, and follow-up if available.
- Meeting/role-play evidence: summarized interaction showing questions, responses, clarification, and professional tone.
- Interview response evidence: captured or summarized answer with follow-up evaluation.
- Portfolio artifact evidence: reviewed artifact connected to learning skills, feedback, limitations, and transfer context.

## Assessment Output Guidance

- Assessment output SHOULD identify the target learning skill, evidence reviewed, dimension-level findings, weak areas, mastery recommendation, and next action.
- Mastery recommendations MUST reference evidence or explicit user instruction.
- Missing evidence MUST be reported honestly.
- Assessment output SHOULD distinguish assumptions, exposure, participation, and demonstrated competence.
- Assessment output SHOULD propose state updates only when evidence exists.

## Review Trigger Guidance

- Repeated tense errors SHOULD suggest review of `english.present-simple-continuous` or `english.past-simple-present-perfect`.
- Repeated article errors SHOULD suggest review of `english.articles-determiners`.
- Repeated preposition errors SHOULD suggest review of `english.prepositions-work-communication`.
- Word order errors SHOULD suggest review of `english.sentence-structure-error-correction`.
- Direct translation SHOULD suggest review of `english.avoiding-direct-translation`.
- Unnatural collocation SHOULD suggest review of `english.collocations`.
- Weak blocker explanation SHOULD suggest review of `english.blocker-explanation`.
- Weak follow-up answers SHOULD suggest review of `english.handling-followups-unknowns`.
- Unclear technical explanation SHOULD suggest review of `english.technical-concept-explanation`.
- Pronunciation clarity issue SHOULD suggest review of `english.pronunciation-clarity-stress`.
- Weak listening gist SHOULD suggest review of `english.listening-main-idea`.
- Weak listening details SHOULD suggest review of `english.listening-detail`.
- Overly direct tone SHOULD suggest review of `english.professional-tone-filler-linking`.
- Weak writing clarity SHOULD suggest review of `english.professional-writing` or `english.concise-writing-tone-correction`.
- Weak interview transfer SHOULD suggest review of `english.interview-readiness-transfer`.

## Speaking Assessment Guidance

- Speaking assessment SHOULD use captured or summarized learner output.
- Assessment SHOULD evaluate fluency, accuracy, pronunciation clarity, structure, and task fit.
- Short answers SHOULD not be over-penalized for limited complexity when the target is foundation-level output.
- Long-form speaking SHOULD be assessed for coherence, accuracy retention, and audience awareness.
- Speaking participation alone MUST NOT imply mastery.

## Listening and Pronunciation Assessment Guidance

- Listening assessment SHOULD compare learner summaries or answers to source content when available.
- Listening exposure alone MUST NOT imply mastery.
- Pronunciation assessment SHOULD prioritize intelligibility and clarity over accent imitation.
- Shadowing repetition alone MUST NOT imply mastery.
- Pronunciation evidence SHOULD note the reviewed feature, such as clarity, word stress, sentence stress, intonation, or connected speech recognition.

## Writing Assessment Guidance

- Writing assessment SHOULD review clarity, grammar, tone, audience fit, actionability, and concision.
- Before-and-after revisions SHOULD be used when assessing self-correction or improvement.
- Emails, chat messages, PR comments, technical summaries, and documentation notes SHOULD be assessed against their communication purpose.
- Writing polish MUST NOT hide missing meaning or unclear task fit.

## Interview Assessment Guidance

- Interview assessment SHOULD include follow-up questions when possible.
- Behavioral answers SHOULD be assessed for concrete context, action, result, reflection, and relevance.
- Technical answers SHOULD be assessed for correctness, structure, explanation quality, and handling of uncertainty.
- Speed MAY matter when the goal is interview fluency, but correctness and clarity remain primary.
- Fluent wording MUST NOT be treated as correctness.

## Portfolio Assessment Guidance

- Portfolio assessment SHOULD identify artifacts, related learning skills, review criteria, evidence quality, and limitations.
- Artifact existence alone MUST NOT imply mastery.
- Portfolio artifacts MAY support transfer and higher mastery when reviewed across realistic contexts.
- Portfolio assessment SHOULD identify next actions, review needs, or missing evidence.
- Portfolio progress belongs in learner state, not this domain pack.

## Localization Notes

- Feedback and explanations MAY be delivered in Azerbaijani when learner or project preferences require it.
- English target examples, phrases, collocations, interview answers, and learner outputs SHOULD remain in English where appropriate.
- Azerbaijani MUST NOT be hardcoded as the only framework language.
- Localization preferences MUST NOT change evidence, mastery, or learner state semantics.
- Localization behavior SHOULD follow `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Should assessment map explicitly to CEFR descriptors or only to framework mastery levels first?
- Which English learning skills require human conversation evidence before M5 or M6?
- How should pronunciation be assessed without requiring audio storage?
- What minimum evidence is required for speaking portfolio mastery recommendations?
