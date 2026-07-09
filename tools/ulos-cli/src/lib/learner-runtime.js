const fs = require("fs");
const path = require("path");
const { SUPPORTED_DOMAINS, getDomainConfig } = require("./domains");

const SNAPSHOT_TYPES = ["milestone", "monthly", "assessment", "progress"];

const FORBIDDEN_MARKERS = [
  "YAML learner state update",
  "Proposed State Updates",
  "internal skill ID",
  "debug/audit metadata",
  "Generated pack implementation details",
  "Evidence Generated",
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
    throw new Error(`Unsafe output path: ${resolvedOutputPath}. Output must stay inside the repository root.`);
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
- Privacy: do not add sensitive personal data, full chat transcripts, internal metadata, or unnecessary personal details.
- Scope: safe learner-facing summary fields only; no YAML learner-state patch fields are included by default.

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
- Privacy: do not add sensitive personal data, full chat transcripts, internal metadata, or unnecessary personal details.
- Scope: safe learner-facing summary fields only; no YAML learner-state patch fields are included by default.

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

function listArtifactFiles(directory) {
  const markdownFiles = [];
  const ignoredFiles = [];

  if (!fs.existsSync(directory)) {
    return { markdownFiles, ignoredFiles };
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const nested = listArtifactFiles(entryPath);
      markdownFiles.push(...nested.markdownFiles);
      ignoredFiles.push(...nested.ignoredFiles);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      markdownFiles.push(entryPath);
    } else if (entry.isFile()) {
      ignoredFiles.push(entryPath);
    }
  }

  return { markdownFiles, ignoredFiles };
}

function validateLearnerArtifacts(repoRoot) {
  const learnerRoot = path.join(repoRoot, "learners", "active-learner");
  const handoffDir = path.join(learnerRoot, "handoffs");
  const snapshotDir = path.join(learnerRoot, "snapshots");
  const handoffs = listArtifactFiles(handoffDir);
  const snapshots = listArtifactFiles(snapshotDir);
  const files = handoffs.markdownFiles.concat(snapshots.markdownFiles);
  const ignoredFiles = handoffs.ignoredFiles.concat(snapshots.ignoredFiles);
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
    learnerArtifactsFound: fs.existsSync(learnerRoot),
    handoffDirExists: fs.existsSync(handoffDir),
    snapshotDirExists: fs.existsSync(snapshotDir),
    handoffFiles: handoffs.markdownFiles,
    snapshotFiles: snapshots.markdownFiles,
    files,
    ignoredFiles,
    violations,
    passed: violations.length === 0,
  };
}

module.exports = {
  FORBIDDEN_MARKERS,
  SNAPSHOT_TYPES,
  SUPPORTED_DOMAINS,
  assertSupportedDomain,
  buildHandoffContent,
  buildSnapshotContent,
  defaultHandoffPath,
  defaultSnapshotPath,
  readTemplate,
  validateLearnerArtifacts,
  writeScaffold,
};
