// Local server of the roadmap viewer. Serves viewer/, builds /data.json from the files on disk,
// and pushes a "change" event over /events whenever a roadmap file changes, so open pages redraw.
// Usage: npm run roadmap:view [-- --port 4173]   (or PORT=4173). Listens on 127.0.0.1 only.
import { watch } from "node:fs";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { buildRoadmapData } from "../scripts/build-roadmap-view.mjs";

const viewerRoot = fileURLToPath(new URL(".", import.meta.url));
const repositoryRoot = resolve(viewerRoot, "..");
// What the page reads. A change under any of these redraws open pages.
const watched = ["projects", "standards", "templates", "README.md", "CLAUDE.md"];
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
};

const portArgument = process.argv.indexOf("--port");
const firstPort = Number(portArgument > -1 ? process.argv[portArgument + 1] : (process.env.PORT ?? 4173));
const clients = new Set();
let cached = null;

function data() {
  cached ??= JSON.stringify(buildRoadmapData(repositoryRoot));
  return cached;
}

let timer = null;
function changed() {
  clearTimeout(timer);
  // Editors and Git write in bursts; wait for the burst to end before rebuilding.
  timer = setTimeout(() => {
    cached = null;
    for (const client of clients) client.write("event: change\ndata: {}\n\n");
  }, 150);
}

for (const target of watched) {
  try {
    watch(join(repositoryRoot, target), { recursive: true }, changed);
  } catch {
    // A missing folder (templates/, for example) is simply not watched.
  }
}

async function handle(request, response) {
  const url = new URL(request.url ?? "/", "http://localhost");

  if (url.pathname === "/data.json") {
    try {
      response.writeHead(200, { "cache-control": "no-store", "content-type": "application/json; charset=utf-8" });
      response.end(data());
    } catch (error) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end(`Could not read the roadmap: ${error.message}`);
    }
    return;
  }

  if (url.pathname === "/events") {
    response.writeHead(200, {
      "cache-control": "no-store",
      connection: "keep-alive",
      "content-type": "text/event-stream",
    });
    response.write("retry: 1000\n\n");
    clients.add(response);
    request.on("close", () => clients.delete(response));
    return;
  }

  const name = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const file = resolve(viewerRoot, name);
  const type = types[extname(file)];

  if (!file.startsWith(viewerRoot.endsWith(sep) ? viewerRoot : viewerRoot + sep) || !type || file.endsWith(".mjs")) {
    response.writeHead(404).end();
    return;
  }

  try {
    const body = await readFile(file);
    response.writeHead(200, { "cache-control": "no-store", "content-type": type });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
}

function listen(port, attemptsLeft) {
  const server = createServer((request, response) => void handle(request, response));
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 0) listen(port + 1, attemptsLeft - 1);
    else throw error;
  });
  server.listen(port, "127.0.0.1", () => {
    const { tasks, epics, projects } = JSON.parse(data());
    console.log(`Roadmap: ${projects.length} projects, ${epics.length} epics, ${tasks.length} tasks.`);
    console.log(`Open http://127.0.0.1:${port}/ (updates live as files change; Ctrl+C stops).`);
  });
}

listen(firstPort, 10);
