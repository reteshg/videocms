import React, { Component } from 'react';
import '../App.css';
import dashboard from '../dashboard.png';
import videoimage from '../video.png';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebarDiv">
		  <div className="sidebar-wrapper">
		      <div className="logo text-center">
                  <a href="javascript:void(0)" className="simple-text">
                  	  MANHATTAN	
                  </a>
              </div>
			  <ul className="nav list-group list-group-flush sidebarLinks" id="navlist">
				  <li className="list-group-item border-0 pl-5 active"><Link to='/' className="text-secondary"><img alt="dashboard" src={dashboard} className="icons pr-2"/>DASHBOARD</Link></li>
				  <li className="list-group-item border-0 pl-5"><Link to='/videos' className="text-secondary"><img alt="videos" src={videoimage} className="icons pr-2"/>VIDEOS</Link></li>
				  <li className="list-group-item border-0 pl-5"><Link to='' className="text-secondary"><img alt="photos" src={videoimage} className="icons pr-2"/>PHOTOS</Link></li>
				  <li className="list-group-item border-0 pl-5"><Link to='' className="text-secondary"><img alt="test" src={videoimage} className="icons pr-2"/>TEST1</Link></li>
				  <li className="list-group-item border-0 pl-5"><Link to='' className="text-secondary"><img alt="test" src={videoimage} className="icons pr-2"/>TEST2</Link></li>
			  </ul>
		  </div>
      </div>
    );
  }
}

export default Sidebar;
