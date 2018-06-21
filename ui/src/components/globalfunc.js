// JavaScript Document
import React, { Component } from 'react';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class globalFunctions extends Component {
	encoded(str) {
		var encoded = new Buffer(str).toString('base64');
		return encoded;
	}
	decoded(str) {
		var encoded = new Buffer(str).toString('base64');
		var decoded = new Buffer(encoded, 'base64').toString('ascii');
		return decoded;
	}
}

export default globalFunctions;


