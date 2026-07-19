# Node.js Domain Quality Review

## Stage 27.0 Checklist

- [x] Canonical id is `nodejs`; no NestJS or other domain is introduced.
- [x] Target learner is an experienced JavaScript/TypeScript Front-End Engineer moving toward backend/full-stack work.
- [x] Runtime and event-loop reasoning precede HTTP frameworks.
- [x] HTTP and a native service precede Fastify, Express, and NestJS abstraction.
- [x] Application architecture, validation, serialization, and error handling are explicit.
- [x] PostgreSQL is primary; SQL, pooling, migrations, transactions, and consistency are not replaced by ORM-only teaching.
- [x] Authentication, authorization, security, testing, performance, reliability, observability, configuration, and deployment are covered.
- [x] NestJS is a later optional specialization.
- [x] Practice and assessment require learner-produced backend evidence and failure-path reasoning.
- [x] Azerbaijani instruction and English technical terminology are supported.
- [x] Learner-Facing Mentor Mode hides internal evidence/state metadata by default.
- [x] Reusable domain content contains no learner progress and requires no daily state update.

## Known Limitations

- The pack defines reusable progression and project contracts, not a fixed lesson-body archive.
- Fastify is the practical default, but production framework and library versions must be selected against current official documentation when a real project begins.
- Redis, queues, cloud platforms, and NestJS are awareness/specialization topics rather than framework runtime dependencies.
- Studio remains an optional generic control panel.
