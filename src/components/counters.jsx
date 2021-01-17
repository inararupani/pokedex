import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    //Counters component have local state, completely invisible to other components
    state = {
        //Creating multiple counters
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    //To update the stat, we need to add CounterId parameter here
    handleDelete = (counterId) => {
        //console.log("Event Hanlder Called",counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    //In React we cannot update the state of the component. To do this we create a new array to react update the state

    render() {
        return(
            //Counter Components are using its attributes that are part of props input to the component
            //We cannot access the state of these components. The state is local and internal to the component.
        <div>
            {this.state.counters.map(counter => (
                <Counter key = {counter.id} onDelete={this.handleDelete} counter={counter}>
                </Counter>                
            ))} 
        </div>)

        //initializing counter compoonents - for counter object
    }
}

export default Counters;