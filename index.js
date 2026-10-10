/**
 * Node.js Server for Nguyễn Chi Lan Portfolio
 * Compatible with Express 5 & Node.js 24+
 * Serves Vite SPA production build (from dist/) when built,
 * with fallback to public/ for static media assets.
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');

const hasDist = fs.existsSync(path.join(DIST_DIR, 'index.html'));

if (hasDist) {
  // 1. Serve Vite production build static assets
  app.use(express.static(DIST_DIR));

  // 2. Also serve raw media from public/assets if needed
  app.use('/assets', express.static(path.join(PUBLIC_DIR, 'assets')));

  // 3. SPA Fallback: All routes return dist/index.html
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
} else {
  // Legacy MPA mode
  app.get('/home', (req, res) => res.redirect('/'));
  app.get('/homepage', (req, res) => res.redirect('/'));
  app.get('/filmaking', (req, res) => res.redirect('/filmmaking/'));
  app.get('/dance&performance', (req, res) => res.redirect('/dance-performance/'));

  app.use(express.static(PUBLIC_DIR));
  app.use((req, res) => {
    res.redirect('/');
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Nguyễn Chi Lan Portfolio Server is running!`);
  console.log(`Mode: ${hasDist ? 'Vite SPA (dist/)' : 'Legacy MPA (public/)'}`);
  console.log(`Local URL: http://localhost:${PORT}`);
});
