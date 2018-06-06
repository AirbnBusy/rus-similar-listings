import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.getSimilarListings = this.getSimilarListings.bind(this);
	}

	componentDidMount() {
		this.getSimilarListings();
	}

	getSimilarListings() {
		const id = document.location.href.slice(28);
		axios.get(`http://localhost:3004/api/similar-listings/${id}`)
			.then( (response) => {
				console.log(`Get request successful, here is the response: ${response.data}`);
				response.data.forEach( (listing) => {
				  console.log(listing);
				});
			})
			.catch( (err) => {
				if (err) {
					console.log(`GET request FAILED, here is the error: ${err}`);
				}
			});
	}

	render() {
		return (
			<h1>This will disappear very quickly!</h1>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));
