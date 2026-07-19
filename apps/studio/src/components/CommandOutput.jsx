export default function CommandOutput({ result }) {
  if (!result) {
    return <p className="muted">Run a command to see output.</p>;
  }

  const passed = result.exitCode === 0;

  return (
    <div className="command-output">
      <div className={`status-line ${passed ? "pass" : "fail"}`}>
        <span>{passed ? "PASS" : "FAIL"}</span>
        <span>exit code: {result.exitCode ?? "app error"}</span>
      </div>
      {result.command ? <p className="command-text">{result.command}</p> : null}
      <div className="output-columns">
        <section>
          <h4>stdout</h4>
          <pre>{result.stdout || "(empty)"}</pre>
        </section>
        <section>
          <h4>stderr</h4>
          <pre>{result.stderr || "(empty)"}</pre>
        </section>
      </div>
    </div>
  );
}
