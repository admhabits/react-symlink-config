import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useParams } from 'react-router-dom';
import AdminRouter from './routes/AdminRouter';
import ClientRouter from './routes/ClientRouter';

import Landing from './pages/Landing';
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
                            <ClientRouter/>
                        )}/>
                  
                    {/*NESTING ROUTER ADMIN START*/}
                    <Route path={"/admin"} render={()=>(
                            <AdminRouter/>
                      )}/>
                
                    <Route render={()=>(
                        <><ErrorPage/></>
                      )}/>

              </Switch>

              <Route path={"/*"} render={()=>(<><ErrorPage/></>)}/>

            </Switch>
          </BrowserRouter>
      </StrictMode>
    );
  }
}
