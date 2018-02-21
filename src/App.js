import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent.js'




class App extends Component {


  render() {
    return (
      <div className="App">
                <h1>Hello World</h1>
                <FormComponent/>
                
      </div>
    );
  }
}

export default App;
