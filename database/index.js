const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'airbnb_similar_listings',
});

connection.connect((err) => {
  if (err) {
    console.log(`Failed to connect to the db, here is the error: ${err}`);
    return;
  }
  console.log(`Successfuly connected to the db, here is the connection id: ${connection.threadId}`);
});

function populateListingsTable(listingSizeDescription, listingHeader, ratings) {
  for (let i = 1001; i <= 1100; i += 1) {
    const photo = `${i}.jpg`;
    const lsd = listingSizeDescription[Math.floor(Math.random() * listingSizeDescription.length)];
    const beds = Math.ceil(Math.random() * 4);
    const lh = listingHeader[Math.floor(Math.random() * listingHeader.length)];
    const price = Math.ceil(Math.random() * 700);
    const rating = ratings[Math.floor(Math.random() * ratings.length)];

    connection.query(`INSERT INTO listings (photo, listing_size_description, beds, listing_header, price, avg_rating) VALUES("${photo}", "${lsd}", ${beds}, "${lh}", ${price}, ${rating})`, (err) => {
      if (err) {
        console.log(`Failed to write to the DB, here is the error: ${err}`);
      }
    });
  }
}

function populateSimilarListingsTable(similarListingIds) {
  for (let i = 1001; i <= 1100; i += 1) {
    for (let j = 0; j < 12; j += 1) {
      const sli = similarListingIds[Math.floor(Math.random() * similarListingIds.length)];
      connection.query(`INSERT INTO similar_listings (listing_id, similar_listing_id) VALUES(${i}, ${sli})`, (err) => {
        if (err) {
          console.log(`Failed to write to the DB, here is the error: ${err}`);
        }
      });
    }
  }
}

function getSimilarListings(id, callback) {
  connection.query(`SELECT similar_listing_id FROM similar_listings WHERE listing_id=${id}`, (err, results) => {
    if (err) {
      console.log(`DB query failed, here is the error: ${err}`);
    }

    const similarListingIds = [];
    results.forEach((similarListing) => {
      similarListingIds.push(similarListing.similar_listing_id);
    });
    connection.query(`SELECT * FROM listings WHERE id IN (${similarListingIds})`, (error, data) => {
      callback(error, data);
    });
  });
}

module.exports = {
  populateListingsTable,
  populateSimilarListingsTable,
  getSimilarListings,
};
