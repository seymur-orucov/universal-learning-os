import CommandOutput from "./CommandOutput.jsx";

export default function Dashboard({ status, domains, domainsResult }) {
  return (
    <section className="dashboard">
      <div>
        <p className="eyebrow">Local CLI-backed control panel</p>
        <h1>Universal Learning OS Studio</h1>
        <p>
          Studio helps inspect domains, ask the CLI to validate generated packs, run generation dry-runs, and
          create optional learner handoff or snapshot scaffolds. Daily learning remains inside ChatGPT Projects.
        </p>
      </div>
      <aside className="status-panel">
        <h2>Quick Status</h2>
        <p className="status-pill">{status}</p>
        <p className="muted">Loaded domains: {domains.join(", ")}</p>
        <CommandOutput result={domainsResult} />
      </aside>
    </section>
  );
}
