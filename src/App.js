import React, { Component } from 'react';
import {levelUpSetBreeds, levelUpGetBreeds} from './actions/levelUpAction'
import { connect } from 'react-redux'
import MainView from './components/MainView'
import DisplayImage from './reducers/DisplayImage'
import PerformanceBar from './components/PerformanceBar'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <DisplayImage />
        <PerformanceBar />
      </div>
    );
  }
}

export default connect(null, { levelUpGetBreeds, levelUpSetBreeds })(App);
