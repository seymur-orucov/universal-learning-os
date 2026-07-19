# Tests

This directory contains validation checks and acceptance test documentation.

Tests SHOULD verify schemas, examples, migrations, and specification consistency once those artifacts exist.

## Current Status

- `tools/ulos-cli/test/` contains dependency-free Node contract tests.
- `node tools/ulos-cli/src/index.js validate` validates all supported generated packs.
- `tests/manual-acceptance/` contains human-readable behavioral checks, including the Front-End Testing acceptance checklist and real-learning pilot.

## OPEN QUESTION

- Which manual acceptance tests should become automated first?
