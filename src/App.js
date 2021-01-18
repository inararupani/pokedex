import './App.css';
import React, { Component } from 'react';
import Counters from "./components/counters";
import NavBar from './components/navbar';

class App extends Component {
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

handleIncrement = (counter) => {
    //React updating the state -- clonning the array
    const counters = [...this.state.counters];
    //This is updating the same object, which is a NO no. We need to clone the inner attributes of the object as well
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; //couters object in the state remains unchanged.
    counters[index].value++;
    this.setState({counters});

};

handleReset = () => {
    const counters = this.state.counters.map(c=> {
        c.value = 0;
        return c;
    });

    this.setState({counters});

};

//To update the stat, we need to add CounterId parameter here
handleDelete = (counterId) => {
    //console.log("Event Hanlder Called",counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};
//In React we cannot update the state of the component. To do this we create a new array to react update the state


render () {
  return (
    <React.Fragment>
      <NavBar />
      <main className= "container"> 
        <Counters
          counters = {this.state.counters} 
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}  
          onDelete={this.handleDelete}
        /> 
      </main>
    </React.Fragment>
    );

  }

}

export default App;
