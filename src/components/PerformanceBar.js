import React, { Component } from 'react'
import {connect} from 'react-redux'

class PerformanceBar extends Component {
  render () {
    const perc = (this.props.performanceBar.correct/this.props.performanceBar.total) * 100
    
    return (
      <div className="timer">
        <div>You are at level {this.props.performanceBar.level} (every 10 correct, 1 level up)</div>
        <div>Currently {this.props.performanceBar.correct}/{this.props.performanceBar.total} correct answer(s)</div>
          <div className="progress-bar">
          {/* "perc || 0" => use perc if defined, otherwise 0 */}
          <div className="progress" style={{ width: `${perc || 0}%` }}>{ `${Math.round(perc, 2) || 0}%` }</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PerformanceBar)