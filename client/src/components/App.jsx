import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.getSimilarListings = this.getSimilarListings.bind(this);

		this.state = {
			// listingId: props.listingId --> will be passed down from the proxy server
			similarListings: [],
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
				this.setState({
					similarListings: response.data,
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
			display = <Carousel similarListings={this.state.similarListings} />;

		return (
			<div>
				{ display }
			</div>
		);
	}
}

export default App;
