import { connect } from 'react-redux'
import React, {Component} from 'react'
export const SHOW_CORRECT_ANSWER = 'SHOW_CORRECT_ANSWER'


class ShowCorrectAnswer extends Component {

  componentDidMount() {
    this.whenWrongClick()
  }

  whenWrongClick = () => {
    // const correctAnswer = this.props.correctAnswer //string
    // const boolean = this.props.answer //true or false
    // if (boolean === false) {
    //   this.setState({ answer: null  })
    //   console.log(this.state.answer, 'Iamstateanswer')
    //   this.props.dispatch({
    //     type: 'SHOW_CORRECT_ANSWER',
    //     payload: correctAnswer
    //   })
    // }
  }

  shouldDisplayCorrectAnswer(){
    return this.props.answer !== null && !this.props.answer.state
  }

  render() {
    console.log(this.props.answer)
    console.log(this.state)
    if (this.props.answer) {
      return (<div><p>{this.props.correctAnswer}</p></div>)
    }
    return null
  }

}

const mapStateToProps = (state) => {
  return {
    answer: state.showCorrectAnswer
  }
}

export default connect(mapStateToProps)(ShowCorrectAnswer)
