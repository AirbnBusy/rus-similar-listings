const mysql = require('mysql');
const Promise = require('bluebird');

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
  return new Promise((resolve, reject) => {
    let iteration = 0;
    const callback = (err) => {
      if (err) {
        reject(err);
      }
      iteration += 1;
      if (iteration === 100) {
        resolve();
      }
    };
    for (let i = 1001; i <= 1100; i += 1) {
      const photo = `${i}.jpg`;
      const lsd = listingSizeDescription[Math.floor(Math.random() * listingSizeDescription.length)];
      const beds = Math.ceil(Math.random() * 4);
      const lh = listingHeader[Math.floor(Math.random() * listingHeader.length)];
      const price = Math.ceil(Math.random() * 700);
      const rating = ratings[Math.floor(Math.random() * ratings.length)];
      const numOfReviews = Math.ceil(Math.random() * 350);

      connection.query(
        `INSERT INTO listings (photo, listing_size_description, beds, listing_header, 
        price, avg_rating, number_of_reviews) VALUES("${photo}", "${lsd}", ${beds}, "${lh}", 
        ${price}, ${rating}, ${numOfReviews})`,
        callback // for some reason, if I put a trailing coma, then node throws an error
      );
    }
  });
}

function populateSimilarListingsTable(similarListingIds) {
  return new Promise((resolve, reject) => {
    let iteration = 0;
    const callback = (err) => {
      if (err) {
        reject(err);
      }
      iteration += 1;
      if (iteration === 100) {
        resolve();
      }
    };
    for (let i = 1001; i <= 1100; i += 1) {
      const twelveIds = [];
      while (twelveIds.length < 12) {
        const id = similarListingIds[Math.floor(Math.random() * similarListingIds.length)];
        if (!twelveIds.includes(id)) {
          twelveIds.push(id);
        }
      }

      twelveIds.forEach((sli) => {
        connection.query(
          `INSERT INTO similar_listings (listing_id, similar_listing_id) VALUES(${i}, ${sli})`,
          callback // for some reason, if I put a trailing coma, then node throws an error
        );
      });
    }
  });
}

function getSimilarListingsIds(id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT similar_listing_id FROM similar_listings WHERE listing_id=${id}`,
      (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      }
    );
  });
}

module.exports = {
  populateListingsTable,
  populateSimilarListingsTable,
  getSimilarListingsIds,
  connection,
};
