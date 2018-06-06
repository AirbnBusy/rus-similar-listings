const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'airbnb_similar_listings',
});

connection.connect( (err) => {
  if (err) {
    console.log(`Failed to connect to the db, here is the error: ${err}`);
    return;
  }
  console.log(`Successfuly connected to the db, here is the connection id: ${connection.threadId}`);
});

const getSimilarListings = function(id, callback) {
  connection.query(`SELECT similar_listing_id FROM similar_listings WHERE listing_id=${id}`, (err, results) => {
    callback(err, results);
  });
}

module.exports.getSimilarListings = getSimilarListings;
