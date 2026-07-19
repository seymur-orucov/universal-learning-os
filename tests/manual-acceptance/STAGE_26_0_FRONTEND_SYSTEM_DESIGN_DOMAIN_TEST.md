# Stage 26.0 Front-End System Design Domain Manual Acceptance Test

## Canonical Domain and Learning Model

- [ ] `domains/frontend-system-design/` exists with identity, syllabus, skill graph, practice, assessment, projects, glossary, and quality review.
- [ ] Canonical domain id is `frontend-system-design`.
- [ ] Target learner is Senior, Lead, Staff, Chapter Lead, or Front-End Architect level.
- [ ] Syllabus is frontend-specific and does not become generic backend system design.
- [ ] Requirements-first canonical method and Context-to-Revisit trade-off model exist.
- [ ] Case-study contract and all required realistic frontend cases exist.
- [ ] Architecture-review, failure-mode, and interview-simulation practice exist.
- [ ] Accessibility, security, testing, observability, delivery, and operations are included.
- [ ] Learner-produced architecture evidence and revision are required for assessment.
- [ ] Learner-Facing Mentor Mode hides internal metadata by default.

## Pack and CLI Contracts

- [ ] `frontend-system-design-standard` contains exactly 25 files.
- [ ] `frontend-system-design-compact` contains exactly five files.
- [ ] Compact exact list remains `COMMANDS_CORE.md`, `DOMAIN_CORE.md`, `MENTOR_SKILLS_CORE.md`, `PROJECT_INSTRUCTIONS.md`, and `STARTUP_PROMPT.md`.
- [ ] Existing standard and compact packs retain their exact counts.
- [ ] `list-domains` shows exactly six domains in established order.
- [ ] All twelve generated packs validate.
- [ ] Standard/compact inspect and dry-run commands pass.
- [ ] CLI automated tests pass, including handoff/snapshot acceptance and cleanup.

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node tools/ulos-cli/src/index.js inspect-pack --domain frontend-system-design --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain frontend-system-design --profile compact
node tools/ulos-cli/src/index.js generate --domain frontend-system-design --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain frontend-system-design --profile compact --dry-run
node tools/ulos-cli/src/index.js create-handoff --domain frontend-system-design --out learners/active-learner/handoffs/stage-26-frontend-system-design-smoke-handoff.md
node tools/ulos-cli/src/index.js create-snapshot --domain frontend-system-design --type milestone --out learners/active-learner/snapshots/stage-26-frontend-system-design-smoke-snapshot.md
cd tools/ulos-cli && npm test
```

Remove both Stage 26 smoke artifacts, then rerun `validate-learner`.

## Studio and Scope Boundaries

- [ ] Studio build, bridge smoke, and health smoke pass.
- [ ] The new domain appears through dynamic CLI listing; no dedicated design screen or workflow exists.
- [ ] Studio remains optional and ChatGPT Projects remain the daily runtime.
- [ ] No Node.js or other domain was added.
- [ ] No new learner runtime, authentication, cloud/database storage, ChatGPT API integration, or LMS was added.
- [ ] No Studio feature expansion or release tag was added.
- [ ] `git diff --check` passes and no temporary test artifacts remain.
