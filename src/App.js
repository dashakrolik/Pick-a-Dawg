import React, { Component } from 'react';
import {levelUpSetBreeds, levelUpGetBreeds} from './actions/levelUpAction'
import { connect } from 'react-redux'
import MainView from './components/MainView'
import DisplayImage from './components/DisplayImage'
import PerformanceBar from './components/PerformanceBar'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='performance-bar'>
          <PerformanceBar />
        </div>
          <DisplayImage />
      </div>
    );
  }
}

export default connect(null, { levelUpGetBreeds, levelUpSetBreeds })(App);
