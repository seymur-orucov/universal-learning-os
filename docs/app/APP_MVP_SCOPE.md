# Universal Learning OS Studio MVP Scope

## MVP Definition

The first Universal Learning OS Studio MVP is a lightweight, repository-local control panel over existing CLI and generated pack workflows.

It should help a maintainer or learner prepare ChatGPT Project files, inspect generated pack status, run validation, and create optional handoff/snapshot scaffolds. Daily learning remains inside ChatGPT Projects.

## Included

The MVP should include:

- Show supported domains.
- Show standard and compact pack profiles.
- Show generated pack validation status.
- Show the exact ChatGPT Project upload file list for compact packs.
- Show standard pack file lists.
- Run or display equivalent commands for `list-domains`.
- Run or display equivalent commands for `validate`.
- Run or display equivalent commands for `inspect-pack`.
- Run or display equivalent commands for `create-handoff`.
- Run or display equivalent commands for `create-snapshot`.
- Run or display equivalent commands for `validate-learner`.
- Create learner handoff scaffolds through the CLI.
- Create learner snapshot scaffolds through the CLI.
- Show safe output paths before creating optional learner artifacts.
- Show validation status.
- Show automated test status.

## Excluded

The MVP should exclude:

- Authentication.
- Cloud storage.
- ChatGPT API integration.
- Automatic lesson generation.
- Automatic mastery inference.
- Chat transcript import.
- Database storage.
- Multi-user support.
- Heavy analytics.
- Generated pack editing inside the app.
- New learning domains.
- New generated pack contracts.
- Mandatory daily learner-state workflows.

## Required CLI Commands

The MVP should depend on existing CLI behavior:

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain typescript --profile compact
node tools/ulos-cli/src/index.js create-handoff --domain typescript
node tools/ulos-cli/src/index.js create-snapshot --domain typescript
node tools/ulos-cli/src/index.js validate-learner
```

The app may display these commands, run them locally, and show their output. It should not duplicate validation logic that already belongs to the CLI.

## Domain Display

The MVP should display the supported domains reported by the CLI. At Stage 21.0, the expected domains are:

- `sql-postgresql`
- `english`
- `javascript`
- `typescript`

The app must not add a domain.

## Profile Display

The MVP should display both pack profiles:

- Standard profile: exactly 25 files.
- Compact profile: exactly 5 files.

For compact packs, the exact ChatGPT Project upload file list must remain:

- `PROJECT_INSTRUCTIONS.md`
- `STARTUP_PROMPT.md`
- `DOMAIN_CORE.md`
- `COMMANDS_CORE.md`
- `MENTOR_SKILLS_CORE.md`

## Handoff and Snapshot Behavior

The MVP may create optional learner handoff and snapshot scaffolds only after explicit user action.

The MVP must not:

- Require repository updates after every lesson.
- Infer mastery from handoffs, snapshots, or chat history.
- Generate YAML learner-state patches.
- Import full transcripts.
- Store sensitive personal data.

## Acceptance Boundary

Stage 21.0 accepts architecture and planning only. It does not accept an app implementation, new app dependencies, or runtime learner-state expansion.
