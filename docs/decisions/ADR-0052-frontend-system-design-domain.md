# ADR-0052: Front-End System Design Domain

- Status: Accepted
- Date: 2026-07-10

## Context

After Stage 25.0, Universal Learning OS supports five domains and ten generated packs. Experienced frontend engineers need a reusable domain for architecture interviews, platform decisions, design reviews, and scalable application planning without turning the framework into a generic backend system-design course or expanding the learner runtime and Studio.

## Decision

Add one canonical domain under `domains/frontend-system-design/` and generate its standard and compact project packs using the existing framework contracts and generators.

## Domain ID

The canonical id is `frontend-system-design`.

## Target Learner

The primary learner is a Senior, Lead, Staff, Chapter Lead, or Front-End Architect-level engineer preparing for interviews and real architecture responsibilities.

## Frontend-Specific Scope

The domain covers rendering/delivery, application boundaries, browser state/data flow, API integration, caching, performance, reliability, security, accessibility, localization, design systems, team/codebase scale, real-time/offline behavior, testing, observability, delivery, and governance. Backend concepts are included only when they materially constrain frontend architecture.

## Requirements-First Methodology

The learner clarifies the problem, users, journeys, functional/non-functional requirements, assumptions, and constraints before defining boundaries or proposing a design. The full method then covers state/data flow, rendering, APIs/caching, quality attributes, failures, testing, deployment, and design defense.

## Case-Study Model

Reusable case studies follow Problem through Final design summary and include commerce, banking, dashboards, document editing, chat, video, multi-tenant SaaS, analytics, design systems, monorepos, internationalized sites, and offline field applications.

## Trade-Off Model

Major decisions use Context, Options, Decision, Benefits, Costs, Risks, Mitigations, and Revisit conditions. No option is presented as universally correct.

## Assessment Evidence

Assessment requires learner-produced architecture explanations, diagrams, ADRs, trade-off tables, failure analyses, revised designs, simulations, reviews, or phased plans. Displayed model answers do not establish mastery, and internal mastery/state metadata remains hidden in normal learner-facing output.

## Generated Pack Impact

Add `frontend-system-design-standard` with exactly 25 files and `frontend-system-design-compact` with exactly five contract-defined files. Total generated packs increase from 10 to 12; existing pack contracts and content remain unchanged.

## CLI Impact

The supported-domain registry increases from five to six. Existing list, validate, inspect, generate, handoff, and snapshot commands accept the new domain without new command or runtime infrastructure.

## Studio Impact

Studio continues to obtain domains from the CLI. Only its fallback and smoke expectation are updated. No dedicated screen, diagram editor, dependency, or workflow is added.

## Non-Goals

- Adding Node.js or any other domain.
- Building a backend system-design curriculum.
- Adding authentication, cloud/database storage, ChatGPT API integration, a full LMS, or a heavy learner runtime.
- Requiring daily learner-state repository updates.
- Expanding Studio or preparing a release tag.

## Consequences

The repository supports six domains and twelve generated packs while preserving canonical-source boundaries and learner-facing rules. The new domain adds substantial frontend architecture content and a planned real-learning pilot, but it intentionally does not supply fixed universal reference architectures or claim pilot completion.
