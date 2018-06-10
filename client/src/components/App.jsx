import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import styles from './../styles/style.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.getSimilarListings = this.getSimilarListings.bind(this);
		this.scrollCarouselRight = this.scrollCarouselRight.bind(this);

		this.state = {
			// listingId: props.listingId --> will be passed down from the proxy server
			similarListings: [],
			currentListings: [],
			lastThreeListings: false,
		};
	}

	componentDidMount() {
		this.getSimilarListings();
	}

	getSimilarListings() {
		// Bellow line of code will be unnecessary once proxy server is live, because id will be passed down from the proxy server
		const id = document.location.href.slice(28);
		axios.get(`http://localhost:3004/api/similar-listings/${id}`)
			.then((response) => {
				console.log(`Get request successful, here is the response data: ${response.data}`);
        response.data.forEach((listing) => {
          console.log(listing);
        });
				const currentListings = [];
				for (let i = 0; i < 3; i += 1) {
					currentListings.push(response.data[i]);
				}

				this.setState({
					similarListings: response.data,
					currentListings: currentListings,
				});
			})
			.catch((err) => {
				if (err) {
					console.log(`GET request FAILED, here is the error: ${err}`);
				}
			});
	}

	scrollCarouselRight() {
		const similarListings = this.state.similarListings;
		const currentListings = this.state.currentListings;
		let currentFirstListingIndex = 0;

		similarListings.forEach((listing, i) => {
			if (listing === currentListings[0]) {
				currentFirstListingIndex = i;
			}
		});

		function updateCurrentListings() {
			const newCurrentListings = [];
			for (let i = currentFirstListingIndex + 1; i < currentFirstListingIndex + 4; i += 1) {
				newCurrentListings.push(similarListings[i]);
			}
			return newCurrentListings;
		}

		if (currentFirstListingIndex === 8) {
			this.setState({
				currentListings: updateCurrentListings(),
				lastThreeListings: true,
			});
		} else if (!this.state.lastThreeListings) {
			this.setState({
				currentListings: updateCurrentListings(),
			});
		}

	}

	render() {
		let display;
		this.state.similarListings.length === 0 ?
			display = <div /> :
			display = <Carousel
									currentListings={this.state.currentListings}
									scrollCarouselRight={this.scrollCarouselRight}
									lastThreeListings={this.state.lastThreeListings}
								/>;

		return (
			<div className={styles.serviceContainer}>
				{ display }
			</div>
		);
	}
}

export default App;
