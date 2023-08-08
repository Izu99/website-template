import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/Slideshow";

class App extends Component {
	render() {
		return (

			<div>
				<Router>
					<Switch>

						<Route exact path='/' component={Homepage} />
						<Route path='/Login' component={Login} />
						<Route path='/navbar' component={Navbar} />
						<Route path='/slideshow' component={Slideshow} />


						<Redirect from='*' to='/404' />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
