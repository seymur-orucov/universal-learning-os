import { useState } from "react";
import CommandOutput from "./CommandOutput.jsx";

export default function ValidationPanel({ runAction, busyAction }) {
  const [result, setResult] = useState(null);

  async function run(action) {
    setResult(await runAction(action));
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Validation</h2>
          <p>Run the CLI validators for generated packs and optional learner artifacts.</p>
        </div>
        <div className="button-row">
          <button onClick={() => run("validate")} disabled={busyAction === "validate"}>Validate</button>
          <button onClick={() => run("validate-learner")} disabled={busyAction === "validate-learner"}>Validate learner</button>
        </div>
      </div>
      <CommandOutput result={result} />
    </section>
  );
}
