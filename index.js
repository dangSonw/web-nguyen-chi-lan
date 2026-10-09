/**
 * Node.js Server for Nguyễn Chi Lan Portfolio
 * Compatible with Express 5 & Node.js 24+
 * Serves static assets directly from public/ (where index.html is the homepage)
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// 1. Alias redirects for home
app.get('/home', (req, res) => res.redirect('/'));
app.get('/home/', (req, res) => res.redirect('/'));
app.get('/homepage', (req, res) => res.redirect('/'));
app.get('/homepage/', (req, res) => res.redirect('/'));

// 2. Special aliases & redirects
app.get('/filmaking', (req, res) => res.redirect('/filmmaking/'));
app.get('/dance&performance', (req, res) => res.redirect('/dance-performance/'));
app.get(['/photography/portrait1', '/photography/portrait1/'], (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'photography', 'portrait', 'index.html'));
});
app.get(['/photography/portrait2', '/photography/portrait2/'], (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'photography', 'portrait', 'portrait2.html'));
});
app.get('/photography/portrait/2', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'photography', 'portrait', 'portrait2.html'));
});
app.get('/photography/portrait/portrait2', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'photography', 'portrait', 'portrait2.html'));
});

// 3. Serve static files (express.static serves public/index.html on '/')
app.use(express.static(PUBLIC_DIR));

// 4. Fallback for unmatched routes
app.use((req, res) => {
  res.redirect('/');
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`Nguyễn Chi Lan Portfolio Server is running!`);
  console.log(`Local URL: http://localhost:${PORT}`);
});
