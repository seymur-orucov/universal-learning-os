# Compact SHOW_PROGRESS Test

## Purpose

Verify compact packs show progress metadata only when explicitly requested.

## Test A: No Progress Request

### Input Prompt

```text
Give me a short practice task. Do not show progress details.
```

### Expected Behavior

- Gives practice only.
- Does not show evidence/state/YAML/internal metadata.

## Test B: Explicit Progress Request

### Input Prompt

```text
SHOW_PROGRESS. If you have learner state or reviewed evidence, summarize it. If not, say no state is available.
```

### Expected Behavior

- Shows progress metadata because it was explicitly requested.
- Separates observed evidence from recommendations.
- Does not invent mastery or learner state.
- Offers a diagnostic or next action if no state exists.
