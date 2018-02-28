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
   getCustomerHandler(id){
       console.log('getCustomerHandler fired using: '+ id );
       fetch('/api/customers/' + id,{
           method: 'DELETE',
           headers: {'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
   })
   .then(res => res.json());
}


    render(){
        const allCustomers = this.state.customers.map(customer =>{
                    return <li className={classes.li} key={customer._id}>customer {customer._id} is 
                    {customer.firstname} {customer.lastname}<button 
                    onClick={()=>this.getCustomerHandler(customer._id)}>Delete</button>
                    </li>
                });
        return(
            <div>
            <h2 className={classes.h2}>hello from Customers component</h2>
            
                {allCustomers}
            </div>

        );
    }
}

export default Customers;