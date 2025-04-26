const express    = require('express');
const path       = require('path');
const serveIndex = require('serve-index');
const app        = express();
const PORT       = 8000;

// Serve all files in E:/text
const staticDir = path.join('E:/', 'text');

// 1. Static file serving
app.use(express.static(staticDir));

// 2. Directory listing at root
app.use('/', serveIndex(staticDir, { icons: true }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
