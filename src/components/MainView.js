import * as React from 'react'
import {connect} from 'react-redux'

class MainView extends React.Component {
    
 handleClick = (event) => {
    // One single event triggers multiple dispatches on Redux store. In this case Tonia's answerBoolean and Duc's performance bar are both updated. REMEMBER: type's name should be identical!!!
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
       }
      )  
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
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(MainView)
