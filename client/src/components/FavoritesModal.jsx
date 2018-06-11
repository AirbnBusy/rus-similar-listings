import React from 'react';
import styles from './../styles/style.css';

const FavoritesModal = ({ closeModal }) => (
  <div id="modal" className={styles.modalBackground} onClick={closeModal}>
    <div className={styles.modalContent}>

    </div>
  </div>
);

export default FavoritesModal;
