import React from 'react';
import styles from './../styles/style.css';
import ReactStars from 'react-stars';

const CarouselEntry = ({ listing }) => {
  let bed;
  listing.beds === 1 ? bed = 'BED' : bed = 'BEDS';

  return (
    <div>
    <img className={styles.photo} src={`https://airbnb-similar-listings-photos.s3.amazonaws.com/${listing.photo}`}/>
    <p>{`${listing.listing_size_description}`} &bull; {`${listing.beds} ${bed}`}</p>
    <p>{listing.listing_header}</p>
    <p>{`$${listing.price} per night`}</p>
    <div>
      <ReactStars className={styles.stars} count={5} value={listing.avg_rating} edit={false} color2={'#0897A6'} size={10} />
      <span>{listing.number_of_reviews}</span>
    </div>
    </div>
  );
}

export default CarouselEntry;
