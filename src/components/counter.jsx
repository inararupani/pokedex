import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            //React.Fragment - removes extra wrap of div in web browser (will get extra div wrap by using <div><\div> tab)
        <React.Fragment> 
            <h1>Hello World</h1>
            <button>Increment</button>
        </React.Fragment>
        
        );
    }
}
 
export default Counter;