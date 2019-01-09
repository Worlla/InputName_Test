import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input'
import AddElement from './AddElement/AddElement';

class App extends Component {
state = {
  userInputs : [
    {name: null, surname: null, id:1}
  ]
};

addUserInput = (userInput) =>{
  userInput.id = Math.max(this.state.userInputs.id) + 1
  let tempUserInput = [...this.state.userInputs, userInput];

  this.setState({
    userInputs: tempUserInput
  })
};

  render() {
    return (
      <div className="App">
        <Input addUserInput={this.addUserInput}/>
        <AddElement userInputs={this.state.userInputs}></AddElement>
      </div>
    );
  }
}

export default App;
