const API_BASE = import.meta.env.VITE_ULOS_STUDIO_API || "http://127.0.0.1:5174";

export async function runCliAction(action, payload = {}) {
  const response = await fetch(`${API_BASE}/api/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action, ...payload }),
  });

  const result = await response.json();
  if (!response.ok) {
    return {
      ok: false,
      exitCode: null,
      action,
      command: result.command || "",
      stdout: result.stdout || "",
      stderr: result.error || result.stderr || `Request failed with HTTP ${response.status}`,
    };
  }

  return result;
}
