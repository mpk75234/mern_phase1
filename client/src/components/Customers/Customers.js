import React, { Component } from 'react';
import classes from './Customers.css';

class Customers extends Component {
   constructor(){
       super();
       this.state = {
           customers: []
       }
   } 

   componentDidMount() {
       fetch('/api/customers')
       .then(res => res.json())
       .then(customers => this.setState({customers},
        ()=> console.log('Customers fetched: ' + customers)));
   }


    render(){
        return(
            <div>
            <h2 className={classes.h2}>hello from Customers component</h2>
                {this.state.customers.map(customer =>{
                    return <li className={classes.li} key={customer._id}>customer {customer._id} is {customer.firstname} {customer.lastname}</li>
                })}
            </div>

        );
    }
}

export default Customers;