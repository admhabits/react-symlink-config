import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={()=>(
                  <><h2>Ini Landing Page</h2></>
                )}/>

              <Switch>
                  {/*NESTING ROUTER CLIENT START*/}
                  <Route path={"/client"} component={()=>(
                    
                      <Switch>
                          <Route exact path={"/client/posts"} render={()=>(
                                <><h2>Client Posts</h2></>
                            )}/>
                          <Route exact path={"/client/profile"} render={()=>(
                                <><h2>Client Profile</h2></>
                            )}/>
                          <Route render={()=>(
                              <>Not Found 404</>
                            )}/>
                      </Switch>

                    )}/>
                  {/*NESTING ROUTER CLIENT END*/}

                  {/*NESTING ROUTER ADMIN START*/}
                  <Route path={"/admin"} component={()=>(

                      <Switch>
                          <Route exact path={"/admin/dashboard"} render={()=>(
                                <><h2>Admin Dashboard</h2></>
                            )}/>
                          <Route exact path={"/admin/settings"} render={()=>(
                                <><h2>Admin Settings</h2></>
                            )}/>
                          <Route render={()=>(
                              <>Not Found 404</>
                            )}/>
                      </Switch>

                    )}/>
                  {/*NESTING ROUTER ADMIN END*/}
                  
                  <Route render={()=>(
                      <>Not Found 404</>
                    )}/>
              </Switch>
             

              <Route path={"/*"} render={()=>(

                  <>Not Found 404</>

                )}/>
            </Switch>
          </BrowserRouter>
      </StrictMode>
    );
  }
}
