import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useParams } from 'react-router-dom';
import ClientDashboardLayout from './layouts/ClientDashboardLayout';
import AdminDashboardLayout from './layouts/AdminDashboardLayout';

import Landing from './pages/Landing';
import UsersProfile from './pages/Profile';
import UsersPosts from './pages/Posts';
import AdminDashboard from './pages/Dashboard';
import AdminSettings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';

export default class App extends Component {

  render() {
    return (
      <StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={()=>(
                  <><Landing/></>
                )}/>

              <Switch>

                
                    {/*NESTING ROUTER CLIENT START*/}
                      <Route path={"/client"} render={()=>(
                          <ClientDashboardLayout>
                            <Switch>
                                  <Route exact path={"/client/posts"} render={()=>(
                                        <><UsersPosts>Client Posts</UsersPosts></>
                                    )}/>
                                  <Route exact path={"/client/profile"} render={()=>(
                                        <><UsersProfile>Client Profile</UsersProfile></>
                                    )}/>
                                  <Route render={()=>(
                                      <><ErrorPage/></>
                                    )}/>
                            </Switch>
                            <Redirect from={"/client"} to="/client/posts"/>
                          </ClientDashboardLayout>
                        )}/>
                      
                    {/*NESTING ROUTER CLIENT END*/}
                  

                  
                  {/*NESTING ROUTER ADMIN START*/}
                  <Route path={"/admin"} render={()=>(
                      <AdminDashboardLayout>
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
                      <Redirect from={"/admin"} to="/admin/dashboard"/>
                      </AdminDashboardLayout>
                    )}/>
                    
                  {/*NESTING ROUTER ADMIN END*/}
                  

                  <Route render={()=>(
                      <><ErrorPage/></>
                    )}/>

              </Switch>
             

              <Route path={"/*"} render={()=>(

                  <><ErrorPage/></>

                )}/>

            </Switch>
          </BrowserRouter>
      </StrictMode>
    );
  }
}
