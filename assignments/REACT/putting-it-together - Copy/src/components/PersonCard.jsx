import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        //special type of variable that we can use to change certain components that then reload with updated information
        this.state = {
            age: this.props.age //now age is tranferred to a state variable
        };
    }
    render(){
        return(
            <div className = "name" >
            <   h1> {this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick = {() => this.setState({ age: this.state.age +1})
                }>Birthday Button for {this.props.lastName}, {this.props.firstName}</button>
            </div>
        ) 
    }
}

export default PersonCard;