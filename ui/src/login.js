import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class Login extends Component {
    render() {
        return (
            <form>
			  <div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  <div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
        );
    }
}

export default Login;
