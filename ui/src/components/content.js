import React, { Component } from 'react';
import '../App.css';
//import data from '../data.json';
import image from '../articleImg.jpg';
import fbicon from '../facebook-icon.png';
import yticon from '../youtube-icon.png';
import cms from '../cms.png';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar.js';
import Header from './header.js';

const Content = ({ match }) => {
console.log(match);
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
		  <div className="main-wrapper mh-100">
			<div className="content-wrapper clearfix py-4 px-3">
				<div className="card table-responsive border-0">
					<h4 className="table-title text-dark font-weight-normal m-0">Videos</h4>
					<div className="col-12 pt-3 pb-3">
						<div className="col-md-9 col-sm-8 col-12 filterDiv float-left p-0">
							<div className="input-group-btn search-panel">
								<div className="input-group">
									<input type="text" className="form-control form-control-sm" placeholder="Search for..." aria-describedby="basic-addon2"></input>
									<span className="input-group-btn" id="basic-addon2">
									  <button className="btn btn-secondary rounded-0" type="button">Go!</button>
									</span>
								</div>                                            
							</div>
						</div>
						<div className="col-md-3 col-sm-4 col-12 uploadBtn float-right p-0">
							<label class="btn btn-default">
								<input type="file"></input>
							</label>	
						</div>
					</div>
					<div className="table content-table d-table">
						<div className="d-none d-sm-none table-header">
							<div className="table-row col-12">
								<div className="text-center crdheader table-col col-md-7 d-inline-block">TITLE</div>
								<div className="crddetail table-col col-md-5 d-inline-block">
									<span className="text-center d-inline-block align-top datespan col-md-4">DATE</span>
									<span className="text-center d-inline-block align-top statusspan col-md-3">STATUS</span>
									<span className="text-center d-inline-block align-top copyspan col-md-5">ACTIONS</span>
								</div>
							</div>
						</div>
						<div id="accordion" role="tablist" aria-multiselectable="true" className="table-body">
							<div className="cardlike table-row col-12">							    
							    <div className="crdheader table-col d-inline-block col-md-7 px-0 py-2" role="tab" id="headingOne">
								  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
									<img className="vidthumbnail img-responsive" src={image} alt="video thumbnail" />	
									<div className="other-details d-inline-block pl-2 align-top">
										<div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
										<div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
										<div className="channelName">
											<a href="javascript:void(0)"><span className="badge badge-primary mr-1">English</span></a>
											<a href="javascript:void(0)"><span className="badge badge-success mr-1">Hindi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-danger mr-1">Punjabi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-warning mr-1">Bengali</span></a>
										</div>
		 								<span className="text-center d-inline-block align-top statusspan col-md-3 p-0"><a href="javascript:void(0)"><span className="badge badge-success">Complete</span></a></span>
									</div>
								  </a>
								</div>
								<div id="collapseOne" className="collapse show crddetail col-md-5 table-col px-0 py-2" role="tabpanel" aria-labelledby="headingOne">
									<span className="text-center d-inline-block align-top datespan col-md-4 p-0">15 Jan  05:12 PM</span>
									<span className="text-center d-inline-block align-top statusspan col-md-3 p-0">
										<a href="javascript:void(0)"><span className="badge badge-success">Complete</span></a>
									</span>
									<span className="d-inline-block align-top copyspan col-md-5 p-0">
										<div className="divCell actions text-center">
											<div className="socialShare">
												<Link to={`videos/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
											</div>
										</div>	
									</span>
								</div>
							</div>
							<div className="cardlike table-row col-12">							    
							    <div className="crdheader table-col d-inline-block col-md-7 px-0 py-2" role="tab" id="headingTwo">
								  <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									<img className="vidthumbnail img-responsive" src={image} alt="video thumbnail" />	
									<div className="other-details d-inline-block pl-2 align-top">
										<div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
										<div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
										<div className="channelName">
											<a href="javascript:void(0)"><span className="badge badge-primary mr-1">English</span></a>
											<a href="javascript:void(0)"><span className="badge badge-success mr-1">Hindi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-danger mr-1">Punjabi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-warning mr-1">Bengali</span></a>
										</div>
									</div>
								  </a>
								</div>
								<div id="collapseTwo" className="collapse crddetail col-md-5 table-col px-0 py-2" role="tabpanel" aria-labelledby="headingTwo">
									<span className="text-center d-inline-block align-top datespan col-md-4 p-0">15 Jan  05:12 PM</span>
									<span className="text-center d-inline-block align-top statusspan col-md-3 p-0">
										<a href="javascript:void(0)"><span className="badge badge-success">Complete</span></a>
									</span>
									<span className="d-inline-block align-top copyspan col-md-5 p-0">
										<div className="divCell actions text-center">
											<div className="socialShare">
												<Link to={`videos/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
											</div>
										</div>	
									</span>
								</div>
							</div>
							<div className="cardlike table-row col-12">							    
							    <div className="crdheader table-col d-inline-block col-md-7 px-0 py-2" role="tab" id="headingThree">
								  <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									<img className="vidthumbnail img-responsive" src={image} alt="video thumbnail" />	
									<div className="other-details d-inline-block pl-2 align-top">
										<div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
										<div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
										<div className="channelName">
											<a href="javascript:void(0)"><span className="badge badge-primary mr-1">English</span></a>
											<a href="javascript:void(0)"><span className="badge badge-success mr-1">Hindi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-danger mr-1">Punjabi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-warning mr-1">Bengali</span></a>
										</div>
									</div>
								  </a>
								</div>
								<div id="collapseThree" className="collapse crddetail col-md-5 table-col px-0 py-2" role="tabpanel" aria-labelledby="headingThree">
									<span className="text-center d-inline-block align-top datespan col-md-4 p-0">15 Jan  05:12 PM</span>
									<span className="text-center d-inline-block align-top statusspan col-md-3 p-0">
										<a href="javascript:void(0)"><span className="badge badge-success">Complete</span></a>
									</span>
									<span className="d-inline-block align-top copyspan col-md-5 p-0">
										<div className="divCell actions text-center">
											<div className="socialShare">
												<Link to={`videos/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
											</div>
										</div>	
									</span>
								</div>
							</div>
							<div className="cardlike table-row col-12">						    
							  <div className="crdheader table-col d-inline-block col-md-7 px-0 py-2" role="tab" id="headingFour">
								  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
									<img className="vidthumbnail img-responsive" src={image} alt="video thumbnail" />	
									<div className="other-details d-inline-block pl-2 align-top">
										<div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
										<div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
										<div className="channelName">
											<a href="javascript:void(0)"><span className="badge badge-primary mr-1">English</span></a>
											<a href="javascript:void(0)"><span className="badge badge-success mr-1">Hindi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-danger mr-1">Punjabi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-warning mr-1">Bengali</span></a>
										</div>
									</div>
								  </a>
								</div>
								<div id="collapseFour" className="collapse crddetail col-md-5 table-col px-0 py-2" role="tabpanel" aria-labelledby="headingFour">
									<span className="text-center d-inline-block align-top datespan col-md-4 p-0">15 Jan  05:12 PM</span>
									<span className="text-center d-inline-block align-top statusspan col-md-3 p-0">
										<a href="javascript:void(0)"><span className="badge badge-success">Complete</span></a>
									</span>
									<span className="d-inline-block align-top copyspan col-md-5 p-0">
										<div className="divCell actions text-center">
											<div className="socialShare">
												<Link to={`videos/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
											</div>
										</div>	
									</span>
								</div>
							</div>
							<div className="cardlike table-row col-12">							    
							    <div className="crdheader table-col d-inline-block col-md-7 px-0 py-2" role="tab" id="headingFive">
								  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
									<img className="vidthumbnail img-responsive" src={image} alt="video thumbnail" />	
									<div className="other-details d-inline-block pl-2 align-top">
										<div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
										<div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
										<div className="channelName">
											<a href="javascript:void(0)"><span className="badge badge-primary mr-1">English</span></a>
											<a href="javascript:void(0)"><span className="badge badge-success mr-1">Hindi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-danger mr-1">Punjabi</span></a>
											<a href="javascript:void(0)"><span className="badge badge-warning mr-1">Bengali</span></a>
										</div>
									</div>
								  </a>
								</div>
								<div id="collapseFive" className="collapse crddetail col-md-5 table-col px-0 py-2" role="tabpanel" aria-labelledby="headingFive">
									<span className="text-center d-inline-block align-top datespan col-md-4 p-0">15 Jan  05:12 PM</span>
									<span className="text-center d-inline-block align-top statusspan col-md-3 p-0 ">
										<a href="javascript:void(0)"><span className="badge badge-success">Complete</span></a>
									</span>
									<span className="d-inline-block align-top copyspan col-md-5 p-0">
										<div className="divCell actions text-center">
											<div className="socialShare">
												<Link to={`videos/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
											</div>
										</div>	
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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

export default Content;
