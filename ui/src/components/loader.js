import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Loader extends Component {
	render() {
        return (
			<div id="loading">
			  <img id="loading-image" src="../loader.gif" alt="Loading..." />
			</div>
		);
	}
}

export default Loader;