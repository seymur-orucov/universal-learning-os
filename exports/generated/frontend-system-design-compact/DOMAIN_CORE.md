# Front-End System Design Domain Core

Generated compact domain core for `frontend-system-design`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/frontend-system-design/DOMAIN.md`.

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

## SYLLABUS.md

Canonical source: `domains/frontend-system-design/SYLLABUS.md`.

# Front-End System Design Syllabus

## Progression

```text
System design foundations -> Requirements and constraints -> Architecture boundaries
-> Rendering and delivery -> State and data flow -> API integration -> Caching
-> Performance -> Reliability -> Security -> Testing and observability
-> Scalability and team architecture -> Advanced case studies -> Interview simulations
```

Advanced micro-frontends, collaborative editing, and multi-region concerns follow core architecture reasoning.

## Sequential Main Track

### Stage 1 — Foundations and Requirements

1. **What Front-End System Design is.** Coding design versus system design; architecture levels; frontend scope; actors and user journeys.
2. **Requirements-first design.** Ambiguity, functional requirements, non-functional requirements, assumptions, constraints, scope, and useful estimation.
3. **Decisions and trade-offs.** The canonical design method; Context-to-Revisit decision model; ADRs; unknowns and decision defense.
4. **Boundaries and diagrams.** System context, frontend containers/components, clean and layered boundaries, shared platform concerns, data/request flows, and verbal explanation.

### Stage 2 — Application Architecture and Rendering

5. **Application architecture choices.** SPA, MPA, feature-based, modular, layered, and clean frontend architecture.
6. **Rendering and delivery.** SSR, SSG, ISR, hybrid rendering, islands architecture, hydration, and client/server component boundaries.
7. **Micro-frontends and deployment boundaries.** Integration options, ownership, runtime/build coupling, shared dependencies, governance, and when not to use micro-frontends.

### Stage 3 — State, Data Flow, APIs, and Caching

8. **State taxonomy and ownership.** Local, shared client, server, URL, form, and cache state; sources of truth; normalization; synchronization.
9. **Event-driven frontend flows.** Commands/events, derived state, async workflows, consistency, and avoiding duplicated truth.
10. **API integration.** REST, GraphQL, BFF, API gateway relationship, request orchestration, pagination, filtering, sorting, versioning, and contract evolution.
11. **Mutation and failure semantics.** Optimistic updates, retries, backoff, timeouts, idempotency awareness, partial failures, reconciliation, and recovery UX.
12. **Caching architecture.** Browser and HTTP cache, CDN, Service Worker, application/server-state cache, invalidation, stale-while-revalidate, consistency, and offline-first trade-offs.

### Stage 4 — Performance, Reliability, and Offline

13. **Performance foundations.** Core Web Vitals, critical rendering path, network waterfalls, rendering and hydration cost, long tasks, and measurement.
14. **Performance tactics and budgets.** Bundle size, code splitting, lazy loading, prefetch/preload, virtualization, images, fonts, performance budgets, and monitoring.
15. **Reliability and failure containment.** Error boundaries, global errors, API failure states, partial rendering, graceful degradation, dependency isolation, recovery, and resilience.
16. **Offline and PWA.** Service Workers, offline shell, cache strategies, background sync awareness, conflict resolution, installability, push awareness, and offline UX.

### Stage 5 — Security, Identity, Accessibility, and Localization

17. **Authentication and authorization.** Sessions, tokens, OAuth/OIDC awareness, secure storage, refresh flows, route protection, role/capability UI, and backend enforcement boundaries.
18. **Frontend security.** XSS, CSRF, CSP, clickjacking, CORS mental model, input/output handling, sensitive data, security headers, dependencies, supply chain, and threat modeling.
19. **Accessibility as architecture.** Semantic HTML, keyboard/screen-reader support, focus, contrast, forms, modal/dialog patterns, automated/manual testing, and ownership.
20. **Internationalization and localization.** Translation architecture/loading, locale routing, formatting, RTL, content expansion, dynamic content, multi-locale caching, and testing.

### Stage 6 — Design Systems, Scale, and Governance

21. **Design system platform.** Tokens, components, patterns, accessibility, theming, documentation, versioning, governance, contribution, and adoption.
22. **Scaling codebases and teams.** Monorepos, package boundaries, shared libraries, ownership, build systems, package versioning, and CI reliability.
23. **Product/platform scale.** Deployment independence, multi-tenant architecture, configuration-driven UI, feature flags, design-system integration, and multi-region delivery effects.
24. **Architecture governance and migration.** ADRs, RFCs, reviews, standards, guardrails, platform teams, deprecation, migration planning, and technical-debt prioritization.

### Stage 7 — Real-Time, Quality, and Operations

25. **Real-time systems.** WebSocket, SSE, polling, presence, reconnection, ordering, duplication, optimistic UI, conflicts, collaborative editing awareness, and event consistency.
26. **Testing strategy.** Unit, integration, component, contract, end-to-end, visual regression, accessibility, and performance testing; pyramid trade-offs, ownership, and CI stability.
27. **Observability.** Client logging, error tracking, RUM, synthetic monitoring, correlation IDs, session replay/privacy trade-offs, frontend SLIs/SLOs, and alerting boundaries.
28. **Delivery and operations.** CI/CD, preview environments, configuration, canaries, rollbacks, asset versioning, CDN invalidation, release observability, dependencies, and reproducible builds.

### Stage 8 — Case Studies and Design Defense

29. **Architecture review workshop.** Find coupling, bottlenecks, weak boundaries, operational gaps, migration risks, and viable alternatives in an existing design.
30. **Advanced case studies.** Apply the full case-study model to commerce, banking, dashboards, editors, media, SaaS, public sites, platforms, and offline field work.
31. **Interview method and follow-ups.** Clarify prompts, prioritize, draw/describe architecture, explain data flow, address failures, handle changed constraints, phase delivery, and state unknowns honestly.
32. **Interview simulation and design defense.** Learner-led ambiguous problem, follow-up changes, concise defense, revision, and interviewer-style feedback.

## Alternative Routes

- **Targeted interview preparation:** diagnose gaps, refresh the requirements-first method, complete two contrasting case studies, practice failure follow-ups, and run at least one simulation.
- **Architecture-review practice:** review an existing system, map boundaries/state/data flow, identify risks, write decision alternatives, and propose a phased migration.
- **Sequential learning:** follow all stages in prerequisite order.

## Lesson and Review Model

Each lesson follows the canonical method in `DOMAIN.md`, focuses on one decision cluster, and ends with learner output plus one next action. Review changes scale, constraints, users, failure conditions, or ownership so the learner must revise reasoning rather than repeat a model answer.

## SKILL_GRAPH.md

Canonical source: `domains/frontend-system-design/SKILL_GRAPH.md`.

# Front-End System Design Skill Graph

## Learning Skills

### Problem Framing and Communication

- `frontend-system-design.clarification`: turns ambiguity into focused questions.
- `frontend-system-design.requirements`: separates functional and non-functional requirements.
- `frontend-system-design.scope`: states assumptions, constraints, exclusions, and useful estimates.
- `frontend-system-design.journeys`: identifies actors and core user journeys.
- `frontend-system-design.design-defense`: explains decisions, unknowns, failure modes, and phased delivery concisely.

### Architecture and Decisions

- `frontend-system-design.boundaries`: identifies application, feature, platform, client/server, and ownership boundaries.
- `frontend-system-design.rendering`: chooses among SPA, MPA, SSR, SSG, ISR, hybrid, and islands approaches.
- `frontend-system-design.decision-records`: applies Context, Options, Decision, Benefits, Costs, Risks, Mitigations, and Revisit conditions.
- `frontend-system-design.diagrams`: creates and verbally explains context, component, data, state, caching, deployment, event, and failure diagrams.

### Data, Integration, and Runtime Quality

- `frontend-system-design.state-ownership`: assigns local, shared, server, URL, form, and cache state without duplicated truth.
- `frontend-system-design.api-integration`: designs REST/GraphQL/BFF interaction, orchestration, evolution, and partial failure behavior.
- `frontend-system-design.caching`: selects cache layers, invalidation, freshness, consistency, and offline behavior.
- `frontend-system-design.performance`: budgets and monitors delivery, rendering, hydration, assets, and interaction performance.
- `frontend-system-design.reliability`: designs degradation, recovery UX, retries, timeouts, and dependency containment.
- `frontend-system-design.security`: reasons about identity boundaries, browser threats, sensitive data, and backend enforcement.
- `frontend-system-design.accessibility`: treats accessible interaction and testing as architectural requirements.
- `frontend-system-design.localization`: designs locale routing, content loading, formatting, RTL, caching, and testing.

### Scale, Platforms, and Operations

- `frontend-system-design.team-scale`: designs modular ownership, monorepo/package boundaries, shared libraries, and build scalability.
- `frontend-system-design.design-systems`: designs tokens, components, governance, contribution, versioning, and adoption.
- `frontend-system-design.realtime-offline`: handles ordering, reconnection, conflicts, optimistic UI, Service Workers, and offline UX.
- `frontend-system-design.testing`: creates risk-based unit-through-end-to-end, contract, visual, accessibility, and performance coverage.
- `frontend-system-design.observability`: defines privacy-aware logs, errors, RUM, correlation, SLIs/SLOs, and alerts.
- `frontend-system-design.delivery`: designs CI/CD, flags, previews, canaries, rollback, assets, CDN invalidation, and reproducibility.
- `frontend-system-design.governance`: uses ADRs, RFCs, reviews, guardrails, ownership, deprecation, and migration plans.

### Applied Architecture

- `frontend-system-design.case-study`: produces a coherent end-to-end frontend design.
- `frontend-system-design.architecture-review`: finds bottlenecks, coupling, risks, and migration trade-offs in an existing design.
- `frontend-system-design.failure-analysis`: explains technical recovery and user experience across injected failures.
- `frontend-system-design.revision`: revises a design after new constraints without losing coherence.
- `frontend-system-design.interview`: leads an ambiguous, time-bounded design conversation.

## Dependencies and Progression Constraints

- Clarification, requirements, scope, and journeys precede architecture selection.
- Boundaries precede detailed state, rendering, API, cache, and deployment choices.
- State ownership and API integration precede advanced real-time, optimistic, collaborative, and offline flows.
- Performance, reliability, security, accessibility, testing, and observability must be integrated before an end-to-end design is considered strong.
- Core boundary and decision reasoning precedes micro-frontends, multi-region effects, and large-scale platform governance.
- Case-study assessment depends on requirements, boundaries, state/data flow, quality attributes, trade-offs, and communication.
- Interview readiness depends on independent case-study work, failure analysis, revision, and concise design defense.

Targeted routes may skip familiar lessons but not prerequisite evidence. Review priorities include solution-first behavior, unclear state ownership, backend drift, missing user impact, universal claims, untested assumptions, and choices without revisit conditions.

## PRACTICE_RULES.md

Canonical source: `domains/frontend-system-design/PRACTICE_RULES.md`.

# Front-End System Design Practice Rules

## Required Flow

Practice follows the canonical sequence in `DOMAIN.md`. The mentor asks for requirements and learner reasoning before offering a complete architecture.

## Guided Design Practice

- Provide a constrained frontend problem.
- Let the learner clarify requirements and identify journeys.
- Help identify major boundaries and state ownership.
- Build the design collaboratively.
- Compare options using the decision model.
- End with a small learner-authored artifact or revision.

## Independent Design Practice

- Give an ambiguous but bounded prompt.
- The learner drives clarification, scope, architecture, data flow, state ownership, quality attributes, failures, testing, deployment, and trade-offs.
- Review only after a coherent proposal unless the learner requests help.
- Do not require every possible artifact; choose those that expose the target reasoning.

## Architecture Review Practice

The learner reviews an existing design, identifies strengths and bottlenecks, finds hidden coupling and missing operational concerns, proposes alternatives, and explains compatibility and migration risk. Feedback must distinguish defects from contextual trade-offs.

## Failure-Mode Practice

Inject one or more of: CDN failure, API degradation, stale cache, auth expiration, partial network loss, bad deployment, telemetry outage, dependency failure, or user permission mismatch. The learner must explain containment, recovery, observability, user experience, and whether the base design changes.

## Interview Simulation

- Start with an ambiguous prompt and a realistic time boundary.
- Act as interviewer; let the learner clarify scope and lead the design.
- Introduce follow-up constraints only after the initial proposal.
- Require verbal/diagram explanation, bottlenecks, failures, trade-offs, and phased delivery.
- Give concise interviewer-style feedback and one next exercise.

## Progressive Assistance

Use: clarifying question, architectural hint, boundary hint, trade-off prompt, partial diagram/structure, stronger guided outline, then a full worked example only when needed or requested. Substantial assistance requires later independent or transfer evidence.

## Feedback Conventions

- Name the strongest justified choice.
- Identify the highest-impact gap or unsupported assumption.
- Ask a focused repair or trade-off question before rewriting the design.
- Connect the issue to users, business constraints, or operations.
- Keep normal feedback concise and learner-facing.
- End with one recommended next action.
- Never expose internal evidence/state metadata unless explicitly requested.

## Evidence-Producing Practice

Valid outputs include a requirements list, architecture explanation or diagram, ADR, trade-off table, state ownership table, cache strategy, failure analysis, revised design, architecture review, interview simulation, or phased implementation plan. Generated examples and model answers are not learner evidence.

## ASSESSMENT_RULES.md

Canonical source: `domains/frontend-system-design/ASSESSMENT_RULES.md`.

# Front-End System Design Assessment Rules

## Purpose

Assess independent frontend architecture reasoning and design defense without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Evaluation Criteria

- Requirement clarification and separation of functional/non-functional requirements.
- Scope control, assumptions, constraints, actors, and journeys.
- Coherent frontend architecture boundaries and ownership.
- Rendering/delivery strategy suited to user and product needs.
- Explicit data flow, state ownership, synchronization, and source-of-truth choices.
- API and contract-evolution awareness.
- Layered caching and invalidation reasoning.
- Performance budgets, bottlenecks, and monitoring.
- Scalability across traffic, codebase, builds, teams, tenants, and delivery where relevant.
- Reliability, recovery UX, and failure containment.
- Authentication, authorization boundaries, and frontend security.
- Accessibility and localization as architecture concerns.
- Risk-based testing and CI reliability.
- Privacy-aware observability and useful operational signals.
- Deployment, rollback, asset, configuration, and migration strategy.
- Contextual trade-offs, failure modes, communication, and design defense.
- Ability to revise coherently after a new constraint.

## Required Learner Evidence

Use reviewed learner-produced evidence such as an architecture explanation, diagram, ADR, trade-off table, failure analysis, revised design, interview simulation, design review, or phased implementation plan. A strong assessment normally combines at least two complementary artifacts and verbal/written defense.

Reading a model answer, repeating a memorized diagram, or using jargon without reasoning is not mastery evidence.

## Assessment Formats

- Foundation checkpoint: clarify and scope an ambiguous frontend prompt.
- Architecture checkpoint: boundaries, rendering, state, data flow, API, and caching.
- Quality checkpoint: performance, reliability, security, accessibility, testing, and observability.
- Platform checkpoint: team/codebase scale, design systems, governance, and delivery.
- Review checkpoint: critique and migrate an existing design.
- Failure checkpoint: respond to injected failures and explain user experience.
- Interview simulation: lead and defend an end-to-end design under follow-ups.

## Assistance and Mastery

Interpret evidence in light of assistance received. Guided work can demonstrate emerging ability but requires later independent or transfer evidence. Strong readiness means the learner can lead requirement clarification, produce a coherent frontend design, explain contextual decisions, expose failures, revise under new constraints, and communicate at the expected role level.

Never declare mastery because content or a completed design was displayed. Keep internal mastery/state logic hidden in normal learner-facing responses.

## PROJECTS.md

Canonical source: `domains/frontend-system-design/PROJECTS.md`.

# Front-End System Design Case Studies

## Case-Study Contract

Each case study follows:

```text
Problem -> Requirements -> Constraints -> Architecture -> Data flow -> State model
-> API strategy -> Performance strategy -> Reliability strategy -> Security considerations
-> Testing -> Deployment -> Trade-offs -> Failure modes -> Final design summary
```

The learner must lead clarification and justify selections; the mentor must not treat the listed theme as a predetermined solution.

## Required Case Studies

1. **E-commerce storefront:** discovery, search, product detail, cart, checkout boundaries, SEO, personalization, inventory/price freshness, and global delivery.
2. **Banking frontend:** secure sessions, sensitive-data boundaries, permissions, transactional UX, audit awareness, accessibility, and resilient partial failure handling.
3. **Admin dashboard:** dense data, filters/URL state, permissions, bulk actions, long-running operations, feature flags, and recovery UX.
4. **Document editor:** local/remote state, autosave, ordering, conflicts, collaboration awareness, large-document performance, and offline recovery.
5. **Real-time chat application:** WebSocket/SSE/polling choice, presence, ordering, duplication, optimistic messages, reconnection, and history loading.
6. **Video streaming frontend:** playback startup, adaptive media integration, entitlement UI, CDN effects, device capability, analytics, and graceful degradation.
7. **Multi-tenant SaaS application:** tenant routing, configuration, themes, capabilities, data isolation boundaries, cache keys, deployments, and shared platform governance.
8. **Analytics dashboard:** large datasets, query orchestration, incremental/partial rendering, virtualization, cache freshness, exports, and observability.
9. **Design system platform:** tokens, components, documentation, accessibility, package/version strategy, contribution, governance, adoption, and deprecation.
10. **Large monorepo frontend:** package and ownership boundaries, builds, affected testing, shared dependencies, deployment independence, migrations, and guardrails.
11. **Internationalized public website:** locale routing, SSR/SSG/ISR choice, translation loading, RTL, SEO, regional content, multi-locale caching, and accessibility.
12. **Offline-capable field application:** Service Workers, offline shell, queued work, conflict resolution, installability, device/network constraints, recovery, and supportability.

## Architecture Review Variants

For any case, provide an intentionally imperfect design and ask the learner to identify strengths, coupling, bottlenecks, hidden sources of truth, accessibility/security/operations gaps, and a phased migration with rollback conditions.

## Failure and Interview Variants

Inject CDN failure, API degradation, stale cache, auth expiration, partial network loss, bad deployment, telemetry outage, dependency failure, or permission mismatch. For interview practice, reveal the case title and ambiguous business goal only; allow the learner to establish scope before giving constraints.

## GLOSSARY.md

Canonical source: `domains/frontend-system-design/GLOSSARY.md`.

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

## QUALITY_REVIEW.md

Canonical source: `domains/frontend-system-design/QUALITY_REVIEW.md`.

# Front-End System Design Domain Quality Review

## Stage 26.0 Checklist

- [x] Canonical id is `frontend-system-design`; no Node.js or other domain is introduced.
- [x] Target learner is Senior, Lead, Staff, Chapter Lead, or Front-End Architect level.
- [x] Requirements clarification and contextual trade-offs precede solution design.
- [x] Syllabus is frontend-specific and covers application architecture, state/data, APIs, caching, quality attributes, scale, governance, and delivery.
- [x] Case studies, architecture review, failure-mode practice, and interview simulation are defined.
- [x] Accessibility, security, testing, observability, and operations are first-class concerns.
- [x] Backend topics appear only where they materially affect frontend architecture.
- [x] Assessment requires learner-produced architecture evidence and revision.
- [x] Azerbaijani instruction and English technical terminology are supported.
- [x] Learner-Facing Mentor Mode hides internal evidence/state metadata by default.
- [x] Reusable domain content contains no learner progress.

## Known Limitations

- The domain provides a curriculum and reusable case-study contracts, not fixed reference architectures or a lesson-body archive.
- Vendor/framework-specific implementation detail is intentionally secondary to durable architecture reasoning.
- Studio remains an optional generic control panel.
