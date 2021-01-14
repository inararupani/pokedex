import React, { Component } from 'react';

class Counter extends Component {
    //dynamic object that have attributes
    state  = {
        count: 0
    };
    render() { 
        return (
            //React.Fragment - removes extra wrap of div in web browser (will get extra div wrap by using <div><\div> tab)
        <React.Fragment> 
            <span> {this.formatCount()} </span> 
            <button>Increment</button>
        </React.Fragment>
        //this - current object; dynamic rendering
        //{} - can have any value - either hardcoded or function return
        
        );
    }

    formatCount(){
        const {count} = this.state; //destructure object -> peak the count property (picking it and storing in an another object called count)
        return count == 0 ? <h1>Zero</h1> : count;
        //jsx are normal javascript expression. can add headers instead of plain text too
    }
}
 
export default Counter;