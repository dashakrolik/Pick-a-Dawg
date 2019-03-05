import React, { Component } from 'react';

import {levelUpSetBreeds, levelUpGetBreeds} from './actions/levelUpAction'
// import DisplayImage from './DisplayImage'
import { connect } from 'react-redux'



// import './App.css';
import MainView from './components/MainView';
// import DisplayImage from './DisplayImage'



class App extends Component {

  render() {
    return (
      <div className="App">

        <button onClick={()=> this.props.levelUpGetBreeds()} >KLIK HERE</button>


            <MainView />
       

      </div>
    );
  }
}

export default connect(null, { levelUpGetBreeds, levelUpSetBreeds })(App);
