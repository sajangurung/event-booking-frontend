import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import EventCard from './event-card/EventCard';
class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
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
				<Footer />
			</div>
		);
	}
}

export default App;
