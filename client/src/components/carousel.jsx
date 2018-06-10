import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';
import ForwardButton from './ForwardButton.jsx';
import styles from './../styles/style.css';

const Carousel = ({ currentListings }) => (
  <div>
    <h2 className={styles.listingsHeader}>Similar listings</h2>
    <div className={styles.carousel}>
      { currentListings.map( listing => <CarouselEntry listing={listing} key={listing.id.toString()} />) }
      <ForwardButton />
    </div>
  </div>
);

export default Carousel;
