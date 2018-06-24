import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Upload extends Component {
    render() {
        return (
			<div className="container">
				<form onSubmit={this.handleUploadImage} ref="uploadForm" className="uploader" encType="multipart/form-data">
					<div className="form-group">
						<input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
					</div>

					<input className="btn btn-success" type="submit" value="Submit"/>

				</form>
			</div>
		)
	}
	
	constructor(props) {
		super(props);
		this.state = {
			uploadStatus: false
		}
		this.handleUploadImage = this.handleUploadImage.bind(this);
	}
	
	handleUploadImage(ev) {
		ev.preventDefault();

		const data = new FormData();
		data.append('file', this.uploadInput.files[0]);
		//data.append('filename', this.fileName.value);

		axios.post('http://127.0.0.1:5000/upload', data)
		.then(function (response) {
			//this.setState({ imageURL: 'http://localhost:8000/${body.file}', uploadStatus: true });
			console.log("Uploaded");
		})
		.catch(function (error) {
			console.log(error);
		});
	
	}
}

export default Upload;
