import * as React from 'react'
import {connect} from 'react-redux'
import ShowCorrectAnswer from '../actions/ShowCorrectAnswer'
// import KeyboardEventHandler from 'react-keyboard-event-handler';

class MainView extends React.Component {

  getHint = (answerString)=> {
    if(this.props.shownBreedList.includes(answerString)) return

    return `Hint: The name starts with: ${answerString[0]}`
  }


// handleKeyPress = () => {

// }

 handleClick = (event) => {
  // One single event triggers multiple dispatches on Redux store. In this case Tonia's answerBoolean and Duc's performance bar are both updated. REMEMBER: type's name should be identical!!!
  setTimeout(this.props.nextQuestion, 2000)

  const elValue = event.target.getAttribute('value')
  const correctAnswer = this.props.correctAnswer

  this.props.dispatch({
    type:'HINT_SHOWN_FOR_BREED',
    payload: this.props.correctAnswer
  })

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
    console.log(this.props.hello, 'is this something?')
    if(this.props.correctAnswer === undefined) return <h1>Loading</h1>
    return(
      <div className='mainView'>
        <div className='breedImage'>
          <img src={this.props.image} alt=''/>
          </div>
            <span>Breed Name</span>
            <span>{this.getHint(this.props.correctAnswer)}</span>
            {/* <div>key detected: {this.props.eventKey}</div> */}
            {/* <KeyboardEventHandler handleKeys={['up', 'down', 'enter/return']} onKeyEvent={(key, e) => console.log(`do something upon keydown event of ${key}`)}> */}
            <ul>
              <li value={this.props.answer1} onClick={this.handleClick}><button autoFocus={true}>{this.props.answer1}</button></li>
              <li value={this.props.answer2} onClick={this.handleClick}><button>{this.props.answer2}</button></li>
              <li value={this.props.answer3} onClick={this.handleClick}><button>{this.props.answer3}</button></li>
              </ul>
            {/* </KeyboardEventHandler> */}
            
            <ShowCorrectAnswer correctAnswer={this.props.correctAnswer} answerBoolean={this.props.answerBoolean}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
  console.log(state, 'state now')
    return {
        state,

        shownBreedList: state.shownBreeds,
        answerBoolean: state.answerBoolean

    }
}

export default connect(mapStateToProps)(MainView)
