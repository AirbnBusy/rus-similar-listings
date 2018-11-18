const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./../database/index.js');

const app = express();

app.use(cors());

app.use('/rooms/:id', express.static(path.join(__dirname, '/../client/dist')));

// This function is for the asyncGetSimilarListings function bellow
function getsimilarListings(ids) {
  return new Promise((resolve, reject) => {
    const similarListingIds = [];
    ids.forEach((similarListing) => {
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
}

async function asyncGetSimilarListings(id) {
  let similarListingIds;
  let similarListings;
  try {
    similarListingIds = await db.getSimilarListingsIds(id);
    similarListings = await getsimilarListings(similarListingIds);
  } catch (err) {
    console.log(`DB query failed, here is the error: ${err}`);
  }
  return similarListings;
}

app.get('/api/similar-listings/:id', (req, res) => {
  const { params } = req;
  asyncGetSimilarListings(params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(`DB query failed, here is the error: ${err}`);
    });
});

module.exports = app;
