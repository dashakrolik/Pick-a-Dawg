// The game starts off with only 3 breeds and should gradually increase in difficulty. When the user has a streak of 10 correct answers, the game will add another 3 breeds into the mix, and so on.

import React, { Component } from 'react';

class PerformanceBar extends Component {
  state = {correct: 0, total: 0, level: 1}
  
  rightButton() {
    // every 10 correct, "state.level" up 1.
    // Think about 10 correct in a row
    this.setState({total: this.state.total + 1, correct: this.state.correct + 1, level: Math.floor((this.state.correct + 1)/10) + 1})
  }

  wrongButton() {
    this.setState({total: this.state.total + 1})
  }

  

  render () {
    const perc = (this.state.correct/this.state.total) * 100
    
    return (
      <div className="timer">
        <div>You are at level {this.state.level} (every 10 correct, 1 level up)</div>
        <div>Currently {this.state.correct}/{this.state.total} correct answer(s)</div>
          <div className="progress-bar">
          {/* "perc || 0" => use perc if defined, otherwise 0 */}
          <div className="progress" style={{ width: `${perc || 0}%` }}>{ `${Math.round(perc, 2) || 0}%` }</div>
        </div>
        
        <button onClick={() => this.rightButton()}>Right answer</button>
        <button onClick={() => this.wrongButton()}>Wrong answer</button>
        
      </div>
    )
  }
}

export default PerformanceBar;