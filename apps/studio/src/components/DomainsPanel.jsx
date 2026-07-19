import CommandOutput from "./CommandOutput.jsx";

export default function DomainsPanel({ result, onRun, busy }) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Domains</h2>
          <p>Read supported domains from the CLI.</p>
        </div>
        <button onClick={onRun} disabled={busy}>{busy ? "Running" : "List domains"}</button>
      </div>
      <CommandOutput result={result} />
    </section>
  );
}
