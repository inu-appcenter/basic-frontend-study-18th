const express = require('express');
const path = require('path');
const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, '..')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log('START SERVER');
});
