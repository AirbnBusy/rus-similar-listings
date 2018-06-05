const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'airbnb_similar_listings',
});

connection.connect();

module.exports = connection;
