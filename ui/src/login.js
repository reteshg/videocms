import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import usericon from './user.png';
//import { encoded } from './components/globalfunc.js';
//import { decoded } from './components/globalfunc.js';

class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		const target = event.target;
		if(target.type==='email') {
			this.setState({username: event.target.value});
		}
		 else if (target.type==='password') {
			this.setState({password: event.target.value});
		}
    }

  	handleSubmit(event) {
     	const email = this.state.username;
		const password = this.state.password;
    	event.preventDefault();
		var expires = new Date();
		expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
		const separator = '|[{}]|';
		const cookieVal =  email + separator + password;
		console.log(cookieVal);
		const cookies = new Cookies();
		cookies.set('mhn', this.encoded(cookieVal), [{ path: '/' , expires: expires.toUTCString()}]);
		//cookies.set('email', this.encoded(email), { path: '/' });
		//cookies.set('id', this.encoded(id), { path: '/' });
		console.log(cookies.get('mhn'));
  	}
	encoded(str) {
		var encoded = new Buffer(str).toString('base64');
		return encoded;
	}
	decoded(str) {
		var encoded = new Buffer(str).toString('base64');
		var decoded = new Buffer(encoded, 'base64').toString('ascii');
		return decoded;
	}
	componentDidMount() {
	    fetch('http://localhost/test/', {
		  method: 'POST',
		  body: JSON.stringify({
			username: '',
			password: '',
		  }),
	    }).then((response) => response.json())
		  .then((responseJson) => {
			/*const fname = responseJson.result.firstname;
			const lname = responseJson.result.lastname;
			const names = fname + ' ' + lname;
			const id = responseJson.result.id;
			const email = responseJson.result.email;
			const names = responseJson.result.map(p=>p.email);
			console.log(names[0]);
			console.log(names);
			var expires = new Date();
        	expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
			const separator = '|[{}]|';
			const cookieVal =  names + separator + email + separator + id;
			console.log(cookieVal);
			const cookies = new Cookies();
			cookies.set('mhn', this.encoded(cookieVal), [{ path: '/' , expires: expires.toUTCString()}]);
			//cookies.set('email', this.encoded(email), { path: '/' });
			//cookies.set('id', this.encoded(id), { path: '/' });
			console.log(cookies.get('mhn'));*/
		}).catch((error) => {
		  	console.error(error);
		});
	}
	
	render() {
		return (
		  <div className="formWrapper">
			<form className="formData px-3 mx-3 bg-white position-absolute" onSubmit={this.handleSubmit}>
			  <img src={usericon} alt="user" className="user-image position-absolute"/>
			{/*<button type="button" className="close closeForm position-absolute" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>*/}
			  <h1 className="login-text text-center">Member Login</h1>
			  <div className="form-group">
			{/*<label htmlFor="exampleInputEmail1">Email address</label>*/}
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleChange} />
			  </div>
			  <div className="form-group">
			{/*<label htmlFor="exampleInputPassword1">Password</label>*/}
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
			  </div>
			  <button type="submit" className="btn btn-primary signIn">Sign In</button>
			</form>
		  </div>
		);
	}
}
export default Login;
