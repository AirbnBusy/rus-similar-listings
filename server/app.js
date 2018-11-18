const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./../database/index.js');

const app = express();

app.use(cors());

app.use('/rooms/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/similar-listings/:id', (req, res) => {
  const { params } = req;
  db.getSimilarListings(params.id)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.log(`DB query failed, here is the error: ${err}`);
    });
});

module.exports = app;
