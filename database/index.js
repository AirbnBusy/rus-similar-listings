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

module.exports.getSimilarListings = getSimilarListings;
