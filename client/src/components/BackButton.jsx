import React from 'react';
import styles from './../styles/style.css';

const BackButton = ({ firstThreeListings, scrollCarousel }) => {
  const button = firstThreeListings ? (<div></div>) :
    (
      <button id="back" className={styles.button} onClick={scrollCarousel}>
        <img id="back" className={styles.img} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/back.png"/>
      </button>
    );

  return (
    <div className={styles.buttonContainer}>
      { button }
    </div>
  );
};

export default BackButton;
