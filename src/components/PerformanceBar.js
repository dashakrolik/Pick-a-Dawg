import React, { Component } from 'react'
import {connect} from 'react-redux'
import './PerformanceBar.css'

class PerformanceBar extends Component {
  render () {
    const perc = (this.props.performanceBar.correct/this.props.performanceBar.total) * 100
    console.log(this.props,' im props in performancebar')
    return (
      <div className="timer">
        <div>LEVEL | {this.props.performanceBar.level}</div>
        {/* <div>(every 10 correct, 1 level up)</div> */}
        <div>CORRECT ANSWER | {this.props.performanceBar.correct}</div>
        <div>WINNING STREAK | {this.props.performanceBar.streak}</div>
        <div>TOTAL PLAYED | {this.props.performanceBar.total}</div>
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