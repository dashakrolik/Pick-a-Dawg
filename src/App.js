import React, { Component } from 'react';
import {levelUpSetBreeds, levelUpGetBreeds} from './actions/levelUpAction'
import DisplayImage from './DisplayImage'
import { connect } from 'react-redux'
import request from 'superagent'


class App extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={()=> this.props.levelUpGetBreeds()} >KLIK HERE</button>
      </div>
    );
  }
}

//export default connect(null)(App);
export default connect(null, { levelUpGetBreeds, levelUpSetBreeds })(App);
