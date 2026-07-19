# Stage 24.0 Real Learning Pilot and Framework Pause Manual Acceptance Test

## Documentation checks

- [ ] `docs/GETTING_STARTED.md` exists.
- [ ] `docs/CHATGPT_PROJECT_SETUP.md` exists.
- [ ] `docs/REAL_LEARNING_PILOT.md` exists.
- [ ] `docs/FRAMEWORK_PAUSE_AND_NEXT_FOCUS.md` exists.
- [ ] `docs/decisions/ADR-0050-real-learning-pilot-and-framework-pause.md` exists.
- [ ] Studio README clearly says Studio is optional.
- [ ] Docs clearly state that the primary workflow is generated packs plus ChatGPT Projects.
- [ ] Docs clearly state Studio is not the learning runtime.
- [ ] Docs clearly state that daily repository updates are not required.

## Contract and CLI checks

- [ ] No new domain was added.
- [ ] Generated pack contracts are unchanged: standard packs remain exactly 25 files and compact packs exactly 5 files.
- [ ] `node tools/ulos-cli/src/index.js validate` passes.
- [ ] `node tools/ulos-cli/src/index.js validate-learner` passes.
- [ ] CLI automated tests pass from `tools/ulos-cli/` with `npm test`.

## Studio checks

- [ ] Studio build passes from `apps/studio/` with `npm run build`.
- [ ] Studio smoke checks pass with `npm run smoke:bridge` and `npm run smoke:health`.
- [ ] No new Studio feature was added.

## Boundary checks

- [ ] No auth, cloud storage, database storage, or ChatGPT API integration was added.
- [ ] No generated pack contract changed.
- [ ] Learner-Facing Mentor Mode remains unchanged.
- [ ] Handoff and snapshot remain optional and user-requested.
- [ ] No mandatory daily learner-state workflow or heavy runtime learner-state system was introduced.
- [ ] No release tag was created.

## Final repository checks

- [ ] `git diff --check` is clean.
- [ ] No temporary smoke or test artifacts remain.
