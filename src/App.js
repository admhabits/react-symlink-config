import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './assets/css/index.css';

export default class App extends Component {

  render() {
    return (
      <StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={()=>(
                  <>
                    <h1>Shopping Page</h1>
                  
                  </>
                )}/>

              <Switch>
              
                    {/*NESTING ROUTER CLIENT START*/}
                      <Route path={"/client"} render={()=>(
                          <>
                          <Switch>
                            <Route exact path={"/client/dashboard"} render={()=>(
                                <>
                                  <>Client Dashboard</>
                                </>
                              )}/>
                            <Route render={()=>(
                                  <>
                                    <>Not Found client Page</>
                                  </>
                              )}/>
                          </Switch>
                          <Redirect from="/client" to={"/client/dashboard"}/>
                          </>
                        )}/>
                  
                    {/*NESTING ROUTER ADMIN START*/}
                    <Route path={"/admin"} render={()=>(
                          <>
                          <Switch>
                             <Route exact path={"/admin/dashboard"} render={()=>(
                                 <>
                                   <>Admin Dashboard</>
                                 </>
                               )}/>
                             <Route render={()=>(
                                   <>
                                     <>Not Found admin Page</>
                                   </>
                               )}/>
                          </Switch>
                          <Redirect from="/admin" to={"/admin/dashboard"}/>
                          </>
                      )}/>
                
                    <Route render={()=>(
                          <>
                            NOT FOUND 404
                          </>
                      )}/>

              </Switch>

              <Route path={"/*"} render={()=>(<></>)}/>
            </Switch>

          </BrowserRouter>
      </StrictMode>
    );
  }
}
