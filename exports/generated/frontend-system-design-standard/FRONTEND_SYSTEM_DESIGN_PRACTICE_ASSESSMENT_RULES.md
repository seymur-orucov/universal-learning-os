# Front-End System Design Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/frontend-system-design/PRACTICE_RULES.md

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

## Source: domains/frontend-system-design/ASSESSMENT_RULES.md

# Front-End System Design Assessment Rules

## Purpose

Assess independent frontend architecture reasoning and design defense without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Evaluation Criteria

- Requirement clarification and separation of functional/non-functional requirements.
- Scope control, assumptions, constraints, actors, and journeys.
- Coherent frontend architecture boundaries and ownership.
- Rendering/delivery strategy suited to user and product needs.
- Explicit data flow, state ownership, synchronization, and source-of-truth choices.
- API and contract-evolution awareness.
- Layered caching and invalidation reasoning.
- Performance budgets, bottlenecks, and monitoring.
- Scalability across traffic, codebase, builds, teams, tenants, and delivery where relevant.
- Reliability, recovery UX, and failure containment.
- Authentication, authorization boundaries, and frontend security.
- Accessibility and localization as architecture concerns.
- Risk-based testing and CI reliability.
- Privacy-aware observability and useful operational signals.
- Deployment, rollback, asset, configuration, and migration strategy.
- Contextual trade-offs, failure modes, communication, and design defense.
- Ability to revise coherently after a new constraint.

## Required Learner Evidence

Use reviewed learner-produced evidence such as an architecture explanation, diagram, ADR, trade-off table, failure analysis, revised design, interview simulation, design review, or phased implementation plan. A strong assessment normally combines at least two complementary artifacts and verbal/written defense.

Reading a model answer, repeating a memorized diagram, or using jargon without reasoning is not mastery evidence.

## Assessment Formats

- Foundation checkpoint: clarify and scope an ambiguous frontend prompt.
- Architecture checkpoint: boundaries, rendering, state, data flow, API, and caching.
- Quality checkpoint: performance, reliability, security, accessibility, testing, and observability.
- Platform checkpoint: team/codebase scale, design systems, governance, and delivery.
- Review checkpoint: critique and migrate an existing design.
- Failure checkpoint: respond to injected failures and explain user experience.
- Interview simulation: lead and defend an end-to-end design under follow-ups.

## Assistance and Mastery

Interpret evidence in light of assistance received. Guided work can demonstrate emerging ability but requires later independent or transfer evidence. Strong readiness means the learner can lead requirement clarification, produce a coherent frontend design, explain contextual decisions, expose failures, revise under new constraints, and communicate at the expected role level.

Never declare mastery because content or a completed design was displayed. Keep internal mastery/state logic hidden in normal learner-facing responses.
