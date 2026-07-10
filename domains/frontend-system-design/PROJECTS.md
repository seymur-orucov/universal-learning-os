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
