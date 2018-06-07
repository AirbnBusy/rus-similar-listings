import React from 'react';
import CarouselEntry from './CarouselEntry.jsx'

const Carousel = ({ similarListings }) => (
  <div>
    <h2>Similar Listings</h2>
    {similarListings.map((listing, i) => <CarouselEntry listing={listing} key={i}/>)}
  </div>
);

export default Carousel;
