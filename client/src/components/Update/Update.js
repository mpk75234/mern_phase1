import React from 'react';

const update = (props) => (

    <div>
        <h3> working with {props._id}</h3>
        <label>
            firstname:
            </label>
            <input type="text" placeholder={props.firstname}/>
        <label>
            lastname:
            </label>
            <input type="text" placeholder={props.lastname}/>
        <button onClick={props.clicked}>Update</button>
    </div>
)





export default update;