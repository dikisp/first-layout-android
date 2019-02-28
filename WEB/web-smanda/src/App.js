import React, { Component } from 'react';
import './App.css';
import beranda from './Component/beranda';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> 
          <beranda />
        </h1>
      </div>
    );
  }
}

export default App;
