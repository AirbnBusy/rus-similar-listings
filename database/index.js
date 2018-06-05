const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'airbnb_similar_listings',
});

connection.connect();

connection.query('INSERT INTO listings (photo, listing_size_description, listing_header, price, avg_rating) VALUES("1001.jpg", "Full apartment", "Amazing Condo on Malibu", 350, 4.3)', (err, results) => {
  if (err) {
    console.log(`Failed to write to the DB, here is the error: ${err}`);
  }
  console.log(results);
});

module.exports = connection;
