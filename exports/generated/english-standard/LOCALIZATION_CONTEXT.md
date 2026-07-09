# Localization Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/LOCALIZATION_SPEC.md

# Localization Specification

## Purpose

Define framework-level policy for instructional language and terminology language.

## Scope

This specification governs user-facing teaching text, domain terminology preservation, learner language preferences, and domain-pack terminology guidance.

## Non-Goals

- It does not hardcode one global framework language.
- It does not define concrete YAML fields or schemas.
- It does not translate domain content.
- It does not define locale-specific UI behavior.

## Core Concepts

- Instruction Language: the language used for explanations, feedback, lesson flow, and user-facing teaching text.
- Terminology Language: the preferred language for domain-specific technical terms.
- Term Preservation: the rule that important domain terms may remain untranslated when terminology language differs from instruction language.
- Glossary Mapping: optional domain-pack mapping between original terms, translated explanations, examples, and usage notes.
- Learner Language Preference: learner-specific language configuration, later stored in learner profile or learner state.
- Domain Language Policy: domain-pack-specific guidance for how terminology should be presented.

## Normative Requirements

- The framework MUST support separate instruction language and terminology language preferences.
- User-facing teaching output SHOULD follow the learner's instruction language when available.
- Domain-specific technical terms SHOULD remain in the terminology language when the learner preference requires it.
- When instruction language and terminology language differ, explanations MAY include a short clarification in the instruction language, but MUST NOT replace important technical terms with unnatural translations.
- Domain packs SHOULD provide glossary guidance for important terms when terminology preservation matters.
- Commands that produce lessons, practice, reviews, assessments, interviews, or progress reports SHOULD respect localization preferences.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.
- If language preferences are missing, commands SHOULD use the project or user-provided language context.

## Example Preference

A learner or project MAY request Azerbaijani as the instruction language and English as the terminology language. In that case, explanations and feedback should be in Azerbaijani while important technical terms remain in English when natural and domain-appropriate.

## Relationships

- Learner preference storage is described conceptually in `specification/STATE_SPEC.md`.
- Domain glossary guidance belongs to domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- User-facing command behavior is governed by `specification/COMMAND_SPEC.md`.
- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.

## OPEN QUESTION

- Should language preferences use BCP 47 language tags once schemas exist?
- Should terminology language support multiple preferred languages ordered by priority?
- Where should project-level language defaults be stored before application configuration exists?

## Source: domains/english/DOMAIN.md

# English for Software Engineers

## Domain Identity

- Domain id: `english`
- Domain title: `English for Software Engineers`
- Domain version: `0.1.0-draft`

## Target Audience

- B1 learners aiming for B2/C1 professional English.
- Software engineers who need English for interviews, meetings, documentation, technical explanations, and remote work.
- Learners who want speaking-first English with grammar accuracy and vocabulary growth.

## Domain Goals

- Improve speaking fluency and confidence.
- Improve grammar accuracy for professional communication.
- Build workplace and interview vocabulary.
- Improve listening comprehension.
- Practice shadowing and pronunciation.
- Develop technical explanation skills.
- Improve writing for emails, chat, PR comments, summaries, and documentation.
- Prepare for software engineering interviews and remote communication.

## Expected Outcomes

- Learner can speak about daily work, projects, blockers, decisions, and tradeoffs.
- Learner can explain technical concepts clearly.
- Learner can answer and ask interview questions.
- Learner can write concise professional messages.
- Learner can understand common workplace and technical discussions.
- Learner can use grammar and vocabulary with increasing accuracy.
- Learner can self-correct common speaking and writing mistakes.

## Supported Tracks

- `english.main`: B1-to-C1 speaking-first professional English track.
- `english.speaking`: focused fluency, pronunciation, and shadowing track.
- `english.interview`: software engineering interview English track.
- `english.workplace`: meetings, status updates, blockers, feedback, and written communication track.
- `english.writing`: emails, chat messages, PR comments, summaries, and documentation track.

## Localization Policy

- Instruction language MAY be Azerbaijani for the initial project preference.
- Target language is English.
- Examples, dialogues, vocabulary, collocations, shadowing scripts, and learner output SHOULD be in English where appropriate.
- Explanations MAY be in Azerbaijani when learner or project preference requires it.
- English terms and phrases SHOULD remain in English.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Prerequisites

- Approximate A2/B1 English foundation for the main track.
- No requirement for advanced grammar before starting.
- Software engineering context is useful but not required for general communication parts.

## Non-Goals

- This domain is not a full IELTS/TOEFL certification course at draft stage.
- This domain is not a general school grammar-only course.
- This domain does not contain learner-specific progress.
- This domain does not certify C1 level without evidence.
- This domain does not replace real conversation practice with humans.

## Relationships

- Syllabus structure belongs in `domains/english/SYLLABUS.md`.
- Learning skill relationships belong in `domains/english/SKILL_GRAPH.md`.
- Practice mapping belongs in `domains/english/PRACTICE_RULES.md`.
- Assessment mapping belongs in `domains/english/ASSESSMENT_RULES.md`.
- Project guidance belongs in `domains/english/PROJECTS.md`.
- Glossary guidance belongs in `domains/english/GLOSSARY.md`.

## OPEN QUESTION

- Should this domain align explicitly to CEFR descriptors in future stages?
- Which English variety or accent assumptions should be declared for listening and pronunciation practice?
- How should human conversation practice be represented without storing learner-private recordings?

## Source: domains/english/GLOSSARY.md

# English Glossary

## Glossary Overview

This glossary supports the `english` domain pack by preserving English target terms while providing concise Azerbaijani explanations for the initial project preference.

The glossary follows `specification/LOCALIZATION_SPEC.md`. It is terminology guidance, not a lesson body, script, vocabulary drill, dialogue bank, listening transcript, shadowing script, learner state, or assessment record.

## Glossary Conventions

- English target terms SHOULD remain in English.
- Azerbaijani explanations SHOULD clarify meaning without replacing English target phrases with unnatural translations.
- Azerbaijani instruction with English target language is a project preference, not a global framework default.
- Glossary entries SHOULD support speaking practice, writing review, interviews, listening, pronunciation, and portfolio work.
- Related learning skills reference `domains/english/SKILL_GRAPH.md`.

## Core Communication Terms

### `fluency`

- Terminology language: English
- Azerbaijani explanation: Danışığın və ya yazının axıcı və davamlı şəkildə getməsi.
- Usage note: Fluency accuracy-ni əvəz etmir; ikisi birlikdə qiymətləndirilməlidir.
- Related learning skills:
  - `english.fluency-accuracy-pressure`

### `accuracy`

- Terminology language: English
- Azerbaijani explanation: Grammar, vocabulary, pronunciation və mənanın düzgün istifadə olunması.
- Usage note: Accuracy real ünsiyyətdə başa düşülən və doğru məna yaratmalıdır.
- Related learning skills:
  - `english.sentence-structure-error-correction`

### `clarity`

- Terminology language: English
- Azerbaijani explanation: Fikrin aydın, başa düşülən və qarışıqsız ifadə olunması.
- Usage note: Clarity həm speaking, həm writing, həm də technical explanation üçün əsasdır.
- Related learning skills:
  - `english.technical-concept-explanation`

### `coherence`

- Terminology language: English
- Azerbaijani explanation: Fikirlərin məntiqli ardıcıllıqla və əlaqəli şəkildə verilməsi.
- Usage note: Coherence long-form speaking və writing üçün vacibdir.
- Related learning skills:
  - `english.longform-c1-defense-paraphrase`

### `confidence`

- Terminology language: English
- Azerbaijani explanation: İngilis dilində danışmağa və cavab verməyə psixoloji hazırlıq və rahatlıq.
- Usage note: Confidence sübut deyil; reviewed output lazımdır.
- Related learning skills:
  - `english.speaking-confidence`

### `natural phrasing`

- Terminology language: English
- Azerbaijani explanation: İngilis dilində süni tərcümə kimi səslənməyən təbii ifadə forması.
- Usage note: Natural phrasing direct translation riskini azaldır.
- Related learning skills:
  - `english.natural-phrasing-paraphrasing`

### `paraphrasing`

- Terminology language: English
- Azerbaijani explanation: Eyni fikri başqa sözlərlə, mənanı saxlayaraq ifadə etmək.
- Usage note: Paraphrasing meaning-i dəyişməməlidir.
- Related learning skills:
  - `english.natural-phrasing-paraphrasing`

### `self-correction`

- Terminology language: English
- Azerbaijani explanation: Learner-in öz səhvini görüb düzəltməsi.
- Usage note: Self-correction evidence üçün original və corrected output faydalıdır.
- Related learning skills:
  - `english.self-correction-feedback-review`

### `filler words`

- Terminology language: English
- Azerbaijani explanation: Danışıqda düşünmək üçün işlədilən, bəzən artıq istifadə olunan sözlər və səslər.
- Usage note: Filler words tam qadağan deyil, amma çox istifadə clarity-ni azalda bilər.
- Related learning skills:
  - `english.reducing-hesitation`

### `professional tone`

- Terminology language: English
- Azerbaijani explanation: İş mühitinə uyğun hörmətli, aydın və balanslı üslub.
- Usage note: Professional tone email, chat, feedback və meeting üçün dəyişə bilər.
- Related learning skills:
  - `english.professional-tone-filler-linking`

### `register`

- Terminology language: English
- Azerbaijani explanation: Dilin formal, neutral və ya informal səviyyəsi.
- Usage note: Register audience və communication channel-a uyğun seçilməlidir.
- Related learning skills:
  - `english.professional-writing`

### `audience awareness`

- Terminology language: English
- Azerbaijani explanation: Fikri dinləyən və ya oxuyan şəxsin səviyyəsinə, ehtiyacına və kontekstinə uyğunlaşdırmaq.
- Usage note: Technical explanation audience awareness olmadan çox çətin və ya çox sadə ola bilər.
- Related learning skills:
  - `english.examples-simplification`

## Grammar Terms

### `sentence pattern`

- Terminology language: English
- Azerbaijani explanation: Cümlə qurmaq üçün təkrarlana bilən struktur.
- Usage note: Sentence pattern speaking-də sürətli və doğru output üçün kömək edir.
- Related learning skills:
  - `english.sentence-structure-error-correction`

### `tense`

- Terminology language: English
- Azerbaijani explanation: Hadisənin vaxtını göstərən grammar kateqoriyası.
- Usage note: Tense choice meaning-i dəyişə bilər.
- Related learning skills:
  - `english.past-simple-present-perfect`

### `aspect`

- Terminology language: English
- Azerbaijani explanation: Hadisənin davamlı, tamamlanmış və ya nəticə ilə bağlı xarakterini göstərən anlayış.
- Usage note: Aspect present perfect və continuous formalarını anlamağa kömək edir.
- Related learning skills:
  - `english.present-simple-continuous`

### `present simple`

- Terminology language: English
- Azerbaijani explanation: Habit, fact və routine ifadə etmək üçün istifadə olunan present form.
- Usage note: Current temporary action üçün çox vaxt present continuous lazımdır.
- Related learning skills:
  - `english.present-simple-continuous`

### `present continuous`

- Terminology language: English
- Azerbaijani explanation: Hazırda davam edən və ya müvəqqəti action üçün istifadə olunan present form.
- Usage note: Current work izahında çox istifadə olunur.
- Related learning skills:
  - `english.describing-current-work`

### `past simple`

- Terminology language: English
- Azerbaijani explanation: Keçmişdə tamamlanmış hadisəni ifadə edən tense.
- Usage note: Specific past time varsa past simple çox vaxt uyğundur.
- Related learning skills:
  - `english.past-simple-present-perfect`

### `present perfect`

- Terminology language: English
- Azerbaijani explanation: Experience, recent result və ya indiki relevance olan keçmiş hadisə üçün istifadə olunan form.
- Usage note: Interview-də experience izahında faydalıdır.
- Related learning skills:
  - `english.explaining-experience`

### `future forms`

- Terminology language: English
- Azerbaijani explanation: Plan, intention, prediction və next steps ifadə edən formalar.
- Usage note: Commitment level seçilən future form-dan asılı ola bilər.
- Related learning skills:
  - `english.future-forms`

### `modal verb`

- Terminology language: English
- Azerbaijani explanation: Ability, advice, obligation, possibility və polite request ifadə edən auxiliary verb.
- Usage note: Can, should, must, might kimi sözlər tone-a təsir edir.
- Related learning skills:
  - `english.modal-verbs`

### `conditional`

- Terminology language: English
- Azerbaijani explanation: Şərt və nəticəni ifadə edən sentence pattern.
- Usage note: Tradeoff və scenario explanation üçün faydalıdır.
- Related learning skills:
  - `english.conditionals-basics`

### `article`

- Terminology language: English
- Azerbaijani explanation: A, an, the kimi noun-dan əvvəl işlənən determiners.
- Usage note: Article səhvləri meaning və naturalness-a təsir edə bilər.
- Related learning skills:
  - `english.articles-determiners`

### `determiner`

- Terminology language: English
- Azerbaijani explanation: Noun-un hansı və ya nə qədər olduğunu göstərən söz.
- Usage note: This, that, some, each kimi determiners reference-i dəqiqləşdirir.
- Related learning skills:
  - `english.articles-determiners`

### `preposition`

- Terminology language: English
- Azerbaijani explanation: Time, place, responsibility və relationship göstərən kiçik söz.
- Usage note: Preposition-lar çox vaxt collocation kimi öyrənilməlidir.
- Related learning skills:
  - `english.prepositions-work-communication`

### `word order`

- Terminology language: English
- Azerbaijani explanation: Cümlədə sözlərin düzgün ardıcıllığı.
- Usage note: English word order direct translation ilə tez pozulur.
- Related learning skills:
  - `english.sentence-structure-error-correction`

## Speaking and Fluency Terms

### `short answer`

- Terminology language: English
- Azerbaijani explanation: Qısa, birbaşa və məqsədə uyğun cavab.
- Usage note: Short answer foundation speaking üçün yaxşı evidence ola bilər.
- Related learning skills:
  - `english.speaking-confidence`

### `structured answer`

- Terminology language: English
- Azerbaijani explanation: Context, main point, support və conclusion ilə qurulmuş cavab.
- Usage note: Interview və technical explanation üçün vacibdir.
- Related learning skills:
  - `english.behavioral-interview-answers`

### `long-form speaking`

- Terminology language: English
- Azerbaijani explanation: Daha uzun və ardıcıl danışıqla fikir izah etmək.
- Usage note: Long-form speaking M5/M6 evidence üçün reviewed olmalıdır.
- Related learning skills:
  - `english.longform-c1-defense-paraphrase`

### `follow-up question`

- Terminology language: English
- Azerbaijani explanation: Əsas cavabdan sonra əlavə izah və ya reasoning yoxlamaq üçün verilən sual.
- Usage note: Follow-up question answer defense-i ölçməyə kömək edir.
- Related learning skills:
  - `english.handling-followups-unknowns`

### `clarification`

- Terminology language: English
- Azerbaijani explanation: Sualı, tələbi və ya fikri daha dəqiq başa düşmək üçün əlavə izah və ya sual.
- Usage note: Clarification professional communication-da weakness deyil, düzgün strategiyadır.
- Related learning skills:
  - `english.asking-for-clarification`

### `hesitation`

- Terminology language: English
- Azerbaijani explanation: Danışıqda uzun dayanma, tərəddüd və ya cavabı başlaya bilməmə.
- Usage note: Hesitation azaldılmalıdır, amma accuracy qurban verilməməlidir.
- Related learning skills:
  - `english.reducing-hesitation`

### `pressure response`

- Terminology language: English
- Azerbaijani explanation: Vaxt, follow-up və ya interview təzyiqi altında verilən cavab.
- Usage note: Pressure response correctness və clarity ilə birlikdə qiymətləndirilməlidir.
- Related learning skills:
  - `english.fluency-accuracy-pressure`

### `argument structure`

- Terminology language: English
- Azerbaijani explanation: Claim, reason, evidence, limitation və conclusion ilə fikir quruluşu.
- Usage note: B2/C1 discussion üçün əsasdır.
- Related learning skills:
  - `english.argument-nuance-hedging`

### `hedging`

- Terminology language: English
- Azerbaijani explanation: Fikri ehtiyatlı, dəqiq confidence level ilə ifadə etmək.
- Usage note: Might, likely, in some cases kimi phrases overconfidence-i azaldır.
- Related learning skills:
  - `english.argument-nuance-hedging`

### `nuance`

- Terminology language: English
- Azerbaijani explanation: Fikirdə incə fərq, limit və kontekst ifadə etmək qabiliyyəti.
- Usage note: Nuance C1-style explanation üçün vacibdir.
- Related learning skills:
  - `english.longform-c1-defense-paraphrase`

## Listening and Pronunciation Terms

### `listening gist`

- Terminology language: English
- Azerbaijani explanation: Dinlənilən mətnin ümumi mənasını başa düşmək.
- Usage note: Gist detail-dən əvvəl gəlir.
- Related learning skills:
  - `english.listening-main-idea`

### `listening detail`

- Terminology language: English
- Azerbaijani explanation: Dinlənilən mətn daxilində konkret faktları, qərarları və action items-i tutmaq.
- Usage note: Detail extraction source-content ilə müqayisə olunmalıdır.
- Related learning skills:
  - `english.listening-detail`

### `shadowing`

- Terminology language: English
- Azerbaijani explanation: Audio nitqi dinləyib ritm və pronunciation üçün təkrar etmə praktikası.
- Usage note: Shadowing repetition təkbaşına mastery deyil.
- Related learning skills:
  - `english.shadowing`

### `pronunciation`

- Terminology language: English
- Azerbaijani explanation: Sözlərin və səslərin başa düşülən tələffüzü.
- Usage note: Əsas məqsəd accent imitation deyil, intelligibility-dir.
- Related learning skills:
  - `english.pronunciation-clarity-stress`

### `intelligibility`

- Terminology language: English
- Azerbaijani explanation: Danışığın dinləyici tərəfindən başa düşülməsi.
- Usage note: Pronunciation assessment üçün əsas kriteriyadır.
- Related learning skills:
  - `english.pronunciation-clarity-stress`

### `word stress`

- Terminology language: English
- Azerbaijani explanation: Söz daxilində hansı hecanın daha güclü səslənməsi.
- Usage note: Technical terms-də word stress clarity-yə təsir edir.
- Related learning skills:
  - `english.pronunciation-clarity-stress`

### `sentence stress`

- Terminology language: English
- Azerbaijani explanation: Cümlədə əsas mənalı sözlərin vurğulanması.
- Usage note: Sentence stress meaning və emphasis-i aydınlaşdırır.
- Related learning skills:
  - `english.pronunciation-clarity-stress`

### `intonation`

- Terminology language: English
- Azerbaijani explanation: Danışıqda səsin qalxıb-enməsi və ritmik tonu.
- Usage note: Intonation politeness və meaning-ə təsir edə bilər.
- Related learning skills:
  - `english.intonation-connected-speech`

### `connected speech`

- Terminology language: English
- Azerbaijani explanation: Natural speech-də sözlərin bir-birinə bağlanaraq səslənməsi.
- Usage note: Connected speech recognition listening üçün vacibdir.
- Related learning skills:
  - `english.intonation-connected-speech`

## Workplace Communication Terms

### `small talk`

- Terminology language: English
- Azerbaijani explanation: İş və sosial mühitdə qısa, yüngül münasibət quran söhbət.
- Usage note: Small talk professional tone ilə uyğun olmalıdır.
- Related learning skills:
  - `english.speaking-confidence`

### `status update`

- Terminology language: English
- Azerbaijani explanation: Görülən iş, current work, blocker və next steps haqqında qısa məlumat.
- Usage note: Status update concise və actionable olmalıdır.
- Related learning skills:
  - `english.work-status-updates`

### `blocker`

- Terminology language: English
- Azerbaijani explanation: İşi davam etdirməyə mane olan problem və ya dependency.
- Usage note: Blocker explanation impact və help request daxil etməlidir.
- Related learning skills:
  - `english.blocker-explanation`

### `next steps`

- Terminology language: English
- Azerbaijani explanation: Görüləcək növbəti işlər və planlanan actions.
- Usage note: Next steps owner və dependency ilə daha aydın olur.
- Related learning skills:
  - `english.progress-next-steps`

### `priority`

- Terminology language: English
- Azerbaijani explanation: İşin əhəmiyyət və urgency sırası.
- Usage note: Priority explanation reason və tradeoff tələb edir.
- Related learning skills:
  - `english.explaining-priority`

### `dependency`

- Terminology language: English
- Azerbaijani explanation: Bir işin başlaması və ya bitməsi üçün lazım olan başqa iş və ya şərt.
- Usage note: Dependency blocker-ə çevrilə bilər.
- Related learning skills:
  - `english.progress-next-steps`

### `action item`

- Terminology language: English
- Azerbaijani explanation: Meeting və ya discussion-dan sonra görülməli konkret iş.
- Usage note: Action item owner və deadline ilə daha faydalıdır.
- Related learning skills:
  - `english.decision-summary-confirmation`

### `meeting participation`

- Terminology language: English
- Azerbaijani explanation: Meeting-də sual vermək, cavablandırmaq, clarify etmək və fikir bildirmək.
- Usage note: Silent attendance meeting participation evidence deyil.
- Related learning skills:
  - `english.meeting-participation`

### `decision summary`

- Terminology language: English
- Azerbaijani explanation: Verilən qərarları, səbəbləri, owners və next steps-i qısa xülasə etmək.
- Usage note: Decision summary options ilə decisions-ı qarışdırmamalıdır.
- Related learning skills:
  - `english.decision-summary-confirmation`

### `feedback`

- Terminology language: English
- Azerbaijani explanation: İş, fikir və ya davranış haqqında improvement yönümlü rəy.
- Usage note: Feedback actionable və respectful olmalıdır.
- Related learning skills:
  - `english.feedback-exchange`

### `polite interruption`

- Terminology language: English
- Azerbaijani explanation: Söhbəti hörmətli şəkildə qısa dayandırıb clarification və ya əlavə fikir bildirmək.
- Usage note: Polite interruption purpose və timing tələb edir.
- Related learning skills:
  - `english.polite-interruption`

## Technical Explanation Terms

### `technical explanation`

- Terminology language: English
- Azerbaijani explanation: Texniki anlayışı, prosesi, qərarı və ya tradeoff-u aydın izah etmək.
- Usage note: Technical explanation example və audience awareness tələb edir.
- Related learning skills:
  - `english.technical-concept-explanation`

### `architecture explanation`

- Terminology language: English
- Azerbaijani explanation: System components, responsibilities və communication flow haqqında izah.
- Usage note: Architecture explanation relationships-i göstərməlidir.
- Related learning skills:
  - `english.architecture-explanation`

### `root cause`

- Terminology language: English
- Azerbaijani explanation: Problemə səbəb olan əsas underlying səbəb.
- Usage note: Root cause symptom ilə qarışdırılmamalıdır.
- Related learning skills:
  - `english.bug-root-cause-explanation`

### `tradeoff`

- Terminology language: English
- Azerbaijani explanation: Bir üstünlük üçün başqa bir üstünlükdən qismən imtina etmə.
- Usage note: Tradeoff explanation criteria və context tələb edir.
- Related learning skills:
  - `english.tradeoff-explanation`

### `implementation decision`

- Terminology language: English
- Azerbaijani explanation: Konkret implementation approach seçimi və onun səbəbi.
- Usage note: Decision alternatives və constraints ilə izah edilməlidir.
- Related learning skills:
  - `english.implementation-decision-explanation`

### `API explanation`

- Terminology language: English
- Azerbaijani explanation: API-nin nə etdiyi, necə istifadə olunduğu və data flow-u haqqında izah.
- Usage note: API explanation endpoint list deyil, behavior izahıdır.
- Related learning skills:
  - `english.frontend-database-api-explanation`

### `frontend explanation`

- Terminology language: English
- Azerbaijani explanation: UI behavior, component responsibility və user flow haqqında izah.
- Usage note: User impact və state changes aydın olmalıdır.
- Related learning skills:
  - `english.frontend-database-api-explanation`

### `database explanation`

- Terminology language: English
- Azerbaijani explanation: Data model, query behavior və ya database flow haqqında conceptual izah.
- Usage note: Technical depth audience-a uyğun seçilməlidir.
- Related learning skills:
  - `english.frontend-database-api-explanation`

### `example`

- Terminology language: English
- Azerbaijani explanation: Fikri daha aydın edən konkret nümunə.
- Usage note: Example concept-i dəyişməməlidir.
- Related learning skills:
  - `english.examples-simplification`

### `simplification`

- Terminology language: English
- Azerbaijani explanation: Çətin fikri daha sadə və başa düşülən formada ifadə etmək.
- Usage note: Simplification oversimplification olmamalıdır.
- Related learning skills:
  - `english.examples-simplification`

## Writing Terms

### `email`

- Terminology language: English
- Azerbaijani explanation: İş mühitində daha formal və strukturlaşdırılmış yazılı mesaj.
- Usage note: Email context, purpose və action request tələb edir.
- Related learning skills:
  - `english.email-chat-writing`

### `chat message`

- Terminology language: English
- Azerbaijani explanation: Qısa, async və adətən daha informal iş mesajı.
- Usage note: Chat message qısa olsa da context itirməməlidir.
- Related learning skills:
  - `english.email-chat-writing`

### `PR comment`

- Terminology language: English
- Azerbaijani explanation: Pull request daxilində kod və ya design haqqında yazılan rəy.
- Usage note: PR comment specific, respectful və actionable olmalıdır.
- Related learning skills:
  - `english.pr-comments`

### `technical summary`

- Terminology language: English
- Azerbaijani explanation: Texniki işin, qərarın və ya discussion-un qısa və aydın xülasəsi.
- Usage note: Technical summary audience və purpose-a uyğun olmalıdır.
- Related learning skills:
  - `english.technical-summaries-documentation`

### `documentation note`

- Terminology language: English
- Azerbaijani explanation: İstifadə, qərar, assumption və ya step haqqında qısa documentation qeydi.
- Usage note: Documentation note reader needs nəzərə almalıdır.
- Related learning skills:
  - `english.technical-summaries-documentation`

### `concise writing`

- Terminology language: English
- Azerbaijani explanation: Lazımsız sözləri azaltmaqla aydın və qısa yazmaq.
- Usage note: Concise writing vacib context-i silməməlidir.
- Related learning skills:
  - `english.concise-writing-tone-correction`

### `tone adjustment`

- Terminology language: English
- Azerbaijani explanation: Mesajın üslubunu audience, channel və məqsədə uyğun dəyişmək.
- Usage note: Tone adjustment meaning-i dəyişmədən edilməlidir.
- Related learning skills:
  - `english.concise-writing-tone-correction`

### `revision`

- Terminology language: English
- Azerbaijani explanation: Yazılı və ya spoken output-u feedback əsasında düzəltmək və yaxşılaşdırmaq.
- Usage note: Revision before-and-after evidence üçün faydalıdır.
- Related learning skills:
  - `english.self-correction-feedback-review`

## Interview Terms

### `interview answer`

- Terminology language: English
- Azerbaijani explanation: Interview sualına strukturlaşdırılmış və məqsədə uyğun cavab.
- Usage note: Interview answer follow-up suallara davam gətirməlidir.
- Related learning skills:
  - `english.interview-readiness-transfer`

### `behavioral answer`

- Terminology language: English
- Azerbaijani explanation: Keçmiş davranış, situation, action və result haqqında interview cavabı.
- Usage note: Concrete example olmadan weak ola bilər.
- Related learning skills:
  - `english.behavioral-interview-answers`

### `technical answer`

- Terminology language: English
- Azerbaijani explanation: Technical interview sualına reasoning və terminology ilə cavab.
- Usage note: Fluent wording correctness demək deyil.
- Related learning skills:
  - `english.technical-interview-answers`

### `storytelling`

- Terminology language: English
- Azerbaijani explanation: Təcrübəni strukturla və maraqlı, uyğun ardıcıllıqla danışmaq.
- Usage note: Storytelling həqiqi evidence və relevance saxlamalıdır.
- Related learning skills:
  - `english.interviewer-questions-storytelling-tradeoffs`

### `interviewer question`

- Terminology language: English
- Azerbaijani explanation: Candidate-in interviewer-ə team, role və expectations haqqında verdiyi sual.
- Usage note: Generic suallar zəif təsir bağışlaya bilər.
- Related learning skills:
  - `english.interviewer-questions-storytelling-tradeoffs`

### `unknown question`

- Terminology language: English
- Azerbaijani explanation: Learner-in cavabını tam bilmədiyi interview və ya discussion sualı.
- Usage note: Unknown question zamanı honest uncertainty və reasoning vacibdir.
- Related learning skills:
  - `english.handling-followups-unknowns`

### `answer defense`

- Terminology language: English
- Azerbaijani explanation: Cavabı follow-up və challenge qarşısında izah edib əsaslandırmaq.
- Usage note: Answer defense M6 evidence üçün güclü ola bilər.
- Related learning skills:
  - `english.longform-c1-defense-paraphrase`

## Assessment and Evidence Terms

### `captured output`

- Terminology language: English
- Azerbaijani explanation: Learner output-un saxlanmış və ya qeyd edilmiş forması.
- Usage note: Audio capture məcburi deyil; privacy nəzərə alınmalıdır.
- Related learning skills:
  - `english.speaking-portfolio-evidence`

### `summarized output`

- Terminology language: English
- Azerbaijani explanation: Learner output-un məzmun və performans baxımından qısa təsviri.
- Usage note: Summary evidence üçün kifayət edə bilər, əgər review aydındırsa.
- Related learning skills:
  - `english.speaking-portfolio-evidence`

### `reviewed output`

- Terminology language: English
- Azerbaijani explanation: Feedback və ya assessment ilə yoxlanmış learner output.
- Usage note: Reviewed output mastery recommendation üçün əsasdır.
- Related learning skills:
  - `english.self-correction-feedback-review`

### `portfolio artifact`

- Terminology language: English
- Azerbaijani explanation: Portfolio üçün hazırlanmış danışıq, yazı, dinləmə və ya interview output-u.
- Usage note: Artifact existence mastery deyil; review lazımdır.
- Related learning skills:
  - `english.speaking-portfolio-evidence`

### `evidence`

- Terminology language: English
- Azerbaijani explanation: Learner-in nəyi bacardığını göstərən müşahidə olunan output və review.
- Usage note: Evidence learner state update üçün əsas ola bilər.
- Related learning skills:
  - `english.self-correction-feedback-review`

### `mastery recommendation`

- Terminology language: English
- Azerbaijani explanation: Evidence əsasında mastery səviyyəsi barədə təklif.
- Usage note: Recommendation learner state-i avtomatik dəyişməməlidir.
- Related learning skills:
  - `english.workplace-communication-transfer`

## Usage Notes

- Glossary entries SHOULD support future lesson explanations, feedback, project review, interviews, and portfolio work.
- Glossary entries MUST NOT become full lessons, scripts, vocabulary drills, dialogue banks, or assessment records.
- English target phrases SHOULD remain in English where appropriate.
- Azerbaijani explanations MAY be used when learner or project preferences require it.
- Glossary guidance MUST NOT change evidence, mastery, or learner state semantics.

## OPEN QUESTION

- Which glossary terms need examples before full lesson authoring?
- Should future glossary entries include CEFR level tags?
- Should pronunciation terms include audio-free evaluation notes?
