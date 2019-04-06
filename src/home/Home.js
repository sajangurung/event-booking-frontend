import React, { Component } from 'react';
import EventCard from '../event-card/EventCard';

class Home extends Component {

	render() {
		return (
			<main role="main">
				<section className="jumbotron text-center">
					<div className="container">
						<h1 className="jumbotron-heading">Event Booking</h1>
						<p className="lead text-muted">Easiest way to create and manage event booking</p>
					</div>
				</section>
				<div className="album py-5 bg-light">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<EventCard />
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}


export default Home;
