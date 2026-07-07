# ADR-0027: Manual Acceptance Tests

## Status

Accepted for Stage 10.6.

## Context

The repository now has generated Project Packs, launch kits, upload/use guides, and generic active learner state. Before creating automation, the project needs human-readable acceptance tests to validate practical behavior, file budget boundaries, continuation flows, deleted-chat recovery, learner state updates, localization, and evidence/mastery guardrails.

## Decision

- Manual acceptance tests live under `tests/manual-acceptance/`.
- They validate generated Project Packs, launch kits, learner state, continuation, deleted-chat recovery, localization, and evidence/mastery guardrails.
- They are human-readable and non-executable for now.
- Generated pack directories remain exactly 25 files and are not modified by tests.
- Future automation MAY convert selected manual tests into executable checks.

## Rationale

Manual acceptance tests give the repository a practical quality gate before runtime tooling exists. They document expected behavior in a form that can be used during ChatGPT Project setup and later converted into automated checks.

Keeping tests outside generated pack directories preserves the 25-file upload-ready rule. Keeping them under `tests/` makes them clearly validation artifacts rather than canonical framework, domain, or learner state content.

## Consequences

- Generated packs and launch kits have documented smoke-test scenarios.
- Evidence-based mastery and localization guardrails can be checked manually.
- Deleted-chat recovery and continuation behavior have explicit acceptance criteria.
- No automation, scripts, schemas, or executable validation are introduced in Stage 10.6.

## Provisional Decisions

- Manual tests are Markdown files.
- Test execution results are not stored in this stage.
- File budget checks include shell command examples but are not automation scripts.

## OPEN QUESTION

- Which manual acceptance tests should be automated first?
- Should future tests produce machine-readable reports?
- Should ChatGPT Project behavior be tested with product-specific screenshots or transcripts?
