# ADR-0004: Localization and Terminology Policy

## Status

Accepted for Stage 2.2.

## Context

Learners may need explanations in one language while preserving technical terms in another. The current intended use includes lessons delivered in Azerbaijani with important technical terms kept in English, but the framework must remain domain-independent and learner-configurable.

## Decision

- Instruction language and terminology language are separate framework concepts.
- Azerbaijani explanations with English technical terms are supported as a learner or project preference.
- The framework will not hardcode Azerbaijani, English, or any other language as the global default.
- Domain packs may provide glossary mapping and domain language policy guidance.
- Localization preferences affect presentation only and MUST NOT change evidence, mastery, or state semantics.

## Rationale

Instruction language controls explanations, feedback, lesson flow, and other user-facing teaching text. Terminology language controls domain-specific technical terms. Separating them avoids unnatural translations of important terms while still making explanations accessible to the learner.

Hardcoding one language would make the framework less reusable across learners, domains, and execution surfaces. Configurable preferences allow a learner to request Azerbaijani instruction with English terminology, while another learner may choose different language behavior.

## Consequences

- Commands and future applications need access to learner, project, or user-provided language context.
- Domain packs should identify important technical terms where preservation matters.
- Glossary guidance can explain terms in the instruction language without replacing the terminology language term.
- Future state or profile schemas need fields for language preferences.

## Provisional Decisions

- No concrete language preference schema exists yet.
- No BCP 47 requirement is enforced yet.
- No domain glossary file format is defined yet.
- Project-level language defaults do not yet have a storage location.

## OPEN QUESTION

- Should future schemas require BCP 47 tags for instruction language and terminology language?
- Should learner profiles or learner state own language preferences?
- How should commands resolve conflicts between learner, project, and explicit user language instructions?
