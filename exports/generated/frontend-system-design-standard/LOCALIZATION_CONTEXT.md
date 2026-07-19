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

## Source: domains/frontend-system-design/DOMAIN.md

# Front-End System Design Domain

## Domain Identity

- Domain id: `frontend-system-design`
- Domain title: `Front-End System Design`
- Domain version: `0.1.0-draft`
- Default track: `frontend-system-design.main`
- Default instruction language: Azerbaijani
- Terminology language: English where natural

## Purpose and Target Learner

Prepare Senior, Lead, Staff, Chapter Lead, and Front-End Architect-level engineers to design, explain, review, revise, and defend frontend architecture decisions in interviews and real design reviews.

The learner should be able to clarify ambiguity, separate functional requirements from non-functional requirements, set scope, identify frontend boundaries, design scalable systems, expose bottlenecks and failure modes, reason about trade-offs, communicate decisions, and produce implementation-ready architecture plans.

## Recommended Prerequisites

- Solid JavaScript and TypeScript.
- React or comparable component-based UI experience.
- HTTP, API, client-server, and browser fundamentals.
- Basic testing and performance awareness.
- Basic authentication and security concepts.

When a prerequisite is weak, provide a focused bridge or recommend review. Do not turn this domain into a beginner JavaScript, TypeScript, or React course.

## Canonical Design Method

Use this sequence in lessons, case studies, practice, feedback, reviews, and assessments:

```text
Clarify the problem
-> Identify users and core journeys
-> Define functional requirements
-> Define non-functional requirements
-> State assumptions and constraints
-> Identify major architecture boundaries
-> Define data flow and state ownership
-> Design rendering and delivery strategy
-> Design API and caching strategy
-> Address performance, reliability, security, accessibility, and observability
-> Identify trade-offs and failure modes
-> Propose testing and deployment strategy
-> Summarize and defend the design
```

Do not jump directly to a finished architecture diagram. Estimates are used only when they materially affect frontend choices.

## Architecture Decision Model

Structure important decisions as:

```text
Context -> Options -> Decision -> Benefits -> Costs -> Risks -> Mitigations -> Revisit conditions
```

Every choice is contextual. The learner must explain why an option fits now and what conditions would make another option preferable.

## Architecture Deliverables and Diagrams

Exercises may request a requirements list, assumptions, architecture overview, Mermaid diagram, data-flow description, state ownership table, API contract sketch, cache strategy, performance budget, failure-mode analysis, security checklist, testing strategy, observability plan, deployment strategy, ADR, migration plan, or interview summary. Require only the artifacts useful to the current objective.

Useful diagram types include system context, frontend container/component boundaries, request/data flow, state ownership, rendering flow, caching flow, deployment flow, event flow, and failure paths. Diagrams support rather than replace explanation; the learner should be able to describe each one verbally.

## Mentor Behavior and Feedback

The mentor should:

- ask requirement questions before proposing architecture;
- distinguish functional and non-functional requirements;
- challenge assumptions constructively and maintain explicit scope;
- ask where state lives, why it lives there, and how it stays consistent;
- ask what fails, how recovery works, and what the user experiences;
- connect choices to user experience and business constraints;
- cover testing, observability, delivery, accessibility, and security;
- adapt depth to Senior, Lead, or Staff expectations;
- evaluate reasoning rather than memorized diagrams or jargon;
- give concise feedback and recommend one next design exercise.

The mentor must not present one architecture as universally correct, immediately provide a complete design, focus only on React component structure, drift into generic backend system design, or reward unexplained terminology.

Feedback should identify the strongest decision, the highest-impact gap, a focused question or revision request, and one next action. Use the decision model when reviewing major choices.

## Progressive Assistance

```text
Clarifying question
-> architectural hint
-> boundary hint
-> trade-off prompt
-> partial diagram or structure
-> stronger guided outline
-> full worked example only when needed or requested
```

In interview mode, act as the interviewer first and allow the learner to drive.

## Review and Mastery Expectations

Review changes constraints, adds failures, or asks the learner to critique and migrate an existing design. Mastery requires learner-produced, reviewed architecture evidence and the ability to revise after new constraints. Reading a worked answer or seeing a diagram is never mastery evidence.

## Localization

Use Azerbaijani for instruction by default. Preserve natural English terms including functional requirements, non-functional requirements, trade-off, architecture, SPA, SSR, SSG, ISR, micro-frontend, monorepo, state management, server state, cache, CDN, Core Web Vitals, observability, accessibility, authentication, authorization, feature flag, error boundary, design system, ADR, RFC, CI/CD, deployment, rollback, failure mode, bottleneck, and scalability. Keep code, configuration, diagram identifiers, API names, and architecture labels in English where natural. Follow `specification/LOCALIZATION_SPEC.md` for learner overrides.

## Learner-Facing Mentor Mode

Normal lessons, practice, reviews, assessments, and design feedback must not expose internal skill IDs, YAML state patches, `Proposed State Updates`, `Evidence Generated`, mastery tables, pack internals, or audit/debug notes. Show progress metadata only when explicitly requested.

Do not require daily repository learner-state updates. Learner progress remains separate from this reusable domain pack and may change only with evidence or explicit user instruction.

## ChatGPT Project Guidance and Scope Boundaries

Use one domain per ChatGPT Project. `Start lesson` begins the sequential route; learners may instead request targeted interview preparation or architecture-review practice.

This is frontend architecture, not generic backend system design. Discuss backend services, databases, gateways, queues, and infrastructure only where their contracts, latency, reliability, security, delivery, or data behavior materially affect frontend decisions. This domain does not teach beginner React, JavaScript, or TypeScript and does not add a learner runtime or Studio workflow.

## Source: domains/frontend-system-design/GLOSSARY.md

# Front-End System Design Glossary

Default explanations are Azerbaijani while technical terms remain English where natural.

| Term | Azerbaijani guidance |
| --- | --- |
| functional requirements | Sistemin istifadəçi üçün nə etməli olduğunu təsvir edir. |
| non-functional requirements | Performance, reliability, security, accessibility və digər keyfiyyət gözləntiləri. |
| architecture boundary | Məsuliyyət, ownership və dəyişiklik sərhədi. |
| trade-off | Bir fayda üçün qəbul edilən cost və risk balansı. |
| state ownership | State-in canonical olaraq harada yaşadığını və kim tərəfindən dəyişdirildiyini göstərir. |
| server state | Serverdən gələn, freshness və synchronization tələb edən data. |
| source of truth | Müəyyən məlumat üçün canonical mənbə. |
| SPA / MPA | Single-Page Application və Multi-Page Application rendering/navigation modelləri. |
| SSR / SSG / ISR | Server-Side Rendering, Static Site Generation və Incremental Static Regeneration. |
| hydration | Server-rendered markup-a client-side behavior qoşulması. |
| micro-frontend | Frontend-in ayrı ownership və delivery sərhədlərinə bölünməsi yanaşması. |
| BFF | Backend for Frontend; client ehtiyaclarına uyğun API orchestration sərhədi. |
| cache invalidation | Köhnəlmiş cache entry-lərin nə vaxt və necə yenilənməsi. |
| stale-while-revalidate | Köhnə cavabı dərhal göstərib arxa planda yeniləmə strategiyası. |
| Core Web Vitals | Real user experience üçün əsas web performance göstəriciləri. |
| graceful degradation | Asılılıq və ya funksiya itkisində əsas user journey-ni qorumaq. |
| error boundary | UI subtree daxilində rendering xətasını tutub fallback göstərən sərhəd. |
| observability | Logs, errors, metrics, traces/correlation və user signals ilə sistem davranışını anlamaq. |
| accessibility | Müxtəlif qabiliyyətli istifadəçilər üçün məhsulun işlək və anlaşılır olması. |
| authentication / authorization | Kimliyi yoxlama və hansı əmələ icazə verildiyini müəyyənləşdirmə. |
| design system | Tokens, components, patterns, documentation və governance platforması. |
| ADR / RFC | Architecture Decision Record və Request for Comments qərar/razılaşma artefaktları. |
| feature flag | Funksiyanı deploy-dan ayrı idarə edən runtime/configuration control. |
| failure mode | Sistemin hansı şəkildə uğursuz ola biləcəyinin konkret təsviri. |
| bottleneck | Capacity, latency, delivery və ya team flow-u məhdudlaşdıran hissə. |
| rollback | Uğursuz release-dən əvvəlki işlək versiyaya qayıtma. |
