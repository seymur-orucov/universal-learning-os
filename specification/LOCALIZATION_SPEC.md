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
