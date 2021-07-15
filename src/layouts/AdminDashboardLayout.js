import React, { Component } from 'react';

export default class AdminDashboardLayout extends Component {
	constructor({children}){
		super();
		this.children = children;
	}
	render() {
		return (
			<div className="admin-container">
				<div className="admin-header">
					Header Admin
				</div>
				<div className="admin-sidebar">
					Sidebar admin
				</div>
				<div className="admin-content">
					{this.children}
				</div>
			</div>
		);
	}
}
