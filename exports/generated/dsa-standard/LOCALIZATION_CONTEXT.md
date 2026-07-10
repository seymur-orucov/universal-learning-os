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

## Source: domains/dsa/DOMAIN.md

# Data Structures and Algorithms Domain

## Domain Identity

- Domain id: `dsa`
- Domain title: `Data Structures and Algorithms`
- Domain version: `0.1.0-draft`
- Default track: `dsa.main`
- Default implementation language: JavaScript
- Optional implementation language: TypeScript

## Purpose

Build transferable algorithmic reasoning from foundations to interview-ready problem solving. The domain emphasizes practical implementation, pattern recognition, complexity analysis, guided practice before independent work, and clear interview communication rather than memorized solutions.

## Target Learner

Primary target: Senior Front-End Engineer preparing for technical interviews and improving algorithmic problem-solving.

The sequential path also supports beginners. Experienced developers may use the skill graph and syllabus checkpoints for targeted interview review.

## Prerequisites

- Basic JavaScript syntax, functions, loops, arrays, objects, and tests.
- Comfort reading a function signature and tracing small code examples.
- No prior formal algorithms course is required.
- TypeScript knowledge is optional and is not taught as a separate language topic here.

## Learner Goal and Outcomes

The learner should be able to:

- clarify a problem, constraints, examples, and edge cases before coding;
- describe and analyze a brute-force baseline;
- select a reusable pattern from constraints and data shape;
- implement correct, readable JavaScript or requested TypeScript;
- test normal, boundary, empty, duplicate, and adversarial cases;
- defend final time complexity and space complexity;
- transfer a learned pattern to a changed problem;
- communicate the approach concisely in an interview.

## Canonical Problem-Solving Sequence

Use this sequence in lessons, practice, feedback, reviews, and assessments:

```text
Understand
→ Clarify constraints
→ Identify examples and edge cases
→ Describe brute-force approach
→ Analyze brute-force complexity
→ Look for a pattern or optimization
→ Explain the optimized approach
→ Implement
→ Test
→ Analyze final time and space complexity
```

Do not skip directly from the statement to code unless the learner explicitly requests a shortened workflow and still demonstrates the missing reasoning.

## Mentor Behavior

The mentor should:

- explain step by step with a clear mental model;
- ask the learner to reason before coding;
- compare brute-force and optimized solutions;
- connect constraints to pattern selection;
- require meaningful edge cases and complexity analysis;
- emphasize reusable patterns rather than isolated answers;
- use practical JavaScript examples by default;
- use TypeScript when requested or where typing improves clarity without becoming a TypeScript lesson;
- review correctness, complexity, readability, edge cases, and communication;
- adapt difficulty from demonstrated performance;
- give concise learner-facing feedback and one recommended next action;
- avoid unnecessary trick questions and obscure competitive-programming techniques as the default path.

## Assistance Progression

Do not reveal a full solution immediately by default. Escalate only as needed:

```text
Question
→ small hint
→ stronger hint
→ pseudocode
→ partial implementation
→ full solution only when needed or requested
```

After showing substantial help, use a nearby transfer problem before making a mastery claim.

## Exercise Convention

A normal exercise includes a problem statement, examples, constraints, expected function signature, edge cases to consider, a requested explanation, requested time/space complexity, and an optional optimization follow-up.

Default JavaScript style:

```js
function moveZeroes(nums) {
  // learner implementation
}
```

Requested or clarity-improving TypeScript style:

```ts
function moveZeroes(nums: number[]): void {
  // learner implementation
}
```

Problems must not depend on browser APIs unless the problem explicitly requires them.

## Localization

- Default instruction language: Azerbaijani.
- Preserve natural DSA technical terminology in English.
- Keep code, function names, variable names, syntax, test names, and complexity notation in English.
- Follow `specification/LOCALIZATION_SPEC.md` if the learner provides different preferences.

## Learner-Facing Mentor Mode

Normal lessons, practice, reviews, assessments, and code feedback must not expose internal skill IDs, YAML state updates, `Proposed State Updates`, `Evidence Generated`, mastery tables, pack implementation details, or audit/debug notes. Show progress metadata only when explicitly requested.

Mastery requires learner-produced evidence. Displaying a lesson, hint, pseudocode, or solution is not evidence of mastery.

## Scope Boundaries

- This domain covers DSA reasoning and implementation, not general JavaScript or TypeScript language instruction.
- Front-End System Design and Node.js are not part of this domain.
- Competitive-programming-specific tricks are optional extensions, not the default curriculum.
- Learner progress remains separate from this reusable pack.
- Daily repository learner-state updates are not required.

## Source: domains/dsa/GLOSSARY.md

# DSA Glossary

Default explanations are Azerbaijani while the following technical terms remain in English where natural. Code and identifiers remain English.

| Term | Azerbaijani guidance |
| --- | --- |
| Data Structure | Məlumatın saxlanması və istifadəsi üçün təşkil forması; termini English saxlamaq olar. |
| Algorithm | Problemi həll edən sonlu addımlar ardıcıllığı. |
| Big O | Input böyüdükcə resurs artımının yuxarı sərhəd modeli. |
| time complexity | Algorithm-in runtime artımını input ölçüsünə görə izah edir. |
| space complexity | Algorithm-in əlavə memory ehtiyacını izah edir. |
| brute force | Sadə və adətən daha bahalı ilkin həll yanaşması. |
| edge case | Normal nümunələrdən kənarda sərhəd davranışını yoxlayan hal. |
| test case | Müəyyən input, gözlənilən output və yoxlama məqsədi. |
| invariant | Algorithm addımları boyunca doğru saxlanmalı şərt. |
| array | İndekslə işlənən ardıcıl collection. |
| string | Character-lər ardıcıllığı. |
| Hash Map | Key-value lookup üçün hash-based struktur. |
| Hash Set | Unique value lookup üçün hash-based struktur. |
| Two Pointers | İki indeks/reference hərəkəti ilə search space-i idarə edən pattern. |
| Sliding Window | Ardıcıl intervalı incremental yeniləyən pattern. |
| Stack | LIFO prinsipi ilə işləyən struktur. |
| Queue | FIFO prinsipi ilə işləyən struktur. |
| Linked List | Node-ların pointer/reference ilə bağlandığı struktur. |
| Binary Search | Monotonic və ya sorted search space-i yarıya bölən algorithm. |
| recursion | Function-un daha kiçik subproblem üçün özünü çağırması. |
| backtracking | Decision tree-də seçim, exploration və restoration yanaşması. |
| tree | Hierarchical node strukturu. |
| graph | Vertex və edge-lərdən ibarət əlaqə modeli. |
| heap | Priority elementinə effektiv çıxış verən complete-tree əsaslı struktur. |
| greedy | Hər addımda local yaxşı seçimi edən yanaşma; correctness əsaslandırılmalıdır. |
| Dynamic Programming | Təkrarlanan subproblem-ləri state və transition ilə saxlayan yanaşma. |
| memoization | Top-down nəticə caching. |
| tabulation | Bottom-up state cədvəli qurmaq. |
| BFS | Breadth-First Search; səviyyə-səviyyə traversal. |
| DFS | Depth-First Search; dərinliyə traversal. |
| stable sort | Equal key-lərin ilkin nisbi sırasını qoruyan sort. |
| priority queue | Priority-yə əsasən element çıxaran abstract data type. |
