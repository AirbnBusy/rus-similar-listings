const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./../database/index.js');

const app = express();

app.use('/rooms/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/similar-listings/:id', (req, res) => {
  res.status(200).send('Request arrived successfuly!');
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
