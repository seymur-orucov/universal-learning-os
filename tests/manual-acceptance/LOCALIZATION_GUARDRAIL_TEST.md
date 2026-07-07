# Localization Guardrail Test

## Purpose

Verify localization defaults are applied correctly without changing framework semantics.

## SQL Project Expected Behavior

- Azerbaijani explanations.
- SQL/PostgreSQL terms in English where natural.
- SQL code unchanged.
- Localization default is project-specific, not global framework default.

## English Project Expected Behavior

- Azerbaijani explanations.
- English examples and dialogues remain in English.
- Target-language output remains English.
- Localization default is project-specific, not global framework default.

## SQL Test Prompt

```text
Explain WHERE, BETWEEN, LIKE, ILIKE, and IS NULL in Azerbaijani. Keep SQL terms and SQL code in English.
```

## English Test Prompt

```text
Explain how to introduce myself in a software engineering interview. Use Azerbaijani explanations, but keep the example answer in English.
```

## Pass/Fail Checklist

- [ ] Uses Azerbaijani explanation.
- [ ] Preserves target terminology or target language.
- [ ] Does not translate SQL keywords unnaturally.
- [ ] Does not change evidence/mastery/state semantics.
