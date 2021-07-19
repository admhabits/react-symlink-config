import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import $ from 'jquery';
import Cart from './components/client/Cart';

import './assets/css/icons.css';
import './assets/css/index.css';
import Shop from './pages/Shop';

export default class App extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount() {
    $('.atc').on('click', function(){
      alert("Add To Cart");
    })

    $('#cart-shop').on('click', function(){
      alert("Keranjang Belanja");
    })

  }
  render() {
    return (
      <StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={()=>(
                  <>
                    
                   <Shop/>
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
            <Cart/>
          </BrowserRouter>
      </StrictMode>
    );
  }
}
