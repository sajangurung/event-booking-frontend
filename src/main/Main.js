import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';

class Main extends Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/Login' component={Login}/>
			</Switch>
		)
	}
}

export default Main;
