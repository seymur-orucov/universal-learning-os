#!/usr/bin/env node

const { findRepoRoot } = require("./lib/paths");
const { listDomains } = require("./commands/list-domains");
const { validate } = require("./commands/validate");
const { inspectPack } = require("./commands/inspect-pack");
const { generate } = require("./commands/generate");

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
  ulos inspect-pack --domain <domain> --profile <profile>
  ulos generate --domain <domain> --profile <profile>

Supported domains: sql-postgresql, english, javascript, typescript
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

  if (command === "inspect-pack") {
    return inspectPack(repoRoot, parseOptions(rest));
  }

  if (command === "generate") {
    return generate(parseOptions(rest));
  }

  console.error(`Unknown command: ${command}`);
  printHelp();
  return 1;
}

process.exitCode = main();
