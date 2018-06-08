import React from 'react';
import styles from './../styles/style.css';

const CarouselEntry = ({ listing }) => (
  <div>
    <img className={styles.photo} src={`https://airbnb-similar-listings-photos.s3.amazonaws.com/${listing.photo}`}/>
  </div>
);

export default CarouselEntry;
