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
