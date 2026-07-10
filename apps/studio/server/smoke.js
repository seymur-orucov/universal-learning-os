const { createServer } = require("./index");
const { ALLOWED_ACTIONS, runCliAction } = require("./cliBridge");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function smokeBridge() {
  const domains = await runCliAction({ action: "list-domains" });
  assert(domains.ok, `list-domains failed: ${domains.stderr || domains.stdout}`);
  for (const domain of ["sql-postgresql", "english", "javascript", "typescript", "dsa"]) {
    assert(domains.stdout.includes(`- ${domain}`), `list-domains did not include ${domain}`);
  }

  const invalidDomain = await runCliAction({
    action: "inspect-pack",
    domain: "unsupported-domain",
    profile: "standard",
  });
  assert(!invalidDomain.ok, "unsupported domain was accepted");
  assert(invalidDomain.stderr.includes("Unsupported domain"), "unsupported domain rejection was not actionable");

  const unsafeOut = await runCliAction({
    action: "create-handoff",
    domain: "typescript",
    out: "../unsafe-handoff.md",
  });
  assert(!unsafeOut.ok, "unsafe output path was accepted");
  assert(unsafeOut.stderr.includes("Unsafe output path"), "unsafe output path rejection was not actionable");

  const unsupportedAction = await runCliAction({ action: "shell" });
  assert(!unsupportedAction.ok, "unsupported action was accepted");
  assert(unsupportedAction.stderr.includes("Unsupported action"), "unsupported action rejection was not actionable");

  console.log("Bridge smoke passed.");
  console.log(`Allowed actions: ${ALLOWED_ACTIONS.join(", ")}`);
}

async function smokeHealth() {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/health`);
    assert(response.ok, `health endpoint returned HTTP ${response.status}`);
    const body = await response.json();
    assert(body.ok === true, "health endpoint did not return ok: true");
    console.log(`Health smoke passed on http://127.0.0.1:${port}/api/health.`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function main() {
  const mode = process.argv[2] || "bridge";
  if (mode === "bridge") {
    await smokeBridge();
    return;
  }
  if (mode === "health") {
    await smokeHealth();
    return;
  }
  throw new Error(`Unknown smoke mode: ${mode}. Use "bridge" or "health".`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
