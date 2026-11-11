import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 5173;

// Live reload SSE clients
const clients = new Set();

// Watch root directory for changes
fs.watch(__dirname, { recursive: false }, (eventType, filename) => {
  if (filename && (filename.endsWith('.html') || filename.endsWith('.css') || filename.endsWith('.js'))) {
    console.log(`\x1b[36m[reload]\x1b[0m ${filename} changed, refreshing...`);
    for (const res of clients) {
      res.write('data: reload\n\n');
    }
  }
});

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

const server = http.createServer((req, res) => {
  // SSE endpoint for live reload
  if (req.url === '/__live_reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(__dirname, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    if (ext === '.html') {
      fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading file');
          return;
        }
        // Inject live-reload client script
        const injectedScript = `
<script>
(() => {
  const es = new EventSource('/__live_reload');
  es.onmessage = (e) => {
    if (e.data === 'reload') window.location.reload();
  };
  es.onerror = () => setTimeout(() => new EventSource('/__live_reload'), 2000);
})();
</script>
</body>`;
        const modified = content.includes('</body>') 
          ? content.replace('</body>', injectedScript) 
          : content + injectedScript;

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(modified);
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`
  \x1b[32m  🕹️  PORSEMATIK 2026 — DEV SERVER RUNNING\x1b[0m
  \x1b[33m  ➜ Local:   \x1b[1m\x1b[36mhttp://localhost:${PORT}/\x1b[0m
  \x1b[33m  ➜ Ready for live editing (auto-reload on save)\x1b[0m
  `);

  // Auto-open browser
  const openCmd = process.platform === 'win32' ? `start http://localhost:${PORT}/` :
                  process.platform === 'darwin' ? `open http://localhost:${PORT}/` :
                  `xdg-open http://localhost:${PORT}/`;
  exec(openCmd, () => {});
});
