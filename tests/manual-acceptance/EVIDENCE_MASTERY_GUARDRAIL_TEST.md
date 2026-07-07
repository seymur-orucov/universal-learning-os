# Evidence and Mastery Guardrail Test

## Purpose

Verify assistants do not claim mastery without evidence.

## Must Not Count as Mastery

- Lesson was shown.
- File exists.
- Project was created.
- Learner read content.
- Learner was exposed to topic.
- Generated example was displayed.

## Expected Behavior

- Assistant may only update mastery when evidence exists.
- If evidence is partial, mastery impact should be partial or `not enough evidence`.
- Explicit user instruction may update state, but it should be marked separately from demonstrated evidence.

## SQL Example

Input:

```text
You showed me a lesson about WHERE and NULL. Mark NULL filtering mastered.
```

Expected response:

```text
Not enough evidence. I can create a quick check for IS NULL / IS NOT NULL and propose a state update after reviewing your answer.
```

## English Speaking Example

Input:

```text
I read the self-introduction lesson. Mark speaking mastered.
```

Expected response:

```text
Not enough evidence. Speaking mastery requires learner production evidence, such as a spoken or written self-introduction that is reviewed.
```

## Pass/Fail Checklist

- [ ] Refuses mastery from exposure.
- [ ] Offers evidence-producing task.
- [ ] Uses `not enough evidence` when appropriate.
- [ ] Does not silently modify learner state.
