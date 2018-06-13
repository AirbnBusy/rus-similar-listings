import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';
import ForwardButton from './ForwardButton.jsx';
import styles from './../styles/style.css';

const Carousel = ({ similarListings }) => (
  <div>
    <h2 className={styles.listingsHeader}>Similar listings</h2>
    <div className={styles.carousel}>
      <CarouselEntry listing={similarListings[0]} />
      <CarouselEntry listing={similarListings[1]} />
      <CarouselEntry listing={similarListings[2]} style={styles.lastPhotoContainer}/>
      <ForwardButton />
    </div>
  </div>
);

export default Carousel;
