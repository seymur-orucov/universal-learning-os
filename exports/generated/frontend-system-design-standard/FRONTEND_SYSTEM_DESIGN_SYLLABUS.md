# Front-End System Design Syllabus

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/frontend-system-design/SYLLABUS.md

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
