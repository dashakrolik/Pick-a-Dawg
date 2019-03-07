import * as React from 'react'
import {connect} from 'react-redux'
import ShowCorrectAnswer from '../actions/ShowCorrectAnswer'

class MainView extends React.Component {

 handleClick = (event) => {
  // One single event triggers multiple dispatches on Redux store. In this case Tonia's answerBoolean and Duc's performance bar are both updated. REMEMBER: type's name should be identical!!!
  setTimeout(this.props.nextQuestion, 2000)

  const elValue = event.target.getAttribute('value')
  const correctAnswer = this.props.correctAnswer

  if(correctAnswer === elValue){
    this.props.dispatch({
      type:'CORRECT_ANSWER',
      payload: true
    }
    )} else {
        this.props.dispatch({
          type:'INCORRECT_ANSWER',
          payload: false
       })

       this.props.dispatch({
         type:'SHOW_CORRECT_ANSWER'
      })
		} }

	render(){
    return(
      <div className='mainView'>
        <div className='breedImage'>
          <img src={this.props.image} alt=''/>
          </div>
            <span>Breed Name</span>
            <span>Hint</span>
            <ul>
              <li value={this.props.answer1} onClick={this.handleClick}>{this.props.answer1}</li>
              <li value={this.props.answer2} onClick={this.handleClick}>{this.props.answer2}</li>
              <li value={this.props.answer3} onClick={this.handleClick}>{this.props.answer3}</li>
            </ul>
            <ShowCorrectAnswer correctAnswer={this.props.correctAnswer} answerBoolean={this.props.answerBoolean}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        state,
        answerBoolean: state.answerBoolean
    }
}

export default connect(mapStateToProps)(MainView)
