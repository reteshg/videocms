import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar.js';
import Content from './components/content.js';
import Edit from './components/edit.js';
import Dashboard from './components/dashboard.js';

class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="container-fluid wrapper">
                    <div className="row">
                        <div className="canvas-sidebar col-md-2 p-0 mh-100">
                            <Sidebar />
                        </div>
                        <div className="main-panel col-md-10 p-0">
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
                            <Router>
                                <Switch>
                                    <Route exact path='/' component={Dashboard} />
									<Route exact path='/videos' component={Content} />			
                                    <Route path='/videos/edit' component={Edit} />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse off-canvas-sidebar">
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default App;
