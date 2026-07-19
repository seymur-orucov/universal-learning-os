import { useState } from "react";
import CommandOutput from "./CommandOutput.jsx";

const SNAPSHOT_TYPES = ["milestone", "monthly", "assessment", "progress"];

export default function LearnerSnapshotPanel({ domains, runAction, busyAction }) {
  const [domain, setDomain] = useState(domains[0] || "typescript");
  const [type, setType] = useState("milestone");
  const [out, setOut] = useState("");
  const [force, setForce] = useState(false);
  const [result, setResult] = useState(null);

  async function createSnapshot() {
    setResult(await runAction("create-snapshot", { domain, type, out, force }));
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Learner Snapshot</h2>
          <p>Optional, periodic, and user-requested snapshot scaffold; not a daily runtime requirement.</p>
        </div>
      </div>
      <div className="form-row">
        <label>
          Domain
          <select value={domain} onChange={(event) => setDomain(event.target.value)}>
            {domains.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Type
          <select value={type} onChange={(event) => setType(event.target.value)}>
            {SNAPSHOT_TYPES.map((item) => <option key={item} value={item}>{item}</option>)}
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
      <button onClick={createSnapshot} disabled={busyAction === "create-snapshot"}>Create snapshot</button>
      <CommandOutput result={result} />
    </section>
  );
}
