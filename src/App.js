import React, { Component } from 'react';
import './App.css';
import TextWall from './text/TextWall'
import NavOptions from './NavOptions/NavOptions'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <TextWall />
        <NavOptions />
      </div>
    );
  }
}

export default App;
