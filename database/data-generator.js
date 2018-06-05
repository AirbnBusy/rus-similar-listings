const db = require('./index.js');
const _ = require('lodash');

const listingSizeDescription = [
  'ENTIRE GUEST SUITE',
  'ENTIRE APARTMENT',
  'ENTIRE HOUSE',
  'ENTIRE BUNGALOW',
  'ENTIRE TOWNHOUSE',
  'PRIVATE ROOM',
  'ENTIRE LOFT',
];
const listingHeader = [
  'Malibu boutique apartment',
  'Beautiful OCEAN FRONT BEACH condo!',
  'Tree house with 360 views of L.A',
  'OVER THE WATER Black - Contemporary Bungalow',
  'Stunning Villa by the Sea w/ Direct Beach Access!',
  'Modern Oceanview w/ Big Patio',
  'Rustic, Romantic Beachfront Apartment in Malibu',
  'Oceanv View Malibu Hideaway',
  'Ocean Front Malibu House',
  'Malibu Ocean View Rooms',
  'Beautiful Malibu Beach Duplex',
  'Ocean View Malibu Mountain Retreat',
];
const ratings = _.range(1, 5.5, 0.5);

for (let i = 1001; i <= 1100; i++) {
  let photo = i + '.jpg';
  let lsd = listingSizeDescription[Math.floor(Math.random() * listingSizeDescription.length)];
  let beds = Math.ceil(Math.random() * 4);
  let lh = listingHeader[Math.floor(Math.random() * listingHeader.length)];
  let price = Math.ceil(Math.random() * 700);
  let rating = ratings[Math.floor(Math.random() * ratings.length)];

  db.query(`INSERT INTO listings (photo, listing_size_description, beds, listing_header, price, avg_rating) VALUES("${photo}", "${lsd}", ${beds}, "${lh}", ${price}, ${rating})`, (err, results) => {
    if (err) {
      console.log(`Failed to write to the DB, here is the error: ${err}`);
    }
  });
}

const similarListingIds = _.range(1001, 1101);
for (let i = 1001; i <= 1100; i++) {
  for (let j = 0; j < 12; j++) {
    let sli = similarListingIds[Math.floor(Math.random() * similarListingIds.length)];
    db.query(`INSERT INTO similar_listings (listing_id, similar_listing_id) VALUES(${i}, ${sli})`, (err, results) => {
      if (err) {
        console.log(`Failed to write to the DB, here is the error: ${err}`);
      }
    });
  }
}
