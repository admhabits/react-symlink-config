import React, { Component } from 'react';

export default class Dashboard extends Component {
	constructor({children}){
		super();
		this.children = children;
	}
	render() {
		return (
			<div>
				{this.children}
			</div>
		);
	}
}
