import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import styles from './../styles/style.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.getSimilarListings = this.getSimilarListings.bind(this);

		this.state = {
			// listingId: props.listingId --> will be passed down from the proxy server
			similarListings: [],
			currentListings: [],
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
				currentListings.push(response.data[0]);
				currentListings.push(response.data[1]);
				currentListings.push(response.data[2]);

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

	render() {
		let display;
		this.state.similarListings.length === 0 ?
			display = <div /> :
			display = <Carousel currentListings={this.state.currentListings} />;

		return (
			<div className={styles.serviceContainer}>
				{ display }
			</div>
		);
	}
}

export default App;
