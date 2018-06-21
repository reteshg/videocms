import React, { Component } from 'react';
import '../App.css';
import capacity from '../capacity.png';
import revenue from '../revenue.png';
import twitter from '../twitter-icon.png';

class Dashboard extends Component {
    render() {
        return (
                <div className="main-wrapper mh-100">
                    <div className="content-wrapper clearfix py-4 px-3">
						{/*------------Capacity Card-----------*/}
						<div className="col-md-4 col-sm-6 col-12 d-inline-block">
							<div className="card border-0 p-2">
								<div className="row">
									<div className="col-5 mx-auto">
										<div className="icon-big icon-warning text-center">
											<img src={capacity} className="capacityIcon dashboardIcns mt-2" />
										</div>
									</div>
									<div className="col-7">
										<div className="numbers text-right">
											<p className="mb-1">Capacity</p>
											105GB
										</div>
									</div>
								</div>
								<div className="footer">
									<hr className="mt-2 mb-2"/>
									<div className="stats">Updated now</div>
								</div>
							</div>
						</div>
						{/*------------Revenue Card-----------*/}
						<div className="col-md-4 col-sm-6 col-12 d-inline-block">
							<div className="card border-0 p-2">
								<div className="row">
									<div className="col-5 mx-auto">
										<div className="icon-big icon-success text-center">
											<img src={revenue} className="revenueIcon dashboardIcns mt-2" />
										</div>
									</div>
									<div className="col-7">
										<div className="numbers text-right">
											<p className="mb-1">Revenue</p>
											$1,345
										</div>
									</div>
								</div>
								<div className="footer">
									<hr className="mt-2 mb-2"/>
									<div className="stats"> Last day</div>
								</div>
							</div>
						</div>
						{/*------------Twitter Card-----------*/}
						<div className="col-md-4 col-sm-6 col-12 d-inline-block">
							<div className="card border-0 p-2">
								<div className="row">
									<div className="col-5 mx-auto">
										<div className="icon-big icon-success text-center">
											<img src={twitter} className="twitterIcon dashboardIcns mt-2" />
										</div>
									</div>
									<div className="col-7">
										<div className="numbers text-right">
											<p className="mb-1">Followers</p>
											+45
										</div>
									</div>
								</div>
								<div className="footer">
									<hr className="mt-2 mb-2"/>
									<div className="stats"> Updated Now</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        );
    }
}

export default Dashboard;
