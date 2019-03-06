import { connect } from 'react-redux'
import React, {Component} from 'react'
export const SHOW_CORRECT_ANSWER = 'SHOW_CORRECT_ANSWER'


class ShowCorrectAnswer extends Component {

  componentDidMount() {
    this.whenWrongClick()
  }
  whenWrongClick = () => {
    const correctAnswer = this.props.correctAnswer //string
    const boolean = this.props.answer //true or false
    if (boolean === false) {   //IDEA: CAN WE USE ANOTHER ACTION IN AN IF STATEMENT
      this.props.dispatch({
        type: 'SHOW_CORRECT_ANSWER',
        payload: correctAnswer
      })
    }
  }
  render() {
    console.log(this.props.answer)
    if (this.props.answer) {
      return (<div><p>{this.props.correctAnswer}</p></div>)
    }
    return null
  }

}

const mapStateToProps = (state) => {
  return {
    answer: state.answerBoolean,
  }
}


export default connect(mapStateToProps)(ShowCorrectAnswer)
