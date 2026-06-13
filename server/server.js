require('dotenv').config();
const express = require('express');
const path = require('path');
const pool = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
});

app.get('/destinations/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src', 'detail.html'));
});

app.get('/api/destinations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM destinations ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/destinations/:slug', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM destinations WHERE slug = $1', [req.params.slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../client/src', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Travel Bucket List running at http://localhost:${PORT}`);
});