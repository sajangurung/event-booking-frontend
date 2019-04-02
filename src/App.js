import React, { Component } from 'react';
import './App.css';
import UserDashboard from './dashboard/Dashboard';
class App extends Component {
	render() {
		return (
			<UserDashboard />
		);
		return (
			<div className="App">
				<header className="header">
					<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
						<a className="navbar-brand" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarsExampleDefault">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Link</a>
								</li>
								<li className="nav-item">
									<a className="nav-link disabled" href="#">Disabled</a>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
					</nav>
				</header>
					<main role="main">

						<section className="jumbotron text-center">
							<div className="container">
								<h1 className="jumbotron-heading">Album example</h1>
								<p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

							</div>
						</section>

						<div className="album py-5 bg-light">
							<div className="container">

								<div className="row">
									<div className="col-md-4">
										<div className="card mb-4 shadow-sm">
											<svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
											<div className="card-body">
												<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
												<div className="d-flex justify-content-between align-items-center">
													<div className="btn-group">
														<button type="button" className="btn btn-sm btn-outline-secondary">View</button>
														<button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
													</div>
													<small className="text-muted">9 mins</small>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</main>

					<footer className="text-muted">
						<div className="container">
							<p className="float-right">
								<a href="#">Back to top</a>
							</p>
							<p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
							<p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.3/getting-started/introduction/">getting started guide</a>.</p>
						</div>
					</footer>
				</div>

		);
	}
}

export default App;
