import React, { Component } from 'react';
import '../assets/css/header.css';
import '../assets/css/sidebar.css';

export default class AdminDashboardLayout extends Component {
	constructor({children}){
		super();
		this.children = children;
		this.state = {
			toggle: true
		}
	}

	toggleMenu = () => {
		this.setState({
			toggle: !this.state.toggle
		})
	}
	
	render() {
		const { toggle } = this.state;
		return (
			<div className="admin-container" >
				<div className="admin-header" style={{
						marginLeft: (!toggle ? "0" : "250px")
					}}>
					<div className="menu">
						<span
							onClick={()=>this.toggleMenu()} 
							className="material-icons">menu</span>
					</div>
					<div className="nav">
						<a className="nav-item" href="/">Home</a>
						<a className="nav-item" href="/">Article</a>
						<a className="nav-item" href="/">My Account</a>
					</div>
				</div>
				<div className="admin-sidebar" style={{
					display: (!toggle ? "none": "block")
				}}>
					<div className="logo">Admin Panel</div>
					<div className="menu-side">
						<a href="/" className="menu-side-item">Link 1</a>
						<a href="/" className="menu-side-item">Link 2</a>
						<a href="/" className="menu-side-item">Link 3</a>
					</div>
				</div>
				<div className="admin-content" style={{
						marginLeft: (!toggle ? "0" : "250px")
					}}>
					{this.children}
				</div>
			</div>
		);
	}
}
