import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ClientDashboardLayout from '../layouts/ClientDashboardLayout';
import UsersProfile from '../pages/Profile';
import UsersPosts from '../pages/Posts';


export default class ClientRouter extends Component {
  render() {
    return ( 
      <ClientDashboardLayout>
        <Switch>
              <Route exact path={"/client/posts"} render={()=>(
                    <><UsersPosts>Client Posts</UsersPosts></>
                )}/>
              <Route exact path={"/client/profile"} render={()=>(
                    <><UsersProfile>Client Profile</UsersProfile></>
                )}/>
              <Route render={()=>(
                  <>Client Page Error</>
                )}/>
        </Switch>
        <Redirect from={"/client"} to="/client/posts"/>
      </ClientDashboardLayout>
    );
  }
}
