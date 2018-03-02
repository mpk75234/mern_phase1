import React, { Component } from 'react';
import classes from './Customers.css';
import { Link } from 'react-router-dom';
import Customer from './Customer/Customer';

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
        const allCustomers = this.state.customers.map(customer =>{
                    return (<Link to={'/customer/' + customer._id} key={customer._id}>
                    <Customer className={classes.li} 
                    _id={customer._id} 
                    firstname={customer.firstname} 
                    lastname={customer.lastname}
                    />
        </Link>)});
        
        return(
            <div>
            <h2 className={classes.h2}>hello from Customers component</h2>
            
                {allCustomers}
            </div>

        );
    }
}

export default Customers;