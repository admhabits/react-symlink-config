import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

export default class AdminRouter extends Component {
	render() {
		return (
			<div>
				{/*NESTING ROUTER ADMIN START*/}
				<Route path={"/admin"} render={()=>(

				    <Switch>
				        <Route exact path={"/admin/dashboard"} render={()=>(
				              <><AdminDashboard>Admin Dashboard Config</AdminDashboard></>
				          )}/>
				        <Route exact path={"/admin/settings"} render={()=>(
				              <><AdminSettings>Admin Setting Config</AdminSettings></>
				          )}/>
				        <Route render={()=>(
				            <><ErrorPage/></>
				          )}/>
				    </Switch>

				  )}/>
				{/*NESTING ROUTER ADMIN END*/}
			</div>
		);
	}
}
