import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Login from './login.js';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render ((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
