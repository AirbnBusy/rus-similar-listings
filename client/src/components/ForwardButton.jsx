import React from 'react';
import styles from './../styles/style.css';

const ForwardButton = () => (
  <div className={styles.forwardContainer}>
    <button className={styles.forwardButton}>
      <img className={styles.forwardImg} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/forward.png"/>
    </button>
  </div>
);

export default ForwardButton;
