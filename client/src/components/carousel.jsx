import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import CarouselEntry from './CarouselEntry.jsx';
import ForwardButton from './ForwardButton.jsx';
import BackButton from './BackButton.jsx';
import styles from './../styles/style.css';

const Carousel = ({ currentListings, scrollCarousel, lastThreeListings, firstThreeListings }) => (
    <div>
      <h2 className={styles.listingsHeader}>Similar listings</h2>
      <div className={styles.carousel}>
        <BackButton firstThreeListings={firstThreeListings} scrollCarousel={scrollCarousel}/>
        <CSSTransitionGroup
          className={styles.carousel}
          transitionName="scroll"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}>
            {currentListings.map( listing => <CarouselEntry listing={listing} key={listing.id.toString()} />)}
        </CSSTransitionGroup>
        <ForwardButton scrollCarousel={scrollCarousel} lastThreeListings={lastThreeListings} />
      </div>
    </div>
);


export default Carousel;
