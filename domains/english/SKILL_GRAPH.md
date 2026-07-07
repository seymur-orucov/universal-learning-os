# English Learning Skill Graph Skeleton

## Graph Overview

This file defines an initial concise set of English communication learning skills for the `english` domain pack. It is not a complete learning skill graph and does not contain learner state, learner mastery records, lessons, dialogues, or exercises.

Learning skills are learner competencies. They MUST NOT be confused with agent skills.

Mastery targets are expectations for future assessment design. Actual learner mastery belongs in learner state and MUST be supported by evidence or explicit user instruction.

## Initial Learning Skills

### `english.speaking-confidence`

- learning_skill_id: `english.speaking-confidence`
- title: Speaking Confidence
- description: Produce short spoken answers with reduced hesitation in familiar contexts.
- prerequisites: none
- target_mastery: M3
- evidence_requirements: captured or summarized spoken output with feedback.
- related_learning_skills: `english.self-introduction`, `english.daily-routine-speaking`

### `english.self-introduction`

- learning_skill_id: `english.self-introduction`
- title: Professional Self-Introduction
- description: Introduce background, role, goals, and experience clearly.
- prerequisites: `english.speaking-confidence`
- target_mastery: M4
- evidence_requirements: spoken or written self-introduction reviewed for clarity and accuracy.
- related_learning_skills: `english.interview-answers`, `english.professional-writing`

### `english.daily-routine-speaking`

- learning_skill_id: `english.daily-routine-speaking`
- title: Daily Routine Speaking
- description: Describe regular work habits, current tasks, and simple routines.
- prerequisites: `english.speaking-confidence`
- target_mastery: M3
- evidence_requirements: learner output describing routines with grammar and vocabulary review.
- related_learning_skills: `english.present-simple-continuous`, `english.work-status-updates`

### `english.work-status-updates`

- learning_skill_id: `english.work-status-updates`
- title: Work Status Updates
- description: Give concise updates about progress, blockers, priorities, and next steps.
- prerequisites: `english.daily-routine-speaking`
- target_mastery: M4
- evidence_requirements: spoken or written status update reviewed for structure and accuracy.
- related_learning_skills: `english.blocker-explanation`, `english.workplace-vocabulary`

### `english.blocker-explanation`

- learning_skill_id: `english.blocker-explanation`
- title: Blocker Explanation
- description: Explain a problem, impact, attempted solution, and needed help.
- prerequisites: `english.work-status-updates`
- target_mastery: M4
- evidence_requirements: learner-produced blocker explanation with feedback.
- related_learning_skills: `english.meeting-participation`, `english.technical-explanation`

### `english.present-simple-continuous`

- learning_skill_id: `english.present-simple-continuous`
- title: Present Simple and Present Continuous
- description: Use present forms accurately for habits, facts, and current actions.
- prerequisites: none
- target_mastery: M3
- evidence_requirements: spoken or written examples reviewed for form and meaning.
- related_learning_skills: `english.daily-routine-speaking`

### `english.past-simple-present-perfect`

- learning_skill_id: `english.past-simple-present-perfect`
- title: Past Simple and Present Perfect
- description: Distinguish completed past events from experience or recent relevance.
- prerequisites: `english.present-simple-continuous`
- target_mastery: M3
- evidence_requirements: learner output describing experience, incidents, or completed tasks.
- related_learning_skills: `english.interview-answers`

### `english.future-forms`

- learning_skill_id: `english.future-forms`
- title: Future Forms
- description: Express plans, predictions, intentions, and scheduled actions.
- prerequisites: `english.present-simple-continuous`
- target_mastery: M3
- evidence_requirements: learner output about plans or next steps reviewed for meaning.
- related_learning_skills: `english.work-status-updates`

### `english.question-formation`

- learning_skill_id: `english.question-formation`
- title: Question Formation
- description: Ask clear questions for clarification, interviews, and workplace discussion.
- prerequisites: none
- target_mastery: M4
- evidence_requirements: learner-generated questions reviewed for grammar, clarity, and context fit.
- related_learning_skills: `english.meeting-participation`, `english.interview-answers`

### `english.modal-verbs`

- learning_skill_id: `english.modal-verbs`
- title: Modal Verbs
- description: Use modal verbs for ability, advice, obligation, possibility, and polite requests.
- prerequisites: `english.present-simple-continuous`
- target_mastery: M3
- evidence_requirements: learner output using modal verbs in workplace scenarios.
- related_learning_skills: `english.meeting-participation`, `english.professional-writing`

### `english.workplace-vocabulary`

- learning_skill_id: `english.workplace-vocabulary`
- title: Workplace Vocabulary
- description: Use common workplace terms for tasks, blockers, decisions, feedback, and collaboration.
- prerequisites: none
- target_mastery: M4
- evidence_requirements: learner output using workplace vocabulary accurately in context.
- related_learning_skills: `english.work-status-updates`, `english.professional-writing`

### `english.technical-vocabulary`

- learning_skill_id: `english.technical-vocabulary`
- title: Technical Vocabulary
- description: Use software engineering vocabulary accurately in explanations and discussions.
- prerequisites: `english.workplace-vocabulary`
- target_mastery: M4
- evidence_requirements: technical explanation or interview response reviewed for term use.
- related_learning_skills: `english.technical-explanation`

### `english.collocations`

- learning_skill_id: `english.collocations`
- title: Collocations
- description: Use natural word combinations in professional and technical English.
- prerequisites: `english.workplace-vocabulary`
- target_mastery: M4
- evidence_requirements: spoken or written output reviewed for natural phrasing.
- related_learning_skills: `english.professional-writing`, `english.technical-explanation`

### `english.listening-main-idea`

- learning_skill_id: `english.listening-main-idea`
- title: Listening for Main Idea
- description: Identify the overall meaning of workplace or technical audio.
- prerequisites: none
- target_mastery: M3
- evidence_requirements: learner summary of listened content reviewed for gist accuracy.
- related_learning_skills: `english.listening-detail`, `english.shadowing`

### `english.listening-detail`

- learning_skill_id: `english.listening-detail`
- title: Listening for Detail
- description: Extract specific facts, decisions, constraints, or action items from audio.
- prerequisites: `english.listening-main-idea`
- target_mastery: M4
- evidence_requirements: learner notes or answers reviewed against source content.
- related_learning_skills: `english.meeting-participation`

### `english.shadowing`

- learning_skill_id: `english.shadowing`
- title: Shadowing
- description: Repeat English audio to improve rhythm, pronunciation, and automatic phrasing.
- prerequisites: `english.listening-main-idea`
- target_mastery: M3
- evidence_requirements: captured or summarized shadowing attempt with pronunciation feedback.
- related_learning_skills: `english.pronunciation-clarity`

### `english.pronunciation-clarity`

- learning_skill_id: `english.pronunciation-clarity`
- title: Pronunciation Clarity
- description: Produce speech that is understandable in professional contexts.
- prerequisites: `english.shadowing`
- target_mastery: M4
- evidence_requirements: captured or summarized spoken output reviewed for intelligibility.
- related_learning_skills: `english.speaking-confidence`

### `english.technical-explanation`

- learning_skill_id: `english.technical-explanation`
- title: Technical Explanation
- description: Explain software engineering concepts, decisions, and tradeoffs clearly.
- prerequisites: `english.technical-vocabulary`, `english.collocations`
- target_mastery: M5
- evidence_requirements: reviewed spoken or written technical explanation with follow-up.
- related_learning_skills: `english.interview-answers`, `english.professional-writing`

### `english.meeting-participation`

- learning_skill_id: `english.meeting-participation`
- title: Meeting Participation
- description: Contribute to meetings by asking, answering, clarifying, and responding professionally.
- prerequisites: `english.question-formation`, `english.work-status-updates`
- target_mastery: M4
- evidence_requirements: role-play, transcript, or summarized meeting response reviewed for fit.
- related_learning_skills: `english.blocker-explanation`, `english.listening-detail`

### `english.interview-answers`

- learning_skill_id: `english.interview-answers`
- title: Interview Answers
- description: Answer behavioral and technical interview questions with structure and clarity.
- prerequisites: `english.self-introduction`, `english.technical-explanation`
- target_mastery: M5
- evidence_requirements: captured or summarized interview answer with follow-up evaluation.
- related_learning_skills: `english.question-formation`

### `english.professional-writing`

- learning_skill_id: `english.professional-writing`
- title: Professional Writing
- description: Write concise professional messages, summaries, comments, and documentation notes.
- prerequisites: `english.workplace-vocabulary`, `english.modal-verbs`
- target_mastery: M4
- evidence_requirements: learner-written artifact reviewed for clarity, tone, grammar, and task fit.
- related_learning_skills: `english.collocations`, `english.technical-explanation`

## OPEN QUESTION

- Which learning skills should be split into pronunciation, grammar, vocabulary, and fluency subgraphs?
- Should CEFR levels be attached to each learning skill before syllabus expansion?
- Which learning skills require human conversation evidence for M5 or M6?
