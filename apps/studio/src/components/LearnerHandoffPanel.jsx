import { useState } from "react";
import CommandOutput from "./CommandOutput.jsx";

export default function LearnerHandoffPanel({ domains, runAction, busyAction }) {
  const [domain, setDomain] = useState(domains[0] || "typescript");
  const [out, setOut] = useState("");
  const [force, setForce] = useState(false);
  const [result, setResult] = useState(null);

  async function createHandoff() {
    setResult(await runAction("create-handoff", { domain, out, force }));
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Learner Handoff</h2>
          <p>Optional, user-requested scaffold for learner-approved summary context; not an automatic state update.</p>
        </div>
      </div>
      <div className="form-row">
        <label>
          Domain
          <select value={domain} onChange={(event) => setDomain(event.target.value)}>
            {domains.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="wide-field">
          Output path
          <input value={out} onChange={(event) => setOut(event.target.value)} placeholder="optional repo-local path" />
        </label>
        <label className="check-field">
          <input type="checkbox" checked={force} onChange={(event) => setForce(event.target.checked)} />
          Force overwrite
        </label>
      </div>
      <button onClick={createHandoff} disabled={busyAction === "create-handoff"}>Create handoff</button>
      <CommandOutput result={result} />
    </section>
  );
}
