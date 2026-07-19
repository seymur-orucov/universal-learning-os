# ADR-0053: Node.js Domain

- Status: Accepted
- Date: 2026-07-10

## Context

After Stage 26.0, Universal Learning OS supports six domains and twelve generated packs. Experienced frontend engineers need a reusable path into backend and full-stack work. A framework-first course could produce decorator or routing familiarity without Node.js runtime, HTTP, SQL, consistency, security, testing, and operational understanding.

## Decision

Add one canonical Node.js domain under `domains/nodejs/` and generate its standard and compact project packs with the existing framework contracts and generators. The domain is runtime-first, backend-oriented, project-driven, and production-aware.

## Domain ID

The canonical id is `nodejs`.

## Target Learner

The primary learner is an experienced JavaScript/TypeScript Front-End Engineer moving toward backend or full-stack engineering. Prerequisite gaps are bridged narrowly; this is not a beginner JavaScript course.

## Runtime-First Philosophy

Node.js runtime and event-loop reasoning precede HTTP, backend structure, persistence, security, testing, performance, operations, and optional specialization. The mentor distinguishes JavaScript language behavior, V8, libuv, process behavior, asynchronous execution, and workload fit before hiding these behind frameworks.

## TypeScript and JavaScript Usage

TypeScript is the primary language for backend projects because it supports explicit contracts and application structure. JavaScript is used for focused runtime examples when types would distract. Runtime schema validation remains mandatory because TypeScript types are erased.

## HTTP-Before-Framework Decision

Learners study HTTP and build a native Node.js service before Fastify or Express. Fastify is the documented practical default because schemas, serialization, hooks, plugins, and structured logging make contracts visible. Express is compared honestly; native Node.js remains useful for focused services and learning.

## PostgreSQL Decision

PostgreSQL is the primary relational database. Learners own parameterized SQL, pooling, migrations, queries, transactions, consistency, and performance reasoning before adopting convenience abstractions.

## ORM Trade-Off Decision

The domain compares raw SQL, query builders, Prisma, Drizzle, and TypeORM without depending on one ORM. Generated types do not replace SQL understanding, migration ownership, transaction boundaries, or query diagnostics.

## NestJS-Specialization Decision

NestJS is a later optional specialization after learner evidence for runtime, HTTP, application boundaries, validation, PostgreSQL, and testing. Decorators and dependency injection must be mapped back to established mechanisms. NestJS is neither a separate domain nor the main course.

## Practice and Assessment Model

Practice includes runtime prediction, API implementation, SQL/transactions, debugging, code/security review, interview simulation, and five progressive projects. Assessment requires learner-produced implementation, tests, bug fixes, contracts, queries, transaction explanations, reviews, diagnostics, deployment plans, or independent milestones. Displayed content never establishes mastery, and normal output hides internal evidence/state metadata.

## Generated Pack Impact

Add `nodejs-standard` with exactly 25 files and `nodejs-compact` with exactly the five contract-defined compact files. Total generated packs increase from twelve to fourteen. Existing pack contents and contracts remain unchanged.

## CLI Impact

The supported-domain registry increases from six to seven. Existing list, validate, inspect, generate, handoff, snapshot, and learner-validation workflows accept `nodejs`; no new command or learner runtime is introduced.

## Studio Impact

Studio continues to obtain domains from the CLI. Its fallback and smoke expectation include `nodejs`. No Node.js-specific screen, editor, terminal, database UI, dependency, or workflow is added.

## Non-Goals

- Adding NestJS as a domain or adding any domain besides `nodejs`.
- Building authentication/cloud/database services for the framework, ChatGPT API integration, or an LMS.
- Requiring daily repository learner-state updates or adding a heavy learner runtime.
- Expanding Studio beyond minimal compatibility.
- Selecting one ORM as mandatory or replacing SQL reasoning.
- Creating or preparing a release tag.

## Consequences

The repository supports seven domains and fourteen generated packs while preserving canonical boundaries and Learner-Facing Mentor Mode. The new learning path is broader than a framework tutorial and requires production reasoning, which increases canonical content size but provides durable transfer. Real-learning pilot work remains planned rather than claimed complete.
