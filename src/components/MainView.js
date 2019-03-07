import * as React from 'react'
import {connect} from 'react-redux'
import ShowCorrectAnswer from '../actions/ShowCorrectAnswer'
import { levelUpGetBreeds } from '../actions/levelUpAction'

class MainView extends React.Component {

  getHint = (answerString)=> {
    if(this.props.shownBreedList.includes(answerString)) return

    return `Hint: The name starts with: ${answerString[0]}`
  }




 handleClick = (event) => {
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
   })

   if(this.props.streak !==0 && Number.isInteger(this.props.streak/9)){
     // the number can be adjest on when level up (do the amount of clicks minus 1)
    this.props.dispatch(levelUpGetBreeds())
      
    this.props.dispatch({
      type:'LEVEL_COUNT',
      payload: 1
    })

    this.props.dispatch({
      type:'RESET_STREAK',
      payload: 0
    })


  }
  
    } else {

        this.props.dispatch({
          type:'INCORRECT_ANSWER',
          payload: false
       })

       this.props.dispatch({
         type:'SHOW_CORRECT_ANSWER'
      })
		} }

	render(){
    if(this.props.correctAnswer === undefined) return <h1>Loading</h1>
    return(
      <div className='mainView'>
        <div className='breedImage'>
          <img src={this.props.image} alt=''/>
          </div>
            <span>Breed Name</span>
            <span>{this.getHint(this.props.correctAnswer)}</span>
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
  console.log(state, 'state now')
    return {
        state,
        streak: state.performanceBar.streak,
        shownBreedList: state.shownBreeds,
        answerBoolean: state.answerBoolean

    }
}

export default connect(mapStateToProps)(MainView)
