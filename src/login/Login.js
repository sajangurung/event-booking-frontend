
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	render() {
		return (
			<div>
				<form className="form-signin mt-5 mb-5">
					<div className="text-center mb-4">
						<img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
					</div>

					<div className="form-group">
						<label htmlFor="inputEmail">Email address</label>
						<input type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Email address" required />
					</div>

					<div className="form-group">
						<label htmlFor="inputPassword">Password</label>
						<input type="password" id="inputPassword" className="form-control form-control-lg" placeholder="Password" required />
					</div>

					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
				</form>
			</div>
		);
	}
}

export default Login;
