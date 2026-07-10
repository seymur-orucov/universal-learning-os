import { useEffect, useMemo, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import DomainsPanel from "./components/DomainsPanel.jsx";
import ValidationPanel from "./components/ValidationPanel.jsx";
import PackInspector from "./components/PackInspector.jsx";
import LearnerHandoffPanel from "./components/LearnerHandoffPanel.jsx";
import LearnerSnapshotPanel from "./components/LearnerSnapshotPanel.jsx";
import { runCliAction } from "./api/cliClient.js";

const FALLBACK_DOMAINS = ["sql-postgresql", "english", "javascript", "typescript", "dsa", "frontend-system-design", "nodejs"];

function parseDomains(output) {
  const matches = [...output.matchAll(/^- ([a-z0-9-]+)$/gm)].map((match) => match[1]);
  return matches.length > 0 ? matches : FALLBACK_DOMAINS;
}

export default function App() {
  const [domainsResult, setDomainsResult] = useState(null);
  const [domains, setDomains] = useState(FALLBACK_DOMAINS);
  const [busyAction, setBusyAction] = useState("");

  async function runAction(action, payload = {}) {
    setBusyAction(action);
    try {
      const result = await runCliAction(action, payload);
      if (action === "list-domains" && result.exitCode === 0) {
        setDomains(parseDomains(result.stdout));
        setDomainsResult(result);
      }
      return result;
    } finally {
      setBusyAction("");
    }
  }

  useEffect(() => {
    runAction("list-domains").catch((error) => {
      setDomainsResult({
        ok: false,
        exitCode: null,
        action: "list-domains",
        command: "node tools/ulos-cli/src/index.js list-domains",
        stdout: "",
        stderr: error.message,
      });
    });
  }, []);

  const status = useMemo(() => {
    if (!domainsResult) {
      return "Loading domains from CLI";
    }
    return domainsResult.exitCode === 0 ? "CLI bridge reachable" : "CLI bridge needs attention";
  }, [domainsResult]);

  return (
    <main className="app-shell">
      <Dashboard status={status} domains={domains} domainsResult={domainsResult} />
      <div className="panel-grid">
        <DomainsPanel result={domainsResult} onRun={() => runAction("list-domains")} busy={busyAction === "list-domains"} />
        <ValidationPanel runAction={runAction} busyAction={busyAction} />
        <PackInspector domains={domains} runAction={runAction} busyAction={busyAction} />
        <LearnerHandoffPanel domains={domains} runAction={runAction} busyAction={busyAction} />
        <LearnerSnapshotPanel domains={domains} runAction={runAction} busyAction={busyAction} />
      </div>
    </main>
  );
}
