import React from 'react';
import CarouselEntry from './CarouselEntry.jsx'

const Carousel = ({ similarListings }) => (
  <div>
    <h2>Similar Listings</h2>
    <CarouselEntry listing={similarListings[0]}/>
  </div>
);

export default Carousel;
