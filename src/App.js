import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      { name: 'Marcus', age: 25 },
      { name: 'Broly', age: 3 },
      { name: 'Bruno', age: 7 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Broly', age: 4 },
        { name: 'Bruno', age: 7 }]
    })
  }

  render() {
    return (
      <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>
         <button onClick={(e) => this.switchNameHandler("Marcus!!")}>Switch Name</button>
         <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
         <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Pony!")} >My Hobbies: Reading</Person>
         <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
       </div>
    );
};
}


export default App;
