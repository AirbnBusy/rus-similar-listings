import React from 'react';
import styles from './../styles/style.css';

const ForwardButton = ({ scrollCarousel, lastThreeListings }) => {
  const button = lastThreeListings ? (<div></div>) :
    (
      <button id="forward" className={styles.scrollButton} onClick={scrollCarousel}>
        <img id="forward" className={styles.img} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/forward.png"/>
      </button>
    );

  return (
    <div className={styles.buttonContainer}>
      { button }
    </div>
  );
}


export default ForwardButton;
