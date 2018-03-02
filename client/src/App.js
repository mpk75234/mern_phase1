import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Customers from './components/Customers/Customers';
import Create from './components/Create/Create';
import Customer from './components/Customers/CustomerDetail/CustomerDetail';
import classes from './App.css';
import CustomerDetail from './components/Customers/CustomerDetail/CustomerDetail';

class App extends Component {

  render(){
  const routes = (
    <div>
      <Route path="/create" exact component={Create}/>
      <Route path="/customers" exact component={Customers}/>
      <Route path="/customer/:id" exact component={CustomerDetail}/>
      </div>
  )
    return (
      <div className={classes.App}>
        <header>
          <nav>
            <ul> 
              <li><a href='/customers'>All Customers</a></li>
              <li><a href='/create'>Add Customer</a></li>
              <li><a href='/customer/:id'>Update Customer</a></li>
              </ul>
              </nav>
              </header>
      <BrowserRouter>
        {routes}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
