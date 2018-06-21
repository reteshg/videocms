import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import image from '../articleImg.jpg';
import ReactPlayer from 'react-player';
import Sidebar from './sidebar.js';
import Header from './header.js';
//import videojs from '../react-videojs/video.js';
//var Video = require('../src/');
//import "node_modules/video-react/dist/video-react.css";
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
				<div className="col-12 pl-0 pr-0 mt-3">
				  <div className="col-md-6 d-inline-block align-top">
			{/*<video src="http://vodcdn.abplive.in/2018/05/62bebb9f2ad1252bf3b3a5e69e7e465e-1442396746359-g9g3qq.mp4" type="video/mp4" className="videoPlayer" onPlay={this.handlePlay}/>*/}
				   <ReactPlayer
					  url='http://vodcdn.abplive.in/2018/05/62bebb9f2ad1252bf3b3a5e69e7e465e-1442396746359-g9g3qq.mp4'
					  className='react-player'
					  playing
					  controls
					  width='100%'
					  height='100%'
					/>
					<div className="thumbnail-section mt-1 float-left">
					  <div className="float-left">
						<button type="button" className="btn btn-primary btn-sm">Replace Thumbnail</button>
						<div className="form-group">
							<label htmlFor="inputFile" className="my-1 file-input col-form-label-sm p-0">File input</label>
							<input type="file" className="form-control-file form-control-sm p-0" id="inputFile" aria-describedby="fileHelp" />
					    </div>
					  </div>
					  <img src={image} className="thumbnail-img float-right w-25" alt="thumbnail"/>
					</div>
				  </div>
				  <form className="col-md-6 edit-form d-inline-block">
					<div className="form-group">
						<label htmlFor="inputTitle" className="mb-1 col-form-label-sm p-0">Video Title</label>
						<input type="text" className="form-control form-control-sm" id="inputTitle" aria-describedby="emailHelp" placeholder="Video Title" />
					</div>
					<div className="form-group">
						<label htmlFor="inputEngTitle" className="mb-1 col-form-label-sm p-0">English Title</label>
						<input type="text" className="form-control form-control-sm" id="inputEngTitle" placeholder="English Title" />
					</div>
					<div className="form-group">
						<label htmlFor="vidDescription" className="mb-1 col-form-label-sm p-0">Video Description</label>
						<textarea className="form-control form-control-sm" id="vidDescription" rows="3"></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="keywords" className="mb-1 col-form-label-sm p-0">Keywords</label>
						<input type="text" className="form-control form-control-sm" id="keywords" />
					</div>
					<div className="form-group">
						<label htmlFor="selChannel" className="mb-1 col-form-label-sm p-0">Channel</label>
						<select className="form-control form-control-sm" id="selChannel">
							<option>Viral Sach</option>
							<option>Test 1</option>
							<option>Test 2</option>
							<option>Test 3</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="selCategory" className="mb-1 col-form-label-sm p-0">Category</label>
						<select multiple className="form-control form-control-sm" id="selCategory">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="selShow" className="mb-1 col-form-label-sm p-0">Select Show</label>
						<select className="form-control form-control-sm" id="selShow">
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

export default Edit;
