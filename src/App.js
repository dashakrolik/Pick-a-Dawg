import React, { Component } from 'react';
import DisplayContentContainer from './components/DisplayContentContainer'
import {levelUpSetBreeds, levelUpGetBreeds} from './actions/levelUpAction'
// import DisplayImage from './DisplayImage'
import { connect } from 'react-redux'
import MainView from './components/MainView'




// import './App.css';

import DisplayImage from './DisplayImage'
import PerformanceBar from './components/PerformanceBar'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <DisplayImage />

  <PerformanceBar />
  <button onClick={()=> this.props.levelUpGetBreeds()} >KLIK HERE</button>

      </div>
    );
  }
}

export default connect(null, { levelUpGetBreeds, levelUpSetBreeds })(App);
