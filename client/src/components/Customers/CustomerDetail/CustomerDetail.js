import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CustomerDetail extends Component{
    constructor(props){
        super();
    this.state = {
        _id: '',
        firstname: '',
        lastname: '',
    }
}

    componentDidMount (){
        console.log(this.props);
        console.log('this.props.match.params.id: ' + this.props.match.params.id);
        fetch('/api/customers/' + this.props.match.params.id)
        .then(res => res.json())
        .then(x => this.setState({
            _id: x.customer._id,
            firstname: x.customer.firstname,
            lastname: x.customer.lastname
        })

        )}

        deleteHandler = () => {
            fetch('/api/customers/' + this.state._id,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json)
        }
        updateHandler = () => {
            const customer = {...this.state};
            fetch('/api/customers/' + this.state._id,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({customer})
            })
            .then(res => res.json())
        }
    render(){

        const customerDetail =(<div>
            <p>_id: {this.state._id}</p>
            <label>
                firstname:
                </label>
                <input type="text" placeholder={this.state.firstname}
                onChange={(event)=>this.setState({firstname: event.target.value})}
                />
             <label>
                 lastname:
                 </label>
                <input type="text" placeholder={this.state.lastname}
                onChange={(event)=>this.setState({lastname: event.target.value})}
                />
                <br/>
                <button onClick={this.updateHandler}> Update</button>
                <button onClick={this.deleteHandler}>Delete</button>
                 </div>);

        return (
            <div>
                <p>Update customer information, or delete customer</p>
                {customerDetail}
                </div>
        );
    }
}

export default CustomerDetail;