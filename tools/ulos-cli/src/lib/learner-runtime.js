const fs = require("fs");
const path = require("path");
const { getDomainConfig } = require("./domains");

const SNAPSHOT_TYPES = ["milestone", "monthly", "assessment", "progress"];

const FORBIDDEN_MARKERS = [
  "YAML learner state update",
  "Proposed State Updates",
  "internal skill ID",
  "debug/audit metadata",
];

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function resolveRepoLocalPath(repoRoot, outputPath) {
  const resolvedRepoRoot = path.resolve(repoRoot);
  const resolvedOutputPath = path.isAbsolute(outputPath)
    ? path.resolve(outputPath)
    : path.resolve(repoRoot, outputPath);

  if (resolvedOutputPath !== resolvedRepoRoot && !resolvedOutputPath.startsWith(resolvedRepoRoot + path.sep)) {
    throw new Error(`Refusing to write outside repository root: ${resolvedOutputPath}`);
  }

  return resolvedOutputPath;
}

function readTemplate(repoRoot, relativePath) {
  const templatePath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing template: ${relativePath}`);
  }
  return fs.readFileSync(templatePath, "utf8");
}

function writeScaffold(repoRoot, outputPath, content, options = {}) {
  const targetPath = resolveRepoLocalPath(repoRoot, outputPath);
  const parentDir = path.dirname(targetPath);

  if (fs.existsSync(targetPath) && !options.force) {
    throw new Error(`Target file already exists: ${targetPath}. Use --force to overwrite.`);
  }

  fs.mkdirSync(parentDir, { recursive: true });
  fs.writeFileSync(targetPath, content, "utf8");
  return targetPath;
}

function buildHandoffContent(domainConfig, template) {
  return `# ${domainConfig.title} Learner Handoff Scaffold

This handoff is optional and user-requested. Daily learning progress remains chat-local by default; repository handoffs are not required after every lesson.

- Domain id: \`${domainConfig.id}\`
- Domain title: ${domainConfig.title}
- Created: ${todayString()}
- Privacy: do not add sensitive personal data, private full chat transcripts, or unnecessary personal details.

---

${template.trim()}
`;
}

function buildSnapshotContent(domainConfig, snapshotType, template) {
  return `# ${domainConfig.title} Learner Snapshot Scaffold

This snapshot is optional, periodic, and user-requested. Daily learning progress remains chat-local by default; repository snapshots are not required after every lesson.

- Domain id: \`${domainConfig.id}\`
- Domain title: ${domainConfig.title}
- Snapshot type: \`${snapshotType}\`
- Created: ${todayString()}
- Privacy: do not add sensitive personal data, private full chat transcripts, or unnecessary personal details.

---

${template.trim()}
`;
}

function defaultHandoffPath(domain) {
  return path.join("learners", "active-learner", "handoffs", `${domain}-handoff-${todayString()}.md`);
}

function defaultSnapshotPath(domain, snapshotType) {
  return path.join("learners", "active-learner", "snapshots", `${domain}-${snapshotType}-${todayString()}.md`);
}

function assertSupportedDomain(domain) {
  const domainConfig = getDomainConfig(domain);
  if (!domainConfig) {
    throw new Error(`Unsupported domain: ${domain || "<missing>"}`);
  }
  return domainConfig;
}

function listMarkdownFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(entryPath);
    }
  }

  return files;
}

function validateLearnerArtifacts(repoRoot) {
  const learnerRoot = path.join(repoRoot, "learners", "active-learner");
  const handoffDir = path.join(learnerRoot, "handoffs");
  const snapshotDir = path.join(learnerRoot, "snapshots");
  const files = listMarkdownFiles(handoffDir).concat(listMarkdownFiles(snapshotDir));
  const violations = [];

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");
    for (const marker of FORBIDDEN_MARKERS) {
      if (content.includes(marker)) {
        violations.push({ filePath, marker });
      }
    }
  }

  return {
    learnerRoot,
    files,
    violations,
    passed: violations.length === 0,
  };
}

module.exports = {
  SNAPSHOT_TYPES,
  assertSupportedDomain,
  buildHandoffContent,
  buildSnapshotContent,
  defaultHandoffPath,
  defaultSnapshotPath,
  readTemplate,
  validateLearnerArtifacts,
  writeScaffold,
};
