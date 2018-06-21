import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';
import Sidebar from './sidebar.js';
import Content from './content.js';
import Edit from './edit.js';
import Dashboard from './dashboard.js';
import Header from './header.js';

class InnerApp extends Component {
    constructor(props){ 
      super(props);
    }
	
    render() {
	//console.log("ren",this.state);
        return (
            <div className="main-wrapper">
                <div className="container-fluid wrapper">
                    <div className="row">
                        <div className="canvas-sidebar col-md-2 p-0 mh-100">
                            <div className="sidebarDiv">
								<Sidebar />			  
							</div>
						</div>
						<div className="main-panel col-md-10 p-0">
							<Header />
							<Dashboard />
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

export default InnerApp;
