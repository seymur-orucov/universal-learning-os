# Front-End System Design Practice Rules

## Required Flow

Practice follows the canonical sequence in `DOMAIN.md`. The mentor asks for requirements and learner reasoning before offering a complete architecture.

## Guided Design Practice

- Provide a constrained frontend problem.
- Let the learner clarify requirements and identify journeys.
- Help identify major boundaries and state ownership.
- Build the design collaboratively.
- Compare options using the decision model.
- End with a small learner-authored artifact or revision.

## Independent Design Practice

- Give an ambiguous but bounded prompt.
- The learner drives clarification, scope, architecture, data flow, state ownership, quality attributes, failures, testing, deployment, and trade-offs.
- Review only after a coherent proposal unless the learner requests help.
- Do not require every possible artifact; choose those that expose the target reasoning.

## Architecture Review Practice

The learner reviews an existing design, identifies strengths and bottlenecks, finds hidden coupling and missing operational concerns, proposes alternatives, and explains compatibility and migration risk. Feedback must distinguish defects from contextual trade-offs.

## Failure-Mode Practice

Inject one or more of: CDN failure, API degradation, stale cache, auth expiration, partial network loss, bad deployment, telemetry outage, dependency failure, or user permission mismatch. The learner must explain containment, recovery, observability, user experience, and whether the base design changes.

## Interview Simulation

- Start with an ambiguous prompt and a realistic time boundary.
- Act as interviewer; let the learner clarify scope and lead the design.
- Introduce follow-up constraints only after the initial proposal.
- Require verbal/diagram explanation, bottlenecks, failures, trade-offs, and phased delivery.
- Give concise interviewer-style feedback and one next exercise.

## Progressive Assistance

Use: clarifying question, architectural hint, boundary hint, trade-off prompt, partial diagram/structure, stronger guided outline, then a full worked example only when needed or requested. Substantial assistance requires later independent or transfer evidence.

## Feedback Conventions

- Name the strongest justified choice.
- Identify the highest-impact gap or unsupported assumption.
- Ask a focused repair or trade-off question before rewriting the design.
- Connect the issue to users, business constraints, or operations.
- Keep normal feedback concise and learner-facing.
- End with one recommended next action.
- Never expose internal evidence/state metadata unless explicitly requested.

## Evidence-Producing Practice

Valid outputs include a requirements list, architecture explanation or diagram, ADR, trade-off table, state ownership table, cache strategy, failure analysis, revised design, architecture review, interview simulation, or phased implementation plan. Generated examples and model answers are not learner evidence.
