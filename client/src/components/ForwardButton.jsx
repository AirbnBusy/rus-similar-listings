import React from 'react';
import styles from './../styles/style.css';

const ForwardButton = ({ scrollCarouselRight, lastThreeListings }) => {
  const button = lastThreeListings ? (<div></div>) :
    (
      <button className={styles.forwardButton} onClick={scrollCarouselRight}>
        <img className={styles.forwardImg} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/forward.png"/>
      </button>
    );

  return (
    <div className={styles.forwardContainer}>
      { button }
    </div>
  );
}


export default ForwardButton;
