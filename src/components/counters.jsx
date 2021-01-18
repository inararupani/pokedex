import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log('counters - rendered');
       
        //Clean the code using this.props
        const  {onReset, counters, onDelete, onIncrement} = this.props;
        
        return(
            //Counter Components are using its attributes that are part of props input to the component
            //We cannot access the state of these components. The state is local and internal to the component.
        <div>
            <button 
                onClick={onReset} 
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {counters.map(counter => (
                <Counter 
                    key = {counter.id} 
                    onIncrement={onIncrement} 
                    onDelete={onDelete} 
                    counter={counter}
                />                
            ))} 
        </div>)

        //initializing counter compoonents - for counter object
    }
}

export default Counters;