import React from 'react';

const MenuItem = (props) => {
    return(
        <div>
            <h1>Name: {props.dishName}</h1>
            <p>Price: ${props.price}</p>            
            {props.children}
        </div>
    )
}
    
export default MenuItem;