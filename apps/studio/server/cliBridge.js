const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const cliPath = path.join(repoRoot, "tools", "ulos-cli", "src", "index.js");
const { SUPPORTED_DOMAINS, SUPPORTED_PROFILES } = require(path.join(repoRoot, "tools", "ulos-cli", "src", "lib", "domains"));
const { SNAPSHOT_TYPES } = require(path.join(repoRoot, "tools", "ulos-cli", "src", "lib", "learner-runtime"));

const ALLOWED_ACTIONS = [
  "list-domains",
  "validate",
  "validate-learner",
  "inspect-pack",
  "generate-dry-run",
  "create-handoff",
  "create-snapshot",
];

function assertCliAvailable() {
  if (!fs.existsSync(cliPath)) {
    throw new Error(`Missing CLI entry point: ${cliPath}`);
  }
}

function assertSupported(value, allowed, label) {
  if (!allowed.includes(value)) {
    throw new Error(`Unsupported ${label}: ${value || "<missing>"}. Supported values: ${allowed.join(", ")}`);
  }
}

function normalizeRepoLocalPath(outputPath) {
  if (outputPath === undefined || outputPath === null || outputPath === "") {
    return "";
  }

  if (typeof outputPath !== "string") {
    throw new Error("Output path must be a string.");
  }

  const normalizedOutputPath = outputPath.trim();
  if (!normalizedOutputPath) {
    return "";
  }

  const resolved = path.isAbsolute(normalizedOutputPath)
    ? path.resolve(normalizedOutputPath)
    : path.resolve(repoRoot, normalizedOutputPath);

  if (resolved !== repoRoot && !resolved.startsWith(repoRoot + path.sep)) {
    throw new Error(`Unsafe output path: ${resolved}. Output must stay inside the repository root.`);
  }

  return path.relative(repoRoot, resolved);
}

function buildCommand(request) {
  const action = request.action;

  if (!ALLOWED_ACTIONS.includes(action)) {
    throw new Error(`Unsupported action: ${action || "<missing>"}. Allowed actions: ${ALLOWED_ACTIONS.join(", ")}`);
  }

  if (action === "list-domains") {
    return ["list-domains"];
  }

  if (action === "validate") {
    return ["validate"];
  }

  if (action === "validate-learner") {
    return ["validate-learner"];
  }

  if (action === "inspect-pack") {
    assertSupported(request.domain, SUPPORTED_DOMAINS, "domain");
    assertSupported(request.profile, SUPPORTED_PROFILES, "profile");
    return ["inspect-pack", "--domain", request.domain, "--profile", request.profile];
  }

  if (action === "generate-dry-run") {
    assertSupported(request.domain, SUPPORTED_DOMAINS, "domain");
    assertSupported(request.profile, SUPPORTED_PROFILES, "profile");
    return ["generate", "--domain", request.domain, "--profile", request.profile, "--dry-run"];
  }

  if (action === "create-handoff") {
    assertSupported(request.domain, SUPPORTED_DOMAINS, "domain");
    const args = ["create-handoff", "--domain", request.domain];
    const out = normalizeRepoLocalPath(request.out);
    if (out) {
      args.push("--out", out);
    }
    if (request.force === true) {
      args.push("--force");
    }
    return args;
  }

  if (action === "create-snapshot") {
    assertSupported(request.domain, SUPPORTED_DOMAINS, "domain");
    assertSupported(request.type, SNAPSHOT_TYPES, "snapshot type");
    const args = ["create-snapshot", "--domain", request.domain, "--type", request.type];
    const out = normalizeRepoLocalPath(request.out);
    if (out) {
      args.push("--out", out);
    }
    if (request.force === true) {
      args.push("--force");
    }
    return args;
  }

  throw new Error(`Unsupported action: ${action || "<missing>"}. Allowed actions: ${ALLOWED_ACTIONS.join(", ")}`);
}

function runCliAction(request) {
  const action = request && request.action;
  const startedAt = new Date().toISOString();
  let args;

  try {
    assertCliAvailable();
    args = buildCommand(request || {});
  } catch (error) {
    return Promise.resolve({
      ok: false,
      action,
      command: "",
      args: [],
      cwd: repoRoot,
      exitCode: null,
      stdout: "",
      stderr: error.message,
      startedAt,
      finishedAt: new Date().toISOString(),
    });
  }

  return new Promise((resolve) => {
    const child = spawn(process.execPath, [cliPath, ...args], {
      cwd: repoRoot,
      shell: false,
      windowsHide: true,
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      resolve({
        ok: false,
        action: request.action,
        command: `node tools/ulos-cli/src/index.js ${args.join(" ")}`,
        args,
        cwd: repoRoot,
        exitCode: null,
        stdout,
        stderr: error.message,
        startedAt,
        finishedAt: new Date().toISOString(),
      });
    });

    child.on("close", (exitCode) => {
      resolve({
        ok: exitCode === 0,
        action: request.action,
        command: `node tools/ulos-cli/src/index.js ${args.join(" ")}`,
        args,
        cwd: repoRoot,
        exitCode,
        stdout,
        stderr,
        startedAt,
        finishedAt: new Date().toISOString(),
      });
    });
  });
}

module.exports = {
  ALLOWED_ACTIONS,
  buildCommand,
  normalizeRepoLocalPath,
  runCliAction,
};
