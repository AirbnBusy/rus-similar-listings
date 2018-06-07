import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
				console.log(`Get request successful, here is the response: ${response.data}`);
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
			display = <h1>{`Here is the photo name: ${this.state.similarListings[0].photo}`}</h1>;

		return (
			<div>
				{ display }
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));
