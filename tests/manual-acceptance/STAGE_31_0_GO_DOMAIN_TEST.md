# Stage 31.0 Go Domain Manual Acceptance Test

## Canonical Domain

- [ ] `domains/go/` contains exactly the nine required reusable files, including `README.md` and `QUALITY_REVIEW.md`.
- [ ] Identity is `go` / `GO` / Go; purpose and terminology metadata match the registry contract.
- [ ] The target is an experienced JavaScript/TypeScript engineer; Node.js is optional and the course is not generic beginner programming.
- [ ] Canonical content is learner-neutral and preserves framework/state/mastery source boundaries.

## Teaching and Curriculum

- [ ] Phases A–R cover toolchain through production and clearly mark advanced specialization as later.
- [ ] `START_LESSON` teaches before independent testing, uses guided work first, and normally asks for one learner action.
- [ ] Data exercises predict copying, aliasing, mutation, nil, and output before execution.
- [ ] Concrete types precede advanced interface design; ordinary functions/types precede generics.
- [ ] Incorrect inheritance, interface-first, pointer-everywhere, context-bag, ordinary-panic, architecture-template, and package-fragmentation models are rejected.

## Standard Library, Errors, Concurrency, and Persistence

- [ ] `net/http`, `database/sql`, explicit SQL, `testing`, `context`, `sync`, channels, and standard structured logging foundations precede optional libraries.
- [ ] Errors include values, wrapping, `errors.Is`/`errors.As`, ownership, duplicate-log avoidance, resources, cleanup, panic/recover boundaries, and unhappy paths.
- [ ] Every goroutine design states owner, stop, errors, resources, bounds, backpressure, wait, and shutdown.
- [ ] Race, deadlock, leak, cancellation, timeouts, bounded concurrency, pipelines, worker pools, and graceful shutdown are practiced and assessed.
- [ ] PostgreSQL covers pools, parameterized SQL, scanning, transactions, migrations, integration tests, timeouts, N+1, and raw/tool/ORM trade-offs after foundations.

## Projects, Security, and Production

- [ ] Seven projects cover CLI, data pipeline, concurrent processor, standard-library HTTP, PostgreSQL API, jobs, and production capstone.
- [ ] Every project has goals, prerequisites, requirements, constraints, evidence, tests, failures, security, observability, completion, and extensions.
- [ ] Security, reliability, observability, profiles, performance, containers, CI, deployment, rollback, and runbooks are required production concerns.
- [ ] Microservices, framework, ORM, Kubernetes, and cloud-specific operation remain optional.

## Registry, Packs, Launch Kits, and Studio

- [ ] `list-domains` reports exactly nine domains and Go once.
- [ ] `go-standard` has exactly 25 files and all five `GO_*` outputs.
- [ ] `go-compact` has exactly the five compact files and retains critical Go/concurrency/production guidance.
- [ ] There are exactly eighteen generated packs; every existing standard/compact pack retains 25/5 files.
- [ ] Eight Go launch helpers exist; setup docs require one dedicated Project, one profile only, direct generated files, compact five-file usage, normal ChatGPT runtime, optional Studio, and `Start lesson`.
- [ ] Handoff/snapshot accept Go; invalid-domain, learner validation, and path-safety behavior remain unchanged.
- [ ] Studio fallback/smoke include Go without a Go-specific screen or runtime expansion.

## Required Commands

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js generate --domain go --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain go --profile compact --dry-run
node tools/ulos-cli/src/index.js generate --domain go --profile standard
node tools/ulos-cli/src/index.js generate --domain go --profile compact
node tools/ulos-cli/src/index.js inspect-pack --domain go --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain go --profile compact
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node --test tools/ulos-cli/test/*.test.js
git diff --check
```

From `apps/studio/`, run `npm install`, `npm run build`, `npm run smoke:bridge`, and `npm run smoke:health`.

## Final Repository Checks

- [ ] Real generation produced both Go packs and validation passes all eighteen packs.
- [ ] No generated pack contains active learner state.
- [ ] No temporary dry-run, handoff, snapshot, test, build, or smoke artifact remains except ignored/reproducible Studio build output.
- [ ] No existing domain was overwritten or weakened.
- [ ] No commit, branch, push, pull request, release, or tag was created.
