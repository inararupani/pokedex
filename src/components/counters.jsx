import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() {
        return(
            //Counter Components are using its attributes that are part of props input to the component
            //We cannot access the state of these components. The state is local and internal to the component.
        <div>
            <button 
                onClick={this.props.onReset} 
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {this.props.counters.map(counter => (
                <Counter 
                    key = {counter.id} 
                    onIncrement={this.props.onIncrement} 
                    onDelete={this.props.onDelete} 
                    counter={counter}
                />                
            ))} 
        </div>)

        //initializing counter compoonents - for counter object
    }
}

export default Counters;