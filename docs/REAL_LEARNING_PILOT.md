# Real Learning Pilot

Stage 24.0 begins the first real validation of PLOS through actual learning. This is a usage plan, not a claim that any pilot has been completed.

## SQL/PostgreSQL pilot

- Use `exports/generated/sql-postgresql-compact/`.
- Create a SQL/PostgreSQL ChatGPT Project.
- Run 3–5 lessons.
- Check that lesson flow is clear, explanations are step-by-step, practice tasks are useful, feedback is concise, internal metadata is hidden by default, homework review works, and a handoff is useful when requested.

## English pilot

- Use `exports/generated/english-compact/`.
- Create an English Mentor ChatGPT Project.
- Run 3–5 lessons.
- Check that speaking focus works, grammar supports speaking, vocabulary and shadowing are practical, feedback is learner-facing, and internal metadata is hidden by default.

## JavaScript/TypeScript pilot

This is an optional later pilot. Focus on practical coding lessons, exercises, and review quality.

## DSA pilot

This is a planned pilot, not a claim that it has been completed.

- Create a dedicated DSA ChatGPT Project and upload `exports/generated/dsa-compact/`.
- Run 3–5 lessons using JavaScript as the default implementation language.
- Test at least Big O, Arrays/Hash Map, and either Two Pointers or Sliding Window.
- Verify that the mentor asks the learner to reason before coding and does not reveal full solutions too early.
- Verify that brute force and optimized approaches are compared.
- Verify that edge cases, test cases, time complexity, and space complexity are discussed.
- Verify that learner-facing feedback is concise and recommends a next action.
- Verify that internal evidence/state metadata remains hidden in normal lessons.
- Explicitly request a review and, when useful, a learner handoff to verify those flows without making them daily requirements.

Suggested first prompt:

```text
Start Lesson 1 for DSA using JavaScript. Teach me step by step and let me reason before showing the solution.
```

## Front-End System Design pilot

This is a planned pilot, not a claim that it has been completed.

- Create a dedicated ChatGPT Project named `Front-End System Design Mentor`.
- Upload all five files from `exports/generated/frontend-system-design-compact/`.
- Run 3–5 lessons or design exercises.
- Test requirement clarification, architecture boundaries, and contextual trade-off reasoning.
- Test state ownership/data flow, performance, reliability, and failure-mode analysis.
- Run one learner-led interview simulation.
- Verify complete designs are not revealed too early and learner reasoning is required.
- Verify internal metadata remains hidden and feedback is concise and role-appropriate.

Suggested first prompt:

```text
Start Lesson 1 for Front-End System Design. Teach me at Senior Front-End Engineer level and make me reason about requirements, architecture boundaries, and trade-offs.
```

Suggested interview prompt:

```text
Start a Front-End System Design interview simulation for a real-time admin dashboard. Let me lead the requirements and design before reviewing my answer.
```

## Node.js pilot

This is a planned pilot, not a claim that it has been completed.

- Create a dedicated ChatGPT Project named `Node.js Backend Mentor`.
- Upload all five files from `exports/generated/nodejs-compact/`.
- Run 3–5 lessons.
- Test runtime and event-loop explanation, then native HTTP or HTTP fundamentals.
- Test one Fastify lesson and verify the underlying HTTP/runtime behavior remains explicit; use Express as a comparison where useful.
- Test validation, structured error handling, and both success and failure tests.
- Test one PostgreSQL-backed task or design exercise with SQL and transaction reasoning.
- Verify NestJS is not introduced before runtime, HTTP, architecture, validation, PostgreSQL, and testing foundations.
- Verify security and tests are integrated rather than deferred.
- Verify complete solutions are not shown too early and learner reasoning is required.
- Verify internal evidence/state metadata remains hidden by default.
- Verify feedback is concise and appropriate for an experienced frontend learner.

Suggested first prompt:

```text
Start Lesson 1 for Node.js. Teach me as an experienced Front-End Engineer moving into backend development. Explain runtime fundamentals before frameworks.
```

Suggested project prompt:

```text
Start a practical Node.js API project using TypeScript and PostgreSQL. Guide me step by step, but let me make architecture and implementation decisions before showing full solutions.
```

## Pilot result template

```text
Domain:
Pack profile:
Lessons tested:
What worked:
What was confusing:
Metadata hidden by default? yes/no
Practice quality:
Review quality:
Handoff quality:
Changes needed:
Decision:
```

Record only useful, non-sensitive observations. Do not infer mastery automatically from chat history, import full transcripts, or turn ordinary lessons into mandatory repository updates.
