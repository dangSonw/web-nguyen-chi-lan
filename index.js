/**
 * Node.js Server for Nguyễn Chi Lan Portfolio
 * Compatible with Express 5 & Node.js 24+
 * Serves Vite SPA production build (from dist/)
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');

// 1. Serve Vite production build static assets
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
}

// 2. Serve static media assets directly from public/assets
app.use('/assets', express.static(path.join(PUBLIC_DIR, 'assets')));

// 3. SPA Fallback: All routes return dist/index.html
app.use((req, res) => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Vui lòng chạy "npm run build" trước khi khởi động server.');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Nguyễn Chi Lan Portfolio Server (Vite React SPA)`);
  console.log(`Local URL: http://localhost:${PORT}`);
});
