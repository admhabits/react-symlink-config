import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={()=>(
                  <>
                    <h1>Ini Merupakan Halaman Landingpage</h1>
                  
                  </>
                )}/>

              <Switch>
              
                    {/*NESTING ROUTER CLIENT START*/}
                      <Route path={"/client"} render={()=>(
                          <>
                            <h1>Ini Adalah Halaman Client</h1>
                            
                          </>
                        )}/>
                  
                    {/*NESTING ROUTER ADMIN START*/}
                    <Route path={"/admin"} render={()=>(
                          <>
                           
                          </>
                      )}/>
                
                    <Route render={()=>(
                          <>
                            
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
