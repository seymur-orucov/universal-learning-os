const fs = require("fs");
const http = require("http");
const path = require("path");
const { runCliAction } = require("./cliBridge");

const PORT = Number(process.env.PORT || 5174);
const appRoot = path.resolve(__dirname, "..");
const distRoot = path.join(appRoot, "dist");

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(body));
}

function parseBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
      if (body.length > 1024 * 1024) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error(`Invalid JSON: ${error.message}`));
      }
    });
  });
}

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html";
  if (filePath.endsWith(".js")) return "text/javascript";
  if (filePath.endsWith(".css")) return "text/css";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}

function serveStatic(request, response) {
  if (!fs.existsSync(distRoot)) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Build the UI first with: npm run build");
    return;
  }

  const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const candidate = requestPath === "/" ? path.join(distRoot, "index.html") : path.join(distRoot, requestPath);
  const resolved = path.resolve(candidate);

  if (resolved !== distRoot && !resolved.startsWith(distRoot + path.sep)) {
    response.writeHead(403, { "Content-Type": "text/plain" });
    response.end("Forbidden");
    return;
  }

  const filePath = fs.existsSync(resolved) && fs.statSync(resolved).isFile()
    ? resolved
    : path.join(distRoot, "index.html");

  response.writeHead(200, { "Content-Type": contentType(filePath) });
  fs.createReadStream(filePath).pipe(response);
}

function createServer() {
  return http.createServer(async (request, response) => {
    if (request.method === "OPTIONS") {
      sendJson(response, 200, {});
      return;
    }

    if (request.method === "GET" && request.url === "/api/health") {
      sendJson(response, 200, { ok: true });
      return;
    }

    if (request.method === "POST" && request.url === "/api/run") {
      try {
        const body = await parseBody(request);
        const result = await runCliAction(body);
        sendJson(response, 200, result);
      } catch (error) {
        sendJson(response, 400, { ok: false, error: error.message });
      }
      return;
    }

    if (request.method === "GET") {
      serveStatic(request, response);
      return;
    }

    sendJson(response, 405, { ok: false, error: "Method not allowed" });
  });
}

if (require.main === module) {
  const server = createServer();
  server.listen(PORT, "127.0.0.1", () => {
    console.log(`Universal Learning OS Studio server: http://127.0.0.1:${PORT}`);
  });
}

module.exports = {
  createServer,
};
