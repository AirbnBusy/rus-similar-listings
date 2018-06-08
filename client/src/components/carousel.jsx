import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';
import styles from './../styles/style.css';

const Carousel = ({ similarListings }) => (
  <div>
    <h2>Similar Listings</h2>
    <CarouselEntry listing={similarListings[0]}/>
  </div>
);

export default Carousel;
