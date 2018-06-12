import React from 'react';
import styles from './../styles/favorites-modal.css';

const FavoritesModal = ({ closeModal }) => (
  <div id="modal" className={styles.modalBackground} onClick={closeModal}>
    <div className={styles.modalContent}>
      <button className={styles.closeButton}>
        <img
          id="close"
          className={styles.closeImg}
          src="https://airbnb-similar-listings-photos.s3.amazonaws.com/cancel.svg"
          onClick={closeModal}
        />
      </button>
      <h3 className={styles.modalHeader}>Save to list</h3>
      <button className={styles.facebookButton}>
        <span><img className={styles.facebookImg} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/facebook.svg" /></span>
        <span>Continue with Facebook</span>
      </button>
      <button className={styles.googleButton}>Continue with Google</button>
    </div>
  </div>
);

export default FavoritesModal;
