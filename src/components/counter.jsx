import React, { Component } from 'react';

class Counter extends Component {
    //dynamic object that have attributes
    state  = {
        count: 0,
        //imageUrl: "https://picsum.photos/200" - randomly generated image
        //tags: [] 
    };

    /*
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };
    */

    //Used to update the state property - Binding EventHandler to this (object)
    /*
    Every component add a constructor, call a base constructor, and for every event handler write code like this (this.handle)
    */
   /* constructor() {
        //Call constructor of parent using keyowrd: super
        super();
        this.handleIncrement = this.handleIncrement.bind(this); //return neww instance of handleIncrement instance
        //this - references to current counter of the object
    }*/

    //convert this to Arrow Function- Simpler version of constructor/ rebinding every event handler mannually
    handleIncrement = () => {
        //console.log('Increment Clicked!', this);
        //When this is called in obj.method(); it will return a reference of function "method" to object "obj"
        //function() - without object/standalone - wobject will be undefined
        this.setState({count: this.state.count+1}); //Updating the state, and syncs the DOM with Virtual DOM
    }


    //Conditional Rendering
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() { 

        return (
        //direct call to method
        <div>
            <span className={this.getBadgeClasses()}> {this.formatCount()} </span> 
            <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
         </div>
         //getting a string(tags) and mapping it with jsx expression which compiled through React Element = Plain Js obj 
         //Each attribute need a key attribute for it to be dyanamically changed*/

        //since we are modifying the variable we use let, else use const
        //let classes = this.getBadgeClasses(); //appends to the className above

        /*React.Fragment - removes extra wrap of div in web browser (will get extra div wrap by using <div><\div> tab)
        <React.Fragment> 
            <span> {this.formatCount()} </span> 
            <button>Increment</button>
        </React.Fragment>
        this - current object; dynamic rendering
        {} - can have any value - either hardcoded or function return*/

        /*<img src= {this.state.imageUrl} alt = ""/>  - dymanic rendering of image
        <span style ={this.styles} className="badge badge-primary m-2"> {this.formatCount()} </span>  - from the function
        <span style ={{fontSize: 30}} className="badge badge-primary m-2"> {this.formatCount()} </span>
        */
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"; //appends to the className above
        return classes;
    }

    formatCount(){
        const {count} = this.state; //destructure object -> peak the count property (picking it and storing in an another object called count)
        return count == 0 ? <h1>Zero</h1> : count;
        //jsx are normal javascript expression. can add headers instead of plain text too
    }
}
 
export default Counter;