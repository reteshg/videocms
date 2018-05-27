import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import video from 'video.js';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.showDashboard = this.showDashboard.bind();
    }

    showDashboard() {
        console.log("click here");
        window.location = '/';
    }
    
    render() {
        return (
			<div className="col-12 pl-0 pr-0">
				<div className="col-md-6 d-inline-block align-top">
			    	<video src="http://vodcdn.abplive.in/2018/05/62bebb9f2ad1252bf3b3a5e69e7e465e-1442396746359-g9g3qq.mp4" type="video/mp4" onPlay={this.handlePlay} className="videoPlayer"/>
				</div>
				<form className="col-md-6 edit-form d-inline-block">
					<div className="form-group">
						<label htmlFor="inputTitle" className="mb-1">Video Title</label>
						<input type="text" className="form-control" id="inputTitle" aria-describedby="emailHelp" placeholder="Video Title" />
					</div>
					<div className="form-group">
						<label htmlFor="inputEngTitle" className="mb-1">English Title</label>
						<input type="text" className="form-control" id="inputEngTitle" placeholder="English Title" />
					</div>
					<div className="form-group">
						<label htmlFor="vidDescription" className="mb-1">Video Description</label>
						<textarea className="form-control" id="vidDescription" rows="3"></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="keywords" className="mb-1">Keywords</label>
						<input type="text" className="form-control" id="keywords" />
					</div>
					<div className="form-group">
						<label htmlFor="selChannel" className="mb-1">Channel</label>
						<select className="form-control" id="selChannel">
							<option>Viral Sach</option>
							<option>Test 1</option>
							<option>Test 2</option>
							<option>Test 3</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="selCategory" className="mb-1">Category</label>
						<select multiple className="form-control" id="selCategory">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="selShow" className="mb-1">Select Show</label>
						<select className="form-control" id="selShow">
							<option>Viral Sach</option>
							<option>Test 1</option>
							<option>Test 2</option>
							<option>Test 3</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<button type="button" className="btn btn-primary" onClick={this.showDashboard}>Cancel</button>
				</form>
			</div>
        );
    }
}

export default Edit;
