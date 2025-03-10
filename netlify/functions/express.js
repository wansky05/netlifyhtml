// netlify/functions/express.js
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();

// Mengarahkan Express untuk melayani file statis di folder 'public'
app.use(express.static(path.join(__dirname, '../../public')));

// Menangani request untuk root ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Menangani request untuk file CSS
app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/style.css'));
});

// Ekspor aplikasi Express sebagai fungsi serverless
module.exports.handler = serverless(app);
