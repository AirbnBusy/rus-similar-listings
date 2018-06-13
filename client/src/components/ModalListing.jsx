import React from 'react';
import ReactStars from 'react-stars';
import styles from './../styles/modal-listing.css';

const ModalListing = ({ listing }) => (
  <div className={styles.container}>
    <img className={styles.img}  src={`https://airbnb-similar-listings-photos.s3.amazonaws.com/${listing.photo}`}/>
    <div className={styles.infoContainer}>
      <div className={styles.info}>{listing.listing_header}</div>
      <div className={styles.location}>Malibu, CA, United States</div>
      <div className={styles.starsAndReviews}>
        <ReactStars className={styles.stars} count={5} value={listing.avg_rating} edit={false} color2={'#0897A6'} size={13} />
        <span className={styles.reviews}>{`${listing.number_of_reviews} reviews`}</span>
      </div>
    </div>
  </div>
);

export default ModalListing;
