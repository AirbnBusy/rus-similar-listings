const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./../database/index.js');

const app = express();

app.use(cors());

app.use('/rooms/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/similar-listings/:id', (req, res) => {
  const { params } = req;
  db.getSimilarListingsIds(params.id)
    .then((results) => {
      return new Promise((resolve, reject) => {
        const similarListingIds = [];
        results.forEach((similarListing) => {
          similarListingIds.push(similarListing.similar_listing_id);
        });
        db.connection.query(
          `SELECT * FROM listings WHERE id IN (${similarListingIds})`, 
          (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          }
        );
      });
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(`DB query failed, here is the error: ${err}`);
    });
});

module.exports = app;
