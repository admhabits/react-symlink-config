import React, { Component } from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import AdminDashboardLayout from '../layouts/AdminDashboardLayout';
import AdminSettings from '../pages/Settings';
import AdminDashboard from '../pages/Dashboard';

export default class AdminRouter extends Component {
	render() {
		return (
			<AdminDashboardLayout>
			    <Switch>
			        <Route exact path={"/admin/dashboard"} render={()=>(
			              <><AdminDashboard>Admin Dashboard Config</AdminDashboard></>
			          )}/>
			        <Route exact path={"/admin/settings"} render={()=>(
			              <><AdminSettings>Admin Setting Config</AdminSettings></>
			          )}/>
			        <Route render={()=>(
			            <>Error Admin Page</>
			          )}/>
			    </Switch>
			    <Redirect from={"/admin"} to="/admin/dashboard"/>
			</AdminDashboardLayout>
		);
	}
}
