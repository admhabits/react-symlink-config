import React, { Component, StrictMode } from 'react';
import { NavLink } from 'react-router-dom';

export default class ClientDashboardLayout extends Component {
	constructor({children}){
		super();
		this.children = children;
	}
	render() {
		return (
			<StrictMode>
				<div className="client-container">
					<div className="header-client-layout">
						<NavLink to="/client/home" activeClassName="selected">Home</NavLink>
						<NavLink to="/client/posts">Article</NavLink>
						<NavLink to="/client/profile">Profile</NavLink>
					</div>
					<div className="sidebar-client-layout off-canvas">
						<NavLink to="/client/home" activeClassName="selected">Home</NavLink>
						<NavLink to="/client/posts">Article</NavLink>
						<NavLink to="/client/profile">Profile</NavLink>
					</div>
					<div className="content-client-container">
						{this.children}
					</div>
				</div>
			</StrictMode>
		);
	}
}
