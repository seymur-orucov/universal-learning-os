# Project Pack File Budget Template

This template counts source files for a Project Pack. The maximum file count is 25 unless a future target environment says otherwise.

## Budget Summary

- Maximum source files: 25
- Current included files: `<count>`
- Remaining files: `<remaining>`
- Pack profile: `<pack-profile>`

## Included Files

| Count | File | Category | Reason |
| --- | --- | --- | --- |
| 1 | `<file-path>` | `<category>` | `<reason>` |

## Summarized or Merged Files

| Output File | Canonical Sources | Reason |
| --- | --- | --- |
| `<summary-or-bundle-file>` | `<source-files>` | `<reason>` |

## Excluded Files

| File | Reason | Risk |
| --- | --- | --- |
| `<excluded-file>` | `<reason>` | `<risk-if-any>` |

## Reserved Capacity

- Reserved files: `<count>`
- Intended use: `<reserved-use>`

## Budget Check

- Total included files MUST NOT exceed 25.
- Summaries MUST declare canonical source files.
- Exclusions SHOULD be documented when they affect expected runtime behavior.

## OPEN QUESTION

- Should token estimates be added to this budget table?
