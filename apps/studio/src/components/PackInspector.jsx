import { useState } from "react";
import CommandOutput from "./CommandOutput.jsx";

export default function PackInspector({ domains, runAction, busyAction }) {
  const [domain, setDomain] = useState(domains[0] || "typescript");
  const [profile, setProfile] = useState("standard");
  const [result, setResult] = useState(null);

  async function run(action) {
    setResult(await runAction(action, { domain, profile }));
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Pack Inspector</h2>
          <p>Inspect generated packs or ask the CLI for generation dry-runs.</p>
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
          Profile
          <select value={profile} onChange={(event) => setProfile(event.target.value)}>
            <option value="standard">standard</option>
            <option value="compact">compact</option>
          </select>
        </label>
      </div>
      <div className="button-row">
        <button onClick={() => run("inspect-pack")} disabled={busyAction === "inspect-pack"}>Inspect pack</button>
        <button onClick={() => run("generate-dry-run")} disabled={busyAction === "generate-dry-run"}>Generate dry-run</button>
      </div>
      <CommandOutput result={result} />
    </section>
  );
}
