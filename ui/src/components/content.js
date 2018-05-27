import React, { Component } from 'react';
import '../App.css';
//import data from '../data.json';
import image from '../articleImg.jpg';
import fbicon from '../facebook-icon.png';
import yticon from '../youtube-icon.png';
import cms from '../cms.png';
import { Link } from 'react-router-dom';
import Edit from './edit.js';

const Content = ({ match }) => {
	    console.log(match);
        return (
                <div className="main-wrapper mh-100">
                    <div className="content-wrapper clearfix py-4 px-3">
                        <div className="card table-responsive border-0">
                            <h4 className="table-title text-dark font-weight-normal m-0">Videos</h4>
                            <div className="col-12 pt-3 pb-3">
                                <div className="col-md-9 col-6 filterDiv float-left p-0">
									<div className="input-group-btn search-panel">
										<div className="input-group">
											<input type="text" className="form-control" placeholder="Search for..." aria-describedby="basic-addon2"></input>
											<span className="input-group-btn" id="basic-addon2">
											  <button className="btn btn-secondary" type="button">Go!</button>
											</span>
										</div>                                            
									</div>
                                </div>
                                <div className="col-md-3 col-6 uploadBtn float-right p-0">
                                    <button type="button" className="btn btn-success float-right">Upload Video</button>
                                </div>
                            </div>
                            <table className="table content-table d-table">
                                <thead>
                                    <tr>
                                        <td className="text-center">TITLE</td>
                                        <td className="text-center">DATE</td>
                                        <td className="text-center">STATUS</td>
                                        <td className="text-center">ACTIONS</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img className="vidthumbnail img-responsive" src={image} alt="video thumbnail" />
                                            <div className="other-details d-inline-block pl-2 align-top">
                                                <div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
                                                <div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
                                                <div className="channelName">
                                                    <button type="button" className="btn btn-primary btn-sm mr-1">English</button>
                                                    <button type="button" className="btn btn-success btn-sm mr-1">Hindi</button>
                                                    <button type="button" className="btn btn-danger btn-sm mr-1">Punjabi</button>
                                                    <button type="button" className="btn btn-warning btn-sm mr-1">Bengali</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">15 Jan  05:12 PM</td>
                                        <td className="text-center"><button type="button" className="btn btn-success btn-sm complete">Complete</button></td>
                                        <td><div className="divCell actions text-center">
                                            <div className="socialShare">
                                                <Link to={`${match.url}/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
                                            </div>
                                            <div className="socialIcons"><span className="fb sprite"></span><span className="yt sprite"></span></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img className="vidthumbnail img-responsive w-12.5 h-19" src={image} alt="video thumbnail" />
                                            <div className="other-details d-inline-block pl-2 align-top">
                                                <div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
                                                <div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
                                                <div className="channelName">
                                                    <button type="button" className="btn btn-primary btn-sm mr-1">English</button>
                                                    <button type="button" className="btn btn-success btn-sm mr-1">Hindi</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">24 Jan  01:43 PM</td>
                                        <td className="text-center"><button type="button" className="btn btn-success btn-sm complete">Complete</button></td>
                                        <td><div className="divCell actions text-center">
                                            <div className="socialShare">
                                                <Link to={`${match.url}/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
                                            </div>
                                            <div className="socialIcons"><span className="fb sprite"></span><span className="yt sprite"></span></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img className="vidthumbnail img-responsive w-12.5 h-19" src={image} alt="video thumbnail" />
                                            <div className="other-details d-inline-block pl-2 align-top">
                                                <div className="title">“Three important wickets right at the beginning sealed India’s fate”</div>
                                                <div className="time"><span className="duration pr-2">Duration</span>[00:21:53]</div>
                                                <div className="channelName">
                                                    <button type="button" className="btn btn-primary btn-sm mr-1">English</button>
                                                    <button type="button" className="btn btn-success btn-sm mr-1">Hindi</button>
                                                    <button type="button" className="btn btn-warning btn-sm mr-1">Bengali</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">18 June  10:15 PM</td>
                                        <td className="text-center"><button type="button" className="btn btn-danger btn-sm processing">Processing</button></td>
                                        <td><div className="divCell actions text-center">
                                            <div className="socialShare">
                                                <Link to={`${match.url}/edit`} className="border-right mr-1 pr-1 text-dark">Edit</Link><Link to={''} className="border-right mr-1 pr-1 text-dark">Copy</Link><Link to={''} className="border-0 mr-1 pr-1 text-dark">Get Code</Link>
												<div className="ssicons"><img className="fbImage mr-1" src={fbicon} /><img className="ytImage mr-1" src={yticon} /><img className="cmsImage mr-1" src={cms} /></div>
                                            </div>
                                            <div className="socialIcons"><span className="fb sprite"></span><span className="yt sprite"></span></div>
                                        </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
}

export default Content;
