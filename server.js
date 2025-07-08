const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// 🎯 Target date: July 12, 2025 @ 00:00:00 (local server time)
const targetDate = new Date('2025-07-12T00:00:00'); // or add timezone explicitly if needed
const targetTimestamp = targetDate.getTime();

// API route to send the target time
app.get('/api/target-time', (req, res) => {
  res.json({ target: targetTimestamp });
});

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Countdown prank running at http://localhost:${PORT}`);
});
