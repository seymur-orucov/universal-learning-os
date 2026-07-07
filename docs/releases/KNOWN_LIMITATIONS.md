# Known Limitations

## Current Limitations

- No automation scripts yet.
- No machine-readable schema validation yet.
- Generated packs are manually maintained derived artifacts.
- Token budget is not yet tracked separately from file count.
- Manual acceptance tests are not executable.
- Learner state updates are manual.
- Audio/pronunciation workflow for English needs privacy policy before deeper use.
- New technology/domain creation workflow is not yet automated.
- Generated packs may drift from canonical sources unless manually synced.
- Deleted chats cannot be reconstructed unless session summaries or learner state were saved.

## Practical Impact

- Users must run release and acceptance checks manually.
- Generated Project Packs should be reviewed after canonical source changes.
- Learner progress must be maintained carefully and evidence-first.
- Sensitive data should not be stored in learner state or Project Packs.

## OPEN QUESTION

- Which limitation should be addressed first after v0.1.0-rc1?
