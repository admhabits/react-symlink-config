import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';


import Cart from './components/client/Cart';
import {connect } from 'react-redux';

import './assets/css/icons.css';
import './assets/css/index.css';
import Shop from './pages/Shop';

class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   cart: false
    // }
    // console.log(props)
  }


  render() {

    return (
      <StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={()=>(
                  <>
                    
                   <Shop {...this.props}/>
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
                             <Route  path={"/admin/profile"} render={()=>(
                                 <>
                                   <>Hi</>
                                 </>
                               )}/>
                             <Route render={()=>(
                                   <>
                                     <>Not Found admin Page</>

                                   </>
                               )}/>
                          </Switch>
                          {<Redirect from="/admin" to={"/admin/dashboard"}/>}
                          </>
                      )}/>
                
                    <Route render={()=>(
                          <>
                            NOT FOUND 404
                          </>
                      )}/>

              </Switch>

              <Route path={"/*"} render={()=>(<>Not Found</>)}/>
            </Switch>
            <Cart {...this.props}/>
          </BrowserRouter>
      </StrictMode>
    );
  }
}


const MapStateToProps = (state)=>({
  cart: state.CartReducers
})

export default connect(MapStateToProps, {})(App);