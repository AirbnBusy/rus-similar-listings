DROP DATABASE IF EXISTS airbnb_similar_listings;

CREATE DATABASE airbnb_similar_listings;

USE airbnb_similar_listings;

CREATE TABLE listings (
	id int NOT NULL AUTO_INCREMENT,
	photo VARCHAR(21000) NOT NULL,
	listing_size_description VARCHAR(300) NOT NULL,
	listing_header VARCHAR(300) NOT NULL,
	price int NOT NULL, 
	avg_rating decimal()

);

CREATE TABLE similar_listings (

);
