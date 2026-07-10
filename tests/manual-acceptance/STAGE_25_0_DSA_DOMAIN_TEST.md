# Stage 25.0 DSA Domain Manual Acceptance Test

## Canonical Domain

- [ ] `domains/dsa/` exists with README, domain identity, syllabus, skill graph, practice, assessment, projects, glossary, and quality review.
- [ ] Canonical id is `dsa`; no Front-End System Design or Node.js domain was added.
- [ ] The syllabus covers Big O through interview simulations with prerequisite-aware graph and DP ordering.
- [ ] JavaScript is the default implementation language and TypeScript is supported when requested/useful.
- [ ] The canonical ten-step problem-solving sequence is documented.
- [ ] The question-to-full-solution hint progression is documented.
- [ ] Complexity analysis, edge cases, and tests are required.
- [ ] Guided, independent, review, and interview practice are DSA-specific.
- [ ] Assessment requires learner-produced code/reasoning/transfer rather than solution recognition.

## Learner-Facing Behavior

- [ ] Learner-Facing Mentor Mode is present in both generated packs.
- [ ] Normal lessons hide internal skill ids, YAML, `Evidence Generated`, and `Proposed State Updates`.
- [ ] `Start lesson` selects Lesson 1 when no earlier context exists and supports sequential continuation.
- [ ] The explicit JavaScript startup example is present.
- [ ] Full solutions are not revealed immediately by default.

## Generated Pack Contracts

Run:

```sh
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain dsa --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain dsa --profile compact
```

- [ ] Validation checks exactly five domains and ten packs and passes.
- [ ] All five standard packs contain exactly 25 files.
- [ ] All five compact packs contain exactly 5 files.
- [ ] DSA standard contains exactly 25 files with no unexpected entries.
- [ ] DSA compact contains exactly `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.

## CLI and Learner Helpers

Run:

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js generate --domain dsa --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain dsa --profile compact --dry-run
node tools/ulos-cli/src/index.js create-handoff --domain dsa --out learners/active-learner/handoffs/stage-25-dsa-smoke-handoff.md
node tools/ulos-cli/src/index.js create-snapshot --domain dsa --type milestone --out learners/active-learner/snapshots/stage-25-dsa-smoke-snapshot.md
node tools/ulos-cli/src/index.js validate-learner
```

- [ ] Domain list is exactly `sql-postgresql`, `english`, `javascript`, `typescript`, `dsa`.
- [ ] Both DSA dry-runs pass with planned counts 25 and 5.
- [ ] DSA handoff and milestone snapshot scaffolds are accepted.
- [ ] Temporary smoke artifacts are removed after validation.
- [ ] `cd tools/ulos-cli && npm test` passes and test cleanup leaves no artifacts.

## Studio and Scope

- [ ] `cd apps/studio && npm install && npm run build && npm run smoke:bridge && npm run smoke:health` passes.
- [ ] DSA appears through existing CLI-backed domain listing; no DSA-specific screen or new dependency was added.
- [ ] Studio remains optional and ChatGPT Projects remain the learning runtime.
- [ ] No authentication, cloud/database storage, ChatGPT API integration, full LMS, heavy learner runtime, or mandatory daily state update was added.
- [ ] No release tag was created.

## Final Repository Checks

```sh
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
git diff --check
git status --short
```

- [ ] Final validation passes.
- [ ] No temporary smoke/test artifacts remain.
- [ ] Diff check is clean except unavoidable existing line-ending warnings.
