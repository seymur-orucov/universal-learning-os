# Tagging and Release

## Preconditions

- Tag only after validation passes.
- Tag from `main`.
- Ensure the working tree is clean.
- Do not tag with uncommitted generated pack changes.

## Final Checks

```sh
git status
node tools/ulos-cli/src/index.js validate
```

Expected validation result: `Result: PASS`.

## Lightweight Tag

```sh
git tag v0.2.0
git push origin v0.2.0
```

## Annotated Tag

Safer option for a release tag:

```sh
git tag -a v0.2.0 -m "Universal Learning OS v0.2.0"
git push origin v0.2.0
```

## Do Not Tag If

- `node tools/ulos-cli/src/index.js validate` fails.
- `git status` shows uncommitted release or generated pack changes.
- The current branch is not `main`.
- Standard or compact generated pack counts changed unexpectedly.
