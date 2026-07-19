# Stage 27.0 Node.js Domain Manual Acceptance Test

## Canonical Domain and Learning Model

- [ ] `domains/nodejs/` exists with identity, syllabus, skill graph, practice, assessment, projects, glossary, and quality review.
- [ ] Canonical domain id is `nodejs`; the target learner is an experienced Front-End Engineer moving toward backend/full-stack work.
- [ ] Runtime-first philosophy, event loop, and asynchronous execution are documented.
- [ ] HTTP and a native service precede Fastify, Express, and NestJS abstractions.
- [ ] Backend application architecture, API design, validation, serialization, and error handling are covered.
- [ ] PostgreSQL is primary; parameterized SQL, pooling, migrations, transactions, and consistency are not replaced by ORM-only teaching.
- [ ] Authentication, authorization, security, caching, jobs, real-time systems, testing, observability, performance, scaling, reliability, configuration, and deployment are covered.
- [ ] NestJS is a later optional specialization after runtime, HTTP, architecture, validation, PostgreSQL, and testing foundations.
- [ ] Practice and assessment are backend-specific and require learner-produced implementation, test, debugging, data, security, architecture, or operations evidence.
- [ ] Learner-Facing Mentor Mode hides internal evidence/state metadata by default and does not require daily repository updates.

## Pack and CLI Contracts

- [ ] `nodejs-standard` contains exactly 25 files.
- [ ] `nodejs-compact` contains exactly five files.
- [ ] Compact exact list remains `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- [ ] Every existing standard/compact pack retains its exact count.
- [ ] `list-domains` shows exactly seven domains in established order, with `nodejs` last.
- [ ] All fourteen generated packs validate.
- [ ] Node.js standard/compact inspect and dry-run commands pass.
- [ ] CLI automated tests pass, including invalid-domain behavior, Node.js handoff/snapshot acceptance, and cleanup.

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain nodejs --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain nodejs --profile compact
node tools/ulos-cli/src/index.js generate --domain nodejs --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain nodejs --profile compact --dry-run
node tools/ulos-cli/src/index.js create-handoff --domain nodejs --out learners/active-learner/handoffs/stage-27-nodejs-smoke-handoff.md
node tools/ulos-cli/src/index.js create-snapshot --domain nodejs --type milestone --out learners/active-learner/snapshots/stage-27-nodejs-smoke-snapshot.md
cd tools/ulos-cli && npm test
```

Remove both Stage 27 smoke artifacts, then rerun `validate-learner`.

## Pilot, Studio, and Scope Boundaries

- [ ] `docs/REAL_LEARNING_PILOT.md` defines a planned Node.js compact-pack pilot without claiming completion.
- [ ] Getting Started and ChatGPT Project setup list both Node.js packs, prefer one domain per Project, and keep Studio optional.
- [ ] Studio build, bridge smoke, and health smoke pass; Node.js appears through the existing domain listing/fallback only.
- [ ] Studio remains optional and ChatGPT Projects remain the daily learning runtime.
- [ ] No domain besides `nodejs` was added in Stage 27.0.
- [ ] No new learner runtime, authentication/cloud/database service, ChatGPT API integration, LMS, or daily learner-state requirement was added.
- [ ] No Node.js-specific Studio screen, backend editor, terminal, database UI, dependency, workflow, or release tag was added.
- [ ] `git diff --check` passes and no temporary test artifacts remain.
