import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchDogList from './request-doglist-reducer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FetchDogList/>

          </p>
          <a>
            'HALLOOO'
          </a>
        </header>
      </div>
    );
  }
}

export default App;
