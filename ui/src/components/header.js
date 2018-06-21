import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    render() {
        return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand" href="#">Dashboard</a>
				<button className="navbar-toggler border-0" type="button" data-toggle="collapse" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<button type="button" className="close" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="mr-auto"></ul>
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown nav-item">
							<button className="btn dropdown-toggle" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								English
							</button>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">Hindi</a>
								<a className="dropdown-item" href="#">Bengali</a>
								<a className="dropdown-item" href="#">Punjabi</a>
							</div>
						</li>
						<li className="userName nav-item"><a className="userLink nav-link">User Name</a></li>
						<li className="logout nav-item"><a className="logoutLink nav-link">Logout</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;