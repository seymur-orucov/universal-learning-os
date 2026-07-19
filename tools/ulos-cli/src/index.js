#!/usr/bin/env node

const { findRepoRoot } = require("./lib/paths");
const { listDomains } = require("./commands/list-domains");
const { validate } = require("./commands/validate");
const { inspectPack } = require("./commands/inspect-pack");
const { generate } = require("./commands/generate");
const { createHandoff } = require("./commands/create-handoff");
const { createSnapshot } = require("./commands/create-snapshot");
const { validateLearner } = require("./commands/validate-learner");
const { SUPPORTED_DOMAINS } = require("./lib/domains");

function parseOptions(args) {
  const options = {};

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--domain") {
      options.domain = args[index + 1];
      index += 1;
    } else if (arg === "--profile") {
      options.profile = args[index + 1];
      index += 1;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--out-dir") {
      options.outDir = args[index + 1];
      index += 1;
    } else if (arg === "--out") {
      options.out = args[index + 1];
      index += 1;
    } else if (arg === "--type") {
      options.type = args[index + 1];
      index += 1;
    } else if (arg === "--force") {
      options.force = true;
    } else {
      options._unknown = options._unknown || [];
      options._unknown.push(arg);
    }
  }

  return options;
}

function printHelp() {
  console.log(`Universal Learning OS CLI

Usage:
  ulos list-domains
  ulos validate
  ulos validate-learner
  ulos inspect-pack --domain <domain> --profile <profile>
  ulos generate --domain <domain> --profile <profile> [--dry-run] [--out-dir <path> for standard]
  ulos create-handoff --domain <domain> [--out <path>] [--force]
  ulos create-snapshot --domain <domain> --type <type> [--out <path>] [--force]

Supported domains: ${SUPPORTED_DOMAINS.join(", ")}
Supported profiles: standard, compact`);
}

function main() {
  const [, , command, ...rest] = process.argv;

  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return 0;
  }

  let repoRoot;
  try {
    repoRoot = findRepoRoot();
  } catch (error) {
    console.error(error.message);
    return 1;
  }

  if (command === "list-domains") {
    listDomains();
    return 0;
  }

  if (command === "validate") {
    return validate(repoRoot);
  }

  if (command === "validate-learner") {
    return validateLearner(repoRoot);
  }

  if (command === "inspect-pack") {
    return inspectPack(repoRoot, parseOptions(rest));
  }

  if (command === "generate") {
    return generate(repoRoot, parseOptions(rest));
  }

  if (command === "create-handoff") {
    return createHandoff(repoRoot, parseOptions(rest));
  }

  if (command === "create-snapshot") {
    return createSnapshot(repoRoot, parseOptions(rest));
  }

  console.error(`Unknown command: ${command}`);
  printHelp();
  return 1;
}

process.exitCode = main();
