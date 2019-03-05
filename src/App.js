import React, { Component } from 'react';
import PerformanceBar from './components/PerformanceBar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PerformanceBar />
      </div>
    );
  }
}

export default App;