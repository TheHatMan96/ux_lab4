import React, { Component } from 'react';
import './App.css';
import UnitecClass from './UnitecClass.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UnitecClass unitecStudentName = 'Daniel Medina'/>
          
        </header>
      </div>
    );
  }
}

export default App;
