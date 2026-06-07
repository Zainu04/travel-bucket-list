const express = require('express');
const path = require('path');
const destinations = require('./data/destinations');

const app = express();
const PORT = 3000;

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// HOME ROUTE - shows all destinations
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// DETAIL ROUTE - shows individual destination
app.get('/destinations/:slug', (req, res) => {
  const destination = destinations.find(d => d.slug === req.params.slug);
  
  if (!destination) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    return;
  }

  res.sendFile(path.join(__dirname, 'views', 'detail.html'));
});

// API ROUTE - returns all destinations as JSON (used by frontend JS)
app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

// API ROUTE - returns one destination as JSON (used by frontend JS)
app.get('/api/destinations/:slug', (req, res) => {
  const destination = destinations.find(d => d.slug === req.params.slug);

  if (!destination) {
    res.status(404).json({ error: 'Destination not found' });
    return;
  }

  res.json(destination);
});

// 404 ROUTE - catches all undefined routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// START SERVER
app.listen(PORT, () => {
  console.log(`✈️  Travel Bucket List running at http://localhost:${PORT}`);
});