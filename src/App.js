import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Persons from './conainers/Persons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
            <li>
                Turn this app into one which does NOT use local state (in components) but instead used Redux
            </li>
        </ol>
          <Persons/>
      </div>
    );
  }
}

export default App;
