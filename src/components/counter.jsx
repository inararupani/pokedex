import React, { Component } from 'react';

class Counter extends Component {
    //dynamic object that have attributes
    state  = {
        count: 0,
        //imageUrl: "https://picsum.photos/200" - randomly generated image
        tags: ['tag1','tag2','tag3'] 
    };

    /*
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };
    */


    render() { 

        //since we are modifying the variable we use let, else use const
        //let classes = this.getBadgeClasses(); //appends to the className above

        return (

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

    
       //direct call to method
        <div>
            <span className={this.getBadgeClasses()}> {this.formatCount()} </span> 
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} 
            </ul>
         </div>
         //getting a string(tags) and mapping it with jsx expression which compiled through React Element = Plain Js obj 
         //Each attribute need a key attribute for it to be dyanamically changed
        
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"; //appends to the className above
        return classes;
    }

    formatCount(){
        const {count} = this.state; //destructure object -> peak the count property (picking it and storing in an another object called count)
        return count == 0 ? <h>Zero</h> : count;
        //jsx are normal javascript expression. can add headers instead of plain text too
    }
}
 
export default Counter;