import React, {Component} from 'react';

class Create extends Component {
    constructor(props){
    super();
    this.state = {
            firstname: '',
            lastname: ''
        }
    }
submitFormHandler = () =>{
    // console.log('mi nombre es: ' + this.state.firstname + ' ' + this.state.lastname);
    const customer = {...this.state};
    console.log(customer.firstname);
    fetch('/api/customers', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({customer})
    })
    .then(res => res.json());
}

render( ){

    return(
        <div>
            <h3>Hellloooo from Create Component</h3>
        <label>
            firstname:
            <input type="text" 
            onChange={(event) => this.setState({firstname: event.target.value})}/>
        </label>
        <label>
            lastname:
            <input type="text"  
            onChange={(event) =>this.setState({lastname: event.target.value})}/>
        </label>
        <button onClick={()=>this.submitFormHandler()}> Add Customer</button>

</div>
    );
}
}
export default Create;
