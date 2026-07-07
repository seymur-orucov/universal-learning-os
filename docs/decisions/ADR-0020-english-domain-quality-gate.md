# ADR-0020: English Domain Quality Gate

## Status

Accepted for Stage 9.5.

## Context

The English domain pack now includes a domain identity, expanded learning skill graph, structured syllabus, practice rules, assessment rules, portfolio guidance, and glossary. Before lesson authoring begins, the domain pack needs a quality gate to check cross-reference integrity, evidence-based mastery boundaries, privacy boundaries, and localization consistency.

English learning creates specific quality risks because speaking, listening, shadowing, interviews, and workplace communication may involve sensitive audio, transcripts, private work details, or informal performance summaries. The domain pack must remain reusable content and MUST NOT become learner state or learner assessment.

## Decision

- A domain quality review is recorded in `domains/english/QUALITY_REVIEW.md`.
- Cross-reference integrity is checked before English lesson authoring.
- Domain pack quality review is kept separate from learner assessment.
- The quality gate protects evidence-based mastery by checking that exposure, generated scripts, generated dialogues, passive listening, shadowing repetition, and lesson completion do not imply mastery.
- The quality gate protects privacy boundaries by confirming that audio and transcript storage are not required by default.
- The quality gate protects localization consistency by confirming that Azerbaijani instruction with English target language is a learner or project preference, not a global framework default.

## Rationale

Cross-reference integrity matters because future lessons, practice sessions, reviews, assessments, portfolios, and learner state records will reference `english.*` learning skill ids. Missing or inconsistent ids would make state updates, evidence records, and review queues unreliable.

Domain pack quality review is different from learner assessment. This gate evaluates reusable domain content and contracts; it does not evaluate a learner, create progress, store evidence, or recommend mastery changes.

Evidence-based mastery must be protected before lesson authoring because language learning can easily confuse exposure with competence. Speaking-first work still requires captured, summarized, or reviewed learner output before mastery can be proposed.

Privacy boundaries must be explicit before future speaking, listening, shadowing, or interview workflows introduce audio, transcripts, or workplace examples. Summaries and reviewed notes MAY provide evidence without requiring raw private artifacts.

Localization consistency is important because this domain supports Azerbaijani instruction with English target language as an initial project preference while preserving framework-level configurability from `specification/LOCALIZATION_SPEC.md`.

## Consequences

- Future English lesson authoring has a documented quality baseline.
- Future command and agent skill workflows can rely on the English domain pack without treating it as learner state.
- Privacy-sensitive evidence capture remains a deliberate future design decision.
- Localization remains configurable and does not alter evidence, mastery, or learner state semantics.

## Provisional Decisions

- `domains/english/QUALITY_REVIEW.md` uses a review date placeholder until an operational review process exists.
- Cross-reference checks are manual or script-assisted until JSON Schema or repository validation tooling exists.
- Audio and transcript storage remain optional and unresolved.
- CEFR mapping remains unresolved and is not yet a formal assessment rubric.

## OPEN QUESTION

- Should quality review files become mandatory for every real domain pack before lesson authoring?
- What validation tooling should eventually enforce domain learning skill reference integrity?
- What privacy policy is required before optional audio or transcript storage is introduced?
- Should CEFR mapping live in `domains/english/ASSESSMENT_RULES.md` or a separate future rubric file?
