
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<header className="header">
					<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
						<a className="navbar-brand" href="/">Event Booking</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<button className="btn btn-outline-primary my-2 my-sm-0"><Link to='/login'>Login</Link></button>
					</nav>
				</header>
			</div>

		);
	}
}

export default Header;
