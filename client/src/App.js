import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Customers from './components/Customers/Customers';
import Create from './components/Create/Create';

class App extends Component {

  render(){
  const routes = (

    <BrowserRouter>
    <div>
      <Route path="/create" component={Create}/>
      <Route path="/customers" component={Create}/>
      </div>
    </BrowserRouter>
  )
    return (
      <div> 
        {routes}
        <Create/>
        <Customers />
      </div>
    );
  }
}

export default App;
